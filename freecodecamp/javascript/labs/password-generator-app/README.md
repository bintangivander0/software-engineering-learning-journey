# Build a Password Generator App

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-JavaScript%20Fundamentals%20Review-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript JavaScript Fundamentals Review" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-JavaScript%20Fundamentals%20Review-4B5563" alt="JavaScript Fundamentals Review" />
</p>

> **Milestone:** Lab setelah mempelajari JavaScript Fundamentals Review.

## About

Project ini membuat password secara acak berdasarkan panjang yang diberikan ke function `generatePassword()`.

Function menggunakan kumpulan karakter yang terdiri dari huruf besar, huruf kecil, angka, dan beberapa simbol. Setiap posisi password diisi dengan satu karakter yang dipilih secara acak dari kumpulan tersebut.

Hasil password kemudian disimpan ke variable `password` dan ditampilkan melalui `console.log()`.

## Konsep Utama

- **Function** digunakan untuk membungkus proses pembuatan password.
- **Parameter** digunakan untuk menentukan panjang password yang akan dibuat.
- **String** digunakan sebagai kumpulan seluruh karakter yang tersedia.
- **`for` loop** digunakan untuk menghasilkan karakter sebanyak panjang password.
- **`Math.random()`** digunakan untuk menghasilkan nilai acak.
- **`Math.floor()`** digunakan untuk mendapatkan index bilangan bulat.
- **String indexing** digunakan untuk mengambil karakter berdasarkan index.
- **String concatenation** digunakan untuk menyusun password secara bertahap.
- **`return`** digunakan untuk mengembalikan password yang sudah dibuat.
- **Template literal** digunakan untuk menampilkan password bersama pesan pada console.

## Struktur Project

```text
password-generator-app/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `generatePassword()`

```javascript
function generatePassword(passLength) {
```

Function `generatePassword()` menerima parameter `passLength`.

Parameter tersebut menentukan berapa banyak karakter yang akan dimasukkan ke password.

### 2. Kumpulan Karakter

```javascript
const allCharacters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
```

`allCharacters` menyimpan seluruh karakter yang dapat dipilih.

String tersebut berisi huruf kapital, huruf kecil, angka, dan simbol.

### 3. Variable `password`

```javascript
let password = "";
```

Variable `password` dimulai sebagai string kosong.

Karakter hasil pemilihan acak kemudian ditambahkan satu per satu ke variable tersebut.

### 4. Perulangan `for`

```javascript
for (let i = 0; i < passLength; i++) {
```

`for` loop berjalan selama nilai `i` masih lebih kecil dari `passLength`.

Dengan demikian, jumlah karakter yang ditambahkan mengikuti panjang password yang diminta.

### 5. Membuat Index Acak

```javascript
const randomIndex =
  Math.floor(Math.random() * allCharacters.length);
```

`Math.random()` menghasilkan angka acak antara `0` dan kurang dari `1`.

Nilai tersebut dikalikan dengan panjang `allCharacters`, lalu `Math.floor()` mengubahnya menjadi bilangan bulat yang dapat digunakan sebagai index string.

### 6. Mengambil Karakter Acak

```javascript
password += allCharacters[randomIndex];
```

Index acak digunakan untuk mengambil satu karakter dari `allCharacters`.

Operator `+=` kemudian menambahkan karakter tersebut ke akhir string `password`.

### 7. Mengembalikan Password

```javascript
return password;
```

Setelah loop selesai, function mengembalikan string password yang sudah terbentuk.

### 8. Memanggil Function

```javascript
const password = generatePassword(12);
```

Function dipanggil dengan argument `12`.

Hasilnya disimpan pada variable `password`, sehingga password yang dihasilkan memiliki 12 karakter.

### 9. Menampilkan Hasil

```javascript
console.log(`Generated password: ${password}`);
```

Template literal digunakan untuk menggabungkan teks `"Generated password: "` dengan isi variable `password`.

Hasil akhirnya ditampilkan di console.

## Method yang Dipakai

- **`Math.random()`** digunakan untuk menghasilkan angka acak.
- **`Math.floor()`** digunakan untuk membulatkan angka acak ke bawah menjadi integer.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| Function | Membungkus proses pembuatan password |
| Parameter | Menentukan panjang password |
| String | Menyimpan kumpulan karakter |
| `for` loop | Mengulang proses sesuai panjang password |
| `Math.random()` | Menghasilkan nilai acak |
| `Math.floor()` | Menghasilkan index integer |
| String indexing | Mengambil karakter berdasarkan index |
| `+=` | Menambahkan karakter ke password |
| `return` | Mengembalikan password |
| Template literal | Menampilkan password bersama teks |

## Catatan Belajar

- **Function** dapat menerima parameter untuk membuat proses yang dapat digunakan dengan panjang password berbeda.
- **`Math.random()`** menghasilkan nilai acak yang dapat dipakai untuk memilih posisi karakter.
- **`Math.floor()`** membuat hasil perkalian menjadi index bilangan bulat.
- **String indexing** memungkinkan satu karakter diambil berdasarkan posisi index.
- **Loop** membuat proses penambahan karakter berlangsung sebanyak jumlah yang ditentukan.
- **`+=`** dapat digunakan untuk membangun string secara bertahap.
- **`return`** mengirim hasil akhir function kembali ke tempat function dipanggil.
- **`Math.random()` bukan generator acak kriptografis**, sehingga implementasi ini cocok sebagai latihan JavaScript dan bukan sebagai generator password untuk kebutuhan keamanan nyata.

## What I Practiced

```text
JavaScript Functions
Function Parameters
Strings
for Loops
Math.random()
Math.floor()
String Indexing
String Concatenation
return
Template Literals
Console Output
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Password Generator App  
**Language:** JavaScript  
**Focus:** JavaScript Fundamentals Review

---

<p align="center">
  <strong>JavaScript Fundamentals Review Section — Build a Password Generator App Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
