Arthiqo — Static Services Website

This is a minimal, responsive static website for Arthiqo (GST, Tax, Accounting, Payroll & Automation services).

Quickstart

1. Open `index.html` in your browser (no build step required).

2. To serve locally (optional), use a simple static server. Example with Python:

```bash
# Python 3
cd arthiqo-site
python -m http.server 8000
# then open http://localhost:8000
```

Notes

- Colors: finance-friendly blue/grey palette.
- Mobile-friendly layout and minimal animations.
- Graphical assets: `assets/images/logo.svg` (wordmark) and inline SVG icons used for services.
- Contact form uses client-side JS only; replace with your backend endpoint for production.

Deployment

- Host on GitHub Pages, Netlify or any static host. Point domain and enable HTTPS.
