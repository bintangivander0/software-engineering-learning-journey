# Build a Countdown

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Recursion-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Recursion" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Recursion-4B5563" alt="Recursion" />
</p>

> **Milestone:** Lab setelah mempelajari Recursion.

## About

Project ini membuat function `countdown()` yang menghasilkan array berisi angka dari angka yang diberikan hingga `1`.

Project ini digunakan untuk mempraktikkan recursion, base case, recursive function call, serta penggunaan array method `unshift()`.

## Konsep Utama

- Function
- Recursion
- Base case
- `if...else`
- Array
- `unshift()`
- `return`
- Recursive function call

## Struktur Project

```text
countdown/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `countdown()`

```js
function countdown(number) {
  let countArray = [];
```

Function `countdown()` menerima satu parameter bernama `number`.

`countArray` dibuat sebagai array kosong untuk menyimpan angka hasil proses countdown.

### 2. Base Case

```js
  if (number < 1) {
    return [];
  }
```

Base case menentukan kapan recursion harus berhenti.

Ketika `number` kurang dari `1`, function langsung mengembalikan array kosong.

Kondisi ini mencegah function terus memanggil dirinya sendiri tanpa batas.

### 3. Recursive Call

```js
  else {
    countArray = countdown(number - 1);
```

Function `countdown()` memanggil dirinya sendiri dengan nilai `number - 1`.

Jika function dipanggil dengan `10`, recursive call terus berjalan dengan nilai yang lebih kecil sampai mencapai `0`.

Ketika mencapai `0`, base case dijalankan dan recursion mulai mengembalikan hasilnya.

### 4. Menambahkan Angka dengan `unshift()`

```js
    countArray.unshift(number);
```

Setelah recursive call mengembalikan array, angka saat ini ditambahkan ke bagian depan array.

Method `unshift()` menambahkan satu atau beberapa elemen ke awal array.

Pada project ini, `unshift()` digunakan agar angka yang lebih besar ditempatkan sebelum angka yang lebih kecil.

### 5. Mengembalikan Array

```js
    return countArray;
  }
}
```

`return` mengembalikan `countArray` ke function call sebelumnya.

Setiap hasil yang dikembalikan kemudian diproses lagi sampai kembali ke pemanggilan awal.

### 6. Menjalankan Function

```js
console.log(countdown(10));
```

Function dipanggil dengan nilai awal `10`.

Hasil akhirnya adalah:

```text
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

## Method yang Dipakai

- `unshift()` digunakan untuk menambahkan `number` ke bagian awal array.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `countdown()` | Menjalankan proses countdown menggunakan recursion |
| Base case | Menghentikan recursion ketika `number < 1` |
| `countdown(number - 1)` | Memanggil kembali function dengan nilai yang lebih kecil |
| `unshift()` | Menambahkan angka ke bagian awal array |
| `return` | Mengembalikan hasil function |
| `countArray` | Menyimpan angka hasil proses countdown |

## Catatan Belajar

- **Recursion** terjadi ketika sebuah function memanggil dirinya sendiri.
- **Base case** menentukan kondisi yang menghentikan recursion.
- **`number - 1`** membuat setiap recursive call bergerak menuju base case.
- **`unshift()`** menempatkan angka baru di bagian depan array.
- **`return`** mengembalikan hasil recursive call ke function sebelumnya.

## What I Practiced

```text
JavaScript Functions
Recursion
Base Case
Recursive Function Calls
If...Else
Arrays
Array unshift()
Return Values
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Countdown  
**Language:** JavaScript  
**Focus:** Recursion

---

<p align="center">
  <strong>Recursion Section — Build a Countdown Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
