// Main JavaScript utilities for site interactivity

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add loading state to external links
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    if (!link.querySelector('i')) {
      link.innerHTML += ' <i class="bi bi-box-arrow-up-right" style="font-size: 0.7em; margin-left: 0.25rem;"></i>';
    }
  });

  // Initialize tooltips if Bootstrap data attributes are used
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.navbar-nav a').forEach(link => {
  link.addEventListener('click', function() {
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarToggle.click();
    }
  });
});
