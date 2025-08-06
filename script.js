// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize the application
    initApp();
    
    // Add event listeners
    setupEventListeners();
    
    // Add smooth scrolling
    setupSmoothScrolling();
    
    // Add analytics tracking (optional)
    setupAnalytics();
});

function initApp() {
    console.log('Linktree-style website initialized');
    
    // Add loading animation to body
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
}

function setupEventListeners() {
    // Handle link card clicks
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            const link = this.getAttribute('data-link');
            if (link) {
                // Add loading state
                this.classList.add('loading');
                
                // Track click (analytics)
                trackLinkClick(this.querySelector('h3').textContent, link);
                
                // Simulate loading delay for better UX
                setTimeout(() => {
                    window.open(link, '_blank');
                    this.classList.remove('loading');
                }, 300);
            }
        });
        
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Handle social media links
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the platform from the icon class
            const icon = this.querySelector('i');
            const platform = icon.className.split(' ')[1].replace('fa-', '');
            
            // You can customize these URLs
            const socialUrls = {
                'twitter': 'https://twitter.com/yourusername',
                'instagram': 'https://instagram.com/yourusername',
                'linkedin': 'https://linkedin.com/in/yourusername',
                'github': 'https://github.com/yourusername'
            };
            
            if (socialUrls[platform]) {
                window.open(socialUrls[platform], '_blank');
            }
        });
    });
    
    // Add profile image click effect
    const profileImage = document.getElementById('profile-pic');
    if (profileImage) {
        profileImage.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
}

function setupSmoothScrolling() {
    // Smooth scroll for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupAnalytics() {
    // Simple analytics tracking
    // You can replace this with Google Analytics or other tracking services
    
    // Track page view
    trackPageView();
    
    // Track time spent on page
    let startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeSpent = Date.now() - startTime;
        trackTimeSpent(timeSpent);
    });
}

function trackLinkClick(linkTitle, linkUrl) {
    // Simple console logging for demo purposes
    // Replace with actual analytics service
    console.log(`Link clicked: ${linkTitle} -> ${linkUrl}`);
    
    // You can send this data to your analytics service
    // Example: gtag('event', 'click', { 'link_title': linkTitle, 'link_url': linkUrl });
}

function trackPageView() {
    console.log('Page viewed: Linktree-style website');
    // Replace with actual analytics service
    // Example: gtag('config', 'GA_MEASUREMENT_ID');
}

function trackTimeSpent(timeSpent) {
    console.log(`Time spent on page: ${Math.round(timeSpent / 1000)} seconds`);
    // Replace with actual analytics service
}

// Add some utility functions
function addCustomLink(title, description, url, icon = 'fas fa-link') {
    const linksSection = document.querySelector('.links-section');
    
    const newLink = document.createElement('a');
    newLink.className = 'link-card';
    newLink.setAttribute('data-link', url);
    newLink.href = '#';
    
    newLink.innerHTML = `
        <div class="link-icon">
            <i class="${icon}"></i>
        </div>
        <div class="link-content">
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
        <div class="link-arrow">
            <i class="fas fa-arrow-right"></i>
        </div>
    `;
    
    linksSection.appendChild(newLink);
    
    // Re-add event listener to new link
    newLink.addEventListener('click', function(e) {
        e.preventDefault();
        const link = this.getAttribute('data-link');
        if (link) {
            this.classList.add('loading');
            setTimeout(() => {
                window.open(link, '_blank');
                this.classList.remove('loading');
            }, 300);
        }
    });
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    const linkCards = document.querySelectorAll('.link-card');
    const currentIndex = Array.from(linkCards).findIndex(card => card === document.activeElement);
    
    switch(e.key) {
        case 'ArrowDown':
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % linkCards.length;
            linkCards[nextIndex].focus();
            break;
        case 'ArrowUp':
            e.preventDefault();
            const prevIndex = currentIndex <= 0 ? linkCards.length - 1 : currentIndex - 1;
            linkCards[prevIndex].focus();
            break;
        case 'Enter':
        case ' ':
            if (document.activeElement.classList.contains('link-card')) {
                e.preventDefault();
                document.activeElement.click();
            }
            break;
    }
});

// Add focus styles for accessibility
document.addEventListener('focusin', function(e) {
    if (e.target.classList.contains('link-card')) {
        e.target.style.outline = '2px solid #667eea';
        e.target.style.outlineOffset = '2px';
    }
});

document.addEventListener('focusout', function(e) {
    if (e.target.classList.contains('link-card')) {
        e.target.style.outline = 'none';
    }
});

// Add service worker for offline support (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}

// Add theme toggle functionality (optional)
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.setAttribute('data-theme', savedTheme);
}

// Export functions for potential use in console
window.LinktreeApp = {
    addCustomLink,
    toggleTheme,
    trackLinkClick
};