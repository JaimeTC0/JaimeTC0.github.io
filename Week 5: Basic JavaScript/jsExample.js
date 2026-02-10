

let count = 0;

function tickUp(){
    //Add 1 to Counter variable
    document.getElementById("counter").innerText = count++;
}

function tickDown(){
    //Sub 1 to Counter variable
    document.getElementById("counter").innerText = count--;
}

function runForLoop(){
    let output = " ";
    for(let i = 0; i < count; i++){
        output = output + " " + i;
    }

    document.getElementById("forLoopResult").innerText = output;
}

function showOddNumbers(){
    let oddOutput = " ";
    for(let i = 0; i < count; i++){
        if(i%2 == 1){
            oddOutput = oddOutput + " " + i;
        }
    }

    document.getElementById("oddNumberResult").innerText = oddOutput;
}

function addMultiplesToArray(){
    let arrayOutput = [];
    for(let i = count; i > 4; i--){
        if(i%5 == 0){
            arrayOutput.push(i);
        }
    }
    console.log(arrayOutput);
}

function printCarObject(){
    let car = {};
    car.cType = document.getElementById("carType").value;
    car.cMPG = document.getElementById("carMPG").value;
    car.cColor = document.getElementById("carColor").value;

    console.log(car);
}

function loadCar(carNumber){
    let car = {};
    switch(carNumber){
        case 1:
            car = carObject1;
            break;
        case 2:
            car = carObject2;
            break;
        case 3:
            car = carObject3;
            break;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(colorNumber){
    let color;
    switch(colorNumber){
        case 1:
            color = "red";
            break;
        case 2:
            color = "green";
            break;
        case 3:
            color = "blue";
            break;
    }
    document.getElementById("styleParagraph").style.color = color;
}