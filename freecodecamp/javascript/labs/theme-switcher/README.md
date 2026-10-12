# Build a Theme Switcher

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-JavaScript%20and%20Accessibility-4B5566?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript JavaScript and Accessibility" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-JavaScript%20and%20Accessibility-4B5563" alt="JavaScript and Accessibility" />
</p>

> **Milestone:** Lab setelah mempelajari JavaScript and Accessibility.

## About

Build a Theme Switcher adalah project web yang memungkinkan pengguna memilih antara tema light dan dark melalui menu pilihan tema.

Project ini menggunakan JavaScript untuk membuka dan menutup menu tema, mencari data tema yang dipilih, menerapkan class tema pada `body`, dan menampilkan status perubahan tema. HTML juga menggunakan atribut ARIA untuk memberikan informasi aksesibilitas pada tombol, menu, menu item, dan status.

## Konsep Utama

- **Theme Data** menggunakan array object untuk menyimpan nama tema dan pesan status.
- **DOM Selection** digunakan untuk mengambil tombol, dropdown, status, dan elemen `body`.
- **Event Listener** digunakan untuk menangani klik tombol dan pilihan tema.
- **Hidden Property** digunakan untuk membuka dan menutup dropdown tema.
- **ARIA Attributes** menggunakan `aria-haspopup`, `aria-expanded`, dan `aria-controls` pada tombol.
- **ARIA Roles** menggunakan `menu` dan `menuitem` untuk struktur pilihan tema.
- **`forEach()`** digunakan untuk memasang event listener pada setiap menu item.
- **`find()`** digunakan untuk mencari data berdasarkan nama tema.
- **`className`** digunakan untuk menerapkan class tema pada `body`.
- **CSS Custom Properties** digunakan untuk menyimpan nilai warna setiap tema.
- **`aria-live`** digunakan untuk menyediakan area status perubahan tema.

## Struktur Project

```text
theme-switcher/
├── index.html
├── styles.css
└── script.js
```

## Source Code

- [`index.html`](./index.html)
- [`styles.css`](./styles.css)
- [`script.js`](./script.js)

## Pembahasan

### 1. Menyimpan Data Tema

JavaScript menyimpan pilihan tema dalam array `themes`.

```js
const themes = [
  {
    name: "light",
    message: "Light theme is on!"
  }, 
  {
    name: "dark",
    message: "Dark theme is on!"
  }
];
```

Setiap object memiliki `name` untuk identitas tema dan `message` untuk pesan yang ditampilkan setelah tema dipilih.

### 2. Mengambil Elemen dari DOM

Program mengambil elemen yang diperlukan menggunakan `querySelector()`.

```js
const themeSwitcherButton = document.querySelector("#theme-switcher-button");
const themeDropdown = document.querySelector("#theme-dropdown");
const status = document.querySelector("#status");
const body = document.body;
```

Elemen tersebut digunakan untuk mengontrol menu, status, dan tema halaman.

### 3. Membuka dan Menutup Dropdown

Tombol theme switcher memiliki event `click`.

```js
themeSwitcherButton.addEventListener("click", () => {
  const isHidden = themeDropdown.hidden;
  themeDropdown.hidden = !isHidden;
  themeSwitcherButton.setAttribute("aria-expanded", String(isHidden))
});
```

Program membaca kondisi `hidden` pada dropdown.

Nilai tersebut kemudian dibalik untuk menampilkan atau menyembunyikan menu.

Nilai `aria-expanded` juga diperbarui agar mencerminkan kondisi menu.

### 4. Mengambil Menu Item Tema

Program mengambil seluruh elemen dengan role `menuitem`.

```js
const themeMenuItems = document.querySelectorAll('[role="menuitem"]');
```

Kemudian setiap menu item diberikan event listener menggunakan `forEach()`.

```js
themeMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
```

### 5. Mencari Data Tema yang Dipilih

Ketika menu item diklik, nama tema diambil dari isi teks elemen.

```js
const selectedTheme = item.textContent.trim();
```

Program kemudian mencari object tema yang memiliki nama yang sama.

```js
const selectedThemeData = themes.find((theme) => {
  return theme.name === selectedTheme;
});
```

Method `find()` mengembalikan object tema yang sesuai.

### 6. Menerapkan Tema pada `body`

Setelah data tema ditemukan, program memberikan class berdasarkan nama tema.

```js
body.className = `theme-${selectedThemeData.name}`;
```

Untuk tema light, class yang diberikan menjadi:

```text
theme-light
```

Untuk tema dark:

```text
theme-dark
```

CSS kemudian menggunakan class tersebut untuk menentukan nilai custom properties.

### 7. Menggunakan CSS Custom Properties

Tema light dan dark memiliki nilai custom properties yang berbeda.

```css
body.theme-light {
  --bg-color: #f4f7fb;
  --surface-color: #ffffff;
  --text-color: #1f2937;
}
```

Tema dark menggunakan nilai berbeda.

```css
body.theme-dark {
  --bg-color: #111827;
  --surface-color: #1f2937;
  --text-color: #f9fafb;
}
```

Elemen halaman menggunakan variable tersebut melalui `var()`.

```css
background-color: var(--bg-color);
color: var(--text-color);
```

Dengan cara ini, perubahan class pada `body` dapat mengubah tampilan tema halaman.

### 8. Menampilkan Status Perubahan

Setelah tema diterapkan, pesan dari object tema ditampilkan pada elemen status.

```js
status.textContent = selectedThemeData.message;
```

Elemen status memiliki:

```html
<p id="status" aria-live="polite"></p>
```

Atribut `aria-live="polite"` digunakan pada area yang isinya dapat berubah secara dinamis.

### 9. Struktur Aksesibilitas pada Menu

Tombol theme switcher menggunakan beberapa atribut ARIA.

```html
<button
  id="theme-switcher-button"
  aria-haspopup="true"
  aria-expanded="false"
  aria-controls="theme-dropdown">
  Switch Theme
</button>
```

`aria-haspopup` menunjukkan bahwa tombol membuka menu.

`aria-expanded` menunjukkan kondisi menu.

`aria-controls` menghubungkan tombol dengan dropdown yang dikendalikannya.

Dropdown menggunakan:

```html
<ul id="theme-dropdown" role="menu">
```

Sedangkan setiap pilihan tema menggunakan:

```html
<li role="menuitem">
```

Struktur tersebut memberikan informasi semantik mengenai fungsi elemen kepada teknologi bantu.

## Method yang Dipakai

- `querySelector()` digunakan untuk mengambil elemen berdasarkan selector.
- `querySelectorAll()` digunakan untuk mengambil seluruh menu item.
- `addEventListener()` digunakan untuk menangani event klik.
- `setAttribute()` digunakan untuk memperbarui atribut `aria-expanded`.
- `forEach()` digunakan untuk melakukan iterasi terhadap menu item.
- `textContent` digunakan untuk mengambil dan mengubah isi teks elemen.
- `trim()` digunakan untuk menghapus whitespace pada awal dan akhir nama tema.
- `find()` digunakan untuk mencari object tema yang sesuai.
- `document.body` digunakan untuk mengakses elemen `body`.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| Array of Objects | Menyimpan data tema |
| `querySelector()` | Mengambil elemen DOM |
| `querySelectorAll()` | Mengambil kumpulan elemen |
| `hidden` | Menampilkan atau menyembunyikan dropdown |
| `aria-expanded` | Menunjukkan kondisi dropdown |
| `forEach()` | Memproses setiap menu item |
| `find()` | Mencari data tema yang dipilih |
| `className` | Menerapkan class tema |
| CSS Custom Properties | Menyimpan nilai style tema |
| `aria-live` | Menandai area status yang berubah |

## Catatan Belajar

- **Array of Objects** dapat digunakan untuk menyimpan beberapa pilihan tema beserta datanya.
- **`find()`** dapat mengambil object pertama yang memenuhi kondisi tertentu.
- **`className`** dapat digunakan untuk mengganti class pada sebuah elemen.
- **CSS Custom Properties** membuat nilai style dapat digunakan kembali pada banyak selector.
- **ARIA attributes** membantu menjelaskan hubungan dan kondisi elemen interaktif.
- **`hidden`** dapat digunakan untuk mengontrol visibilitas menu tanpa menghapus elemennya dari DOM.

## What I Practiced

```text
DOM Selection
DOM Events
Array of Objects
Array find()
Array forEach()
CSS Custom Properties
Dynamic Class Names
ARIA Attributes
Accessible Menu Structure
Dynamic Status Messages
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Theme Switcher  
**Languages:** HTML, CSS & JavaScript  
**Focus:** JavaScript and Accessibility

---

<p align="center">
  <strong>JavaScript and Accessibility Section — Build a Theme Switcher Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
