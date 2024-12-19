// 1. Definuj triedu Auto:
// - Vytvor konštruktor, ktorý nastaví meno auta, pozíciu a rýchlosť
// - Pridaj metódu 'move', ktorá posunie auto o náhodnú hodnotu podľa jeho rýchlosti
// - Pridaj metódu 'getPosition', ktorá vráti aktuálnu pozíciu auta

// 2. Vytvor inštancie dvoch áut s rôznymi menami a rýchlosťami

// 3. Simuluj preteky v cykle:
// - V cykle sa striedavo hýbu obidve autá (pre každý krok sa posunú o náhodný počet jednotiek, závislé od ich rýchlosti)
// - Po každom kroku vypíš aktuálnu pozíciu oboch áut
// - Pretekajte, kým jedno z áut neprejde cieľovú čiaru (napr. 100 jednotiek)


class Car {
    constructor(name, health, speed) {
        this.name = name;
        this.health = health;
        this.speed = speed;
    }

    attack(car) {
        car.takeDamage(this.speed);
    }

    takeDamage(damage) {
        if (this.health > 1) {
            this.health -= damage;
        }
        console.log(`Audi: ${this.name} has ${this.health}`);
        console.log(`Seat: ${this.name} has ${this.health}`);
    }
    //
    // attack(car) {
    //     car.takeDamage(this.attack_speed);
    // }
    //
    isAlive() {
        if(this.health <= 0) {
            return false;

        } else {
            return true;
        }
    }
}

//Metoda na kotrolu rychlosti


//Metodika na kontrolu, či je auto naživu





let car1 = new Car("Audi",100,70);
let car2 = new Car("Seat",100,65);

console.log(car1);
console.log(car2);

console.log(`Car 1: ${car1.name}, ${car1.health}, ${car1.speed}`);
console.log(`Car 2: ${car2.name}, ${car2.health}, ${car2.speed}`);

while (car1.isAlive() && car2.isAlive()) {
    car1.attack(car2);
    car2.attack(car1);


}

if(car1.isAlive() && car2.isAlive()) {
    console.log(`${car1.name} is victorious!`);
    console.log(`${car2.name} is victorious!`);


} else {
    console.log(`${car1.name} is defeated!`);
    console.log(`${car2.name} is defeated!`);

}