function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    console.log("Mic ready");
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3CfJMjMLR/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
      console.error(error);  
    }
    else{
        console.log(results);
        ram_num_red = Math.floor(Math.random() * 255) + 1;
        ram_num_gre = Math.floor(Math.random() * 255) + 1;
        ram_num_blu = Math.floor(Math.random() * 255) + 1;
        
        document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Acuraccy - " + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_confidence").style.color = "rgb(" + ram_num_red + ", " + ram_num_gre + ", " + ram_num_blu + ")";
        document.getElementById("result_label").style.color = "rgb(" + ram_num_red + ", " + ram_num_gre + ", " + ram_num_blu + ")"; 

        img = document.getElementById("alien1");
        img1 = document.getElementById("alien2");
        img2 = document.getElementById("alien3");
        img3 = document.getElementById("alien4");

        if (results[0].label == "CLAP") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';          
        }
        else if(results[0].label == "fast claps") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';          
        }
        else if (results[0].label == "tear paper") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';          
        }
        else if (results[0].label == "Background Noise") {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';          
        }
        else if (results[0].label == "table bang") {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.gif';          
        }
    
    }
}