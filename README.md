# 🚗 VELOUR — Premium Car Rental Platform

A luxury car rental marketplace connecting professional drivers with discerning clients.  
Built with pure HTML, CSS, and vanilla JavaScript — **no backend required**.  
Car listings are stored in the browser's `localStorage`, so drivers can register and their cars appear live instantly.

---

## 📁 Project Structure

```
velour/
├── index.html              ← Home page
├── css/
│   └── style.css           ← All styles (old money palette)
├── js/
│   └── store.js            ← localStorage car data layer (ES module)
└── pages/
    ├── browse.html         ← Browse all cars (with filters + modal)
    ├── register.html       ← Driver registration (4-step form + photo upload)
    └── how.html            ← How It Works
```

---

## 🚀 Deploy to GitHub Pages (step by step)

### 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it `velour` (or anything you like)
4. Set it to **Public**
5. Click **Create repository**

### 2 — Upload the files

**Option A — Drag & Drop (easiest)**
1. Open your new repository on GitHub
2. Click **Add file → Upload files**
3. Drag the entire `velour/` folder contents into the upload area
4. Make sure the folder structure is preserved:
   - `index.html` at the root
   - `css/style.css`
   - `js/store.js`
   - `pages/browse.html`, `pages/register.html`, `pages/how.html`
5. Click **Commit changes**

**Option B — Git CLI**
```bash
cd velour
git init
git add .
git commit -m "Initial commit — Velour car rental platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/velour.git
git push -u origin main
```

### 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. In the left sidebar click **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Set branch to **main**, folder to **/ (root)**
6. Click **Save**

⏳ Wait 1–2 minutes, then your site will be live at:
```
https://YOUR_USERNAME.github.io/velour/
```

---

## ✨ Features

- **Home page** — hero, stats (live count from localStorage), featured cars
- **Browse page** — filter by category, city, transmission, price; click any car to open full detail modal
- **Driver registration** — 4-step form: personal info → vehicle details → photo upload → review & submit
- **Photo uploads** — car photos and driver portrait are stored as base64 in localStorage
- **Instant publish** — submitted listings appear on Browse immediately, no backend needed
- **Old money design** — navy, dark gold, crimson, milky white; Playfair Display + Montserrat typography

---

## 🎨 Design Palette

| Token | Value | Use |
|-------|-------|-----|
| `--cream` | `#FAF7F2` | Background (milky white) |
| `--navy` | `#1B2A3F` | Navigation, headers |
| `--gold` | `#B8972A` | Accents, borders, tags |
| `--gold-light` | `#D4AF55` | Hover states, hero text |
| `--crimson` | `#7A1E2E` | CTAs, prices, active states |

---

## 📝 Notes

- Photos are saved as base64 strings in localStorage. For large production use, replace with a real file storage service (Cloudinary, Supabase Storage, etc.)
- localStorage is per-browser — listings added on one device won't appear on another. For shared data, connect to a backend or use a service like Firebase.
- The `store.js` file uses ES modules (`import`/`export`). GitHub Pages serves files over HTTPS, so modules work correctly when deployed.
