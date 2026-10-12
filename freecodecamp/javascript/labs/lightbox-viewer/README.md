# Build a Lightbox Viewer

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-DOM%20Manipulation%20and%20Events-4B5566?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript DOM Manipulation and Events" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-DOM%20Manipulation%20and%20Events-4B5563" alt="DOM Manipulation and Events" />
</p>

> **Milestone:** Lab setelah mempelajari DOM Manipulation and Events.

## About

Build a Lightbox Viewer adalah project web yang membuat galeri gambar sederhana dengan fitur lightbox.

Pengguna dapat memilih salah satu gambar pada galeri untuk menampilkan versi gambar berukuran penuh dalam overlay. Lightbox dapat ditutup melalui tombol close atau dengan mengklik area lightbox.

## Preview

![Build a Lightbox Viewer Preview](./preview.jpeg)

## Konsep Utama

- **DOM Selection** digunakan untuk mengambil elemen galeri, lightbox, gambar preview, dan tombol close.
- **Event Listener** digunakan untuk merespons klik pada gambar dan tombol close.
- **NodeList Iteration** digunakan untuk memasang event pada setiap gambar galeri.
- **String Replacement** digunakan untuk mengubah URL thumbnail menjadi URL gambar berukuran penuh.
- **DOM Property** digunakan untuk mengubah sumber gambar preview.
- **Inline Style** digunakan untuk menampilkan dan menyembunyikan lightbox.
- **CSS Fixed Positioning** digunakan untuk membuat lightbox menutupi halaman.
- **CSS Flexbox** digunakan untuk menempatkan gambar preview di tengah lightbox.

## Struktur Project

```text
lightbox-viewer/
├── index.html
├── styles.css
└── script.js
```

## Source Code

- [`index.html`](./index.html)
- [`styles.css`](./styles.css)
- [`script.js`](./script.js)

## Pembahasan

### 1. Membuat Galeri Gambar

HTML menyediakan tiga gambar dengan class `gallery-item`.

```html
<img
  class="gallery-item"
  src="https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg"
  alt="Stonehenge"
>
```

Class tersebut digunakan JavaScript untuk mengambil seluruh gambar yang dapat diklik.

Setiap gambar menggunakan URL versi thumbnail.

### 2. Menyiapkan Elemen Lightbox

Lightbox terdiri dari container overlay, tombol close, dan gambar preview.

```html
<div class="lightbox">
  <button id="close-btn">&times;</button>
  <img id="lightbox-image" src="" alt="Preview">
</div>
```

Gambar preview awalnya belum memiliki sumber gambar.

JavaScript akan mengisinya ketika pengguna memilih salah satu gambar.

### 3. Mengambil Elemen dari DOM

JavaScript mengambil seluruh elemen yang diperlukan menggunakan `querySelectorAll()` dan `querySelector()`.

```js
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const closeBtn = document.querySelector("#close-btn");
```

`galleryItems` berisi seluruh gambar pada galeri.

`lightbox` digunakan untuk mengontrol overlay.

`lightboxImage` digunakan untuk menampilkan gambar berukuran penuh.

`closeBtn` digunakan untuk menutup lightbox.

### 4. Menambahkan Event pada Setiap Gambar

Setiap gambar diberi event listener menggunakan `forEach()`.

```js
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
```

Ketika salah satu gambar diklik, function di dalam event tersebut dijalankan.

### 5. Mengubah URL Thumbnail

Kode menggunakan `replace()` untuk menghilangkan bagian `-thumbnail` dari URL gambar.

```js
const fullSizeSrc = item.src.replace("-thumbnail", "");
```

Contohnya, URL:

```text
stonehenge-thumbnail.jpg
```

diubah menjadi:

```text
stonehenge.jpg
```

Hasil tersebut digunakan sebagai sumber gambar berukuran penuh.

### 6. Menampilkan Gambar pada Lightbox

URL gambar yang sudah diubah diberikan ke property `src`.

```js
lightboxImage.src = fullSizeSrc;
```

Setelah itu lightbox ditampilkan dengan mengubah nilai `display`.

```js
lightbox.style.display = "flex";
```

CSS sebelumnya membuat lightbox tidak terlihat menggunakan:

```css
display: none;
```

Ketika gambar dipilih, nilainya berubah menjadi `flex`.

### 7. Menutup Lightbox

Tombol close memiliki event listener sendiri.

```js
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
```

Ketika tombol diklik, lightbox kembali disembunyikan.

Area lightbox juga memiliki event listener.

```js
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
```

Dengan demikian, pengguna juga dapat menutup overlay dengan mengklik area lightbox.

### 8. Membuat Overlay dengan CSS

Lightbox menggunakan `position: fixed` agar menutupi area halaman.

```css
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

`display: flex` digunakan ketika lightbox ditampilkan agar gambar berada di tengah.

```css
.lightbox {
  display: none;
  justify-content: center;
  align-items: center;
}
```

Gambar preview dibatasi agar tidak melebihi ukuran layar.

```css
#lightbox-image {
  max-width: 80%;
  max-height: 80%;
}
```

## Method yang Dipakai

- `querySelectorAll()` digunakan untuk mengambil seluruh gambar dengan class `.gallery-item`.
- `querySelector()` digunakan untuk mengambil elemen lightbox dan tombol close.
- `forEach()` digunakan untuk memasang event listener pada setiap gambar.
- `addEventListener()` digunakan untuk menangani aksi klik.
- `replace()` digunakan untuk menghapus `-thumbnail` dari URL gambar.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `querySelectorAll()` | Mengambil seluruh gambar galeri |
| `querySelector()` | Mengambil elemen tertentu dari DOM |
| `forEach()` | Memproses setiap gambar galeri |
| `addEventListener()` | Menangani klik pengguna |
| `replace()` | Mengubah URL thumbnail menjadi URL gambar penuh |
| `src` | Mengatur sumber gambar preview |
| `style.display` | Menampilkan atau menyembunyikan lightbox |
| `position: fixed` | Membuat overlay memenuhi halaman |
| Flexbox | Memusatkan gambar di dalam lightbox |

## Catatan Belajar

- **`querySelectorAll()`** dapat digunakan untuk mengambil beberapa elemen sekaligus.
- **`forEach()`** dapat digunakan untuk memberikan event yang sama kepada banyak elemen.
- **`replace()`** dapat digunakan untuk memodifikasi bagian tertentu dari sebuah string.
- **`addEventListener()`** memungkinkan elemen merespons interaksi pengguna.
- **`src`** dapat diubah melalui JavaScript untuk mengganti gambar yang ditampilkan.
- **`display`** dapat dikendalikan melalui JavaScript untuk membuat elemen muncul atau menghilang.
- **Flexbox** dapat digunakan untuk memusatkan konten secara horizontal dan vertikal.

## What I Practiced

```text
DOM Selection
querySelector()
querySelectorAll()
NodeList Iteration
forEach()
Event Listeners
addEventListener()
String replace()
Image src Manipulation
Inline Style Manipulation
CSS Fixed Positioning
CSS Flexbox
Lightbox UI
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Lightbox Viewer  
**Languages:** HTML, CSS & JavaScript  
**Focus:** DOM Manipulation and Events

---

<p align="center">
  <strong>DOM Manipulation and Events Section — Build a Lightbox Viewer Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
