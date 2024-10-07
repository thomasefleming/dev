document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s ease";
        document.body.style.opacity = 1;
    }, 100);
});

function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}
