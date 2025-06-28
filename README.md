
## Project Overview

This is a **wedding services website** called "Wedding Tales" built using **HTML, CSS, Bootstrap 5**, and a bit of **JavaScript**. The site is responsive, visually appealing, and provides information about services, pricing, locations, and allows users to book or register/login.

---

## Breakdown

### 1. index.html (Homepage)

- **Bootstrap Integration:** Uses Bootstrap 5 for layout, components, and responsiveness.
- **Navbar:**  
  - Fixed-top, dark-themed, responsive with an offcanvas menu for mobile.
  - Contains links to Home, Projects, Pricing, Locations (with dropdown), Contact Us, and a prominent "Book Now" button.
- **Carousel:**  
  - Bootstrap carousel with three slides, each showing a wedding-related image and caption.
  - Uses indicators and navigation controls.
- **Main Card ("What We Do"):**  
  - Describes the company’s services.
  - Includes a Bootstrap accordion for details about Cinematic Photography, Expert Team, and Pricing.
- **Wedding Styles Section:**  
  - Three cards (Modern Marriage, North Indian, South Indian) with images, descriptions, and "See More" buttons.
- **Pricing Section:**  
  - Three pricing cards (Classic, Plus, Premium) with features and call-to-action buttons.
- **Locations:**  
  - Shows icons for Kolkata, Delhi, and Bangalore.
- **Footer:**  
  - Simple, centered copyright.

---

### 2. book.html (Booking/Login/Register Page)

- **Navbar:**  
  - Similar to the homepage, but with a minor branding typo ("Wedding Angel" instead of "Wedding Tales").
- **Form Section:**  
  - Centered card with toggling between Login and Registration forms.
  - Login: Email and password fields.
  - Register: Name, email, and password fields.
  - Toggle handled by JavaScript.
- **Styling:**  
  - Uses both Bootstrap and custom CSS for a clean, modern look.

---

### 3. style.css (Custom Styles)

- **General:**  
  - Adds padding, smooth scrolling, and customizes Bootstrap components.
- **Navbar:**  
  - Custom hover effects, color tweaks, and branding emphasis.
- **Carousel:**  
  - Ensures images are well-sized, centered, and captions are readable on all devices.
- **Cards:**  
  - Adds hover effects, consistent sizing, and responsive layouts for the wedding styles and pricing sections.
- **Accordion:**  
  - Custom width and centering.
- **Locations:**  
  - Icon sizing, hover effects.
- **Footer:**  
  - Dark background, white text, full-width styling.

---

### 4. script.js (Form Toggle Logic)

- **Functionality:**  
  - Handles toggling between Login and Register forms on the booking page.
  - Changes the form title and visibility based on user interaction.

---

### 5. projects.html

- **Empty:**  
  - No content yet; likely intended for future expansion.

---

## Key Features & Best Practices

- **Responsive Design:**  
  - Uses Bootstrap grid and components for mobile-friendliness.
- **Component Reuse:**  
  - Navbar and card patterns are reused for consistency.
- **Accessibility:**  
  - Uses ARIA attributes and semantic HTML.
- **User Experience:**  
  - Smooth transitions, clear call-to-actions, and interactive elements (accordion, carousel, form toggling).
- **Separation of Concerns:**  
  - Structure (HTML), presentation (CSS), and behavior (JS) are separated.

---

## Potential Talking Points

- **Why Bootstrap?**  
  - Rapid prototyping, built-in responsiveness, and consistent UI components.
- **How is the site made responsive?**  
  - Bootstrap’s grid, media queries, and flexible components.
- **How is interactivity handled?**  
  - Bootstrap’s JS for components (carousel, accordion, offcanvas) and custom JS for form toggling.
- **How is code organized?**  
  - Modular: HTML for structure, CSS for custom styles, JS for dynamic behavior.
- **How would you expand this?**  
  - Add backend for authentication, booking logic, and a real projects page.

---

## Summary

This project demonstrates a solid understanding of **modern web development** using Bootstrap, custom CSS, and JavaScript for a real-world use case. It’s clean, user-friendly, and ready for further expansion (like backend integration or more dynamic content).
