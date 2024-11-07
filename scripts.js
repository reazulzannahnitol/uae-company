function openNavbar() {
    document.getElementById('mobileNavbar').style.right = '0'; // Show the navbar
}

function closeNavbar() {
    document.getElementById('mobileNavbar').style.right = '-300px'; // Hide the navbar
}

// Close the navbar by clicking outside of it
document.addEventListener('click', function(event) {
    const navbar = document.getElementById('mobileNavbar');
    const isClickInside = navbar.contains(event.target) || document.querySelector('.navbar-toggler').contains(event.target);
    
    if (!isClickInside && navbar.style.right === '0px') {
        closeNavbar(); // Close if clicking outside
    }
});

function toggleSubmenu(event) {
    const submenu = event.currentTarget.nextElementSibling;
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block'; // Toggle display
}
