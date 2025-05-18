# 📰 Portal Berita Modern - Evaluasi 2 Pemrograman Web Lanjut

## 1. Penjelasan Aplikasi

Aplikasi ini merupakan portal berita modern yang dibangun menggunakan **Next.js** dengan fitur utama:

- 🔐 Autentikasi pengguna menggunakan **OAuth2 dengan Google** melalui **NextAuth.js**
- 📰 Pengambilan berita dari beberapa sumber:
  - NewsAPI
  - The Guardian API
  - Currents API
  - RSS Feed BBC
- 🧱 Tampilan berita responsif dan modern menggunakan **CSS Grid**, **hover effects**, dan **masonry layout**
- 🔑 Fitur login dan logout
  - Login menggunakan akun Google
- 🧭 Navbar dinamis menampilkan nama pengguna yang login dan tombol logout
- 📡 Pengelolaan state dan API Routes di Next.js untuk menyajikan berita dari berbagai sumber secara seragam

---

## 2. Fitur Utama

- ✅ Login dengan Google OAuth2
- 🗂️ Halaman daftar berita utama dengan **layout kartu responsif**
- 🔗 Detail berita mengarah ke sumber asli
- 🌆 Background halaman dengan gambar dan efek blur
- 🎨 Hover interaktif pada kartu berita
- 🧑 Navbar dengan info pengguna dan tombol logout

---

## 3. Cara Instalasi dan Menjalankan Aplikasi

### 🛠️ Prasyarat

- **Node.js** (Versi 18 atau lebih baru)
- **npm**
- Akun dan API Key untuk:
  - NewsAPI
  - Guardian API
  - Currents API
- Google OAuth Client ID & Secret

### 📦 Langkah Instalasi

1. **Buat proyek baru atau clone github**:
   ```bash
   npx create-next-app@latest <nama-proyek-anda>
   atau
   git clone https://github.com/Yossiridho/PWL-Evaluasi-2.git
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Buat file `.env.local` di root proyek** dan isi dengan variabel berikut:

   ```env
   NEXTAUTH_SECRET=your-random-secret-key
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   NEWS_API_KEY=your-newsapi-key
   GUARDIAN_API_KEY=your-guardian-api-key
   CURRENTS_API_KEY=your-currentsapi-key
   ```

   💡 *Daftar di situs resmi masing-masing layanan untuk mendapatkan API Key dan OAuth Client.*

4. **Jalankan aplikasi**:
   ```bash
   npm run dev
   ```

5. **Akses aplikasi**:
   Buka browser dan kunjungi:
   ```
   http://localhost:3000/login
   ```
   Login menggunakan Google

---

## 4. Struktur Proyek

```
app/
├── api/
│   ├── auth/
│   │   ├── [...nextauth]/          # Konfigurasi autentikasi NextAuth
│   │   └── route.ts                # API route untuk auth
│   └── news/
│       └── route.ts                # API route untuk data berita
│
├── components/
│   ├── LogoutButton.tsx           # Komponen tombol logout
│   ├── Navbar.tsx                 # Navigasi atas
│   └── NewsList.tsx               # Daftar berita
│
├── login/
│   └── page.tsx                   # Halaman login
│
├── news/
│   └── [id]/
│       └── page.tsx               # Halaman detail berita
│
├── public/
│   └── images/                    # Folder untuk aset gambar
│
├── global.css                     # File global style
├── Layout.tsx                     # Komponen layout utama
└── provider.tsx                   # Provider untuk state/global context
```

---

## 5. Cara Penggunaan

1. Buka halaman **/login**
2. Login menggunakan **Google**
3. Setelah login, pengguna diarahkan ke halaman **utama berita**
4. Di halaman utama:
   - Navbar menampilkan **nama pengguna** dan **tombol logout**
   - Setiap kartu berita menampilkan:
     - Gambar
     - Judul
     - Waktu
     - Sumber
   - Hover pada kartu memberikan efek visual interaktif
5. Klik logout untuk keluar dan kembali ke halaman login

---

Selamat menggunakan aplikasi portal berita ini! 🚀
