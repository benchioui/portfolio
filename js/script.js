// Typewriter effect
const typewriter = document.getElementById('typewriter');
const text = 'Hello,';
let index = 0;
 
function type() {
    if (index < text.length) {
        typewriter.textContent += text.charAt(index);
        index++;
        setTimeout(type, 150);
    } else {
        typewriter.style.animation = 'blink 0.5s step-end infinite';
    }
}

window.onload = function() {
    type();
};

// Mobile menu and smooth scrolling functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const closeBtn = document.querySelector('.close-btn');
const navLinks = document.querySelectorAll('nav a');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href').substring(1); // Remove '#'
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            nav.classList.remove('active'); // Close mobile menu
        }
    });
});
