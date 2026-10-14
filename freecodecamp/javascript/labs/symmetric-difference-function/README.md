# Implement a Symmetric Difference Function

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Higher%20Order%20Functions%20and%20Callbacks-4B5566?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Higher Order Functions and Callbacks" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Higher%20Order%20Functions%20and%20Callbacks-4B5563" alt="Higher Order Functions and Callbacks" />
</p>

> **Milestone:** Lab setelah mempelajari Higher Order Functions and Callbacks.

## About

Project ini membuat fungsi `diffArray()` untuk mencari elemen yang hanya terdapat pada salah satu dari dua array.

Fungsi membandingkan kedua array, mengambil elemen yang tidak ditemukan pada array lainnya, lalu menggabungkan kedua hasil tersebut menjadi satu array.

## Konsep Utama

- **Function** digunakan untuk membungkus proses pencarian symmetric difference.
- **Array** digunakan sebagai struktur data yang dibandingkan.
- **`filter()`** digunakan untuk memilih elemen yang tidak terdapat pada array lainnya.
- **`includes()`** digunakan untuk memeriksa keberadaan suatu elemen di dalam array.
- **Arrow function** digunakan sebagai callback pada `filter()`.
- **`concat()`** digunakan untuk menggabungkan hasil dari kedua proses penyaringan.

## Struktur Project

```text
symmetric-difference-function/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `diffArray()`

```js
function diffArray(arr1, arr2) {
```

Function `diffArray()` menerima dua parameter, yaitu `arr1` dan `arr2`.

Kedua parameter tersebut menjadi array yang akan dibandingkan.

### 2. Mencari Elemen Unik dari `arr1`

```js
const unikDiArr1 = arr1.filter((item) => !arr2.includes(item));
```

`filter()` memeriksa setiap elemen pada `arr1`.

Callback `(item) => !arr2.includes(item)` hanya mempertahankan elemen yang tidak ditemukan di `arr2`.

Hasilnya disimpan pada `unikDiArr1`.

### 3. Mencari Elemen Unik dari `arr2`

```js
const unikDiArr2 = arr2.filter((item) => !arr1.includes(item));
```

Proses yang sama dilakukan terhadap `arr2`.

Elemen yang tidak ditemukan di `arr1` disimpan pada `unikDiArr2`.

### 4. Menggabungkan Kedua Hasil

```js
return unikDiArr1.concat(unikDiArr2);
```

`concat()` menggabungkan elemen dari `unikDiArr1` dan `unikDiArr2`.

Hasil gabungan tersebut menjadi nilai yang dikembalikan oleh function.

## Method yang Dipakai

- **`filter()`** digunakan untuk memilih elemen berdasarkan kondisi tertentu.
- **`includes()`** digunakan untuk memeriksa apakah sebuah elemen terdapat dalam array.
- **`concat()`** digunakan untuk menggabungkan dua array.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `filter()` | Memilih elemen yang memenuhi kondisi |
| `includes()` | Memeriksa keberadaan elemen dalam array |
| `concat()` | Menggabungkan dua array |
| Arrow function | Menjadi callback untuk `filter()` |
| Symmetric difference | Mengambil elemen yang hanya terdapat pada salah satu array |

## Catatan Belajar

- **`filter()`** menghasilkan array baru berdasarkan kondisi yang diberikan.
- **`includes()`** menghasilkan nilai boolean berdasarkan keberadaan elemen.
- **Callback function** dapat digunakan untuk menentukan kondisi penyaringan array.
- **`concat()`** dapat menggabungkan hasil dari beberapa proses array.
- **Symmetric difference** mengambil elemen yang tidak memiliki pasangan pada array lainnya.

## What I Practiced

```text
JavaScript Functions
Arrays
Array filter()
Array includes()
Array concat()
Arrow Functions
Callback Functions
Higher Order Functions
Array Comparison
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement a Symmetric Difference Function  
**Language:** JavaScript  
**Focus:** Higher Order Functions and Callbacks

---

<p align="center">
  <strong>Higher Order Functions and Callbacks Section — Implement a Symmetric Difference Function Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
