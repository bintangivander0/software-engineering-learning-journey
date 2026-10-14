# Implement a Falsy Remover

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-JavaScript%20Fundamentals%20Review-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Fundamentals Review" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-JavaScript%20Fundamentals%20Review-4B5563" alt="JavaScript Fundamentals Review" />
</p>

> **Milestone:** Lab setelah mempelajari JavaScript Fundamentals Review.

## About

Project ini membuat fungsi `bouncer()` untuk menghapus nilai-nilai yang termasuk nilai falsy dari sebuah array.

Fungsi menggunakan array `nilaiFalse` sebagai daftar nilai yang akan dihapus, kemudian memeriksa setiap elemen array menggunakan `includes()`. Nilai yang tidak termasuk dalam daftar tersebut dimasukkan ke array `result`.

## Konsep Utama

- `for` loop digunakan untuk memeriksa setiap elemen array.
- `includes()` digunakan untuk memeriksa apakah suatu nilai terdapat dalam array `nilaiFalse`.
- `push()` digunakan untuk memasukkan nilai yang tidak falsy ke array hasil.
- Array digunakan untuk menyimpan daftar nilai falsy dan hasil penyaringan.
- `return` digunakan untuk mengembalikan array hasil.

## Struktur Project

```text
falsy-remover/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Fungsi `bouncer()`

```javascript
function bouncer(arr) {
```

Fungsi menerima `arr` sebagai array yang akan diperiksa dan mengembalikan array baru yang tidak berisi nilai-nilai yang terdapat pada daftar `nilaiFalse`.

### 2. Membuat Array Hasil

```javascript
const result = [];
```

`result` digunakan untuk menampung nilai yang lolos dari pemeriksaan.

### 3. Menentukan Nilai yang Dihapus

```javascript
const nilaiFalse = [false, null, 0, "", undefined, NaN];
```

Array `nilaiFalse` berisi nilai-nilai yang ditetapkan sebagai nilai false pada implementasi ini, yaitu `false`, `null`, `0`, string kosong, `undefined`, dan `NaN`.

### 4. Memeriksa Setiap Elemen

```javascript
for (let i = 0; i < arr.length; i++) {
```

`for` loop digunakan untuk mengunjungi setiap elemen dari `arr` berdasarkan index.

### 5. Memeriksa Nilai dengan `includes()`

```javascript
if (!nilaiFalse.includes(arr[i])) {
```

`includes()` memeriksa apakah nilai saat ini terdapat di dalam `nilaiFalse`.

Operator `!` membalik hasil pemeriksaan sehingga blok `if` dijalankan ketika nilai tersebut tidak terdapat dalam daftar.

### 6. Menambahkan Nilai yang Lolos

```javascript
result.push(arr[i]);
```

Nilai yang tidak termasuk dalam `nilaiFalse` dimasukkan ke array `result` menggunakan `push()`.

### 7. Mengembalikan Hasil

```javascript
return result;
```

Setelah seluruh elemen selesai diperiksa, fungsi mengembalikan array `result`.

### 8. Contoh Pemanggilan

```javascript
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([]));
```

Pada array pertama, nilai `""` dan `false` termasuk dalam `nilaiFalse`, sehingga keduanya tidak dimasukkan ke hasil.

Pemanggilan kedua menggunakan array kosong sehingga hasilnya juga berupa array kosong.

## Method yang Dipakai

- `includes()` digunakan untuk memeriksa keberadaan nilai dalam array `nilaiFalse`.
- `push()` digunakan untuk menambahkan nilai yang lolos ke array `result`.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `for` | Memeriksa setiap elemen array |
| `includes()` | Memeriksa apakah nilai terdapat dalam daftar |
| `push()` | Menambahkan nilai ke array hasil |
| `nilaiFalse` | Menyimpan nilai yang akan dihapus |
| `result` | Menyimpan nilai yang tidak termasuk daftar falsy |

## Catatan Belajar

- **Array** dapat digunakan sebagai daftar nilai yang perlu diperiksa.
- **`includes()`** menghasilkan `true` ketika nilai ditemukan dalam array.
- **Operator `!`** dapat membalik hasil boolean dari sebuah pemeriksaan.
- **`push()`** menambahkan elemen baru ke bagian akhir array.
- **`for` loop** dapat digunakan untuk memproses array berdasarkan index.
- **Array hasil** memungkinkan data asli tetap terpisah dari hasil proses.

## What I Practiced

```text
JavaScript Fundamentals
Arrays
for Loop
includes()
push()
Conditional Statements
Boolean Logic
Array Traversal
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement a Falsy Remover  
**Language:** JavaScript  
**Focus:** JavaScript Fundamentals Review

---

<p align="center">
  <strong>JavaScript Fundamentals Review Section — Implement a Falsy Remover Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
