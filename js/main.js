function sendBooking() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date")?.value || "";
  const project = document.getElementById("project").value;

  const message =
`New Booking - Vantage AI Studio

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Date: ${date}
Project: ${project}`;

  // WhatsApp
  window.open(
    `https://wa.me/917017690513?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  // Gmail draft
  window.location.href =
    `mailto:vantageaistudio@gmail.com?subject=New Booking&body=${encodeURIComponent(message)}`;
}

// Testimonials auto change
const testimonials = [
  "Best AI agency we’ve worked with.",
  "Professional, fast, and innovative.",
  "Our growth improved dramatically."
];

let i = 0;
setInterval(() => {
  const t = document.getElementById("testimonial");
  if (t) {
    t.textContent = testimonials[i % testimonials.length];
    i++;
  }
}, 3000);
