//function toggleMenu() {
  //const menu = document.querySelector(".menu-links");
  //const icon = document.querySelector(".hamburger-icon");
  //menu.classList.toggle("open");
  //icon.classList.toggle("open");
//}
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Ensure links close menu and navigate correctly
document.querySelectorAll(".menu-links a").forEach(link => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50, // Adjust for fixed navbars
        behavior: "smooth",
      });
    }

    // Close menu after clicking
    toggleMenu();
  });
});
function toggleMobileProjectsDropdown() {
  const dropdown = document.getElementById("mobile-projects-dropdown");
  dropdown.classList.toggle("active");
}
// Toggle desktop Projects dropdown
document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("projects-dropdown");
  const toggle = document.getElementById("projects-toggle");

  toggle.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });

  // Optional: close if clicked outside
  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("active");
    }
  });
});
