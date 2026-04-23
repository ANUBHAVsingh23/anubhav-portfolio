# Anubhav Singh – Developer Portfolio

A dark, terminal-inspired personal portfolio website built with pure HTML, CSS, and vanilla JavaScript. No frameworks, no build tools — just open `index.html` and go.

---

## 📁 Project Structure

```
anubhav-portfolio/
│
├── index.html                  # Main HTML entry point
│
├── assets/
│   ├── css/
│   │   └── style.css           # All styles (variables, layout, animations)
│   │
│   ├── js/
│   │   └── main.js             # Custom cursor, scroll reveal, photo upload
│   │
│   └── images/                 # Place your profile photo here (optional)
│       └── profile.jpg         # Rename your photo to this (or update index.html)
│
└── README.md                   # You are here
```

---

## 🚀 Getting Started

### Option 1 — Open locally
Just double-click `index.html` — no server needed for basic viewing.

> **Note:** The custom cursor and some animations work best when served over HTTP. Use Option 2 for the full experience.

### Option 2 — Live server (recommended)

If you have VS Code, install the **Live Server** extension, right-click `index.html`, and select **"Open with Live Server"**.

Or use Python's built-in server:

```bash
# Python 3
cd anubhav-portfolio
python -m http.server 8000
# Then open http://localhost:8000
```

---

## ✏️ Customisation Guide

### Update Personal Info
Edit `index.html` directly — all content is plain HTML with clear section comments:

| Section | What to change |
|---|---|
| `<!-- HERO -->` | Name, tagline, CTA links |
| `<!-- ABOUT -->` | Bio paragraphs, stat numbers |
| `<!-- SKILLS -->` | Add / remove `.pill` elements |
| `<!-- PROJECTS -->` | Project titles, dates, descriptions, GitHub links |
| `<!-- CERTIFICATIONS -->` | Cert names, issuers, dates |
| `<!-- EDUCATION -->` | Degrees, institutions, grades |
| `<!-- CONTACT -->` | Email, phone, LinkedIn, GitHub, location |

### Add a Profile Photo
Two ways:

**Option A – Upload via browser**
Click the photo frame in the **About** section while viewing the site in your browser, then select your image. (Does not persist on refresh.)

**Option B – Hardcode the image (permanent)**
1. Place your photo in `assets/images/` (e.g., `profile.jpg`).
2. In `index.html`, find the `<img id="profileImg" ...>` tag and update it:
```html
<img id="profileImg"
     src="assets/images/profile.jpg"
     alt="Anubhav Singh"
     style="display:block;" />
```
3. Also set the placeholder div to `display:none`:
```html
<div class="profile-placeholder" id="profilePlaceholder" style="display:none;">
```

### Change the Colour Scheme
Open `assets/css/style.css` and edit the `:root` variables at the top:

```css
:root {
  --accent:  #00e5ff;   /* Primary cyan — change this to any colour */
  --accent2: #7c3aed;   /* Purple accent */
  --accent3: #f59e0b;   /* Amber accent */
  --bg:      #0a0a0f;   /* Page background */
  --text:    #e8e8f0;   /* Main text colour */
}
```

### Change the Fonts
The two Google Fonts used are loaded in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Mono...&family=Syne...">
```
Update the URL and then change `--font-head` and `--font-mono` in `style.css`.

---

## 🌐 Deployment

### GitHub Pages (Free)
1. Push the entire `anubhav-portfolio/` folder to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set source to `main` branch, root `/`.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Netlify (Free, easiest)
1. Go to [netlify.com](https://netlify.com) and sign up.
2. Drag and drop the entire `anubhav-portfolio/` folder onto the Netlify dashboard.
3. Done — you'll get a live URL instantly.

### Vercel (Free)
```bash
npm i -g vercel
cd anubhav-portfolio
vercel
```

---

## 🔧 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure and semantic markup |
| CSS3 | Styling, animations, CSS variables |
| Vanilla JS | Cursor, scroll reveal, photo upload |
| Google Fonts | Syne (headings) + Space Mono (body) |

No dependencies. No npm. No build step.

---

## 📄 Sections Overview

| # | Section | Description |
|---|---|---|
| 1 | Hero | Name, tagline, animated floating badges |
| 2 | About | Bio, profile photo upload, stat grid |
| 3 | Skills | Pills grouped by Languages / Tools / Soft |
| 4 | Projects | Cards with GitHub links |
| 5 | Certifications | Grid of all 7 certifications |
| 6 | Education | Timeline from 10th grade to MCA |
| 7 | Contact | Links for email, phone, LinkedIn, GitHub |

---

## 📬 Contact

**Anubhav Singh**
- 📧 singh.anubhav3945@gmail.com
- 📱 +91 7380718141
- 💼 [linkedin.com/in/anubhav-singh-oa38a6256](https://linkedin.com/in/anubhav-singh-oa38a6256/)
- 🐙 [github.com/ANUBHAVsingh23](https://github.com/ANUBHAVsingh23)
- 📍 Jaunpur, Uttar Pradesh – 222202

---

*Built with precision. Deployed with pride.*
