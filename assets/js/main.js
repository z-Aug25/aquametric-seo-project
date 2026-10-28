const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const demoForm = document.querySelector("#demo-form");
if (demoForm) {
  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.querySelector("#form-message");
    if (message) {
      message.textContent = "Demo only: your message was not sent or stored.";
    }
    demoForm.reset();
  });
}