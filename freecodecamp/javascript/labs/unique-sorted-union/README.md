# Implement a Unique Sorted Union

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-JavaScript%20Fundamentals%20Review-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript JavaScript Fundamentals Review" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-JavaScript%20Fundamentals%20Review-4B5563" alt="JavaScript Fundamentals Review" />
</p>

> **Milestone:** Lab setelah mempelajari JavaScript Fundamentals Review.

## About

Project ini membuat fungsi `uniteUnique()` untuk menggabungkan beberapa array menjadi satu array yang hanya berisi nilai unik.

Fungsi menggunakan rest parameter untuk menerima beberapa array, kemudian memeriksa setiap nilai dengan `indexOf()` sebelum memasukkannya ke array hasil menggunakan `push()`.

## Konsep Utama

- Rest parameter digunakan untuk menerima beberapa array sebagai parameter.
- Nested `for` loop digunakan untuk memeriksa setiap array dan setiap elemennya.
- `indexOf()` digunakan untuk memeriksa apakah suatu nilai sudah terdapat dalam array hasil.
- `push()` digunakan untuk menambahkan nilai yang belum pernah ditemukan ke array hasil.
- Array digunakan untuk menyimpan hasil gabungan nilai unik.

## Struktur Project

```text
unique-sorted-union/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `uniteUnique()`

```javascript
function uniteUnique(...arrs) {
```

Function menerima beberapa array melalui rest parameter `...arrs`.

Seluruh array yang diberikan kemudian dapat diproses melalui `arrs`.

### 2. Menyiapkan Array Hasil

```javascript
let result = [];
```

`result` digunakan untuk menyimpan nilai-nilai unik yang ditemukan selama proses berlangsung.

### 3. Mengiterasi Setiap Array

```javascript
for (let i = 0; i < arrs.length; i++) {
  const currentArray = arrs[i];
```

Loop pertama berjalan melalui setiap array yang diterima oleh function.

`currentArray` menyimpan array yang sedang diproses.

### 4. Mengiterasi Setiap Nilai

```javascript
for (let j = 0; j < currentArray.length; j++) {
  const currentNumber = currentArray[j];
```

Loop kedua memeriksa setiap elemen dari `currentArray`.

Nilai yang sedang diperiksa disimpan pada `currentNumber`.

### 5. Memeriksa Nilai yang Sudah Ada

```javascript
if (result.indexOf(currentNumber) === -1) {
```

`indexOf()` mencari posisi `currentNumber` di dalam `result`.

Jika hasilnya `-1`, nilai tersebut belum ditemukan sehingga dapat dimasukkan ke array hasil.

### 6. Menambahkan Nilai Unik

```javascript
result.push(currentNumber);
```

Nilai yang belum terdapat dalam `result` ditambahkan menggunakan `push()`.

Dengan pemeriksaan sebelumnya, setiap nilai hanya dimasukkan sekali.

### 7. Mengembalikan Hasil

```javascript
return result;
```

Setelah seluruh array dan elemennya selesai diperiksa, function mengembalikan array `result`.

### 8. Contoh Pemanggilan

```javascript
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
```

Pemanggilan pertama menghasilkan nilai unik berdasarkan urutan pertama kali setiap nilai ditemukan.

Source code ini **tidak memanggil `sort()`**, sehingga hasilnya tidak diurutkan ulang secara numerik meskipun nama project mengandung kata `Sorted`.

## Method yang Dipakai

- `indexOf()` digunakan untuk memeriksa apakah nilai sudah terdapat dalam array hasil.
- `push()` digunakan untuk menambahkan nilai baru ke array hasil.
- `console.log()` digunakan untuk menampilkan hasil function.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| Rest parameter | Menerima beberapa array sebagai parameter |
| Nested `for` loop | Memeriksa setiap array dan setiap elemennya |
| `indexOf()` | Mengecek apakah nilai sudah ada |
| `push()` | Menambahkan nilai yang belum ada |
| `result` | Menyimpan gabungan nilai unik |

## Catatan Belajar

- **Rest parameter** memungkinkan function menerima jumlah argument berupa array yang fleksibel.
- **Nested loop** dapat digunakan untuk memproses elemen dari beberapa array secara berurutan.
- **`indexOf()`** menghasilkan `-1` ketika nilai yang dicari belum ditemukan.
- **`push()`** menambahkan elemen baru ke bagian akhir array.
- **Array hasil** dapat digunakan untuk mengumpulkan nilai unik dari beberapa sumber.
- **Urutan hasil** pada source code mengikuti kemunculan pertama setiap nilai karena tidak ada pemanggilan `sort()`.

## What I Practiced

```text
JavaScript Functions
Rest Parameters
Arrays
Nested for Loops
indexOf()
push()
Conditional Statements
Array Traversal
Unique Values
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement a Unique Sorted Union  
**Language:** JavaScript  
**Focus:** JavaScript Fundamentals Review

---

<p align="center">
  <strong>JavaScript Fundamentals Review Section — Implement a Unique Sorted Union Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
