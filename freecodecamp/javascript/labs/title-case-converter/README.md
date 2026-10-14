# Build a Title Case Converter

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-JavaScript%20Fundamentals%20Review-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript JavaScript Fundamentals Review" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-JavaScript%20Fundamentals%20Review-4B5563" alt="JavaScript Fundamentals Review" />
</p>

> **Milestone:** Lab setelah mempelajari JavaScript Fundamentals Review.

## About

Project ini membuat fungsi `titleCase()` untuk mengubah setiap kata pada string menjadi bentuk title case.

Implementasinya terlebih dahulu mengubah seluruh string menjadi huruf kecil, memisahkan string menjadi array kata, lalu memproses setiap kata menggunakan loop. Huruf pertama setiap kata dibuat menjadi huruf kapital sebelum seluruh kata digabungkan kembali menjadi satu string.

## Konsep Utama

- `toLowerCase()` digunakan untuk menyeragamkan seluruh huruf menjadi huruf kecil.
- `split()` digunakan untuk memisahkan string berdasarkan spasi menjadi array kata.
- `for` loop digunakan untuk memproses setiap kata satu per satu.
- `charAt()` digunakan untuk mengambil karakter pertama dari sebuah kata.
- `toUpperCase()` digunakan untuk mengubah karakter pertama menjadi huruf kapital.
- `slice()` digunakan untuk mengambil sisa karakter setelah karakter pertama.
- `push()` digunakan untuk memasukkan kata yang sudah diproses ke array hasil.
- `join()` digunakan untuk menggabungkan kembali kata-kata menjadi string.

## Struktur Project

```text
title-case-converter/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `titleCase()`

```javascript
function titleCase(str) {
```

Function menerima sebuah string melalui parameter `str` dan mengembalikan string yang setiap katanya diawali huruf kapital.

### 2. Menyiapkan Array Hasil

```javascript
let hasil = [];
```

Array `hasil` digunakan untuk menyimpan kata-kata yang sudah diproses sebelum digabungkan kembali.

### 3. Mengubah String Menjadi Huruf Kecil

```javascript
const kataKata = str.toLowerCase().split(" ");
```

`toLowerCase()` mengubah seluruh karakter menjadi huruf kecil.

Setelah itu, `split(" ")` memisahkan string berdasarkan spasi sehingga setiap kata menjadi elemen array.

### 4. Memproses Setiap Kata

```javascript
for (let i = 0; i < kataKata.length; i++) {
  let kata = kataKata[i];
```

Loop `for` berjalan dari index pertama sampai seluruh kata selesai diproses.

Setiap kata diambil dari array `kataKata` menggunakan index `i`.

### 5. Memeriksa Kata yang Tidak Kosong

```javascript
if (kata.length > 0) {
```

Kondisi ini memastikan hanya kata yang memiliki panjang lebih dari nol yang diproses.

### 6. Membuat Huruf Pertama Menjadi Kapital

```javascript
let kataBaru = kata.charAt(0).toUpperCase() + kata.slice(1);
```

`charAt(0)` mengambil karakter pertama.

`toUpperCase()` mengubah karakter tersebut menjadi huruf kapital.

`slice(1)` mengambil seluruh karakter mulai dari index 1 sehingga sisa kata tetap dipertahankan.

Keduanya kemudian digabungkan menjadi `kataBaru`.

### 7. Menyimpan Kata yang Sudah Diproses

```javascript
hasil.push(kataBaru);
```

Kata yang sudah diubah dimasukkan ke array `hasil`.

### 8. Menggabungkan Hasil

```javascript
return hasil.join(" ");
```

`join(" ")` menggabungkan seluruh elemen array `hasil` dengan spasi dan mengembalikan string akhir.

### 9. Contoh Pemanggilan

```javascript
console.log(titleCase("bintang hari ini sedang JALAN"));
```

Input tersebut terlebih dahulu diubah menjadi huruf kecil, kemudian setiap kata diproses sehingga hasil akhirnya menjadi:

```text
Bintang Hari Ini Sedang Jalan
```

## Method yang Dipakai

- `toLowerCase()` digunakan untuk mengubah seluruh karakter string menjadi huruf kecil.
- `split()` digunakan untuk memisahkan string menjadi array berdasarkan spasi.
- `charAt()` digunakan untuk mengambil karakter pada posisi tertentu.
- `toUpperCase()` digunakan untuk mengubah karakter pertama menjadi huruf kapital.
- `slice()` digunakan untuk mengambil bagian string mulai dari index tertentu.
- `push()` digunakan untuk menambahkan kata ke array hasil.
- `join()` digunakan untuk menggabungkan array menjadi string.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `toLowerCase()` | Menyeragamkan string menjadi huruf kecil |
| `split(" ")` | Memisahkan string menjadi array kata |
| `for` loop | Memproses setiap kata |
| `charAt(0)` | Mengambil karakter pertama |
| `toUpperCase()` | Mengubah karakter menjadi huruf kapital |
| `slice(1)` | Mengambil sisa karakter kata |
| `push()` | Menambahkan kata ke array hasil |
| `join(" ")` | Menggabungkan kata menjadi string |

## Catatan Belajar

- **`toLowerCase()`** membantu memulai proses dari format huruf yang seragam.
- **`split()`** mengubah string menjadi array sehingga setiap kata dapat diproses satu per satu.
- **`charAt(0)`** mengambil huruf pertama yang akan diubah menjadi kapital.
- **`slice(1)`** mempertahankan karakter setelah huruf pertama.
- **`push()`** menyimpan setiap kata yang sudah diproses ke array hasil.
- **`join()`** mengubah kembali array hasil menjadi sebuah string.

## What I Practiced

```text
JavaScript Functions
String Methods
Array Methods
toLowerCase()
split()
for Loop
charAt()
toUpperCase()
slice()
push()
join()
String Manipulation
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Title Case Converter  
**Language:** JavaScript  
**Focus:** JavaScript Fundamentals Review

---

<p align="center">
  <strong>JavaScript Fundamentals Review Section — Build a Title Case Converter Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
