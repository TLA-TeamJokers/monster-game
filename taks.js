// 1. Definuj triedu Auto:
// - Vytvor konštruktor, ktorý nastaví meno auta, pozíciu a rýchlosť
// - Pridaj metódu 'move', ktorá posunie auto o náhodnú hodnotu podľa jeho rýchlosti
// - Pridaj metódu 'getPosition', ktorá vráti aktuálnu pozíciu auta

class Car {
    constructor(producer, model, speed) {
        this.producer = producer;
        this.model = model;
        this.speed = speed;
        this.position = 0;

    }

    takeMove() {
        const distance = Math.floor(Math.random() * (this.speed / 10)) + 1;
        this.position += distance;
    }
}

// 2. Vytvor inštancie dvoch áut s rôznymi menami a rýchlosťami

let car1 = new Car('Volkswagen', 'Golf', 200);
let car2 = new Car('BMW', 'HAtchback', 230);


// 3. Simuluj preteky v cykle:
// - V cykle sa striedavo hýbu obidve autá (pre každý krok sa posunú o náhodný počet jednotiek, závislé od ich rýchlosti)
// - Po každom kroku vypíš aktuálnu pozíciu oboch áut
// - Pretekajte, kým jedno z áut neprejde cieľovú čiaru (napr. 100 jednotiek)


const finishLine = 100;
let circuit = 1;

while (car1.position < finishLine && car2.position < finishLine) {
console.log(`Round ${circuit}:`);

car1.takeMove();
car2.takeMove();

console.log(`${car1.producer} ${car1.model} je na pozícii ${car1.position} km!`);
console.log(`${car2.producer} ${car2.model} je na pozícii ${car2.position} km!`);

console.log('  ');

circuit++;
}

if (car1.position >= finishLine && car2.position >= finishLine) {
console.log('Obe autá prešli cieľovú čiaru súčasne!');
} else if (car1.position >= finishLine) {
console.log(`${car1.producer} ${car1.model} vyhráva preteky!`);
} else {
console.log(`${car2.producer} ${car2.model} vyhráva preteky!`);
}