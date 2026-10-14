# Implement a Range-Based LCM Calculator

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Higher%20Order%20Functions%20and%20Callbacks-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Higher Order Functions and Callbacks" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Higher%20Order%20Functions%20and%20Callbacks-4B5563" alt="Higher Order Functions and Callbacks" />
</p>

> **Milestone:** Lab setelah mempelajari Higher Order Functions and Callbacks.

## About

Project ini membuat fungsi `smallestCommons()` untuk menghitung Least Common Multiple (LCM) dari seluruh bilangan dalam sebuah rentang yang ditentukan oleh dua nilai pada array.

Implementasinya menggunakan fungsi `fPB()` untuk mencari Greatest Common Divisor (GCD) secara rekursif, kemudian fungsi `kPK()` untuk menghitung LCM dari dua bilangan. Rentang bilangan dibentuk menjadi array lalu digabungkan perhitungannya menggunakan `map()` dan `reduce()`.

## Konsep Utama

- `Math.min()` dan `Math.max()` digunakan untuk menentukan batas bawah dan batas atas rentang.
- Rest parameter digunakan untuk menerima nilai parameter pada fungsi callback secara langsung.
- Rekursi digunakan pada fungsi `fPB()` untuk mencari FPB.
- Operator modulo `%` digunakan sebagai bagian dari algoritma Euclidean.
- Fungsi `kPK()` menggunakan FPB untuk menghitung KPK dua bilangan.
- `Array()` dan `fill()` digunakan untuk membentuk array dengan panjang sesuai rentang.
- `map()` digunakan untuk menghasilkan setiap bilangan dalam rentang.
- `reduce()` digunakan untuk menggabungkan perhitungan KPK seluruh bilangan dalam rentang.

## Struktur Project

```text
range-based-LCM-calculator/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Menentukan Batas Rentang

```js
const smallestNum = Math.min(...arr);
const highestNum = Math.max(...arr);
const length = highestNum - smallestNum + 1;
```

`Math.min(...arr)` mencari nilai terkecil dari array, sedangkan `Math.max(...arr)` mencari nilai terbesar.

Nilai `length` menentukan jumlah bilangan yang perlu dibuat agar rentang mencakup kedua batas secara inklusif.

### 2. Fungsi Rekursif `fPB()`

```js
const fPB = (a, b) => b === 0 ? a : fPB(b, a % b);
```

`fPB()` mencari Faktor Persekutuan Terbesar dengan algoritma Euclidean.

Jika `b` bernilai `0`, fungsi mengembalikan `a` sebagai hasil akhir. Jika belum, fungsi memanggil dirinya sendiri dengan pasangan `b` dan sisa pembagian `a % b`.

### 3. Fungsi `kPK()`

```js
const kPK = (a, b) => (a * b) / fPB(a, b);
```

`kPK()` menghitung Kelipatan Persekutuan Terkecil dari dua bilangan dengan memanfaatkan hasil `fPB()`.

### 4. Membentuk Bilangan dalam Rentang

```js
return Array(length)
  .fill(0)
  .map((element, index) => smallestNum + index)
```

`Array(length)` membuat array dengan panjang sesuai jumlah bilangan dalam rentang.

`fill(0)` mengisi array agar dapat diproses oleh `map()`. Callback `map()` kemudian menghasilkan bilangan mulai dari `smallestNum` dan bertambah satu pada setiap index.

### 5. Menggabungkan Perhitungan dengan `reduce()`

```js
.reduce((totalKPK, currentNum) => kPK(totalKPK, currentNum));
```

`reduce()` mengambil hasil KPK sementara dan menggabungkannya dengan bilangan berikutnya dalam rentang.

Dengan cara ini, perhitungan KPK dilakukan secara bertahap sampai seluruh bilangan dalam rentang diproses.

## Method yang Dipakai

- `Math.min()` digunakan untuk mendapatkan nilai terkecil dari array.
- `Math.max()` digunakan untuk mendapatkan nilai terbesar dari array.
- `fill()` digunakan untuk mengisi elemen array sebelum diproses.
- `map()` digunakan untuk membentuk bilangan berdasarkan index.
- `reduce()` digunakan untuk menggabungkan hasil KPK secara bertahap.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `Math.min()` | Menentukan batas bawah rentang |
| `Math.max()` | Menentukan batas atas rentang |
| `fPB()` | Menghitung FPB secara rekursif |
| `kPK()` | Menghitung KPK dua bilangan |
| `map()` | Membentuk bilangan dalam rentang |
| `reduce()` | Menggabungkan perhitungan KPK |
| `%` | Menghasilkan sisa pembagian untuk algoritma Euclidean |

## Catatan Belajar

- **Rentang** dibentuk dari nilai terkecil sampai nilai terbesar secara inklusif.
- **Rekursi** membuat `fPB()` dapat mengulang algoritma Euclidean sampai menemukan FPB.
- **FPB** digunakan sebagai bagian dari perhitungan KPK dua bilangan.
- **`map()`** mengubah index array menjadi bilangan yang diperlukan dalam rentang.
- **`reduce()`** menggabungkan perhitungan KPK dari seluruh bilangan dalam rentang.

## What I Practiced

```text
JavaScript Higher Order Functions
Array Methods
Math.min()
Math.max()
Array.fill()
Array.map()
Array.reduce()
Arrow Functions
Rest Parameters
Recursion
Euclidean Algorithm
Modulo Operator
Least Common Multiple
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement a Range-Based LCM Calculator  
**Language:** JavaScript  
**Focus:** Higher Order Functions and Callbacks

---

<p align="center">
  <strong>Higher Order Functions and Callbacks Section — Implement a Range-Based LCM Calculator Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
