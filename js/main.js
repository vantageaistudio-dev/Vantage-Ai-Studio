/* Scroll Animation */
const animated = document.querySelectorAll("[data-animate]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    }
  });
});
animated.forEach(el => observer.observe(el));

/* Animated Charts */
const bars = document.querySelectorAll(".fill");
bars.forEach(bar => {
  const width = bar.getAttribute("data-width");
  setTimeout(() => {
    bar.style.width = width;
  }, 500);
});

/* Testimonials Slider */
const testimonials = document.querySelectorAll(".testimonial");
let tIndex = 0;

setInterval(() => {
  testimonials[tIndex].classList.remove("active");
  tIndex = (tIndex + 1) % testimonials.length;
  testimonials[tIndex].classList.add("active");
}, 4000);

/* WhatsApp Booking Form */
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
