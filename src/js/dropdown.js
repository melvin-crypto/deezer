document.addEventListener('DOMContentLoaded', function () {
    const dropdownButton = document.querySelector(".dropdown-button");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    dropdownButton.addEventListener("click", (event) => {
        event.stopPropagation();
        dropdownMenu.classList.toggle("active");
    });

    window.addEventListener("click", () => {
        dropdownMenu.classList.remove("active");
    });
});
