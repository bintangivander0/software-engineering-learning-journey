# Build an Optional Arguments Sum Function

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Functional%20Programming-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Functional Programming" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Functional%20Programming-4B5563" alt="Functional Programming" />
</p>

> **Milestone:** Lab setelah mempelajari Functional Programming.

## About

Project ini membuat function `addTogether()` yang menjumlahkan dua angka dengan dua bentuk pemanggilan.

Function dapat menerima dua argument sekaligus. Jika hanya satu argument yang diberikan, function mengembalikan arrow function yang menerima angka berikutnya dan kemudian melakukan penjumlahan.

Kode juga memvalidasi setiap nilai menggunakan `typeof`. Jika nilai yang diterima bukan `number`, function mengembalikan `undefined`.

## Konsep Utama

- Function
- Function parameters
- Arguments
- Optional argument
- `arguments.length`
- `typeof`
- Conditional statement
- Early return
- Arrow function
- Returned function
- Closure
- Ternary operator
- `undefined`
- `return`

## Struktur Project

```text
optional-arguments-sum-function/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `addTogether()`

Function utama menerima dua parameter:

```javascript
function addTogether (num1, num2) {
```

`num1` adalah nilai pertama.

`num2` adalah nilai kedua yang dapat tersedia atau tidak, tergantung cara function dipanggil.

### 2. Memvalidasi `num1`

```javascript
if (typeof num1 !== "number") return undefined;
```

Operator `typeof` digunakan untuk memeriksa tipe data `num1`.

Jika hasilnya bukan:

```text
number
```

function langsung mengembalikan:

```javascript
undefined
```

Karena menggunakan early `return`, proses berikutnya tidak dijalankan untuk input tersebut.

### 3. Memeriksa Jumlah Argument

```javascript
if (arguments.length < 2) {
```

`arguments.length` menunjukkan jumlah argument yang diberikan ketika `addTogether()` dipanggil.

Jika jumlahnya kurang dari `2`, berarti function hanya menerima satu argument pada pemanggilan tersebut.

Pada kondisi ini, function tidak langsung melakukan penjumlahan.

### 4. Mengembalikan Function Baru

```javascript
return (nextNum) => typeof nextNum === "number" ? num1 + nextNum : undefined;
```

Jika hanya `num1` yang diberikan, `addTogether()` mengembalikan sebuah arrow function.

Function baru tersebut menerima satu parameter:

```javascript
nextNum
```

`nextNum` menjadi angka berikutnya yang akan diperiksa dan, jika valid, dijumlahkan dengan `num1`.

### 5. Memvalidasi `nextNum`

Di dalam returned function terdapat kondisi:

```javascript
typeof nextNum === "number"
```

Jika `nextNum` merupakan `number`, expression menghasilkan:

```javascript
num1 + nextNum
```

Jika bukan `number`, expression menghasilkan:

```javascript
undefined
```

### 6. Ternary Operator

Bagian:

```javascript
typeof nextNum === "number" ? num1 + nextNum : undefined
```

menggunakan ternary operator.

Strukturnya pada kode ini terdiri dari:

- kondisi: `typeof nextNum === "number"`
- hasil jika benar: `num1 + nextNum`
- hasil jika salah: `undefined`

### 7. `num1` Tetap Tersedia

Returned arrow function masih menggunakan:

```javascript
num1
```

meskipun `num1` berasal dari pemanggilan `addTogether()` sebelumnya.

Dengan demikian, function yang dikembalikan dapat memakai nilai `num1` ketika `nextNum` kemudian diberikan.

### 8. Memvalidasi `num2`

```javascript
if (typeof num2 !== "number") return undefined;
```

Bagian ini dijalankan ketika dua atau lebih argument tersedia pada pemanggilan awal.

`typeof` memeriksa apakah `num2` merupakan `number`.

Jika bukan, function mengembalikan `undefined`.

### 9. Menjumlahkan Dua Argument

```javascript
return num1 + num2;
```

Jika `num1` dan `num2` sama-sama lolos pemeriksaan tipe data, function menjumlahkan keduanya.

Hasil penjumlahan langsung menjadi return value dari `addTogether()`.

### 10. Dua Bentuk Pemanggilan

Struktur function mendukung dua jalur berdasarkan source code.

Pemanggilan dengan dua argument menggunakan:

```javascript
num1 + num2
```

Sedangkan pemanggilan dengan satu argument terlebih dahulu menghasilkan function:

```javascript
(nextNum) => ...
```

yang kemudian dapat menggunakan `num1` bersama `nextNum`.

### 11. Alur Validasi

Pemeriksaan dilakukan dalam urutan berikut.

Pertama:

```javascript
typeof num1 !== "number"
```

Kemudian, jika hanya satu argument tersedia:

```javascript
arguments.length < 2
```

Jika terdapat argument kedua, program memeriksa:

```javascript
typeof num2 !== "number"
```

Penjumlahan dilakukan hanya setelah nilai yang diperlukan lolos pemeriksaan tersebut.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `addTogether()` | Menangani penjumlahan berdasarkan argument yang diberikan |
| `num1` | Menyimpan angka pertama |
| `num2` | Menyimpan angka kedua ketika tersedia |
| `typeof` | Memeriksa tipe data argument |
| `arguments.length` | Memeriksa jumlah argument pada pemanggilan function |
| Early `return` | Menghentikan function ketika input tidak valid |
| `nextNum` | Menyimpan angka berikutnya pada returned function |
| Arrow function | Menjadi function yang dikembalikan ketika hanya satu argument diberikan |
| Ternary operator | Memilih hasil berdasarkan validitas `nextNum` |
| `undefined` | Dikembalikan ketika input yang diperiksa bukan `number` |
| `num1 + num2` | Menjumlahkan dua argument yang valid |
| `num1 + nextNum` | Menjumlahkan nilai pertama dengan nilai dari returned function |

## Catatan Belajar

- **`addTogether()`** memiliki dua parameter, yaitu `num1` dan `num2`.
- **`typeof`** digunakan untuk memastikan nilai yang diproses memiliki tipe `number`.
- **`arguments.length`** digunakan untuk mengetahui berapa banyak argument yang diberikan saat function dipanggil.
- **Jika hanya satu argument diberikan**, function mengembalikan arrow function.
- **`nextNum`** menjadi parameter dari function yang dikembalikan.
- **Returned function** tetap dapat menggunakan nilai `num1` dari pemanggilan sebelumnya.
- **Ternary operator** memeriksa `nextNum` dan menghasilkan penjumlahan atau `undefined`.
- **Jika dua argument diberikan**, `num2` juga divalidasi menggunakan `typeof`.
- **Early return** membuat function segera berhenti ketika menemukan input yang tidak sesuai.
- **`undefined`** menjadi hasil untuk input yang gagal pada pemeriksaan tipe data.
- **Penjumlahan langsung** dilakukan setelah `num1` dan `num2` dinyatakan valid.

## What I Practiced

```text
JavaScript Functions
Function Parameters
Function Arguments
Optional Arguments
arguments.length
typeof Operator
Conditional Statements
Early Returns
Arrow Functions
Returned Functions
Closures
Ternary Operator
Undefined Values
Return Values
```

---

**Platform:** freeCodeCamp  
**Lab:** Build an Optional Arguments Sum Function  
**Language:** JavaScript  
**Focus:** Functional Programming

---

<p align="center">
  <strong>Functional Programming Section — Build an Optional Arguments Sum Function Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
