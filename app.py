from flask import Flask, request, jsonify, send_file
import numpy as np
import joblib

# =========================================================
# CREATE FLASK APP
# =========================================================

app = Flask(__name__)


# =========================================================
# LOAD MODEL AND SCALER
# =========================================================

model = joblib.load("logistic_regression_model.pkl")
scaler = joblib.load("scaler.pkl")


# =========================================================
# HTML PAGE
# =========================================================

@app.route("/")
def home():
    return send_file("index.html")


# =========================================================
# CSS FILE
# =========================================================

@app.route("/style.css")
def css():
    return send_file("style.css", mimetype="text/css")


# =========================================================
# JAVASCRIPT FILE
# =========================================================

@app.route("/script.js")
def javascript():
    return send_file("script.js", mimetype="application/javascript")


# =========================================================
# PREDICTION API
# =========================================================

@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.get_json()

        # Get input values
        radius_mean = float(data["radius_mean"])
        texture_mean = float(data["texture_mean"])
        perimeter_mean = float(data["perimeter_mean"])
        area_mean = float(data["area_mean"])
        concave_points_mean = float(
            data["concave_points_mean"]
        )

        # Same feature order used during training
        input_data = np.array([[
            radius_mean,
            texture_mean,
            perimeter_mean,
            area_mean,
            concave_points_mean
        ]])

        # Scale input
        input_scaled = scaler.transform(input_data)

        # Prediction
        prediction = model.predict(input_scaled)[0]

        # Probability
        probability = model.predict_proba(input_scaled)[0]

        benign_probability = probability[0] * 100
        malignant_probability = probability[1] * 100

        # Result
        if prediction == 1:
            result = "Malignant"
        else:
            result = "Benign"

        return jsonify({
            "success": True,
            "prediction": result,
            "benign_probability": round(
                benign_probability, 2
            ),
            "malignant_probability": round(
                malignant_probability, 2
            )
        })

    except Exception as e:

        return jsonify({
            "success": False,
            "error": str(e)
        }), 400


# =========================================================
# RUN SERVER
# =========================================================

if __name__ == "__main__":
    app.run(debug=True)