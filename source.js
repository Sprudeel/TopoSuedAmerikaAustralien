

/////////////////////////////////
//             GAME            //
/////////////////////////////////


var mode;
var subject;
var randomint;
var arrayAnswers = [];
var currentAnswer;
var last = 1;
var started = false;
var going = false;
var correct = 0;
var length;



var allMere = ["Arafurasee", "Golf von Carpentaria", "Grosse Australische Bucht", "Grosses Barrier Riff", "Indischer Ozean", "Korallenmeer", "Ostaustralstrom", "Pazifischer Ozean", "Tasmansee", "Torres-Strasse", "Westaustralstrom"];

var minMere = ["Golf von Carpentaria", "Grosse Australische Bucht", "Grosses Barrier Riff", "Indischer Ozean", "Korallenmeer", "Pazifischer Ozean", "Tasmansee", "Torres-Strasse"];


var allInseln = ["Kap York", "Kap-York-Halbinsel", "Neuguinea", "Neukaledonien", "Nordinsel", "Südinsel", "Tasmanien"];

var minInseln = ["Kap York", "Kap-York-Halbinsel", "Neuguinea", "Neukaledonien", "Nordinsel", "Südinsel", "Tasmanien"];


var allBerge = ["Central Range", "Great Dividing Range", "Macdonnellkette", "Mount Cook", "Mount Kosciusko", "Puncak Jaya", "Ruapehu", "Sudirmangebirge", "Südliche Alpen"];

var minBerge = ["Great Dividing Range", "Mount Cook", "Mount Kosciusko", "Südliche Alpen"];


var allFlusse = ["Darling", "Murray"];

var minFlusse = ["Darling", "Murray"];


var allSpecial = ["Arnhemland", "Gibsonwüste", "Grosse Sandwüste", "Grosse Victoriawüste", "Grosses Artesisches Becken", "Kimberley-Plateau", "Nullarborebene", "Simpsonwüste"];

var minSpecial = ["Arnhemland", "Gibsonwüste", "Grosse Sandwüste", "Grosse Victoriawüste", "Simpsonwüste"];


var allStaaten = ["Australien", "Fidschi", "Kiribati", "Marshallinseln", "Mikronesien", "Nauru", "Neuseeland", "Osttimor", "Palau", "Papua-Neuguinea", "Salomonen", "Samoa", "Tonga", "Tuvalu", "Vanuatu"];

var minStaaten = ["Australien", "Fidschi", "Neuseeland", "Osttimor", "Papua-Neuguinea"];


var allStadte = ["Adelaide", "Alice-Springs", "Brisbane", "Cairns", "Canberra", "Darwin", "Hobart", "Melbourne", "Perth", "Sydney", "Suva", "Bairiki", "Dalap-Uliga-Darrit", "Palikir", "Yaren", "Auckland", "Christchurch", "Dunedin", "Wellington", "Dili", "Koror", "Port Moresby", "Honiara", "Apia", "Nuku'alofa", "Vaiaku", "Port Vila"];

var minStadte = ["Adelaide", "Alice-Springs", "Brisbane", "Cairns", "Canberra", "Darwin", "Hobart", "Melbourne", "Perth", "Sydney", "Auckland", "Christchurch", "Dunedin", "Wellington", "Port Moresby"];



function setMode(inputmode, buttonId) {
    resetTimer();
    counter = 1;
    document.getElementById(500).innerHTML = "<p id='502' style='color: red; text-align: center;'>keine</p><p id=501></p>";

    // set all button to normal
    document.getElementById(101).style.backgroundColor = "white";
    document.getElementById(102).style.backgroundColor = "white";
    document.getElementById(103).style.backgroundColor = "white";

    document.getElementById(buttonId).style.backgroundColor = "#6cb104";
    // set the mode in var
    mode = inputmode;

    if(subject != null) {
        Game();
    }

    if(started == true) {
        startes = false;
    }
    return mode, started;
}

function setSubject(inputsubject, buttonId) {
    resetTimer();
    counter = 1;
    document.getElementById(500).innerHTML = "<p id='502' style='color: red; text-align: center;'>keine</p><p id=501></p>";
    for (let i = 1; i < 8; i++) {
        document.getElementById("20" + i).style.backgroundColor = "white";
    }

    document.getElementById(buttonId).style.backgroundColor = "#2d73f3";

    // set the subject in var
    subject = inputsubject;

    if(document.getElementById(2004).checked) {
        switch(inputsubject) {
            case "stadte":  
                arrayAnswers = minStadte;
                break;
            case "staaten":  
                arrayAnswers = minStaaten;
                break;
            case "flusse":
                arrayAnswers = minFlusse;
                break;
            case "inseln":
                arrayAnswers = minInseln;
                break;
            case "berge":
                arrayAnswers = minBerge;
                break;
            case "meere":
                arrayAnswers = minMere;
                break;
            case "special":
                arrayAnswers = minSpecial;
                break;
        }
    } else if(!document.getElementById(2004).checked) {
        switch(inputsubject) {
            case "stadte":  
                arrayAnswers = allStadte;
                break;
            case "staaten":  
                arrayAnswers = allStaaten;
                break;
            case "flusse":
                arrayAnswers = allFlusse;
                break;
            case "inseln":
                arrayAnswers = allInseln;
                break;
            case "berge":
                arrayAnswers = allBerge;
                break;
            case "meere":
                arrayAnswers = allMere;
                break;
            case "special":
                arrayAnswers = allSpecial;
                break;
        }
    }
    
    


    
    length = arrayAnswers.length;
    


    if(mode != null) {
        Game();
    }

    

    started = false;
    return subject, arrayAnswers, started, length;
}

function Game() {
    document.getElementById(555).style.display = "inline-block";
    document.getElementById(556).style.display = "inline-block";

    // Reset show Solution Button
    document.getElementById(222).className = " ";
    document.getElementById(222).innerHTML = "<button class='submit' onclick='showSolution()'>Lösung Anzeigen</button>";

    // Reset Box Shadows and Answer
    document.getElementById(1000).style.boxShadow = "0px 0px 3px 3px #0000006e";
    document.getElementById(420).style.boxShadow = "none";
    document.getElementById(420).value = "";

    // ENDLESS MODE
    if(mode === "endless") {
        document.getElementById(1000).src = "images/loading.jpg";
        
        randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

        if(randomNumber === last) {
            randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

            if(randomNumber == last) {
                randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
            }
        }
        currentAnswer = arrayAnswers[randomNumber - 1];
        last = randomNumber;
        let picturename = currentAnswer;

        // change ae oe and ue to ä ö and ü
        if(picturename.includes("ä")) {
            picturename = picturename.replace("ä", "ae");
        } else if(picturename.includes("ö")) {
            picturename = picturename.replace("ö", "oe");
        } else if(picturename.includes("ü")) {
            picturename = picturename.replace("ü", "ue");
        } 


        setTimeout(() => {
            document.getElementById(1000).src = "images/" + subject + "/" +  picturename + ".jpg"
        }, 200); 
        
        

        

        return last, randomNumber, currentAnswer;

    } else if(mode == "speed") {

        // START SCREEN
        if(started == false) {
            hideMenu();
            document.getElementById(555).style.display = "none";
            document.getElementById(556).style.display = "none";
            document.getElementById("overlay").style.display = "block";
            document.getElementById("overlay").innerHTML = "<p class='textoverlay2'>3</p>";

            setTimeout(() => {
                document.getElementById("overlay").innerHTML = "<p class='textoverlay2'>2</p>";
            }, 1000);

            setTimeout(() => {
                document.getElementById("overlay").innerHTML = "<p class='textoverlay2'>1</p>";
            }, 2000);

            setTimeout(() => {
                document.getElementById("overlay").innerHTML = "<p class='textoverlay2'>GO!</p>";
            }, 3000);

            setTimeout(() => {
                document.getElementById("overlay").style.display = "none";
                startTimer();
            }, 3300);

            started = true;
        }

        document.getElementById(1000).src = "images/loading.jpg";
        
        randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

        if(randomNumber === last) {
            randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

            if(randomNumber == last) {
                randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
            }
        }
        currentAnswer = arrayAnswers[randomNumber - 1];
        last = randomNumber;
        let picturename = currentAnswer;

        // change ae oe and ue to ä ö and ü
        if(picturename.includes("ä")) {
            picturename = picturename.replace("ä", "ae");
        } else if(picturename.includes("ö")) {
            picturename = picturename.replace("ö", "oe");
        } else if(picturename.includes("ü")) {
            picturename = picturename.replace("ü", "ue");
        } 


        setTimeout(() => {
            document.getElementById(1000).src = "images/" + subject + "/" +  picturename + ".jpg"
        }, 200); 
        
        

        

        return started, last, randomNumber, currentAnswer;



    } else if (mode == "learn") {
        


        if(correct == length) {
            document.getElementById(1000).src = "images/finish.jpg";
            document.getElementById(333).innerHTML = "Korrekt gelöst " + correct + "/" + length;
            return last, randomNumber, currentAnswer;
        }

        document.getElementById(333).innerHTML = "Korrekt gelöst " + correct + "/" + length;


        document.getElementById(1000).src = "images/loading.jpg";

        randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);


        currentAnswer = arrayAnswers[randomNumber - 1];
        last = randomNumber;
        let picturename = currentAnswer;

        // change ae oe and ue to ä ö and ü
        if(picturename.includes("ä")) {
            picturename = picturename.replace("ä", "ae");
        } else if(picturename.includes("ö")) {
            picturename = picturename.replace("ö", "oe");
        } else if(picturename.includes("ü")) {
            picturename = picturename.replace("ü", "ue");
        } 
        started = true;

        setTimeout(() => {
            document.getElementById(1000).src = "images/" + subject + "/" +  picturename + ".jpg"
        }, 200); 

        

        return last, randomNumber, currentAnswer, started;
    }
}

function checkSolution() {

    if(currentAnswer.toLowerCase() == document.getElementById(420).value.toLowerCase()) {
        
        document.getElementById(1000).style.boxShadow = "0px 0px 10px 10px #2aaf1eb2";
        document.getElementById(420).style.boxShadow = "0px 0px 10px 10px #2aaf1eb2";
        showCorrect(currentAnswer);
        correct++;

        setTimeout(() => {
            Game();
        }, 1000); 

        if (mode == "learn") {
            arrayAnswers.splice((randomNumber - 1), 1);
    
            return arrayAnswers;
        }
    } else {
        document.getElementById(1000).style.boxShadow = "0px 0px 10px 10px #b91313ce";
        document.getElementById(420).style.boxShadow = "0px 0px 10px 10px #b91313ce";
    }

    if (mode == "learn") {
        arrayAnswers.splice((randomNumber - 1), 1);

        return arrayAnswers;
    }

}


function showSolution() {
    // remove button
    document.getElementById(222).className = "text";
    document.getElementById(222).innerHTML = currentAnswer;
}








document.getElementById(400).style.display = "none";
document.getElementById(700).style.display = "none";

// hide Menu
function hideMenu() {
    var menu = document.getElementById(99);
    var animation = [
        {transform: "translateX(-100%)"}
    ];
    var timing = {
        duration: 500,
        fill: 'forwards',
        iterations: 1
    }
    menu.animate(animation, timing);
    setTimeout(function() { document.getElementById(400).style.display = "block"; }, 500);
}

function expandMenu() {
    var menu = document.getElementById(99);
    var animation = [
        {transform: "translateX(0%)"}
        
    ];
    var timing = {
        duration: 500,
        fill: 'forwards',
        iterations: 1
    }
    menu.animate(animation, timing);
    document.getElementById(400).style.display = "none";
}





function hideInfo() {
    var menu = document.getElementById(800);
    var animation = [
        {transform: "translateX(100%)"}
    ];
    var timing = {
        duration: 500,
        fill: 'forwards',
        iterations: 1
    }
    menu.animate(animation, timing);
    setTimeout(function() { document.getElementById(700).style.display = "block"; }, 500);
}

function expandInfo() {
    var menu = document.getElementById(800);
    var animation = [
        {transform: "translateX(0%)"}
        
    ];
    var timing = {
        duration: 500,
        fill: 'forwards',
        iterations: 1
    }
    menu.animate(animation, timing);
    document.getElementById(700).style.display = "none";
}










var counter = 1;
function showCorrect(name) {

    if(counter == 1) {
        document.getElementById(502).innerHTML = " ";
    }

    // Create a new Element to host all informations
    var container = document.getElementById(501);
    var p = document.createElement("p");
    p.id = counter;
    container.insertBefore(p, null);
    // Fill Element
    document.getElementById(counter).innerHTML = "<span class='material-icons md-18 png2 small'>check</span> " + name;
    

    counter++;
    return counter;
}




setInterval(() => {
    var date = new Date();
    var weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
    var months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

    var displaydate = weekdays[date.getDay()] + " " + date.getDate() + ". " + months[date.getMonth()] + " " + date.getFullYear() + "<br>" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); 

    document.getElementById(600).innerHTML = displaydate;
    
}, 10);





//############################//
//           TIMER            //
//############################//
const timer = document.getElementById(690);

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    } else {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    if(mode == "speed") {
        going = true;
        timer.innerHTML = hr + ':' + min + ':' + (60 -sec);
        if(min == 1) {
            stoptime = true;
            going = false;
            document.getElementById("overlay").style.display = "block";
            document.getElementById("overlay").innerHTML = "<p class='textoverlay'>Ende!<span class='material-icons md-18 '>celebration</span><br>Korrekt gelöst: " + correct + " <button class='close' onclick='closeOverlay()'>Info schliessen</button> </p>" 
            resetTimer();
        }
    } else {
        timer.innerHTML = hr + ':' + min + ':' + sec;
    }

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    stoptime = true;
    hr = 0;
    min = 0;
    sec = 0;

    return hr, min, sec;
}




// LISTENER
let input = document.querySelector('input');

document.addEventListener("keypress", function(event) {
    if(event.keyCode === 13) {
        checkSolution();
    }
})


function closeOverlay() {document.getElementById("overlay").style.display = "none";}