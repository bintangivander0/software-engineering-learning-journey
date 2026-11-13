# Implement the Merge Sort Algorithm

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Algorithms-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Algorithms" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Workshop-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Workshop" />
  <img src="https://img.shields.io/badge/Topic-Algorithms-4B5563" alt="Algorithms" />
</p>

> **Milestone:** Workshop setelah mempelajari Algorithms.

## About

Project ini mengimplementasikan **merge sort** untuk mengurutkan nilai di dalam array dari nilai terkecil ke nilai terbesar.

Function `mergeSort()` membagi array menjadi bagian kiri dan kanan secara berulang sampai setiap bagian memiliki paling banyak satu elemen. Setelah itu, bagian-bagian tersebut digabungkan kembali dengan membandingkan nilai dari kedua sisi dan menuliskannya ke array dalam urutan yang sesuai.

Proses pengurutan dilakukan langsung terhadap array yang diberikan ke function.

## Konsep Utama

- Function
- Recursion
- Base case
- Array
- Array indexing
- `length`
- `Math.floor()`
- `slice()`
- `while`
- Conditional statement
- Variable index
- Array mutation
- Merge sort

## Struktur Project

```text
merge-sort-algorithm/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `mergeSort()`

Function utama menerima satu parameter bernama `array`.

```javascript
function mergeSort(array) {
```

`array` adalah array yang akan diurutkan.

Function tidak membuat array hasil akhir baru untuk dikembalikan. Sebaliknya, nilai di dalam `array` diubah selama proses penggabungan.

### 2. Base Case

```javascript
if (array.length <= 1) {
  return;
}
```

Kondisi ini menghentikan recursion ketika array memiliki satu elemen atau tidak memiliki elemen.

Array dengan kondisi tersebut tidak perlu dibagi lagi.

Tanpa base case ini, `mergeSort()` akan terus memanggil dirinya sendiri.

### 3. Menentukan Titik Tengah

```javascript
const middlePoint = Math.floor(array.length / 2);
```

`middlePoint` menyimpan index yang digunakan untuk membagi array.

`array.length / 2` menentukan posisi tengah, sedangkan `Math.floor()` membulatkan hasilnya ke bilangan bulat ke bawah.

Nilai tersebut kemudian digunakan sebagai batas pemisahan antara bagian kiri dan kanan.

### 4. Membagi Array

```javascript
const leftPart = array.slice(0, middlePoint);
const rightPart = array.slice(middlePoint);
```

`leftPart` berisi elemen mulai dari index `0` sampai sebelum `middlePoint`.

`rightPart` berisi elemen mulai dari `middlePoint` sampai akhir array.

Method `slice()` menghasilkan bagian array yang digunakan untuk proses recursion berikutnya.

### 5. Recursive Calls

```javascript
mergeSort(leftPart);
mergeSort(rightPart);
```

`mergeSort()` dipanggil kembali untuk `leftPart` dan `rightPart`.

Setiap bagian terus dibagi sampai mencapai base case.

Setelah recursive call selesai, `leftPart` dan `rightPart` sudah berada dalam kondisi terurut sehingga keduanya dapat digabungkan kembali.

### 6. Index untuk Proses Merge

```javascript
let leftArrayIndex = 0;
let rightArrayIndex = 0;
let sortedIndex = 0;
```

Tiga variable index digunakan selama proses penggabungan.

- `leftArrayIndex` menunjuk elemen yang sedang diperiksa pada `leftPart`.
- `rightArrayIndex` menunjuk elemen yang sedang diperiksa pada `rightPart`.
- `sortedIndex` menunjuk posisi pada `array` yang akan diisi berikutnya.

Semua index dimulai dari `0`.

### 7. Membandingkan Bagian Kiri dan Kanan

```javascript
while (leftArrayIndex < leftPart.length && rightArrayIndex < rightPart.length) {
```

Perulangan berjalan selama `leftPart` dan `rightPart` masih memiliki elemen yang belum diproses.

Pada setiap iterasi, nilai dari kedua bagian dibandingkan.

### 8. Memasukkan Nilai dari Bagian Kiri

```javascript
if (leftPart[leftArrayIndex] < rightPart[rightArrayIndex]) {
  array[sortedIndex] = leftPart[leftArrayIndex];
  leftArrayIndex += 1;
}
```

Jika nilai pada `leftPart` lebih kecil daripada nilai pada `rightPart`, nilai dari `leftPart` dimasukkan ke posisi `sortedIndex` pada array.

Setelah itu, `leftArrayIndex` ditambah satu agar pemeriksaan berpindah ke elemen kiri berikutnya.

### 9. Memasukkan Nilai dari Bagian Kanan

```javascript
else {
  array[sortedIndex] = rightPart[rightArrayIndex];
  rightArrayIndex += 1;
}
```

Jika kondisi sebelumnya tidak terpenuhi, nilai dari `rightPart` dimasukkan ke dalam `array`.

Setelah itu, `rightArrayIndex` ditambah satu.

### 10. Memindahkan `sortedIndex`

```javascript
sortedIndex += 1;
```

Setelah satu nilai dimasukkan ke `array`, `sortedIndex` berpindah ke posisi berikutnya.

Dengan demikian, nilai berikutnya akan ditulis pada index selanjutnya.

### 11. Memasukkan Sisa `leftPart`

```javascript
while (leftArrayIndex < leftPart.length) {
  array[sortedIndex] = leftPart[leftArrayIndex];
  leftArrayIndex += 1;
  sortedIndex += 1;
}
```

Setelah proses perbandingan utama selesai, `leftPart` mungkin masih memiliki elemen yang belum dimasukkan.

Perulangan ini menyalin seluruh elemen yang tersisa dari `leftPart` ke dalam `array`.

### 12. Memasukkan Sisa `rightPart`

```javascript
while (rightArrayIndex < rightPart.length) {
  array[sortedIndex] = rightPart[rightArrayIndex];
  rightArrayIndex += 1;
  sortedIndex += 1;
}
```

Jika elemen yang tersisa berada pada `rightPart`, perulangan ini memasukkannya ke dalam `array`.

Setelah kedua proses tersebut selesai, bagian array yang sedang diproses sudah terurut.

### 13. Array yang Digunakan untuk Pengujian

```javascript
const numbers = [4, 10, 6, 14, 2, 1, 8, 5];
```

Array `numbers` berisi nilai yang belum terurut.

Array ini digunakan untuk melihat hasil kerja `mergeSort()`.

### 14. Menampilkan Kondisi Sebelum Diurutkan

```javascript
console.log('Unsorted array: ');
console.log(numbers);
```

Dua pemanggilan `console.log()` digunakan untuk menampilkan label dan isi array sebelum proses pengurutan dilakukan.

### 15. Menjalankan Merge Sort

```javascript
mergeSort(numbers);
```

Array `numbers` diberikan ke `mergeSort()`.

Function kemudian membagi, mengurutkan, dan menggabungkan kembali nilai-nilai tersebut.

Karena isi array diubah secara langsung, tidak diperlukan assignment seperti:

```javascript
numbers = mergeSort(numbers);
```

### 16. Menampilkan Hasil Pengurutan

```javascript
console.log('Sorted array: ');
console.log(numbers);
```

Setelah `mergeSort(numbers)` selesai, array yang sama ditampilkan kembali.

Nilainya telah berubah menjadi urutan dari yang terkecil ke yang terbesar.

## Method yang Dipakai

- `Math.floor()` digunakan untuk membulatkan hasil pembagian panjang array ke bilangan bulat ke bawah.
- `slice()` digunakan untuk membuat bagian kiri dan kanan dari array sebelum recursive call.
- `console.log()` digunakan untuk menampilkan kondisi array sebelum dan sesudah proses pengurutan.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `mergeSort()` | Menjalankan proses pengurutan menggunakan merge sort |
| `array.length <= 1` | Menjadi base case untuk menghentikan recursion |
| `middlePoint` | Menentukan titik pembagian array |
| `leftPart` | Menyimpan bagian kiri array |
| `rightPart` | Menyimpan bagian kanan array |
| `Math.floor()` | Membulatkan posisi tengah ke bilangan bulat ke bawah |
| `slice()` | Membuat bagian array berdasarkan batas index |
| `leftArrayIndex` | Menunjuk elemen yang sedang diproses pada bagian kiri |
| `rightArrayIndex` | Menunjuk elemen yang sedang diproses pada bagian kanan |
| `sortedIndex` | Menentukan posisi penulisan nilai pada array |
| `while` | Mengulangi proses perbandingan dan penyalinan elemen |
| Recursion | Membagi bagian array sampai mencapai base case |

## Catatan Belajar

- **Merge sort** pada project ini membagi array menjadi bagian yang lebih kecil lalu menggabungkannya kembali dalam urutan yang benar.
- **Base case** `array.length <= 1` menghentikan recursive call.
- **`middlePoint`** menentukan lokasi pembagian array menjadi `leftPart` dan `rightPart`.
- **`slice()`** digunakan untuk memperoleh kedua bagian array tanpa mengubah array yang sedang dibagi pada saat itu.
- **`leftArrayIndex` dan `rightArrayIndex`** menentukan elemen dari masing-masing bagian yang sedang dibandingkan.
- **`sortedIndex`** menentukan posisi pada array yang akan menerima nilai berikutnya.
- **Perulangan pertama** membandingkan nilai dari `leftPart` dan `rightPart`.
- **Dua perulangan terakhir** memasukkan elemen yang masih tersisa setelah salah satu bagian selesai diproses.
- **Array asli** diubah selama proses merge sehingga hasil akhir tersedia pada array yang diberikan ke `mergeSort()`.

## What I Practiced

```text
JavaScript Functions
Recursion
Base Cases
Arrays
Array Indexing
Array Length
Math.floor()
Array slice()
While Loops
Conditional Statements
Array Mutation
Merge Sort
```

---

**Platform:** freeCodeCamp  
**Workshop:** Implement the Merge Sort Algorithm  
**Language:** JavaScript  
**Focus:** Algorithms

---

<p align="center">
  <strong>Algorithms Section — Implement the Merge Sort Algorithm Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
