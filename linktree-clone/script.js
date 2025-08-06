// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Add ripple effect to links
const linkItems = document.querySelectorAll('.link-item');

linkItems.forEach(link => {
    link.addEventListener('click', function(e) {
        // Create ripple element
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        
        // Calculate position
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        // Style the ripple
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        // Add to link
        this.appendChild(ripple);
        
        // Remove after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .link-item {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    .dark-mode .ripple {
        background: rgba(255, 255, 255, 0.3);
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Dynamic greeting based on time
function updateGreeting() {
    const hour = new Date().getHours();
    const profileName = document.querySelector('.profile-name');
    const name = profileName.textContent;
    
    let greeting = '';
    if (hour < 12) {
        greeting = 'Good Morning';
    } else if (hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }
    
    // Optional: Add greeting to the page
    // You can uncomment this to show a dynamic greeting
    // const greetingElement = document.createElement('p');
    // greetingElement.className = 'greeting';
    // greetingElement.textContent = `${greeting}! Welcome to my links`;
    // document.querySelector('.profile').insertBefore(greetingElement, document.querySelector('.profile-bio'));
}

updateGreeting();

// Add hover sound effect (optional - requires audio file)
// Uncomment if you want to add sound effects
/*
const hoverSound = new Audio('hover.mp3');
hoverSound.volume = 0.2;

linkItems.forEach(link => {
    link.addEventListener('mouseenter', () => {
        hoverSound.currentTime = 0;
        hoverSound.play().catch(() => {});
    });
});
*/

// Analytics tracking (optional)
linkItems.forEach((link, index) => {
    link.addEventListener('click', () => {
        // Track link clicks
        console.log(`Link clicked: ${link.querySelector('span').textContent}`);
        
        // You can integrate with Google Analytics or other analytics services here
        // Example:
        // gtag('event', 'click', {
        //     'event_category': 'Link',
        //     'event_label': link.querySelector('span').textContent
        // });
    });
});

// Smooth scroll for any internal links (if added in the future)
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

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Keyboard navigation
let currentFocus = -1;
const focusableElements = [...document.querySelectorAll('.link-item'), ...document.querySelectorAll('.social-icon')];

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        currentFocus = (currentFocus + 1) % focusableElements.length;
        focusableElements[currentFocus].focus();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        currentFocus = currentFocus <= 0 ? focusableElements.length - 1 : currentFocus - 1;
        focusableElements[currentFocus].focus();
    }
});