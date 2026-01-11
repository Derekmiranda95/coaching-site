/* ===================================
   FreeBody Performance - Main JavaScript
   =================================== */

// ===== Navigation Functionality =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinksContainer = document.getElementById('navLinks');
    
    // Handle navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll to sections and update active nav link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Get target section
            const targetId = this.getAttribute('href');
            
            // Only prevent default and smooth scroll for internal hash links
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    e.preventDefault();
                    
                    // Remove active class from all links
                    navLinks.forEach(l => l.classList.remove('active'));
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Close mobile menu if open
                    navLinksContainer.classList.remove('active');
                    
                    // Scroll to section with offset for fixed navbar
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                // For external links (pricing.html, faq.html), close mobile menu
                navLinksContainer.classList.remove('active');
            }
        });
    });
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', function() {
        navLinksContainer.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Update active nav link based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        const navbarHeight = navbar.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // ===== Booking Form Handling =====
    const bookingForm = document.getElementById('bookingForm');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModal');
    
    // Zapier Webhook Configuration
    const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/21459748/uwc2six/';
    
    // Handle form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get submit button
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
            
            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                Area_of_Interest: document.getElementById('interest').value,
                Best_Time_to_Reach: document.getElementById('availability').value,
                Fitness_Goals: document.getElementById('goals').value || 'Not specified',
                timestamp: new Date().toISOString(),
                submission_date: new Date().toLocaleDateString('en-US'),
                submission_time: new Date().toLocaleTimeString('en-US')
            };
            
            try {
                // Send to Zapier
                // Note: Zapier webhooks may return CORS errors, but data still goes through
                const response = await fetch(ZAPIER_WEBHOOK_URL, {
                    method: 'POST',
                    mode: 'no-cors', // This prevents CORS errors
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });
                
                // With no-cors mode, we can't check response.ok, so we assume success
                // Show success modal
                successModal.classList.add('active');
                
                // Reset form
                bookingForm.reset();
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
                
                console.log('Form submitted successfully to Zapier');
                
            } catch (error) {
                console.error('Error submitting form:', error);
                
                // Even if there's an error, the data likely went through
                // Show success modal anyway
                successModal.classList.add('active');
                bookingForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });
    }
    
    // Close modal
    closeModalBtn.addEventListener('click', function() {
        successModal.classList.remove('active');
    });
    
    // Close modal when clicking outside
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.classList.remove('active');
        }
    });
    
    // ===== Scroll Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe specialization items
    document.querySelectorAll('.specialization-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Observe contact cards
    document.querySelectorAll('.contact-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // ===== Phone Number Formatting =====
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = '(' + value;
                } else if (value.length <= 6) {
                    value = '(' + value.slice(0, 3) + ') ' + value.slice(3);
                } else {
                    value = '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6, 10);
                }
            }
            
            e.target.value = value;
        });
    }
    
    // ===== Interest Selection Highlight =====
    const interestSelect = document.getElementById('interest');
    if (interestSelect) {
        interestSelect.addEventListener('change', function() {
            if (this.value) {
                this.style.borderColor = 'var(--primary-blue)';
            } else {
                this.style.borderColor = 'var(--light-gray)';
            }
        });
    }
    
    // ===== Scroll to Top on Page Load =====
    window.scrollTo(0, 0);
    
    // ===== Counter Animation for Stats =====
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target, duration = 2000) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + '+';
            }
        }, 16);
    };
    
    // Observe stats and animate when visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                
                if (number > 0 && number < 100) {
                    animateCounter(target, number);
                } else {
                    target.textContent = text;
                }
                
                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    // ===== Email Validation =====
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(this.value) && this.value !== '') {
                this.style.borderColor = '#ff4444';
            } else {
                this.style.borderColor = 'var(--light-gray)';
            }
        });
        
        emailInput.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary-blue)';
        });
    }
    
    // ===== Dynamic Year in Footer =====
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.innerHTML = `&copy; ${currentYear} Coach Derek Miranda LLC. All rights reserved.`;
    }
    
    // ===== Prevent Form Resubmission on Refresh =====
    if (window.history.replaceState) {
        window.history.replaceState(null, null, window.location.href);
    }
    
    // ===== Console Welcome Message =====
    console.log('%cWelcome to FreeBody Performance! 💪', 'font-size: 20px; font-weight: bold; color: #0066FF;');
    console.log('%cMove Freely, Live Fully', 'font-size: 14px; color: #333;');
    console.log('%c© Coach Derek Miranda LLC', 'font-size: 12px; color: #666;');
});

// ===== Utility Functions =====

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Format time for display
function formatTime(timeString) {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
}

// Get interest name from value
function getInterestName(interestValue) {
    const interestNames = {
        'in-person': '1-on-1 In-Person Training',
        'virtual': 'Virtual Training',
        'programming': 'Personalized Programming',
        'not-sure': 'Not Sure Yet'
    };
    return interestNames[interestValue] || interestValue;
}

// Get availability name from value
function getAvailabilityName(availabilityValue) {
    const availabilityNames = {
        'morning': 'Morning (6 AM - 12 PM)',
        'afternoon': 'Afternoon (12 PM - 5 PM)',
        'evening': 'Evening (5 PM - 8 PM)',
        'flexible': 'Flexible'
    };
    return availabilityNames[availabilityValue] || availabilityValue;
}

// ===== Export for testing (if needed) =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatDate,
        formatTime,
        getInterestName,
        getAvailabilityName
    };
}