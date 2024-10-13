import jatekIranyitas from "./src/jatekiranyitas.mjs";

const chew = document.getElementById("chew");

confetti({
  particleCount: 1000,
  spread: 70,
  origin: { y: 0.6 },
});

jatekIranyitas.jatekInditas();