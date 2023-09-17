const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const closeButton = document.getElementById('close-button');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Close the menu when clicking outside of it
window.addEventListener('click', (e) => {
    if (menu.classList.contains('active') && e.target === menu) {
        menu.classList.remove('active');
    }
});
