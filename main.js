function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    Video = createCapture(VIDEO);
    Video.hide();
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/SHJkYS6Qi/model.json", Model_Loaded)
}

function Model_Loaded() {
    console.log("Model Loaded");
}




function draw() {
    image(Video, 0, 0, 300, 300);
    classifier.classify(Video, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("object_result").innerHTML = results[0].label;
        document.getElementById("object_acurracy").innerHTML = results[0].confidence.toFixed(2);
    }
}