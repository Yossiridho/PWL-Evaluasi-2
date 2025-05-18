Nama	: Yossi Afridho
NIM	: 122140211
________________________________________
Evaluasi 2 Pemrograman Web Lanjut
1. Penjelasan Aplikasi
Aplikasi ini merupakan portal berita modern yang dibangun menggunakan Next.js dengan fitur utama:
•	Autentikasi pengguna menggunakan OAuth2 dengan Google melalui NextAuth.js.
•	Pengambilan berita dari beberapa sumber: NewsAPI, The Guardian API, Currents API, dan RSS feed BBC.
•	Tampilan berita responsif dan modern menggunakan CSS Grid dengan efek hover dan masonry layout.
•	Fitur login dan logout dengan halaman login yang menampilkan form username/password(tidak diintegrasikan) dan opsi login Google.
•	Navbar dinamis menampilkan nama pengguna yang login dan tombol logout.
•	Pengelolaan state dan API routes di Next.js untuk menggabungkan dan menyajikan data berita dari berbagai portal secara seragam.
•	Handling error dan validasi data agar berita yang ditampilkan hanya yang memiliki gambar valid, serta fallback gambar jika gagal dimuat.
2. Fitur Utama
•	Login dengan Google OAuth2
•	Halaman daftar berita utama dengan layout kartu berita yang rapi dan responsif.
•	Detail berita dengan link ke sumber asli.
•	Background halaman dengan image dan efek blur modern.
•	Efek hover interaktif pada kartu berita.
•	Filter otomatis hanya menampilkan berita dengan gambar.
•	Navbar dengan user info dan tombol logout.
________________________________________
3. Cara Instalasi dan Menjalankan Aplikasi
Prasyarat
•	Node.js (versi 18 atau lebih baru direkomendasikan)
•	npm
•	Akun dan API key untuk NewsAPI, Guardian API, Currents API
•	Google OAuth client ID dan client secret untuk autentikasi
Langkah Instalasi
1.	Buat proyek
npx create-next-app@latest <nama-proyek-anda>
2.	Install dependensi
npm install
3.	Buat file .env.local di root proyek dan isi variabel berikut:
NEXTAUTH_SECRET=your-random-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEWS_API_KEY=your-newsapi-key
GUARDIAN_API_KEY=your-guardian-api-key
CURRENTS_API_KEY=your-currentsapi-key
Catatan:
Untuk mendapatkan kunci API dan OAuth client, daftar pada situs resmi masing-masing layanan.
4.	Jalankan aplikasi
npm run dev
5.	Akses aplikasi
Buka browser dan buka alamat:
http://localhost:3000/login
Masuk menggunakan Google atau isi form username dan password dummy.
________________________________________
4. Struktur Proyek
app
|--api
|    |-auth
|        |--[...nextauth]
|        |    |--route.ts    
|        |--news
|             |--route.ts                   
|--components
|    |--LogoutButton.tsx
|    |--Navbar.tsx                      
|    |--NewsList.tsx                    
|--login 
|    |--page.tsx 
|--news
|    |--[id]
         |--page.tsx                        
|--public
|    |--images                        
|--global.css
|--Layout.tsx 
|--provider.tsx                    
________________________________________
5. Cara Penggunaan
•	Buka halaman login, login dengan Google
•	Setelah login berhasil, otomatis diarahkan ke halaman berita utama.
•	Di halaman utama terdapat navbar dengan nama pengguna dan tombol logout.
•	Berita utama ditampilkan dalam kartu dengan gambar, judul, waktu, dan sumber.
•	Hover pada kartu memberikan efek interaktif.
•	Logout untuk keluar dan kembali ke halaman login.
________________________________________

