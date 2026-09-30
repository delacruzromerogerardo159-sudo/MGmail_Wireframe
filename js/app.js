const drawer = document.getElementById("drawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

function showDrawer() {
  if (drawer) drawer.classList.add("open");
  if (drawerOverlay) drawerOverlay.classList.add("open");
}

function hideDrawer() {
  if (drawer) drawer.classList.remove("open");
  if (drawerOverlay) drawerOverlay.classList.remove("open");
}

if (openMenu) openMenu.addEventListener("click", showDrawer);
if (closeMenu) closeMenu.addEventListener("click", hideDrawer);
if (drawerOverlay) drawerOverlay.addEventListener("click", hideDrawer);

const composeButton = document.getElementById("composeButton");
const composeModal = document.getElementById("composeModal");
const closeModal = document.getElementById("closeModal");
const fakeSend = document.getElementById("fakeSend");

if (composeButton) {
  composeButton.addEventListener("click", () => {
    composeModal.classList.add("show");
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    composeModal.classList.remove("show");
  });
}

if (fakeSend) {
  fakeSend.addEventListener("click", () => {
    composeModal.classList.remove("show");
    showToast("No se envía ningún correo", "Solo es una función visual del wireframe.");
  });
}

const filterButton = document.getElementById("filterButton");

if (filterButton) {
  filterButton.addEventListener("click", () => {
    showToast("Filtros", "Esta pantalla solo representa la interfaz.");
  });
}

function showToast(title, message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerHTML = `<strong>${title}</strong><span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
