# Quick Start Guide 🚀

Panduan cepat untuk setup dan deployment project Berdine Terra Global.

## 1️⃣ Setup Awal (5 menit)

```bash
# Clone repository (jika belum)
git clone <your-repo-url>
cd berdine-terra-global

# Install dependencies
npm install --legacy-peer-deps
```

## 2️⃣ Development Local (3 menit)

```bash
# Jalankan dev server
npm run dev

# Output akan menunjukkan:
# ✓ Server running on http://0.0.0.0:3000/
# ✓ Server is accessible from other devices on the network
```

### Akses dari Perangkat Lain
1. Cari IP komputer: 
   - Windows: `ipconfig` cari "IPv4 Address"
   - Mac: `ifconfig` cari "inet" di interface aktif
2. Dari perangkat lain: `http://<ip-anda>:3000`

## 3️⃣ Production Build (2 menit)

```bash
# Build untuk production
npm run build

# Test production build lokal
npm run preview
```

## 4️⃣ Deploy ke Vercel (5-10 menit)

### Via Vercel Dashboard (Recommended)
1. Push code ke GitHub
2. Pergi ke [vercel.com](https://vercel.com)
3. Klik "New Project"
4. Select GitHub repo Anda
5. Klik "Deploy"
   - Vercel akan auto-detect Vite config
   - Build akan otomatis dimulai

### Via Vercel CLI
```bash
npm install -g vercel
vercel
# Follow prompts
```

### Tambahkan Environment Variables
Di Vercel Dashboard > Project Settings > Environment Variables:

```
VITE_OAUTH_PORTAL_URL = https://your-oauth.com
VITE_APP_ID = your_app_id
VITE_FRONTEND_FORGE_API_KEY = your_api_key
VITE_FRONTEND_FORGE_API_URL = https://your-api.com
```

## 5️⃣ Verify Deployment ✅

```bash
# Check build output
npm run build   # Should complete without errors

# Check TypeScript
npm run check   # Should pass

# Format code (optional)
npm run format
```

---

## Useful Commands 📋

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server dengan hot reload |
| `npm run build` | Build production |
| `npm run preview` | Preview production build lokal |
| `npm run check` | Check TypeScript errors |
| `npm run format` | Format code |

---

## Common Issues & Solutions 🔧

### ❌ Port 3000 sudah digunakan
**Solusi:** Vite otomatis akan gunakan port berikutnya (3001, 3002, dst)

### ❌ Module not found errors
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### ❌ Environment variables tidak load
```bash
# Restart dev server setelah edit .env
npm run dev
```

### ❌ Build error di Vercel
- Check environment variables di Vercel Dashboard
- Lihat build logs di Vercel Dashboard untuk detail error
- Ensure dependencies installed: `npm install --legacy-peer-deps`

---

## Files Penting 📁

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel deployment config |
| `vite.config.ts` | Vite build config |
| `tsconfig.json` | TypeScript config |
| `.env.example` | Environment variables template |
| `DEPLOYMENT.md` | Detailed deployment guide |
| `FIXES.md` | List of all fixes applied |

---

## Next Steps 🎯

- [ ] `npm install --legacy-peer-deps`
- [ ] `npm run dev` - test locally
- [ ] Test akses dari perangkat lain
- [ ] `npm run build` - test production build
- [ ] Push ke GitHub
- [ ] Deploy ke Vercel
- [ ] Setup custom domain (optional)

---

**Happy Deploying! 🎉**

Untuk dokumentasi lengkap, lihat `DEPLOYMENT.md`
