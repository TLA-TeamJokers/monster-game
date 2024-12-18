// 1. Definuj triedu Auto:
// - Vytvor konštruktor, ktorý nastaví meno auta, pozíciu a rýchlosť
// - Pridaj metódu 'move', ktorá posunie auto o náhodnú hodnotu podľa jeho rýchlosti
// - Pridaj metódu 'getPosition', ktorá vráti aktuálnu pozíciu auta
class Car {
    constructor(name,position,speedStraight, speedCurves) {
        this.name = name;
        this.position = position;
        this.distance = 0;
        this.speedStraight = speedStraight;
        this.speedCurves = speedCurves;
    }

    move(trackPart) {
        if (trackPart === 'straight') {
            let racingLine = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
            let traveled = parseInt(this.speedStraight * (racingLine / 100));
            this.distance += traveled;
        }
        if (trackPart === 'curve') {
            let racingLine = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
            let traveled = parseInt(this.speedCurves * (racingLine / 100));
            this.distance += traveled;
        }
    }

    getPosition(car1, car2) {
        if (car1.distance > car2.distance) {
            car1.position = 1;
            car2.position = 2;
        }
        else if (car1.distance < car2.distance) {
            car1.position = 2;
            car2.position = 1;
        }
        console.log(`${car1.name} is now ${car1.position} and traveled ${car1.distance}`);
    }
}
// 2. Vytvor inštancie dvoch áut s rôznymi menami a rýchlosťami
let car1 = new Car('Ferrari', 1, 330, 270);
let car2 = new Car('McLaren', 2, 325, 280);

// 3. Simuluj preteky v cykle:
// - V cykle sa striedavo hýbu obidve autá (pre každý krok sa posunú o náhodný počet jednotiek, závislé od ich rýchlosti)
// - Po každom kroku vypíš aktuálnu pozíciu oboch áut
// - Pretekajte, kým jedno z áut neprejde cieľovú čiaru (napr. 100 jednotiek)
let monzaTrack = ['straight', 'straight', 'curve', 'curve','straight', 'curve','straight','curve','curve','straight','curve','straight','straight','curve','curve','straight'];
let monzaLength = 10000;
let trackPart = 0;

while (car1.distance < monzaLength && car2.distance < monzaLength ) {
    if (car1.position > car2.position) {
        car1.move(monzaTrack[trackPart]);
        car2.move(monzaTrack[trackPart]);
    } else {
        car2.move(monzaTrack[trackPart]);
        car1.move(monzaTrack[trackPart]);
    }
    car1.getPosition(car1, car2);
    car2.getPosition(car2, car1);
    trackPart = (trackPart + 1) % monzaTrack.length;
}

if (car1.position === 1) {
    console.log(`${car1.name} is the Winner!`);
} else {
    console.log(`${car2.name} is the Winner!`);
}
