// HEADER WHATSAPP CTA
document.getElementById("whatsappCta").addEventListener("click", () => {
  const msg = encodeURIComponent(
    "Hi, I want to book a free AI strategy call with Vantage AI Studio."
  );
  window.open("https://wa.me/917017690513?text=" + msg, "_blank");
});

// BOOKING FORM
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = new FormData(this);

  const message = `
New Booking Request
Name: ${form.get("name")}
Email: ${form.get("email")}
Phone: ${form.get("phone")}
Project: ${form.get("details")}
`;

  const whatsapp =
    "https://wa.me/917017690513?text=" +
    encodeURIComponent(message);

  const mailto =
    "mailto:vantageaistudio@gmail.com?subject=New Booking Request – " +
    encodeURIComponent(form.get("name")) +
    "&body=" +
    encodeURIComponent(message);

  window.open(whatsapp, "_blank");
  window.location.href = mailto;
});
