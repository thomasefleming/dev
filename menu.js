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
            <a href="https://www.youtube.com/playlist?list=PLnPKoRbj5BWGKs2kXw6ZqlobTlGTMznuz" target="_blank">🎶 I 💚</a>
            <a href="chiclets.html">Chiclets</a>
            <div class="menu-item" style="position: relative;">
                <a class="about-me-link">About me ⟩</a>
                <div class="submenu" style="display: none; position: absolute; left: 100%; top: 0; background-color: rgba(0, 0, 0, 0.9); padding: 10px; border-radius: 5px; z-index: 20;">
                    <a href="https://mastodon.social/@flemingthomase" target="_blank" class="submenu-item" style="display: block; padding: 10px 0; color: white; text-decoration: none;">My musings</a>
                    <a href="https://docs.google.com/document/d/1diMIH27Nk8A3_l2DAI-cthbjQsFID2jRcSIwVttRM2s/edit?usp=sharing" target="_blank" class="submenu-item" style="display: block; padding: 10px 0; color: white; text-decoration: none;">My writing</a>
                </div>
            </div>
        `;

        // Add the hamburger icon and the menu to the header
        header.prepend(menuButton);
        header.appendChild(menu);

        // Add submenu hover functionality
        const aboutMeLink = menu.querySelector('.about-me-link');
        const submenu = menu.querySelector('.submenu');

        // Show submenu when hovering over "About me"
        aboutMeLink.addEventListener('mouseenter', function () {
            submenu.style.display = 'block';
        });

        // Hide submenu when mouse leaves the menu item
        const menuItem = menu.querySelector('.menu-item');
        menuItem.addEventListener('mouseleave', function () {
            submenu.style.display = 'none';
        });

        // Add hover effect to submenu items
        const submenuItems = menu.querySelectorAll('.submenu-item');
        submenuItems.forEach(function (item) {
            item.addEventListener('mouseenter', function () {
                item.style.color = 'rgba(0, 255, 0, 0.7)'; // Change text color on hover
            });
            item.addEventListener('mouseleave', function () {
                item.style.color = 'white'; // Revert text color when not hovered
            });
        });
    }
});

function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
