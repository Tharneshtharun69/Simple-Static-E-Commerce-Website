document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("active");
        nav.classList.toggle("active");
    });
    document.querySelectorAll(".nav-list a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            menuIcon.classList.remove("active");
        });
    });
});
