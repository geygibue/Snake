import jatek from "./jatek.mjs"

var kigyo = {
  reszek: [
    {x: 4, y: 2},
    {x: 3, y: 2},
    {x: 2, y: 2},
  ],
  irany:"E",
  kovetkezoHely: function() {
    var kigyoFej = kigyo.reszek[0];
    var celX = kigyoFej.x;
    var celY = kigyoFej.y;
    
    if (kigyo.irany === "N") celY--;
    if (kigyo.irany === "S") celY++;
    if (kigyo.irany === "W") celX--;
    if (kigyo.irany === "E") celX++;

    return {
      x: celX,
      y: celY,
    };
  },
  mozgas: function() {
    var hely = kigyo.kovetkezoHely();
    if (kigyo.uresNegyzet(hely)) {
      kigyo.reszek.unshift(hely);
      kigyo.reszek.pop();
    }
    if (kigyo.falNegyzet(hely)) {
      jatek.fut = false;
    }
    if (kigyo.gyumolcsNegyzet(hely)) {
      kigyo.reszek.unshift(hely);
      jatek.pontSzam++;
      jatek.veletlenGyumolcsHozzaadas();
      console.log(jatek.pontSzam);
    }
    if (kigyo.kigyoNegyzet(hely)) {
      // jatek.fut = false;
      console.log("fej!test")
    }
  },
  uresNegyzet: function(hely) {
    var tartalom = jatek.tabla[jatek.tablaSzama][hely.y][hely.x]
    return tartalom === " ";
  },
  falNegyzet: function(hely) {
    var tartalom = jatek.tabla[jatek.tablaSzama][hely.y][hely.x]
    return tartalom === "#";
  },
  gyumolcsNegyzet: function(hely) {
    for (var gyumolcsSzama = 0; gyumolcsSzama < jatek.gyumik.length; gyumolcsSzama++) {
      // console.log('gyumolcsSzama', gyumolcsSzama, jatek.gyumik.length);
      if (jatek.gyumik[gyumolcsSzama].x === hely.x &&
      jatek.gyumik[gyumolcsSzama].y === hely.y) {
        jatek.gyumik.splice(gyumolcsSzama, 1);
        return true;
        chew.play();
      }
    }
    return false;
  },
  kigyoNegyzet: function(hely) {
    var fej = kigyo.reszek[0];
    for (var reszSzam = 1; reszSzam < kigyo.reszek.length; reszSzam++) {
      return kigyo.reszek[reszSzam].x === fej.x && kigyo.reszek[reszSzam].y === fej.y
    }
  }
}

export default kigyo;