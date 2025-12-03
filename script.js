// Guppty Website - Cluely-Inspired Design
document.addEventListener('DOMContentLoaded', function() {
    
    // Cluely-style page initialization
    initializeCluelyEffects();
    
    // Smooth page reveal animation
    setTimeout(() => {
        document.body.classList.add('page-loaded');
        document.querySelectorAll('section').forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('revealed');
            }, index * 200);
        });
    }, 100);
    
    // Initialize scroll animations
    initializeScrollAnimations();
    
    // Enhanced card animations with blur transitions
    initializeCardAnimations();    // Cluely-style navigation and scroll effects
    initializeNavigation();
    initializeParallaxEffects();
    
    // Enhanced button interactions
    initializeButtonEffects();
    
    // Smooth scroll between sections
    initializeSmoothScrolling();
    
    // Initialize premium customer experience
    initializePremiumExperience();
    
    console.log('✨ Cluely-style Guppty website loaded!');
});

// Cluely-style initialization function
function initializeCluelyEffects() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    // Add loading class
    document.body.classList.add('loading');
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.classList.remove('loading');
        document.body.classList.add('page-loaded');
    }, 300);
}



// Initialize scroll animations like Cluely
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.querySelectorAll('.service-card, .pricing-card, .portfolio-item, .feature-item').forEach(el => {
        observer.observe(el);
    });
}

// Cluely-style card animations
function initializeCardAnimations() {
    const cards = document.querySelectorAll('.service-card, .pricing-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px) scale(0.95)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
            card.classList.add('revealed');
        }, 200 + (index * 150));
    });
}

// Enhanced navigation with Cluely effects
function initializeNavigation() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY;
        
        if (currentScrollY > 100) {
            nav.classList.add('scrolled');
            if (scrollingDown && currentScrollY > 200) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
        } else {
            nav.classList.remove('scrolled');
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Cluely-style parallax effects
function initializeParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax backgrounds
        document.querySelectorAll('.parallax-bg').forEach((bg, index) => {
            const speed = 0.2 + (index * 0.1);
            bg.style.transform = `translateY(${scrolled * speed}px) scale(1.1)`;
        });
        
        // Hero content parallax
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Enhanced button effects
function initializeButtonEffects() {
    const buttons = document.querySelectorAll('button, .hero-cta, .nav-cta');
    
    buttons.forEach(button => {
        // Add ripple effect container
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        
        button.addEventListener('click', function(e) {
            // Create ripple effect
            createRippleEffect(e, this);
            
            // Handle navigation
            if (this.classList.contains('hero-cta') || this.classList.contains('nav-cta')) {
                e.preventDefault();
                const target = document.querySelector('.features') || document.querySelector('.services');
                if (target) {
                    scrollToSection(target);
                }
            }
        });
        
        // Hover effects
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Create ripple effect like Cluely
function createRippleEffect(e, element) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        width: ${size}px;
        height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top: ${e.clientY - rect.top - size / 2}px;
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    `;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Smooth scrolling function
function scrollToSection(target) {
    const offsetTop = target.offsetTop - 80;
    
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Initialize smooth scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                scrollToSection(target);
            }
        });
    });
}



// Premium customer experience enhancements
function initializePremiumExperience() {
    // Add subtle hover animations for better UX
    document.querySelectorAll('.service-card, .pricing-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)';
        });
    });
    
    // Enhanced button interactions
    document.querySelectorAll('button, .hero-cta, .nav-cta').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)';
        });
    });
}

// Add Cluely-style CSS animations
const cluelyStyles = document.createElement('style');
cluelyStyles.textContent = `
    @keyframes ripple-animation {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(4); opacity: 0; }
    }
    

    
    .nav {
        transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    body.loading {
        overflow: hidden;
    }
    
    body.page-loaded {
        overflow-x: hidden;
    }
    
    .service-card, .pricing-card {
        transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .service-card:hover, .pricing-card:hover {
        transform: translateY(-12px) scale(1.03) !important;
    }
    
    button {
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
`;
document.head.appendChild(cluelyStyles);

// Ensure immediate visibility
document.body.style.visibility = 'visible';

// Process timeline animations
function initProcessAnimations() {
    const processSteps = document.querySelectorAll('.premium-step');
    
    const processObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    processSteps.forEach(step => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(40px)';
        step.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        processObserver.observe(step);
    });
}

// Initialize process animations when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initProcessAnimations);
} else {
    initProcessAnimations();
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            mobileToggle.querySelector('i').classList.toggle('fa-bars');
            mobileToggle.querySelector('i').classList.toggle('fa-times');
        });
        
        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
                mobileToggle.querySelector('i').classList.add('fa-bars');
                mobileToggle.querySelector('i').classList.remove('fa-times');
            });
        });
    }
}

// Initialize mobile menu when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
    initMobileMenu();
}