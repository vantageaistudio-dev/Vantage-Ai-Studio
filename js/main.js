function sendBooking() {
  const name = name.value;
  const mobile = mobile.value;
  const email = email.value;
  const project = project.value;

  const message =
`New Strategy Call Booking

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Project: ${project}`;

  window.open(
    `https://wa.me/917017690513?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  window.location.href =
    `mailto:vantageaistudio@gmail.com?subject=New Booking&body=${encodeURIComponent(message)}`;
}
