(function () {
  emailjs.init("1FXkl6f7rLSqr3ezU");
})();

document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_l182fi8",
    "template_5t5qyt7",
    this
  ).then(() => {
    document.getElementById("status").innerText =
      "✅ Booking sent successfully! We’ll contact you shortly.";
    this.reset();
  }).catch(() => {
    document.getElementById("status").innerText =
      "❌ Failed to send booking. Please try again.";
  });
});
