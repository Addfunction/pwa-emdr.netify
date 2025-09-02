
# 🌟 EMDR PWA Project

A Progressive Web App (PWA) for EMDR-inspired visual and auditory stimulation, designed to run on iPhone and desktop browsers. The app features a moving blue light, synchronized pip sounds, session timers, and positive mental health tips.

---

## 🚀 Features
- Blue light moving left-right across screen
- Adjustable speed, size, and intensity
- Synchronized left/right pip sounds
- Session timer with countdown
- Fullscreen mode
- AirPlay/Cast support via browser
- Positive tips and EMDR-related facts
- Offline support via PWA

---

## 📁 File Structure
```
root/
├── emdr-pwa/              # Frontend files
│   ├── index.html
│   ├── manifest.json
│   ├── css/
│   ├── js/
│   └── assets/
├── netlify/
│   └── functions/         # Netlify serverless functions
│       ├── save-session.js
│       └── get-tips.js
├── .env                   # Local environment variables
├── netlify.toml           # Netlify configuration
```

---

## 🛠️ Deployment Instructions

### ✅ Base Directory
Set to `emdr-pwa` if your project files are inside that folder.

### ✅ Publish Directory
Set to `emdr-pwa` to serve the frontend files.

### ✅ Branch to Deploy
Use `main` or your preferred production branch.

---

## 🔐 Environment Variables
Set the following in Netlify:
```
NETLIFY_DATABASE_URL=postgres://username:password@hostname:port/dbname
```
This connects your Netlify Functions to your Neon PostgreSQL database.

---

## 🔧 Netlify Functions

### `save-session.js`
Saves session data (duration, intensity, speed) to Neon database.

### `get-tips.js`
Returns a list of static EMDR tips.

---

## 🧪 Local Development
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Create `.env` file with your database URL
3. Run locally:
   ```bash
   netlify dev
   ```

---

## 📬 Contact
For questions or contributions, reach out to the project owner.
