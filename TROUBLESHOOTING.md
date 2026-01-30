# 🔧 Troubleshooting Guide

Solusi untuk masalah umum yang mungkin terjadi selama setup dan deployment.

---

## Installation Issues 📦

### Error: "Cannot find module 'node-gyp'"

**Penyebab:** Dependencies tidak terinstall dengan benar

**Solusi:**
```bash
# Clean install
rm -rf node_modules package-lock.json pnpm-lock.yaml
npm install --legacy-peer-deps
```

### Error: "npm ERR! code ERESOLVE"

**Penyebab:** Peer dependency conflict

**Solusi:**
```bash
# Gunakan --legacy-peer-deps flag
npm install --legacy-peer-deps
```

**Alternative:**
```bash
# Gunakan npm version yang lebih lama
npm install --no-audit
```

### Error: "Script at line X cannot be loaded"

**Penyebab:** Windows execution policy

**Solusi (Windows):**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

## Development Server Issues 🚀

### Error: "Port 3000 already in use"

**Penyebab:** Port 3000 sedang digunakan oleh process lain

**Solusi:**
```bash
# Vite otomatis gunakan port berikutnya
npm run dev
# Akan gunakan 3001, 3002, dst

# Atau kill process yang pakai port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :3000
kill -9 <PID>
```

### Error: "Cannot find module '@/components/...'"

**Penyebab:** Path alias tidak working

**Solusi:**
```bash
# Verify tsconfig.json paths section
cat tsconfig.json | grep -A 2 '"paths"'

# Restart dev server
npm run dev
```

### Server not accessible dari device lain

**Penyebab:** Network configuration tidak benar

**Troubleshooting:**

1. **Verify server running di 0.0.0.0:**
   ```bash
   npm run dev
   # Output harus menunjukkan: "Server is accessible from other devices"
   ```

2. **Check IP address:**
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   
   # Cari IPv4 Address (e.g., 192.168.1.100)
   ```

3. **Test ping dari device lain:**
   ```bash
   ping 192.168.1.100
   ```

4. **Check firewall:**
   - Windows: Settings > Security > Firewall > Allow through firewall
   - Mac: System Preferences > Security > Firewall Options
   - Linux: `sudo ufw status` dan `sudo ufw allow 3000`

5. **Verify vite.config.ts:**
   ```typescript
   server: {
     host: "0.0.0.0",  // Must be this
     port: 3000,
     // ...
   }
   ```

---

## TypeScript Errors ❌

### Error: "Cannot find type definition file for 'node'"

**Penyebab:** Types tidak installed

**Solusi:**
```bash
npm install --save-dev @types/node
```

### Error: "JSX element implicitly has type 'any'"

**Penyebab:** TypeScript JSX config salah

**Solusi (SUDAH FIXED):**
- tsconfig.json harus punya: `"jsx": "react-jsx"`
- Bukan: `"jsx": "preserve"`

### Error: "Cannot find module 'react'"

**Penyebab:** React tidak installed atau node_modules corrupt

**Solusi:**
```bash
# Check react installed
npm ls react

# Jika tidak ada:
npm install

# Jika corrupt:
rm -rf node_modules
npm install --legacy-peer-deps
```

---

## Build Errors 🏗️

### Build fail dengan error tertentu

**Troubleshooting steps:**

```bash
# 1. Check TypeScript errors
npm run check

# 2. Clear build cache
rm -rf dist .vite

# 3. Try build again
npm run build

# 4. View detailed error
npm run build 2>&1 | head -50
```

### Error: "Cannot find module 'vite'"

**Solusi:**
```bash
npm install --save-dev vite
# atau reinstall semua
npm install --legacy-peer-deps
```

### Error: "dist/public/index.html not found"

**Penyebab:** Build tidak complete

**Solusi:**
```bash
# Full rebuild
rm -rf dist
npm run build

# Verify output
ls -la dist/public/
```

---

## Network & Firewall Issues 🔥

### "Connection refused" dari device lain

**Checklist:**

- [ ] Firewall allow port 3000?
  ```bash
  # Windows
  netsh advfirewall firewall add rule name="Vite" dir=in action=allow protocol=tcp localport=3000
  
  # Mac: System Preferences > Security & Privacy > Firewall
  
  # Linux
  sudo ufw allow 3000
  ```

- [ ] Server actually running?
  ```bash
  npm run dev
  ```

- [ ] Correct IP address?
  ```bash
  ipconfig
  # Use the right IP, not 127.0.0.1
  ```

- [ ] Same network?
  - Verify both devices di network yang sama (WiFi name/SSID)

### DNS/Hostname not working

**Kasus:** `http://computer-name.local` tidak work

**Solusi:**
```bash
# Gunakan IP address bukan hostname
http://192.168.1.100:3000  ✅ (USE THIS)
http://my-computer.local:3000  ❌ (AVOID)
```

### CORS errors dari device lain

**Penyebab:** Cross-origin request blocked

**Troubleshooting:**

1. Check browser console untuk CORS error
2. Verify API endpoint correct
3. Check origin header: `http://<ip>:3000` harus allowed
4. Vite config sudah punya `host: "0.0.0.0"`

---

## Vercel Deployment Issues 🚀

### Deploy failed: "Build script failed"

**Troubleshooting:**

1. **Check build logs di Vercel Dashboard**
   - Project > Deployments > Recent deployment > Build logs

2. **Run build locally:**
   ```bash
   npm run build
   # Fix any local errors first
   ```

3. **Common causes:**
   - Missing environment variables
   - Outdated dependencies
   - TypeScript errors

### Deploy failed: "Cannot find module"

**Solution:**
```bash
# Verify package.json
npm ls

# Rebuild
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Push ulang
git add .
git commit -m "fix: dependencies"
git push
```

### Environment variables not loading

**Checklist:**

- [ ] Variables set di Vercel Dashboard?
  - Project Settings > Environment Variables

- [ ] Variable names correct?
  - Must start dengan `VITE_` untuk frontend
  - Atau bulan `NODE_` untuk backend

- [ ] Deployment baru setelah set variables?
  - Must redeploy untuk variables to take effect

- [ ] Check `.env` files tidak corrupt
  - Verify format: `KEY=value`

### Website loading tapi styling tidak appear

**Penyebab:** Asset paths salah atau 404

**Troubleshooting:**

1. Check Network tab di DevTools:
   - Cari 404 errors untuk CSS/JS files

2. Check Vercel deployment:
   - Verify `outputDirectory` = `dist`

3. Verify vite.config.ts:
   ```typescript
   build: {
     outDir: path.resolve(import.meta.dirname, "dist/public"),
   }
   ```

---

## Performance Issues ⚡

### Website slow di development

**Solutions:**

```bash
# 1. Restart dev server
npm run dev

# 2. Clear cache
rm -rf .vite

# 3. Check memory usage
# DevTools > Memory > Take heap snapshot

# 4. Disable source maps (optional)
# vite.config.ts: sourcemap: false
```

### Website slow di production

**Troubleshooting:**

1. **Run Lighthouse audit**
   - DevTools > Lighthouse
   - Check performance score

2. **Check bundle size:**
   ```bash
   npm run build
   # Check dist folder size
   ```

3. **Optimize images:**
   - Compress images
   - Use modern formats (WebP)

---

## Common Error Messages 📝

### "Module not found: Can't resolve '@/components/...'"

```bash
# Fix tsconfig paths
# tsconfig.json harus punya:
"paths": {
  "@/*": ["./client/src/*"]
}

# Restart dev server
npm run dev
```

### "Cannot read property 'x' of undefined"

```bash
# Check component props
# Add null checks
if (!data) return <div>Loading...</div>

# Or use optional chaining
{data?.property}
```

### "Unexpected token < in JSON at position 0"

```bash
# Usually CORS or network issue
# Check Network tab di DevTools
# Verify API endpoint correct
```

---

## Git & Deployment Issues 🔀

### "Permission denied" saat push ke GitHub

**Solution:**
```bash
# Use personal access token atau SSH key
# Or check GitHub permissions
```

### "Branch protection rule" block deployment

**Solution:**
- Merge ke main/master terlebih dahulu
- Atau waive protection rule di GitHub

### Vercel stuck di "Building"

**Solution:**
```bash
# Cancel deployment di Vercel Dashboard
# Check build logs untuk infinite loop/error
# Fix issue lokal
# Push ulang
```

---

## Database & API Issues 🗄️

### API returning 401 Unauthorized

**Checklist:**
- [ ] API key correct?
- [ ] API endpoint correct?
- [ ] Network allow API calls?
- [ ] Environment variables set?

```bash
# Debug API calls
# DevTools > Network tab > XHR
# Check request headers dan response
```

### Map API not loading

**Troubleshooting:**
```bash
# Check VITE_FRONTEND_FORGE_API_KEY set
# Check API endpoint correct
# Verify API key valid

# Browser console akan show error
```

---

## Browser/Cache Issues 🗑️

### "Old version" loads setelah deploy

**Solution:**
```bash
# Hard refresh (Cmd+Shift+R pada Mac, Ctrl+Shift+R pada Windows)
# Atau clear cache:
# DevTools > Application > Clear storage
```

### "Blank page" saat load

**Troubleshooting:**

1. Check browser console untuk errors
2. Check Network tab untuk failed requests
3. Verify index.html loading
4. Check JavaScript execution

---

## Debugging Tips 🐛

### Enable detailed logging

```typescript
// Tambahkan ke app code
console.log('DEBUG:', {
  environment: import.meta.env.MODE,
  apiUrl: import.meta.env.VITE_API_URL,
  // ...
})
```

### Network debugging

```bash
# Check all network requests
# DevTools > Network tab
# Filter: XHR untuk API calls
```

### Performance profiling

```bash
# DevTools > Performance
# Record actions
# Analyze bottlenecks
```

---

## Getting Help 🆘

Jika masih tidak solve:

1. **Check documentation:**
   - [QUICKSTART.md](./QUICKSTART.md)
   - [DEPLOYMENT.md](./DEPLOYMENT.md)
   - [NETWORK_ACCESS.md](./NETWORK_ACCESS.md)

2. **Check error message carefully:**
   - Google exact error message
   - Stack overflow seringkali punya solusi

3. **Try minimal reproduction:**
   - Create new project
   - Replicate issue
   - Check if issue persists

4. **Check logs:**
   - Vercel build logs
   - Browser console
   - Terminal output

---

## Quick Reference 📋

```bash
# Reset everything
rm -rf node_modules dist .vite package-lock.json
npm install --legacy-peer-deps

# Full check
npm run check
npm run build

# Local test
npm run dev
npm run preview

# Deployment
git push
# Then deploy dari Vercel Dashboard
```

---

**Good luck! 🍀**

Jika problem tidak solve dengan guide ini, coba:
1. Check semua error messages carefully
2. Google error message
3. Check project documentation
4. Verify environment variables
5. Try clean install

Most issues solve dengan `npm install --legacy-peer-deps` 💪
