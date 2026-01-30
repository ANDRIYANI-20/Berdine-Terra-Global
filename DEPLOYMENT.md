# Panduan Deployment Vercel & Setup Lokal

## Persyaratan
- Node.js 18.17.0 atau lebih tinggi
- npm 9.0.0 atau lebih tinggi
- Git

## Setup Lokal

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Development
```bash
npm run dev
```
Server akan berjalan di `http://localhost:3000` dan accessible dari perangkat lain di network Anda.

### 3. Build untuk Production
```bash
npm run build
```

### 4. Test Production Build Lokal
```bash
npm run preview
```

## Environment Variables

Buat file `.env` atau `.env.local` dengan variables berikut:

```
VITE_OAUTH_PORTAL_URL=https://your-oauth-portal.com
VITE_APP_ID=your_app_id
VITE_FRONTEND_FORGE_API_KEY=your_api_key
VITE_FRONTEND_FORGE_API_URL=https://your-api.com
```

Lihat `.env.example` untuk template lengkap.

## Deployment ke Vercel

### 1. Persiapan
- Push code ke GitHub repository
- File `vercel.json` sudah dikonfigurasi

### 2. Deploy via Vercel Dashboard
1. Pergi ke [vercel.com](https://vercel.com)
2. Click "New Project"
3. Pilih GitHub repository Anda
4. Vercel akan auto-detect Vite configuration
5. Tambahkan environment variables di Project Settings
6. Deploy!

### 3. Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

## Akses dari Perangkat Lain

### Lokal Network
Ketika menjalankan `npm run dev`, server berjalan di `0.0.0.0:3000` sehingga dapat diakses dari perangkat lain:

1. Cari IP address komputer Anda:
   - Windows: `ipconfig` (cari IPv4 Address)
   - Mac/Linux: `ifconfig` atau `hostname -I`

2. Dari perangkat lain, buka: `http://<your-ip>:3000`

### Vercel (Production)
Setelah deploy ke Vercel, project akan mendapat domain otomatis:
- Format: `https://berdine-terra-global.vercel.app`
- Custom domain dapat ditambahkan di Vercel Dashboard

## Troubleshooting

### Build Error
Jika mendapat error saat build:
```bash
npm run check    # Cek TypeScript errors
npm run build    # Build ulang
```

### Port Already in Use
Vite akan otomatis mencari port yang tersedia jika 3000 sudah digunakan.

### Environment Variables tidak Load
- Pastikan `.env` atau `.env.local` ada di root directory
- Untuk variable Vite, gunakan prefix `VITE_`
- Restart dev server setelah mengubah `.env`

## Scripts Tersedia

```bash
npm run dev      # Start development server dengan hot reload
npm run build    # Build untuk production
npm run start    # Run production server
npm run preview  # Preview production build lokal
npm run check    # Check TypeScript errors
npm run format   # Format code dengan Prettier
```

## Struktur Project

```
├── client/           # Frontend (React + TypeScript)
│   ├── src/
│   │   ├── pages/   # Page components
│   │   ├── components/
│   │   └── ...
│   └── index.html
├── server/          # Backend (Express)
├── shared/          # Shared types/constants
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json      # Vercel configuration
```

## Notes

- Server listen di `0.0.0.0` untuk support multi-device access
- CORS and networking sudah dikonfigurasi
- TypeScript strict mode dimatikan untuk development easier
- Tailwind CSS dan UI components sudah setup

Untuk pertanyaan, lihat README.md di root project.
