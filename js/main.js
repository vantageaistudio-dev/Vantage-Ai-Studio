/* SCROLL ANIMATIONS */
const elements = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

/* TESTIMONIAL SLIDER */
const testimonials = document.querySelectorAll(".testimonial");
let i = 0;
setInterval(() => {
  testimonials[i].classList.remove("active");
  i = (i + 1) % testimonials.length;
  testimonials[i].classList.add("active");
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
Project: ${project.value}
`;

  window.open(
    `https://wa.me/917017690513?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
});

/* AI WAVEFORM */
const canvas = document.getElementById("waveCanvas");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.onresize = resize;

let t = 0;
function wave() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.strokeStyle = "rgba(0,200,255,0.25)";
  ctx.beginPath();
  for (let x = 0; x < canvas.width; x++) {
    const y = canvas.height/2 + Math.sin(x*0.01 + t) * 40;
    ctx.lineTo(x,y);
  }
  ctx.stroke();
  t += 0.02;
  requestAnimationFrame(wave);
}
wave();
