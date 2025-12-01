// Optimized JavaScript for better performance

// Optimized smooth scrolling with reduced calculations
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Optimized navbar scroll effect with throttling
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let isScrolling = false;
    
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        }
        isScrolling = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(updateNavbar);
            isScrolling = true;
        }
    });
}

// Simple form handling
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('¡Gracias por tu mensaje! Te contactaré pronto.');
        });
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initNavbarScroll();
    initContactForm();
});

// Performance monitoring (optional - can be removed in production)
window.addEventListener('load', function() {
    if ('performance' in window) {
        const loadTime = performance.now();
        console.log('Page loaded in:', Math.round(loadTime), 'ms');
    }
});