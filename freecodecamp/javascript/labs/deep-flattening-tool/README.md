# Create a Deep Flattening Tool

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Higher%20Order%20Functions%20and%20Callbacks-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Higher Order Functions and Callbacks" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Higher%20Order%20Functions%20and%20Callbacks-4B5563" alt="Higher Order Functions and Callbacks" />
</p>

> **Milestone:** Lab setelah mempelajari Higher Order Functions and Callbacks.

## About

Project ini membuat fungsi `steamrollArray()` untuk meratakan array bertingkat dengan beberapa proses `reduce()` dan `concat()`.

Source code melakukan proses flattening secara bertahap melalui empat variabel lapisan, yaitu `lapis1`, `lapis2`, `lapis3`, dan `lapis4`.

## Konsep Utama

- `reduce()` digunakan untuk memproses setiap elemen array dan membangun hasil array baru.
- `concat()` digunakan untuk menggabungkan accumulator dengan setiap item yang sedang diproses.
- `Array.prototype.reduce()` menerima callback untuk melakukan proses flattening pada setiap lapisan.
- Beberapa proses `reduce()` digunakan secara berurutan untuk menangani array bertingkat.

## Struktur Project

```text
deep-flattening-tool/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Fungsi `steamrollArray()`

```js
function steamrollArray(arr) {
```

Fungsi menerima `arr` sebagai array yang akan diproses dan mengembalikan array hasil flattening.

### 2. Flattening Lapisan Pertama

```js
const lapis1 = arr.reduce((acc, item) => acc.concat(item), []);
```

`reduce()` memproses setiap item pada array, sedangkan `concat()` menggabungkan item tersebut ke accumulator yang dimulai dari array kosong.

### 3. Flattening Secara Bertahap

```js
const lapis2 = lapis1.reduce((acc, item) => acc.concat(item), []);
const lapis3 = lapis2.reduce((acc, item) => acc.concat(item), []);
const lapis4 = lapis3.reduce((acc, item) => acc.concat(item), []);
```

Proses yang sama diulang pada hasil setiap lapisan sebelumnya.

Source code secara eksplisit menggunakan empat tahap flattening melalui `lapis1` sampai `lapis4`.

### 4. Mengembalikan Hasil

```js
return lapis4;
```

Setelah seluruh tahap selesai, fungsi mengembalikan hasil dari proses flattening terakhir.

### 5. Contoh Pemanggilan

```js
console.log(steamrollArray([[["a"]], [["b"]]]))
```

Pemanggilan tersebut memberikan contoh array dengan beberapa tingkat nested array sebagai input fungsi.

## Method yang Dipakai

- `reduce()` digunakan untuk memproses array pada setiap tahap flattening.
- `concat()` digunakan untuk menggabungkan item ke accumulator.
- `console.log()` digunakan untuk menampilkan hasil pemanggilan fungsi.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `reduce()` | Memproses elemen array melalui callback |
| `concat()` | Menggabungkan item dengan accumulator |
| Accumulator | Menyimpan hasil proses pada setiap tahap |
| Flattening bertahap | Memproses nested array melalui beberapa tahap `reduce()` |

## Catatan Belajar

- **`reduce()`** dapat digunakan untuk membangun hasil array baru melalui accumulator.
- **`concat()`** menggabungkan nilai ke array hasil tanpa mengubah array asal melalui operasi concat tersebut.
- **Accumulator** menjadi tempat penyimpanan hasil selama proses `reduce()` berlangsung.
- **Flattening bertahap** dapat dilakukan dengan menerapkan operasi yang sama pada hasil dari tahap sebelumnya.
- **Beberapa `reduce()`** digunakan pada source code ini untuk memproses nested array melalui empat lapisan.

## What I Practiced

```text
JavaScript Higher Order Functions
Array reduce()
Array concat()
Arrow Functions
Array Accumulator
Nested Arrays
Array Flattening
```

---

**Platform:** freeCodeCamp  
**Lab:** Create a Deep Flattening Tool  
**Language:** JavaScript  
**Focus:** Higher Order Functions and Callbacks

---

<p align="center">
  <strong>Higher Order Functions and Callbacks Section — Create a Deep Flattening Tool Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
