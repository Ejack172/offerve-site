# Offerve CMS - GitHub OAuth Setup Guide

## What You Have
- ✅ Client ID: `Ov23liKtAY4Mb1G2IU8f`
- ✅ Client Secret: `30ef463627e070c652aeaaff430786768ec4c6b2`

## ⚠️ Important: Hostinger Limitation

Hostinger **does not provide OAuth authentication** like Netlify does. You have two options:

---

## 🎯 Recommended: Hybrid Setup (Netlify + Hostinger)

Use Netlify's free tier **only for the CMS admin panel**, keep your main site on Hostinger.

### Step 1: Update GitHub OAuth App

1. Go to https://github.com/settings/developers
2. Click on your OAuth app
3. Update **Authorization callback URL** to:
   ```
   https://api.netlify.com/auth/done
   ```
4. Save changes

### Step 2: Deploy Admin to Netlify

1. Create free account at https://netlify.com
2. Click "Add new site" → "Import from Git"
3. Connect to GitHub → Select `Ejack172/offerve-site`
4. **Build settings:**
   - Base directory: `admin`
   - Publish directory: `.` (or leave empty)
5. Click "Deploy"

### Step 3: Add Environment Variables to Netlify

In Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add these variables:
   ```
   GITHUB_CLIENT_ID = Ov23liKtAY4Mb1G2IU8f
   GITHUB_CLIENT_SECRET = 30ef463627e070c652aeaaff430786768ec4c6b2
   ```

### Step 4: Access Your CMS

Your CMS will be at: `https://your-netlify-site.netlify.app/`

Main site stays on Hostinger: `https://your-domain.com`

---

## 🔧 Alternative: GitHub Implicit Auth (Testing Only)

For **local testing only** (not secure for production):

**Already configured** in your `admin/config.yml`:
```yaml
backend:
  name: github
  repo: Ejack172/offerve-site
  branch: main
  auth_type: implicit
  app_id: Ov23liKtAY4Mb1G2IU8f
```

### Update GitHub OAuth App Callback:

1. Go to https://github.com/settings/developers
2. Update **Authorization callback URL** to:
   ```
   http://localhost:8080/admin/
   ```
3. Also add your Hostinger domain:
   ```
   https://your-domain.com/admin/
   ```

### Test Locally:

```bash
cd c:\Users\mdmir\offerve.com.bllog
python -m http.server 8080
```

Visit: http://localhost:8080/admin/

**⚠️ Note:** Implicit auth exposes your Client ID in the browser. For production, use Netlify option.

---

## 📌 What I Recommend

**For Production:**
1. Use Netlify for CMS admin (free tier)
2. Deploy main site to Hostinger
3. Create posts via Netlify CMS
4. Posts automatically commit to GitHub
5. Hostinger auto-deploys from GitHub

**For Testing Now:**
1. Use implicit auth locally
2. Test creating a post
3. Switch to Netlify when ready for production

---

## 🚀 Quick Start (Testing)

1. Update GitHub callback URL to `http://localhost:8080/admin/`
2. Run local server: `python -m http.server 8080`
3. Open http://localhost:8080/admin/
4. Click "Login with GitHub"
5. Create a test post!

---

## Need Help?

Let me know which option you want to use and I can guide you through the specific steps!
