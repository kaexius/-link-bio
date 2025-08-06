// Configuration file for Linktree-style website
// Edit these values to customize your website

const CONFIG = {
    // Profile Information
    profile: {
        name: "John Doe",
        bio: "Digital Creator & Web Developer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        // You can also use a local image: "./images/profile.jpg"
    },

    // Social Media Links
    social: {
        twitter: "https://twitter.com/yourusername",
        instagram: "https://instagram.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        github: "https://github.com/yourusername",
        youtube: "https://youtube.com/@yourchannel",
        tiktok: "https://tiktok.com/@yourusername",
        facebook: "https://facebook.com/yourusername",
        snapchat: "https://snapchat.com/add/yourusername"
    },

    // Custom Links
    links: [
        {
            title: "My Website",
            description: "Check out my portfolio",
            url: "https://example.com",
            icon: "fas fa-globe"
        },
        {
            title: "YouTube Channel",
            description: "Watch my latest videos",
            url: "https://youtube.com",
            icon: "fab fa-youtube"
        },
        {
            title: "Spotify Playlist",
            description: "My favorite music",
            url: "https://spotify.com",
            icon: "fab fa-spotify"
        },
        {
            title: "GitHub",
            description: "My open source projects",
            url: "https://github.com",
            icon: "fab fa-github"
        },
        {
            title: "Contact Me",
            description: "Get in touch",
            url: "mailto:hello@example.com",
            icon: "fas fa-envelope"
        }
    ],

    // Theme Configuration
    theme: {
        // Background gradient colors
        primaryColor: "#667eea",
        secondaryColor: "#764ba2",
        
        // Text colors
        textColor: "#333",
        textColorLight: "#718096",
        
        // Card styling
        cardBackground: "rgba(255, 255, 255, 0.95)",
        cardBorder: "rgba(255, 255, 255, 0.2)",
        
        // Animation settings
        animationDuration: "0.3s",
        hoverScale: "1.02",
        hoverTranslateY: "-4px"
    },

    // Analytics Configuration
    analytics: {
        enabled: true,
        // Add your Google Analytics ID here
        googleAnalyticsId: "GA_MEASUREMENT_ID",
        // Add your Facebook Pixel ID here
        facebookPixelId: "FACEBOOK_PIXEL_ID"
    },

    // SEO Configuration
    seo: {
        title: "My Links - Personal Bio",
        description: "Connect with me on social media and check out my latest projects",
        keywords: "personal, links, bio, social media, portfolio",
        author: "John Doe",
        ogImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1200&h=630&fit=crop&crop=face"
    },

    // Footer Configuration
    footer: {
        text: "© 2024 My Links. Made with ❤️",
        showPoweredBy: true
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}