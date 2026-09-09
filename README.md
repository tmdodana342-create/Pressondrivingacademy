# PO Driving Academy Website

Professional driving school web application for PO Driving Academy (Cape Town, Western Cape). Built with React, Vite, Tailwind CSS, and Firebase Firestore for online lesson bookings.

---

## Deploying to Vercel

This repository is pre-configured for one-click deployment on [Vercel](https://vercel.com).

### Option 1: Deploy via GitHub / GitLab / Bitbucket (Recommended)

1. Push or export this project to your GitHub account (via AI Studio's **Export to GitHub** or git push).
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your `po-driving-academy` repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.

> **Note**: Firebase configuration is already bundled in `firebase-applet-config.json`. If you wish to use environment variables instead, you can set `VITE_FIREBASE_*` variables in the Vercel Project Settings > Environment Variables.

---

### Option 2: Deploy via Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run deployment from the project folder:
   ```bash
   vercel
   ```
3. For production deployment:
   ```bash
   vercel --prod
   ```

---

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

- `vercel.json` - Vercel configuration with SPA route rewrites and asset caching rules.
- `index.html` - HTML entry point with SEO metadata and local business schema markup.
- `src/components/` - Modular UI sections (Header, Hero, About, Pricing, Booking, Areas, Testimonials, Footer).
- `src/data/content.ts` - Academy pricing packages, contact numbers, and suburbs covered.
- `src/firebase.ts` - Firebase Firestore client for student lesson enquiries.
