// Configuration file for Personal Link Hub
// Edit these values to customize your website

const CONFIG = {
    // Profile Information
    profile: {
        name: "John Doe",
        bio: "Digital creator & entrepreneur sharing insights about tech, business, and life.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        // Alternative: use a local image file
        // image: "./images/profile.jpg"
    },

    // Social Media Links
    social: {
        twitter: "https://twitter.com/yourusername",
        instagram: "https://instagram.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        youtube: "https://youtube.com/@yourusername",
        github: "https://github.com/yourusername",
        facebook: "https://facebook.com/yourusername",
        tiktok: "https://tiktok.com/@yourusername"
    },

    // Custom Links
    links: [
        {
            title: "YouTube Channel",
            description: "Weekly tech reviews and tutorials",
            url: "https://youtube.com",
            icon: "fab fa-youtube"
        },
        {
            title: "Personal Blog",
            description: "Thoughts on technology and innovation",
            url: "https://blog.example.com",
            icon: "fas fa-blog"
        },
        {
            title: "Online Courses",
            description: "Learn web development and design",
            url: "https://courses.example.com",
            icon: "fas fa-graduation-cap"
        },
        {
            title: "Tech Podcast",
            description: "Weekly discussions about the future of tech",
            url: "https://podcast.example.com",
            icon: "fas fa-podcast"
        },
        {
            title: "Newsletter",
            description: "Weekly insights delivered to your inbox",
            url: "https://newsletter.example.com",
            icon: "fas fa-envelope"
        },
        {
            title: "Consulting",
            description: "Let's work together on your next project",
            url: "https://consulting.example.com",
            icon: "fas fa-handshake"
        }
    ],

    // Theme Colors
    theme: {
        primary: "#667eea",
        secondary: "#764ba2",
        // Alternative color schemes:
        // Sunset: primary: "#ff6b6b", secondary: "#feca57"
        // Ocean: primary: "#4facfe", secondary: "#00f2fe"
        // Forest: primary: "#43e97b", secondary: "#38f9d7"
        // Purple: primary: "#fa709a", secondary: "#fee140"
        // Dark: primary: "#2c3e50", secondary: "#34495e"
    },

    // Features
    features: {
        enableThemeToggle: false,
        enableCopyLinks: false,
        enableHoverSounds: false,
        enableAnalytics: false,
        enableLoadingScreen: true
    },

    // Analytics (Google Analytics 4)
    analytics: {
        enabled: false,
        trackingId: "G-XXXXXXXXXX" // Replace with your GA4 tracking ID
    },

    // SEO
    seo: {
        title: "My Links - Personal Link Hub",
        description: "Connect with me through my personal link hub",
        keywords: "personal links, social media, portfolio, contact",
        author: "John Doe",
        ogImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&h=630&fit=crop&crop=face"
    },

    // Footer
    footer: {
        text: "© 2024 John Doe. Made with ❤️",
        showSocialIcons: true
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}