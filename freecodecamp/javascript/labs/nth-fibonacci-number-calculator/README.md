# Build a Nth Fibonacci Number Calculator

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Dynamic%20Programming-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Dynamic Programming" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Dynamic%20Programming-4B5563" alt="Dynamic Programming" />
</p>

> **Milestone:** Lab setelah mempelajari Dynamic Programming.

## About

Project ini membuat calculator untuk memperoleh nilai Fibonacci ke-`n` menggunakan function `fibonacci()`.

Function memvalidasi input terlebih dahulu, kemudian membangun deret Fibonacci secara bertahap di dalam array `sequence`. Setiap nilai baru diperoleh dari penjumlahan dua nilai sebelumnya.

Setelah proses selesai, function mengembalikan nilai pada index `n` dari `sequence`.

## Konsep Utama

- Arrow function
- Function parameter
- Input validation
- `Number.isInteger()`
- Conditional statement
- Array
- Array indexing
- `for` loop
- `push()`
- Sequence building
- Early return
- `return`
- `console.log()`
- Fibonacci sequence

## Struktur Project

```text
nth-fibonacci-number-calculator/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `fibonacci()`

Function dibuat menggunakan arrow function dan menerima satu parameter bernama `n`.

```javascript
const fibonacci = (n) => {
```

`n` menentukan posisi Fibonacci yang ingin diperoleh.

### 2. Validasi Input

```javascript
if (!Number.isInteger(n) || n < 0) {
  return "Mohon mengisi angka positif & bulat!"
}
```

`Number.isInteger(n)` digunakan untuk memeriksa apakah `n` merupakan integer.

Operator `!` membalik hasil pemeriksaan tersebut.

Kondisi juga memeriksa:

```javascript
n < 0
```

Jika salah satu kondisi terpenuhi, function langsung mengembalikan:

```text
Mohon mengisi angka positif & bulat!
```

Karena `return` dijalankan pada tahap ini, proses berikutnya tidak dilakukan untuk input tersebut.

### 3. Membuat Sequence Awal

```javascript
let sequence = [0, 1];
```

Array `sequence` menyimpan nilai Fibonacci yang dibangun selama proses.

Dua nilai awal yang disimpan adalah:

```javascript
[0, 1]
```

Nilai pada index `0` adalah `0`, sedangkan nilai pada index `1` adalah `1`.

### 4. Menangani Nilai `0` dan `1`

```javascript
if (n <= 1) return n;
```

Jika `n` bernilai `0` atau `1`, function langsung mengembalikan nilai `n`.

Dengan demikian, perulangan tidak perlu dijalankan untuk dua posisi awal tersebut.

### 5. Memulai Perulangan

```javascript
for (let i = 2; i <= n; i++) {
```

`for` loop dimulai dari index `2`.

Hal ini karena nilai pada index `0` dan `1` sudah tersedia di dalam `sequence`.

Perulangan terus berjalan selama:

```javascript
i <= n
```

sehingga nilai pada index `n` ikut dihitung.

### 6. Menghitung Nilai Fibonacci Berikutnya

```javascript
sequence.push(sequence[i - 1] + sequence[i - 2]);
```

Nilai baru diperoleh dari penjumlahan dua elemen sebelumnya:

```javascript
sequence[i - 1]
```

dan:

```javascript
sequence[i - 2]
```

Hasil penjumlahan tersebut ditambahkan ke bagian akhir `sequence` menggunakan `push()`.

### 7. Membentuk Deret Secara Bertahap

Pada setiap iterasi, array `sequence` bertambah satu elemen.

Sebagai contoh dari struktur kode:

```javascript
sequence[i - 1] + sequence[i - 2]
```

selalu mengambil dua nilai yang sudah tersedia untuk membentuk nilai berikutnya.

Proses tersebut berlanjut sampai index `n` selesai dibuat.

### 8. Menampilkan Sequence

```javascript
console.log(sequence);
```

Setelah perulangan selesai, seluruh isi `sequence` ditampilkan ke console.

Log ini hanya dijalankan untuk input yang melewati validasi dan memiliki nilai lebih besar dari `1`.

### 9. Mengembalikan Nilai Fibonacci ke-`n`

```javascript
return sequence[n];
```

Function mengembalikan elemen pada index `n`.

Karena array dibangun mulai dari index `0`, nilai yang dikembalikan langsung diambil menggunakan:

```javascript
sequence[n]
```

### 10. Menjalankan Function

```javascript
console.log(fibonacci(-1));
```

Function dipanggil menggunakan nilai:

```javascript
-1
```

Nilai ini memenuhi kondisi:

```javascript
n < 0
```

sehingga function langsung mengembalikan:

```text
Mohon mengisi angka positif & bulat!
```

Perulangan Fibonacci tidak dijalankan pada pemanggilan tersebut.

## Method yang Dipakai

- `Number.isInteger()` digunakan untuk memeriksa apakah input merupakan integer.
- `push()` digunakan untuk menambahkan nilai Fibonacci baru ke dalam `sequence`.
- `console.log()` digunakan untuk menampilkan sequence dan hasil pemanggilan function.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `fibonacci()` | Menghitung nilai Fibonacci berdasarkan index `n` |
| `n` | Menentukan posisi Fibonacci yang ingin diperoleh |
| `Number.isInteger()` | Memeriksa apakah input berupa integer |
| `n < 0` | Menolak nilai negatif |
| `sequence` | Menyimpan deret Fibonacci yang sedang dibangun |
| `n <= 1` | Menangani dua nilai awal tanpa perulangan |
| `i` | Menentukan index yang sedang dihitung |
| `sequence[i - 1]` | Mengambil nilai sebelumnya |
| `sequence[i - 2]` | Mengambil dua posisi sebelumnya |
| `push()` | Menambahkan nilai Fibonacci baru |
| `sequence[n]` | Mengambil hasil pada index yang diminta |
| Early `return` | Menghentikan function ketika kondisi tertentu terpenuhi |

## Catatan Belajar

- **`fibonacci()`** dibuat sebagai arrow function dengan satu parameter `n`.
- **Validasi input** dilakukan sebelum sequence diproses.
- **`Number.isInteger()`** memastikan input merupakan integer.
- **Nilai negatif** langsung menghasilkan pesan error melalui early `return`.
- **`sequence`** dimulai dengan `[0, 1]`.
- **`n <= 1`** membuat function langsung mengembalikan `0` atau `1`.
- **Perulangan dimulai dari `2`** karena dua nilai awal sudah tersedia.
- **Setiap nilai baru** diperoleh dari penjumlahan dua nilai sebelumnya.
- **`push()`** menambahkan hasil perhitungan ke `sequence`.
- **`sequence[n]`** menjadi nilai akhir yang dikembalikan.
- **Pemanggilan `fibonacci(-1)`** berhenti pada tahap validasi dan tidak menjalankan proses pembentukan sequence.

## What I Practiced

```text
JavaScript Arrow Functions
Function Parameters
Input Validation
Number.isInteger()
Conditional Statements
Arrays
Array Indexing
For Loops
Array push()
Sequence Building
Early Returns
Return Values
Console Output
Fibonacci Sequence
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Nth Fibonacci Number Calculator  
**Language:** JavaScript  
**Focus:** Dynamic Programming

---

<p align="center">
  <strong>Dynamic Programming Section — Build a Nth Fibonacci Number Calculator Completed</strong><br>
  <sub>Next stop: continue
