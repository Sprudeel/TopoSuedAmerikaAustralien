/////////////////////////////////
//             GAME            //
/////////////////////////////////


// Random Int for random question
var randomint;

// Array containing the answers
var arrayAnswers = [];

// Var of currentAnswer
var currentAnswer = "noch nicht definiert ;)"

// Last Random Int (no repeats)
var last = 1;

// Var that tells if it started
var started = false;

// Var for Timer
var going = false;

// Correct Counter
var correct = 0;

// Max Questions for Learn Mode
var length;

// Vars for Button Delay
var delay = 1000;
var lastClick = 0;


// Subject
var subject;
var mode;



var AallMere = ["Arafurasee", "Golf von Carpentaria", "Grosse Australische Bucht", "Grosses Barrier Riff", "Indischer Ozean", "Korallenmeer", "Ostaustralstrom", "Pazifischer Ozean", "Tasmansee", "Torres-Strasse", "Westaustralstrom"];

var AminMere = ["Golf von Carpentaria", "Grosse Australische Bucht", "Grosses Barrier Riff", "Indischer Ozean", "Korallenmeer", "Pazifischer Ozean", "Tasmansee", "Torres-Strasse"];


var AallInseln = ["Kap York", "Kap-York-Halbinsel", "Neuguinea", "Neukaledonien", "Nordinsel", "Südinsel", "Tasmanien"];

var AminInseln = ["Kap York", "Kap-York-Halbinsel", "Neuguinea", "Neukaledonien", "Nordinsel", "Südinsel", "Tasmanien"];


var AallBerge = ["Central Range", "Great Dividing Range", "Macdonnellkette", "Mount Cook", "Mount Kosciusko", "Puncak Jaya", "Ruapehu", "Sudirmangebirge", "Südliche Alpen"];

var AminBerge = ["Great Dividing Range", "Mount Cook", "Mount Kosciusko", "Südliche Alpen"];


var AallFlusse = ["Darling", "Murray"];

var AminFlusse = ["Darling", "Murray"];


var AallSpecial = ["Arnhemland", "Gibsonwüste", "Grosse Sandwüste", "Grosse Victoriawüste", "Grosses Artesisches Becken", "Kimberley-Plateau", "Nullarborebene", "Simpsonwüste"];

var AminSpecial = ["Arnhemland", "Gibsonwüste", "Grosse Sandwüste", "Grosse Victoriawüste", "Simpsonwüste"];


var AallStaaten = ["Australien", "Fidschi", "Kiribati", "Marshallinseln", "Mikronesien", "Nauru", "Neuseeland", "Osttimor", "Palau", "Papua-Neuguinea", "Salomonen", "Samoa", "Tonga", "Tuvalu", "Vanuatu"];

var AminStaaten = ["Australien", "Fidschi", "Neuseeland", "Osttimor", "Papua-Neuguinea"];


var AallStadte = ["Adelaide", "Alice-Springs", "Brisbane", "Cairns", "Canberra", "Darwin", "Hobart", "Melbourne", "Perth", "Sydney", "Suva", "Bairiki", "Dalap-Uliga-Darrit", "Palikir", "Yaren", "Auckland", "Christchurch", "Dunedin", "Wellington", "Dili", "Koror", "Port Moresby", "Honiara", "Apia", "Nuku'alofa", "Vaiaku", "Port Vila"];

var AminStadte = ["Adelaide", "Alice-Springs", "Brisbane", "Cairns", "Canberra", "Darwin", "Hobart", "Melbourne", "Perth", "Sydney", "Auckland", "Christchurch", "Dunedin", "Wellington", "Port Moresby"];




var SallStaaten = ["Argentinien", "Bolivien", "Brasilien", "Chile", "Ecuador", "Franz. Guayana", "Guyana", "Kolumbien", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"];
var SminStaaten = ["Argentinien", "Bolivien", "Brasilien", "Chile", "Ecuador", "Franz. Guayana", "Guyana", "Kolumbien", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"];


var SallStadte = ["Buenos Aires", "Córdoba", "Mendoza", "Rosario", "La Paz", "Sucre", "Santa Cruz", "Belém", "Belo Horizonte", "Brasilia", "Fortaleza", "Manaus", "Recife", "Rio de Janeiro", "Salvador", "São Paulo", "Santiago de Chile", "Valparaíso", "Guayaquil", "Quito", "Cayenne", "Georgetown", "Barranquilla", "Bogotá", "Cali", "Cartagena", "Medellin", "Asunción", "Arequipa", "Callao", "Lima", "Trujillo", "Paramaribo", "Montevideo", "Barquisimeto", "Caracas", "Maracaibo", "Valencia"];
var SminStadte = ["Buenos Aires", "Córdoba", "Mendoza", "Rosario", "La Paz", "Sucre", "Belém", "Belo Horizonte", "Brasilia", "Fortaleza", "Manaus", "Recife", "Rio de Janeiro", "Salvador", "São Paulo", "Santiago de Chile", "Guayaquil", "Quito", "Cayenne", "Georgetown", "Bogotá", "Cali", "Cartagena", "Medellin", "Asunción", "Lima", "Paramaribo", "Montevideo", "Caracas", "Maracaibo"];


var SallMeere = ["Atlantischer Ozean", "Brasilienstrom", "Humboldt-Strom", "Karibisches Meer", "Pazifischer Ozean", "Rio de la Plata", "Süd-Aequatorialstrom"];
var SminMeere = ["Atlantischer Ozean", "Humboldt-Strom", "Karibisches Meer", "Pazifischer Ozean", "Rio de la Plata"];


var SallInseln = ["Falkland-Inseln", "Feuerland", "Galápagos-Inseln", "Kap Hoorn"];
var SminInseln = ["Falkland-Inseln", "Feuerland", "Kap Hoorn"];


var SallBerge = ["Aconcagua", "Anden", "Bergland von Guayana", "Brasilianisches Bergland", "Chimborazo", "Cotopaxi"];
var SminBerge = ["Aconcagua", "Anden", "Bergland von Guayana", "Brasilianisches Bergland"];

var SminFlusse = ["Amazonas", "Paraguay", "Paraná", "Orinoco", "Rio São Francisco", "Titicaca-See"];
var SallFlusse = ["Amazonas", "Paraguay", "Paraná", "Orinoco", "Rio São Francisco", "Titicaca-See"];

var SallSpecial = ["Altiplano", "Amazonasbecken", "Atacama Wüste", "Gran Chaco", "Mato Grosso", "Pampa", "Patagonien"];
var SminSpecial = ["Altiplano", "Amazonasbecken", "Atacama Wüste", "Gran Chaco", "Mato Grosso", "Pampa", "Patagonien"];

// Check which Hash is in place

if(location.hash == "") {
    location.hash = "#australien";
} else if(location.hash === "#suedamerika") {
            document.getElementById(4000).innerHTML = "Topo Australien";
            document.getElementById(6000).innerHTML = "Topo Südamerika";
            document.getElementById(1000).src = "images/empty2.png";
            document.getElementById(1000).style.height = "60vh";
            document.getElementById(1000).style.width = "auto";
            document.getElementById(0).style.backgroundImage = "url('images/bg2.jpg')"
            document.getElementById(0).style.backgroundPositionY = "-45vh";
            resetAll();
}


function setMode(inputmode, buttonId) {

    

    // Reset Timer on Left Side
    resetTimer();

    // set Correct counter back to 1
    counter = 1;
    correct = 0;

    // Reset Correctly Solved List
    document.getElementById(500).innerHTML = "<p id='502' style='color: red; text-align: center;'>keine</p><p id=501></p>";
    document.getElementById(333).innerHTML = "Korrekt gelöst";

    // set all buttons to normal
    document.getElementById(101).style.backgroundColor = "white";
    document.getElementById(102).style.backgroundColor = "white";
    document.getElementById(103).style.backgroundColor = "white";

    // fill clicked button
    document.getElementById(buttonId).style.backgroundColor = "#6cb104";

    // set the mode in var
    mode = inputmode;

    // Start game if a Subject has been selected
    if(subject != null) {
        Game();
    }

    // Reset Game Started Value if Game has Started
    if(started == true) {
        started = false;
    }

    // Start Section for Speed Mode
    if(started === false && mode === "speed" && subject != null) {

        // Set Started to True
        started = true;

        // Hide Menu
        hideMenu();

        // Hide Timer Controls
        document.getElementById(555).style.display = "none";
        document.getElementById(556).style.display = "none";

        // Ste Text Overlay
        document.getElementById("overlay").style.display = "block";
        document.getElementById("overlay").innerHTML = "<p class='textoverlay2'>3</p>";


        // display 3
        setTimeout(() => {
            document.getElementById("overlay").innerHTML = "<p class='textoverlay2'>2</p>";
        }, 1000);

        // display 2
        setTimeout(() => {
            document.getElementById("overlay").innerHTML = "<p class='textoverlay2'>1</p>";
        }, 2000);

        // display 1
        setTimeout(() => {
            document.getElementById("overlay").innerHTML = "<p class='textoverlay2'>GO!</p>";
        }, 3000);

        // display GO
        setTimeout(() => {
            document.getElementById("overlay").style.display = "none";
            startTimer();
        }, 3300);

        
    }

    
    // Return the selected Mode and if game started
    return mode, started, arrayAnswers;
}

function setSubject(inputsubject, buttonId) {
    
     // Reset Timer on Left Side
     resetTimer();

     // Reset Correct Counter
     counter = 1;
     correct = 0;
 
     // Reset Correctly Solved List
     document.getElementById(500).innerHTML = "<p id='502' style='color: red; text-align: center;'>keine</p><p id=501></p>";
 
     // Set all Buttons back to normal
     for (let i = 1; i < 8; i++) {
         document.getElementById("20" + i).style.backgroundColor = "white";
     }
 
     // Fill Clicked Button
     document.getElementById(buttonId).style.backgroundColor = "#2d73f3";
 
     // set the subject in var
     subject = inputsubject;
 

    if (location.hash === "#australien") {
        if(document.getElementById(2004).checked) {
            switch(inputsubject) {
                case "stadte":  
                    arrayAnswers = AminStadte;
                    break;
                case "staaten":  
                    arrayAnswers = AminStaaten;
                    break;
                case "flusse":
                    arrayAnswers = AminFlusse;
                    break;
                case "inseln":
                    arrayAnswers = AminInseln;
                    break;
                case "berge":
                    arrayAnswers = AminBerge;
                    break;
                case "meere":
                    arrayAnswers = AminMere;
                    break;
                case "special":
                    arrayAnswers = AminSpecial;
                    break;
            }
        } else if(!document.getElementById(2004).checked) {
            switch(inputsubject) {
                case "stadte":  
                    arrayAnswers = AallStadte;
                    break;
                case "staaten":  
                    arrayAnswers = AallStaaten;
                    break;
                case "flusse":
                    arrayAnswers = AallFlusse;
                    break;
                case "inseln":
                    arrayAnswers = AallInseln;
                    break;
                case "berge":
                    arrayAnswers = AallBerge;
                    break;
                case "meere":
                    arrayAnswers = AallMere;
                    break;
                case "special":
                    arrayAnswers = AallSpecial;
                    break;
            }
        }
    } else if (location.hash == "#suedamerika") {

        if(document.getElementById(2004).checked) {
            switch(inputsubject) {
                case "stadte":  
                    arrayAnswers = SminStadte;
                    break;
                case "staaten":  
                    arrayAnswers = SminStaaten;
                    break;
                case "flusse":
                    arrayAnswers = SminFlusse;
                    break;
                case "inseln":
                    arrayAnswers = SminInseln;
                    break;
                case "berge":
                    arrayAnswers = SminBerge;
                    break;
                case "meere":
                    arrayAnswers = SminMeere;
                    break;
                case "special":
                    arrayAnswers = SminSpecial;
                    break;
            }
        } else if(!document.getElementById(2004).checked) {
            switch(inputsubject) {
                case "stadte":  
                    arrayAnswers = SallStadte;
                    break;
                case "staaten":  
                    arrayAnswers = SallStaaten;
                    break;
                case "flusse":
                    arrayAnswers = SallFlusse;
                    break;
                case "inseln":
                    arrayAnswers = SallInseln;
                    break;
                case "berge":
                    arrayAnswers = SallBerge;
                    break;
                case "meere":
                    arrayAnswers = SallMeere;
                    break;
                case "special":
                    arrayAnswers = SallSpecial;
                    break;
        }
    }
}
 


    
    
    // Set Length var for Correctly Solved Board
    length = arrayAnswers.length;
    

    // Start Game if Mode has been set
    if(mode != null) {
        Game();
    }

    

    // Reset Game Started Value if Game has Started
    if(started == true) {
        started = false;
    }

    if(started === false && mode === "speed" && subject != null) {
        started = true;
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

        
    }
    

    // Return Values
    return subject, arrayAnswers, started, length;
}
var aaaa;
function Game() {
    
    if(hnujzhj == true) {
        window.alert("2te Hürde gemeistert!");
        aaaa = true;
    }
    // Show Timer Controls
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

        // Set Loading Image
        if(location.hash === "#australien") {
        document.getElementById(1000).src = "images/loading.jpg";
        } else {
            document.getElementById(1000).src = "images/loading2.jpg";
        }
        
        // Choose Random Answer
        randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

        // Make Sure it does not repeat itself ;)
        if(randomNumber === last) {
            randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

            if(randomNumber == last) {
                randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
            }
        }



        // Set current Answers Var for CheckSolution
        currentAnswer = arrayAnswers[randomNumber - 1];

        // Set Last Var to new Answers for next run
        last = randomNumber;

        // Set Picture Name Var to change ä ü ö for more compatability!
        let picturename = currentAnswer;

        // change ae oe and ue to ä ö and ü
        if(picturename.includes("ä")) {
            picturename = picturename.replace("ä", "ae");
        } else if(picturename.includes("ö")) {
            picturename = picturename.replace("ö", "oe");
        } else if(picturename.includes("ü")) {
            picturename = picturename.replace("ü", "ue");
        } 


        // Set Image
        setTimeout(() => {
            if(location.hash == "#australien") {
                document.getElementById(1000).src = "images/" + subject + "/" +  picturename + ".jpg"
            } else if(location.hash === "#suedamerika") {
                document.getElementById(1000).src = "images/samerika/" + subject + "/" +  picturename + ".jpg"
            }
        }, 200); 
        
        

        

        return last, randomNumber, currentAnswer;

    } else if(mode == "speed") {

        
        // Hide Timer Controls
        document.getElementById(555).style.display = "none";
        document.getElementById(556).style.display = "none";
               
        // Set Loading Image
        if(location.hash === "#australien") {
            document.getElementById(1000).src = "images/loading.jpg";
        } else {
            document.getElementById(1000).src = "images/loading2.jpg";
        }
        
        // Choose Random Answer
        randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

        // Make Sure it does not repeat itself ;)
        if(randomNumber === last) {
            randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);

            if(randomNumber == last) {
                randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);
            }
        }


        // Set current Answers Var for CheckSolution
        currentAnswer = arrayAnswers[randomNumber - 1];

        // Set Last Var to new Answers for next run
        last = randomNumber;

        // Set Picture Name Var to change ä ü ö for more compatability!
        let picturename = currentAnswer;

        // change ae oe and ue to ä ö and ü
        if(picturename.includes("ä")) {
            picturename = picturename.replace("ä", "ae");
        } else if(picturename.includes("ö")) {
            picturename = picturename.replace("ö", "oe");
        } else if(picturename.includes("ü")) {
            picturename = picturename.replace("ü", "ue");
        } 

        // Set Image
        setTimeout(() => {
            if(location.hash === "#australien") {
                document.getElementById(1000).src = "images/" + subject + "/" +  picturename + ".jpg"
            } else if(location.hash === "#suedamerika") {
                document.getElementById(1000).src = "images/samerika/" + subject + "/" +  picturename + ".jpg"
            }
        }, 200); 
        

        // Start Var to True
        started = true;


        return started, last, randomNumber, currentAnswer;



    } else if (mode == "learn") {
        

        // check if everything has already been learned
        if(correct == length) {
            if(location.hash == "#australien") {
                document.getElementById(1000).src = "images/finished.jpg"
            } else if(location.hash === "#suedamerika") {
                document.getElementById(1000).src = "images/finished2.jpg"
            }
            document.getElementById(333).innerHTML = "Korrekt gelöst " + correct + "/" + length;
            return last, randomNumber, currentAnswer;
        }

        // Update Correct Counter
        document.getElementById(333).innerHTML = "Korrekt gelöst " + correct + "/" + length;



        // Set Loading Image
        if(location.hash === "#australien") {
            document.getElementById(1000).src = "images/loading.jpg";
            } else {
                document.getElementById(1000).src = "images/loading2.jpg";
            }

        randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);


        // Generate Random Question
        randomNumber = Math.floor(Math.random() * arrayAnswers.length + 1);


        // Set current Answers Var for CheckSolution
        currentAnswer = arrayAnswers[randomNumber - 1];

        // Set Last Var to new Answers for next run
        last = randomNumber;

        // Set Picture Name Var to change ä ü ö for more compatability!
        let picturename = currentAnswer;

        // change ae oe and ue to ä ö and ü
        if(picturename.includes("ä")) {
            picturename = picturename.replace("ä", "ae");
        } else if(picturename.includes("ö")) {
            picturename = picturename.replace("ö", "oe");
        } else if(picturename.includes("ü")) {
            picturename = picturename.replace("ü", "ue");
        } 

        // Set Started var to true
        started = true;


        // Set Question Image
        setTimeout(() => {
            if(location.hash == "#australien") {
                document.getElementById(1000).src = "images/" + subject + "/" +  picturename + ".jpg"
            } else if(location.hash === "#suedamerika") {
                document.getElementById(1000).src = "images/samerika/" + subject + "/" +  picturename + ".jpg"
            }
        }, 200); 

        

        return last, randomNumber, currentAnswer, started;
    }
}

// Check if Solution is Correct
function checkSolution() {

    if(jjjj > 4 && hnujzhj === true && aaaa === true && bdkj === true && document.getElementById(420).value.toLowerCase() === "carlo") {
        window.alert("Carlo Mode Activated!")
        document.getElementById(6000).innerHTML = "Carlo Mode";
        document.getElementById(0).style.backgroundImage = "url('images/funky.jpg')"
    }
    // If answer is correct go here
    if(currentAnswer.toLowerCase() == document.getElementById(420).value.toLowerCase()) {
        
        // Block Clicks while evaluation
        if (lastClick >= (Date.now() - delay)) {
            lastClick = Date.now();
            return lastClick;
        }
        lastClick = Date.now();

        // Set Box Shadows to Green
        document.getElementById(1000).style.boxShadow = "0px 0px 10px 10px #2aaf1eb2";
        document.getElementById(420).style.boxShadow = "0px 0px 10px 10px #2aaf1eb2";

        // Show Correct Answer on Correct Answer Board
        showCorrect(currentAnswer);


       
        // Update Correct Var
        correct++;

        // Start New Game
        setTimeout(() => {
            Game();
        }, 1000); 

        // Delete Last Question while in Learm mode
        if (mode == "learn") {
            arrayAnswers.splice((randomNumber - 1), 1);
    
            return arrayAnswers;
        }
        // If answer is incorrect
    } else {
        // Set Box Shadow to Red
        document.getElementById(1000).style.boxShadow = "0px 0px 10px 10px #b91313ce";
        document.getElementById(420).style.boxShadow = "0px 0px 10px 10px #b91313ce";
    }

    
}


function showSolution() {
    document.getElementById(222).className = "text";
    document.getElementById(222).innerHTML = currentAnswer;
}
var jjjj = 0;
function IAmHere() {

    if(jjjj > 4 && hnujzhj === true && aaaa === true && bdkj === true) {
        window.alert("4 Cool");
    } else {
        jjjj++;
    }
}






document.getElementById(400).style.display = "none";
document.getElementById(700).style.display = "none";
var bdkj;
// hide Menu
function hideMenu() {

    if(hnujzhj === true && aaaa === true) {
        window.alert("3te Hürde gemeistert!");
        bdkj = true;
    }
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
var ll = 0;
var hnujzhj = false
function whyamIHere() {
    if(ll > 5) {
        window.alert("Carlo Mode 1te Aktivierungs Hürde Überwunden!");
        hnujzhj = true
    } else {
        ll++;
    }
}



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
        

    // MAKE ENd SCREEN 

    let averagetime = (60.00 / correct).toFixed(2);
    var aneq = "Lorem Ipsum";

    document.getElementById("overlay").innerHTML = "<div class='textoverlay'><b class='end'><span class='material-icons md-18 '>celebration</span> Zeit um! <span class='material-icons md-18 '>celebration</span></b><br><br><div class='daten'>Gesammelte Daten:</div><div class='correct'>gesamte Zeit: 1min <br> Korrekt gelöst: " + correct + "<br> Ø Zeit pro Aufgabe: " + averagetime + " sec</div><br><div id='999' class='aneq'>" + aneq + "</div><button class='close' onclick='closeOverlay()'>Info schliessen</button> </div><canvas id='my-canvas'></canvas>";


    if(correct < 6) {
        document.getElementById(999).innerHTML = "Vielleicht solltest du noch ein wenig üben...";
        document.getElementById(999).style.color = "crimson";
    } else if(correct > 6 && correct < 10) {
        document.getElementById(999).innerHTML = "Du bist auf einem guten Weg!"
        document.getElementById(999).style.color = "orange";
    } else if(correct > 10 && correct < 15) {
        document.getElementById(999).innerHTML = "WOW! Du bist gut!"
        document.getElementById(999).style.color = "green";
    } else if(correct > 15) {
        document.getElementById(999).innerHTML = "UNFASSBAR! Du bist unaufhaltbar!"
        document.getElementById(999).style.color = "gold";
    }
    document.getElementById("overlay").style.display = "block";

    if(correct > 10) {
        var confettiSettings = { target: 'my-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }
    resetTimer();
    correct = 0;
    return correct;
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


function switchMode() {

    if(location.hash === "#australien") {

        // Change clicker button

        // Block Clicks while evaluation
        if (lastClick >= (Date.now() - (delay*4))) {
            lastClick = Date.now();
            return lastClick;
        }
        lastClick = Date.now();


        // Animation
        for (let i = 0; i < 10; i++) {
            document.getElementById(5000 + i).style.transform = "translateX(-100%)"
            document.getElementById(5000 + i).style.display = "block"
            
        }

        var animation = [
            {transform: "translateX(0%)"}
    
        ];
        var timing = {
            duration: 500,
            fill: 'forwards',
            iterations: 1
        }

        setTimeout(() => {document.getElementById(5000).animate(animation, timing);}, 500);
        setTimeout(() => {document.getElementById(5001).animate(animation, timing);}, 600);
        setTimeout(() => {document.getElementById(5002).animate(animation, timing);}, 700);
        setTimeout(() => {document.getElementById(5003).animate(animation, timing);}, 800);
        setTimeout(() => {document.getElementById(5004).animate(animation, timing);}, 900);
        setTimeout(() => {document.getElementById(5005).animate(animation, timing);}, 1000);
        setTimeout(() => {document.getElementById(5006).animate(animation, timing);}, 1100);
        setTimeout(() => {document.getElementById(5007).animate(animation, timing);}, 1200);
        setTimeout(() => {document.getElementById(5008).animate(animation, timing);}, 1300);
        setTimeout(() => {document.getElementById(5009).animate(animation, timing);}, 1400);
        setTimeout(() => {document.getElementById(5010).animate(animation, timing);}, 1500);
        
        setTimeout(() => {
            document.getElementById(4000).innerHTML = "Topo Australien";
            document.getElementById(6000).innerHTML = "Topo Südamerika";
            document.getElementById(1000).src = "images/empty2.png";
            document.getElementById(1000).style.height = "60vh";
            document.getElementById(1000).style.width = "auto";
            document.getElementById(0).style.backgroundImage = "url('images/bg2.jpg')"
            document.getElementById(0).style.backgroundPositionY = "-45vh";
            resetAll();
            
            var animation2 = [
                {transform: "translateX(100%)"}
        
            ];
            var timing2 = {
                duration: 500,
                fill: 'forwards',
                iterations: 1
            }
            
            setTimeout(() => {document.getElementById(5000).animate(animation2, timing2);}, 500);
            setTimeout(() => {document.getElementById(5001).animate(animation2, timing2);}, 600);
            setTimeout(() => {document.getElementById(5002).animate(animation2, timing2);}, 700);
            setTimeout(() => {document.getElementById(5003).animate(animation2, timing2);}, 800);
            setTimeout(() => {document.getElementById(5004).animate(animation2, timing2);}, 900);
            setTimeout(() => {document.getElementById(5005).animate(animation2, timing2);}, 1000);
            setTimeout(() => {document.getElementById(5006).animate(animation2, timing2);}, 1100);
            setTimeout(() => {document.getElementById(5007).animate(animation2, timing2);}, 1200);
            setTimeout(() => {document.getElementById(5008).animate(animation2, timing2);}, 1300);
            setTimeout(() => {document.getElementById(5009).animate(animation2, timing2);}, 1400);
            setTimeout(() => {document.getElementById(5010).animate(animation2, timing2);}, 1500);


            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    document.getElementById(5000 + i).style.display = "none";
                    document.getElementById(5000 + i).style.transform = "translateX(0%)";
                }
            }, 5000);
            
        location.hash = "#suedamerika"

        }, 2000)
    } else if (location.hash === "#suedamerika") {

            // Change clicker button

        // Block Clicks while evaluation
        if (lastClick >= (Date.now() - (delay*4))) {
            lastClick = Date.now();
            return lastClick;
        }
        lastClick = Date.now();


        // Animation
        for (let i = 0; i < 10; i++) {
            document.getElementById(5000 + i).style.transform = "translateX(-100%)"
            document.getElementById(5000 + i).style.display = "block"
            
        }

        var animation = [
            {transform: "translateX(0%)"}
    
        ];
        var timing = {
            duration: 500,
            fill: 'forwards',
            iterations: 1
        }

        setTimeout(() => {document.getElementById(5000).animate(animation, timing);}, 500);
        setTimeout(() => {document.getElementById(5001).animate(animation, timing);}, 600);
        setTimeout(() => {document.getElementById(5002).animate(animation, timing);}, 700);
        setTimeout(() => {document.getElementById(5003).animate(animation, timing);}, 800);
        setTimeout(() => {document.getElementById(5004).animate(animation, timing);}, 900);
        setTimeout(() => {document.getElementById(5005).animate(animation, timing);}, 1000);
        setTimeout(() => {document.getElementById(5006).animate(animation, timing);}, 1100);
        setTimeout(() => {document.getElementById(5007).animate(animation, timing);}, 1200);
        setTimeout(() => {document.getElementById(5008).animate(animation, timing);}, 1300);
        setTimeout(() => {document.getElementById(5009).animate(animation, timing);}, 1400);
        setTimeout(() => {document.getElementById(5010).animate(animation, timing);}, 1500);
        
        setTimeout(() => {
            document.getElementById(4000).innerHTML = "Topo Südamerika";
            document.getElementById(6000).innerHTML = "Topo Australien";
            document.getElementById(1000).src = "images/empty.png";
            document.getElementById(1000).style.width = "50vw";
            document.getElementById(1000).style.height = "auto";
            document.getElementById(0).style.backgroundImage = "url('images/bg.jpg')"
            document.getElementById(0).style.backgroundPositionY = "0vh";
            resetAll();

            
            

            var animation2 = [
                {transform: "translateX(100%)"}
        
            ];
            var timing2 = {
                duration: 500,
                fill: 'forwards',
                iterations: 1
            }
            
            setTimeout(() => {document.getElementById(5000).animate(animation2, timing2);}, 500);
            setTimeout(() => {document.getElementById(5001).animate(animation2, timing2);}, 600);
            setTimeout(() => {document.getElementById(5002).animate(animation2, timing2);}, 700);
            setTimeout(() => {document.getElementById(5003).animate(animation2, timing2);}, 800);
            setTimeout(() => {document.getElementById(5004).animate(animation2, timing2);}, 900);
            setTimeout(() => {document.getElementById(5005).animate(animation2, timing2);}, 1000);
            setTimeout(() => {document.getElementById(5006).animate(animation2, timing2);}, 1100);
            setTimeout(() => {document.getElementById(5007).animate(animation2, timing2);}, 1200);
            setTimeout(() => {document.getElementById(5008).animate(animation2, timing2);}, 1300);
            setTimeout(() => {document.getElementById(5009).animate(animation2, timing2);}, 1400);
            setTimeout(() => {document.getElementById(5010).animate(animation2, timing2);}, 1500);


            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    document.getElementById(5000 + i).style.display = "none";
                    document.getElementById(5000 + i).style.transform = "translateX(0%)";

                }
            }, 3500);

            location.hash = "#australien"

        }, 2000)

        return mode, subject, randomint, arrayAnswers, currentAnswer, last, started, going, correct
    }
}

function resetAll() {
    mode = null;
            subject = null;
            randomint = null;
            arrayAnswers = [];
            currentAnswer = null;
            last = 1;
            started = false;
            going = false;
            correct = 0;
            document.getElementById(222).className = " ";
            document.getElementById(222).innerHTML = "<button class='submit' onclick='showSolution()'>Lösung Anzeigen</button>";
            document.getElementById(500).innerHTML = "<p id='502' style='color: red; text-align: center;'>keine</p><p id=501></p>";
            for (let i = 1; i < 8; i++) {
                document.getElementById("20" + i).style.backgroundColor = "white";
            }
            document.getElementById(333).innerHTML = "Korrekt gelöst";

            // set all button to normal
            document.getElementById(101).style.backgroundColor = "white";
            document.getElementById(102).style.backgroundColor = "white";
            document.getElementById(103).style.backgroundColor = "white";
            return mode, subject, randomint, arrayAnswers, currentAnswer, last, started, going, correct
}

function closeOverlay() {document.getElementById("overlay").style.display = "none";}