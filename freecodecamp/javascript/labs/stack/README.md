# Implement a Stack

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Data%20Structures-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" -alt="JavaScript Data Structures" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Data%20Structures-4B5563" alt="Data Structures" />
</p>

> **Milestone:** Lab setelah mempelajari Data Structures.

## About

Lab ini mengimplementasikan struktur data **stack** menggunakan array JavaScript. Stack menyimpan kumpulan elemen dan mengikuti aturan **LIFO (Last In, First Out)**, sehingga elemen yang terakhir dimasukkan menjadi elemen pertama yang dikeluarkan.

Project menyediakan fungsi untuk membuat stack, menambahkan elemen, mengeluarkan elemen teratas, melihat elemen teratas tanpa mengeluarkannya, memeriksa apakah stack kosong, dan menghapus seluruh isi stack.

## Konsep Utama

- **Stack** — struktur data yang menempatkan penambahan dan penghapusan elemen pada bagian teratas.
- **LIFO** — elemen yang terakhir masuk menjadi elemen pertama yang keluar.
- **Array** — digunakan sebagai tempat menyimpan seluruh elemen stack.
- **Object** — digunakan untuk membungkus `collection` sebagai bagian dari stack.
- **Arrow function** — digunakan untuk membuat fungsi `initStack`, `push`, `pop`, `peek`, `isEmpty`, dan `clear`.
- **`push()`** — menambahkan elemen ke bagian akhir array.
- **`pop()`** — mengambil dan menghapus elemen terakhir dari array.
- **`length`** — digunakan untuk mengetahui jumlah elemen dalam array.
- **Index** — digunakan oleh `peek()` untuk mengambil elemen paling akhir tanpa menghapusnya.
- **`return`** — digunakan untuk mengembalikan hasil dari fungsi.

## Struktur Project

```text
stack/
└── solution.js
```

## Source Code

- [`solution.js`](./stack/solution.js)

## Pembahasan

### 1. Membuat Stack dengan `initStack`

```javascript
const initStack = () => {
  return {
    collection: []
  };
};
```

`initStack` digunakan untuk membuat stack baru.

Bagian `collection: []` membuat array kosong yang menjadi tempat penyimpanan elemen.

Ketika `initStack()` dipanggil, hasilnya adalah object dengan `collection` kosong.

### 2. Menambahkan Elemen dengan `push`

```javascript
const push = (stack, element) => {
  stack.collection.push(element);
};
```

Fungsi `push` menerima `stack` sebagai stack yang akan diubah dan `element` sebagai nilai yang ingin dimasukkan.

Baris `stack.collection.push(element)` mengambil array `collection`, kemudian menambahkan `element` ke bagian paling akhir.

Misalnya stack berisi `[10, 20]`, lalu `push(stack, 30)` membuatnya menjadi `[10, 20, 30]`.

Bagian akhir array digunakan sebagai bagian teratas stack.

### 3. Mengeluarkan Elemen dengan `pop`

```javascript
const pop = (stack, element) => {
  return stack.collection.pop(element);
};
```

Fungsi `pop` mengambil elemen paling akhir dari `collection` dan sekaligus menghapusnya dari array.

Misalnya `[10, 20, 30]` diproses dengan `pop(stack)`, nilai `30` dikembalikan dan isi stack menjadi `[10, 20]`.

Parameter `element` memang terdapat pada source code, tetapi `Array.prototype.pop()` tidak menggunakan argumen tersebut. Operasi `pop()` tetap mengambil elemen terakhir.

### 4. Melihat Elemen Teratas dengan `peek`

```javascript
const peek = (stack) => {
  const lastIndex = stack.collection.length - 1;
  return stack.collection[lastIndex];
};
```

`peek` digunakan untuk melihat elemen teratas tanpa menghapusnya.

Baris `stack.collection.length - 1` mencari indeks terakhir array.

Jika `collection` berisi `[10, 20, 30]`, jumlah elemennya adalah `3`, sehingga indeks terakhir adalah `2`.

Kemudian `stack.collection[lastIndex]` mengambil nilai `30`.

Berbeda dengan `pop()`, `peek()` tidak mengubah isi stack.

### 5. Memeriksa Stack dengan `isEmpty`

```javascript
const isEmpty = (stack) => {
  return stack.collection.length === 0;
};
```

Fungsi ini memeriksa apakah jumlah elemen di dalam `collection` sama dengan `0`.

Jika `collection` adalah `[]`, hasilnya `true`.

Jika stack memiliki elemen, hasilnya `false`.

### 6. Mengosongkan Stack dengan `clear`

```javascript
const clear = (stack) => {
  stack.collection = [];
};
```

Fungsi `clear` mengosongkan seluruh stack dengan mengganti `collection` menjadi array kosong baru.

Jika sebelumnya berisi `[10, 20, 30]`, setelah `clear(stack)` menjadi `[]`.

## Method yang Dipakai

- `push()` digunakan untuk menambahkan elemen ke akhir array.
- `pop()` digunakan untuk mengambil dan menghapus elemen terakhir dari array.
- `length` digunakan untuk mengetahui jumlah elemen dalam array.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| Stack | Menyimpan elemen dengan aturan LIFO |
| LIFO | Elemen terakhir masuk menjadi yang pertama keluar |
| `collection` | Array yang menyimpan elemen stack |
| `push()` | Menambahkan elemen ke bagian akhir array |
| `pop()` | Menghapus dan mengembalikan elemen terakhir |
| `peek()` | Mengambil elemen terakhir tanpa menghapusnya |
| `length` | Mengetahui jumlah elemen dalam array |
| `isEmpty()` | Memeriksa apakah stack tidak memiliki elemen |
| `clear()` | Mengosongkan seluruh isi stack |

## Catatan Belajar

- **Stack** menggunakan aturan bahwa elemen terakhir yang masuk menjadi elemen pertama yang keluar.
- **`collection`** adalah array yang digunakan sebagai tempat penyimpanan isi stack.
- **`push()`** menambahkan elemen ke akhir array sehingga elemen tersebut menjadi bagian teratas stack.
- **`pop()`** mengambil elemen terakhir sehingga urutan LIFO dapat dipertahankan.
- **`peek()`** hanya melihat elemen teratas tanpa mengubah isi stack.
- **`length - 1`** digunakan karena indeks terakhir array selalu satu angka di bawah jumlah elemennya.
- **`isEmpty()`** menghasilkan `true` ketika jumlah elemen adalah `0`.
- **`clear()`** membuat `collection` kembali menjadi array kosong.

## What I Practiced

```text
JavaScript Arrow Functions
JavaScript Objects
JavaScript Arrays
Stack Data Structure
LIFO
Array push()
Array pop()
Array length
Array Indexing
return
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement a Stack  
**Language:** JavaScript  
**Focus:** Data Structures

---

<p align="center">
  <strong>Data Structures Section — Implement a Stack Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
