# Implement the Quicksort Algorithm

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Algorithms-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Algorithms" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Algorithms-4B5563" alt="Algorithms" />
</p>

> **Milestone:** Lab setelah mempelajari Algorithms.

## About

Project ini mengimplementasikan **quicksort** untuk mengurutkan nilai di dalam array dari nilai terkecil ke nilai terbesar.

Function `quicksort()` memilih satu nilai sebagai `pivot`, kemudian membagi elemen lainnya ke dalam array `left` dan `right`. Nilai yang lebih kecil dari `pivot` dimasukkan ke `left`, sedangkan nilai lainnya dimasukkan ke `right`.

Function kemudian memanggil dirinya sendiri untuk mengurutkan `left` dan `right`, lalu menggabungkan kedua hasil tersebut bersama `pivot` menggunakan spread syntax.

## Konsep Utama

- Function
- Parameter
- Array
- Array indexing
- `length`
- Recursion
- Base case
- `Math.floor()`
- Pivot
- `for` loop
- Conditional statement
- `continue`
- `push()`
- Spread syntax
- `return`
- Quicksort

## Struktur Project

```text
quicksort-algorithm/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `quicksort()`

Function utama menerima satu parameter bernama `arr`.

```javascript
function quicksort(arr) {
```

`arr` adalah array yang akan diurutkan.

Berbeda dari beberapa sorting algorithm sebelumnya, function ini membentuk array baru melalui proses recursion dan mengembalikan hasilnya.

### 2. Base Case

```javascript
if (arr.length <= 1) {
  return arr;
}
```

Kondisi ini menjadi base case dari recursion.

Jika `arr` memiliki satu elemen atau tidak memiliki elemen, function langsung mengembalikan array tersebut.

Pada kondisi ini, array tidak perlu dibagi lagi.

### 3. Menentukan Index Tengah

```javascript
let middleIndex = Math.floor(arr.length / 2);
```

`middleIndex` menyimpan index tengah dari array.

Nilainya diperoleh dengan membagi `arr.length` dengan `2`, kemudian membulatkannya ke bawah menggunakan `Math.floor()`.

### 4. Menentukan `pivot`

```javascript
let pivot = arr[middleIndex];
```

Nilai yang berada pada `middleIndex` disimpan di dalam variable `pivot`.

`pivot` digunakan sebagai nilai pembanding untuk membagi elemen lain ke dalam `left` atau `right`.

### 5. Membuat Array `left` dan `right`

```javascript
let left = [];
let right = [];
```

Dua array kosong dibuat untuk menyimpan hasil pembagian.

`left` menerima nilai yang lebih kecil daripada `pivot`.

`right` menerima nilai yang tidak lebih kecil daripada `pivot`.

### 6. Memeriksa Seluruh Elemen

```javascript
for (let i = 0; i < arr.length; i++) {
```

`for` loop memeriksa seluruh elemen dalam `arr`.

Variable `i` digunakan sebagai index untuk mengakses setiap nilai.

### 7. Melewati Posisi `pivot`

```javascript
if (i === middleIndex) continue;
```

Jika `i` sama dengan `middleIndex`, iterasi tersebut dilewati menggunakan `continue`.

Hal ini mencegah nilai `pivot` dimasukkan kembali ke dalam `left` atau `right`.

### 8. Memasukkan Nilai ke `left`

```javascript
if (arr[i] < pivot) {
  left.push(arr[i]);
}
```

Jika nilai pada `arr[i]` lebih kecil daripada `pivot`, nilai tersebut ditambahkan ke `left`.

Method `push()` menambahkan nilai ke bagian akhir array.

### 9. Memasukkan Nilai ke `right`

```javascript
else {
  right.push(arr[i]);
}
```

Jika nilai tidak lebih kecil daripada `pivot`, nilai tersebut dimasukkan ke `right`.

Dengan demikian, setelah perulangan selesai, elemen selain `pivot` sudah terbagi ke dua array.

### 10. Recursive Call dan Penggabungan Hasil

```javascript
return [...quicksort(left), pivot, ...quicksort(right)];
```

`quicksort()` dipanggil kembali untuk `left` dan `right`.

Hasil pengurutan `left` ditempatkan terlebih dahulu, kemudian `pivot`, lalu hasil pengurutan `right`.

Spread syntax:

```javascript
...quicksort(left)
```

dan:

```javascript
...quicksort(right)
```

memasukkan elemen dari hasil recursive call ke dalam array hasil akhir.

### 11. Menjalankan Function

```javascript
console.log(quicksort([10, 5, 2, 9, 6, 1]));
```

Function dipanggil menggunakan array:

```javascript
[10, 5, 2, 9, 6, 1]
```

Pada pemanggilan pertama, `middleIndex` berada pada index `3`, sehingga nilai:

```javascript
9
```

digunakan sebagai `pivot`.

Elemen lain kemudian dibagi ke `left` dan `right`, lalu kedua bagian diproses kembali melalui recursion.

Setelah seluruh proses selesai, function menghasilkan:

```javascript
[1, 2, 5, 6, 9, 10]
```

## Method yang Dipakai

- `Math.floor()` digunakan untuk membulatkan hasil perhitungan index tengah ke bilangan bulat ke bawah.
- `push()` digunakan untuk menambahkan nilai ke array `left` atau `right`.
- `console.log()` digunakan untuk menampilkan hasil pemanggilan `quicksort()`.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `quicksort()` | Menjalankan proses quicksort secara recursive |
| `arr.length <= 1` | Menjadi base case untuk menghentikan recursion |
| `middleIndex` | Menyimpan index tengah array |
| `pivot` | Menyimpan nilai pembanding |
| `left` | Menyimpan nilai yang lebih kecil daripada `pivot` |
| `right` | Menyimpan nilai lainnya |
| `continue` | Melewati iterasi ketika index sedang berada pada posisi `pivot` |
| `push()` | Menambahkan elemen ke `left` atau `right` |
| Recursion | Mengurutkan kembali bagian `left` dan `right` |
| Spread syntax | Menggabungkan hasil recursive call ke array hasil akhir |
| `return` | Mengembalikan array yang telah diurutkan |

## Catatan Belajar

- **Quicksort** pada project ini menggunakan nilai tengah array sebagai `pivot`.
- **Base case** `arr.length <= 1` menghentikan recursive call ketika array tidak perlu dibagi lagi.
- **`middleIndex`** menentukan posisi elemen yang digunakan sebagai `pivot`.
- **`left`** menerima nilai yang lebih kecil daripada `pivot`.
- **`right`** menerima nilai yang tidak lebih kecil daripada `pivot`.
- **`continue`** mencegah elemen `pivot` diproses kembali di dalam `for` loop.
- **`push()`** digunakan untuk membangun array `left` dan `right`.
- **Recursion** digunakan untuk menjalankan quicksort kembali pada kedua bagian array.
- **Spread syntax** digunakan untuk menggabungkan hasil sorting bagian kiri, `pivot`, dan bagian kanan.
- **`quicksort()`** mengembalikan array hasil baru dari proses penggabungan tersebut.

## What I Practiced

```text
JavaScript Functions
Function Parameters
Arrays
Array Indexing
Array Length
Recursion
Base Cases
Math.floor()
Pivot Selection
For Loops
Conditional Statements
Continue Statements
Array push()
Spread Syntax
Return Values
Quicksort
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement the Quicksort Algorithm  
**Language:** JavaScript  
**Focus:** Algorithms

---

<p align="center">
  <strong>Algorithms Section — Implement the Quicksort Algorithm Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
