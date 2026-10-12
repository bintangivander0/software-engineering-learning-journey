# Build a Smart Word Replacement Function

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Basic%20Regex-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Basic Regex" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Basic%20Regex-4B5563" alt="Basic Regex" />
</p>

> **Milestone:** Lab setelah mempelajari Basic Regex.

## About

Build a Smart Word Replacement Function is a JavaScript program that replaces a specified word in a string while preserving the capitalization style of the matched word.

The program creates a regular expression dynamically, searches for the target word without distinguishing uppercase and lowercase letters, and adjusts the replacement word based on the capitalization of the matched text.

## Konsep Utama

- **Function** digunakan untuk membuat fungsi `myReplace()` yang menerima string, kata yang akan diganti, dan kata pengganti.
- **Dynamic Regular Expression** menggunakan `RegExp` untuk membuat pola berdasarkan nilai parameter.
- **Regex Flags** menggunakan `g` dan `i` untuk mencari seluruh kecocokan tanpa membedakan huruf besar dan kecil.
- **`replace()` Callback** digunakan untuk memproses setiap kata yang ditemukan sebelum menentukan teks penggantinya.
- **Character Access** menggunakan indeks `[0]` untuk memeriksa karakter pertama dari kata yang ditemukan.
- **Case Detection** digunakan untuk menentukan apakah kata yang ditemukan diawali huruf kapital.
- **String Manipulation** digunakan untuk mengubah kapitalisasi kata pengganti.
- **Conditional Logic** menggunakan `if` untuk memilih bentuk replacement berdasarkan kapitalisasi kata yang ditemukan.
- **Template Literal** digunakan untuk membentuk pesan pada output `console.log()`.

## Struktur Project

```text
smart-word-replacement-function/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `myReplace()`

Program membuat fungsi `myReplace()` dengan tiga parameter.

```js
function myReplace(str, wordToBeReplaced, wordToReplaceItWith) {
```

Parameter `str` merupakan string yang akan diproses.

`wordToBeReplaced` merupakan kata yang ingin dicari.

`wordToReplaceItWith` merupakan kata yang digunakan sebagai pengganti.

### 2. Membuat Regular Expression Secara Dinamis

Program menggunakan constructor `RegExp` untuk membuat regular expression berdasarkan kata yang diberikan melalui parameter.

```js
const regex = new RegExp(wordToBeReplaced, `gi`);
```

Pattern berasal dari `wordToBeReplaced`, sehingga regex dapat digunakan untuk kata yang berbeda setiap kali fungsi dipanggil.

Flag `g` membuat pencarian dilakukan pada seluruh string.

Flag `i` membuat pencarian tidak membedakan huruf besar dan kecil.

### 3. Menggunakan `replace()` dengan Callback

Program menggunakan `replace()` untuk mengganti kata yang ditemukan.

```js
return str.replace(regex, function(kataYangKetemu) {
```

Callback menerima kata yang berhasil ditemukan sebagai `kataYangKetemu`.

Dengan callback ini, program dapat menentukan bentuk replacement sebelum mengganti setiap kecocokan.

### 4. Memeriksa Huruf Pertama

Program memeriksa karakter pertama dari kata yang ditemukan.

```js
if (kataYangKetemu[0] === kataYangKetemu[0].toUpperCase()) {
```

`kataYangKetemu[0]` mengambil karakter pertama.

Karakter tersebut kemudian dibandingkan dengan versi uppercase untuk menentukan apakah kata yang ditemukan diawali huruf kapital.

### 5. Mempertahankan Kapitalisasi

Jika kata yang ditemukan diawali huruf kapital, karakter pertama dari kata pengganti dibuat uppercase.

```js
return wordToReplaceItWith.charAt(0).toUpperCase() + wordToReplaceItWith.slice(1).toLowerCase();
```

`charAt(0)` mengambil karakter pertama dari kata pengganti.

`toUpperCase()` mengubah karakter pertama menjadi huruf kapital.

`slice(1)` mengambil sisa karakter setelah karakter pertama.

`toLowerCase()` mengubah sisa karakter menjadi huruf kecil.

Dengan cara ini, kata seperti `Sleeping` dapat diganti menjadi `Sitting`.

### 6. Replacement dengan Huruf Kecil

Jika kata yang ditemukan tidak diawali huruf kapital, kata pengganti diubah seluruhnya menjadi huruf kecil.

```js
return wordToReplaceItWith.toLowerCase();
```

Aturan ini membuat bentuk replacement mengikuti kapitalisasi kata yang ditemukan.

### 7. Pengujian Function

Program menjalankan `myReplace()` menggunakan beberapa contoh.

```js
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", 
"sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
```

Contoh tersebut digunakan untuk menguji replacement pada kata dengan berbagai bentuk kapitalisasi.

## Method yang Dipakai

- `replace()` digunakan untuk mengganti seluruh kecocokan regular expression dalam string.
- `charAt()` digunakan untuk mengambil karakter pertama dari kata pengganti.
- `slice()` digunakan untuk mengambil bagian string setelah karakter pertama.
- `toUpperCase()` digunakan untuk mengubah karakter menjadi huruf kapital.
- `toLowerCase()` digunakan untuk mengubah string menjadi huruf kecil.
- `log()` digunakan untuk menampilkan hasil ke console.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `RegExp` | Membuat regular expression berdasarkan parameter |
| `g` | Mencari seluruh kecocokan |
| `i` | Mengabaikan perbedaan huruf besar dan kecil |
| `replace()` | Mengganti teks yang cocok |
| Callback | Memproses setiap kata yang ditemukan |
| `[0]` | Mengakses karakter pertama |
| `charAt(0)` | Mengambil karakter pertama |
| `slice(1)` | Mengambil sisa karakter |
| `toUpperCase()` | Mengubah karakter menjadi uppercase |
| `toLowerCase()` | Mengubah string menjadi lowercase |

## Catatan Belajar

- **`RegExp`** dapat digunakan untuk membuat pola secara dinamis berdasarkan nilai parameter.
- **Flag `g`** memungkinkan semua kecocokan dalam string diproses.
- **Flag `i`** membuat pencarian tidak membedakan huruf besar dan kecil.
- **Callback `replace()`** memungkinkan replacement diproses berdasarkan teks yang ditemukan.
- **Pemeriksaan karakter pertama** dapat digunakan untuk mengetahui bentuk kapitalisasi sebuah kata.
- **`charAt()`, `slice()`, `toUpperCase()`, dan `toLowerCase()`** dapat digunakan untuk membentuk kembali string dengan kapitalisasi tertentu.

## What I Practiced

```text
JavaScript Functions
Dynamic Regular Expressions
RegExp Constructor
Regex Flags
String replace()
Replace Callback
Character Access
String charAt()
String slice()
String toUpperCase()
String toLowerCase()
Conditional Logic
Console Output
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Smart Word Replacement Function  
**Language:** JavaScript  
**Focus:** Basic Regex

---

<p align="center">
  <strong>Basic Regex Section — Build a Smart Word Replacement Function Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
