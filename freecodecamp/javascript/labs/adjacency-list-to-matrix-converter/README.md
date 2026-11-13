# Build an Adjacency List to Matrix Converter

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Graphs%20and%20Trees-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Graphs and Trees" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Workshop-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Workshop" />
  <img src="https://img.shields.io/badge/Topic-Graphs%20and%20Trees-4B5563" alt="Graphs and Trees" />
</p>

> **Milestone:** Workshop setelah mempelajari Graphs and Trees.

## About

Project ini membuat converter untuk mengubah representasi graph dari **adjacency list** menjadi **adjacency matrix**.

Function `adjacencyListToMatrix()` menerima sebuah object yang berisi daftar neighbor untuk setiap node. Program kemudian membuat satu array untuk setiap node, mengisi seluruh posisi awal dengan `0`, lalu mengubah posisi yang memiliki hubungan dengan neighbor menjadi `1`.

Setelah seluruh baris selesai dibuat, baris-baris tersebut disimpan di dalam `matrixArr`, ditampilkan ke console, lalu dikembalikan oleh function.

## Konsep Utama

- Function
- Parameter
- Object
- Object keys
- Adjacency list
- Adjacency matrix
- Array
- Nested array
- Array indexing
- `Object.keys()`
- `length`
- `new Array()`
- `fill()`
- `for` loop
- `push()`
- `forEach()`
- Callback function
- `console.log()`
- `return`

## Struktur Project

```text
adjacency-list-to-matrix-converter/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `adjacencyListToMatrix()`

Function utama menerima satu parameter bernama `adjObj`.

```javascript
function adjacencyListToMatrix (adjObj) {
```

`adjObj` adalah object yang menyimpan adjacency list.

Setiap property menggunakan nomor node sebagai key, sedangkan value-nya berupa array yang berisi neighbor dari node tersebut.

### 2. Menghitung Jumlah Node

```javascript
const totalNodes = Object.keys(adjObj).length;
```

`Object.keys(adjObj)` menghasilkan array yang berisi key dari `adjObj`.

Property `length` kemudian digunakan untuk memperoleh jumlah node.

Nilai tersebut disimpan di dalam `totalNodes`.

### 3. Membuat Array Matrix

```javascript
let matrixArr = [];
```

`matrixArr` digunakan untuk menyimpan seluruh baris adjacency matrix.

Setiap node nantinya menghasilkan satu `nodeArr` yang dimasukkan ke dalam array ini.

### 4. Memproses Setiap Node

```javascript
for (let i = 0; i < totalNodes; i++) {
```

Outer `for` loop berjalan dari `0` sampai sebelum `totalNodes`.

Variable `i` digunakan sebagai nomor node yang sedang diproses.

Kode ini mengakses node berdasarkan nomor berurutan mulai dari `0`.

### 5. Mengambil Neighbor

```javascript
const neighbors = adjObj[i];
```

`neighbors` menyimpan array neighbor dari node yang sedang diproses.

Jika `i` bernilai `0`, kode mengambil:

```javascript
adjObj[0]
```

Jika `i` bernilai `1`, kode mengambil:

```javascript
adjObj[1]
```

dan proses yang sama berlanjut untuk node berikutnya.

### 6. Membuat Baris Matrix

```javascript
let nodeArr = new Array(totalNodes).fill(0);
```

`new Array(totalNodes)` membuat array dengan panjang sesuai jumlah node.

Method `fill(0)` mengisi seluruh posisi dengan nilai `0`.

Pada tahap ini, setiap posisi dianggap belum memiliki hubungan yang dicatat.

### 7. Memproses Setiap Neighbor

```javascript
for (let j = 0; j < neighbors.length; j++) {
```

Inner `for` loop digunakan untuk memeriksa setiap neighbor dari node saat ini.

Variable `j` menjadi index untuk array `neighbors`.

### 8. Mengambil Index Neighbor

```javascript
const neighborIndex = neighbors[j];
```

Nilai pada `neighbors[j]` disimpan ke dalam `neighborIndex`.

Nilai ini menunjukkan posisi pada `nodeArr` yang perlu diubah.

### 9. Menandai Hubungan dengan `1`

```javascript
nodeArr[neighborIndex] = 1;
```

Jika sebuah node memiliki neighbor tertentu, posisi yang sesuai di dalam `nodeArr` diubah dari `0` menjadi `1`.

Dengan demikian:

- `0` tetap digunakan pada posisi yang tidak ditandai sebagai neighbor.
- `1` digunakan pada posisi neighbor yang terdapat di adjacency list.

### 10. Menambahkan Baris ke Matrix

```javascript
matrixArr.push(nodeArr);
```

Setelah seluruh neighbor untuk satu node selesai diproses, `nodeArr` dimasukkan ke dalam `matrixArr`.

Method `push()` menambahkan baris tersebut ke bagian akhir array.

### 11. Menampilkan Setiap Baris Matrix

```javascript
matrixArr.forEach((nodes) => {
  console.log(nodes);
})
```

Method `forEach()` menjalankan callback untuk setiap baris di dalam `matrixArr`.

Parameter `nodes` mewakili satu baris adjacency matrix.

Setiap baris kemudian ditampilkan menggunakan:

```javascript
console.log(nodes);
```

### 12. Mengembalikan Matrix

```javascript
return matrixArr;
```

Setelah proses selesai, function mengembalikan seluruh adjacency matrix yang tersimpan di dalam `matrixArr`.

### 13. Menjalankan Function

```javascript
console.log(adjacencyListToMatrix({0: [1, 2], 1: [2], 2: [0, 3], 3: [2]}));
```

Function dipanggil menggunakan adjacency list:

```javascript
{
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [2]
}
```

Untuk node `0`, neighbor-nya adalah `1` dan `2`, sehingga barisnya menjadi:

```javascript
[0, 1, 1, 0]
```

Untuk node `1`, neighbor-nya adalah `2`, sehingga barisnya menjadi:

```javascript
[0, 0, 1, 0]
```

Untuk node `2`, neighbor-nya adalah `0` dan `3`, sehingga barisnya menjadi:

```javascript
[1, 0, 0, 1]
```

Untuk node `3`, neighbor-nya adalah `2`, sehingga barisnya menjadi:

```javascript
[0, 0, 1, 0]
```

Hasil akhir `matrixArr` adalah:

```javascript
[
  [0, 1, 1, 0],
  [0, 0, 1, 0],
  [1, 0, 0, 1],
  [0, 0, 1, 0]
]
```

## Method yang Dipakai

- `Object.keys()` digunakan untuk mengambil key dari object `adjObj`.
- `fill()` digunakan untuk mengisi seluruh posisi awal pada `nodeArr` dengan `0`.
- `push()` digunakan untuk menambahkan setiap `nodeArr` ke dalam `matrixArr`.
- `forEach()` digunakan untuk menjalankan callback pada setiap baris matrix.
- `console.log()` digunakan untuk menampilkan setiap baris dan hasil akhir converter.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `adjacencyListToMatrix()` | Mengubah adjacency list menjadi adjacency matrix |
| `adjObj` | Menyimpan adjacency list yang diterima function |
| `totalNodes` | Menyimpan jumlah node |
| `matrixArr` | Menyimpan seluruh baris adjacency matrix |
| `neighbors` | Menyimpan daftar neighbor dari node saat ini |
| `nodeArr` | Menyimpan satu baris adjacency matrix |
| `neighborIndex` | Menyimpan index neighbor yang akan diberi nilai `1` |
| `Object.keys()` | Mengambil key dari object |
| `fill(0)` | Mengisi baris awal matrix dengan nilai `0` |
| `nodeArr[neighborIndex] = 1` | Menandai hubungan yang terdapat pada adjacency list |
| `push()` | Menambahkan satu baris ke matrix |
| `forEach()` | Memproses setiap baris matrix |
| `return matrixArr` | Mengembalikan adjacency matrix yang telah dibuat |

## Catatan Belajar

- **Adjacency list** pada project ini direpresentasikan menggunakan object yang value-nya berupa array neighbor.
- **Adjacency matrix** direpresentasikan sebagai array yang berisi beberapa array baris.
- **`Object.keys(adjObj).length`** menentukan jumlah node berdasarkan jumlah key yang tersedia.
- **`nodeArr`** selalu dibuat dengan panjang yang sama dengan jumlah node.
- **`fill(0)`** memberikan nilai awal `0` pada seluruh posisi di setiap baris.
- **`neighborIndex`** menentukan posisi yang harus diubah menjadi `1`.
- **Outer loop** memproses setiap node.
- **Inner loop** memproses setiap neighbor dari node tersebut.
- **`push()`** menambahkan setiap baris yang sudah selesai ke `matrixArr`.
- **`forEach()`** digunakan setelah matrix selesai dibuat untuk menampilkan setiap barisnya.
- **`return matrixArr`** membuat adjacency matrix hasil konversi tersedia sebagai nilai return function.

## What I Practiced

```text
JavaScript Functions
Function Parameters
Objects
Object Keys
Graphs
Adjacency Lists
Adjacency Matrices
Arrays
Nested Arrays
Array Indexing
Object.keys()
Array Length
Array fill()
For Loops
Array push()
Array forEach()
Callback Functions
Return Values
```

---

**Platform:** freeCodeCamp  
**Workshop:** Build an Adjacency List to Matrix Converter  
**Language:** JavaScript  
**Focus:** Graphs and Trees

---

<p align="center">
  <strong>Graphs and Trees Section — Build an Adjacency List to Matrix Converter Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
