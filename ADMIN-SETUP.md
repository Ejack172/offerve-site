# Netlify CMS Admin Setup Guide

## 🚨 Current Issue
The admin page at https://offerve-site.netlify.app/admin/ shows a blank white screen.

## ✅ Fixes Applied

### 1. Added Netlify Identity Widget
Updated `admin/index.html` to include the Netlify Identity widget for GitHub OAuth authentication.

### 2. Created `netlify.toml`
Added Netlify configuration file for proper routing and security headers.

## 📋 Required Steps to Enable Admin Access

### Step 1: Enable Netlify Identity
1. Go to your Netlify dashboard: https://app.netlify.com
2. Select your site: **offerve-site**
3. Go to **Site settings** → **Identity**
4. Click **Enable Identity**

### Step 2: Configure GitHub OAuth
1. In the same Identity settings page
2. Scroll to **Services** → **Git Gateway**
3. Click **Enable Git Gateway**
4. Select **GitHub** as your Git provider
5. This allows Netlify to manage authentication with your GitHub repo

### Step 3: Enable Registration (Optional)
If you want to invite other admins:
1. In Identity settings → **Registration**
2. Choose **Invite only** (recommended for security)
3. Or choose **Open** if you want anyone to register

### Step 4: Invite Yourself as Admin
1. In Identity settings, click **Invite users**
2. Enter your email address
3. Check your email for the invitation link
4. Complete the signup process

### Step 5: Deploy the Latest Changes
```bash
git add .
git commit -m "Fix Netlify CMS admin with Identity widget"
git push origin main
```

Netlify will auto-deploy the changes.

### Step 6: Access the Admin
1. Go to https://offerve-site.netlify.app/admin/
2. You should see the Netlify Identity login widget
3. Log in with your invited email
4. You'll be redirected to the CMS interface

## 🔧 Alternative: Use Local Backend for Development

If you want to test the CMS locally without OAuth:

1. Uncomment this line in `admin/config.yml`:
   ```yaml
   local_backend: true
   ```

2. Install Netlify CMS proxy:
   ```bash
   npx netlify-cms-proxy-server
   ```

3. In another terminal, serve your site locally:
   ```bash
   npx http-server -p 8080
   ```

4. Visit http://localhost:8080/admin/

## 📝 What Changed

- **admin/index.html**: Added Netlify Identity widget and login redirect script
- **netlify.toml**: Added Netlify configuration for proper routing
- **admin/config.yml**: Already configured correctly with GitHub backend

## 🎯 Next Steps

1. Complete Steps 1-4 above in Netlify dashboard
2. Push these changes to GitHub
3. Wait for Netlify auto-deployment (usually 1-2 minutes)
4. Access https://offerve-site.netlify.app/admin/
5. Log in and start creating blog posts!
