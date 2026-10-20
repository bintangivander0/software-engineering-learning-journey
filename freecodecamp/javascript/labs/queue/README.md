# Implement a Queue

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Data%20Structures-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Data Structures" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Data%20Structures-4B5563" alt="Data Structures" />
</p>

> **Milestone:** Lab setelah mempelajari Data Structures.

## About

Lab ini mengimplementasikan struktur data **queue** menggunakan array JavaScript. Queue menyimpan kumpulan elemen dengan aturan **FIFO (First In, First Out)**, sehingga elemen yang pertama masuk menjadi elemen pertama yang dikeluarkan.

Project menyediakan fungsi untuk membuat queue, menampilkan isi queue, menambahkan elemen ke bagian belakang, mengambil elemen dari bagian depan, melihat elemen paling depan, mengetahui jumlah elemen, dan memeriksa apakah queue kosong.

## Konsep Utama

- **Queue** — struktur data linear yang menambahkan elemen dari belakang dan mengeluarkannya dari depan.
- **FIFO** — elemen yang pertama masuk menjadi elemen pertama yang keluar.
- **Array** — digunakan sebagai tempat menyimpan elemen queue.
- **Object** — digunakan untuk membungkus `collection` sebagai bagian dari queue.
- **`push()`** — menambahkan elemen ke bagian akhir array.
- **`shift()`** — mengambil dan menghapus elemen pertama dari array.
- **Index `0`** — digunakan oleh `front()` untuk mengambil elemen paling depan tanpa menghapusnya.
- **`length`** — digunakan untuk mengetahui jumlah elemen dalam queue.
- **`console.log()`** — digunakan oleh `print()` untuk menampilkan isi queue.

## Struktur Project

```text
queue/
└── solution.js
```

## Source Code

- [`solution.js`](./queue/solution.js)

## Pembahasan

### 1. Membuat Queue dengan `initQueue`

```javascript
function initQueue() {
  return {
    collection: []
  };
}
```

`initQueue()` digunakan untuk membuat queue baru.

Bagian:

```javascript
collection: []
```

membuat array kosong yang menjadi tempat penyimpanan elemen queue.

Ketika `initQueue()` dipanggil, hasilnya adalah object dengan `collection` yang masih kosong.

### 2. Menampilkan Isi Queue dengan `print`

```javascript
function print(queue) {
  console.log(queue.collection);
}
```

Fungsi `print()` menerima sebuah queue.

Baris:

```javascript
console.log(queue.collection);
```

mengambil `collection` dari queue lalu menampilkannya ke konsol.

Fungsi ini hanya menampilkan isi queue dan tidak mengubah elemennya.

### 3. Menambahkan Elemen dengan `enqueue`

```javascript
function enqueue(queue, element) {
  queue.collection.push(element);
}
```

`enqueue()` digunakan untuk memasukkan elemen baru ke queue.

Baris:

```javascript
queue.collection.push(element);
```

menambahkan `element` ke bagian paling akhir array.

Misalnya queue berisi:

```text
["A", "B"]
```

kemudian:

```javascript
enqueue(queue, "C");
```

membuat isi queue menjadi:

```text
["A", "B", "C"]
```

Elemen baru masuk ke bagian belakang queue.

### 4. Mengeluarkan Elemen dengan `dequeue`

```javascript
function dequeue(queue) {
  return queue.collection.shift();
}
```

`dequeue()` digunakan untuk mengambil elemen yang berada paling depan.

Method:

```javascript
shift()
```

mengambil elemen pertama array sekaligus menghapusnya.

Misalnya:

```text
["A", "B", "C"]
```

kemudian `dequeue(queue)` mengembalikan `"A"` dan queue menjadi:

```text
["B", "C"]
```

Inilah bagian yang membuat queue mengikuti aturan FIFO.

### 5. Melihat Elemen Depan dengan `front`

```javascript
function front(queue) {
  return queue.collection[0];
}
```

`front()` digunakan untuk melihat elemen paling depan tanpa menghapusnya.

Angka:

```javascript
[0]
```

digunakan karena elemen pertama array berada pada indeks `0`.

Jika queue berisi:

```text
["A", "B", "C"]
```

maka:

```javascript
front(queue);
```

menghasilkan `"A"`.

Isi queue tetap sama.

### 6. Menghitung Jumlah Elemen dengan `size`

```javascript
function size(queue) {
  return queue.collection.length;
}
```

`size()` digunakan untuk mengetahui jumlah elemen yang sedang berada di dalam queue.

Jika:

```text
["A", "B", "C"]
```

maka:

```javascript
queue.collection.length
```

bernilai `3`.

Fungsi kemudian mengembalikan angka tersebut.

### 7. Memeriksa Queue dengan `isEmpty`

```javascript
function isEmpty(queue) {
  return queue.collection.length === 0;
}
```

`isEmpty()` memeriksa apakah queue tidak memiliki elemen.

Jika `collection` adalah:

```text
[]
```

maka:

```javascript
queue.collection.length === 0
```

bernilai `true`.

Jika masih terdapat elemen, hasilnya `false`.

## Method yang Dipakai

- `push()` digunakan untuk menambahkan elemen ke bagian akhir array.
- `shift()` digunakan untuk mengambil dan menghapus elemen pertama dari array.
- `length` digunakan untuk mengetahui jumlah elemen dalam array.
- `console.log()` digunakan untuk menampilkan isi queue ke konsol.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| Queue | Menyimpan elemen dengan aturan FIFO |
| FIFO | Elemen pertama masuk menjadi yang pertama keluar |
| `collection` | Array yang menyimpan elemen queue |
| `enqueue()` | Menambahkan elemen ke bagian belakang queue |
| `dequeue()` | Mengambil dan menghapus elemen paling depan |
| `front()` | Melihat elemen paling depan tanpa menghapusnya |
| `size()` | Mengembalikan jumlah elemen queue |
| `isEmpty()` | Memeriksa apakah queue kosong |
| `push()` | Menambahkan elemen ke akhir array |
| `shift()` | Menghapus dan mengembalikan elemen pertama array |
| `length` | Mengetahui jumlah elemen array |

## Catatan Belajar

- **Queue** bekerja seperti antrean sehingga elemen yang datang lebih dulu dilayani lebih dulu.
- **FIFO** menjelaskan aturan utama queue: yang pertama masuk adalah yang pertama keluar.
- **`enqueue()`** menggunakan `push()` untuk memasukkan elemen ke bagian belakang queue.
- **`dequeue()`** menggunakan `shift()` untuk mengambil elemen dari bagian depan queue.
- **`front()`** menggunakan indeks `0` untuk melihat elemen pertama tanpa menghapusnya.
- **`size()`** menggunakan `length` untuk mengetahui jumlah elemen yang sedang tersimpan.
- **`isEmpty()`** membandingkan `length` dengan `0` untuk mengetahui apakah queue kosong.
- **`print()`** hanya menampilkan `collection` dan tidak mengubah isi queue.

## What I Practiced

```text
JavaScript Functions
JavaScript Objects
JavaScript Arrays
Queue Data Structure
FIFO
Array push()
Array shift()
Array length
Array Indexing
console.log()
return
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement a Queue  
**Language:** JavaScript  
**Focus:** Data Structures

---

<p align="center">
  <strong>Data Structures Section — Implement a Queue Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
