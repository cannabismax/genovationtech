document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add interactive elements if needed, like dropdowns or animations
});