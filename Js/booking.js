(function () {
  emailjs.init("1FXkl6f7rLSqr3ezU");
})();

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm(
    "YOUR_SERVICE_ID",
    "YOUR_TEMPLATE_ID",
    this
  ).then(() => {
    document.getElementById("status").innerText =
      "✅ Booking sent successfully!";
    this.reset();
  }, () => {
    document.getElementById("status").innerText =
      "❌ Failed to send booking.";
  });
});
