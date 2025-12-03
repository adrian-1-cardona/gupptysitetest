console.log('Guppty website starting fresh...');

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

// Contact Form Functionality
function toggleContactForm() {
    const modal = document.getElementById('contactModal');
    const isActive = modal.classList.contains('active');
    
    if (isActive) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // Remove focus trap
        document.removeEventListener('keydown', handleModalKeydown);
    } else {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // Add focus trap
        document.addEventListener('keydown', handleModalKeydown);
        // Focus first input
        setTimeout(() => {
            const firstInput = modal.querySelector('input[type="text"]');
            if (firstInput) firstInput.focus();
        }, 100);
    }
}

// Handle modal keyboard navigation (accessibility)
function handleModalKeydown(e) {
    if (e.key === 'Escape') {
        toggleContactForm();
        return;
    }
    
    // Focus trap for modal
    if (e.key === 'Tab') {
        const modal = document.getElementById('contactModal');
        const focusableElements = modal.querySelectorAll(
            'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    }
}

// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Add click outside modal to close
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                toggleContactForm();
            }
        });
    }
    
    // Initialize lazy loading for images
    initializeLazyLoading();
    
    // Initialize enhanced accessibility
    initializeAccessibilityFeatures();
});

async function handleFormSubmission(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    try {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        // Simulate form submission (replace with actual endpoint)
        await simulateFormSubmission(data);
        
        // Show success message
        document.getElementById('contactForm').style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
        
        // Auto close after 3 seconds
        setTimeout(() => {
            toggleContactForm();
            // Reset form
            e.target.reset();
            document.getElementById('contactForm').style.display = 'block';
            document.getElementById('formSuccess').style.display = 'none';
        }, 3000);
        
    } catch (error) {
        console.error('Form submission error:', error);
        alert('There was an error sending your message. Please try again or contact us directly at cardona.adrian.1029@gmail.com');
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// Simulate form submission (replace with real API endpoint)
function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form data:', data);
            // Here you would typically send data to your backend
            // fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
            resolve();
        }, 1500);
    });
}

// Enhanced lazy loading with intersection observer
function initializeLazyLoading() {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px'
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Enhanced accessibility features
function initializeAccessibilityFeatures() {
    // Improved focus management
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Mobile menu accessibility
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            const isOpen = navLinks.classList.contains('mobile-open');
            
            // Update aria-expanded
            this.setAttribute('aria-expanded', !isOpen);
            
            // Update icon
            const icon = this.querySelector('i');
            if (!isOpen) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Announce route changes to screen readers
    const sections = document.querySelectorAll('section[id]');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionName = entry.target.id || 'main content';
                announceToScreenReader(`Entered ${sectionName} section`);
            }
        });
    }, {
        threshold: 0.5
    });
    
    sections.forEach(section => sectionObserver.observe(section));
}

// Screen reader announcements
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Performance monitoring and optimization
function initializePerformanceMonitoring() {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
        // This would integrate with web-vitals library if loaded
        console.log('Performance monitoring initialized');
    }
    
    // Monitor page load time
    window.addEventListener('load', function() {
        const loadTime = performance.now();
        console.log('Page load time:', loadTime.toFixed(2), 'ms');
        
        // Track if load time is over 3 seconds
        if (loadTime > 3000) {
            console.warn('Page load time exceeds 3 seconds');
        }
        
        // Initialize performance optimizations after load
        requestIdleCallback(() => {
            initializeAdvancedAnimations();
            preloadCriticalResources();
        });
    });
}

// Advanced animations with performance optimization
function initializeAdvancedAnimations() {
    // Intersection observer for staggered animations
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered animation delay
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .service-card, .pricing-card, .portfolio-card, .premium-benefit-card').forEach(el => {
        animationObserver.observe(el);
    });
    
    // Mouse movement parallax for hero section
    let mouseX = 0, mouseY = 0;
    let rafId = null;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        
        if (!rafId) {
            rafId = requestAnimationFrame(updateParallax);
        }
    });
    
    function updateParallax() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && window.scrollY < window.innerHeight) {
            const transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
            heroContent.style.transform = transform;
        }
        rafId = null;
    }
}

// Preload critical resources
function preloadCriticalResources() {
    // Preload important images
    const criticalImages = [
        'IMG_3882.JPG',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=entropy&auto=format'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // Preconnect to external domains
    const externalDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://cdnjs.cloudflare.com'
    ];
    
    externalDomains.forEach(domain => {
        if (!document.querySelector(`link[href="${domain}"]`)) {
            const link = document.createElement('link');
            link.rel = 'preconnect';
            link.href = domain;
            if (domain.includes('gstatic')) {
                link.crossOrigin = '';
            }
            document.head.appendChild(link);
        }
    });
}

// Initialize all performance features
document.addEventListener('DOMContentLoaded', function() {
    initializePerformanceMonitoring();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Initialize advanced features on interaction
    let interactionInitialized = false;
    const initOnInteraction = () => {
        if (!interactionInitialized) {
            interactionInitialized = true;
            initializeAdvancedAnimations();
            document.removeEventListener('click', initOnInteraction);
            document.removeEventListener('scroll', initOnInteraction);
            document.removeEventListener('keydown', initOnInteraction);
        }
    };
    
    document.addEventListener('click', initOnInteraction);
    document.addEventListener('scroll', initOnInteraction);
    document.addEventListener('keydown', initOnInteraction);
});