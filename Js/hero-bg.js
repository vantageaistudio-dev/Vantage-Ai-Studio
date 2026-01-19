const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const gradient = ctx.createRadialGradient(
    canvas.width * 0.7,
    canvas.height * 0.5,
    100,
    canvas.width * 0.7,
    canvas.height * 0.5,
    canvas.width
  );

  gradient.addColorStop(0, "rgba(155,123,255,0.15)");
  gradient.addColorStop(0.5, "rgba(124,247,255,0.08)");
  gradient.addColorStop(1, "rgba(0,0,0,0)");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(draw);
}

draw();
