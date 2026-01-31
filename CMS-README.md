# Offerve.com CMS Setup Guide

## Overview
Simple Git-based CMS using Decap CMS. No build process required - just commit and deploy!

## 🚀 Quick Start

### 1. Enable GitHub Authentication

1. Go to https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: Offerve CMS
   - **Homepage URL**: `https://your-domain.com`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
4. Copy Client ID and Client Secret
5. Add to Netlify/hosting provider's environment variables

### 2. Access Admin Panel

Visit: `https://your-domain.com/admin/`

Login with your GitHub account.

### 3. Create a Blog Post

1. Click "New Blog Posts"
2. Fill in all fields:
   - **Title**: Post headline
   - **Slug**: URL-friendly name (e.g., `paytm-cashback-offer`)
   - **Category**: Select from dropdown
   - **Featured Image**: Upload or select from media library
   - **Summary**: Short excerpt (150 chars max)
   - **Body Content**: Main post content (HTML editor)
   - **What You Get**: List of benefits (optional)
   - **Steps to Claim**: Instructions (optional)
   - **Important Notes**: Terms/conditions (optional)
3. Click "Publish"
4. CMS creates `posts/{slug}.html` file

### 4. Update Posts Index

After creating a new post, manually add entry to `posts/posts.json`:

```json
[
  {
    "slug": "your-post-slug",
    "title": "Your Post Title",
    "category": "Free Loot",
    "summary": "Short description...",
    "featured_image": "/assets/uploads/image.jpg",
    "date": "2026-01-31"
  }
]
```

**Note**: This step will be automated in future updates.

### 5. Deploy

```bash
git push origin main
```

Post is live immediately after Hostinger deploys!

## 📁 File Structure

```
offerve.com.bllog/
├── admin/
│   ├── index.html          # CMS admin panel
│   └── config.yml          # CMS configuration
├── posts/
│   ├── posts.json          # Post index (manual update)
│   ├── sample-post.html    # Example post
│   └── {slug}.html         # Your blog posts
├── assets/
│   └── uploads/            # CMS uploaded images
├── posts.js                # Post loading script
└── index.html              # Homepage (loads posts)
```

## 🎨 Post Template

Each post HTML file contains:
- Frontmatter metadata (YAML)
- Complete HTML page with your design
- Auto-populated from CMS fields

Template located at: `posts/sample-post.html`

## 🔧 Configuration

### GitHub Repo
Already configured in `admin/config.yml`:
```yaml
backend:
  name: github
  repo: Ejack172/offerve-site
  branch: main
```

### Media Uploads
Images saved to: `assets/uploads/`

## 📝 Workflow

1. **Create post** via CMS admin panel
2. **CMS commits** HTML file to GitHub
3. **Manually update** `posts/posts.json` with new post metadata
4. **Commit** the posts.json update
5. **Deploy** automatically via Hostinger
6. **Post appears** on homepage

## 🎯 Next Steps

- Set up GitHub OAuth app
- Create your first post via CMS
- Customize post template if needed
- Add more categories in config.yml

## 🐛 Troubleshooting

**CMS not loading?**
- Check GitHub OAuth credentials
- Verify repo name in config.yml
- Check browser console for errors

**Posts not showing on homepage?**
- Verify `posts/posts.json` is updated
- Check `posts.js` is loaded in index.html
- Check console for JavaScript errors

**Images not displaying?**
- Verify image path starts with `/assets/uploads/`
- Check file was uploaded via CMS media library

## 💡 Tips

- Use descriptive slugs (e.g., `netflix-free-trial` not `post1`)
- Keep summaries under 150 characters
- Optimize images before uploading (recommended: 1200x675px)
- Test posts locally before deploying
