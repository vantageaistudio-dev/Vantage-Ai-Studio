function sendBooking() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const project = document.getElementById("project").value;

  const msg =
`New Booking - Vantage AI Studio

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Date: ${date}
Project: ${project}`;

  window.open(
    `https://wa.me/917017690513?text=${encodeURIComponent(msg)}`,
    "_blank"
  );

  window.location.href =
    `mailto:vantageaistudio@gmail.com?subject=New Booking&body=${encodeURIComponent(msg)}`;
}

const testimonials = [
  "Best AI agency we’ve worked with.",
  "Professional, fast & reliable.",
  "Clean design with powerful results."
];

let i = 0;
setInterval(() => {
  const el = document.getElementById("testimonial");
  if (el) {
    el.textContent = testimonials[i % testimonials.length];
    i++;
  }
}, 3500);
