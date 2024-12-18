// 1. Definuj triedu Gladiátor
// - Vytvor konštruktor, ktorý nastaví meno, zdravie a silu útoku
// - Pridaj metódu=funkci 'attack' na útok, ktorá spôsobí poškodenie nepriateľovi
// - Pridaj metódu 'takeDamage' na prijatie poškodenia a aktualizáciu zdravia
// - Pridaj metódu 'isAlive', ktorá vracia, či je gladiátor nažive

class Gladiator {
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }

    // Metóda na útok
    attack(monster) {
        if (this.health >= 1) {
            monster.takeDamage(this.attackPower)
        }
    }

    // Metóda na prijatie poškodenia
    takeDamage(damage) {
        if (this.health > 1) {
            this.health -= damage;
        }

        console.log(`Gladiator: ${this.name} has ${this.health} health left.`);
    }

    // Metóda na kontrolu, či je gladiátor nažive
    isAlive() {
        if (this.health <= 0) {
            return false;
        } else {
            return true;
        }
    }
}

// 2. Definuj triedu Príšera
// - Vytvor konštruktor, ktorý nastaví meno, zdravie a silu útoku
// - Pridaj metódu 'attack' na útok, ktorá spôsobí poškodenie gladiátorovi
// - Pridaj metódu 'takeDamage' na prijatie poškodenia a aktualizáciu zdravia
// - Pridaj metódu 'isAlive', ktorá vracia, či je príšera nažive

class Monster {
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }
    attack(Gladiator) {
        if (this.health >= 1) {
            Gladiator.takeDamage(this.attackPower)
        }
    }
    takeDamage(damage) {
        if (this.health > 1) {
            this.health -= damage;
        }
        console.log(`Monster: ${this.name} has ${this.health} health left.`);
    }
    isAlive() {
        if (this.health <= 0) {
            return false;
        } else {
            return true;
        }
    }
}

// 3. Vytvor inštancie (objekty) pre gladiátora a príšeru s vhodnými hodnotami
// - Gladiátor bude mať meno, zdravie a silu útoku
// - Príšera bude mať meno, zdravie a silu útoku

// 4. Implementuj bojový cyklus:
// - Používaj cyklus (napr. while), ktorý striedavo útočí gladiátor a príšera
// - Po každom útoku kontroluj, či je niekto mŕtvy (pomocou isAlive)
// - Ak je niekto mŕtvy, koniec boja a vypíš víťaza

// 5. Na konci boja vypíš, kto vyhral



let glad1 = new Gladiator("Romanus", 100, 10);
let glad2 = new Gladiator("Kodus", 150, 5);
// console.log("These are the gladiators:")
// console.log(glad1);
// console.log(glad2);
// console.log(`Gladiator 1: ${glad1.name}, Health: ${glad1.health}, Attack power: ${glad1.attackPower}`);

let monster1 = new Monster("Potvora", 20, 2);
let monster2 = new Monster("Zloduch", 15, 3);
// console.log("These are the monsters:")
// console.log(monster1);
// console.log(monster2);
// console.log(`Monster 1: ${monster1.name}, Health: ${monster1.health}, Attack power: ${monster1.health}`);

console.log("THE FIGHT BEGINS!");
while (monster1.isAlive() && glad1.isAlive()) {
    glad1.attack(monster1);
    monster1.attack(glad1);
}
if (glad1.isAlive()) {
    console.log(`Gladiator ${glad1.name} is victorious!`);
} else {
    console.log(`Monster ${monster1.name} is victorious!`);
};

// console.log("FIGHT!");
// console.log(glad1);
// glad1.takeDamage(150);
// // glad1.isAlive();
// // console.log(glad1.isAlive());