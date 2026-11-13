# Implement the Binary Search Algorithm

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Algorithms-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Algorithms" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Workshop-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Workshop" />
  <img src="https://img.shields.io/badge/Topic-Algorithms-4B5563" alt="Algorithms" />
</p>

> **Milestone:** Workshop setelah mempelajari Algorithms.

## About

Project ini mengimplementasikan **binary search** untuk mencari sebuah nilai di dalam array yang sudah terurut.

Function `binarySearch()` menerima array yang akan dicari dan nilai target. Proses pencarian dilakukan dengan menentukan posisi tengah dari rentang pencarian, kemudian mempersempit rentang ke bagian kiri atau kanan sampai nilai ditemukan atau tidak ada lagi bagian array yang dapat diperiksa.

Selain mengembalikan lokasi nilai ketika ditemukan, program juga menyimpan nilai-nilai tengah yang dilewati selama proses pencarian melalui array `pathToTarget`.

## Konsep Utama

- Function
- Parameter
- Array
- Array indexing
- `length`
- `while`
- Binary search
- `Math.floor()`
- `push()`
- Conditional statement
- Template literal
- `return`

## Struktur Project

```text
binary-search-algorithm/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `binarySearch()`

Function utama didefinisikan dengan dua parameter:

```javascript
function binarySearch(searchList, value) {
```

`searchList` adalah array yang digunakan sebagai tempat pencarian.

`value` adalah nilai yang ingin ditemukan di dalam `searchList`.

Function kemudian mengembalikan hasil pencarian dalam bentuk array.

### 2. Array `pathToTarget`

```javascript
const pathToTarget = [];
```

`pathToTarget` digunakan untuk menyimpan setiap nilai tengah yang diperiksa selama proses binary search.

Setiap kali nilai tengah baru ditentukan, nilai tersebut dimasukkan ke dalam array menggunakan `push()`.

### 3. Menentukan Batas Pencarian

```javascript
let low = 0;
let high = searchList.length - 1;
```

`low` menyimpan index paling rendah dari bagian array yang sedang diperiksa.

`high` menyimpan index paling tinggi.

Pada awal pencarian, `low` dimulai dari index `0`, sedangkan `high` berada pada index terakhir array.

### 4. Perulangan Pencarian

```javascript
while (low <= high) {
```

Perulangan terus berjalan selama nilai `low` belum melewati `high`.

Kondisi ini berarti masih terdapat bagian array yang dapat diperiksa.

Jika `low` sudah lebih besar daripada `high`, proses pencarian berhenti karena target tidak ditemukan.

### 5. Menentukan Posisi Tengah

```javascript
const mid = Math.floor((low + high) / 2);
const valueAtMiddle = searchList[mid];
```

`mid` merupakan index tengah dari rentang pencarian saat ini.

`Math.floor()` digunakan agar hasil pembagian menjadi bilangan bulat ke bawah sehingga dapat digunakan sebagai index array.

Setelah index tengah diperoleh, nilai pada posisi tersebut disimpan di dalam `valueAtMiddle`.

### 6. Menyimpan Jalur Pencarian

```javascript
pathToTarget.push(valueAtMiddle);
```

Setiap nilai tengah yang diperiksa dimasukkan ke dalam `pathToTarget`.

Dengan demikian, array tersebut menyimpan urutan nilai yang dilewati sampai target ditemukan.

### 7. Ketika Nilai Ditemukan

```javascript
if (value === valueAtMiddle) {
  return [pathToTarget, `Value found at index ${mid}`];
}
```

Jika `value` sama dengan `valueAtMiddle`, pencarian selesai.

Function mengembalikan:

- `pathToTarget`, yang berisi nilai-nilai yang telah diperiksa.
- String yang menunjukkan index tempat target ditemukan.

Template literal digunakan untuk memasukkan nilai `mid` ke dalam pesan hasil.

### 8. Mencari di Bagian Kanan

```javascript
else if (value > valueAtMiddle) {
  low = mid + 1;
}
```

Jika target lebih besar daripada nilai tengah, bagian array dari `low` sampai `mid` tidak perlu diperiksa lagi.

Nilai `low` kemudian dipindahkan ke satu posisi setelah `mid`.

Pencarian berikutnya hanya dilakukan pada bagian kanan array.

### 9. Mencari di Bagian Kiri

```javascript
else {
  high = mid - 1;
}
```

Jika target lebih kecil daripada nilai tengah, bagian array dari `mid` sampai `high` tidak perlu diperiksa lagi.

Nilai `high` dipindahkan ke satu posisi sebelum `mid`.

Pencarian berikutnya hanya dilakukan pada bagian kiri array.

### 10. Nilai Tidak Ditemukan

```javascript
return [[], "Value not found"];
```

Jika perulangan selesai tanpa menemukan target, function mengembalikan array kosong dan pesan `"Value not found"`.

Pada kondisi ini, `pathToTarget` yang telah terbentuk selama pencarian tidak digunakan sebagai nilai return.

### 11. Pengujian Function

```javascript
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 9], 4));
console.log(binarySearch([1, 3, 5, 9, 14, 22], 10));
```

Function diuji menggunakan tiga pemanggilan.

Pengujian pertama dan kedua menggunakan nilai yang tersedia di dalam array.

Pengujian ketiga mencari nilai `10` pada array yang tidak memiliki nilai tersebut, sehingga menghasilkan kondisi `"Value not found"`.

## Method yang Dipakai

- `Math.floor()` digunakan untuk membulatkan hasil perhitungan index tengah ke bilangan bulat ke bawah.
- `push()` digunakan untuk menambahkan nilai tengah yang sedang diperiksa ke dalam `pathToTarget`.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `binarySearch()` | Menjalankan proses pencarian nilai menggunakan binary search |
| `low` | Menyimpan batas bawah rentang pencarian |
| `high` | Menyimpan batas atas rentang pencarian |
| `mid` | Menyimpan index tengah rentang pencarian |
| `valueAtMiddle` | Menyimpan nilai yang berada pada index tengah |
| `pathToTarget` | Menyimpan nilai tengah yang dilewati selama pencarian |
| `Math.floor()` | Membuat hasil perhitungan index tengah menjadi bilangan bulat |
| `push()` | Menambahkan nilai ke akhir array |
| `while` | Mengulangi pencarian selama rentang pencarian masih tersedia |
| `return` | Mengakhiri function dan mengembalikan hasil pencarian |

## Catatan Belajar

- **Binary search** mencari nilai dengan terus mempersempit bagian array yang masih mungkin berisi target.
- **`low` dan `high`** menentukan batas array yang sedang diperiksa.
- **`mid`** digunakan untuk memperoleh posisi tengah dari rentang pencarian.
- **`valueAtMiddle`** adalah nilai array pada posisi `mid`.
- **`pathToTarget`** mencatat nilai tengah yang diperiksa selama proses pencarian.
- **`low = mid + 1`** digunakan ketika target lebih besar daripada nilai tengah.
- **`high = mid - 1`** digunakan ketika target lebih kecil daripada nilai tengah.
- **`low <= high`** memastikan perulangan hanya berjalan selama masih terdapat rentang yang dapat diperiksa.

## What I Practiced

```text
JavaScript Functions
Function Parameters
Arrays
Array Indexing
Array Length
While Loops
Binary Search
Math.floor()
Array push()
Conditional Statements
Template Literals
Return Values
```

---

**Platform:** freeCodeCamp  
**Workshop:** Implement the Binary Search Algorithm  
**Language:** JavaScript  
**Focus:** Algorithms

---

<p align="center">
  <strong>Algorithms Section — Implement the Binary Search Algorithm Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
