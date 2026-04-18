
---

# Educase ReactJS Internship Assignment – PopX Onboarding UI

Pixel-perfect implementation of the **PopX mobile onboarding flow** for the Educase ReactJS Internship qualifier task, built with React + Vite and Tailwind CSS.

The app recreates the given Adobe XD design with:

- Centered mobile interface inside a device frame.
- Multi-screen navigation (Home → Signup / Login → Profile).
- Form validation and disabled states matching the design.
- Toast notifications on successful Login and Registration.

---

## Live URLs

- **Live App (Vercel)**:  

- **Public Repository (GitHub)**:  
  [https://github.com/AnkitDimri4/educase-reactjs-intern-assignment](https://github.com/AnkitDimri4/educase-reactjs-intern-assignment.git)

- **Design (Adobe XD)**:  
  [https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd](https://xd.adobe.com/view/b68eea25-003d-4a5d-8fdd-d463eeb20b32-e3dd)

---

## Tech Stack

**Core**

[![React](https://img.shields.io/badge/React-18/19-61DAFB?logo=react&logoColor=white&style=for-the-badge)](#)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)](#)
[![React Router](https://img.shields.io/badge/React_Router_DOM-CA4245?logo=react-router&logoColor=white&style=for-the-badge)](#)

**Styling & UI**

[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?logo=tailwindcss&logoColor=38BDF8&style=for-the-badge)](#)
[![React Toastify](https://img.shields.io/badge/React--Toastify-20232A?logo=react&logoColor=61DAFB&style=for-the-badge)](#)

**Tooling**

[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white&style=for-the-badge)](#)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)](#)

---

## Screens / Flows Implemented

The app follows the flows shown in the Adobe XD design:

1. **Home (Welcome)**  
   - Title: “Welcome to PopX”.  
   - Subtext lorem as in design.  
   - “Create Account” button → navigates to Signup screen.  
   - “Already Registered? Login” button → navigates to Login screen.

2. **Signup (Create Account)**  
   - Form fields:
     - Full Name (required)
     - Phone number (required)
     - Email address (required)
     - Password (required)
     - Company name (optional)
     - Are you an Agency? (Yes/No required radio)
   - Primary button:
     - Disabled (grey) when form is incomplete.
     - Enabled (blue) when all required fields are filled.
   - On submit:
     - Shows toast “Account created successfully”.
     - Navigates to Profile screen with name + email.

3. **Login (Signin)**  
   - Fields:
     - Email address (basic email format check)
     - Password
   - Login button:
     - Disabled until both fields are filled and email looks valid.
   - On submit:
     - Shows toast “Logged in successfully”.
     - Navigates to Profile screen with email.

4. **Profile / Account Settings**  
   - Header: “Account Settings”.
   - User card with:
     - Avatar + camera icon overlay.
     - Name and email (from navigation state, with sensible defaults).
     - Bio text matching the design (Lorem Ipsum).
   - Horizontal dashed separator as in the XD.
   - Logout button with icon:
     - On click, navigates back to Home.

5. **404 Page**  
   - Simple centered “404 – Page not found” message for any unknown route.

---

## Layout & Pixel-Perfection Details

- The mobile UI is **centered** on the page using a device frame container:
  - Fixed width and height approximating the mobile screen from the XD.
  - Rounded corners, white background, subtle shadow.
- The outer page uses `min-h-screen` and a body background color that matches the design.
- Colors, typography, and spacing:
  - Colors configured via Tailwind theme tokens:
    - `--color-primary`, `--color-blue`, `--color-purple`, `--color-light-gray`, `--color-warning`, `--color-body`.
  - Font: Rubik from Google Fonts.
  - Spacing and font sizes match the XD using Tailwind utilities and custom values where needed.

---

## Project Structure

```text
src/
├─ components/
│  ├─ Button.jsx          # Reusable button with variants (primary, secondary, disabled, grey)
│  ├─ Card.jsx            # Profile card with avatar, camera icon, logout button
│  ├─ Heading.jsx         # Shared heading component
│  └─ Input.jsx           # Floating-label input component
├─ pages/
│  ├─ Home.jsx            # Welcome screen
│  ├─ Login.jsx           # Signin screen
│  ├─ Registration.jsx    # Signup screen
│  ├─ AccountSettings.jsx # Profile / account settings
│  └─ index.js            # Barrel exports for pages
├─ router.jsx             # React Router configuration
├─ App.jsx                # Layout wrapper + ToastContainer
├─ main.jsx               # App bootstrap
└─ index.css              # Tailwind config, theme colors, global styles
```

---

## Key Implementation Details

### Layout Wrapper (`App.jsx`)

- Centers the mobile interface and provides the background and shadow.
- Uses React Router’s `<Outlet />` for nested routing.
- Hosts the global `<ToastContainer />` for toast notifications.

### Buttons

- Shared `Button` component with variants:
  - `primary` (blue)
  - `secondary` (purple)
  - `grey`
  - `disabled`
- Button automatically applies the disabled style when `disabled={true}`, regardless of `category`.

### Inputs

- Floating-label style:
  - Label positioned above the input, with a background matching the body color.
  - Required fields show a red `*`.
- Safe `id`/`name` handling:
  - Generates an ID from the label if `id`/`name` are not provided.

### Forms & Validation

- Signup:
  - Form disabled until required fields and “Are you an Agency?” are filled.
- Login:
  - Simple email validation with a regex.
  - Shows a small inline error if the email format is invalid.

### Toast Notifications

- React-Toastify integrated with a single `<ToastContainer />` in `App.jsx`.
- Used for success messages:
  - Login success.
  - Registration success.
- Configured with:
  - `position="top-center"`
  - `autoClose={2000}`
  - `theme="colored"`

---

## Getting Started (Local Development)

1. **Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/educase-reactjs-intern-assignment.git
cd educase-reactjs-intern-assignment
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the dev server**

```bash
npm run dev
```

4. Open the URL shown in the terminal (usually `http://localhost:5173`).

---

## Build & Deployment

### Build

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

### Deploy to Vercel

- Connect this GitHub repository to Vercel.
- Framework preset: **Vite**.
- Build command: `npm run build`
- Output directory: `dist`
- No special environment variables required.

Once deployed, update the **Live App** link at the top of this README with your Vercel URL.

---

## How to Review (for Educase)

1. Open the **Live App** link.
2. Verify:
   - Mobile UI is centered on the page with a device-like frame.
   - Navigation:
     - Home → Signup, Home → Login.
     - Signup/Login → Profile.
     - Logout → Home.
   - Forms behave like a real app:
     - Required fields, disabled states, simple validation.
     - Toast notification on successful actions.
3. Optionally resize the browser or use DevTools device mode to see how the frame behaves.

---

## Author

**Ankit Dimri**  
React / Full-Stack Developer  

- GitHub: [https://github.com/AnkitDimri4](https://github.com/AnkitDimri4)  
- LinkedIn: [https://linkedin.com/in/ankit-dimri-a6ab98263](https://linkedin.com/in/ankit-dimri-a6ab98263)  
- LeetCode: [https://leetcode.com/u/user4612MW/](https://leetcode.com/u/user4612MW/)

---