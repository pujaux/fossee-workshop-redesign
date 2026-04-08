# FOSSEE Workshop Booking — React Redesign

> A modern, mobile-first redesign of the [FOSSEE Workshop Booking](https://github.com/FOSSEE/workshop_booking) platform, built with React. Focused on performance, accessibility, responsiveness, and clean UI/UX for students accessing the platform primarily on mobile devices.

---

## 🔗 Live Demo / Repository

- **GitHub Repo:** `https://github.com/<your-username>/workshop_booking`  
- **Live Demo:** *(add Vercel/Netlify link if deployed)*

---

## 📸 Before & After Screenshots

### Home Page

| Before | After |
|--------|-------|
| ![Before - Home](./frontend/BeforeScreenshot/Home.png) | ![After - Home](./frontend/Afterscreenshots/Home.png) |

### Workshop Listing

| Before | After |
|--------|-------|
| ![Before - Workshops](./frontend/BeforeScreenshot/Workshops.png) | ![After - Workshops](./frontend/Afterscreenshots/Workshops.png) |

### Home Footer

| Before | After |
|--------|-------|
| ![Before - Footer](./frontend/BeforeScreenshot/Home%20footer.png) | ![After - Footer](./frontend/Afterscreenshots/Home%20footer.png) |

> Additional screenshots available in `/frontend/Afterscreenshots/`

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v16 or above)
- npm or yarn
- Python 3.x (for Django backend)
- pip

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/workshop_booking.git
cd workshop_booking
```

### 2. Backend Setup (Django)

```bash
# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Run the Django development server
python manage.py runserver
```

### 3. Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

The React app will run at `http://localhost:3000` and proxy API calls to `http://localhost:8000`.

---

## 🧠 Reasoning & Design Decisions

### 1. What design principles guided your improvements?

The redesign was grounded in three core principles:

- **Mobile-first design:** Since the target users are students who primarily access the platform on mobile, every component was designed for small screens first and then scaled up. Touch targets are at least 44×44px, font sizes are comfortable for small displays, and navigation collapses into a hamburger menu on mobile.

- **Visual hierarchy & clarity:** A clear typographic scale (using `rem`-based sizing), consistent spacing, and purposeful use of color help users scan and understand content quickly. Workshop cards have a clear hierarchy: title → date → instructor → CTA.

- **Accessibility (a11y):** Semantic HTML (`<main>`, `<nav>`, `<section>`, `<article>`) is used throughout. All interactive elements have visible focus states, ARIA labels are added where needed, and color contrast ratios meet WCAG AA standards. Images include descriptive `alt` text.

- **Progressive disclosure:** Rather than overwhelming users with information, the redesign shows the most important details first (workshop name, date, availability) and hides secondary info behind expandable sections or separate detail pages.

---

### 2. How did you ensure responsiveness across devices?

- Used **CSS Flexbox and Grid** for layout — no fixed pixel widths on containers.
- Applied **responsive breakpoints** via CSS media queries (`sm: 640px`, `md: 768px`, `lg: 1024px`).
- Images use `max-width: 100%` and `height: auto` to prevent overflow.
- Navigation switches from a horizontal bar (desktop) to a collapsible drawer (mobile) using a React state toggle.
- Font sizes and spacing are defined using `clamp()` where appropriate so they scale fluidly between screen sizes.
- Tested manually on Chrome DevTools for common device sizes: iPhone SE, iPhone 14, Pixel 5, iPad, and 1080p desktop.

---

### 3. What trade-offs did you make between design and performance?

| Design Choice | Trade-off | Decision |
|---|---|---|
| Custom fonts (Google Fonts) | Adds ~30KB of network load | Accepted — improves readability significantly; mitigated with `font-display: swap` |
| Smooth CSS transitions/animations | Minor repaint cost | Kept lightweight (`transform`, `opacity` only — GPU-composited) |
| High-resolution workshop banners | Larger images = slower load | Used `lazy` loading (`loading="lazy"`) and compressed images to WebP where possible |
| Component-level code splitting | Slightly more complex build | Implemented `React.lazy` + `Suspense` on route-level components to reduce initial bundle size |
| Avoiding heavy UI libraries (e.g., Material UI) | More manual CSS | Chose this deliberately to keep the bundle lean and avoid unused styles |

Overall, the goal was to keep Lighthouse performance score above **90** on mobile.

---

### 4. What was the most challenging part of the task and how did you approach it?

The most challenging part was **preserving the Django backend integration while rebuilding the frontend in React from scratch**.

The original site used Django templates with server-side rendering. Migrating to a React SPA meant:

1. **Understanding the existing API surface** — I traced through the Django views and URLs to identify which endpoints the React app needed to consume (workshop listings, registration, user auth).
2. **CORS configuration** — Set up `django-cors-headers` to allow the React dev server (`localhost:3000`) to communicate with Django (`localhost:8000`) during development.
3. **Authentication flow** — The existing site used Django session auth. I implemented token-based auth in React using `localStorage` and Axios interceptors to attach tokens to API requests, while keeping the Django backend mostly untouched.
4. **Routing parity** — Mapped all original URL patterns to React Router routes so that existing bookmarks and links continue to work.

The approach was incremental: I started with static UI components, then wired them up to real API data one page at a time, verifying functionality at each step rather than doing a big-bang rewrite.

---

## 🗂 Project Structure

```
workshop_booking/
├── cms/                    # Django CMS app
├── docs/                   # Documentation
├── frontend/               # React application
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-level page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API call functions (Axios)
│   │   ├── styles/         # Global CSS / variables
│   │   └── App.jsx
│   ├── Afterscreenshots/   # After redesign screenshots
│   ├── BeforeScreenshot/   # Original site screenshots
│   └── package.json
├── workshop_app/           # Django workshop app
├── workshop_portal/        # Django portal app
├── manage.py
└── requirements.txt
```

---

## ✅ Submission Checklist

- [x] Code is readable and well-structured
- [x] Git history shows progressive, incremental commits
- [x] README includes reasoning answers and setup instructions
- [x] Before/after screenshots included
- [x] Code is documented where necessary (JSDoc comments on components)
- [x] Mobile-first responsive design
- [x] Accessible markup (semantic HTML + ARIA)

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, React Router v6 |
| Styling | CSS Modules / plain CSS (no heavy UI framework) |
| HTTP Client | Axios |
| Backend | Django 3.x, Django REST Framework |
| Database | SQLite (dev) / PostgreSQL (prod) |
| Deployment | Vercel (frontend) + Railway/Heroku (backend) |

---

## 📄 License

GPL-3.0 — see [LICENSE](./LICENSE) for details.

---

*Redesigned as part of the FOSSEE UI/UX improvement task. Original repository: [FOSSEE/workshop_booking](https://github.com/FOSSEE/workshop_booking)*