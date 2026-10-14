# Design a Sum All Numbers Algorithm

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-JavaScript%20Fundamentals%20Review-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript JavaScript Fundamentals Review" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-JavaScript%20Fundamentals%20Review-4B5563" alt="JavaScript Fundamentals Review" />
</p>

> **Milestone:** Lab setelah mempelajari JavaScript Fundamentals Review.

## About

Project ini membuat fungsi `sumAll()` untuk menjumlahkan seluruh bilangan dari nilai terkecil sampai nilai terbesar yang diberikan dalam sebuah array.

Fungsi menentukan batas bawah dan batas atas menggunakan `Math.min()` dan `Math.max()`, kemudian menggunakan `for` loop untuk menjumlahkan setiap bilangan ke dalam variabel `result`.

## Konsep Utama

- Rest parameter digunakan untuk mengambil elemen array sebagai argument.
- `Math.min()` digunakan untuk mendapatkan bilangan terkecil.
- `Math.max()` digunakan untuk mendapatkan bilangan terbesar.
- `for` loop digunakan untuk melewati seluruh bilangan dalam rentang.
- Accumulator `result` digunakan untuk menyimpan total penjumlahan.

## Struktur Project

```text
sum-all-numbers-algorithm/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `sumAll()`

```javascript
function sumAll(arr) {
```

Function menerima array `arr` yang berisi dua bilangan sebagai batas rentang penjumlahan.

### 2. Menentukan Bilangan Terkecil

```javascript
const minNumber = Math.min(...arr);
```

Operator spread `...arr` mengubah elemen array menjadi argument untuk `Math.min()`.

Hasilnya disimpan dalam `minNumber` sebagai batas awal rentang.

### 3. Menentukan Bilangan Terbesar

```javascript
const maxNumber = Math.max(...arr);
```

`Math.max()` digunakan untuk mendapatkan nilai terbesar dari elemen array.

Nilai tersebut disimpan dalam `maxNumber` sebagai batas akhir rentang.

### 4. Menyiapkan Total

```javascript
let result = 0;
```

`result` dimulai dari `0` dan digunakan untuk menampung hasil penjumlahan selama loop berjalan.

### 5. Menjumlahkan Seluruh Rentang

```javascript
for (let i = minNumber; i <= maxNumber; i++) {
  result += i;
}
```

Loop dimulai dari `minNumber` dan terus berjalan selama `i` masih lebih kecil atau sama dengan `maxNumber`.

Setiap nilai `i` ditambahkan ke `result`.

### 6. Mengembalikan Hasil

```javascript
return result;
```

Setelah seluruh bilangan dalam rentang selesai dijumlahkan, function mengembalikan nilai `result`.

## Method yang Dipakai

- `Math.min()` digunakan untuk mendapatkan nilai terkecil dari kumpulan angka.
- `Math.max()` digunakan untuk mendapatkan nilai terbesar dari kumpulan angka.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| Rest parameter | Memungkinkan elemen array diberikan sebagai argument |
| `Math.min()` | Mendapatkan nilai terkecil |
| `Math.max()` | Mendapatkan nilai terbesar |
| `for` loop | Mengiterasi seluruh nilai dalam rentang |
| `+=` | Menambahkan nilai saat ini ke total |
| `result` | Menyimpan hasil penjumlahan |

## Catatan Belajar

- **Rest parameter** memungkinkan elemen array diteruskan sebagai argument menggunakan spread syntax.
- **`Math.min()`** dapat digunakan untuk menentukan batas bawah suatu rentang angka.
- **`Math.max()`** dapat digunakan untuk menentukan batas atas suatu rentang angka.
- **`for` loop** cocok untuk memproses setiap bilangan dari batas awal sampai batas akhir.
- **Accumulator** dapat digunakan untuk menyimpan hasil perhitungan secara bertahap.

## What I Practiced

```text
JavaScript Functions
Spread Syntax
Rest Parameters
Math.min()
Math.max()
for Loops
Arithmetic Operators
Accumulator Pattern
```

---

**Platform:** freeCodeCamp  
**Lab:** Design a Sum All Numbers Algorithm  
**Language:** JavaScript  
**Focus:** JavaScript Fundamentals Review

---

<p align="center">
  <strong>JavaScript Fundamentals Review Section — Design a Sum All Numbers Algorithm Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
