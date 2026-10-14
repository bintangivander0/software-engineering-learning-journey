# Implement an Element Skipper

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-JavaScript%20Fundamentals%20Review-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript JavaScript Fundamentals Review" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-JavaScript%20Fundamentals%20Review-4B5563" alt="JavaScript Fundamentals Review" />
</p>

> **Milestone:** Lab setelah mempelajari JavaScript Fundamentals Review.

## About

Project ini membuat fungsi `dropElements()` untuk membuang elemen dari awal array selama elemen pertama belum memenuhi kondisi yang diberikan melalui function `func`.

Fungsi menggunakan `while` loop untuk melakukan pemeriksaan berulang. Setiap elemen yang tidak memenuhi kondisi dihapus dari awal array menggunakan `shift()`. Proses berhenti ketika array kosong atau elemen pertama sudah memenuhi kondisi.

## Konsep Utama

- `while` loop digunakan untuk mengulang proses selama kondisi masih terpenuhi.
- Callback `func` digunakan untuk menentukan apakah elemen pertama sudah memenuhi kondisi.
- `shift()` digunakan untuk menghapus elemen pertama dari array.
- `arr[0]` digunakan untuk mengambil elemen pertama yang sedang diperiksa.
- `arr.length` digunakan untuk memastikan proses tidak dilakukan pada array kosong.
- `return` digunakan untuk mengembalikan array setelah elemen awal yang tidak memenuhi kondisi dibuang.

## Struktur Project

```text
element-skipper/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `dropElements()`

```javascript
function dropElements(arr, func) {
```

Function menerima dua parameter:

- `arr` sebagai array yang akan diproses.
- `func` sebagai callback yang menentukan apakah elemen pertama sudah memenuhi kondisi.

### 2. Memeriksa Kondisi Loop

```javascript
while (arr.length > 0 && !func(arr[0])) {
```

Loop berjalan selama dua kondisi terpenuhi.

`arr.length > 0` memastikan array masih memiliki elemen.

`func(arr[0])` menjalankan callback pada elemen pertama. Operator `!` membuat loop tetap berjalan ketika hasil callback bernilai `false`.

### 3. Menghapus Elemen Pertama

```javascript
arr.shift();
```

`shift()` menghapus elemen pertama dari array.

Setelah elemen pertama dihapus, elemen berikutnya otomatis menjadi elemen pertama dan akan diperiksa pada iterasi berikutnya.

### 4. Mengembalikan Array

```javascript
return arr;
```

Setelah kondisi loop tidak lagi terpenuhi, function mengembalikan array yang tersisa.

Source code ini memproses array secara langsung sehingga pemanggilan `shift()` **mengubah array `arr` yang diberikan ke function**.

## Alur Kerja

```text
Array masuk
    ↓
Periksa elemen pertama dengan func
    ↓
Apakah memenuhi kondisi?
    ├── Tidak → shift() → periksa elemen berikutnya
    └── Ya → hentikan loop
    ↓
Kembalikan array yang tersisa
```

## Method yang Dipakai

- `shift()` digunakan untuk menghapus elemen pertama dari array.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `while` | Mengulang pemeriksaan selama kondisi terpenuhi |
| `func` | Callback untuk menentukan apakah elemen memenuhi kondisi |
| `arr[0]` | Mengambil elemen pertama array |
| `shift()` | Menghapus elemen pertama |
| `arr.length` | Memeriksa apakah array masih memiliki elemen |
| `!` | Membalik hasil boolean callback |

## Catatan Belajar

- **Callback** dapat diberikan ke function untuk menentukan kondisi pemrosesan data.
- **`while` loop** cocok digunakan ketika jumlah pengulangan bergantung pada kondisi.
- **`arr[0]`** mengakses elemen pertama array tanpa menghapusnya.
- **`shift()`** menghapus elemen pertama dan menggeser elemen berikutnya ke posisi pertama.
- **Kondisi gabungan** dapat mencegah operasi dilakukan ketika array sudah kosong.
- **Mutasi array** terjadi karena `shift()` mengubah array yang sedang diproses.

## What I Practiced

```text
JavaScript Fundamentals
Functions
Callback Functions
while Loops
Arrays
Array Indexing
shift()
Conditional Logic
Logical Operators
Array Mutation
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement an Element Skipper  
**Language:** JavaScript  
**Focus:** JavaScript Fundamentals Review

---

<p align="center">
  <strong>JavaScript Fundamentals Review Section — Implement an Element Skipper Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
