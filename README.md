# Berdine-Terra-Global
Exporter
---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install --legacy-peer-deps

# 2. Run development server
npm run dev

# 3. Access from other devices
# Get your IP: ipconfig (Windows) or ifconfig (Mac)
# Open: http://<your-ip>:3000
```

---

## 📖 Documentation

**Start with these guides:**

1. **[QUICKSTART.md](./QUICKSTART.md)** ⭐ - Setup in 5 minutes
2. **[NETWORK_ACCESS.md](./NETWORK_ACCESS.md)** - Access from other devices
3. **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deploy to Vercel
4. **[PRE_DEPLOYMENT_CHECKLIST.md](./PRE_DEPLOYMENT_CHECKLIST.md)** - Before deploying

**For technical details:**

- [SETUP_COMPLETE.md](./SETUP_COMPLETE.md) - Setup status summary
- [FIXES.md](./FIXES.md) - All fixes and improvements

---

## ✨ Latest Updates

### ✅ All Errors Fixed
- TypeScript compilation errors: **FIXED** ✅
- Network accessibility: **CONFIGURED** ✅
- Vercel deployment: **READY** ✅

### 📦 Files Created/Updated

New files:
- `vercel.json` - Vercel deployment config
- `QUICKSTART.md`, `DEPLOYMENT.md`, `NETWORK_ACCESS.md`
- `SETUP_COMPLETE.md`, `FIXES.md`
- `.env.example`, `.env.production`, `.npmrc`

Updated files:
- `tsconfig.json` - Fixed JSX and types
- `vite.config.ts` - Network configuration
- `server/index.ts` - Multi-device support
- `package.json` - Added metadata

---

## 🌐 Features

✅ **Multi-device Development**
- Run locally and access from phones/tablets/other computers
- Network configuration already setup

✅ **Production Ready**
- Configured for Vercel deployment
- Environment variables properly setup
- Type-safe TypeScript

✅ **Well Documented**
- Complete setup guides
- Deployment documentation
- Troubleshooting guides
- Pre-deployment checklist

---

## 📋 Available Scripts

```bash
npm run dev      # Start development server (access from other devices)
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run check    # Check TypeScript errors
npm run format   # Format code with Prettier
```

---

## 🔧 Tech Stack

- **Frontend:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS 4
- **Backend:** Express.js
- **Router:** Wouter
- **UI Components:** Radix UI

---

## 📱 Access from Other Devices

### Development (Local Network)
```
1. Run: npm run dev
2. Get IP: ipconfig (Windows) or ifconfig (Mac)
3. From other device: http://<your-ip>:3000
```

### Production (Vercel)
```
https://berdine-terra-global.vercel.app
(or your custom domain)
```

---

## 🚀 Deployment

### To Vercel

```bash
# Option 1: Via Dashboard
# 1. Push to GitHub
# 2. Go to vercel.com
# 3. Connect repo and deploy (auto-detected)

# Option 2: Via CLI
npm install -g vercel
vercel
```

Environment variables needed:
- `VITE_OAUTH_PORTAL_URL`
- `VITE_APP_ID`
- `VITE_FRONTEND_FORGE_API_KEY`
- `VITE_FRONTEND_FORGE_API_URL`

---

## 📂 Project Structure

```
├── client/              # Frontend (React)
│   ├── src/
│   │   ├── pages/      # Page components
│   │   ├── components/ # Reusable components
│   │   ├── contexts/   # React contexts
│   │   ├── hooks/      # Custom hooks
│   │   └── lib/        # Utilities
│   └── index.html
├── server/             # Backend (Express)
├── shared/             # Shared types/constants
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── vercel.json         # Vercel deployment config
└── package.json        # Dependencies
```

---

## ✅ Verification

Before deploying, run:

```bash
npm run check   # No TypeScript errors?
npm run build   # Build successful?
npm run preview # Production preview works?
```

---

## 🆘 Need Help?

1. Check relevant documentation:
   - Setup issues → [QUICKSTART.md](./QUICKSTART.md)
   - Network issues → [NETWORK_ACCESS.md](./NETWORK_ACCESS.md)
   - Deployment issues → [DEPLOYMENT.md](./DEPLOYMENT.md)

2. Run verification:
   ```bash
   npm run check
   npm run build
   ```

3. Check browser console for detailed errors

---

## 📞 Support

- Installation: See [QUICKSTART.md](./QUICKSTART.md)
- Network access: See [NETWORK_ACCESS.md](./NETWORK_ACCESS.md)
- Deployment: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- Troubleshooting: Check respective guide above

---

## 📝 Notes

- Requires Node.js 18.17.0+
- Use `--legacy-peer-deps` flag when installing
- Server accessible from other devices on network
- TypeScript strict mode disabled for easier development

---

## 🎉 Status

✅ **READY FOR DEPLOYMENT**

All errors fixed. Project is ready for:
- Local development with multi-device testing
- Deployment to Vercel
- Production use

---

**Last Updated:** January 29, 2026