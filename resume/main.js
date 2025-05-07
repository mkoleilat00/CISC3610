// Main JavaScript for Marwan Koleilat's Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll behavior
    const navbar = document.querySelector('.navbar');
    
    function toggleNavbarBackground() {
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.9)';
        } else {
            navbar.classList.remove('navbar-scrolled');
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'var(--primary-color)';
        }
    }
    
    // Initial call to set navbar state
    toggleNavbarBackground();
    
    // Add scroll event listener
    window.addEventListener('scroll', toggleNavbarBackground);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
            }
        });
    });
    
    // Contact form validation
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            let valid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Reset previous error messages
            document.querySelectorAll('.error-message').forEach(el => el.remove());
            
            // Validate name
            if (name.value.trim() === '') {
                addErrorMessage(name, 'Please enter your name');
                valid = false;
            }
            
            // Validate email
            if (email.value.trim() === '') {
                addErrorMessage(email, 'Please enter your email');
                valid = false;
            } else if (!isValidEmail(email.value)) {
                addErrorMessage(email, 'Please enter a valid email');
                valid = false;
            }
            
            // Validate subject
            if (subject.value.trim() === '') {
                addErrorMessage(subject, 'Please enter a subject');
                valid = false;
            }
            
            // Validate message
            if (message.value.trim() === '') {
                addErrorMessage(message, 'Please enter your message');
                valid = false;
            }
            
            // If form is valid, simulate submission
            if (valid) {
                // Typically would send data to server here
                // For demonstration, show success message
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
                
                // Simulate API call delay
                setTimeout(() => {
                    // Reset form
                    contactForm.reset();
                    
                    // Show success message
                    const successDiv = document.createElement('div');
                    successDiv.className = 'alert alert-success mt-3';
                    successDiv.role = 'alert';
                    successDiv.innerHTML = 'Your message has been sent successfully!';
                    contactForm.appendChild(successDiv);
                    
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successDiv.remove();
                    }, 5000);
                }, 1500);
            }
        });
    }
    
    // Helper functions
    function addErrorMessage(element, message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-danger mt-1 small';
        errorDiv.textContent = message;
        element.parentNode.appendChild(errorDiv);
        element.classList.add('is-invalid');
    }
    
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Skills animation
    const progressBars = document.querySelectorAll('.progress-bar');
    
    // Animate progress bars when they come into view
    function animateProgressBars() {
        progressBars.forEach(progressBar => {
            const rect = progressBar.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
            
            if (isVisible) {
                const width = progressBar.getAttribute('aria-valuenow') + '%';
                progressBar.style.width = width;
            }
        });
    }
    
    // Reset progress bars initially
    progressBars.forEach(progressBar => {
        progressBar.style.width = '0%';
    });
    
    // Initial call for visible elements
    animateProgressBars();
    
    // Add scroll event listener for animation
    window.addEventListener('scroll', animateProgressBars);
    
    // Add active class to navigation based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Initial call to set active nav link
    updateActiveNavLink();
    
    // Add scroll event listener for active nav link
    window.addEventListener('scroll', updateActiveNavLink);
});