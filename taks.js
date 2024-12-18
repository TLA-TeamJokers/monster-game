// 1. Definuj triedu Auto:
// - Vytvor konštruktor, ktorý nastaví meno auta, pozíciu a rýchlosť
// - Pridaj metódu 'move', ktorá posunie auto o náhodnú hodnotu podľa jeho rýchlosti
// - Pridaj metódu 'getPosition', ktorá vráti aktuálnu pozíciu auta

// 2. Vytvor inštancie dvoch áut s rôznymi menami a rýchlosťami

// 3. Simuluj preteky v cykle:
// - V cykle sa striedavo hýbu obidve autá (pre každý krok sa posunú o náhodný počet jednotiek, závislé od ich rýchlosti)
// - Po každom kroku vypíš aktuálnu pozíciu oboch áut
// - Pretekajte, kým jedno z áut neprejde cieľovú čiaru (napr. 100 jednotiek)

const prompt = require('prompt-sync')();

//class setup
class Car {
    constructor(name, position, speed) {
        this.name = name;
        this.position = position;
        this.speed = speed;
    }
    move() {
        this.position += Math.floor(Math.random()*this.speed);
    }
    getPosition() {
        return this.position;
    }
}
////////////////////////////////////////////////////////////////////

// function for car creation
function createCar() {
    let name = prompt("Enter the car's name: ")
    let speed = parseInt(prompt("Enter the car's speed: "), 10)

    while (isNaN(speed) || speed <= 0) {
        console.log("Please input a valid integer as the car's speed!")
        speed = parseInt(prompt("Enter the car's speed: "), 10)
    }

    return new Car(name, 0, speed)
}
////////////////////////////////////////////////////////////////////

console.log(`******************\n     WELCOME!\n******************\nFirst, let's create two cars that will face off each other in a race!`);
//two cars maker
let car1 = createCar();
let car2 = createCar();
////////////////////////////////////////////////////////////////////

console.log(`\nThe first challenger car is ${car1.name} with a speed of ${car1.speed} km/s. The second challenger car is ${car2.name} with a speed of ${car2.speed} km/s.\n\n*********************\n LET THE RACE BEGIN!\n*********************`);
console.log("Both our cars have set off! The first to reach 100 km goal will be the winner!");

// the race loop
while (car1.getPosition() <100 && car2.getPosition() < 100 ) {
    console.log("Both of the cars are riding.... ");
    car1.move();
    car2.move();
    console.log(`The position of ${car1.name} is ${car1.getPosition()} km. The position of ${car2.name} is ${car2.getPosition()} km.`);
}
////////////////////////////////////////////////////////////////////

console.log("****************************\nTHE RACE HAS BEEN CONCLUDED!\n****************************");

// winner determination
if (car1.getPosition() >= 100 && car2.getPosition() >= 100) {
    console.log(`It's a tie!`);
} else if (car1.getPosition() >= 100) {
    console.log(`The winner of the race is ${car1.name}!`);
} else if (car2.getPosition() >= 100) {
    console.log(`The winner of the race is ${car2.name}!`);
}
////////////////////////////////////////////////////////////////////