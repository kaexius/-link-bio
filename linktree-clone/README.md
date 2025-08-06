# Linktree Clone

A beautiful, modern, and responsive Linktree clone built with HTML, CSS, and JavaScript.

## Features

✨ **Modern Design**
- Clean and minimalist interface
- Beautiful animations and transitions
- Responsive design that works on all devices

🌓 **Dark Mode**
- Toggle between light and dark themes
- Theme preference saved locally

🎨 **Customizable**
- Easy to modify colors, fonts, and layout
- Add/remove links easily
- Customizable profile section

⚡ **Interactive**
- Smooth hover effects
- Ripple effect on link clicks
- Keyboard navigation support
- Loading animations

## Getting Started

1. **Clone or download this repository**

2. **Customize your profile**:
   - Open `index.html`
   - Update the profile image URL (line 18)
   - Change the name (line 20)
   - Update the bio (line 21)
   - Modify social media links (lines 25-41)

3. **Add your links**:
   - In `index.html`, find the links section (lines 46-82)
   - Each link follows this structure:
   ```html
   <a href="YOUR_URL" class="link-item" target="_blank">
       <i class="fas fa-icon"></i>
       <span>Your Link Text</span>
       <i class="fas fa-external-link-alt link-arrow"></i>
   </a>
   ```

4. **Customize colors**:
   - Open `styles.css`
   - Modify the CSS variables in `:root` (lines 2-15) for light mode
   - Modify the variables in `body.dark-mode` (lines 19-29) for dark mode

5. **Deploy**:
   - Upload all files to your web hosting
   - Or use GitHub Pages, Netlify, Vercel, etc.

## File Structure

```
linktree-clone/
│
├── index.html      # Main HTML file
├── styles.css      # Styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Customization Options

### Change Profile Picture
- Replace the URL in the `img` tag (line 18 in index.html)
- You can use services like:
  - Gravatar
  - UI Avatars (currently used)
  - Upload your own image

### Add More Links
Copy this template and add it to the links section:
```html
<a href="https://example.com" class="link-item" target="_blank">
    <i class="fas fa-globe"></i>
    <span>My Website</span>
    <i class="fas fa-external-link-alt link-arrow"></i>
</a>
```

### Icons
- Icons are from Font Awesome 6
- Find more icons at: https://fontawesome.com/icons
- Use the free icons with `fas`, `fab`, or `far` prefix

### Special/Featured Link
Add the `special` class to make a link stand out:
```html
<a href="URL" class="link-item special" target="_blank">
    ...
</a>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Feel free to use this project for personal or commercial purposes. Attribution is appreciated but not required.

## Tips

1. **Performance**: The page is already optimized, but you can further improve it by:
   - Optimizing images
   - Using a CDN for assets
   - Enabling compression on your server

2. **SEO**: Add meta tags in the `<head>` section:
   ```html
   <meta name="description" content="Your description">
   <meta property="og:title" content="Your Name - Links">
   <meta property="og:description" content="Find all my links here">
   <meta property="og:image" content="preview-image.jpg">
   ```

3. **Analytics**: Add Google Analytics or other tracking:
   - Add the tracking script to `index.html`
   - Uncomment the analytics code in `script.js` (lines 134-140)

Enjoy your new Linktree clone! 🚀