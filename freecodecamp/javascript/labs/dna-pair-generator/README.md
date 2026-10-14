# Implement a DNA Pair Generator

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-JavaScript%20Fundamentals%20Review-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript JavaScript Fundamentals Review" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-JavaScript%20Fundamentals%20Review-4B5563" alt="JavaScript Fundamentals Review" />
</p>

> **Milestone:** Lab setelah mempelajari JavaScript Fundamentals Review.

## About

Project ini membuat fungsi `pairElement()` untuk mengubah string DNA menjadi pasangan basa nitrogen.

Setiap karakter DNA dipisahkan terlebih dahulu menggunakan `split("")`, kemudian diproses satu per satu. Pasangan yang sesuai dimasukkan ke array `result` menggunakan `push()`.

Aturan pasangan yang digunakan adalah `A` dengan `T`, `T` dengan `A`, `C` dengan `G`, dan `G` dengan `C`.

## Konsep Utama

- `split("")` digunakan untuk memecah string DNA menjadi karakter individual.
- `for...of` digunakan untuk memproses setiap karakter DNA.
- `if...else if` digunakan untuk menentukan pasangan berdasarkan karakter saat ini.
- `push()` digunakan untuk menambahkan pasangan DNA ke array hasil.
- Array digunakan untuk menyimpan seluruh pasangan DNA.

## Struktur Project

```text
dna-pair-generator/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `pairElement()`

```javascript
function pairElement(dna) {
```

Function menerima `dna` berupa string yang berisi karakter DNA.

### 2. Menyiapkan Array Hasil

```javascript
let result = [];
```

`result` digunakan untuk menyimpan pasangan DNA yang dihasilkan selama proses berlangsung.

### 3. Memecah String DNA

```javascript
const pecahkanInput = dna.split("");
```

`split("")` memecah string menjadi array yang berisi setiap karakter secara terpisah.

Sebagai contoh, string `"ATCG"` menjadi:

```text
["A", "T", "C", "G"]
```

### 4. Memproses Setiap Karakter

```javascript
for (const karakter of pecahkanInput) {
```

`for...of` digunakan untuk mengambil setiap karakter dari array `pecahkanInput` satu per satu.

Nilai karakter saat ini disimpan pada variable `karakter`.

### 5. Menentukan Pasangan Basa

```javascript
if (karakter === "A") {
  result.push(["A", "T"]);
} else if (karakter === "T") {
  result.push(["T", "A"]);
} else if (karakter === "C") {
  result.push(["C", "G"]);
} else if (karakter === "G") {
  result.push(["G", "C"]);
}
```

Setiap karakter diperiksa menggunakan rangkaian `if...else if`.

Pasangan yang ditambahkan adalah:

| Karakter | Pasangan |
|---|---|
| `A` | `["A", "T"]` |
| `T` | `["T", "A"]` |
| `C` | `["C", "G"]` |
| `G` | `["G", "C"]` |

### 6. Mengembalikan Hasil

```javascript
return result;
```

Setelah seluruh karakter selesai diproses, function mengembalikan array yang berisi seluruh pasangan DNA.

## Contoh Alur

Untuk input:

```javascript
pairElement("ATCG");
```

String terlebih dahulu dipecah menjadi:

```text
["A", "T", "C", "G"]
```

Kemudian setiap karakter dipasangkan:

```text
[
  ["A", "T"],
  ["T", "A"],
  ["C", "G"],
  ["G", "C"]
]
```

## Method yang Dipakai

- `split()` digunakan untuk memecah string DNA menjadi array karakter.
- `push()` digunakan untuk menambahkan pasangan DNA ke array hasil.
- `console.log()` digunakan pada source code untuk menampilkan hasil pemrosesan array karakter.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `split("")` | Memecah string menjadi karakter |
| `for...of` | Mengiterasi setiap karakter |
| `if...else if` | Menentukan pasangan berdasarkan karakter |
| `push()` | Menambahkan pasangan ke hasil |
| `result` | Menyimpan seluruh pasangan DNA |

## Catatan Belajar

- **`split("")`** dapat digunakan untuk mengubah string menjadi array karakter.
- **`for...of`** memudahkan iterasi langsung terhadap nilai setiap elemen.
- **Kondisional** dapat digunakan untuk menentukan hasil berbeda berdasarkan nilai karakter.
- **`push()`** menambahkan elemen baru ke bagian akhir array.
- **Array bersarang** dapat digunakan untuk menyimpan pasangan dalam bentuk array di dalam array.

## What I Practiced

```text
JavaScript Fundamentals
Strings
split()
Arrays
for...of Loops
Conditional Statements
push()
Nested Arrays
Character Processing
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement a DNA Pair Generator  
**Language:** JavaScript  
**Focus:** JavaScript Fundamentals Review

---

<p align="center">
  <strong>JavaScript Fundamentals Review Section — Implement a DNA Pair Generator Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
