# Implement a Value Remover Function

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Higher%20Order%20Functions%20and%20Callbacks-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Higher Order Functions and Callbacks" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Higher%20Order%20Functions%20and%20Callbacks-4B5563" alt="Higher Order Functions and Callbacks" />
</p>

> **Milestone:** Lab setelah mempelajari Higher Order Functions and Callbacks.

## About

Project ini mengimplementasikan fungsi `destroyer()` untuk membuat array baru dengan menghapus nilai-nilai yang ditentukan dari array awal.

Fungsi menerima array dan sejumlah nilai yang ingin dihapus melalui rest parameter, kemudian menggunakan `filter()` dan `includes()` untuk menentukan elemen mana yang tetap dipertahankan.

## Konsep Utama

- **Rest parameter** digunakan untuk menerima sejumlah nilai yang ingin dihapus.
- **Higher-order function** digunakan melalui `filter()` untuk memproses setiap elemen array.
- **`includes()`** digunakan untuk memeriksa apakah suatu nilai terdapat pada daftar nilai yang akan dihapus.
- **Arrow function** digunakan sebagai callback pada `filter()`.
- **Array filtering** digunakan untuk menghasilkan array baru tanpa mengubah array melalui operasi penghapusan langsung.

## Struktur Project

```text
value-remover-function/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Fungsi `destroyer()`

```js
function destroyer(arr, ...numToDel) {
  return arr.filter((item) => !numToDel.includes(item));
}
```

Fungsi `destroyer()` menerima `arr` sebagai array utama dan `...numToDel` sebagai rest parameter yang menampung semua nilai yang ingin dihapus.

### 2. Rest Parameter `...numToDel`

Rest parameter mengumpulkan argumen setelah parameter `arr` menjadi sebuah array.

Pada pemanggilan:

```js
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
```

nilai `2` dan `3` dikumpulkan ke dalam `numToDel`.

### 3. `filter()` dan Callback

```js
arr.filter((item) => !numToDel.includes(item))
```

`filter()` memeriksa setiap `item` pada array `arr` dan hanya mempertahankan item yang menghasilkan nilai `true`.

### 4. `includes()` dengan Negasi

```js
!numToDel.includes(item)
```

`includes()` menghasilkan `true` jika `item` ditemukan di `numToDel`.

Operator `!` membalik hasil tersebut sehingga nilai yang terdapat pada daftar penghapusan tidak masuk ke array hasil.

### 5. Hasil Pemrosesan

Dengan input:

```js
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
```

fungsi mempertahankan nilai selain `2` dan `3`, sehingga hasilnya:

```text
[1, 5, 1]
```

## Method yang Dipakai

- `filter()` digunakan untuk membuat array baru berdasarkan kondisi setiap elemen.
- `includes()` digunakan untuk memeriksa keberadaan nilai dalam array.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| Rest parameter | Mengumpulkan sejumlah argumen menjadi array |
| `filter()` | Memilih elemen yang memenuhi kondisi |
| `includes()` | Memeriksa apakah nilai terdapat dalam array |
| `!` | Membalik hasil boolean dari pemeriksaan |
| Callback | Menentukan kondisi yang digunakan oleh `filter()` |

## Catatan Belajar

- **Rest parameter** dapat menerima jumlah argumen yang tidak ditentukan.
- **`filter()`** menghasilkan array baru berdasarkan kondisi callback.
- **`includes()`** memudahkan pemeriksaan keberadaan sebuah nilai dalam array.
- **Kombinasi `filter()` dan `includes()`** dapat digunakan untuk membuang nilai tertentu dari hasil array.

## What I Practiced

```text
JavaScript Rest Parameters
Higher-Order Functions
Array filter()
Array includes()
Arrow Functions
Array Filtering
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement a Value Remover Function  
**Language:** JavaScript  
**Focus:** Higher Order Functions and Callbacks

---

<p align="center">
  <strong>Higher Order Functions and Callbacks Section — Implement a Value Remover Function Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
