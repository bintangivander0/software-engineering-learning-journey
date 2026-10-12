# Build a Palindrome Checker

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-Basic%20Regex-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Basic Regex" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Basic%20Regex-4B5563" alt="Basic Regex" />
</p>

> **Milestone:** Lab setelah mempelajari Basic Regex.

## About

Build a Palindrome Checker is a small web application that checks whether the text entered by the user reads the same forward and backward.

The program removes non-alphanumeric characters, converts the remaining text to lowercase, reverses the cleaned string, and compares it with the original cleaned string.

## Konsep Utama

- **DOM Selection** digunakan untuk mengambil elemen input, tombol, dan area hasil dari halaman.
- **Event Listener** digunakan untuk menjalankan pemeriksaan ketika tombol `Check` diklik.
- **Regular Expression** digunakan untuk menghapus karakter selain huruf dan angka.
- **Case Conversion** digunakan untuk menyamakan huruf besar dan kecil sebelum perbandingan.
- **String Manipulation** digunakan untuk membersihkan dan membalik teks.
- **Array Methods** digunakan setelah string diubah menjadi array karakter.
- **Strict Equality** digunakan untuk membandingkan teks asli yang sudah dibersihkan dengan teks yang sudah dibalik.
- **Conditional Expression** digunakan untuk menentukan pesan hasil pemeriksaan.

## Struktur Project

```text
palindrome-checker/
├── index.html
└── script.js
```

## Source Code

- [`index.html`](./index.html)
- [`script.js`](./script.js)

## Pembahasan

### 1. Mengambil Elemen HTML

Program mengambil elemen input, tombol, dan area hasil menggunakan `querySelector()`.

```js
const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");
```

`textInput` digunakan untuk membaca teks dari pengguna, `checkButton` digunakan untuk menjalankan pemeriksaan, dan `result` digunakan untuk menampilkan hasil.

### 2. Menangani Klik Tombol

Event listener dipasang pada tombol `Check`.

```js
checkButton.addEventListener("click", () => {
```

Setiap kali tombol diklik, fungsi di dalam event listener akan dijalankan.

### 3. Memeriksa Input Kosong

Program terlebih dahulu memastikan pengguna telah memasukkan nilai.

```js
if (textInput.value === "") {
  alert("Please input a value");
  return;
}
```

Jika input kosong, program menampilkan peringatan dan menghentikan proses dengan `return`.

### 4. Membersihkan Teks

Nilai asli input disimpan ke dalam `originalText`.

```js
const originalText = textInput.value;
```

Kemudian karakter selain huruf dan angka dihapus menggunakan regular expression.

```js
const cleanedText = originalText.replace(/[^a-z0-9]/gi, "").toLowerCase();
```

Bagian `[^a-z0-9]` mencocokkan karakter yang bukan huruf atau angka.

Flag `g` membuat pencarian dilakukan pada seluruh string, sedangkan flag `i` membuat pencocokan tidak membedakan huruf besar dan kecil.

Setelah karakter yang tidak diperlukan dihapus, `toLowerCase()` mengubah seluruh huruf menjadi huruf kecil.

### 5. Membalik Teks

Teks yang sudah dibersihkan diubah menjadi array karakter.

```js
const reverseText = cleanedText.split("").reverse().join("");
```

`split("")` memisahkan setiap karakter, `reverse()` membalik urutannya, dan `join("")` menggabungkannya kembali menjadi string.

### 6. Menentukan Palindrome

Program membandingkan teks yang sudah dibersihkan dengan teks yang sudah dibalik.

```js
const isPalindrome = cleanedText === reverseText;
```

Jika keduanya sama, nilai `isPalindrome` menjadi `true`.

### 7. Menampilkan Hasil

Operator kondisional digunakan untuk menentukan pesan yang ditampilkan.

```js
result.textContent = isPalindrome
  ? `${originalText} is a palindrome`
  : `${originalText} is not a palindrome`;
```

Teks asli tetap digunakan dalam pesan hasil agar pengguna dapat melihat input yang mereka masukkan.

## Method yang Dipakai

- `querySelector()` digunakan untuk mengambil elemen HTML berdasarkan selector.
- `addEventListener()` digunakan untuk menangani aksi klik tombol.
- `replace()` digunakan untuk mengganti atau menghapus bagian tertentu dari string.
- `toLowerCase()` digunakan untuk mengubah string menjadi huruf kecil.
- `split()` digunakan untuk memisahkan string menjadi array karakter.
- `reverse()` digunakan untuk membalik urutan elemen array.
- `join()` digunakan untuk menggabungkan array menjadi string.
- `alert()` digunakan untuk menampilkan peringatan ketika input kosong.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `querySelector()` | Mengambil elemen HTML |
| `addEventListener()` | Menangani aksi klik |
| Regular Expression | Membersihkan karakter yang tidak diperlukan |
| `replace()` | Menghapus karakter dari string |
| `toLowerCase()` | Menyamakan huruf besar dan kecil |
| `split()` | Mengubah string menjadi array karakter |
| `reverse()` | Membalik urutan karakter |
| `join()` | Mengubah array kembali menjadi string |
| `===` | Membandingkan dua string secara ketat |

## Catatan Belajar

- **Regular Expression** dapat digunakan untuk membersihkan string berdasarkan pola tertentu.
- **`toLowerCase()`** membantu membuat perbandingan teks tidak terpengaruh oleh huruf besar dan kecil.
- **`split()` dan `join()`** dapat digunakan untuk mengubah string menjadi array lalu mengembalikannya menjadi string.
- **`reverse()`** membalik urutan elemen dalam array.
- **Perbandingan string** dapat digunakan untuk menentukan apakah sebuah teks merupakan palindrome.

## What I Practiced

```text
DOM Selection
Event Handling
Regular Expressions
String Cleaning
String Case Conversion
String and Array Manipulation
Array Methods
Conditional Expression
DOM Output
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Palindrome Checker  
**Languages:** HTML & JavaScript  
**Focus:** Basic Regex

---

<p align="center">
  <strong>Basic Regex Section — Build a Palindrome Checker Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
