# Build a Favorite Icon Toggler

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-DOM%20Manipulation%20and%20Events-4B5566?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript DOM Manipulation and Events" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-DOM%20Manipulation%20and%20Events-4B5563" alt="DOM Manipulation and Events" />
</p>

> **Milestone:** Lab setelah mempelajari DOM Manipulation and Events.

## About

Build a Favorite Icon Toggler adalah project web yang memungkinkan pengguna mengubah tampilan ikon favorit pada setiap item.

Ketika tombol favorit diklik, ikon akan berubah dari bentuk outline menjadi ikon hati yang terisi. Klik berikutnya akan mengembalikannya ke bentuk semula.

Project ini menggunakan JavaScript untuk menangani event klik, memeriksa class pada tombol, serta menambahkan atau menghapus class secara dinamis.

## Preview

![Build a Favorite Icon Toggler Preview](/preview.jpeg)

## Konsep Utama

- **DOM Selection** digunakan untuk mengambil seluruh tombol favorit.
- **Event Listener** digunakan untuk menangani klik pada setiap tombol.
- **`forEach()`** digunakan untuk memproses setiap tombol favorit.
- **`classList.contains()`** digunakan untuk memeriksa apakah tombol sedang dalam kondisi terpilih.
- **`classList.add()`** digunakan untuk menambahkan class `filled`.
- **`classList.remove()`** digunakan untuk menghapus class `filled`.
- **`innerHTML`** digunakan untuk mengganti karakter ikon favorit.
- **CSS Class** digunakan untuk memberikan tampilan berbeda pada ikon yang terisi.

## Struktur Project

```text
favorite-icon-toggler/
├── index.html
├── styles.css
└── script.js
```

## Source Code

- [`index.html`](./index.html)
- [`styles.css`](./styles.css)
- [`script.js`](./script.js)

## Pembahasan

### 1. Mengambil Seluruh Tombol Favorit

Program mengambil seluruh tombol yang memiliki class `favorite-icon`.

```js
const favoriteButtons = document.querySelectorAll(".favorite-icon");
```

`querySelectorAll()` menghasilkan kumpulan seluruh tombol favorit yang terdapat pada halaman.

### 2. Memproses Setiap Tombol

Setiap tombol diproses menggunakan `forEach()`.

```js
favoriteButtons.forEach((button) => {
```

Parameter `button` mewakili tombol favorit yang sedang diproses.

Dengan cara ini, setiap item memiliki mekanisme toggle masing-masing.

### 3. Menambahkan Event Listener

Setiap tombol mendapatkan event listener untuk event `click`.

```js
button.addEventListener("click", () => {
```

Function tersebut akan dijalankan ketika pengguna mengklik tombol favorit.

### 4. Memeriksa Class `filled`

Program memeriksa apakah tombol sudah memiliki class `filled`.

```js
if (button.classList.contains("filled")) {
```

Jika class tersebut tersedia, tombol dianggap sedang berada dalam kondisi favorit aktif.

### 5. Mengembalikan Ikon ke Kondisi Awal

Jika tombol sudah memiliki class `filled`, program menghapus class tersebut.

```js
button.classList.remove("filled");
```

Ikon kemudian dikembalikan menjadi karakter outline.

```js
button.innerHTML = "&#9825;";
```

Karakter `&#9825;` menghasilkan simbol hati outline.

### 6. Mengaktifkan Ikon Favorit

Jika tombol belum memiliki class `filled`, program menambahkan class tersebut.

```js
button.classList.add("filled");
```

Class `filled` memberikan style tambahan pada ikon.

Program kemudian mengganti isi tombol menjadi simbol hati terisi.

```js
button.innerHTML = "&#10084;";
```

Karakter `&#10084;` menghasilkan simbol hati terisi.

### 7. Mengubah Tampilan dengan CSS

Class `filled` digunakan untuk memberikan tampilan berbeda.

```css
.filled {
  color: red;
  font-size: 22px;
}
```

Saat class `filled` ditambahkan, ikon berubah menjadi merah dan ukurannya sedikit lebih besar.

Ketika class tersebut dihapus, tombol kembali menggunakan style dasar dari `.favorite-icon`.

### 8. Menghilangkan Tampilan Default Tombol

CSS pada `.favorite-icon` menghilangkan background dan border bawaan tombol.

```css
.favorite-icon {
  background: none;
  border: none;
  padding: 0;
  font-size: 20px;
  cursor: pointer;
  outline: none;
}
```

Dengan demikian, tombol dapat tampil seperti ikon sederhana tanpa tampilan button default.

### 9. Memberikan Pemisah Antar Item

CSS menggunakan pseudo-class `:not(:last-child)` untuk memberikan border pada item selain item terakhir.

```css
ul li:not(:last-child) {
  border-bottom: 1px solid #bbb8b8;
}
```

Cara ini membuat setiap item terpisah secara visual tanpa memberikan border tambahan pada item terakhir.

## Method yang Dipakai

- `querySelectorAll()` digunakan untuk mengambil seluruh tombol favorit.
- `forEach()` digunakan untuk melakukan iterasi pada setiap tombol.
- `addEventListener()` digunakan untuk menangani event klik.
- `classList.contains()` digunakan untuk memeriksa keberadaan class `filled`.
- `classList.add()` digunakan untuk menambahkan class `filled`.
- `classList.remove()` digunakan untuk menghapus class `filled`.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `querySelectorAll()` | Mengambil seluruh tombol favorit |
| `forEach()` | Memproses setiap tombol |
| `addEventListener()` | Menangani klik tombol |
| `classList.contains()` | Memeriksa class `filled` |
| `classList.add()` | Mengaktifkan kondisi favorit |
| `classList.remove()` | Mengembalikan kondisi awal |
| `innerHTML` | Mengganti karakter ikon |
| CSS Class | Mengubah tampilan ikon |
| `:not(:last-child)` | Memberikan border pada item tertentu |

## Catatan Belajar

- **`querySelectorAll()`** dapat digunakan untuk mengambil banyak elemen dengan selector yang sama.
- **`forEach()`** dapat digunakan untuk memberikan perilaku yang sama kepada banyak elemen.
- **`classList.contains()`** dapat memeriksa apakah sebuah elemen memiliki class tertentu.
- **`classList.add()`** dapat menambahkan class secara dinamis.
- **`classList.remove()`** dapat menghapus class secara dinamis.
- **`innerHTML`** dapat digunakan untuk mengganti isi HTML sebuah elemen.
- **CSS Class** dapat digunakan untuk mengubah tampilan elemen berdasarkan kondisi tertentu.

## What I Practiced

```text
DOM Selection
querySelectorAll()
forEach()
Event Listeners
classList.contains()
classList.add()
classList.remove()
innerHTML
Dynamic Class Toggling
CSS Classes
CSS Pseudo-classes
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Favorite Icon Toggler  
**Languages:** HTML, CSS & JavaScript  
**Focus:** DOM Manipulation and Events

---

<p align="center">
  <strong>DOM Manipulation and Events Section — Build a Favorite Icon Toggler Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
