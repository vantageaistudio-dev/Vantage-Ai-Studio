/* SCROLL ANIMATION */
const animated = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});
animated.forEach(el => observer.observe(el));

/* ANIMATED CHARTS */
document.querySelectorAll(".fill").forEach(bar => {
  setTimeout(() => {
    bar.style.width = bar.dataset.width;
  }, 600);
});

/* TESTIMONIAL SLIDER */
const testimonials = document.querySelectorAll(".testimonial");
let t = 0;
setInterval(() => {
  testimonials[t].classList.remove("active");
  t = (t + 1) % testimonials.length;
  testimonials[t].classList.add("active");
}, 4000);

/* WHATSAPP BOOKING */
document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();

  const msg = `
New Booking 🚀
Name: ${name.value}
Phone: ${phone.value}
Email: ${email.value}
Date: ${date.value}

Project:
${project.value}
`;

  window.open(
    `https://wa.me/917017690513?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
});

/* 🖱️ MOUSE INTERACTIVE GLOW */
const glow = document.getElementById("mouseGlow");
window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* 🧠 AI WAVEFORM */
const canvas = document.getElementById("aiWave");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.addEventListener("resize", resize);

let tWave = 0;
function drawWave() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.beginPath();
  ctx.strokeStyle = "rgba(0,255,255,0.6)";
  ctx.lineWidth = 2;

  for (let x = 0; x < canvas.width; x += 20) {
    const y = canvas.height / 2 + Math.sin(x * 0.01 + tWave) * 60;
    ctx.lineTo(x, y);
  }

  ctx.stroke();
  tWave += 0.03;
  requestAnimationFrame(drawWave);
}
drawWave();
