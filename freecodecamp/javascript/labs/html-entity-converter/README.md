# Implement an HTML Entity Converter

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-JavaScript%20Fundamentals%20Review-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript JavaScript Fundamentals Review" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-JavaScript%20Fundamentals%20Review-4B5563" alt="JavaScript Fundamentals Review" />
</p>

> **Milestone:** Lab setelah mempelajari JavaScript Fundamentals Review.

## About

Project ini membuat fungsi `convertHTML()` untuk mengubah karakter HTML tertentu menjadi HTML entity yang sesuai.

Fungsi memecah string menjadi array karakter menggunakan `split("")`, kemudian memeriksa setiap karakter dengan `if...else if`. Karakter yang cocok diganti dengan entity seperti `&amp;`, `&lt;`, `&gt;`, `&quot;`, dan `&apos;`, lalu seluruh array digabungkan kembali menjadi string menggunakan `join("")`.

## Konsep Utama

- `split("")` digunakan untuk memecah string menjadi karakter individual.
- `for` loop digunakan untuk memeriksa setiap karakter berdasarkan index.
- `if...else if` digunakan untuk menentukan entity berdasarkan karakter yang ditemukan.
- Array digunakan untuk menyimpan karakter dan entity hasil penggantian.
- `join("")` digunakan untuk menggabungkan kembali array menjadi string.
- Character replacement digunakan untuk mengubah karakter khusus menjadi representasi HTML entity.

## Struktur Project

```text
html-entity-converter/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `convertHTML()`

```javascript
function convertHTML(str) {
```

Function menerima `str` sebagai string yang akan diperiksa dan dikonversi.

### 2. Memecah String

```javascript
const strTerpisah = str.split("");
```

`split("")` memecah string menjadi array yang berisi setiap karakter secara terpisah.

Sebagai contoh:

```text
"Dolce & Gabbana"
```

dipecah menjadi karakter-karakter individual yang dapat diperiksa satu per satu.

### 3. Memeriksa Setiap Karakter

```javascript
for (let i = 0; i < strTerpisah.length; i++) {
```

`for` loop digunakan untuk mengunjungi setiap elemen array berdasarkan index.

### 4. Mengubah Ampersand

```javascript
if (strTerpisah[i] === `&`) {
  strTerpisah[i] = `&amp;`;
```

Jika karakter yang ditemukan adalah `&`, karakter tersebut diganti menjadi `&amp;`.

### 5. Mengubah Karakter HTML Lainnya

```javascript
} else if (strTerpisah[i] === `<`) {
  strTerpisah[i] = `&lt;`;
} else if (strTerpisah[i] === `>`) {
  strTerpisah[i] = `&gt;`;
} else if (strTerpisah[i] === `"`) {
  strTerpisah[i] = `&quot;`;
} else if (strTerpisah[i] === `'`) {
  strTerpisah[i] = `&apos;`;
}
```

Source code memeriksa empat karakter khusus lainnya dan menggantinya dengan entity masing-masing:

| Karakter | HTML Entity |
|---|---|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `"` | `&quot;` |
| `'` | `&apos;` |

### 6. Menggabungkan Kembali String

```javascript
return strTerpisah.join("");
```

Setelah seluruh karakter selesai diperiksa, `join("")` menggabungkan semua elemen array tanpa separator sehingga kembali menjadi satu string.

### 7. Contoh Pemanggilan

```javascript
console.log(convertHTML("Dolce & Gabbana"))
```

Pada contoh tersebut, karakter `&` ditemukan dan diganti menjadi `&amp;`.

Hasil akhirnya adalah:

```text
Dolce &amp; Gabbana
```

## Method yang Dipakai

- `split()` digunakan untuk memecah string menjadi array karakter.
- `join()` digunakan untuk menggabungkan array karakter menjadi string.
- `console.log()` digunakan untuk menampilkan hasil konversi.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `split("")` | Memecah string menjadi karakter |
| `for` loop | Memeriksa setiap karakter |
| `if...else if` | Menentukan penggantian karakter |
| Array | Menyimpan karakter dan entity hasil |
| `join("")` | Menggabungkan array menjadi string |
| HTML Entity | Merepresentasikan karakter khusus dalam bentuk entity |

## Catatan Belajar

- **`split("")`** memungkinkan setiap karakter string diproses secara individual.
- **`for` loop** dapat digunakan untuk memeriksa dan mengubah elemen array berdasarkan index.
- **Kondisional** memungkinkan setiap karakter khusus mendapatkan penggantian yang berbeda.
- **Array** dapat digunakan sebagai tempat sementara untuk memproses isi string.
- **`join("")`** menggabungkan elemen array tanpa menambahkan pemisah.
- **HTML entity** dapat digunakan sebagai representasi karakter tertentu pada HTML.

## What I Practiced

```text
JavaScript Fundamentals
Strings
split()
join()
Arrays
for Loops
Conditional Statements
Character Replacement
HTML Entities
String Processing
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement an HTML Entity Converter  
**Language:** JavaScript  
**Focus:** JavaScript Fundamentals Review

---

<p align="center">
  <strong>JavaScript Fundamentals Review Section — Implement an HTML Entity Converter Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
