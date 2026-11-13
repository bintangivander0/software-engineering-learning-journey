# Implement the Selection Sort Algorithm

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Algorithms-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Algorithms" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Algorithms-4B5563" alt="Algorithms" />
</p>

> **Milestone:** Lab setelah mempelajari Algorithms.

## About

Project ini mengimplementasikan **selection sort** untuk mengurutkan nilai di dalam array dari nilai terkecil ke nilai terbesar.

Function `selectionSort()` memeriksa bagian array yang belum terurut untuk mencari nilai terkecil. Index dari nilai terkecil tersebut disimpan di `smallestIndex`. Jika nilai terkecil ditemukan pada posisi yang berbeda dari posisi saat ini, kedua nilai ditukar.

Proses ini terus dilakukan sampai seluruh array selesai diperiksa, kemudian array yang sudah diurutkan dikembalikan oleh function.

## Konsep Utama

- Function
- Parameter
- Array
- Array indexing
- `length`
- `for` loop
- Nested loop
- Conditional statement
- Variable
- Index tracking
- Value comparison
- Value swapping
- Array mutation
- `return`
- Selection sort

## Struktur Project

```text
selection-sort-algorithm/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `selectionSort()`

Function utama menerima satu parameter bernama `array`.

```javascript
function selectionSort(array) {
```

`array` adalah array yang akan diperiksa dan diurutkan.

Isi array diubah secara langsung selama proses sorting, kemudian array tersebut dikembalikan setelah proses selesai.

### 2. Outer `for` Loop

```javascript
for (let i = 0; i < array.length; i++) {
```

Variable `i` menunjukkan posisi yang sedang diisi dengan nilai terkecil dari bagian array yang belum selesai diperiksa.

Perulangan dimulai dari index `0` dan berjalan sampai seluruh posisi array telah diproses.

### 3. Menentukan `smallestIndex`

```javascript
let smallestIndex = i;
```

Pada awal setiap putaran outer loop, `smallestIndex` diisi dengan nilai `i`.

Artinya, nilai pada posisi saat ini terlebih dahulu dianggap sebagai nilai terkecil dari bagian array yang sedang diperiksa.

Jika kemudian ditemukan nilai yang lebih kecil, `smallestIndex` akan diperbarui.

### 4. Inner `for` Loop

```javascript
for (let j = i + 1; j < array.length; j++) {
```

Inner loop dimulai dari satu posisi setelah `i`.

Variable `j` digunakan untuk memeriksa elemen-elemen yang berada setelah posisi saat ini.

Bagian sebelum `i` tidak diperiksa kembali oleh inner loop.

### 5. Membandingkan Nilai

```javascript
if (array[j] < array[smallestIndex]) {
  smallestIndex = j;
}
```

Nilai pada `array[j]` dibandingkan dengan nilai pada `array[smallestIndex]`.

Jika `array[j]` lebih kecil, `smallestIndex` diperbarui menjadi `j`.

Dengan cara ini, setelah inner loop selesai, `smallestIndex` menunjuk ke nilai terkecil yang ditemukan pada bagian array tersebut.

### 6. Memeriksa Apakah Pertukaran Diperlukan

```javascript
if (smallestIndex !== i) {
```

Setelah inner loop selesai, program memeriksa apakah nilai terkecil ditemukan pada index yang berbeda dari `i`.

Jika `smallestIndex` masih sama dengan `i`, nilai pada posisi tersebut sudah menjadi nilai terkecil dan tidak perlu ditukar.

Jika nilainya berbeda, proses pertukaran dilakukan.

### 7. Menyimpan Nilai Sementara

```javascript
let temp = array[i];
```

Nilai pada `array[i]` disimpan sementara di dalam variable `temp`.

Nilai ini perlu disimpan karena posisi `array[i]` akan diisi dengan nilai yang berada pada `array[smallestIndex]`.

### 8. Memindahkan Nilai Terkecil

```javascript
array[i] = array[smallestIndex];
```

Nilai terkecil yang ditemukan selama inner loop dipindahkan ke posisi `i`.

Dengan demikian, posisi yang sedang diproses sekarang berisi nilai terkecil dari bagian array yang belum terurut.

### 9. Menyelesaikan Pertukaran

```javascript
array[smallestIndex] = temp;
```

Nilai lama dari `array[i]` yang sebelumnya disimpan dalam `temp` dipindahkan ke posisi `smallestIndex`.

Keseluruhan proses pertukaran dilakukan dengan:

```javascript
let temp = array[i];
array[i] = array[smallestIndex];
array[smallestIndex] = temp;
```

### 10. Mengembalikan Array

```javascript
return array;
```

Setelah outer loop selesai memproses seluruh posisi, function mengembalikan `array`.

Array tersebut sudah mengalami perubahan langsung selama proses selection sort.

### 11. Menjalankan Function

```javascript
console.log(selectionSort([1, 3, 5, 6, 2]));
```

Function dipanggil menggunakan array:

```javascript
[1, 3, 5, 6, 2]
```

Pada proses sorting, nilai `2` yang berada di bagian akhir array akan ditemukan sebagai nilai yang lebih kecil daripada beberapa elemen sebelumnya.

Setelah seluruh proses selesai, function mengembalikan:

```javascript
[1, 2, 3, 5, 6]
```

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `selectionSort()` | Menjalankan proses selection sort pada array |
| `array` | Menyimpan array yang akan diurutkan |
| `i` | Menunjukkan posisi yang sedang diproses |
| `smallestIndex` | Menyimpan index nilai terkecil yang ditemukan |
| `j` | Memeriksa elemen setelah posisi `i` |
| `array[j] < array[smallestIndex]` | Memeriksa apakah ditemukan nilai yang lebih kecil |
| `smallestIndex !== i` | Menentukan apakah pertukaran perlu dilakukan |
| `temp` | Menyimpan sementara nilai sebelum pertukaran |
| Nested `for` loop | Menjalankan pencarian nilai terkecil pada setiap bagian array |
| `return array` | Mengembalikan array setelah proses sorting selesai |

## Catatan Belajar

- **Selection sort** pada project ini mencari nilai terkecil dari bagian array yang belum selesai diurutkan.
- **`i`** menentukan posisi yang sedang diisi selama proses sorting.
- **`smallestIndex`** menyimpan index dari nilai terkecil yang ditemukan.
- **Inner loop** dimulai dari `i + 1` karena nilai pada posisi `i` sudah digunakan sebagai nilai awal untuk `smallestIndex`.
- **`array[j] < array[smallestIndex]`** memperbarui posisi nilai terkecil ketika ditemukan nilai yang lebih kecil.
- **`smallestIndex !== i`** mencegah proses pertukaran ketika nilai terkecil sudah berada pada posisi yang benar.
- **`temp`** menjaga nilai lama pada `array[i]` agar tidak hilang selama proses pertukaran.
- **Array mutation** terjadi karena elemen di dalam `array` diganti secara langsung menggunakan array indexing.
- **`return array`** mengembalikan array setelah seluruh proses selection sort selesai.

## What I Practiced

```text
JavaScript Functions
Function Parameters
Arrays
Array Indexing
Array Length
For Loops
Nested Loops
Conditional Statements
Variables
Index Tracking
Value Comparison
Value Swapping
Array Mutation
Return Values
Selection Sort
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement the Selection Sort Algorithm  
**Language:** JavaScript  
**Focus:** Algorithms

---

<p align="center">
  <strong>Algorithms Section — Implement the Selection Sort Algorithm Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
