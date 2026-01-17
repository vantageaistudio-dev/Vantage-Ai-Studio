// SCROLL ANIMATION
const els = document.querySelectorAll("[data-animate]");
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.classList.add("show");
  });
},{threshold:0.2});
els.forEach(el=>obs.observe(el));

// TESTIMONIAL SLIDER
let t = 0;
const testi = document.querySelectorAll(".testimonial");
setInterval(()=>{
  testi[t].classList.remove("active");
  t = (t+1)%testi.length;
  testi[t].classList.add("active");
},4000);

// WHATSAPP BOOKING
bookingForm.addEventListener("submit",e=>{
  e.preventDefault();
  const msg =
`New Booking 🚀
Name: ${name.value}
Phone: ${phone.value}
Email: ${email.value}
Date: ${date.value}
Project: ${project.value}`;
  window.open(
    `https://wa.me/917017690513?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
});

// AI WAVE
const c = waveCanvas;
const ctx = c.getContext("2d");
function resize(){
  c.width=innerWidth;
  c.height=innerHeight;
}
resize(); onresize=resize;

let x=0;
function wave(){
  ctx.clearRect(0,0,c.width,c.height);
  ctx.strokeStyle="rgba(0,200,255,0.3)";
  ctx.beginPath();
  for(let i=0;i<c.width;i++){
    ctx.lineTo(i,c.height/2+Math.sin(i*0.01+x)*30);
  }
  ctx.stroke();
  x+=0.02;
  requestAnimationFrame(wave);
}
wave();
