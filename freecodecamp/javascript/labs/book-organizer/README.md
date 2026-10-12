# Build a Book Organizer

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Higher%20Order%20Functions%20and%20Callbacks-4B5566?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Higher Order Functions and Callbacks" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Higher%20Order%20Functions%20and%20Callbacks-4B5563" alt="Higher Order Functions and Callbacks" />
</p>

> **Milestone:** Lab setelah mempelajari Higher Order Functions and Callbacks.

## About

Build a Book Organizer adalah project JavaScript yang mengolah kumpulan data buku menggunakan array of objects.

Project ini membuat fungsi untuk mengurutkan buku berdasarkan tahun terbit dan memfilter buku berdasarkan tahun tertentu.

## Konsep Utama

- **Array of Objects** digunakan untuk menyimpan data setiap buku.
- **Object Properties** digunakan untuk menyimpan judul, author, dan tahun terbit.
- **Function** digunakan untuk memisahkan proses pengurutan data.
- **`filter()`** digunakan untuk mengambil buku berdasarkan tahun terbit.
- **`sort()`** digunakan untuk mengurutkan buku berdasarkan tahun terbit.
- **Callback Function** digunakan sebagai fungsi pembanding pada `sort()`.
- **Comparison Operator** digunakan untuk membandingkan tahun terbit buku.

## Struktur Project

```text
book-organizer/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Membuat Data Buku

Data buku disimpan dalam array `books`.

```js
const books = [
  {
    title: "Atomic Habits",
    authorName: "Charlie Kirk",
    releaseYear: 2000
  },
  {
    title: "Everyting is Alright",
    authorName: "James Bond",
    releaseYear: 2005
  },
  {
    title: "Nuclear War",
    authorName: "Bintang",
    releaseYear: 2026
  }
];
```

Setiap buku merupakan object dengan tiga property:

```text
title
authorName
releaseYear
```

Struktur tersebut membuat setiap buku memiliki format data yang sama.

### 2. Membuat Function `sortByYear()`

Function `sortByYear()` digunakan sebagai fungsi pembanding untuk mengurutkan buku.

```js
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}
```

Function menerima dua object buku sebagai parameter.

Property `releaseYear` dari kedua buku kemudian dibandingkan.

Nilai yang dikembalikan menentukan urutan kedua buku tersebut.

### 3. Menggunakan `filter()`

Buku yang memiliki tahun terbit maksimal 2020 dipilih menggunakan `filter()`.

```js
const filteredBooks = books.filter(
  (book) => book.releaseYear <= 2020
);
```

Callback pada `filter()` memeriksa nilai `releaseYear`.

Buku dengan kondisi:

```js
book.releaseYear <= 2020
```

akan dimasukkan ke dalam `filteredBooks`.

Buku yang diterbitkan setelah 2020 tidak masuk ke hasil filter.

### 4. Menggunakan `sort()`

Setelah proses filtering, hasilnya diurutkan berdasarkan tahun terbit.

```js
filteredBooks.sort(sortByYear);
```

Function `sortByYear` diberikan sebagai callback kepada `sort()`.

Dengan begitu, `sort()` menggunakan aturan perbandingan yang dibuat pada function tersebut.

### 5. Menggabungkan `filter()` dan `sort()`

Project menggunakan dua tahap pengolahan data:

```text
books
→ filter berdasarkan releaseYear
→ sort berdasarkan releaseYear
```

Hasil filtering disimpan dalam `filteredBooks`.

Array tersebut kemudian diurutkan menggunakan `sortByYear`.

Perlu diperhatikan bahwa `filter()` menghasilkan array baru, sehingga proses `sort()` dilakukan pada `filteredBooks`, bukan langsung pada array `books`.

## Method yang Dipakai

- **`filter()`** digunakan untuk memilih buku dengan `releaseYear` maksimal 2020.
- **`sort()`** digunakan untuk mengurutkan buku berdasarkan `releaseYear`.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| Array of Objects | Menyimpan kumpulan data buku |
| Object Properties | Menyimpan informasi setiap buku |
| Function | Membuat aturan pengurutan buku |
| `filter()` | Memilih buku berdasarkan tahun terbit |
| `sort()` | Mengurutkan buku berdasarkan tahun terbit |
| Callback Function | Menentukan aturan perbandingan pada `sort()` |
| Comparison Operator | Membandingkan nilai `releaseYear` |

## Catatan Belajar

- **Array of Objects** digunakan untuk menyimpan kumpulan data dengan struktur yang sama.
- **`filter()`** menghasilkan array baru yang hanya berisi item yang memenuhi kondisi.
- **`sort()`** menggunakan callback untuk menentukan urutan item.
- **Callback Function** dapat diberikan kepada method array untuk menentukan cara data diproses.
- **`releaseYear`** digunakan sebagai nilai pembanding dalam proses pengurutan.
- **`filter()` dan `sort()`** dapat digunakan secara berurutan untuk mengolah data secara bertahap.

## What I Practiced

```text
JavaScript Arrays
Array of Objects
Object Properties
Functions
Higher Order Functions
Callback Functions
Array filter()
Array sort()
Comparison Operators
Array Data Processing
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Book Organizer  
**Language:** JavaScript  
**Focus:** Higher Order Functions and Callbacks

---

<p align="center">
  <strong>Higher Order Functions and Callbacks Section — Build a Book Organizer Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
