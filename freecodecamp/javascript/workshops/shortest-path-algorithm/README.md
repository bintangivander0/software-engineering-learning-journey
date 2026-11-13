# Implement the Shortest Path Algorithm

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Graphs%20and%20Trees-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Graphs and Trees" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Workshop-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Workshop" />
  <img src="https://img.shields.io/badge/Topic-Graphs%20and%20Trees-4B5563" alt="Graphs and Trees" />
</p>

> **Milestone:** Workshop setelah mempelajari Graphs and Trees.

## About

Project ini mengimplementasikan **shortest path algorithm** untuk mencari jarak terpendek dari sebuah node awal ke node lain pada graph berbobot.

Graph direpresentasikan menggunakan `adjMatrix`. Setiap nilai di dalam matrix menunjukkan jarak antara dua node, sedangkan `Infinity` digunakan untuk menandai bahwa tidak terdapat hubungan langsung antara pasangan node tertentu.

Function `shortestPath()` menyimpan jarak terpendek yang telah ditemukan, mencatat node yang sudah dikunjungi, memperbarui jalur ketika ditemukan jarak yang lebih kecil, dan dapat menampilkan hasil untuk satu target tertentu atau seluruh node yang dapat dijangkau.

## Konsep Utama

- Graph
- Weighted graph
- Adjacency matrix
- Function
- Default parameter
- Array
- Array indexing
- `Infinity`
- `new Array()`
- `fill()`
- `Array.from()`
- `for` loop
- `for...of`
- Conditional statement
- Boolean state
- Distance tracking
- Path tracking
- Spread syntax
- `keys()`
- `join()`
- Template literal
- `return`

## Struktur Project

```text
shortest-path-algorithm/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Konstanta `INF`

```javascript
const INF = Infinity;
```

`INF` menyimpan nilai `Infinity`.

Nilai ini digunakan di dalam adjacency matrix untuk menunjukkan bahwa dua node tidak memiliki hubungan langsung.

`Infinity` juga digunakan sebagai nilai awal untuk jarak yang belum diketahui.

### 2. Adjacency Matrix

```javascript
const adjMatrix = [
  [0, 5, 3, INF, 11, INF],
  [5, 0, 1, INF, INF, 2],
  [3, 1, 0, 1, 5, INF],
  [INF, INF, 1, 0, 9, 3],
  [11, INF, 5, 9, 0, INF],
  [INF, 2, INF, 3, INF, 0],
];
```

`adjMatrix` merepresentasikan hubungan dan jarak antar node.

Setiap baris dan kolom mewakili sebuah node.

Nilai `0` pada posisi diagonal menunjukkan jarak sebuah node ke dirinya sendiri.

Nilai angka lain menunjukkan jarak langsung antar node, sedangkan `INF` menunjukkan tidak adanya hubungan langsung.

### 3. Function `shortestPath()`

```javascript
function shortestPath(matrix, startNode, targetNode = null) {
```

Function menerima tiga parameter:

- `matrix` berisi adjacency matrix.
- `startNode` menentukan node awal pencarian.
- `targetNode` menentukan node tujuan tertentu.

`targetNode` memiliki default value `null`, sehingga function juga dapat digunakan tanpa menentukan satu target tertentu.

### 4. Menentukan Jumlah Node

```javascript
const n = matrix.length;
```

`n` menyimpan jumlah node berdasarkan jumlah baris pada adjacency matrix.

Nilai ini digunakan sebagai batas untuk berbagai perulangan dan pembuatan array pendukung.

### 5. Membuat Array `distances`

```javascript
const distances = new Array(n).fill(INF);
distances[startNode] = 0;
```

`distances` menyimpan jarak terpendek yang diketahui dari `startNode` ke setiap node.

Pada awal proses, seluruh nilai diisi dengan `INF` karena jaraknya belum diketahui.

Jarak dari `startNode` ke dirinya sendiri kemudian diubah menjadi `0`.

### 6. Membuat Array `paths`

```javascript
const paths = Array.from({ length: n }, (_, i) => [i]);
```

`paths` digunakan untuk menyimpan urutan node dari jalur yang ditemukan.

`Array.from()` membuat satu array untuk setiap node.

Setiap elemen awal berupa array yang berisi nomor node tersebut.

Ketika ditemukan jalur yang lebih pendek, nilai pada `paths` akan diperbarui.

### 7. Membuat Array `visited`

```javascript
const visited = new Array(n).fill(false);
```

`visited` mencatat apakah sebuah node sudah selesai dipilih untuk diproses.

Pada awal program, semua node memiliki nilai `false`.

Setelah sebuah node dipilih sebagai `current`, nilainya akan diubah menjadi `true`.

### 8. Perulangan Utama

```javascript
for (let i = 0; i < n; i++) {
```

Perulangan utama memberikan kesempatan untuk memproses node-node di dalam graph.

Di setiap putaran, program mencari node yang belum dikunjungi dengan nilai jarak terkecil yang sudah diketahui.

### 9. Menyiapkan Pencarian Node Berikutnya

```javascript
let minDistance = INF;
let current = -1;
```

`minDistance` menyimpan jarak terkecil yang ditemukan pada proses pemilihan node.

Nilai awalnya adalah `INF`.

`current` menyimpan index node yang akan diproses.

Nilai awal `-1` menunjukkan bahwa belum ada node yang dipilih.

### 10. Mencari Node dengan Jarak Terkecil

```javascript
for (let nodeNo = 0; nodeNo < n; nodeNo++) {
  if (!visited[nodeNo] && distances[nodeNo] < minDistance) {
    minDistance = distances[nodeNo];
    current = nodeNo;
  }
}
```

Program memeriksa seluruh node.

Sebuah node dapat dipilih jika:

- node tersebut belum dikunjungi;
- jaraknya lebih kecil daripada `minDistance`.

Jika kedua kondisi terpenuhi, `minDistance` dan `current` diperbarui.

Setelah perulangan selesai, `current` menunjuk node belum dikunjungi dengan jarak terkecil yang diketahui.

### 11. Menghentikan Proses Jika Tidak Ada Node

```javascript
if (current === -1) {
  break;
}
```

Jika `current` masih bernilai `-1`, tidak ada node lain yang dapat dipilih.

`break` menghentikan perulangan utama.

### 12. Menandai Node sebagai Sudah Dikunjungi

```javascript
visited[current] = true;
```

Node yang dipilih sebagai `current` ditandai dengan nilai `true`.

Node tersebut tidak akan dipilih kembali pada proses berikutnya.

### 13. Memeriksa Hubungan dari `current`

```javascript
for (let nodeNo = 0; nodeNo < n; nodeNo++) {
  const distance = matrix[current][nodeNo];
```

Program memeriksa setiap kemungkinan node yang terhubung dengan `current`.

`distance` menyimpan jarak langsung dari `current` menuju `nodeNo` berdasarkan adjacency matrix.

### 14. Memeriksa Hubungan yang Dapat Diproses

```javascript
if (distance !== INF && !visited[nodeNo]) {
```

Node hanya diproses jika:

- jaraknya bukan `INF`, sehingga terdapat hubungan langsung;
- node tujuan belum dikunjungi.

Jika salah satu kondisi tidak terpenuhi, bagian pembaruan jarak dilewati.

### 15. Menghitung Jarak Baru

```javascript
const newDistance = distances[current] + distance;
```

`newDistance` menghitung jarak dari `startNode` menuju `nodeNo` melalui `current`.

Nilai ini kemudian dibandingkan dengan jarak yang sebelumnya tersimpan pada `distances[nodeNo]`.

### 16. Memperbarui Jarak Terpendek

```javascript
if (newDistance < distances[nodeNo]) {
  distances[nodeNo] = newDistance;
  paths[nodeNo] = [...paths[current], nodeNo];
}
```

Jika `newDistance` lebih kecil daripada jarak yang sudah tersimpan, program memperbarui dua informasi.

`distances[nodeNo]` menerima jarak baru yang lebih kecil.

`paths[nodeNo]` menerima jalur menuju `current`, kemudian menambahkan `nodeNo` di bagian akhir menggunakan spread syntax.

### 17. Menentukan Node yang Akan Ditampilkan

```javascript
const targets = targetNode !== null ? [targetNode] : [...Array(n).keys()];
```

Jika `targetNode` diberikan, `targets` hanya berisi node tersebut.

Jika `targetNode` bernilai `null`, `Array(n).keys()` digunakan untuk memperoleh index seluruh node, kemudian spread syntax mengubahnya menjadi array.

Dengan demikian, function dapat menampilkan satu tujuan tertentu atau seluruh tujuan.

### 18. Memproses Hasil

```javascript
for (const nodeNo of targets) {
```

`for...of` digunakan untuk memproses setiap node yang terdapat dalam `targets`.

### 19. Melewati Hasil yang Tidak Perlu Ditampilkan

```javascript
if (nodeNo === startNode || distances[nodeNo] === INF) {
  continue;
}
```

Program tidak menampilkan:

- `startNode` itu sendiri;
- node yang jaraknya masih `INF`.

`continue` langsung melanjutkan ke node berikutnya.

### 20. Mengubah Jalur Menjadi String

```javascript
const path = paths[nodeNo].join(' -> ');
```

`join()` menggabungkan seluruh nomor node di dalam `paths[nodeNo]` menjadi satu string.

Separator yang digunakan adalah:

```text
 -> 
```

Hasilnya digunakan untuk menampilkan urutan node pada jalur yang ditemukan.

### 21. Menampilkan Jarak dan Jalur

```javascript
console.log(`\n${startNode}-${nodeNo} distance: ${distances[nodeNo]}\nPath: ${path}`);
```

Template literal digunakan untuk menampilkan:

- node awal;
- node tujuan;
- jarak yang ditemukan;
- jalur menuju node tersebut.

### 22. Mengembalikan Hasil

```javascript
return [distances, paths];
```

Function mengembalikan dua array:

- `distances`, yang menyimpan jarak yang ditemukan;
- `paths`, yang menyimpan jalur menuju setiap node.

### 23. Menjalankan Function

```javascript
shortestPath(adjMatrix, 0, 5);
```

Function dipanggil dengan:

- `adjMatrix` sebagai graph;
- node `0` sebagai `startNode`;
- node `5` sebagai `targetNode`.

Berdasarkan data pada matrix, function menghitung jarak dari node `0` menuju node `5` dan menampilkan jalur yang ditemukan untuk target tersebut.

## Method yang Dipakai

- `fill()` digunakan untuk mengisi array `distances` dan `visited` dengan nilai awal.
- `Array.from()` digunakan untuk membuat struktur awal array `paths`.
- `keys()` digunakan untuk menghasilkan index seluruh node ketika tidak ada satu `targetNode` tertentu.
- `join()` digunakan untuk menggabungkan nomor node menjadi string jalur.
- `console.log()` digunakan untuk menampilkan jarak dan jalur hasil pencarian.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `INF` | Mewakili jarak yang tidak tersedia atau belum diketahui |
| `adjMatrix` | Menyimpan hubungan dan jarak antar node |
| `shortestPath()` | Menghitung jarak dan jalur dari node awal |
| `distances` | Menyimpan jarak terpendek yang telah ditemukan |
| `paths` | Menyimpan urutan node pada jalur yang ditemukan |
| `visited` | Menyimpan status apakah node sudah diproses |
| `minDistance` | Menyimpan jarak terkecil saat memilih node berikutnya |
| `current` | Menyimpan node yang sedang diproses |
| `newDistance` | Menyimpan hasil perhitungan jarak melalui `current` |
| Spread syntax | Membentuk jalur baru dan array target |
| `keys()` | Menghasilkan index seluruh node |
| `join()` | Mengubah array jalur menjadi string |
| `return [distances, paths]` | Mengembalikan hasil jarak dan jalur |

## Catatan Belajar

- **Adjacency matrix** pada project ini menyimpan jarak langsung antar node.
- **`Infinity`** digunakan ketika tidak ada hubungan langsung atau jarak belum diketahui.
- **`distances[startNode] = 0`** menetapkan jarak node awal terhadap dirinya sendiri.
- **`visited`** mencegah node yang sudah diproses dipilih kembali.
- **`current`** dipilih dari node yang belum dikunjungi dengan jarak terkecil yang diketahui.
- **`newDistance`** digunakan untuk memeriksa apakah jalur melalui `current` menghasilkan jarak yang lebih kecil.
- **`paths`** diperbarui ketika jarak yang lebih kecil ditemukan.
- **Spread syntax** menyalin jalur menuju `current` dan menambahkan node tujuan berikutnya.
- **`targetNode`** bersifat opsional karena memiliki default value `null`.
- **`join(' -> ')`** mengubah daftar node menjadi teks jalur yang ditampilkan ke console.
- **Function** mengembalikan `distances` dan `paths` sehingga hasil perhitungan tetap tersedia setelah proses selesai.

## What I Practiced

```text
JavaScript Functions
Default Parameters
Graphs
Weighted Graphs
Adjacency Matrices
Arrays
Array Indexing
Infinity
Array fill()
Array.from()
For Loops
For...of Loops
Conditional Statements
Boolean State
Distance Tracking
Path Tracking
Spread Syntax
Array keys()
Array join()
Template Literals
Return Values
```

---

**Platform:** freeCodeCamp  
**Workshop:** Implement the Shortest Path Algorithm  
**Language:** JavaScript  
**Focus:** Graphs and Trees

---

<p align="center">
  <strong>Graphs and Trees Section — Implement the Shortest Path Algorithm Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
