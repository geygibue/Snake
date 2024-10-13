import jatek from './jatek.mjs'
import kigyo from './kigyo.mjs'

var jatekIranyitas = {
  jatekInditas: function() {
    window.addEventListener("keypress", jatekIranyitas.gombNyomas, false);
    jatek.tick();
  },
  gombNyomas: function (gombErtek) {
    var gomb = gombErtek.key.toUpperCase();
    if (gomb === "W" && kigyo.irany !=="S") kigyo.irany = "N";
    if (gomb === "S" && kigyo.irany !=="N") kigyo.irany = "S";
    if (gomb === "A" && kigyo.irany !=="E") kigyo.irany = "W";
    if (gomb === "D" && kigyo.irany !=="W") kigyo.irany = "E";
  }
}

export default jatekIranyitas;