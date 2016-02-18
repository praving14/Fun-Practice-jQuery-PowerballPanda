

// Generate A random number
function genNumberForBall(min,max) {
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

//array of the number List
// ---------------------------------------ARRAY OF ALL MY ORDERS-------------------------------
var numberList = [];
var counter = numberList.length - 1;
// we create an object inside the array orderList where each object will have the necessay information about an order
numberList[counter] = [6];


// Generate an object
function generatepowerBallNumbers() {
    numberList[counter]
}

/*
* -----------------------------------------GENERATE NEW POWERBALL NUMBERS--------------------------------------
*/
pandaImage.addEventListener('click', function () {
    
});