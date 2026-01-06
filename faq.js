/* ===================================
   FAQ Page JavaScript
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // FAQ Accordion Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Toggle current item
            const isActive = item.classList.contains('active');
            
            // Close all other items (optional - remove these lines if you want multiple items open at once)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
    
    // Optional: Open first FAQ item by default
    if (faqItems.length > 0) {
        faqItems[0].classList.add('active');
    }
    
    // Check if URL has a hash to open specific FAQ
    const hash = window.location.hash;
    if (hash) {
        const targetItem = document.querySelector(hash);
        if (targetItem && targetItem.classList.contains('faq-item')) {
            // Close all items
            faqItems.forEach(item => item.classList.remove('active'));
            // Open target item
            targetItem.classList.add('active');
            // Scroll to target
            setTimeout(() => {
                targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }
});
