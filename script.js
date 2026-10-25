// ============================================
// GET FORM
// ============================================

const form = document.getElementById("predictionForm");

// Circumference of the gauge circle (r = 58): 2 * PI * 58
const GAUGE_CIRCUMFERENCE = 364.4;


// ============================================
// COUNT-UP HELPER
// ============================================

function animateCount(el, to, duration = 700) {

    const start = 0;
    const startTime = performance.now();

    function tick(now) {

        const progress = Math.min(
            (now - startTime) / duration,
            1
        );

        const eased = 1 - Math.pow(1 - progress, 3);

        const value = Math.round(
            start + (to - start) * eased
        );

        el.innerText = value + "%";

        if (progress < 1) {
            requestAnimationFrame(tick);
        }
    }

    requestAnimationFrame(tick);
}


// ============================================
// FORM SUBMIT
// ============================================

form.addEventListener("submit", async function(event) {

    // Stop page from refreshing
    event.preventDefault();


    // ========================================
    // GET INPUT VALUES
    // ========================================

    const radius = Number(
        document.getElementById("radius_mean").value
    );

    const texture = Number(
        document.getElementById("texture_mean").value
    );

    const perimeter = Number(
        document.getElementById("perimeter_mean").value
    );

    const area = Number(
        document.getElementById("area_mean").value
    );

    const concavePoints = Number(
        document.getElementById("concave_points_mean").value
    );


    // ========================================
    // CREATE DATA OBJECT
    // ========================================

    const data = {

        radius_mean: radius,

        texture_mean: texture,

        perimeter_mean: perimeter,

        area_mean: area,

        concave_points_mean: concavePoints

    };


    // ========================================
    // BUTTON
    // ========================================

    const button =
        document.getElementById("predictButton");

    const buttonLabel =
        button.querySelector(".predict-button-label");

    buttonLabel.innerText = "Scanning…";

    button.disabled = true;


    try {

        // ====================================
        // SEND DATA TO FLASK
        // ====================================

        const response = await fetch(
            "/predict",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            }
        );


        // ====================================
        // GET RESPONSE
        // ====================================

        const result = await response.json();


        // ====================================
        // CHECK SUCCESS
        // ====================================

        if (!result.success) {

            alert(
                "Prediction error: "
                + result.error
            );

            return;
        }


        // ====================================
        // HIDE DEFAULT
        // ====================================

        document
            .getElementById("defaultResult")
            .classList.add("hidden");


        // ====================================
        // SHOW RESULT
        // ====================================

        document
            .getElementById("predictionResult")
            .classList.remove("hidden");


        // ====================================
        // GET RESULT ELEMENTS
        // ====================================

        const predictionText =
            document.getElementById("predictionText");

        const resultIcon =
            document.getElementById("resultIcon");

        const confidence =
            document.getElementById("confidence");

        const benignProbability =
            document.getElementById("benignProbability");

        const malignantProbability =
            document.getElementById("malignantProbability");

        const benignBar =
            document.getElementById("benignBar");

        const malignantBar =
            document.getElementById("malignantBar");

        const gaugeArc =
            document.getElementById("gaugeArc");


        // ====================================
        // DISPLAY PREDICTION
        // ====================================

        predictionText.innerText =
            result.prediction;


        // ====================================
        // DISPLAY PROBABILITY BARS
        // ====================================

        benignProbability.innerText =
            result.benign_probability + "%";

        malignantProbability.innerText =
            result.malignant_probability + "%";


        // ====================================
        // CONFIDENCE + THEME COLOR
        // ====================================

        let confidenceValue;
        let themeColor;

        if (result.prediction === "Benign") {

            confidenceValue = result.benign_probability;
            themeColor = "#34d399";

            resultIcon.innerText = "●";
            resultIcon.style.color = themeColor;
            predictionText.style.color = themeColor;

        } else {

            confidenceValue = result.malignant_probability;
            themeColor = "#fb7185";

            resultIcon.innerText = "▲";
            resultIcon.style.color = themeColor;
            predictionText.style.color = themeColor;

        }

        animateCount(confidence, confidenceValue);


        // ====================================
        // GAUGE RING
        // ====================================

        const offset =
            GAUGE_CIRCUMFERENCE
            - (confidenceValue / 100) * GAUGE_CIRCUMFERENCE;

        gaugeArc.style.stroke = themeColor;
        gaugeArc.style.strokeDashoffset = GAUGE_CIRCUMFERENCE;

        // Force reflow so the transition replays on every scan
        void gaugeArc.getBoundingClientRect();

        gaugeArc.style.strokeDashoffset = offset;


        // ====================================
        // PROGRESS BARS
        // ====================================

        benignBar.style.width =
            result.benign_probability + "%";

        malignantBar.style.width =
            result.malignant_probability + "%";


    } catch (error) {

        console.error(error);

        alert(
            "Could not connect to the Python server."
        );

    }


    // ========================================
    // RESET BUTTON
    // ========================================

    buttonLabel.innerText = "Run Diagnostic Scan";

    button.disabled = false;

});