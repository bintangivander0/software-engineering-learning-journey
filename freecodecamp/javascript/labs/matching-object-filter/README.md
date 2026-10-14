# Implement a Matching Object Filter

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Higher%20Order%20Functions%20and%20Callbacks-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Higher Order Functions and Callbacks" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Higher%20Order%20Functions%20and%20Callbacks-4B5563" alt="Higher Order Functions and Callbacks" />
</p>

> **Milestone:** Lab — Higher Order Functions and Callbacks

## About

Project ini membuat function `whatIsInAName()` untuk mencari object yang memiliki property dan value sesuai dengan object `source`.

Function menggunakan `filter()` untuk memilih object, `Object.keys()` untuk mengambil nama property dari `source`, dan `every()` untuk memastikan seluruh property tersebut cocok.

## Konsep Utama

- **`filter()`** digunakan untuk mempertahankan object yang memenuhi kondisi.
- **`Object.keys()`** digunakan untuk mendapatkan daftar key dari object `source`.
- **`every()`** digunakan untuk memastikan semua key memiliki value yang sesuai.
- **Strict equality** digunakan untuk membandingkan `item[key]` dengan `source[key]`.
- **Callback function** digunakan pada `filter()` dan `every()`.

## Struktur Project

```text
matching-object-filter/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `whatIsInAName()`

```javascript
function whatIsInAName(arr, source) {
```

Function menerima dua parameter, yaitu `arr` sebagai kumpulan object dan `source` sebagai object yang berisi property serta value yang harus dicari.

### 2. Menggunakan `filter()`

```javascript
return arr.filter((item) => {
```

`filter()` memeriksa setiap object dalam `arr`.

Object hanya dimasukkan ke array hasil jika callback mengembalikan `true`.

### 3. Mengambil Key dari `source`

```javascript
Object.keys(source)
```

`Object.keys()` menghasilkan array berisi nama property yang terdapat pada object `source`.

Contohnya:

```javascript
{ last: "Capulet" }
```

menghasilkan:

```javascript
["last"]
```

### 4. Memastikan Semua Property Cocok

```javascript
Object.keys(source).every((key) => item[key] === source[key])
```

`every()` memeriksa setiap key yang diperoleh dari `source`.

Untuk setiap key, kode membandingkan:

```javascript
item[key] === source[key]
```

Object hanya dianggap cocok jika seluruh property yang diminta oleh `source` memiliki value yang sama.

### 5. Contoh Penggunaan

```javascript
console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);
```

`source` hanya meminta:

```javascript
{ last: "Capulet" }
```

Dari tiga object yang diperiksa, hanya object milik `Tybalt` yang memiliki `last` dengan value `"Capulet"`.

Hasilnya adalah:

```javascript
[
  { first: "Tybalt", last: "Capulet" }
]
```

## Method yang Dipakai

- **`filter()`** digunakan untuk menghasilkan array baru yang hanya berisi object yang memenuhi kondisi.
- **`Object.keys()`** digunakan untuk mengambil key dari object `source`.
- **`every()`** digunakan untuk memastikan setiap key dari `source` cocok.
- **`console.log()`** digunakan untuk menampilkan hasil function pada console.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `filter()` | Memilih object yang memenuhi kondisi |
| `Object.keys()` | Mengambil key dari `source` |
| `every()` | Memastikan semua key cocok |
| `===` | Membandingkan value secara strict |
| Callback | Menentukan kondisi pemeriksaan |

## Catatan Belajar

- **`filter()`** tidak mengubah array sumber dan menghasilkan array baru berdasarkan kondisi callback.
- **`Object.keys()`** menghasilkan array berisi enumerable own property names dari object.
- **`every()`** menghasilkan `true` hanya jika seluruh elemen memenuhi kondisi callback.
- **`item[key]`** memungkinkan property object diakses menggunakan nama key yang tersimpan di variable.
- **`===`** memastikan value pada object kandidat sama dengan value yang diminta oleh `source`.
- **Kombinasi method** membuat pemeriksaan beberapa property dapat dilakukan tanpa menuliskan kondisi satu per satu.

## What I Practiced

```text
Higher Order Functions
Callbacks
Array.filter()
Object.keys()
Array.every()
Dynamic Property Access
Strict Equality
Object Filtering
```

## Metadata Project

- **Platform:** freeCodeCamp
- **Certification / Curriculum:** JavaScript Certification
- **Parent Chapter:** Higher Order Functions and Callbacks
- **Milestone Reference:** Higher Order Functions and Callbacks
- **Project Type:** Lab
- **Project Name:** Implement a Matching Object Filter
- **Language:** JavaScript
- **Project Path:** `./matching-object-filter/`
- **Project Files:** `solution.js`
- **Web Project:** No
- **Preview Screenshot:** Not available
- **Eksperimen Tambahan:** None
- **Source Code:** Available

---

**Platform:** freeCodeCamp  
**Lab:** Implement a Matching Object Filter  
**Language:** JavaScript  
**Focus:** Higher Order Functions and Callbacks

---

<p align="center">
  <strong>Higher Order Functions and Callbacks Section — Implement a Matching Object Filter Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
