# Build an Odd Fibonacci Sum Calculator

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-JavaScript%20Fundamentals%20Review-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript JavaScript Fundamentals Review" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-JavaScript%20Fundamentals%20Review-4B5563" alt="JavaScript Fundamentals Review" />
</p>

> **Milestone:** Lab setelah mempelajari JavaScript Fundamentals Review.

## About

Project ini membuat fungsi `sumFibs()` untuk menjumlahkan bilangan Fibonacci ganjil yang nilainya tidak melebihi batas yang diberikan melalui `numLimit`.

Fungsi menggunakan tiga variable untuk menjaga dua nilai Fibonacci sebelumnya dan nilai saat ini. Perulangan `while` berjalan selama nilai Fibonacci saat ini masih berada dalam batas, kemudian operator modulo digunakan untuk memeriksa apakah nilai tersebut ganjil.

## Konsep Utama

- `while` loop digunakan untuk menghasilkan dan memproses deret Fibonacci sampai mencapai batas.
- Operator `%` digunakan untuk menentukan apakah nilai Fibonacci merupakan bilangan ganjil.
- Operator `+=` digunakan untuk menambahkan bilangan Fibonacci ganjil ke total.
- Penjumlahan dua nilai Fibonacci digunakan untuk menghasilkan nilai berikutnya.
- Assignment digunakan untuk menggeser nilai `prev` dan `curr` pada setiap iterasi.

## Struktur Project

```text
odd-fibonacci-sum-calculator/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `sumFibs()`

```javascript
function sumFibs(numLimit) {
```

Function menerima `numLimit` sebagai batas maksimum nilai Fibonacci yang akan diproses.

### 2. Menyiapkan Nilai Awal

```javascript
let prev = 0;
let curr = 1;
let sum = 0;
```

`prev` menyimpan nilai Fibonacci sebelumnya, `curr` menyimpan nilai Fibonacci saat ini, sedangkan `sum` digunakan untuk menyimpan total bilangan Fibonacci ganjil.

### 3. Membatasi Perulangan

```javascript
while (curr <= numLimit) {
```

Perulangan terus berjalan selama nilai Fibonacci saat ini tidak melebihi `numLimit`.

### 4. Memeriksa Bilangan Ganjil

```javascript
if (curr % 2 !== 0) {
  sum += curr;
}
```

Operator `%` digunakan untuk mendapatkan sisa pembagian `curr` dengan `2`.

Jika hasilnya tidak sama dengan `0`, nilai `curr` merupakan bilangan ganjil dan ditambahkan ke `sum`.

### 5. Menghasilkan Nilai Fibonacci Berikutnya

```javascript
let next = prev + curr;
prev = curr;
curr = next;
```

Nilai Fibonacci berikutnya dihitung dari penjumlahan `prev` dan `curr`.

Setelah itu, `prev` dipindahkan menjadi nilai `curr` sebelumnya dan `curr` diperbarui menjadi nilai Fibonacci berikutnya.

### 6. Mengembalikan Total

```javascript
return sum;
```

Setelah perulangan selesai, function mengembalikan jumlah seluruh bilangan Fibonacci ganjil yang masih berada dalam batas `numLimit`.

### 7. Contoh Pemanggilan

```javascript
console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
```

Beberapa nilai batas digunakan untuk menguji function pada rentang input yang berbeda.

## Method yang Dipakai

- `console.log()` digunakan untuk menampilkan hasil pemanggilan `sumFibs()` ke console.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `prev` | Menyimpan nilai Fibonacci sebelumnya |
| `curr` | Menyimpan nilai Fibonacci saat ini |
| `next` | Menyimpan nilai Fibonacci berikutnya |
| `sum` | Menyimpan total Fibonacci ganjil |
| `while` | Mengulang proses selama nilai masih berada dalam batas |
| `% 2` | Memeriksa apakah nilai ganjil |
| `+=` | Menambahkan nilai ganjil ke total |

## Catatan Belajar

- **Fibonacci** dibentuk dengan menjumlahkan dua nilai sebelumnya.
- **`while` loop** dapat digunakan ketika jumlah iterasi bergantung pada suatu batas.
- **Modulo** dapat digunakan untuk membedakan bilangan ganjil dan genap.
- **State variables** seperti `prev` dan `curr` dapat diperbarui setiap iterasi untuk menghasilkan deret.
- **Accumulator** seperti `sum` dapat menyimpan hasil penjumlahan secara bertahap.
- **Batas input** membuat perulangan berhenti ketika nilai Fibonacci berikutnya sudah melewati `numLimit`.

## What I Practiced

```text
JavaScript Fundamentals
Functions
while Loops
Fibonacci Sequence
Modulo Operator
Conditional Statements
Arithmetic Operators
Variable Updates
Accumulator Pattern
Console Output
```

---

**Platform:** freeCodeCamp  
**Lab:** Build an Odd Fibonacci Sum Calculator  
**Language:** JavaScript  
**Focus:** JavaScript Fundamentals Review

---

<p align="center">
  <strong>JavaScript Fundamentals Review Section — Build an Odd Fibonacci Sum Calculator Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
