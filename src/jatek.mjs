import kigyo from './kigyo.mjs';
import grafika from "./grafika.mjs";

var jatek = {
  tablaSzama: 0,
  tabla:  [
    [
      "###############",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "###############",
    ],
    [
      "###############",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "###############",
    ],
    [
      "###############",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "###############",
    ],
    [
      "###############",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "#             #",
      "###############",
    ],
  ],
  gyumik: [
    {x: 1, y: 1},
    {x: 13, y: 13},
    {x: 1, y: 13},
  ],
  pontSzam: 0,
  tickSzama: 0,
  fut: true,
  idozito: null,
  veletlenGyumolcsHozzaadas: function() {
    var randomY = Math.floor(Math.random() * (jatek.tabla[jatek.tablaSzama].length - 2)) + 1;
    var randomX = Math.floor(Math.random() * (jatek.tabla[jatek.tablaSzama][randomY].length - 2)) + 1;

    var randomHely = {x: randomX, y: randomY};
    jatek.gyumik.push(randomHely);
  },
  tick: function() {
    window.clearTimeout(jatek.idozito);
    console.log(jatek.fut);
    kigyo.mozgas();
    jatek.tablaSzama = (jatek.tablaSzama + 1) % jatek.tabla.length
    grafika.jatekMegrajzolas();
    if (!jatek.fut) {
      return
    }
    jatek.tickSzama++;
    jatek.idozito = window.setTimeout(jatek.tick, 500);
  },
};

export default jatek;