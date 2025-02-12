document.addEventListener("DOMContentLoaded", () => {
  // Toggle sidebar
  const toggleBtn = document.querySelector(".toggle-btn");
  const sidebar = document.querySelector(".sidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

  // Handle menu item clicks
  const menuItems = document.querySelectorAll(".menu-item");
  const contentFrame = document.getElementById("contentFrame");

  menuItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      // Update active state
      menuItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      // Load content
      contentFrame.src = item.getAttribute("href");
    });
  });
});
