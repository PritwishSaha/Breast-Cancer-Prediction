# 🩺 Breast Cancer Prediction

### Machine Learning | Python | Flask | Scikit-learn | Web Development

A machine-learning-powered web application that predicts breast cancer classification using Logistic Regression. The application combines a trained machine learning model with an interactive frontend built using HTML, CSS, and JavaScript.

🌐 **Live Demo:** [Try Breast Cancer Prediction](https://breast-cancer-prediction-cg2m.onrender.com)

📂 **GitHub Repository:** [PritwishSaha/Breast-Cancer-Prediction](https://github.com/PritwishSaha/Breast-Cancer-Prediction)

---

## 📌 Table of Contents

* [Overview](#-overview)
* [Live Application](#-live-application)
* [Project Objectives](#-project-objectives)
* [Key Features](#-key-features)
* [Technology Stack](#-technology-stack)
* [How It Works](#-how-it-works)
* [Machine Learning Model](#-machine-learning-model)
* [Input Features](#-input-features)
* [Project Structure](#-project-structure)
* [Installation and Setup](#-installation-and-setup)
* [Running the Application](#-running-the-application)
* [API Documentation](#-api-documentation)
* [Deployment on Render](#-deployment-on-render)
* [Future Improvements](#-future-improvements)
* [Disclaimer](#-disclaimer)
* [Author](#-author)

---

## 🔍 Overview

Breast cancer is one of the most common cancers affecting women worldwide. Machine learning can help researchers explore patterns in medical datasets and develop classification models for educational and research purposes.

This project demonstrates how a trained machine learning model can be integrated into a web application to generate predictions from numerical input features.

The application uses **Logistic Regression**, a supervised machine learning algorithm, to classify input data into two categories:

* **Benign:** The model predicts the benign class.
* **Malignant:** The model predicts the malignant class.

Users can enter five numerical measurements through the web interface. The Flask backend processes the inputs, applies the saved feature scaler, and passes the transformed data to the trained model.

The application then returns the predicted class and associated model-estimated probabilities.

### 🎯 Project Goal

To demonstrate the complete workflow of a machine learning application, from model inference and data preprocessing to frontend integration and cloud deployment.

---

## 🌐 Live Application

**Try the deployed application here:**

### 👉 [Launch Breast Cancer Prediction](https://breast-cancer-prediction-cg2m.onrender.com)

The application is deployed on Render and can be accessed through a web browser.

The deployed application includes:

* An interactive input form.
* A Flask-powered prediction backend.
* A pre-trained Logistic Regression model.
* A saved feature-scaling object.
* Prediction results and probability displays.

---

## 🎯 Project Objectives

The main objectives of this project are:

1. Apply supervised machine learning to a binary classification problem.
2. Integrate a trained Logistic Regression model into a Flask application.
3. Apply consistent feature scaling during prediction.
4. Build an interactive frontend using HTML, CSS, and JavaScript.
5. Connect the frontend to a backend prediction API.
6. Return machine learning predictions through JSON responses.
7. Deploy the application as a publicly accessible web service using Render.

---

## ✨ Key Features

### 🤖 Machine Learning Integration

Uses a pre-trained Logistic Regression model to classify input measurements.

### 📊 Feature Scaling

Uses a saved scaler to transform input features before prediction.

### 🖥️ Interactive Web Interface

Provides a user interface built with HTML, CSS, and JavaScript.

### ⚡ Flask Backend

Processes incoming requests and connects the frontend to the machine learning model.

### 🔌 Prediction API

Accepts numerical input through an HTTP POST request and returns prediction results in JSON format.

### 📈 Probability Display

Displays model-estimated probabilities for the predicted classes.

### ☁️ Cloud Deployment

Deployed on Render, making the application accessible online.

---

## 🛠️ Technology Stack

| Technology          | Purpose                                    |
| ------------------- | ------------------------------------------ |
| Python              | Backend programming and machine learning   |
| Flask               | Web framework and prediction API           |
| NumPy               | Numerical data processing                  |
| Scikit-learn        | Machine learning and feature preprocessing |
| Logistic Regression | Binary classification                      |
| Joblib              | Loading serialized model and scaler files  |
| HTML5               | Webpage structure                          |
| CSS3                | Styling and responsive presentation        |
| JavaScript          | User interaction and API communication     |
| Gunicorn            | Production WSGI server                     |
| Render              | Cloud deployment                           |
| Git & GitHub        | Version control and source code hosting    |

---

## ⚙️ How It Works

The application follows a simple machine learning inference pipeline.

```text
                 USER
                   |
                   v
       +-----------------------+
       |   Web Interface       |
       |    HTML + CSS         |
       |     JavaScript        |
       +-----------------------+
                   |
                   v
       +-----------------------+
       |   Flask Backend       |
       |      app.py           |
       +-----------------------+
                   |
                   v
       +-----------------------+
       |   Input Validation    |
       |   Numerical Features  |
       +-----------------------+
                   |
                   v
       +-----------------------+
       |   Saved Scaler        |
       |      scaler.pkl       |
       +-----------------------+
                   |
                   v
       +-----------------------+
       |  Logistic Regression  |
       | logistic_regression_  |
       |      model.pkl        |
       +-----------------------+
                   |
                   v
       +-----------------------+
       | Prediction and        |
       | Class Probabilities   |
       +-----------------------+
                   |
                   v
       +-----------------------+
       | JSON API Response     |
       +-----------------------+
                   |
                   v
       +-----------------------+
       | Display Result in UI  |
       +-----------------------+
```

### Step-by-Step Workflow

**Step 1: User Input**

The user enters five numerical measurements through the web interface.

**Step 2: Frontend Processing**

JavaScript collects the input values and sends them to the Flask backend as JSON.

**Step 3: Backend Processing**

Flask receives the request through the `/predict` endpoint and prepares the input data.

**Step 4: Feature Scaling**

The saved scaler transforms the input measurements using the preprocessing configuration established during model training.

**Step 5: Model Prediction**

The trained Logistic Regression model predicts the classification and estimates the probabilities associated with its classes.

**Step 6: API Response**

Flask returns the prediction results in JSON format.

**Step 7: Result Display**

JavaScript processes the response and displays the prediction and associated probabilities on the webpage.

---

## 🧠 Machine Learning Model

### Logistic Regression

Logistic Regression is a supervised learning algorithm commonly used for binary classification.

In this project, the trained model predicts one of two classes:

* Benign
* Malignant

The model is loaded from a serialized file rather than being retrained whenever the application starts.

### Feature Scaling

The application also loads a saved scaler.

Scaling is important because the input measurements can have different numerical ranges. The same preprocessing transformation used during training must be applied during inference.

### Saved Model Files

| File                            | Purpose                                      |
| ------------------------------- | -------------------------------------------- |
| `logistic_regression_model.pkl` | Stores the trained Logistic Regression model |
| `scaler.pkl`                    | Stores the fitted feature-scaling object     |

Both files are required for the prediction workflow.

### Prediction Output

The application returns:

* Predicted classification.
* Estimated probability for the benign class.
* Estimated probability for the malignant class.

These probabilities represent the model's estimates, not guaranteed diagnostic accuracy or a patient's actual medical risk.

---

## 📊 Input Features

The model receives five numerical features.

| Feature               | Description                                                                 |
| --------------------- | --------------------------------------------------------------------------- |
| `radius_mean`         | Mean radius measurement                                                     |
| `texture_mean`        | Mean texture measurement                                                    |
| `perimeter_mean`      | Mean perimeter measurement                                                  |
| `area_mean`           | Mean area measurement                                                       |
| `concave_points_mean` | Mean number or measure of concave contour points, as defined by the dataset |

### Input Processing

The five measurements are collected in the order expected by the trained model and scaler.

The backend converts the values into a numerical array, applies the saved scaler, and generates a prediction.

**Important:** The inputs must use the same definitions, units, feature order, and preprocessing conventions as the training data. Arbitrary values may produce misleading results.

---

## 📁 Project Structure

The repository is organized as follows:

```text
Breast-Cancer-Prediction/
│
├── app.py
│   └── Flask backend and prediction API
│
├── index.html
│   └── Frontend structure and input form
│
├── style.css
│   └── Website styling and visual presentation
│
├── script.js
│   └── Form handling and API communication
│
├── logistic_regression_model.pkl
│   └── Trained Logistic Regression model
│
├── scaler.pkl
│   └── Saved feature scaler
│
├── data.csv
│   └── Project dataset
│
├── Untitled.ipynb
│   └── Jupyter Notebook for experimentation
│
├── requirements.txt
│   └── Python dependencies
│
└── README.md
    └── Project documentation
```

---

## 💻 Installation and Setup

Follow these instructions to run the project locally.

### Prerequisites

Install the following:

* Python
* Git
* A code editor such as Visual Studio Code

### Step 1: Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/PritwishSaha/Breast-Cancer-Prediction.git
```

Navigate to the project directory:

```bash
cd Breast-Cancer-Prediction
```

### Step 2: Create a Virtual Environment

Create an isolated Python environment:

```bash
python -m venv venv
```

Activate it on Windows PowerShell:

```powershell
.\venv\Scripts\Activate.ps1
```

For Windows Command Prompt:

```cmd
venv\Scripts\activate
```

For macOS or Linux:

```bash
source venv/bin/activate
```

### Step 3: Install Dependencies

Install the required Python packages:

```bash
pip install -r requirements.txt
```

The `requirements.txt` file should include:

```text
Flask
numpy
joblib
scikit-learn
gunicorn
```

### Step 4: Verify the Required Files

Ensure the following files exist in the project root:

```text
app.py
index.html
style.css
script.js
logistic_regression_model.pkl
scaler.pkl
requirements.txt
```

The saved model and scaler must be available at the file paths expected by the backend.

---

## ▶️ Running the Application

Start the Flask application locally.

### Option 1: Run with Python

```bash
python app.py
```

This uses the development server configured in `app.py`.

Open the local address displayed in your terminal, commonly:

```text
http://127.0.0.1:5000
```

### Option 2: Run with Gunicorn

On systems where Gunicorn is installed, you can use:

```bash
gunicorn app:app
```

This starts the application using Gunicorn instead of Flask's development server.

---

## 🔌 API Documentation

The application exposes a prediction endpoint through Flask.

### Prediction Endpoint

| Property     | Value                                |
| ------------ | ------------------------------------ |
| Endpoint     | `/predict`                           |
| HTTP Method  | `POST`                               |
| Content Type | `application/json`                   |
| Purpose      | Generate a classification prediction |

### Example Request

Send a POST request to:

```text
https://breast-cancer-prediction-cg2m.onrender.com/predict
```

Example JSON payload:

```json
{
  "radius_mean": 14.0,
  "texture_mean": 20.0,
  "perimeter_mean": 90.0,
  "area_mean": 600.0,
  "concave_points_mean": 0.05
}
```

These values demonstrate the expected request structure. They are not a medically validated test case.

### Example Response Structure

The response should follow the JSON structure implemented in `app.py`.

For example:

```json
{
  "success": true,
  "prediction": "Benign",
  "benign_probability": 95.5,
  "malignant_probability": 4.5
}
```

**Note:** This is an illustrative response, not an actual model result. The exact response fields and probability mapping depend on the implementation in `app.py`.

### Test the API with Python

You can test the deployed endpoint using the `requests` library:

```python
import requests

url = "https://breast-cancer-prediction-cg2m.onrender.com/predict"

payload = {
    "radius_mean": 14.0,
    "texture_mean": 20.0,
    "perimeter_mean": 90.0,
    "area_mean": 600.0,
    "concave_points_mean": 0.05
}

response = requests.post(url, json=payload, timeout=60)

print("Status Code:", response.status_code)
print("Response:", response.text)
```

Install `requests` locally if needed:

```bash
pip install requests
```

---

## ☁️ Deployment on Render

This project is deployed using Render as a Python web service.

### Deployment Configuration

| Setting           | Value                             |
| ----------------- | --------------------------------- |
| Service Type      | Web Service                       |
| Language          | Python                            |
| Build Command     | `pip install -r requirements.txt` |
| Start Command     | `gunicorn app:app`                |
| Deployment Source | GitHub repository                 |

### Deployment Workflow

1. Push the project files to GitHub.
2. Create a new Web Service on Render.
3. Connect the GitHub repository.
4. Configure the build and start commands.
5. Deploy the application.
6. Check the deployment logs.
7. Open the assigned public URL and test the prediction workflow.

### Live Deployment

The deployed application is available at:

**https://breast-cancer-prediction-cg2m.onrender.com**

Render's free web services may spin down after a period of inactivity, so the first request after inactivity can take longer.

---

## 🚀 Future Improvements

Potential improvements include:

* [ ] Add input validation and clearer error messages.
* [ ] Verify and document the model's class-label mapping.
* [ ] Evaluate the model using precision, recall, F1-score, and a confusion matrix.
* [ ] Add automated unit tests for the prediction endpoint.
* [ ] Improve mobile responsiveness and accessibility.
* [ ] Add a model evaluation report.
* [ ] Add a prediction history feature, with appropriate privacy protections.
* [ ] Add structured logging and production error handling.
* [ ] Pin compatible dependency versions for reproducible deployment.
* [ ] Add screenshots and a demonstration video to the repository.

---

## ⚠️ Disclaimer

**This project is intended for educational and machine learning demonstration purposes only.**

The predictions generated by this application are not a substitute for professional medical advice, diagnosis, or treatment.

The model has not been established as a clinically validated diagnostic system. Its predictions and probability estimates should not be used to make medical decisions.

Always consult a qualified healthcare professional regarding medical concerns.

---

## 👨‍💻 Author

**Pritwish Saha**

Computer Science and Engineering — Artificial Intelligence and Machine Learning

### Connect with Me

* **GitHub:** [@PritwishSaha](https://github.com/PritwishSaha)
* **LinkedIn:** [Pritwish Saha](https://www.linkedin.com/in/pritwish-saha-b49604362/)
* **Portfolio:** [Personal Portfolio](https://infotact.in/pritwish-hk5nxp)

---

## ⭐ Support

If you find this project interesting, consider giving the repository a ⭐ on GitHub.

Feedback and suggestions for improvement are welcome.

**Built with Python, Machine Learning, Flask, and Web Technologies.**
