# Build a Prime Number Sum Calculator

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Dynamic%20Programming-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Dynamic Programming" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Dynamic%20Programming-4B5563" alt="Dynamic Programming" />
</p>

> **Milestone:** Lab setelah mempelajari Dynamic Programming.

## About

Project ini membuat calculator untuk menjumlahkan bilangan prima menggunakan function `sumPrimes()`.

Function memeriksa kandidat bilangan satu per satu. Setiap kandidat diuji dengan inner `for` loop untuk menentukan apakah bilangan tersebut memiliki pembagi selain `1` dan dirinya sendiri.

Bilangan yang lolos pemeriksaan dimasukkan ke dalam `primesArr`, kemudian seluruh nilainya dijumlahkan menggunakan `reduce()`.

## Konsep Utama

- Function
- Function parameter
- Array
- `for` loop
- Nested loop
- Boolean
- Conditional statement
- Modulo operator
- `break`
- `push()`
- `reduce()`
- Callback function
- Accumulator
- Early return
- Prime number checking
- `return`

## Struktur Project

```text
prime-number-sum-calculator/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `sumPrimes()`

Function menerima satu parameter bernama `n`.

```javascript
function sumPrimes(n) {
```

`n` digunakan pada pemeriksaan awal function.

### 2. Early Return

```javascript
if (n < 2) return n;
```

Jika `n` lebih kecil daripada `2`, function langsung mengembalikan nilai `n`.

Karena `return` dijalankan pada kondisi tersebut, bagian kode berikutnya tidak diproses.

### 3. Membuat Array `primesArr`

```javascript
let primesArr = [];
```

`primesArr` digunakan untuk menyimpan bilangan yang dinyatakan prima selama proses pemeriksaan.

Pada awal function, array ini masih kosong.

### 4. Outer `for` Loop

```javascript
for (let i = 2; i <= limit; i++) {
```

Outer loop dimulai dari nilai `2`.

Variable `i` digunakan sebagai bilangan yang sedang diuji.

Pada source code yang diberikan, batas loop menggunakan variable:

```javascript
limit
```

Namun, `limit` tidak didefinisikan pada source code yang tersedia.

Karena itu, untuk input yang melewati early return `n < 2`, kode ini akan mencoba membaca identifier `limit` yang belum tersedia. Bagian ini dipertahankan sesuai source code dan tidak diubah menjadi `n` secara diam-diam.

### 5. Menganggap Kandidat sebagai Prima

```javascript
let isPrime = true;
```

Pada awal pemeriksaan setiap nilai `i`, variable `isPrime` diberi nilai `true`.

Nilai tersebut akan diubah menjadi `false` jika ditemukan pembagi yang memenuhi kondisi di inner loop.

### 6. Inner `for` Loop

```javascript
for (let j = 2; j * j <= i; j++) {
```

Inner loop menggunakan variable `j` sebagai kandidat pembagi.

Perulangan dimulai dari `2` dan terus berjalan selama:

```javascript
j * j <= i
```

Setiap nilai `j` digunakan untuk memeriksa apakah `i` dapat dibagi tanpa sisa.

### 7. Memeriksa Sisa Pembagian

```javascript
if (i % j === 0) {
```

Operator modulo `%` menghasilkan sisa pembagian.

Jika:

```javascript
i % j === 0
```

maka `i` dapat dibagi habis oleh `j`.

Pada kondisi tersebut, kandidat tidak dianggap prima oleh kode.

### 8. Mengubah `isPrime`

```javascript
isPrime = false;
```

Ketika ditemukan pembagi yang menghasilkan sisa `0`, nilai `isPrime` diubah menjadi `false`.

Status ini menunjukkan bahwa nilai `i` tidak akan dimasukkan ke `primesArr`.

### 9. Menghentikan Inner Loop

```javascript
break;
```

Setelah satu pembagi ditemukan, tidak diperlukan pemeriksaan `j` berikutnya.

`break` langsung menghentikan inner loop untuk kandidat `i` tersebut.

### 10. Menyimpan Bilangan Prima

```javascript
if (isPrime) {
  primesArr.push(i);
}
```

Setelah inner loop selesai, program memeriksa nilai `isPrime`.

Jika masih bernilai `true`, nilai `i` ditambahkan ke `primesArr` menggunakan `push()`.

### 11. Menjumlahkan Seluruh Bilangan Prima

```javascript
return primesArr.reduce((akumulator, value) => akumulator + value, 0);;
```

Method `reduce()` digunakan untuk menggabungkan seluruh nilai di dalam `primesArr` menjadi satu nilai total.

Callback menerima dua parameter:

```javascript
akumulator
```

dan:

```javascript
value
```

`akumulator` menyimpan hasil penjumlahan sementara.

`value` adalah elemen array yang sedang diproses.

Nilai awal accumulator adalah:

```javascript
0
```

Setiap iterasi menjalankan:

```javascript
akumulator + value
```

dan hasil akhirnya dikembalikan oleh `sumPrimes()`.

Dua semicolon pada akhir baris:

```javascript
;;
```

dipertahankan sesuai source code yang diberikan.

## Method yang Dipakai

- `push()` digunakan untuk menambahkan bilangan yang dinyatakan prima ke dalam `primesArr`.
- `reduce()` digunakan untuk menjumlahkan seluruh nilai di dalam `primesArr`.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `sumPrimes()` | Memproses kandidat bilangan dan mengembalikan hasil penjumlahan |
| `n` | Parameter input function |
| `n < 2` | Menjalankan early return |
| `primesArr` | Menyimpan bilangan yang dinyatakan prima |
| `i` | Menyimpan kandidat bilangan yang sedang diperiksa |
| `limit` | Digunakan sebagai batas outer loop pada source code |
| `isPrime` | Menyimpan status apakah kandidat masih dianggap prima |
| `j` | Menyimpan kandidat pembagi |
| `i % j === 0` | Memeriksa apakah `i` habis dibagi `j` |
| `break` | Menghentikan inner loop setelah pembagi ditemukan |
| `push()` | Menambahkan bilangan prima ke array |
| `reduce()` | Menjumlahkan seluruh nilai dalam `primesArr` |
| `akumulator` | Menyimpan hasil penjumlahan sementara |
| `return` | Mengembalikan hasil akhir function |

## Catatan Belajar

- **`sumPrimes()`** menerima satu parameter bernama `n`.
- **Early return** terjadi ketika `n < 2`.
- **`primesArr`** digunakan untuk menyimpan bilangan yang lolos pemeriksaan prima.
- **Outer loop** menggunakan `i` sebagai kandidat bilangan.
- **`isPrime`** dimulai dengan nilai `true` untuk setiap kandidat.
- **Inner loop** menggunakan `j` untuk mencari pembagi.
- **Modulo `%`** digunakan untuk memeriksa apakah pembagian menghasilkan sisa `0`.
- **`break`** menghentikan inner loop segera setelah pembagi ditemukan.
- **`push()`** hanya dijalankan ketika `isPrime` tetap bernilai `true`.
- **`reduce()`** menjumlahkan seluruh bilangan yang tersimpan di `primesArr`.
- **`0`** menjadi initial value untuk accumulator pada `reduce()`.
- **`limit`** digunakan pada outer loop tetapi tidak didefinisikan pada source code yang diberikan, sehingga bagian tersebut perlu diverifikasi sebelum source code diubah.

## What I Practiced

```text
JavaScript Functions
Function Parameters
Arrays
For Loops
Nested Loops
Boolean Values
Conditional Statements
Modulo Operator
Break Statements
Array push()
Array reduce()
Callback Functions
Accumulators
Early Returns
Prime Number Checking
Return Values
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Prime Number Sum Calculator  
**Language:** JavaScript  
**Focus:** Dynamic Programming

---

<p align="center">
  <strong>Dynamic Programming Section — Build a Prime Number Sum Calculator Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
