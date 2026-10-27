# Build a Flexbox Photo Gallery

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-Flexbox-4B5563?labelColor=1572B6&logo=css&logoColor=white" alt="CSS3 Flexbox" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Workshop-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Workshop" />
  <img src="https://img.shields.io/badge/Topic-Flexbox-4B5563" alt="Flexbox" />
</p>

> **Milestone:** Workshop setelah mempelajari Flexbox.

## About

Project ini membuat galeri foto kucing menggunakan HTML dan CSS.

Fokus workshop adalah menggunakan Flexbox untuk menyusun kumpulan gambar dalam layout yang dapat berpindah baris ketika ruang horizontal tidak cukup. Project juga mengatur ukuran gambar, jarak antar-item, posisi gallery, dan cara gambar mengisi area yang sudah ditentukan.

## Preview

![Build a Flexbox Photo Gallery Preview](preview.jpeg)

## Konsep Utama

- Universal Selector
- `box-sizing: border-box`
- Flexbox
- `display: flex`
- `flex-direction`
- `flex-wrap`
- `justify-content`
- `align-items`
- `gap`
- `max-width`
- `margin: 0 auto`
- `object-fit: cover`
- `border-radius`
- `::after`

## Struktur Project

```text
flexbox-photo-gallery/
├── index.html
├── styles.css
└── preview.jpeg
```

## Source Code

- [`index.html`](./index.html)
- [`styles.css`](./styles.css)

## Pembahasan

### 1. Struktur HTML Gallery

Halaman menggunakan elemen `header` untuk judul dan sebuah `div` dengan class `gallery` sebagai container untuk sembilan gambar.

Setiap gambar menggunakan elemen `img` dengan `src` menuju gambar yang disediakan freeCodeCamp dan `alt` yang menjelaskan isi gambar.

```html
<div class="gallery">
  <img src="https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg" alt="a cat sniffing leafes">
  ...
</div>
```

Class `gallery` menjadi elemen yang nantinya diubah menjadi flex container melalui CSS.

### 2. Universal Selector dan `box-sizing`

CSS dimulai dengan:

```css
* {
  box-sizing: border-box;
}
```

Universal selector `*` memilih seluruh elemen.

`box-sizing: border-box` membuat `width` dan `height` elemen sudah memperhitungkan padding dan border di dalam ukuran tersebut.

### 3. Styling Dasar Halaman dan Header

`body` menghapus margin bawaan browser dan menetapkan font serta warna background.

```css
body {
  margin: 0;
  font-family: sans-serif;
  background: #f5f6f7;
}
```

Header menggunakan alignment teks di tengah, uppercase, padding, background gelap, warna teks putih, serta border bawah.

```css
.header {
  text-align: center;
  text-transform: uppercase;
  padding: 32px;
  background-color: #0a0a23;
  color: #fff;
  border-bottom: 4px solid #fdb347;
}
```

### 4. Membuat Flex Container

Gallery diubah menjadi flex container dengan:

```css
.gallery {
  display: flex;
}
```

Ketika `display: flex` digunakan, direct children dari `.gallery` menjadi flex items.

Pada project ini, sembilan elemen `img` menjadi flex items yang diatur oleh `.gallery`.

### 5. Mengatur Arah dengan `flex-direction`

Project menggunakan:

```css
flex-direction: row;
```

Nilai `row` membuat flex items disusun mengikuti arah horizontal pada main axis.

### 6. Membuat Item Berpindah Baris dengan `flex-wrap`

Gallery menggunakan:

```css
flex-wrap: wrap;
```

`wrap` mengizinkan flex items pindah ke baris berikutnya ketika ruang pada satu baris tidak lagi cukup.

Karena gallery berisi banyak gambar, property ini membuat susunan gambar tetap dapat menyesuaikan ruang yang tersedia.

### 7. Mengatur Posisi Item dengan `justify-content`

Project menggunakan:

```css
justify-content: center;
```

Property ini memusatkan flex items pada main axis.

Karena `flex-direction` menggunakan `row`, main axis berjalan secara horizontal.

### 8. Mengatur Posisi pada Cross Axis dengan `align-items`

Gallery menggunakan:

```css
align-items: center;
```

`align-items` mengatur posisi flex items pada cross axis.

Pada `flex-direction: row`, cross axis berjalan secara vertikal.

### 9. Memberikan Jarak dengan `gap`

Jarak antar-flex item dibuat menggunakan:

```css
gap: 16px;
```

`gap` memberikan ruang antar-item tanpa perlu menambahkan margin pada setiap gambar.

### 10. Membatasi Lebar dan Memusatkan Gallery

Gallery memiliki:

```css
max-width: 1400px;
margin: 0 auto;
padding: 20px 10px;
```

`max-width` membatasi lebar maksimum gallery.

`margin: 0 auto` membagi ruang kosong pada sisi kiri dan kanan sehingga gallery berada di tengah ketika lebarnya lebih kecil daripada ruang yang tersedia.

Padding memberi ruang di bagian dalam gallery.

### 11. Mengatur Ukuran Gambar

Semua gambar di dalam gallery menggunakan:

```css
.gallery img {
  width: 100%;
  max-width: 350px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}
```

`width: 100%` membuat gambar dapat menggunakan ruang yang tersedia, sedangkan `max-width: 350px` membatasi lebarnya.

`height: 300px` menetapkan tinggi gambar.

`object-fit: cover` membuat gambar mengisi area yang ditentukan sambil mempertahankan perbandingan dimensinya. Sebagian gambar dapat terpotong agar area tetap penuh.

`border-radius: 10px` membulatkan sudut gambar.

### 12. Pseudo-element `::after`

Project menambahkan:

```css
.gallery::after {
  content: "";
  width: 350px;
}
```

`::after` membuat pseudo-element sebagai child terakhir dari `.gallery`.

Karena `.gallery` merupakan flex container, pseudo-element tersebut ikut menjadi flex item dengan lebar `350px`.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `box-sizing: border-box` | Memasukkan padding dan border ke dalam perhitungan ukuran elemen |
| `display: flex` | Membuat elemen menjadi flex container |
| `flex-direction: row` | Menyusun flex items secara horizontal |
| `flex-wrap: wrap` | Mengizinkan flex items berpindah ke baris berikutnya |
| `justify-content: center` | Memusatkan flex items pada main axis |
| `align-items: center` | Mengatur alignment flex items pada cross axis |
| `gap` | Memberikan jarak antar-flex item |
| `max-width` | Membatasi lebar maksimum elemen |
| `margin: 0 auto` | Memusatkan elemen secara horizontal ketika width memungkinkan |
| `object-fit: cover` | Membuat gambar memenuhi area tanpa mengubah rasio dimensinya |
| `::after` | Membuat pseudo-element setelah content elemen |

## Catatan Belajar

- **Flex container** dibuat dengan `display: flex` dan mengatur direct children sebagai flex items.
- **`flex-direction: row`** membuat main axis berjalan secara horizontal.
- **`flex-wrap: wrap`** memungkinkan item berpindah baris ketika ruang tidak cukup.
- **`justify-content`** mengatur distribusi item pada main axis.
- **`align-items`** mengatur posisi item pada cross axis.
- **`gap`** memberikan jarak antar-flex item dari container.
- **`object-fit: cover`** menjaga gambar memenuhi area yang sudah ditentukan sambil mempertahankan rasio dimensinya.
- **`::after`** dapat menghasilkan pseudo-element yang ikut menjadi flex item ketika parent-nya menggunakan Flexbox.

## What I Practiced

```text
HTML Image Gallery
CSS Box Sizing
CSS Flexbox
Flex Direction
Flex Wrapping
Main Axis Alignment
Cross Axis Alignment
Flex Gap
Responsive Image Sizing
Object Fit
Pseudo-elements
```

---

**Platform:** freeCodeCamp  
**Workshop:** Build a Flexbox Photo Gallery  
**Language:** HTML & CSS  
**Focus:** Flexbox

---

<p align="center">
  <strong>Flexbox Section — Build a Flexbox Photo Gallery Completed</strong><br>
  <sub>Next stop: continue the Responsive Web Design Certification journey.</sub>
</p>
