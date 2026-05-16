// Navigation Script
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close nav when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });
}

// Navbar scroll shrink effect
const navScroll = () => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 5%';
            navbar.style.boxShadow = '0 10px 30px rgba(5, 150, 105, 0.08)';
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.padding = '1.5rem 5%';
            navbar.style.boxShadow = 'none';
            navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });
}

// Reveal elements on scroll
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.card, .gallery-item, .loc-card, .about-image, .features li');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.style.opacity = '1';
                reveal.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for reveal items
    reveals.forEach((reveal) => {
        reveal.style.opacity = '0';
        reveal.style.transform = 'translateY(30px)';
        reveal.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load
}

// Initialize all scripts
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    navScroll();
    scrollReveal();
});
