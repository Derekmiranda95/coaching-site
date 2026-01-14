/**
 * Pricing Carousel Functionality
 * Handles side-scroll carousel with navigation arrows and indicators
 */

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('pricingCarousel');
    const prevBtn = document.getElementById('pricingPrev');
    const nextBtn = document.getElementById('pricingNext');
    const indicators = document.querySelectorAll('#pricingIndicators .indicator');
    const wrapper = document.querySelector('.pricing-carousel-wrapper');
    
    if (!carousel || !prevBtn || !nextBtn) return;
    
    const cards = carousel.querySelectorAll('.pricing-card');
    const cardWidth = cards[0].offsetWidth + 30; // card width + gap
    let currentIndex = 0;
    
    // Check if carousel has overflow
    function checkOverflow() {
        if (carousel.scrollWidth > carousel.clientWidth) {
            wrapper.classList.add('has-overflow');
        } else {
            wrapper.classList.remove('has-overflow');
        }
    }
    
    // Update carousel position
    function updateCarousel() {
        const scrollPosition = currentIndex * cardWidth;
        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === cards.length - 1;
    }
    
    // Previous button
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Next button
    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Touch/Mouse drag scrolling detection
    let isScrolling = false;
    let startX = 0;
    let scrollLeft = 0;
    
    carousel.addEventListener('mousedown', (e) => {
        isScrolling = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    
    carousel.addEventListener('mouseleave', () => {
        isScrolling = false;
    });
    
    carousel.addEventListener('mouseup', () => {
        isScrolling = false;
        updateCurrentIndexFromScroll();
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
    
    // Update index based on scroll position
    carousel.addEventListener('scroll', () => {
        clearTimeout(carousel.scrollTimeout);
        carousel.scrollTimeout = setTimeout(() => {
            updateCurrentIndexFromScroll();
        }, 150);
    });
    
    function updateCurrentIndexFromScroll() {
        const scrollPosition = carousel.scrollLeft;
        const newIndex = Math.round(scrollPosition / cardWidth);
        
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cards.length) {
            currentIndex = newIndex;
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
            
            // Update button states
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === cards.length - 1;
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        } else if (e.key === 'ArrowRight' && currentIndex < cards.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Responsive: recalculate on window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            checkOverflow();
            // Maintain current card in view
            const newCardWidth = cards[0].offsetWidth + 30;
            carousel.scrollLeft = currentIndex * newCardWidth;
        }, 250);
    });
    
    // Initial setup
    checkOverflow();
    updateCarousel();
    
    // Ensure first card is centered on mobile
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            carousel.scrollTo({
                left: 0,
                behavior: 'instant'
            });
        }, 100);
    }
});
