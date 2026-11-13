# Implement a Breadth-First Search Algorithm

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Graphs%20and%20Trees-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000"" alt="JavaScript Graphs and Trees" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Workshop-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Workshop" />
  <img src="https://img.shields.io/badge/Topic-Graphs%20and%20Trees-4B5563" alt="Graphs and Trees" />
</p>

> **Milestone:** Workshop setelah mempelajari Graphs and Trees.

## About

Project ini menggunakan pendekatan **breadth-first search** dengan queue untuk menghasilkan kombinasi tanda kurung yang valid berdasarkan jumlah pasangan yang diberikan.

Function `genParentheses()` memulai proses dari string kosong, kemudian menyimpan state yang perlu diproses di dalam `queue`. Setiap state berisi string saat ini, jumlah opening parenthesis yang sudah digunakan, dan jumlah closing parenthesis yang sudah digunakan.

State diproses satu per satu menggunakan `shift()`. State baru kemudian ditambahkan ke bagian akhir queue menggunakan `push()` sampai panjang string mencapai jumlah karakter yang dibutuhkan.

## Konsep Utama

- Function
- Parameter
- Breadth-first search
- Queue
- Array
- Nested array
- Array destructuring
- `Number.isInteger()`
- Validation
- `while` loop
- `shift()`
- `push()`
- Conditional statement
- String concatenation
- State tracking
- `length`
- `return`

## Struktur Project

```text
breadth-first-search-algorithm/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `genParentheses()`

Function utama menerima satu parameter bernama `pairs`.

```javascript
function genParentheses(pairs) {
```

`pairs` menentukan jumlah pasangan opening parenthesis dan closing parenthesis yang perlu digunakan untuk membentuk hasil.

### 2. Memvalidasi Integer

```javascript
if (!Number.isInteger(pairs)) {
  return 'The number of pairs should be an integer';
}
```

`Number.isInteger()` digunakan untuk memeriksa apakah `pairs` merupakan integer.

Jika bukan integer, function langsung berhenti dan mengembalikan:

```text
The number of pairs should be an integer
```

### 3. Memvalidasi Nilai Minimum

```javascript
if (pairs < 1) {
  return 'The number of pairs should be at least 1';
}
```

Setelah memastikan nilai berupa integer, function memeriksa apakah `pairs` setidaknya bernilai `1`.

Jika nilainya kurang dari `1`, function mengembalikan pesan:

```text
The number of pairs should be at least 1
```

### 4. Membuat Queue Awal

```javascript
let queue = [['', 0, 0]];
```

`queue` menyimpan state yang masih perlu diproses.

State awal berisi:

```javascript
['', 0, 0]
```

Tiga nilai tersebut adalah:

- string yang sedang dibentuk;
- jumlah opening parenthesis yang sudah digunakan;
- jumlah closing parenthesis yang sudah digunakan.

Pada awal proses, string masih kosong dan belum ada parenthesis yang digunakan.

### 5. Membuat Array `result`

```javascript
let result = [];
```

`result` digunakan untuk menyimpan string yang sudah mencapai kondisi lengkap.

String dimasukkan ke `result` setelah panjangnya mencapai `2 * pairs`.

### 6. Memproses Queue

```javascript
while (queue.length > 0) {
```

`while` loop terus berjalan selama `queue` masih memiliki state yang perlu diproses.

Ketika `queue` menjadi kosong, tidak ada state lain yang perlu diperiksa.

### 7. Mengambil State Pertama dari Queue

```javascript
let [current, opensUsed, closesUsed] = queue.shift();
```

`shift()` mengambil dan menghapus elemen pertama dari `queue`.

Array destructuring kemudian memisahkan state tersebut menjadi tiga variable:

- `current`
- `opensUsed`
- `closesUsed`

`current` menyimpan string yang sedang dibentuk.

`opensUsed` menyimpan jumlah opening parenthesis yang sudah digunakan.

`closesUsed` menyimpan jumlah closing parenthesis yang sudah digunakan.

### 8. Memeriksa Apakah String Sudah Lengkap

```javascript
if (current.length === 2 * pairs) {
  result.push(current);
}
```

Satu pasangan parenthesis memiliki dua karakter.

Karena itu, string lengkap memiliki panjang:

```javascript
2 * pairs
```

Jika `current` sudah mencapai panjang tersebut, string ditambahkan ke `result`.

### 9. Menambahkan Opening Parenthesis

```javascript
if (opensUsed < pairs) {
  queue.push([current + '(', opensUsed + 1, closesUsed]);
}
```

Opening parenthesis hanya dapat ditambahkan jika jumlah yang sudah digunakan masih lebih kecil daripada `pairs`.

State baru kemudian ditambahkan ke bagian akhir `queue`.

State tersebut berisi:

- `current + '('`
- `opensUsed + 1`
- `closesUsed`

Jumlah closing parenthesis tidak berubah karena pada langkah ini hanya opening parenthesis yang ditambahkan.

### 10. Menambahkan Closing Parenthesis

```javascript
if (closesUsed < opensUsed) {
  queue.push([current + ')', opensUsed, closesUsed + 1]);
}
```

Closing parenthesis hanya ditambahkan jika jumlah closing parenthesis yang sudah digunakan masih lebih sedikit daripada opening parenthesis.

State baru dimasukkan ke bagian akhir `queue` dengan:

- string yang ditambahkan `')'`;
- jumlah opening parenthesis yang tetap;
- jumlah closing parenthesis yang bertambah satu.

### 11. Queue dan Breadth-First Processing

State diambil menggunakan:

```javascript
queue.shift();
```

sedangkan state baru ditambahkan menggunakan:

```javascript
queue.push(...);
```

Dengan susunan tersebut, state yang lebih dahulu masuk ke queue diproses lebih dahulu.

Setiap state menghasilkan kemungkinan state berikutnya, dan state-state tersebut ditempatkan di bagian akhir queue untuk diproses pada iterasi selanjutnya.

### 12. Mengembalikan Hasil

```javascript
return result;
```

Setelah queue kosong dan seluruh state selesai diproses, function mengembalikan `result`.

Array ini berisi seluruh string yang berhasil mencapai panjang lengkap berdasarkan aturan yang digunakan oleh function.

### 13. Pengujian dengan Dua Pasangan

```javascript
console.log(genParentheses(2));
```

Function pertama kali diuji menggunakan:

```javascript
2
```

Panjang setiap hasil lengkap harus menjadi:

```javascript
2 * 2
```

atau empat karakter.

Hasil yang terbentuk adalah:

```javascript
["(())", "()()"]
```

### 14. Pengujian dengan Tiga Pasangan

```javascript
console.log(genParentheses(3));
```

Function kemudian diuji menggunakan:

```javascript
3
```

Setiap hasil lengkap memiliki panjang enam karakter.

Proses queue terus membentuk state baru sampai seluruh kombinasi yang memenuhi kondisi function selesai diproses.

Hasil yang terbentuk adalah:

```javascript
["((()))", "(()())", "(())()", "()(())", "()()()"]
```

## Method yang Dipakai

- `Number.isInteger()` digunakan untuk memeriksa apakah `pairs` merupakan integer.
- `shift()` digunakan untuk mengambil sekaligus menghapus state pertama dari `queue`.
- `push()` digunakan untuk menambahkan state baru ke bagian akhir `queue` dan menambahkan hasil lengkap ke `result`.
- `console.log()` digunakan untuk menampilkan hasil pemanggilan function.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `genParentheses()` | Menghasilkan kombinasi parenthesis berdasarkan jumlah pasangan |
| `pairs` | Menentukan jumlah pasangan parenthesis |
| `queue` | Menyimpan state yang belum diproses |
| `result` | Menyimpan string yang sudah lengkap |
| `current` | Menyimpan string pada state saat ini |
| `opensUsed` | Menyimpan jumlah opening parenthesis yang sudah digunakan |
| `closesUsed` | Menyimpan jumlah closing parenthesis yang sudah digunakan |
| `Number.isInteger()` | Memvalidasi bahwa input berupa integer |
| `shift()` | Mengambil state pertama dari queue |
| `push()` | Menambahkan state baru atau hasil |
| `current.length === 2 * pairs` | Memeriksa apakah string sudah lengkap |
| `opensUsed < pairs` | Menentukan apakah opening parenthesis masih boleh ditambahkan |
| `closesUsed < opensUsed` | Menentukan apakah closing parenthesis boleh ditambahkan |
| `return result` | Mengembalikan seluruh hasil yang telah dibuat |

## Catatan Belajar

- **Queue** menyimpan state yang masih menunggu untuk diproses.
- **`shift()`** mengambil state dari bagian awal queue.
- **`push()`** menambahkan state baru ke bagian akhir queue.
- **Breadth-first processing** pada kode ini muncul dari penggunaan `shift()` untuk mengambil state dan `push()` untuk menambahkan state baru.
- **Setiap state** menyimpan `current`, `opensUsed`, dan `closesUsed`.
- **`opensUsed < pairs`** membatasi jumlah opening parenthesis agar tidak melebihi jumlah pasangan.
- **`closesUsed < opensUsed`** mencegah closing parenthesis ditambahkan ketika belum tersedia opening parenthesis yang sesuai.
- **`current.length === 2 * pairs`** menentukan bahwa string sudah mencapai panjang lengkap.
- **Array destructuring** digunakan untuk mengambil tiga nilai dari state yang dikeluarkan dari queue.
- **`result`** hanya menerima state yang sudah mencapai kondisi lengkap.

## What I Practiced

```text
JavaScript Functions
Function Parameters
Breadth-First Search
Queues
Arrays
Nested Arrays
Array Destructuring
Input Validation
Number.isInteger()
While Loops
Conditional Statements
Array shift()
Array push()
String Concatenation
State Tracking
Return Values
```

---

**Platform:** freeCodeCamp  
**Workshop:** Implement a Breadth-First Search Algorithm  
**Language:** JavaScript  
**Focus:** Graphs and Trees

---

<p align="center">
  <strong>Graphs and Trees Section — Implement a Breadth-First Search Algorithm Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
