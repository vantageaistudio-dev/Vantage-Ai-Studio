/* ===== REAL 3D RING ===== */
const canvas = document.getElementById("ringCanvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  canvas.clientWidth / canvas.clientHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true
});

renderer.setSize(canvas.clientWidth, canvas.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

camera.position.z = 6;

/* LIGHTS */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0x6a5cff, 1.4);
pointLight.position.set(4, 3, 6);
scene.add(pointLight);

/* RING */
const geometry = new THREE.TorusGeometry(1.6, 0.45, 64, 128);
const material = new THREE.MeshStandardMaterial({
  color: 0x7b6cff,
  metalness: 0.8,
  roughness: 0.2,
  emissive: 0x120033
});

const ring = new THREE.Mesh(geometry, material);
scene.add(ring);

/* MOUSE INTERACTION */
document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 6;
  const y = (e.clientY / window.innerHeight - 0.5) * 6;
  pointLight.position.set(x, -y, 6);
});

/* ANIMATE */
function animate() {
  requestAnimationFrame(animate);
  ring.rotation.x += 0.003;
  ring.rotation.y += 0.004;
  renderer.render(scene, camera);
}
animate();

/* RESIZE */
window.addEventListener("resize", () => {
  camera.aspect = canvas.clientWidth / canvas.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
});

/* BOOKING */
function sendBooking() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const email = document.getElementById("email").value;
  const project = document.getElementById("project").value;

  const msg =
`New Strategy Call Booking

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Project: ${project}`;

  window.open(
    `https://wa.me/917017690513?text=${encodeURIComponent(msg)}`,
    "_blank"
  );

  window.location.href =
    `mailto:vantageaistudio@gmail.com?subject=New Booking&body=${encodeURIComponent(msg)}`;
}
