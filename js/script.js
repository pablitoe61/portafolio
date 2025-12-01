// Optimized smooth scrolling
document.addEventListener('click', function(e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            const headerHeight = 80; // Fixed height for better performance
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
});

// Throttled header scroll effect
let ticking = false;
function updateHeader() {
    const header = document.querySelector('.header-wrapper');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(17, 17, 17, 0.98)';
    } else {
        header.style.backgroundColor = 'rgba(17, 17, 17, 0.95)';
    }
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger-menu-wrapper');
const mobileMenuWrapper = document.querySelector('.header-nav-menu-wrapper');
const body = document.body;

if (hamburger && mobileMenuWrapper) {
    hamburger.addEventListener('click', function() {
        const isActive = hamburger.classList.contains('active');
        
        if (isActive) {
            // Close menu
            hamburger.classList.remove('active');
            mobileMenuWrapper.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        } else {
            // Open menu
            hamburger.classList.add('active');
            mobileMenuWrapper.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
            body.style.overflow = 'hidden';
        }
    });

    // Close menu when clicking on nav links
    const mobileNavLinks = document.querySelectorAll('.hamburger-desktop-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenuWrapper.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        });
    });

    // Close menu when clicking overlay
    const overlay = document.querySelector('.w-nav-overlay');
    if (overlay) {
        overlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenuWrapper.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        });
    }

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            mobileMenuWrapper.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            body.style.overflow = '';
        }
    });
}

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('input[type="submit"]');
        const originalValue = submitBtn.value;
        submitBtn.value = 'Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('¡Mensaje enviado! Te contactaremos pronto.');
            contactForm.reset();
            submitBtn.value = originalValue;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// Animation system similar to Webflow
function initAnimations() {
    // Hero animations on load
    setTimeout(() => {
        const heroContent = document.querySelector('[data-w-id="hero-content"]');
        const heroContentRight = document.querySelector('[data-w-id="hero-content-right"]');
        const heroBgImage = document.querySelector('[data-w-id="hero-bg-image"]');
        
        if (heroContent) {
            heroContent.style.transform = 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)';
            heroContent.style.opacity = '1';
            heroContent.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        }
        
        if (heroContentRight) {
            heroContentRight.style.transform = 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)';
            heroContentRight.style.opacity = '1';
            heroContentRight.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s';
        }
        
        if (heroBgImage) {
            heroBgImage.style.transform = 'translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)';
            heroBgImage.style.opacity = '1';
            heroBgImage.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s';
        }
    }, 300);
}

// Optimized Intersection Observer
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, { threshold: 0.1 });

// Fast initialization
document.addEventListener('DOMContentLoaded', function() {
    // Quick hero animation
    setTimeout(() => {
        const heroElements = document.querySelectorAll('[data-w-id]');
        heroElements.forEach(el => el.classList.add('animate-in'));
    }, 100);
    
    // Enhanced arrow animation with Webflow-like transforms
    const scrollArrowIcon = document.querySelector('[data-w-id="scroll-arrow-icon"]');
    if (scrollArrowIcon) {
        // Set initial transform state
        scrollArrowIcon.style.transform = 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)';
        scrollArrowIcon.style.transformStyle = 'preserve-3d';
    }
    
    // Static underline - no animation needed
    
    // Observe cards for scroll animation
    const cards = document.querySelectorAll('.card, .inner-container');
    cards.forEach(el => observer.observe(el));
});

// Add CSS for enhanced animations
const style = document.createElement('style');
style.textContent = `
    
    /* Enhanced animations and interactions */
    @media (min-width: 769px) {
        .header-nav-menu-list:not(.hamburger-desktop) {
            display: flex !important;
        }
        
        .header-nav-menu-wrapper {
            display: none !important;
        }
        
        .hamburger-menu-wrapper {
            display: none !important;
        }
    }
    
    /* Smooth transitions for animated elements */
    .animate-in {
        opacity: 1 !important;
        transform: translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0) !important;
    }
    /* Base styles for animated elements */
    [data-w-id] {
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    
    /* Hero animations */
    [data-w-id="hero-image-left"] {
        transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
    }
    
    [data-w-id="hero-image-right"] {
        transform: translate3d(0px, 40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
    }
    
    [data-w-id="hero-content"] {
        transform: translate3d(0px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
    }
    
    /* Card animations */
    .card, .inner-container {
        transform: translate3d(0px, 30px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
        transform-style: preserve-3d;
    }
    
    /* Animated state */
    .animate-in {
        opacity: 1 !important;
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg) !important;
    }
    
    /* Staggered animation delays */
    [data-w-id="hero-image-left"].animate-in {
        transition-delay: 0.1s;
    }
    
    [data-w-id="hero-image-right"].animate-in {
        transition-delay: 0.2s;
    }
    
    [data-w-id="hero-content"].animate-in {
        transition-delay: 0.3s;
    }
`;
document.head.appendChild(style);

// Parallax effect for hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-bg-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Typing effect for hero title that preserves HTML
function typeWriterHTML(element, htmlText, speed = 100) {
    // Create a temporary element to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlText;
    
    // Get the plain text for typing
    const plainText = tempDiv.textContent || tempDiv.innerText;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < plainText.length) {
            // Get current character
            const char = plainText.charAt(i);
            
            // Build the current text
            let currentText = plainText.substring(0, i + 1);
            
            // Apply HTML formatting
            if (currentText.includes('Desarrollador Web')) {
                const parts = currentText.split('Desarrollador Web');
                if (parts.length > 1) {
                    element.innerHTML = parts[0] + '<span class="text-primary">Desarrollador Web</span>' + parts[1];
                } else {
                    // Still typing "Desarrollador Web"
                    const devText = 'Desarrollador Web';
                    const beforeDev = currentText.substring(0, currentText.lastIndexOf(devText.substring(0, currentText.length - parts[0].length)));
                    const typingDev = currentText.substring(beforeDev.length);
                    element.innerHTML = beforeDev + '<span class="text-primary">' + typingDev + '</span>';
                }
            } else {
                element.textContent = currentText;
            }
            
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Simple typing effect without HTML complications
function simpleTypeWriter(element, speed = 100) {
    const originalHTML = element.innerHTML;
    const plainText = element.textContent || element.innerText;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < plainText.length) {
            if (i <= plainText.indexOf('Desarrollador Web')) {
                element.textContent = plainText.substring(0, i + 1);
            } else {
                // Restore original HTML when we reach "Desarrollador Web"
                element.innerHTML = originalHTML;
                return;
            }
            i++;
            setTimeout(type, speed);
        } else {
            // Restore original HTML at the end
            element.innerHTML = originalHTML;
        }
    }
    
    type();
}