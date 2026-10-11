# Build a Range of Numbers Generator

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Recursion-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript Recursion" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Recursion-4B5563" alt="Recursion" />
</p>

> **Milestone:** Lab setelah mempelajari Recursion.

## About

Project ini membuat fungsi `rangeOfNumbers()` untuk menghasilkan array angka dari nilai minimum hingga nilai maksimum.

Project ini digunakan untuk mempraktikkan recursion, base case, recursive function call, serta penggunaan method `push()` pada array.

## Konsep Utama

- Function
- Recursion
- Base case
- Recursive function call
- Array
- `push()`
- `return`

## Struktur Project

```text
range-of-numbers-generator/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `rangeOfNumbers()`

```js
function rangeOfNumbers(min, max) {
  let countArray = [];
```

Function `rangeOfNumbers()` menerima dua parameter, yaitu `min` sebagai nilai awal dan `max` sebagai nilai akhir.

`countArray` digunakan untuk menyimpan angka yang dihasilkan selama proses recursion.

### 2. Base Case

```js
if (max < min) {
  return [];
}
```

Base case menentukan kapan recursion harus berhenti.

Ketika `max` sudah lebih kecil daripada `min`, function mengembalikan array kosong sehingga recursion tidak terus memanggil dirinya sendiri.

### 3. Recursive Function Call

```js
else {
  countArray = rangeOfNumbers(min, max - 1);
```

Pada bagian `else`, function memanggil dirinya sendiri dengan nilai `max - 1`.

Pemanggilan ini terus mengurangi nilai `max` sampai kondisi base case tercapai.

### 4. Menambahkan `max` dengan `push()`

```js
countArray.push(max);
```

Setelah recursive call mengembalikan array, nilai `max` ditambahkan ke bagian akhir array menggunakan `push()`.

Karena penambahan dilakukan setelah recursive call selesai, angka yang lebih kecil sudah tersedia lebih dahulu di dalam array.

### 5. Mengembalikan Array

```js
return countArray;
```

Function mengembalikan `countArray` setelah nilai `max` ditambahkan.

Nilai yang dikembalikan kemudian digunakan oleh pemanggilan function sebelumnya sampai pemanggilan awal selesai.

### 6. Menjalankan Function

```js
console.log(rangeOfNumbers(3, 9));
```

Function dijalankan dengan `min` bernilai `3` dan `max` bernilai `9`.

Hasil akhirnya adalah:

```text
[3, 4, 5, 6, 7, 8, 9]
```

## Method yang Dipakai

- `push()` digunakan untuk menambahkan nilai `max` ke bagian akhir array.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `rangeOfNumbers()` | Menghasilkan array angka dari `min` hingga `max` |
| Recursion | Memanggil function yang sama dengan nilai `max` yang lebih kecil |
| Base case | Menghentikan recursion ketika `max < min` |
| `push()` | Menambahkan `max` ke array |
| `return` | Mengembalikan array hasil recursion |

## Catatan Belajar

- **Recursion** membuat function memanggil dirinya sendiri untuk menyelesaikan masalah secara bertahap.
- **Base case** menghentikan recursion ketika kondisi tertentu tercapai.
- **Recursive call** pada project ini menggunakan `max - 1`.
- **`push()`** menambahkan angka ke bagian akhir `countArray`.
- **`return`** mengembalikan hasil recursion kepada pemanggilan function sebelumnya.

## What I Practiced

```text
JavaScript Functions
Recursion
Base Cases
Recursive Function Calls
Arrays
Array Methods
The push() Method
Return Values
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Range of Numbers Generator  
**Language:** JavaScript  
**Focus:** Recursion

---

<p align="center">
  <strong>Recursion Section — Build a Range of Numbers Generator Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
