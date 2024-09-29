document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.page-header');
    if (header) {
        // Create the hamburger icon and menu container dynamically
        const menuButton = document.createElement('button');
        menuButton.className = 'hamburger-icon';
        menuButton.innerHTML = 'thomas e fleming |';
        menuButton.style.color = 'rgba(0, 255, 0, 0.7)';  // Set font color
        menuButton.onclick = toggleMenu;

        const menu = document.createElement('nav');
        menu.className = 'menu-items';
        menu.innerHTML = `
            <a href="index.html">Home</a>
            <a href="https://mastodon.social/@flemingthomase" target="_blank">My musings</a>
            <a href="https://docs.google.com/document/d/1diMIH27Nk8A3_l2DAI-cthbjQsFID2jRcSIwVttRM2s/edit?usp=sharing" target="_blank">My writing</a>
            <a href="about.html">About me</a>
        `;

        // Add the hamburger icon and the menu to the header
        header.prepend(menuButton);
        header.appendChild(menu);
    }
});

function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
