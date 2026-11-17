# Build a Color Picker App

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript" />
  <img src="https://img.shields.io/badge/React-React%20State%2C%20Hooks%2C%20and%20Routing-087EA4?labelColor=61DAFB&logo=react&logoColor=000" alt="React React State, Hooks, and Routing" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-React%20State%2C%20Hooks%2C%20and%20Routing-4B5563" alt="React State, Hooks, and Routing" />
</p>

> **Milestone:** Lab setelah mempelajari React State, Hooks, and Routing.

## About

Build a Color Picker App adalah lab freeCodeCamp yang membuat pemilih warna menggunakan React. Pengguna memilih warna melalui elemen `input` bertipe `color`, kemudian warna latar container berubah mengikuti warna yang dipilih.

Project ini mempraktikkan pengelolaan `state` melalui `useState`, penanganan event `onChange`, serta penerapan `style` dinamis pada komponen React. Struktur halaman menggunakan HTML, tampilannya diatur dengan CSS, dan komponen ditulis menggunakan JavaScript dengan JSX.

## Konsep Utama

- React functional component `ColorPicker`
- React Hook `useState`
- State `color` dan setter `setColor`
- Event `onChange` dan function `handleColorChange`
- Controlled input dengan `value={color}`
- JSX dan inline style `backgroundColor`
- React DOM melalui `createRoot()` dan `render()`
- CSS Flexbox untuk penempatan konten

## Struktur Project

```text
.
├── index.html
├── index.jsx
└── styles.css
```

## Source Code

- [`index.html`](./index.html)
- [`index.jsx`](./index.jsx)
- [`styles.css`](./styles.css)

## Pembahasan

### 1. Struktur halaman dan pemuatan React di `index.html`

File `index.html` menyiapkan elemen `<div id="root"></div>` sebagai tempat komponen React ditampilkan. File ini juga memuat `styles.css`, React versi `18.3.1`, ReactDOM versi `18.3.1`, serta Babel Standalone versi `7.26.5` melalui tag `<script>`.

Script dengan `type="text/babel"` memuat `index.jsx`. Pada script berikutnya, `ColorPicker` diimpor dari `./index.jsx`, kemudian `ReactDOM.createRoot(document.getElementById('root')).render(<ColorPicker />)` menampilkan komponen ke dalam elemen `root`.

### 2. Component `ColorPicker` dan `useState` di `index.jsx`

Baris `const { useState } = React;` mengambil Hook `useState` dari object `React`. Project mengekspor functional component bernama `ColorPicker` menggunakan `export const ColorPicker = () => { ... }`.

Di dalam component, `const [color, setColor] = useState("#ffffff");` membuat state `color` dengan nilai awal `#ffffff` (putih). Variable `color` menyimpan warna yang sedang dipilih, sedangkan `setColor` digunakan untuk memperbarui nilainya.

### 3. Function `handleColorChange` dan event `onChange`

Function `handleColorChange` menerima parameter `e`, yaitu object event dari input warna. Ketika nilai input berubah, `e.target.value` membaca nilai warna yang dipilih dan `setColor(e.target.value)` memperbarui state `color`.

Attribute `onChange={handleColorChange}` pada elemen `<input>` menghubungkan perubahan input dengan function tersebut. Karena input juga menggunakan `value={color}`, nilai yang ditampilkan input mengikuti state React.

### 4. Perubahan warna latar melalui JSX

Component mengembalikan container `<div>` dengan `id="color-picker-container"`. Attribute `style={{ backgroundColor: color }}` menggunakan nilai state `color` sebagai warna latar container. Ketika state diperbarui, React menampilkan perubahan warna latar tersebut.

Di dalam container terdapat teks instruksi dan `<input id="color-input" type="color" ... />`. Elemen input menyediakan pilihan warna, sementara container menampilkan hasil pilihannya sebagai background.

### 5. Pengaturan tampilan melalui `styles.css`

Selector `body, html` menghilangkan margin dan padding bawaan, menetapkan tinggi `100%`, serta menggunakan font `Arial, sans-serif`.

Selector `#color-picker-container` menetapkan tinggi `100vh` dan menggunakan Flexbox dengan `justify-content: center`, `align-items: center`, serta `flex-direction: column` untuk menempatkan konten di tengah area container. Nilai CSS `background-color: #ffffff` menjadi warna latar yang dituliskan pada stylesheet, sedangkan inline style dari React mengatur warna latar berdasarkan state `color`.

Selector `input[type="color"]` mengatur `position: absolute`, `margin-top: 50px`, dan `height: 40px` pada input warna.

## Method yang Dipakai

- `document.getElementById()` digunakan untuk memperoleh elemen HTML dengan ID `root`.
- `ReactDOM.createRoot()` digunakan untuk membuat root React pada elemen HTML tersebut.
- `render()` digunakan untuk menampilkan component `ColorPicker` melalui root React.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `ColorPicker` | Component React yang menampilkan pemilih warna dan container. |
| `useState("#ffffff")` | Membuat state warna dengan nilai awal putih. |
| `color` | Menyimpan nilai warna yang digunakan input dan background. |
| `setColor()` | Memperbarui nilai state `color`. |
| `handleColorChange` | Menangani perubahan warna pada input. |
| `onChange` | Memanggil handler saat nilai input berubah. |
| `value={color}` | Menghubungkan nilai input dengan state React. |
| `backgroundColor: color` | Mengubah warna latar berdasarkan state. |
| `createRoot()` dan `render()` | Menampilkan component React pada elemen `root`. |
| CSS Flexbox | Mengatur posisi konten di dalam container. |

## Catatan Belajar

- **`useState`** menyimpan warna pilihan pengguna di dalam component React.
- **`#ffffff`** merupakan nilai warna awal pada state dan stylesheet.
- **`onChange`** memanggil `handleColorChange` ketika nilai input warna berubah.
- **`e.target.value`** memberikan nilai dari input yang memicu event.
- **`setColor`** memperbarui state sehingga background dapat mengikuti warna pilihan.
- **`value={color}`** membuat nilai input mengikuti state yang sama dengan warna background.
- **Inline style JSX** menggunakan `style={{ backgroundColor: color }}` untuk mengatur warna latar secara dinamis.
- **React DOM** menampilkan component `ColorPicker` di dalam elemen `root` pada halaman HTML.

## What I Practiced

```text
React Functional Components
JSX
React useState Hook
State Updates
React Event Handling
Controlled Color Inputs
Dynamic Inline Styles
React DOM Rendering
CSS Flexbox
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Color Picker App  
**Languages:** HTML, CSS & JavaScript  
**Focus:** React State, Hooks, and Routing

---

<p align="center">
  <strong>React State, Hooks, and Routing Section — Build a Color Picker App Completed</strong><br>
  <sub>Next stop: continue the Front-End Development Libraries journey.</sub>
</p>
