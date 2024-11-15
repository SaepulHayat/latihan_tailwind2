// Get elements
const burgerButton = document.getElementById('burgerButton');
const sidebar = document.getElementById('sidebar');
const closeSidebarButton = document.getElementById('closeSidebarButton');
const overlay = document.getElementById('overlay');

// Open the sidebar
burgerButton.addEventListener('click', () => {
    sidebar.classList.remove('-translate-x-full'); // Slide in the sidebar
    overlay.classList.remove('hidden'); // Show overlay
});

// Close the sidebar
closeSidebarButton.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full'); // Slide out the sidebar
    overlay.classList.add('hidden'); // Hide overlay
});

// Close the sidebar when clicking on overlay
overlay.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full'); // Slide out the sidebar
    overlay.classList.add('hidden'); // Hide overlay
});