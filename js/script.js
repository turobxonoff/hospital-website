let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar-nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove("active");
};

// Darkmode
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("darkmode").addEventListener("click", () => {
    document.body.classList.toggle("active");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  if (localStorage.getItem("theme" === "dark")) {
    document.body.classList.add("dark");
  }
});