# Build a Countup

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Recursion-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript Recursion" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Workshop-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Workshop" />
  <img src="https://img.shields.io/badge/Topic-Recursion-4B5563" alt="Recursion" />
</p>

> **Milestone:** Workshop setelah mempelajari Recursion.

## About

Project ini membuat function `countup()` yang menghasilkan array berisi angka dari `1` sampai angka yang diberikan.

Project ini digunakan untuk mempraktikkan recursion, yaitu ketika sebuah function memanggil dirinya sendiri sampai mencapai base case.

## Konsep Utama

- Function
- Recursion
- Base case
- `if...else`
- Array
- `push()`
- `return`
- Recursive function call

## Struktur Project

```text
countup/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `countup()`

```js
function countup(number) {
  let countArray = [];
```

Function `countup()` menerima satu parameter bernama `number`.

`countArray` dibuat sebagai array kosong untuk menyimpan angka yang dikumpulkan selama proses recursion.

### 2. Base Case

```js
  if (number < 1) {
    return [];
  }
```

Base case menentukan kondisi berhenti dari recursion.

Ketika `number` kurang dari `1`, function langsung mengembalikan array kosong.

Pada kondisi ini, function tidak melakukan recursive call lagi.

### 3. Recursive Call

```js
  else {
    countArray = countup(number - 1);
```

Function `countup()` memanggil dirinya sendiri dengan nilai `number - 1`.

Jika function pertama kali dipanggil dengan `5`, recursive call akan menggunakan `4`, kemudian `3`, `2`, `1`, dan `0`.

Ketika mencapai `0`, kondisi base case dijalankan.

### 4. Menambahkan Nilai dengan `push()`

```js
    countArray.push(number);
```

Setelah recursive call selesai, nilai `number` ditambahkan ke `countArray`.

Method `push()` digunakan untuk menambahkan sebuah nilai ke bagian akhir array.

Karena recursive call diselesaikan terlebih dahulu, angka kemudian ditambahkan kembali mulai dari nilai yang lebih kecil sampai nilai awal.

### 5. Mengembalikan Hasil

```js
    return countArray;
  }
}
```

`return` mengembalikan `countArray` yang sudah berisi hasil recursion.

Nilai tersebut kemudian diterima oleh function call sebelumnya sampai kembali ke pemanggilan awal.

### 6. Menjalankan Function

```js
console.log(countup(5));
```

`countup(5)` menjalankan function dengan nilai awal `5`.

Hasil akhirnya adalah:

```text
[1, 2, 3, 4, 5]
```

## Method yang Dipakai

- `push()` digunakan untuk menambahkan `number` ke bagian akhir `countArray`.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `countup()` | Menjalankan proses countup menggunakan recursion |
| Base case | Menghentikan recursion ketika `number < 1` |
| `countup(number - 1)` | Memanggil kembali function dengan nilai yang lebih kecil |
| `push()` | Menambahkan angka ke array |
| `return` | Mengembalikan hasil dari function |
| `countArray` | Menyimpan angka hasil proses recursion |

## Catatan Belajar

- **Recursion** terjadi ketika sebuah function memanggil dirinya sendiri.
- **Base case** menentukan kondisi yang menghentikan recursion.
- **`number - 1`** membuat setiap recursive call bergerak menuju base case.
- **`push()`** menambahkan angka setelah recursive call selesai.
- **`return`** mengembalikan hasil recursive call ke function sebelumnya.

## What I Practiced

```text
JavaScript Functions
Recursion
Base Case
Recursive Function Calls
If...Else
Arrays
Array push()
Return Values
```

---

**Platform:** freeCodeCamp  
**Workshop:** Build a Countup  
**Language:** JavaScript  
**Focus:** Recursion

---

<p align="center">
  <strong>Recursion Section — Build a Countup Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
