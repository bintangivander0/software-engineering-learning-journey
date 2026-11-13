# Implement the N-Queens Algorithm

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Graphs%20and%20Trees-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Graphs and Trees" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Graphs%20and%20Trees-4B5563" alt="Graphs and Trees" />
</p>

> **Milestone:** Lab setelah mempelajari Graphs and Trees.

## About

Project ini mengimplementasikan pencarian solusi untuk **N-Queens problem** menggunakan function recursive `dfsNQueens()`.

Function mencoba menempatkan satu ratu pada setiap baris. Untuk setiap posisi yang dicoba, program memeriksa apakah kolom tersebut bertabrakan secara vertikal atau diagonal dengan ratu yang telah ditempatkan sebelumnya.

Jika posisi aman, kolom tersebut ditambahkan ke `formasiRatu`, function memanggil dirinya sendiri untuk memproses baris berikutnya, lalu posisi tersebut dihapus kembali menggunakan `pop()` setelah recursive call selesai. Setiap formasi lengkap disalin dan disimpan ke dalam `semuaSolusi`.

## Konsep Utama

- Function
- Default parameter
- Recursion
- Depth-first search
- Array
- Array indexing
- `for` loop
- Conditional statement
- Boolean
- `Math.abs()`
- `push()`
- `pop()`
- Spread syntax
- Template literal
- `repeat()`
- `break`
- State tracking
- Backtracking
- `return`

## Struktur Project

```text
n-queens-algorithm/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `dfsNQueens()`

Function utama menerima empat parameter.

```javascript
function dfsNQueens (n, barisKini = 0, formasiRatu = [], semuaSolusi = []) {
```

`n` menentukan ukuran masalah yang diproses.

`barisKini` menyimpan baris yang sedang diperiksa dan memiliki default value `0`.

`formasiRatu` menyimpan posisi kolom ratu yang telah ditempatkan.

`semuaSolusi` menyimpan seluruh formasi lengkap yang ditemukan.

### 2. Membuat Indentasi Log

```javascript
let spasi = "  ".repeat(barisKini);
```

Method `repeat()` digunakan untuk membuat spasi berdasarkan nilai `barisKini`.

Nilai ini kemudian digunakan pada berbagai `console.log()` agar keluaran proses recursive memiliki indentasi sesuai kedalaman pemanggilan function.

### 3. Memvalidasi Nilai `n`

```javascript
if (n < 1) return [];
```

Jika `n` lebih kecil dari `1`, function langsung mengembalikan array kosong.

Tidak ada proses pencarian yang dilanjutkan pada kondisi ini.

### 4. Kondisi Formasi Lengkap

```javascript
if (barisKini === n) {
```

Ketika `barisKini` sama dengan `n`, berarti proses telah berhasil melewati seluruh baris.

Pada kondisi tersebut, formasi yang sedang tersimpan dianggap lengkap.

### 5. Menampilkan Formasi yang Ditemukan

```javascript
console.log(`${spasi} GOAL! Formasi lengkap ditemukan : ${formasiRatu}`);
```

Template literal digunakan untuk menampilkan pesan bahwa formasi lengkap telah ditemukan.

`spasi` memberikan indentasi, sedangkan `formasiRatu` menampilkan susunan kolom yang sedang tersimpan.

### 6. Menyimpan Salinan Formasi

```javascript
semuaSolusi.push([...formasiRatu]);
```

Spread syntax:

```javascript
[...formasiRatu]
```

membuat array baru berdasarkan isi `formasiRatu`.

Salinan tersebut kemudian ditambahkan ke `semuaSolusi` menggunakan `push()`.

Dengan demikian, solusi yang sudah ditemukan tetap tersimpan walaupun `formasiRatu` nantinya kembali berubah selama proses recursive.

### 7. Mengembalikan Hasil pada Kondisi Goal

```javascript
return semuaSolusi;
```

Setelah solusi lengkap disimpan, function mengembalikan `semuaSolusi` dari pemanggilan recursive tersebut.

### 8. Menampilkan Baris yang Sedang Diproses

```javascript
console.log(`${spasi} → MASUK ke baris ${barisKini} | Formasi saat ini: ${formasiRatu}`);
```

Log ini menampilkan:

- baris yang sedang diproses;
- formasi ratu yang telah tersimpan saat itu.

Informasi tersebut digunakan untuk memperlihatkan proses pencarian selama function berjalan.

### 9. Mencoba Setiap Kolom

```javascript
for (let kolomKini = 0; kolomKini < n; kolomKini++) {
```

`for` loop mencoba setiap kolom pada `barisKini`.

`kolomKini` dimulai dari `0` dan terus bertambah sampai sebelum `n`.

Setiap nilai `kolomKini` menjadi kandidat posisi ratu pada baris tersebut.

### 10. Menampilkan Posisi yang Sedang Dicoba

```javascript
console.log(`${spasi}   ? Mencoba menaruh Ratu di Baris ${barisKini}, Kolom ${kolomKini}`)
```

Program menampilkan baris dan kolom yang sedang diperiksa sebelum melakukan pengecekan bentrokan.

### 11. Menganggap Posisi Aman di Awal

```javascript
let apakahAman = true;
```

Setiap kandidat kolom pada awalnya dianggap aman.

Nilai ini akan berubah menjadi `false` jika ditemukan bentrokan dengan ratu pada baris sebelumnya.

### 12. Memeriksa Ratu yang Sudah Ditempatkan

```javascript
for (let barisLama = 0; barisLama < barisKini; barisLama++) {
```

Inner loop memeriksa setiap baris sebelumnya.

Karena satu ratu telah ditempatkan pada setiap baris yang sudah diproses, program dapat membaca posisi kolom lama dari `formasiRatu`.

### 13. Mengambil Kolom Ratu Sebelumnya

```javascript
let kolomLama = formasiRatu[barisLama];
```

`kolomLama` menyimpan posisi kolom ratu pada `barisLama`.

Nilai ini digunakan untuk dibandingkan dengan `kolomKini`.

### 14. Memeriksa Bentrokan Vertikal

```javascript
let bentrokAtasBawah = (kolomLama === kolomKini);
```

Jika `kolomLama` sama dengan `kolomKini`, dua ratu berada pada kolom yang sama.

Hasil pengecekan disimpan pada `bentrokAtasBawah`.

### 15. Menghitung Jarak Baris

```javascript
let jarakBaris = barisKini - barisLama;
```

`jarakBaris` menyimpan selisih antara baris kandidat saat ini dan baris ratu yang sedang dibandingkan.

### 16. Menghitung Jarak Kolom

```javascript
let jarakKolom = Math.abs(kolomKini - kolomLama);
```

`Math.abs()` digunakan agar selisih kolom selalu menjadi nilai non-negatif.

`jarakKolom` kemudian dibandingkan dengan `jarakBaris`.

### 17. Memeriksa Bentrokan Diagonal

```javascript
let bentrokDiagonal = (jarakBaris === jarakKolom);
```

Jika jarak baris sama dengan jarak kolom, posisi kandidat berada pada diagonal yang sama dengan ratu sebelumnya.

Hasil pengecekan tersebut disimpan di `bentrokDiagonal`.

### 18. Menangani Bentrokan Vertikal

```javascript
if (bentrokAtasBawah) {
  console.log(`${spasi}    ❌ Bentrok VERTIKAL dengan Ratu di Baris ${barisLama}, Kolom ${kolomLama}`);
  apakahAman = false;
  break;
}
```

Jika terjadi bentrokan vertikal:

- pesan bentrokan ditampilkan;
- `apakahAman` diubah menjadi `false`;
- `break` menghentikan pemeriksaan terhadap ratu sebelumnya untuk kandidat tersebut.

### 19. Menangani Bentrokan Diagonal

```javascript
if (bentrokDiagonal) {
  console.log(`${spasi}    ❌ Bentrok DIAGONAL dengan Ratu di Baris ${barisLama}, Kolom ${kolomLama}`);
  apakahAman = false;
  break;
}
```

Jika kandidat berada pada diagonal yang sama dengan ratu sebelumnya, posisi tersebut juga dianggap tidak aman.

`apakahAman` diubah menjadi `false`, kemudian `break` menghentikan inner loop.

### 20. Menambahkan Posisi yang Aman

```javascript
if (apakahAman) {
  formasiRatu.push(kolomKini);
```

Jika seluruh pengecekan selesai tanpa bentrokan, `kolomKini` ditambahkan ke `formasiRatu`.

Index array menunjukkan baris, sedangkan nilai yang tersimpan menunjukkan kolom ratu pada baris tersebut.

### 21. Recursive Call

```javascript
dfsNQueens(n, barisKini + 1, formasiRatu, semuaSolusi);
```

Function memanggil dirinya sendiri untuk memproses baris berikutnya.

`barisKini + 1` membuat pencarian bergerak ke baris selanjutnya.

`formasiRatu` dan `semuaSolusi` diteruskan ke recursive call agar state pencarian tetap tersedia.

### 22. Menghapus Posisi Setelah Recursive Call

```javascript
formasiRatu.pop();
```

Setelah recursive call selesai, `pop()` menghapus posisi ratu terakhir dari `formasiRatu`.

Hal ini mengembalikan state ke kondisi sebelum kandidat tersebut dipilih.

Setelah itu, loop dapat mencoba nilai `kolomKini` berikutnya pada baris yang sama.

### 23. Mengembalikan Seluruh Solusi

```javascript
return semuaSolusi;
```

Setelah seluruh kandidat kolom pada suatu pemanggilan selesai diproses, function mengembalikan `semuaSolusi`.

Array tersebut terus digunakan bersama selama rangkaian recursive call.

### 24. Menjalankan Function

```javascript
console.log(dfsNQueens(4));
```

Function dijalankan menggunakan:

```javascript
4
```

Artinya, program mencari formasi untuk empat baris dan empat kemungkinan kolom.

Setiap solusi direpresentasikan sebagai array berisi posisi kolom untuk setiap baris.

Untuk input tersebut, array solusi yang dikumpulkan adalah:

```javascript
[
  [1, 3, 0, 2],
  [2, 0, 3, 1]
]
```

## Method yang Dipakai

- `repeat()` digunakan untuk membuat indentasi log berdasarkan `barisKini`.
- `push()` digunakan untuk menambahkan posisi ratu ke `formasiRatu` dan menyimpan solusi ke `semuaSolusi`.
- `pop()` digunakan untuk menghapus posisi ratu terakhir setelah recursive call selesai.
- `Math.abs()` digunakan untuk mendapatkan jarak kolom sebagai nilai non-negatif.
- `console.log()` digunakan untuk menampilkan proses pencarian dan hasil yang ditemukan.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `dfsNQueens()` | Menjalankan proses pencarian formasi ratu |
| `n` | Menentukan jumlah baris dan kemungkinan kolom |
| `barisKini` | Menyimpan baris yang sedang diproses |
| `formasiRatu` | Menyimpan kolom ratu yang sudah dipilih |
| `semuaSolusi` | Menyimpan seluruh formasi lengkap |
| `kolomKini` | Menentukan kandidat kolom pada baris saat ini |
| `kolomLama` | Menyimpan kolom ratu pada baris sebelumnya |
| `bentrokAtasBawah` | Menentukan apakah dua ratu berada pada kolom yang sama |
| `jarakBaris` | Menyimpan selisih baris |
| `jarakKolom` | Menyimpan selisih kolom |
| `bentrokDiagonal` | Menentukan apakah dua ratu berada pada diagonal yang sama |
| `apakahAman` | Menyimpan status keamanan kandidat |
| `push()` | Menambahkan kandidat atau solusi |
| `pop()` | Mengembalikan state setelah recursive call |
| Recursion | Memproses baris berikutnya |
| `return semuaSolusi` | Mengembalikan seluruh solusi yang ditemukan |

## Catatan Belajar

- **`formasiRatu`** menggunakan posisi array sebagai baris dan nilai di dalamnya sebagai kolom ratu.
- **`barisKini === n`** menandakan bahwa formasi telah mencapai seluruh baris.
- **Spread syntax** digunakan untuk menyimpan salinan `formasiRatu` ke `semuaSolusi`.
- **`kolomLama === kolomKini`** mendeteksi bentrokan pada kolom yang sama.
- **`jarakBaris === jarakKolom`** mendeteksi bentrokan diagonal.
- **`apakahAman`** menentukan apakah kandidat boleh ditambahkan ke formasi.
- **`push()`** menambahkan kandidat sebelum recursive call.
- **Recursive call** melanjutkan pencarian ke `barisKini + 1`.
- **`pop()`** menghapus kandidat terakhir setelah recursive call selesai sehingga kandidat berikutnya dapat dicoba.
- **`break`** menghentikan pemeriksaan kandidat segera setelah bentrokan ditemukan.
- **`semuaSolusi`** menyimpan setiap formasi lengkap yang berhasil ditemukan.

## What I Practiced

```text
JavaScript Functions
Default Parameters
Depth-First Search
Recursion
Backtracking
Arrays
Array Indexing
For Loops
Nested Loops
Conditional Statements
Boolean State
Math.abs()
String repeat()
Array push()
Array pop()
Spread Syntax
Template Literals
Break Statements
State Tracking
Return Values
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement the N-Queens Algorithm  
**Language:** JavaScript  
**Focus:** Graphs and Trees

---

<p align="center">
  <strong>Graphs and Trees Section — Implement the N-Queens Algorithm Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
