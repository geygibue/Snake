import jatek from "./jatek.mjs";
import kigyo from './kigyo.mjs'

const snakeHead = document.getElementById("snakeHead");
const snakeBody = document.getElementById("snakeBody");
const food = document.getElementById("food");
const wall = document.getElementById("wall");

var grafika = {
  canvas: document.getElementById("canvas"),
  negyzetMeret: 20,
  tablaMegrajzolas: function(ctx) {
    var aktualisYoffset = 0;
    jatek.tabla[jatek.tablaSzama].forEach(
    function sorellenorzes(sor) {
      sor = sor.split("");
      var aktualisXoffset = 0;
      
      sor.forEach(
        function karakterEllenorzes(karakter) {
          if(karakter == "#") {
            ctx.drawImage(wall,aktualisXoffset, aktualisYoffset, grafika.negyzetMeret, grafika.negyzetMeret);
          }
          aktualisXoffset += grafika.negyzetMeret;
        }
      );
      aktualisYoffset += grafika.negyzetMeret
    }
  )},
  kigyoMegrajzolas: function(ctx) {
    var head = kigyo.reszek[0];
    kigyo.reszek.forEach(function reszMegrajzolás(resz) {
      var reszXhelye = resz.x * grafika.negyzetMeret;
      var reszYhelye = resz.y * grafika.negyzetMeret;
      ctx.drawImage(snakeBody, reszXhelye, reszYhelye, grafika.negyzetMeret, grafika.negyzetMeret);
    });
    ctx.drawImage(snakeHead, head.x * grafika.negyzetMeret, head.y * grafika.negyzetMeret, grafika.negyzetMeret, grafika.negyzetMeret);
  },
  gyumiMegrajzolas: function (ctx) {
    jatek.gyumik.forEach(function reszMegrajzolás(resz) {
      var reszXhelye = resz.x * grafika.negyzetMeret;
      var reszYhelye = resz.y * grafika.negyzetMeret;
      ctx.drawImage(food, reszXhelye, reszYhelye, grafika.negyzetMeret, grafika.negyzetMeret);
    }) 
  },
  jatekMegrajzolas: function () {
    var ctx = grafika.canvas.getContext("2d");
    ctx.clearRect(0, 0, grafika.canvas.width, grafika.canvas.height)
    grafika.tablaMegrajzolas(ctx, 0);
    grafika.gyumiMegrajzolas(ctx);
    grafika.kigyoMegrajzolas(ctx);
    ctx.font = "15px Arial";
    ctx.fillStyle = "black"
    ctx.fillText("Score: " + jatek.pontSzam, 5, 15);
    if (!jatek.fut) {
      ctx.font = "30px Arial";
      ctx.fillStyle = "red"
      ctx.fillText("Vége!", 100, 150);
    }
  },
}

export default grafika;