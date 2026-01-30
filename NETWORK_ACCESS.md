# Network Accessibility Guide 🌐

Panduan untuk mengakses website dari perangkat lain (phone, tablet, laptop lain) di network yang sama.

## Mengapa penting? 📱

Dengan konfigurasi ini, Anda dapat:
- ✅ Test website dari berbagai device
- ✅ Share preview dengan team members
- ✅ Test responsive design dengan actual devices
- ✅ Demo ke client/stakeholder
- ✅ Simulate different device environments

---

## Cara Mengakses dari Perangkat Lain

### Step 1: Mulai Dev Server
Dari komputer development Anda:
```bash
npm run dev
```

Output akan menunjukkan:
```
Local:   http://localhost:3000/
Network: http://<your-ip>:3000/
```

### Step 2: Cari IP Address Komputer Anda

#### 🪟 Windows
Buka Command Prompt dan jalankan:
```cmd
ipconfig
```
Cari "IPv4 Address" di bagian "Ethernet adapter" atau "Wireless LAN adapter":
```
IPv4 Address . . . . . . . . . . . : 192.168.1.100
```
IP Anda: `192.168.1.100`

#### 🍎 macOS
Buka Terminal dan jalankan:
```bash
ifconfig
```
Cari "inet " (bukan inet6) di interface aktif (biasanya en0 atau en1):
```
inet 192.168.1.100
```
IP Anda: `192.168.1.100`

#### 🐧 Linux
Buka Terminal dan jalankan:
```bash
hostname -I
```
Atau gunakan:
```bash
ip addr show
```
Cari IP yang dimulai dengan 192.168.x.x atau 10.x.x.x

### Step 3: Akses dari Perangkat Lain

Dari perangkat lain (phone, tablet, laptop) yang terhubung ke network yang sama:

**Format URL:**
```
http://<IP-ADDRESS>:3000
```

**Contoh:**
```
http://192.168.1.100:3000
```

---

## Testing Scenarios 📊

### Scenario 1: Berbeda Device Sama Network (Recommended)

```
├── Komputer A (Development)
│   └── npm run dev → http://192.168.1.100:3000
│
├── Smartphone B
│   └── Browser: http://192.168.1.100:3000 ✅
│
├── Tablet C
│   └── Browser: http://192.168.1.100:3000 ✅
│
└── Komputer D
    └── Browser: http://192.168.1.100:3000 ✅
```

### Scenario 2: Virtual Machine / Docker

Jika using VM:
```bash
# Get VM network IP (bukan 127.0.0.1)
# Akses dari host: http://<vm-ip>:3000
```

### Scenario 3: Different Network Segment

Jika devices di subnet berbeda:
1. Pastikan firewall allow port 3000
2. Gunakan public IP atau VPN
3. Atau setup reverse proxy

---

## Troubleshooting 🔧

### ❌ Can't connect dari device lain

**Check 1: Device terhubung ke network yang sama?**
```bash
# Dari device lain, ping komputer development Anda
ping 192.168.1.100
```

**Check 2: Firewall memblock port 3000?**
- Windows: Check Windows Defender Firewall
- Mac: Check System Preferences > Security & Privacy
- Linux: `sudo ufw status` dan `sudo ufw allow 3000`

**Check 3: Dev server listen pada interface yang benar?**
```bash
# Pastikan ini terlihat di output:
# ✓ Server running on http://0.0.0.0:3000/
```

**Check 4: DNS/Hostname issue?**
```bash
# Try dengan IP address bukan hostname
http://192.168.1.100:3000  ✅ (use this)
http://my-computer.local:3000  ❌ (may not work)
```

### ❌ Cors errors dari device lain

**Solution:**
Vite config sudah dikonfigurasi dengan `host: "0.0.0.0"` dan allowedHosts.
Jika masih error, check Network tab di DevTools.

### ❌ Page load tapi styling/assets tidak load

**Solution:**
- Check Network tab di DevTools untuk 404 errors
- Ensure relative paths correct
- Browser cache: Hard refresh (Ctrl+Shift+R atau Cmd+Shift+R)

### ❌ Connection timeout

**Solution:**
1. Verify IP address benar: `ping 192.168.1.100`
2. Check port correct: `:3000`
3. Check firewall rules
4. Try dengan IP address lain (dari `ipconfig`)

---

## Advanced: Alternative Access Methods 🚀

### Method 1: ngrok (Recommended untuk Share ke External)

Untuk share preview dengan orang yang tidak di network yang sama:

```bash
# Install ngrok (one-time)
npm install -g ngrok

# Expose local server
ngrok http 3000

# Output:
# Forwarding   http://abc123.ngrok.io -> localhost:3000
```

Sharable URL: `http://abc123.ngrok.io`

### Method 2: SSH Tunneling

```bash
# Dari remote machine
ssh -R 3000:localhost:3000 user@your-server.com

# Access dari development komputer:
# http://localhost:3000
```

### Method 3: Mobile USB Debugging

```bash
# Android - Reverse port forward
adb reverse tcp:3000 tcp:3000

# Access dari mobile browser:
# http://localhost:3000
```

---

## Performance Tips 💡

### Untuk Test di Mobile Device

1. **Disable Vite HMR di production preview:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check Network tab:**
   - Ensure images/assets memuat dengan cepat
   - Check untuk 404 errors
   - Monitor loading time

3. **Test dengan Slow Connection:**
   - DevTools > Network tab > throttle ke "Slow 3G"
   - Simulate real-world conditions

---

## Security Notes ⚠️

**⚠️ Important:** Network accessible dev server = potential security risk

### Best Practices:

1. ✅ Hanya gunakan di trusted networks
2. ✅ Disable firewall rules setelah selesai testing
3. ✅ Don't expose sensitive API keys
4. ✅ Use VPN jika shared dengan external
5. ✅ Never run production builds on shared network

```bash
# For production, always use HTTPS with proper security
# Vercel deployment auto-handles HTTPS
npm run build
# Deploy ke Vercel, bukan local network share
```

---

## Quick Reference 📋

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Get your IP (Windows) | `ipconfig` |
| Get your IP (Mac/Linux) | `ifconfig` or `hostname -I` |
| Access dari device lain | `http://<your-ip>:3000` |
| Test production build | `npm run preview` |
| Share externally | `ngrok http 3000` |
| Check firewall (Windows) | Settings > Security > Firewall |

---

## Devices to Test 📱

### Must Test:
- [ ] Mobile phone (iOS/Android)
- [ ] Tablet
- [ ] Desktop browser (Chrome, Firefox, Safari, Edge)
- [ ] Small screen (< 320px)
- [ ] Large screen (> 1920px)

### Optional:
- [ ] Smart TV / Kiosk
- [ ] Wearable devices
- [ ] Different OS (Windows, Mac, Linux)

---

## Support 🆘

Jika masih ada issue:
1. Check firewall settings
2. Verify network connection
3. Try `npm run dev` lagi
4. Check console/terminal untuk error messages
5. Lihat `DEPLOYMENT.md` untuk advanced setup

---

**Happy Testing!** 🎉

Untuk deployment ke production, lihat `DEPLOYMENT.md`
