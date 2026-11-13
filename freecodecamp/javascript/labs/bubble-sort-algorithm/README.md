# Implement the Bubble Sort Algorithm

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Algorithms-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Algorithms" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Algorithms-4B5563" alt="Algorithms" />
</p>

> **Milestone:** Lab setelah mempelajari Algorithms.

## About

Project ini mengimplementasikan **bubble sort** untuk mengurutkan nilai di dalam array dari nilai terkecil ke nilai terbesar.

Function `bubbleSort()` menggunakan nested `for` loop untuk membandingkan dua elemen yang bersebelahan. Jika elemen di sebelah kiri lebih besar daripada elemen di sebelah kanan, kedua nilai tersebut ditukar.

Proses tersebut dilakukan berulang kali sampai seluruh bagian array selesai diperiksa, kemudian array yang sudah diproses dikembalikan oleh function.

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
- Value swapping
- Array mutation
- `return`
- Bubble sort

## Struktur Project

```text
bubble-sort-algorithm/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `bubbleSort()`

Function utama menerima satu parameter bernama `arr`.

```javascript
function bubbleSort(arr) {
```

`arr` adalah array yang akan diperiksa dan diurutkan.

Isi array tersebut diubah secara langsung selama proses sorting.

### 2. Outer `for` Loop

```javascript
for (let i = 0; i < arr.length; i++) {
```

Variable `i` digunakan untuk mengontrol jumlah putaran utama proses sorting.

Perulangan dimulai dari `0` dan terus berjalan selama `i` lebih kecil daripada `arr.length`.

Pada setiap putaran, bagian array yang masih perlu dibandingkan menjadi semakin pendek.

### 3. Inner `for` Loop

```javascript
for (let j = 0; j < arr.length - 1 - i; j++) {
```

Variable `j` digunakan untuk mengakses elemen yang sedang dibandingkan.

Pada setiap iterasi, kode membandingkan:

```javascript
arr[j]
```

dengan:

```javascript
arr[j + 1]
```

Batas perulangan menggunakan:

```javascript
arr.length - 1 - i
```

Nilai `- i` membuat inner loop tidak memeriksa kembali bagian akhir array yang sudah dilewati pada putaran sebelumnya.

### 4. Membandingkan Dua Elemen

```javascript
if (arr[j] > arr[j + 1]) {
```

Kondisi ini memeriksa apakah elemen di sebelah kiri lebih besar daripada elemen di sebelah kanan.

Jika kondisi bernilai `true`, kedua elemen perlu ditukar.

Jika kondisi bernilai `false`, tidak ada proses pertukaran pada pasangan tersebut.

### 5. Menyimpan Nilai Sementara

```javascript
let temp = arr[j];
```

Sebelum dua elemen ditukar, nilai `arr[j]` disimpan sementara di dalam variable `temp`.

Penyimpanan ini diperlukan karena nilai pada `arr[j]` akan diganti pada langkah berikutnya.

### 6. Memindahkan Nilai Kanan ke Kiri

```javascript
arr[j] = arr[j + 1];
```

Nilai yang berada pada `arr[j + 1]` dipindahkan ke posisi `arr[j]`.

Setelah baris ini dijalankan, posisi sebelah kiri berisi nilai yang sebelumnya berada di sebelah kanan.

### 7. Memindahkan Nilai Lama ke Kanan

```javascript
arr[j + 1] = temp;
```

Nilai lama dari `arr[j]` yang sebelumnya disimpan di `temp` kemudian ditempatkan pada posisi `arr[j + 1]`.

Tiga baris berikut menyelesaikan proses pertukaran:

```javascript
let temp = arr[j];
arr[j] = arr[j + 1];
arr[j + 1] = temp;
```

### 8. Mengembalikan Array

```javascript
return arr;
```

Setelah seluruh perulangan selesai, function mengembalikan `arr`.

Array yang dikembalikan adalah array yang telah diproses oleh nested loop dan operasi pertukaran nilai.

### 9. Menjalankan Function

```javascript
console.log(bubbleSort([1, 2, 3, 4, 6, 7]));
```

`bubbleSort()` dipanggil menggunakan array:

```javascript
[1, 2, 3, 4, 6, 7]
```

Array pada pemanggilan tersebut sudah berada dalam urutan dari nilai terkecil ke nilai terbesar.

Karena tidak ada kondisi:

```javascript
arr[j] > arr[j + 1]
```

yang terpenuhi, tidak terjadi pertukaran nilai.

Hasil yang dikembalikan tetap:

```javascript
[1, 2, 3, 4, 6, 7]
```

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `bubbleSort()` | Menjalankan proses bubble sort pada array |
| `arr` | Menyimpan array yang akan diproses |
| `i` | Mengontrol putaran utama sorting |
| `j` | Menunjuk elemen yang sedang dibandingkan |
| `arr[j]` | Mengakses elemen pertama dari pasangan yang dibandingkan |
| `arr[j + 1]` | Mengakses elemen setelah `arr[j]` |
| `arr.length - 1 - i` | Membatasi bagian array yang diperiksa inner loop |
| `temp` | Menyimpan sementara nilai sebelum pertukaran |
| Nested `for` loop | Mengulangi proses perbandingan elemen |
| `return arr` | Mengembalikan array setelah proses sorting selesai |

## Catatan Belajar

- **Bubble sort** pada project ini bekerja dengan membandingkan elemen yang bersebelahan di dalam array.
- **Outer loop** mengontrol jumlah putaran proses sorting.
- **Inner loop** melakukan perbandingan antar elemen yang bersebelahan.
- **`arr[j] > arr[j + 1]`** menentukan apakah dua nilai perlu ditukar.
- **`temp`** menyimpan nilai sementara agar nilai pertama tidak hilang selama proses pertukaran.
- **`arr.length - 1 - i`** mengurangi bagian array yang perlu diperiksa pada setiap putaran berikutnya.
- **Array mutation** terjadi karena nilai pada `arr` diganti secara langsung melalui array indexing.
- **`return arr`** mengembalikan array setelah seluruh proses selesai.

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
Value Swapping
Array Mutation
Return Values
Bubble Sort
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement the Bubble Sort Algorithm  
**Language:** JavaScript  
**Focus:** Algorithms

---

<p align="center">
  <strong>Algorithms Section — Implement the Bubble Sort Algorithm Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
