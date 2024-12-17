// 1. Definuj triedu Gladiátor
// - Vytvor konštruktor, ktorý nastaví meno, zdravie a silu útoku
// - Pridaj metódu 'attack' na útok, ktorá spôsobí poškodenie nepriateľovi
// - Pridaj metódu 'takeDamage' na prijatie poškodenia a aktualizáciu zdravia
// - Pridaj metódu 'isAlive', ktorá vracia, či je gladiátor nažive

//commit test

class Gladiator {
    constructor(name, health, attackPower) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
    }

    // Metóda na útok
    attack(monster) {
    }

    // Metóda na prijatie poškodenia
    takeDamage(damage) {
    }

    // Metóda na kontrolu, či je gladiátor nažive
    isAlive() {
    }
}


// 2. Definuj triedu Príšera
// - Vytvor konštruktor, ktorý nastaví meno, zdravie a silu útoku
// - Pridaj metódu 'attack' na útok, ktorá spôsobí poškodenie gladiátorovi
// - Pridaj metódu 'takeDamage' na prijatie poškodenia a aktualizáciu zdravia
// - Pridaj metódu 'isAlive', ktorá vracia, či je príšera nažive

// 3. Vytvor inštancie (objekty) pre gladiátora a príšeru s vhodnými hodnotami
// - Gladiátor bude mať meno, zdravie a silu útoku
// - Príšera bude mať meno, zdravie a silu útoku

// 4. Implementuj bojový cyklus:
// - Používaj cyklus (napr. while), ktorý striedavo útočí gladiátor a príšera
// - Po každom útoku kontroluj, či je niekto mŕtvy (pomocou isAlive)
// - Ak je niekto mŕtvy, koniec boja a vypíš víťaza

// 5. Na konci boja vypíš, kto vyhral
