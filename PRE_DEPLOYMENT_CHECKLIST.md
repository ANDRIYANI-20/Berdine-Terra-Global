# ✅ Pre-Deployment Checklist

Gunakan checklist ini untuk memastikan semua siap sebelum deploy ke Vercel.

---

## 🔧 Local Setup

- [ ] **Install dependencies**
  ```bash
  npm install --legacy-peer-deps
  ```
  
- [ ] **Test development server**
  ```bash
  npm run dev
  ```
  Output harus menunjukkan: "Server is accessible from other devices on the network"

- [ ] **Test dari device lain**
  - Cari IP komputer: `ipconfig` (Windows) atau `ifconfig` (Mac)
  - Akses: `http://<ip>:3000` dari device lain
  - Verify: Website load dengan benar

- [ ] **Run type checking**
  ```bash
  npm run check
  ```
  Tidak boleh ada errors

- [ ] **Build untuk production**
  ```bash
  npm run build
  ```
  Harus complete tanpa errors

- [ ] **Test production build lokal**
  ```bash
  npm run preview
  ```
  Website harus berfungsi dengan baik

---

## 🌍 Vercel Preparation

- [ ] **Repository di GitHub**
  - Code sudah di-push ke GitHub
  - Repository accessible dari Vercel

- [ ] **Environment Variables ready**
  - [ ] `VITE_OAUTH_PORTAL_URL` - value ready
  - [ ] `VITE_APP_ID` - value ready
  - [ ] `VITE_FRONTEND_FORGE_API_KEY` - value ready
  - [ ] `VITE_FRONTEND_FORGE_API_URL` - value ready
  
  Note: Jika tidak ada, gunakan default dari `.env.production`

- [ ] **Configuration files present**
  - [ ] `vercel.json` - ✅ Created
  - [ ] `.vercelignore` - ✅ Created
  - [ ] `tsconfig.json` - ✅ Updated
  - [ ] `vite.config.ts` - ✅ Updated

- [ ] **No sensitive data in code**
  - API keys tidak hard-coded di source
  - Secret tidak di-commit ke Git

---

## 📋 Code Quality

- [ ] **No console errors**
  ```bash
  npm run dev
  # Check browser console - tidak boleh ada errors
  ```

- [ ] **No console warnings** (optional tapi recommended)
  ```bash
  npm run dev
  # Check browser console - minimise warnings
  ```

- [ ] **Responsive design works**
  - Test di different screen sizes
  - DevTools > Device Emulation
  - Test: mobile, tablet, desktop

- [ ] **All pages accessible**
  - [ ] `/` - Home
  - [ ] `/about` - About
  - [ ] `/products` - Products
  - [ ] `/documentation` - Documentation
  - [ ] `/contact` - Contact
  - [ ] `/404` - Not Found (intentional)

- [ ] **No broken links**
  - Check internal navigation
  - Check external links (if any)

---

## 🚀 Deployment Steps

### Via Vercel Dashboard (Recommended)

- [ ] **Login to Vercel**
  - Pergi ke [vercel.com](https://vercel.com)
  - Sign in dengan GitHub account

- [ ] **Create new project**
  - Click "New Project"
  - Select GitHub repository

- [ ] **Verify configuration**
  - Framework: Vite (auto-detected)
  - Build Command: `npm run build`
  - Output Directory: `dist`

- [ ] **Add environment variables**
  - Project Settings > Environment Variables
  - Add semua required variables

- [ ] **Deploy**
  - Click "Deploy"
  - Wait untuk deployment complete

- [ ] **Verify production**
  - Click link yang generate
  - Test website functionality
  - Check console untuk errors

### Via Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts:
# - Project name
# - Framework: Vite
# - Build command: npm run build
# - Output directory: dist
# - Environment variables
```

---

## 🔍 Post-Deployment Verification

- [ ] **Website accessible**
  - Open: `https://your-project.vercel.app`
  - Website loads correctly

- [ ] **Pages working**
  - Navigate ke semua pages
  - Test links dan buttons

- [ ] **API working** (if applicable)
  - Check network tab
  - Verify API calls berhasil

- [ ] **Performance acceptable**
  - DevTools > Lighthouse
  - Check performance score

- [ ] **No console errors**
  - DevTools > Console
  - Tidak boleh ada errors di production

- [ ] **Mobile responsive**
  - Test di mobile browser
  - Layout responsive dengan benar

---

## 📊 Final Checklist

| Item | Done | Notes |
|------|------|-------|
| Dependencies installed | [ ] | `npm install --legacy-peer-deps` |
| Dev server working | [ ] | `npm run dev` |
| Multi-device access works | [ ] | Test dari device lain |
| TypeScript check passed | [ ] | `npm run check` |
| Build successful | [ ] | `npm run build` |
| Preview works | [ ] | `npm run preview` |
| Code pushed to GitHub | [ ] | `git push` |
| Env vars ready | [ ] | All required values |
| Deployed to Vercel | [ ] | https://project.vercel.app |
| Production verified | [ ] | All pages working |

---

## 🐛 Troubleshooting If Issues

### Build Error
```bash
npm run check    # Find TypeScript errors
npm run build    # See detailed error
```

### Vercel Deployment Failed
- Check build logs di Vercel Dashboard
- Verify environment variables set
- Check GitHub repository accessible

### Website Not Loading
- Check network tab di DevTools
- Verify domain correct
- Clear browser cache (Ctrl+Shift+Delete)

### API Calls Failing
- Check CORS headers
- Verify API endpoints correct
- Check environment variables

### Responsive Design Issues
- DevTools > Device Emulation
- Test different breakpoints
- Check Tailwind CSS config

---

## 📞 Helpful Commands

```bash
# Check for errors
npm run check

# Clean build
rm -rf dist && npm run build

# Test production
npm run preview

# Format code
npm run format

# View deployment
# Open https://your-project.vercel.app
```

---

## 🎯 Success Indicators

✅ **Setup Complete When:**
- [ ] `npm run dev` runs tanpa error
- [ ] Website accessible dari device lain
- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors saat `npm run check`
- [ ] Deployment successful ke Vercel
- [ ] Production website loads correctly
- [ ] All pages dan features working

---

## 📚 Reference Documents

- `QUICKSTART.md` - Setup quick guide
- `DEPLOYMENT.md` - Detailed deployment guide
- `NETWORK_ACCESS.md` - Multi-device access guide
- `FIXES.md` - Technical details
- `SETUP_COMPLETE.md` - Summary status

---

## 🎉 Ready to Go!

Jika semua checklist ✅ selesai, project siap untuk production!

---

**Last Update:** January 29, 2026
**Project Status:** ✅ READY FOR DEPLOYMENT
