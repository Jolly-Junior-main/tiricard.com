# Tiricard - What We Built

This document serves as a summary of the features, design, and architecture we've built for the Tiricard platform so far.

## 1. The Core Concept
**Tiricard** is a premium, high-end platform for creating and managing digital invitations, RSVP tracking, and QR code check-ins for exclusive events. 

## 2. The Landing Page (Home)
- **Cinematic Theme:** We designed a luxurious, dark-themed landing page utilizing rand-bg (off-white/beige), rand-charcoal, and rand-gold accent colors.
- **Dynamic Marquees:** 
  - **Ticketing/Case Studies Section:** A scrolling marquee displaying cards with beautiful Unsplash background images overlayed with a subtle blend.
  - **Past Events Section:** A dedicated section displaying 8 past premium events (galas, weddings, etc.) using smooth marquee animations and rich image backgrounds.
- **Navigation:** The homepage features a "Discover Events" button that routes users to our dedicated events portal.

## 3. The Discover Events Hub (/events)
Originally designed as a "PulseHub Portal" modal, we completely overhauled this into a fully standalone page dedicated to exploring upcoming premium events.
- **Layout Structure:**
  - **Featured Event (Hero):** Spans the full width at the top, complete with event details, dates, and a fully functional real-time countdown timer ticking down to the event.
  - **Upcoming Events & Filters:** Placed distinctly on the next row, featuring an interactive search bar, a filter button, and clickable category tabs (e.g., Galas, Weddings, Corporate, Exhibitions).
  - **Events Grid:** A responsive grid displaying upcoming events with their images, tags, dates, and attendee counts.
  - **Trending This Week:** A horizontal scrolling section showcasing highly anticipated, fast-filling events.
  - **Host Banner:** A stylish Tiricard-branded banner at the bottom encouraging users to create their own event and manage their guest list.

## 4. Smart Navigation (Navbar)
- **Dynamic Color Theming:** The Navbar intelligently adapts its text color based on the current page and scroll position. On the dark home page, it uses white text that transitions to dark when scrolled. On the light-themed /events page, it automatically defaults to charcoal text to ensure perfect visibility against the beige background.
- **Mobile Menu:** A beautifully animated, full-screen mobile menu.

## 5. Tech Stack & Deployment
- **Framework:** Next.js (App Router) with React.
- **Styling:** Tailwind CSS v4 for utility-first, highly customized styling.
- **Deployment:** Hosted on Cloudflare Pages, utilizing the Wrangler CLI for direct static exports (out/ directory).
