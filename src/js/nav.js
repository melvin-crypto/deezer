document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menu-button");
    const siteNav = document.getElementById("site-nav");

    menuButton.addEventListener("click", function() {
        siteNav.classList.toggle("active");

        // Add a small delay before toggling the animation class
        setTimeout(function() {
            siteNav.classList.toggle("animate");
        }, 50);

        // Toggle the class for the menu button icon
        menuButton.classList.toggle("cancel");
    });
});
