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

$(document).ready(function () {
  
  $(".menu").click(function (e) { 
    e.preventDefault();
    // animation toogle
    // $(".menu i").toggleClass("rotate-180");

    // toogle class sidebar
    const sidebar = $("#sidebar").hasClass("md:max-w-52");
    sidebar ? $("#sidebar").removeClass("md:max-w-52").addClass("md:max-w-15") : $("#sidebar").removeClass("md:max-w-15").addClass("md:max-w-52");
  });

  // profile animation
  $('#profile').click(function (e) { 
    e.preventDefault();
    const profile = $("#profile").hasClass("-translate-x-36");
    const pengguna = $("#pengguna .nama").hasClass("scale-0");
    !profile ? $("#profile").addClass("-translate-x-36") : $("#profile").removeClass("-translate-x-36");
    pengguna ? $("#pengguna .nama").removeClass("scale-0").addClass("scale-100") : $("#pengguna .nama").removeClass("scale-100").addClass("scale-0");
  });

});
