// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('open');
    }
  });
});

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Project demo functions
function openProject(url) {
  window.open(url, '_blank');
}

function showComingSoon() {
  alert('This is a demo project. Contact us to see how we can build something similar for your business!');
}

// Project grid hover effects
document.addEventListener('DOMContentLoaded', function() {
  const projectsGrid = document.querySelector('.projects-grid');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (projectsGrid && projectCards.length > 0) {
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        projectsGrid.classList.add('card-hovered');
      });
      
      card.addEventListener('mouseleave', () => {
        projectsGrid.classList.remove('card-hovered');
      });
    });
  }
  
  
  // Feature grid hover effects
  const featuresGrid = document.querySelector('.features-grid');
  const featureItems = document.querySelectorAll('.feature-item');
  
  if (featuresGrid && featureItems.length > 0) {
    featureItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        featuresGrid.classList.add('item-hovered');
      });
      
      item.addEventListener('mouseleave', () => {
        featuresGrid.classList.remove('item-hovered');
      });
    });
  }
  
  // Fade-in animations on scroll
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add a small delay to make it feel more natural
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 100);
      }
    });
  }, observerOptions);
  
  // Observe all fade-in elements except hero
  const fadeInElements = document.querySelectorAll('.fade-in:not(#hero)');
  fadeInElements.forEach(element => {
    observer.observe(element);
  });
  
  // Make hero section visible with a gentle delay
  const heroSection = document.querySelector('#hero');
  if (heroSection) {
    setTimeout(() => {
      heroSection.classList.add('visible');
    }, 200);
  }
});
