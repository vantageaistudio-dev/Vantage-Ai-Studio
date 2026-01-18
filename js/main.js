function scrollToBooking(){
  document.getElementById("booking").scrollIntoView({behavior:"smooth"});
}

const testimonials=[
  "Best AI agency we’ve worked with.",
  "They transformed our operations with AI.",
  "Premium quality and fast delivery."
];
let i=0;
setInterval(()=>{
  document.getElementById("testimonial").innerText=testimonials[i++%testimonials.length];
},3000);

function sendBooking(e){
  e.preventDefault();
  const n=name.value,p=phone.value,eid=email.value,pr=project.value;
  const msg=`New Booking - Vantage AI Studio%0AName: ${n}%0APhone: ${p}%0AEmail: ${eid}%0AProject: ${pr}`;
  window.open(`https://wa.me/917017690513?text=${msg}`);
  window.location=`mailto:vantageaistudio@gmail.com?subject=New Booking&body=${msg}`;
}
