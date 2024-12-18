// 1. Definuj triedu Gladiátor
// - Vytvor konštruktor, ktorý nastaví meno, zdravie a silu útoku
// - Pridaj metódu 'attack' na útok, ktorá spôsobí poškodenie nepriateľovi
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
        monster.takeDamage(this.attackPower);
    }

    // Metóda na prijatie poškodenia
    takeDamage(damage) {
        if (this.health > 1) {
            this.health -= damage;
        }

        console.log(`Gladiator: ${this.name} has ${this.health} health.`);
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

    attack(gladiator) {
        gladiator.takeDamage(this.attackPower);
    }

    takeDamage(damage) {
        if (this.health > 1) {
            this.health -= damage;
        }

        console.log(`Monster: ${this.name} has ${this.health} health.`);
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

let monster1 = new Monster('Voidling', 10, 2);
let monster2 = new Monster('Void Herald', 30, 5);
let gladiator1 = new Gladiator('Jayce', 20, 4);
let gladiator2 = new Gladiator('Victor', 25, 5);

// 4. Implementuj bojový cyklus:
// - Používaj cyklus (napr. while), ktorý striedavo útočí gladiátor a príšera
// - Po každom útoku kontroluj, či je niekto mŕtvy (pomocou isAlive)
// - Ak je niekto mŕtvy, koniec boja a vypíš víťaza

while (monster1.isAlive() && gladiator1.isAlive()) {
    gladiator1.attack(monster1);
    monster1.attack(gladiator1);
}

// 5. Na konci boja vypíš, kto vyhral

if (gladiator1.isAlive()) {
    console.log(`${gladiator1.name} is Victorious!`)
} else {
    console.log(`${gladiator1.name} was Deafeated!`)
}