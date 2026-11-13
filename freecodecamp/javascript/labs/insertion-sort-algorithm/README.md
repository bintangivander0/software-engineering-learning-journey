# Implement the Insertion Sort Algorithm

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Algorithms-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Algorithms" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Algorithms-4B5563" alt="Algorithms" />
</p>

> **Milestone:** Lab setelah mempelajari Algorithms.

## About

Project ini mengimplementasikan **insertion sort** untuk mengurutkan nilai di dalam array dari nilai terkecil ke nilai terbesar.

Function `insertionSort()` memproses array mulai dari elemen kedua. Nilai yang sedang diproses disimpan dalam `currentNumber`, kemudian dibandingkan dengan elemen-elemen sebelumnya.

Selama ditemukan nilai sebelumnya yang lebih besar daripada `currentNumber`, nilai tersebut digeser satu posisi ke kanan. Setelah posisi yang sesuai ditemukan, `currentNumber` ditempatkan pada posisi tersebut.

## Konsep Utama

- Function
- Parameter
- Array
- Array indexing
- `length`
- `for` loop
- `while` loop
- Conditional expression
- Variable
- Index tracking
- Value comparison
- Element shifting
- Array mutation
- `return`
- Insertion sort

## Struktur Project

```text
insertion-sort-algorithm/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `insertionSort()`

Function utama menerima satu parameter bernama `array`.

```javascript
function insertionSort(array) {
```

`array` adalah array yang akan diproses dan diurutkan.

Isi array diubah secara langsung selama proses insertion sort. Setelah seluruh proses selesai, array tersebut dikembalikan oleh function.

### 2. Memulai Perulangan dari Index `1`

```javascript
for (let i = 1; i < array.length; i++) {
```

Outer `for` loop dimulai dari index `1`, bukan `0`.

Elemen pada index `0` menjadi bagian awal yang sudah tersedia ketika elemen berikutnya mulai dibandingkan.

Variable `i` menunjukkan posisi elemen yang sedang diproses.

### 3. Menyimpan Nilai yang Sedang Diproses

```javascript
let currentNumber = array[i];
```

Nilai pada posisi `i` disimpan ke dalam variable `currentNumber`.

Nilai tersebut perlu disimpan karena elemen-elemen di dalam array dapat digeser selama proses pencarian posisi yang sesuai.

### 4. Menentukan Index Sebelumnya

```javascript
let firstNumber = i - 1;
```

`firstNumber` menyimpan index yang berada tepat sebelum `i`.

Variable ini digunakan untuk bergerak ke arah awal array dan membandingkan elemen-elemen sebelumnya dengan `currentNumber`.

### 5. Kondisi `while` Loop

```javascript
while (firstNumber >= 0 && array[firstNumber] > currentNumber) {
```

`while` loop berjalan jika dua kondisi terpenuhi:

- `firstNumber >= 0`
- `array[firstNumber] > currentNumber`

Kondisi pertama memastikan index yang diperiksa masih berada di dalam array.

Kondisi kedua memastikan perulangan hanya terus berjalan ketika nilai sebelumnya lebih besar daripada `currentNumber`.

### 6. Menggeser Elemen ke Kanan

```javascript
array[firstNumber + 1] = array[firstNumber];
```

Jika nilai pada `array[firstNumber]` lebih besar daripada `currentNumber`, nilai tersebut dipindahkan satu posisi ke kanan.

Operasi ini tidak langsung menukar dua nilai.

Nilai yang lebih besar digeser untuk menyediakan posisi yang sesuai bagi `currentNumber`.

### 7. Bergerak ke Index Sebelumnya

```javascript
firstNumber -= 1
```

Setelah satu elemen digeser, nilai `firstNumber` dikurangi satu.

Hal ini membuat `while` loop memeriksa elemen yang berada lebih dekat ke awal array.

Proses tersebut berlanjut selama elemen yang diperiksa masih lebih besar daripada `currentNumber`.

### 8. Menempatkan `currentNumber`

```javascript
array[firstNumber + 1] = currentNumber;
```

Setelah `while` loop berhenti, `currentNumber` ditempatkan pada `firstNumber + 1`.

Posisi tersebut merupakan posisi yang diperoleh setelah seluruh nilai yang lebih besar di bagian yang diperiksa digeser ke kanan.

### 9. Mengembalikan Array

```javascript
return array;
```

Setelah outer `for` loop selesai, function mengembalikan `array`.

Array tersebut telah mengalami perubahan langsung selama proses pengurutan.

### 10. Menjalankan Function

```javascript
console.log(insertionSort([42, 4, 12, 24, 2]));
```

Function dipanggil menggunakan array:

```javascript
[42, 4, 12, 24, 2]
```

Nilai-nilai diproses mulai dari elemen kedua.

Elemen yang lebih besar digeser ke kanan ketika diperlukan sampai setiap `currentNumber` dapat ditempatkan pada posisi yang sesuai.

Setelah seluruh proses selesai, function menghasilkan:

```javascript
[2, 4, 12, 24, 42]
```

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `insertionSort()` | Menjalankan proses insertion sort pada array |
| `array` | Menyimpan array yang akan diurutkan |
| `i` | Menunjukkan posisi elemen yang sedang diproses |
| `currentNumber` | Menyimpan nilai yang sedang dicari posisi yang sesuai |
| `firstNumber` | Menunjukkan index elemen sebelumnya yang sedang diperiksa |
| `firstNumber >= 0` | Menjaga pemeriksaan tetap berada di dalam batas array |
| `array[firstNumber] > currentNumber` | Menentukan apakah suatu elemen perlu digeser |
| `array[firstNumber + 1] = array[firstNumber]` | Menggeser nilai yang lebih besar satu posisi ke kanan |
| `firstNumber -= 1` | Memindahkan pemeriksaan ke index sebelumnya |
| `array[firstNumber + 1] = currentNumber` | Menempatkan nilai yang sedang diproses pada posisi yang sesuai |
| `return array` | Mengembalikan array setelah proses sorting selesai |

## Catatan Belajar

- **Insertion sort** pada project ini memproses elemen mulai dari index `1`.
- **`currentNumber`** menyimpan nilai yang sedang dicari posisi yang sesuai.
- **`firstNumber`** digunakan untuk memeriksa elemen-elemen yang berada sebelum `currentNumber`.
- **`while` loop** berjalan selama index masih valid dan nilai sebelumnya lebih besar daripada `currentNumber`.
- **Elemen yang lebih besar** digeser satu posisi ke kanan, bukan langsung ditukar dengan `currentNumber`.
- **`firstNumber -= 1`** membuat pemeriksaan bergerak ke arah awal array.
- **`array[firstNumber + 1] = currentNumber`** menempatkan nilai yang sedang diproses setelah proses shifting selesai.
- **Array mutation** terjadi karena elemen pada `array` ditulis ulang secara langsung.
- **`return array`** mengembalikan array setelah seluruh proses insertion sort selesai.

## What I Practiced

```text
JavaScript Functions
Function Parameters
Arrays
Array Indexing
Array Length
For Loops
While Loops
Conditional Expressions
Variables
Index Tracking
Value Comparison
Element Shifting
Array Mutation
Return Values
Insertion Sort
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement the Insertion Sort Algorithm  
**Language:** JavaScript  
**Focus:** Algorithms

---

<p align="center">
  <strong>Algorithms Section — Implement the Insertion Sort Algorithm Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
