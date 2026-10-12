# Implement a Spinal Case Converter

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Basic%20Regex-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Basic Regex" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Basic%20Regex-4B5563" alt="Basic Regex" />
</p>

> **Milestone:** Lab setelah mempelajari Basic Regex.

## About

Implement a Spinal Case Converter is a JavaScript program that converts a string into spinal case format.

The program removes whitespace at the beginning and end of the string, separates words based on uppercase letters, whitespace, or underscores, joins the resulting parts with hyphens, and converts the final string to lowercase.

## Konsep Utama

- **Function** digunakan untuk membuat fungsi `spinalCase()` yang menerima string sebagai parameter.
- **Regular Expression** digunakan untuk menentukan pola pemisahan string.
- **Lookahead** menggunakan `(?=[A-Z])` untuk memisahkan string sebelum huruf kapital.
- **Whitespace Pattern** menggunakan `\s+` untuk mencocokkan satu atau lebih karakter whitespace.
- **Underscore Pattern** menggunakan `_+` untuk mencocokkan satu atau lebih underscore.
- **String Methods** digunakan untuk membersihkan, memisahkan, menggabungkan, dan mengubah string.
- **Method Chaining** digunakan untuk menjalankan beberapa operasi string secara berurutan.
- **Lowercase Conversion** menggunakan `toLowerCase()` untuk menghasilkan format huruf kecil.
- **Return Statement** digunakan untuk mengembalikan hasil konversi dari fungsi.

## Struktur Project

```text
spinal-case-converter/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `spinalCase()`

Program membuat fungsi `spinalCase()` yang menerima sebuah string sebagai parameter.

```js
function spinalCase(str) {
```

Fungsi tersebut bertugas mengubah string yang diberikan menjadi format spinal case.

### 2. Membersihkan Awal dan Akhir String

Program menggunakan `trim()` sebelum melakukan pemisahan string.

```js
.trim()
```

Method ini menghapus whitespace dari awal dan akhir string.

### 3. Memisahkan String dengan Regular Expression

Bagian utama konversi dilakukan menggunakan `split()`.

```js
.split(/(?=[A-Z])|\s+|_+/)
```

Regular expression tersebut memiliki tiga pola pemisah.

`(?=[A-Z])` menggunakan positive lookahead untuk menemukan posisi tepat sebelum huruf kapital.

`\s+` mencocokkan satu atau lebih whitespace.

`_+` mencocokkan satu atau lebih underscore.

Hasilnya adalah array yang berisi bagian-bagian string setelah dipisahkan berdasarkan pola tersebut.

### 4. Menggabungkan dengan Hyphen

Setelah string dipisahkan menjadi array, program menggabungkan kembali elemennya menggunakan `join()`.

```js
.join("-")
```

Setiap elemen array dipisahkan menggunakan karakter hyphen sehingga menghasilkan format spinal case.

### 5. Mengubah Menjadi Huruf Kecil

Hasil penggabungan kemudian diubah menjadi huruf kecil.

```js
.toLowerCase();
```

Dengan demikian, hasil akhirnya menggunakan huruf kecil dan hyphen sebagai pemisah kata.

### 6. Mengembalikan Hasil

Rangkaian operasi tersebut dikembalikan oleh fungsi melalui `return`.

```js
return str
  .trim()
  .split(/(?=[A-Z])|\s+|_+/)
  .join("-")
  .toLowerCase();
```

Program kemudian menjalankan fungsi dengan beberapa contoh input menggunakan `console.log()`.

```js
console.log(spinalCase("This Is Spinal Tap"));

console.log(spinalCase("ThisIsSpinalTap"));

console.log(spinalCase("The_Andy_Griffith_Show"));
```

Ketiga contoh tersebut digunakan untuk menguji pemisahan berdasarkan whitespace, huruf kapital, dan underscore.

## Method yang Dipakai

- `trim()` digunakan untuk menghapus whitespace dari awal dan akhir string.
- `split()` digunakan untuk memisahkan string berdasarkan regular expression.
- `join()` digunakan untuk menggabungkan elemen array dengan hyphen.
- `toLowerCase()` digunakan untuk mengubah seluruh karakter menjadi huruf kecil.
- `log()` digunakan untuk menampilkan hasil pemanggilan fungsi ke console.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `function` | Membuat fungsi `spinalCase()` |
| `trim()` | Menghapus whitespace di awal dan akhir |
| `split()` | Memisahkan string menjadi array |
| `(?=[A-Z])` | Menentukan pemisahan sebelum huruf kapital |
| `\s+` | Mencocokkan satu atau lebih whitespace |
| `_+` | Mencocokkan satu atau lebih underscore |
| `join("-")` | Menggabungkan array dengan hyphen |
| `toLowerCase()` | Mengubah string menjadi huruf kecil |
| `return` | Mengembalikan hasil fungsi |

## Catatan Belajar

- **Regular Expression** dapat digunakan untuk menentukan pola pemisahan sebuah string.
- **Lookahead** dapat menentukan posisi pencocokan tanpa mengonsumsi karakter yang ditemukan.
- **`split()`** dapat menggunakan regular expression sebagai pemisah.
- **Method chaining** memungkinkan beberapa operasi string dilakukan secara berurutan.
- **`join("-")`** dapat mengubah array hasil pemisahan menjadi string dengan hyphen sebagai pemisah.

## What I Practiced

```text
JavaScript Functions
Regular Expressions
Positive Lookahead
String trim()
String split()
Array join()
String toLowerCase()
Method Chaining
Return Statement
Console Output
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement a Spinal Case Converter  
**Language:** JavaScript  
**Focus:** Basic Regex

---

<p align="center">
  <strong>Basic Regex Section — Implement a Spinal Case Converter Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
