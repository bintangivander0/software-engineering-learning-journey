# Build a Library Manager

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Higher%20Order%20Functions%20%26%20Callbacks-4B5566?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Higher Order Functions & Callbacks" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Workshop-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Workshop" />
  <img src="https://img.shields.io/badge/Topic-Higher%20Order%20Functions%20%26%20Callbacks-4B5563" alt="Higher Order Functions & Callbacks" />
</p>

> **Milestone:** Workshop setelah mempelajari Higher Order Functions and Callbacks.

## About

Build a Library Manager adalah workshop JavaScript yang mengolah data koleksi buku menggunakan array of objects.

Project ini membuat beberapa function untuk menampilkan informasi buku, mengambil ringkasan, mencari buku berdasarkan author, dan menghitung jumlah halaman seluruh buku.

## Konsep Utama

- **Array of Objects** digunakan untuk menyimpan data setiap buku.
- **Object Properties** digunakan untuk mengakses judul, author, ringkasan, dan jumlah halaman.
- **Function** digunakan untuk memisahkan setiap proses pengolahan data.
- **Higher Order Function** digunakan melalui method array yang menerima callback.
- **`map()`** digunakan untuk mengambil dan mengubah data dari setiap buku.
- **`filter()`** digunakan untuk mencari buku berdasarkan author.
- **`reduce()`** digunakan untuk menjumlahkan seluruh halaman buku.
- **`join()`** digunakan untuk menggabungkan hasil array menjadi satu string.
- **Template Literal** digunakan untuk membentuk informasi buku.

## Struktur Project

```text
library-manager/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Menyimpan Data Library

Data buku disimpan dalam array bernama `library`.

```js
const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  // ...
];
```

Setiap item pada array merupakan object yang memiliki property `title`, `author`, `about`, dan `pages`.

Struktur ini memungkinkan beberapa informasi buku disimpan dalam satu object.

### 2. Mendapatkan Informasi Buku

Function `getBookInformation()` menggunakan `map()` untuk mengambil judul dan author setiap buku.

```js
function getBookInformation(catalog) {
  return catalog
    .map(book => `${book.title} by ${book.author}`)
    .join("\n");
}
```

Callback pada `map()` menerima setiap object `book`.

Template literal kemudian digunakan untuk menggabungkan `title` dan `author`.

Hasil dari `map()` berupa array string yang kemudian digabungkan menggunakan `join("\n")`.

### 3. Mendapatkan Ringkasan Buku

Function `getBookSummaries()` mengambil property `about` dari setiap buku.

```js
function getBookSummaries(catalog) {
  return catalog
    .map((book) => book.about)
    .join("\n");
}
```

`map()` membuat array baru yang hanya berisi ringkasan buku.

Method `join()` kemudian menggabungkan setiap ringkasan dengan karakter newline.

### 4. Mencari Buku Berdasarkan Author

Function `getBooksByAuthor()` menggunakan `filter()`.

```js
function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}
```

Callback pada `filter()` memeriksa property `author`.

Buku hanya dimasukkan ke hasil jika author-nya sama dengan nilai `author` yang diberikan.

Contohnya:

```js
getBooksByAuthor(library, "Arvid Kahl");
```

akan menghasilkan buku yang ditulis oleh Arvid Kahl.

### 5. Menghitung Total Halaman

Function `getTotalPages()` menggunakan kombinasi `map()` dan `reduce()`.

```js
function getTotalPages(catalog) {
  return catalog
    .map((catalog) => catalog.pages)
    .reduce((sum, pages) => sum + pages, 0);
}
```

`map()` terlebih dahulu mengambil jumlah halaman dari setiap buku.

Hasilnya menjadi array berisi angka jumlah halaman.

`reduce()` kemudian menjumlahkan seluruh angka tersebut menjadi satu nilai total.

Nilai awal accumulator ditentukan dengan:

```js
0
```

### 6. Callback pada Method Array

Beberapa method array pada project menerima function sebagai argument.

Contohnya:

```js
catalog.map(book => book.about);
```

dan:

```js
catalog.filter((book) => book.author === author);
```

Function yang diberikan kepada `map()` dan `filter()` tersebut merupakan callback.

Hal yang sama juga terjadi pada:

```js
.reduce((sum, pages) => sum + pages, 0);
```

Callback menentukan bagaimana setiap item diproses.

## Method yang Dipakai

- **`map()`** digunakan untuk membuat array baru berdasarkan setiap item pada array.
- **`filter()`** digunakan untuk mengambil item yang memenuhi kondisi tertentu.
- **`reduce()`** digunakan untuk menggabungkan seluruh nilai menjadi satu hasil.
- **`join()`** digunakan untuk menggabungkan elemen array menjadi sebuah string.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| Array of Objects | Menyimpan kumpulan data buku |
| Object Properties | Mengakses informasi setiap buku |
| Higher Order Function | Memproses data menggunakan function sebagai callback |
| `map()` | Membentuk array baru dari data buku |
| `filter()` | Menyaring buku berdasarkan author |
| `reduce()` | Menghitung total halaman |
| `join()` | Menggabungkan elemen array menjadi string |
| Template Literal | Membentuk teks informasi buku |
| Callback | Menentukan proses pada setiap item array |

## Catatan Belajar

- **Array of Objects** cocok untuk menyimpan kumpulan data dengan struktur yang sama.
- **`map()`** menghasilkan array baru dari hasil pemrosesan setiap item.
- **`filter()`** mempertahankan item yang memenuhi kondisi callback.
- **`reduce()`** dapat digunakan untuk mengubah banyak nilai menjadi satu hasil.
- **Callback** memungkinkan function lain menentukan bagaimana setiap item diproses.
- **Method array** dapat dikombinasikan untuk melakukan pengolahan data secara bertahap.

## What I Practiced

```text
JavaScript Arrays
Array of Objects
Object Properties
Functions
Higher Order Functions
Callbacks
Array map()
Array filter()
Array reduce()
Array join()
Template Literals
Array Method Chaining
```

---

**Platform:** freeCodeCamp  
**Workshop:** Build a Library Manager  
**Language:** JavaScript  
**Focus:** Higher Order Functions and Callbacks

---

<p align="center">
  <strong>Higher Order Functions and Callbacks Section — Build a Library Manager Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
