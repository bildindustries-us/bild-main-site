# BILD — The Pursuit of U
## Coaching System Website

Static HTML website for the BILD coaching system by Jeff Boyer.
All pages are client-facing — written for prospects and coaching clients.

---

### File Structure

```
bild-site/
├── index.html                      ← Main landing / pillar navigation
├── pillar-1-powerlessness.html     ← Pillar 1 (complete)
├── pillar-2-accountability.html    ← Pillar 2 (complete)
├── pillar-3-create-with-him.html   ← Pillar 3 (complete)
├── pillar-4-purpose.html           ← Pillar 4 (complete)
├── pillar-5-forgiveness.html       ← Pillar 5 (complete)
├── style.css                       ← Shared styles
├── script.js                       ← Shared interactions
└── README.md
```

---

### Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `bild-site`)
2. Upload all files in this folder to the **root** of the repo
3. Go to **Settings → Pages**
4. Set Branch: `main`, Folder: `/ (root)` → Save
5. Live at: `https://yourusername.github.io/bild-site/`

**Custom domain (bildyourlife.com):**
- In GitHub Pages settings → enter `bildyourlife.com`
- In your DNS provider (GoDaddy) → add a `CNAME` record pointing to `yourusername.github.io`

---

### Page Summary

| Page | Pillar Color | Key Interactive Feature |
|------|-------------|------------------------|
| `index.html` | Multi | Pillar grid, CTA |
| `pillar-1-powerlessness.html` | Coral | False Power Move Inventory |
| `pillar-2-accountability.html` | Teal | Congruence Matrix, Private Audit |
| `pillar-3-create-with-him.html` | Steel Blue | Controller → Co-Creator Shift tool |
| `pillar-4-purpose.html` | Sage | Five Burial Questions + Purpose Statement Builder |
| `pillar-5-forgiveness.html` | Dusty Mauve | Three-Column Forgiveness Inventory |

---

### Brand Colors (CSS Variables)

| Name | Variable | Hex |
|------|----------|-----|
| Charcoal | `--charcoal` | `#3a3a3a` |
| Coral | `--coral` | `#d4614a` |
| Teal | `--teal` | `#4a8f8c` |
| Steel Blue | `--steel-blue` | `#5b7fa6` |
| Sage | `--sage` | `#7a8c6e` |
| Dusty Mauve | `--mauve` | `#b08090` |
| Warm Gold | `--gold` | `#c9a84c` |
| Cream | `--cream` | `#f5f0e8` |
| Dark | `--dark` | `#1e1e1e` |

---

### Fonts

- **Playfair Display** — headings, quotes, pillar numbers
- **Barlow Condensed** — labels, nav, badges, buttons
- **Barlow** — body text

All loaded via Google Fonts CDN. No local files required.

---

Jeff Boyer | jeff-boyer.com | bildyourlife.com
