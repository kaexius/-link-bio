// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Add click event listeners to all link cards
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            
            const url = this.getAttribute('data-url');
            if (url) {
                // Add a small delay for visual feedback
                setTimeout(() => {
                    window.open(url, '_blank');
                }, 150);
            }
        });
        
        // Add keyboard support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Make cards focusable
        card.setAttribute('tabindex', '0');
    });
    
    // Add social media link functionality
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            
            // You can customize these URLs
            const socialLinks = {
                'fa-twitter': 'https://twitter.com/yourusername',
                'fa-instagram': 'https://instagram.com/yourusername',
                'fa-linkedin': 'https://linkedin.com/in/yourusername',
                'fa-youtube': 'https://youtube.com/@yourusername'
            };
            
            const iconClass = this.querySelector('i').classList[1];
            const url = socialLinks[iconClass];
            
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add loading animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all link cards for animation
    linkCards.forEach(card => {
        observer.observe(card);
    });
    
    // Add hover sound effect (optional)
    function addHoverSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        linkCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Create a subtle hover sound
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
                
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            });
        });
    }
    
    // Uncomment the line below if you want hover sounds
    // addHoverSound();
    
    // Add analytics tracking (optional)
    function trackClick(linkText, url) {
        // You can integrate with Google Analytics or other tracking services here
        console.log(`Link clicked: ${linkText} -> ${url}`);
        
        // Example Google Analytics 4 event
        if (typeof gtag !== 'undefined') {
            gtag('event', 'link_click', {
                'link_text': linkText,
                'link_url': url
            });
        }
    }
    
    // Add click tracking to link cards
    linkCards.forEach(card => {
        card.addEventListener('click', function() {
            const linkText = this.querySelector('h3').textContent;
            const url = this.getAttribute('data-url');
            trackClick(linkText, url);
        });
    });
    
    // Add theme toggle functionality (optional)
    function createThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.innerHTML = '🌙';
        themeToggle.className = 'theme-toggle';
        themeToggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            color: white;
            font-size: 20px;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 1000;
        `;
        
        document.body.appendChild(themeToggle);
        
        let isDark = false;
        
        themeToggle.addEventListener('click', () => {
            isDark = !isDark;
            document.body.classList.toggle('dark-theme');
            themeToggle.innerHTML = isDark ? '☀️' : '🌙';
        });
    }
    
    // Uncomment the line below if you want a theme toggle
    // createThemeToggle();
    
    // Add copy link functionality (optional)
    function addCopyLinkFeature() {
        linkCards.forEach(card => {
            const copyButton = document.createElement('button');
            copyButton.innerHTML = '📋';
            copyButton.className = 'copy-button';
            copyButton.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: none;
                background: rgba(102, 126, 234, 0.1);
                color: #667eea;
                font-size: 12px;
                cursor: pointer;
                opacity: 0;
                transition: all 0.3s ease;
            `;
            
            card.style.position = 'relative';
            card.appendChild(copyButton);
            
            card.addEventListener('mouseenter', () => {
                copyButton.style.opacity = '1';
            });
            
            card.addEventListener('mouseleave', () => {
                copyButton.style.opacity = '0';
            });
            
            copyButton.addEventListener('click', (e) => {
                e.stopPropagation();
                const url = card.getAttribute('data-url');
                navigator.clipboard.writeText(url).then(() => {
                    copyButton.innerHTML = '✅';
                    setTimeout(() => {
                        copyButton.innerHTML = '📋';
                    }, 2000);
                });
            });
        });
    }
    
    // Uncomment the line below if you want copy link functionality
    // addCopyLinkFeature();
    
    // Add loading screen
    function showLoadingScreen() {
        const loadingScreen = document.createElement('div');
        loadingScreen.id = 'loading-screen';
        loadingScreen.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        `;
        
        loadingScreen.innerHTML = `
            <div style="text-align: center; color: white;">
                <div style="width: 50px; height: 50px; border: 3px solid rgba(255,255,255,0.3); border-top: 3px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
                <p>Loading...</p>
            </div>
        `;
        
        document.body.appendChild(loadingScreen);
        
        // Hide loading screen after content loads
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 1000);
    }
    
    // Add CSS for loading animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Show loading screen
    showLoadingScreen();
    
    // Add error handling for broken images
    const profileImage = document.getElementById('profile-pic');
    if (profileImage) {
        profileImage.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjIwIiBmaWxsPSIjQ0JENUUwIi8+CjxwYXRoIGQ9Ik0yNSA5NUMzNSA4NSA0NSA4MCA1NSA4NUM2NSA5MCA3NSA5MCA4NSA5NUM5NSA5MCAxMDUgODUgMTE1IDk1VjEyNUMxMTUgMTM1IDEwNSAxNDAgOTUgMTM1SDg1Qzc1IDE0MCA2NSAxNDAgNTUgMTM1SDQ1QzM1IDE0MCAyNSAxMzUgMjUgMTI1Vjk1WiIgZmlsbD0iI0NCREU1RCIvPgo8L3N2Zz4K';
        });
    }
});

// Add service worker for PWA functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}