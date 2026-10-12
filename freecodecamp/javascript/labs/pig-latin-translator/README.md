# Implement a Pig Latin Translator

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Basic%20Regex-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript Basic Regex" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Basic%20Regex-4B5563" alt="Basic Regex" />
</p>

> **Milestone:** Lab setelah mempelajari Basic Regex.

## About

Implement a Pig Latin Translator is a JavaScript program that converts a word into Pig Latin based on the first characters of the string.

The program uses regular expressions to detect whether the word begins with one or more consonants or with one or more vowels, then builds the corresponding Pig Latin result.

## Konsep Utama

- **Function** digunakan untuk membuat fungsi `translatePigLatin()` yang menerima string sebagai parameter.
- **Regular Expression** digunakan untuk mengenali pola konsonan dan vokal di awal string.
- **Character Class** digunakan untuk menentukan kelompok huruf konsonan dan vokal.
- **Quantifier** menggunakan `+` untuk mencocokkan satu atau lebih huruf secara berurutan.
- **Case-Insensitive Flag** menggunakan `i` agar pencocokan tidak membedakan huruf besar dan kecil.
- **`match()`** digunakan untuk mencari kecocokan regular expression pada string.
- **`slice()`** digunakan untuk mengambil sisa karakter setelah bagian awal string yang cocok dipisahkan.
- **Conditional Statement** menggunakan `if` dan `else if` untuk menentukan aturan konversi.
- **String Concatenation** digunakan untuk menyusun hasil akhir dengan menggabungkan beberapa string.

## Struktur Project

```text
pig-latin-translator/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `translatePigLatin()`

Program membuat fungsi `translatePigLatin()` yang menerima sebuah string.

```js
function translatePigLatin(str) {
```

Fungsi ini menjadi tempat seluruh proses konversi string ke Pig Latin.

### 2. Regular Expression Konsonan

Program membuat regular expression untuk mencari satu atau lebih konsonan di awal string.

```js
const regexKonsonan = /^[b-df-hj-np-tv-z]+/i;
```

`^` memastikan pencarian dimulai dari awal string.

Character class `[b-df-hj-np-tv-z]` mencakup kelompok huruf konsonan.

Quantifier `+` memungkinkan satu atau lebih konsonan dicocokkan secara berurutan.

Flag `i` membuat pencocokan tidak membedakan huruf besar dan kecil.

### 3. Regular Expression Vokal

Program juga membuat regular expression untuk mencari satu atau lebih vokal di awal string.

```js
const regexVocal = /^[aiueo]+/i;
```

Pola tersebut mencari huruf `a`, `i`, `u`, `e`, atau `o` yang berada di awal string.

Quantifier `+` memungkinkan beberapa vokal berurutan dicocokkan.

### 4. Mencari Kecocokan

Program menggunakan `match()` untuk menjalankan kedua regular expression.

```js
const match1 = str.match(regexKonsonan);
const match2 = str.match(regexVocal);
```

`match1` menyimpan hasil pencocokan konsonan di awal string.

`match2` menyimpan hasil pencocokan vokal di awal string.

### 5. Konversi Kata yang Diawali Konsonan

Jika `match1` menghasilkan kecocokan, program mengambil sisa karakter setelah konsonan awal.

```js
const remainingCharsAfterMatch1 = str.slice(match1[0].length);
```

Hasil akhirnya dibentuk dengan menempatkan sisa karakter terlebih dahulu, kemudian konsonan awal, lalu menambahkan `ay`.

```js
return remainingCharsAfterMatch1 + match1[0] + `ay`;
```

Contohnya, `glove` memiliki `gl` sebagai kecocokan konsonan awal sehingga hasilnya menjadi `oveglay`.

### 6. Konversi Kata yang Diawali Vokal

Jika tidak ditemukan konsonan awal tetapi terdapat kecocokan vokal, program menambahkan `way` pada akhir string.

```js
return str + 'way';
```

Contohnya, `eight` menjadi `eightway`.

### 7. Pengujian Fungsi

Program menjalankan fungsi dengan beberapa contoh input.

```js
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("algorithm"));
```

Ketiga pemanggilan tersebut menguji kata yang diawali konsonan dan kata yang diawali vokal.

## Method yang Dipakai

- `match()` digunakan untuk mencari kecocokan regular expression pada string.
- `slice()` digunakan untuk mengambil bagian string setelah karakter yang cocok.
- `log()` digunakan untuk menampilkan hasil atau informasi pencocokan ke console.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `function` | Membuat fungsi `translatePigLatin()` |
| `^` | Membatasi pencarian pada awal string |
| Character Class | Menentukan kelompok huruf yang dicocokkan |
| `+` | Mencocokkan satu atau lebih karakter |
| `i` | Mengabaikan perbedaan huruf besar dan kecil |
| `match()` | Mencari kecocokan regular expression |
| `slice()` | Mengambil bagian tertentu dari string |
| `if / else if` | Menentukan aturan berdasarkan hasil pencocokan |
| String Concatenation | Menggabungkan bagian string menjadi hasil akhir |

## Catatan Belajar

- **Regular Expression** dapat digunakan untuk mengenali pola tertentu pada awal sebuah string.
- **Character Class** membantu menentukan kelompok karakter yang dapat dicocokkan.
- **Quantifier `+`** memungkinkan pola mencocokkan lebih dari satu karakter.
- **`match()`** dapat digunakan untuk mendapatkan bagian string yang sesuai dengan regular expression.
- **`slice()`** berguna ketika sebagian string perlu dipisahkan berdasarkan posisi karakter.
- **Conditional Statement** dapat digunakan untuk menerapkan aturan berbeda berdasarkan hasil pencocokan.

## What I Practiced

```text
JavaScript Functions
Regular Expressions
Character Classes
Regex Quantifiers
Regex Anchors
Regex Flags
String match()
String slice()
Conditional Statements
String Concatenation
Console Output
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement a Pig Latin Translator  
**Language:** JavaScript  
**Focus:** Basic Regex

---

<p align="center">
  <strong>Basic Regex Section — Implement a Pig Latin Translator Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
