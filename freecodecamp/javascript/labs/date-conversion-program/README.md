# Build a Date Conversion Program

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Dates-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Dates" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Dates-4B5563" alt="Dates" />
</p>

> **Milestone:** Lab setelah mempelajari Dates.

## About

Project ini membuat program JavaScript untuk menampilkan tanggal dan waktu saat ini serta mengubah format tanggal menjadi dua bentuk yang berbeda.

Program menggunakan object `Date` dan `toLocaleDateString()` untuk menghasilkan format tanggal numerik dan format tanggal dengan nama bulan.

## Konsep Utama

- **Date Object** digunakan untuk mendapatkan tanggal dan waktu saat ini.
- **Template Literals** digunakan untuk menyisipkan nilai tanggal ke dalam string.
- **Function** digunakan untuk membuat fungsi pemformatan tanggal.
- **Object Options** digunakan untuk menentukan format tanggal yang dihasilkan.
- **`toLocaleDateString()`** digunakan untuk mengubah tanggal menjadi format lokal.
- **Return Value** digunakan untuk mengembalikan hasil format tanggal dari function.
- **Console Output** digunakan untuk menampilkan hasil program.

## Struktur Project

```text
date-conversion-program/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Membuat Object `Date`

Program membuat object `Date` menggunakan `new Date()`.

```js
const currentDate = new Date();
```

Object tersebut menyimpan tanggal dan waktu saat program dijalankan.

### 2. Menampilkan Tanggal dan Waktu Saat Ini

Template literal digunakan untuk memasukkan `currentDate` ke dalam string.

```js
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);
```

Hasilnya kemudian ditampilkan menggunakan `console.log()`.

### 3. Function `formatDateMMDDYYYY()`

Function `formatDateMMDDYYYY()` menerima object tanggal melalui parameter `dateObject`.

```js
function formatDateMMDDYYYY(dateObject) {
  const localeString = dateObject.toLocaleDateString(`en-US`, {
    year: `numeric`,
    month: `numeric`,
    day: `numeric`
  });
  return `Formatted Date (MM/DD/YYYY): ${localeString}`;
}
```

`toLocaleDateString()` menggunakan locale `en-US` dengan `year`, `month`, dan `day` dalam format numerik.

### 4. Function `formatDateLong()`

Function `formatDateLong()` menggunakan `toLocaleDateString()` untuk menghasilkan format dengan nama bulan.

```js
function formatDateLong(dateObject) {
  const localeString = dateObject.toLocaleDateString(`en-US`, {
    year: `numeric`,
    month: `long`,
    day: `numeric`
  });
  return `Formatted Date (Month Day, Year): ${localeString}`;
}
```

Perbedaan utamanya terletak pada nilai `month` yang menggunakan `long`.

### 5. Menampilkan Hasil Format Tanggal

Kedua function dipanggil dengan `currentDate` sebagai argumen.

```js
console.log(formatDateMMDDYYYY(currentDate));
console.log(formatDateLong(currentDate));
```

Hasil kedua format tanggal kemudian ditampilkan melalui console.

## Method yang Dipakai

- `toLocaleDateString()` digunakan untuk memformat object tanggal berdasarkan locale dan pilihan format.
- `console.log()` digunakan untuk menampilkan hasil program di console.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `new Date()` | Membuat object tanggal dan waktu saat ini |
| Template Literal | Memasukkan nilai ke dalam string |
| Function | Membuat proses pemformatan tanggal |
| `toLocaleDateString()` | Memformat tanggal berdasarkan locale |
| Options Object | Menentukan bentuk tahun, bulan, dan hari |
| `return` | Mengembalikan hasil dari function |
| `console.log()` | Menampilkan hasil program |

## Catatan Belajar

- **Date Object** digunakan untuk bekerja dengan tanggal dan waktu.
- **`toLocaleDateString()`** dapat menghasilkan format tanggal berdasarkan locale.
- **Options Object** digunakan untuk menentukan bentuk bagian tanggal.
- **Function Parameter** digunakan untuk menerima object tanggal.
- **Template Literal** digunakan untuk menggabungkan nilai tanggal dengan teks.
- **Return** digunakan untuk mengembalikan string hasil pemformatan.

## What I Practiced

```text
JavaScript Date Object
Date Formatting
toLocaleDateString()
Locale Options
JavaScript Functions
Function Parameters
Return Values
Template Literals
Console Output
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Date Conversion Program  
**Language:** JavaScript  
**Focus:** Dates

---

<p align="center">
  <strong>Dates Section — Build a Date Conversion Program Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
