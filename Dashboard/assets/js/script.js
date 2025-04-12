document.addEventListener("DOMContentLoaded", function () {
  const navItems = document.querySelectorAll(".nav-item");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Hapus class active dari semua item
      navItems.forEach((item) => {
        item.classList.remove("bg-tulisan", "text-primary");
      });

      // Tambahkan class active ke parent li (nav-item)
      this.parentElement.classList.add("bg-tulisan", "text-primary");

      // Simpan state active di localStorage (optional)
      localStorage.setItem("activeNav", this.getAttribute("href"));
    });
  });

  // Set active item dari localStorage saat load (optional)
  const activeNav = localStorage.getItem("activeNav");
  if (activeNav) {
    const activeLink = document.querySelector(`.nav-link[href="${activeNav}"]`);
    if (activeLink) {
      activeLink.parentElement.classList.add("bg-tulisan", "text-primary");
    }
  }
});
