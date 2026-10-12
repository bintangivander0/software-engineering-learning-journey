# Build a Storytelling App

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-DOM%20Manipulation%20and%20Events-4B5566?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript DOM Manipulation and Events" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Workshop-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Workshop" />
  <img src="https://img.shields.io/badge/Topic-DOM%20Manipulation%20and%20Events-4B5563" alt="DOM Manipulation and Events" />
</p>

> **Milestone:** Workshop setelah mempelajari DOM Manipulation and Events.

## About

Build a Storytelling App adalah project web yang menampilkan cerita berdasarkan genre yang dipilih pengguna.

Pengguna dapat memilih Scary Story, Funny Story, atau Adventure Story. JavaScript mengambil data cerita dari object, menampilkan cerita yang sesuai, dan mengubah warna border container berdasarkan genre yang dipilih.

## Preview

![Build a Storytelling App Preview](stotytelling-app/preview.jpeg)

## Konsep Utama

- **Object** digunakan untuk menyimpan data cerita berdasarkan genre.
- **Nested Object** digunakan untuk menyimpan cerita dan warna border pada setiap genre.
- **DOM Selection** digunakan untuk mengambil tombol, container, dan elemen hasil cerita.
- **Event Listener** digunakan untuk menangani klik pada setiap tombol cerita.
- **Function** digunakan untuk menampilkan cerita berdasarkan genre yang dipilih.
- **`hasOwnProperty()`** digunakan untuk memeriksa keberadaan genre dalam object.
- **Bracket Notation** digunakan untuk mengambil data berdasarkan nama genre.
- **`textContent`** digunakan untuk menampilkan cerita pada halaman.
- **Style Manipulation** digunakan untuk mengubah warna border container secara dinamis.
- **Template Literal** digunakan untuk membentuk nama property CSS secara dinamis.
- **Media Query** digunakan untuk mengubah susunan tombol berdasarkan ukuran layar.

## Struktur Project

```text
storytelling-app/
├── index.html
├── styles.css
└── script.js
```

## Source Code

- [`index.html`](./index.html)
- [`styles.css`](./styles.css)
- [`script.js`](./script.js)

## Pembahasan

### 1. Mengambil Elemen dari DOM

JavaScript mengambil container cerita menggunakan `querySelector()`.

```js
const storyContainer = document.querySelector(".story-container");
```

Tiga tombol cerita diambil menggunakan `getElementById()`.

```js
const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");
```

Elemen hasil cerita juga diambil agar dapat diperbarui ketika pengguna memilih genre.

```js
const resultParagraph = document.getElementById("result");
```

### 2. Menyimpan Data Cerita dalam Object

Data cerita disimpan dalam `storyObj`.

```js
const storyObj = {
  scary: {
    story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
    borderColor: "#ee4b2b"
  },
  funny: {
    story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
    borderColor: "#f1be32"
  },
  adventure: {
    story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.`,
    borderColor: "#acd157"
  }
};
```

Setiap genre memiliki dua property:

```text
story
borderColor
```

Dengan struktur tersebut, cerita dan warna border dapat diambil berdasarkan genre.

### 3. Membuat Function `displayStory()`

Function `displayStory()` digunakan untuk menampilkan cerita yang dipilih.

```js
function displayStory(genre) {
  if (storyObj.hasOwnProperty(genre)) {
    resultParagraph.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}
```

Parameter `genre` menerima nama genre yang dikirim ketika tombol diklik.

### 4. Memeriksa Genre yang Tersedia

Sebelum mengambil data, program memeriksa apakah genre tersebut tersedia dalam `storyObj`.

```js
if (storyObj.hasOwnProperty(genre)) {
```

Jika property tersebut tersedia, program melanjutkan proses untuk menampilkan cerita dan warna border.

### 5. Mengambil Cerita Berdasarkan Genre

Bracket notation digunakan untuk mengambil object berdasarkan nilai `genre`.

```js
storyObj[genre].story
```

Jika `genre` bernilai `"scary"`, kode tersebut mengambil:

```js
storyObj.scary.story
```

Jika `genre` bernilai `"funny"`, kode tersebut mengambil:

```js
storyObj.funny.story
```

Dengan cara ini, satu function dapat menangani seluruh genre.

### 6. Menampilkan Cerita ke Halaman

Cerita ditampilkan menggunakan `textContent`.

```js
resultParagraph.textContent = storyObj[genre].story;
```

Isi elemen `#result` akan berubah sesuai genre yang dipilih pengguna.

### 7. Mengubah Warna Border

Program juga mengambil nilai `borderColor` dari data genre.

```js
storyContainer.style.borderColor = storyObj[genre].borderColor;
```

Dengan demikian, warna border `.story-container` berubah sesuai cerita yang dipilih.

### 8. Menangani Klik Tombol

Setiap tombol diberikan event listener.

```js
scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));
```

Ketika tombol Scary Story diklik, function dipanggil dengan genre `"scary"`.

Ketika tombol Funny Story diklik, function dipanggil dengan genre `"funny"`.

Ketika tombol Adventure Story diklik, function dipanggil dengan genre `"adventure"`.

### 9. Mengatur Tampilan Tombol dengan Media Query

CSS menggunakan media query untuk mengubah susunan tombol pada layar yang lebih lebar.

```css
@media (min-width: 760px) {
  .btn-container {
    flex-direction: row;
  }
}
```

Pada ukuran layar di bawah kondisi tersebut, tombol tetap tersusun secara vertikal.

Pada layar dengan lebar minimal `760px`, tombol berubah menjadi susunan horizontal.

## Method yang Dipakai

- `querySelector()` digunakan untuk mengambil elemen berdasarkan selector CSS.
- `getElementById()` digunakan untuk mengambil elemen berdasarkan ID.
- `hasOwnProperty()` digunakan untuk memeriksa keberadaan property pada object.
- `addEventListener()` digunakan untuk menangani klik tombol.
- `textContent` digunakan untuk mengubah isi teks elemen.
- `style.borderColor` digunakan untuk mengubah warna border secara dinamis.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| Object | Menyimpan data cerita |
| Nested Object | Menyimpan cerita dan warna setiap genre |
| Function | Menangani proses penampilan cerita |
| `hasOwnProperty()` | Memeriksa keberadaan genre |
| Bracket Notation | Mengakses data berdasarkan genre |
| `textContent` | Menampilkan cerita pada halaman |
| `style.borderColor` | Mengubah warna border |
| `addEventListener()` | Menangani klik tombol |
| Media Query | Menyesuaikan layout berdasarkan ukuran layar |

## Catatan Belajar

- **Object** dapat digunakan untuk mengelompokkan data berdasarkan kategori.
- **Nested Object** memungkinkan beberapa property disimpan di dalam setiap kategori.
- **Bracket Notation** berguna ketika nama property berasal dari sebuah variable.
- **Function** dapat digunakan kembali untuk menangani beberapa pilihan dengan data berbeda.
- **`textContent`** dapat digunakan untuk memperbarui isi elemen secara langsung.
- **DOM Manipulation** memungkinkan tampilan halaman berubah berdasarkan interaksi pengguna.
- **Event Listener** menghubungkan aksi pengguna dengan function JavaScript.
- **Media Query** membantu menyesuaikan layout dengan ukuran layar.

## What I Practiced

```text
JavaScript Objects
Nested Objects
Functions
DOM Selection
DOM Manipulation
Event Listeners
hasOwnProperty()
Bracket Notation
textContent
Style Manipulation
CSS Flexbox
CSS Media Queries
```

---

**Platform:** freeCodeCamp  
**Workshop:** Build a Storytelling App  
**Languages:** HTML, CSS & JavaScript  
**Focus:** DOM Manipulation and Events

---

<p align="center">
  <strong>DOM Manipulation and Events Section — Build a Storytelling App Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
