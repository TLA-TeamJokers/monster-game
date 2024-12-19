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
        this.rychlost = rychlost;
    }
}

let auto1 = new Auto("Saab", 25);
let auto2 = new Auto("Ford", 30);

console.log(`Auto 1: Jméno: ${auto1.jmeno}, Rychlost: ${auto1.rychlost}`);
console.log(`Auto 2: Jméno: ${auto2.jmeno}, Rychlost: ${auto2.rychlost}`);

const finish = 100;

let vzdalenostAuto1 = 0;
let vzdalenostAuto2 = 0;

console.log("Jedeme!");

function start() {
    let krok = 1;
    while (true) {

        console.log(`Krok ${krok}`);

        vzdalenostAuto1 += Math.random() * auto1.rychlost;

        vzdalenostAuto2 += Math.random() * auto2.rychlost;

        console.log(`${auto1.jmeno}  celkem ujeto: ${vzdalenostAuto1.toFixed(1)}`);
        console.log(`${auto2.jmeno}  celkem ujeto: ${vzdalenostAuto2.toFixed(1)}`);

        if (vzdalenostAuto1 >= finish) {
            console.log(`${auto1.jmeno} Gratuluji vyhravas!`);
            return;
        }
        if (vzdalenostAuto2 >= finish) {
            console.log(`${auto2.jmeno} Gratuluji vyhravas!`);
            return;
        }
        krok++;
    }
}
start();