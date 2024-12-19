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
            this.health -= damage
        }

        console.log(`gladiator: ${this.name} has ${this.health}`);

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

let gladiator1 = new Gladiator('Marek', 100, 10 );
let gladiator2 = new Gladiator('Tomas', 110, 20 );

console.log(gladiator1);
console.log(gladiator2);

console.log(`Gladiator 1: ${gladiator1.name}, ${gladiator1.health}, ${gladiator1.attackPower}`);
console.log(`Gladiator 2: ${gladiator2.name}, ${gladiator2.health}, ${gladiator2.attackPower}`);





// 2. Definuj triedu Príšera
// - Vytvor konštruktor, ktorý nastaví meno, zdravie a silu útoku
// - Pridaj metódu 'attack' na útok, ktorá spôsobí poškodenie gladiátorovi
// - Pridaj metódu 'takeDamage' na prijatie poškodenia a aktualizáciu zdravia
// - Pridaj metódu 'isAlive', ktorá vracia, či je príšera nažive

class Monstrum {
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attack_power = attackPower;
    }
    takeDamage(damage) {
        if (this.health > 1) {
            this.health -= damage;
        }
        console.log(`Monstrum: ${this.name} has ${this.health}`);
    }

    attack(gladiator) {
        gladiator.takeDamage(this.attack_power);
    }

    isAlive() {
        if(this.health <= 0) {
            return false;

        } else {
            return true;
        }
    }
}

let monstrum1 = new Monstrum('Demon', 80, 7 );
let monstrum2 = new Monstrum('Obr', 50, 5);

console.log(monstrum1);
console.log(monstrum2);

console.log(`Monstrum 1: ${monstrum1.name}, ${monstrum1.health}, ${monstrum1.attackPower}`);
console.log(`Monstrum 2: ${monstrum2.name}, ${monstrum2.health}, ${monstrum2.attackPower}`);


// 3. Vytvor inštancie (objekty) pre gladiátora a príšeru s vhodnými hodnotami
// - Gladiátor bude mať meno, zdravie a silu útoku
// - Príšera bude mať meno, zdravie a silu útoku

// 4. Implementuj bojový cyklus:
// - Používaj cyklus (napr. while), ktorý striedavo útočí gladiátor a príšera
// - Po každom útoku kontroluj, či je niekto mŕtvy (pomocou isAlive)
// - Ak je niekto mŕtvy, koniec boja a vypíš víťaza

while (monstrum1.isAlive() && gladiator1.isAlive() && gladiator1.isAlive() && monstrum2.isAlive()) {
    gladiator1.attack(monstrum1);
    monstrum2.attack(gladiator2);

    console.log(`${gladiator1.name} is victorious!`);

    // isAlive() {
    //
    //     if (this.health <= 0) {
    //         return false;
    //
    //     } else {
    //         return true;
    //     }
    //
    // }
}

// 5. Na konci boja vypíš, kto vyhral

while (monstrum1.isAlive() && monstrum2.isAlive() && gladiator1.isAlive() && gladiator2.isAlive()) {
    gladiator1.attack(monstrum1);
    gladiator2.attack(monstrum2);
    monstrum1.attack(gladiator1);
    monstrum2.attack(gladiator2);

}

if(gladiator1.isAlive() && gladiator2.isAlive() && monstrum1.isAlive() && monstrum2.isAlive()) {
    console.log(`${gladiator1.name} is victorious!`);
    console.log(`${gladiator2.name} is victorious!`);
    console.log(`${monstrum1.name} is victorious!`);
    console.log(`${monstrum2.name} is victorious!`);

} else {
    console.log(`${gladiator1.name} is defeated!`);
    console.log(`${gladiator2.name} is defeated!`);
    console.log(`${monstrum1.name} is defeated!`);
    console.log(`${monstrum2.name} is defeated!`);
}