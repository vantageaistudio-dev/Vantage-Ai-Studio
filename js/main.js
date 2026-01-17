// Scroll animations
const observer=new IntersectionObserver(e=>{
e.forEach(x=>x.isIntersecting&&x.target.classList.add("show"))
},{threshold:.2});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

// Testimonials slider
let i=0;
const t=document.querySelectorAll(".testimonial");
setInterval(()=>{
t.forEach(x=>x.classList.remove("active"));
i=(i+1)%t.length;
t[i].classList.add("active");
},4000);
