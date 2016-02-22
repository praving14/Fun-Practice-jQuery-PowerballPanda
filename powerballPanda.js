

// Generate A random number
function genSingleNumberForBall(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//---------------------------------------MY VARIABLES-------------------------------
// All the variables used in the website
var pandaImage = document.getElementById('pimage');
var num1 = document.getElementById('whiteball1');
var num2 = document.getElementById('whiteball2');
var num3 = document.getElementById('whiteball3');
var num4 = document.getElementById('whiteball4');
var num5 = document.getElementById('whiteball5');
var red1 = document.getElementById('powerball');
var ulist = document.getElementById('listOfGeneratedNumbers');
var ppnum = document.getElementById('powerplay');
var remainday = document.getElementById('remainingday');
var remainhour = document.getElementById('remaininghour');
var remainmin = document.getElementById('remainingminute');
var remainsec = document.getElementById('remainingsecond');
    

//array of the number List
// ---------------------------------------ARRAY OF ALL MY ORDERS-------------------------------
var numberList = [];
var counter = numberList.length;
// we create an object inside the array orderList where each object will have the necessay information about an order

// Generate an array of randomly generated numbers arrange them in ascending order except the last one;
function generatepowerBallNumbers() {
	numberList[counter] = [6];
	console.log("counter number"+counter);
    var i =0;
    while (i < 5) {
        var number = genSingleNumberForBall(1, 69);
        for (var j = 0 ; j < i ; j++) {
            if (number == numberList[counter][j]) {
                number = genSingleNumberForBall(1, 69);
            }
			//I need to make sure that this is properly checked and it doesnot produce same number more than once 
        }
        numberList[counter][i] = number;
        i = i + 1;
    }
    numberList[counter].sort(function (a, b) { return a - b });
    numberList[counter][5] = genSingleNumberForBall(1, 26);
}

/*
* -----------------------------------------GENERATE NEW POWERBALL NUMBERS--------------------------------------
*/
var everyMinuteGenerator = setTimeout(function(){
    generatepowerBallNumbers();
    num1.innerHTML = numberList[counter][0];
    num2.innerHTML = numberList[counter][1];
    num3.innerHTML = numberList[counter][2];
    num4.innerHTML = numberList[counter][3];
    num5.innerHTML = numberList[counter][4];
    red1.innerHTML = numberList[counter][5];
    ppnum.innerHTML = genSingleNumberForBall(1, 5);
    addtothelist();
}, 60000);


/*
* -------------------ADD THE PAST GENERATED NUMBERS IN THE LIST ON THE LEFT--------------------------------------
*/
function addtothelist() {
    var list = '';
    for (var i = 0; i < 5; i++) {
        list += numberList[counter][i] + ' ';
    }
    list = list + ' Powerball:  ' + numberList[counter][5];
    var row = document.createElement("li");
    var node = document.createTextNode(list);
    row.appendChild(node);
    ulist.appendChild(row);
	counter =counter + 1;
	// Since I donot have a database i need to work on limited numbers to save and display
	
}


/*
* ---------------------------------------------COUNTDOWN TO DAWING DATE---------------------
*/
var drawingday = new Date("Wed Feb 24 2016 22:59:00 GMT-0500 (Eastern Standard Time)");
function getRemaining(drawingday, today) {
    time = Date.parse(drawingday) - Date.parse(today);
    return{
        'day': Math.floor(time/ (1000*60*60*24)),
        'hour': Math.floor((time / (1000 * 60 * 60)) % 24),
        'minutes': Math.floor((time / 1000 / 60) % 60),
        'seconds': Math.floor((time / 1000) % 60),
        }
}
var timers = setInterval(function(){
	    t = getRemaining(drawingday, new Date());
        remainday.innerText = t.day;
        remainhour.innerText = t.hour;
        remainmin.innerText = t.minutes;
        remainsec.innerText = t.seconds;
		if( t.day == 0 && t.hour == 0 && t.minutes == 0 && t.seconds == 0){
			alert("It's powerball drawing time. Good luck Everyone!!");
			var ttoday = new Date();
			if (ttoday.getDay() == 6){
				drawingday.setDate(drawingday.getDate() + 4 );
			} else if(ttoday.getDay() ==3){
				drawingday.setDate(drawingday.getDate() + 3 );
			}
			t = getRemaining(drawingday, new Date());
			// to make sure there is new date after every drawing
		}
		},1000);
		
