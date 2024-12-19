// 1. Definuj triedu Auto:
// - Vytvor konštruktor, ktorý nastaví meno auta, pozíciu a rýchlosť
// - Pridaj metódu 'move', ktorá posunie auto o náhodnú hodnotu podľa jeho rýchlosti
// - Pridaj metódu 'getPosition', ktorá vráti aktuálnu pozíciu auta

// 2. Vytvor inštancie dvoch áut s rôznymi menami a rýchlosťami

// 3. Simuluj preteky v cykle:
// - V cykle sa striedavo hýbu obidve autá (pre každý krok sa posunú o náhodný počet jednotiek, závislé od ich rýchlosti)
// - Po každom kroku vypíš aktuálnu pozíciu oboch áut
// - Pretekajte, kým jedno z áut neprejde cieľovú čiaru (napr. 100 jednotiek)


class Auto {
    constructor(jmeno, rychlost) {
        this.jmeno = jmeno;
        this.pozice = 0;
        this.rychlost = rychlost;
    }

    pohyb() {
        this.pozice += Math.floor(Math.random() * this.rychlost) + 1;
    }
}

let auto1 = new Auto("Auto1", 5);
let auto2 = new Auto("Auto2", 6);

while (auto1.pozice < 100 && auto2.pozice < 100) {
    auto1.pohyb();
    auto2.pohyb();

    console.log(`${auto1.jmeno}: ${auto1.pozice} - ${auto2.jmeno}: ${auto2.pozice}`);
}

console.log(auto1.pozice >= 100 ? `${auto1.jmeno} vyhrál!` : `${auto2.jmeno} vyhrál!`);
