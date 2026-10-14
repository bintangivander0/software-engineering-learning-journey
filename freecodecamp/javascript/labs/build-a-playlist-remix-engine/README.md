# Build a Playlist Remix Engine

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-JavaScript%20Fundamentals%20Review-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript JavaScript Fundamentals Review" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-JavaScript%20Fundamentals%20Review-4B5563" alt="JavaScript Fundamentals Review" />
</p>

> **Milestone:** Lab setelah mempelajari JavaScript Fundamentals Review.

## About

Project ini membuat pipeline untuk mengolah beberapa playlist menjadi jadwal playlist baru.

Data playlist terlebih dahulu diratakan menjadi satu array, kemudian setiap track diberi `score`. Setelah itu track duplikat berdasarkan `trackId` dihapus, jumlah track dari setiap artist dibatasi, dan data akhirnya diubah menjadi daftar slot playlist.

Proses utama dijalankan oleh `remixPlaylist()` dengan menghubungkan beberapa function secara berurutan.

## Konsep Utama

- Array bersarang digunakan sebagai struktur awal beberapa playlist.
- Nested `for` loop digunakan untuk memproses playlist dan track.
- Object digunakan untuk menyimpan data track yang sudah diolah.
- `source` menyimpan posisi playlist dan posisi track asal.
- Perhitungan arithmetic digunakan untuk menghasilkan `score`.
- Nested loop digunakan untuk memeriksa `trackId` yang sudah pernah ditemukan.
- Dynamic property access digunakan untuk menghitung jumlah track berdasarkan artist.
- Function composition digunakan untuk menghubungkan seluruh tahap pemrosesan.

## Struktur Project

```text
playlist-remix-engine/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Data `playlists`

```javascript
const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    ...
  ],
  ...
];
```

`playlists` merupakan array yang berisi beberapa playlist.

Setiap playlist berisi object track dengan informasi seperti `trackId`, `artist`, `title`, `votes`, dan `bpm`.

### 2. Function `flattenPlaylists()`

```javascript
function flattenPlaylists(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
```

Function terlebih dahulu memastikan input berupa array.

Jika input bukan array, function langsung mengembalikan array kosong.

```javascript
const hasil = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
```

Dua `for` loop digunakan untuk mengakses setiap playlist dan setiap track di dalam playlist tersebut.

Setiap track kemudian dibuat menjadi object baru.

```javascript
const objekBaru = {
  trackId: arr[i][j].trackId,
  artist: arr[i][j].artist,
  title: arr[i][j].title,
  votes: arr[i][j].votes,
  bpm: arr[i][j].bpm,
  source: [i, j]
};
```

Property `source` menyimpan index playlist dan index track asal dalam bentuk array `[i, j]`.

Track yang sudah diubah dimasukkan ke `hasil` menggunakan `push()`.

### 3. Function `scoreTracks()`

```javascript
function scoreTracks(arr) {
  let hasil = [];
```

Function menerima array track yang sudah diratakan.

Setiap track dibuat menjadi object baru dengan tambahan property `score`.

```javascript
score: Number(
  arr[i].votes * 10 - Math.abs(arr[i].bpm - 120)
)
```

Score dihitung dari jumlah `votes` dikalikan `10`, kemudian dikurangi selisih absolut `bpm` terhadap `120`.

`Math.abs()` digunakan untuk mendapatkan nilai absolut dari selisih tersebut.

### 4. Function `dedupeTracks()`

```javascript
function dedupeTracks(arr) {
  let hasil = [];
  let idYangSudahAda = [];
```

Function menyiapkan array `hasil` dan array `idYangSudahAda`.

`idYangSudahAda` digunakan untuk mencatat `trackId` yang sudah diproses.

```javascript
for (let j = 0; j < idYangSudahAda.length; j++) {
  if (idYangSudahAda[j] === trackSekarang.trackId) {
    sudahAda = true;
  }
}
```

Nested loop memeriksa apakah `trackId` track saat ini sudah terdapat dalam daftar ID yang pernah ditemukan.

Jika belum ada, ID dimasukkan ke `idYangSudahAda` dan track dimasukkan ke `hasil`.

```javascript
if (sudahAda === false) {
  idYangSudahAda.push(trackSekarang.trackId);
  hasil.push(trackSekarang);
}
```

Dengan cara ini, hanya kemunculan pertama dari setiap `trackId` yang dipertahankan.

### 5. Function `enforceArtistQuota()`

```javascript
function enforceArtistQuota(arr, num) {
  const hasil = [];
  const jumlahArtist = [];
```

Function membatasi jumlah track dari setiap artist berdasarkan nilai `num`.

```javascript
if (jumlahArtist[artistSekarang] === undefined) {
  jumlahArtist[artistSekarang] = 0;
}
```

Jika artist belum memiliki catatan jumlah, nilainya diinisialisasi menjadi `0`.

```javascript
if (jumlahArtist[artistSekarang] < num) {
  hasil.push(trackSekarang);
  ++jumlahArtist[artistSekarang];
}
```

Track hanya dimasukkan ke hasil jika jumlah track artist tersebut masih lebih kecil dari batas `num`.

### 6. Function `buildSchedule()`

```javascript
function buildSchedule(arr) {
  const hasil = [];
```

Function mengubah array track menjadi daftar jadwal.

```javascript
const jadwalBaru = {
  slot: i + 1,
  trackId: trackSekarang.trackId
};
```

Setiap track mendapatkan nomor `slot` mulai dari `1`, serta `trackId`.

Hasil akhirnya berupa array object jadwal.

### 7. Function `remixPlaylist()`

```javascript
function remixPlaylist(arr, num) {
  return buildSchedule(
    enforceArtistQuota(
      dedupeTracks(
        scoreTracks(
          flattenPlaylists(arr)
        )
      ),
      num
    )
  );
}
```

`remixPlaylist()` menggabungkan seluruh tahap pemrosesan menjadi satu pipeline.

Urutannya adalah:

```text
playlists
   ↓
flattenPlaylists()
   ↓
scoreTracks()
   ↓
dedupeTracks()
   ↓
enforceArtistQuota()
   ↓
buildSchedule()
```

Dengan urutan tersebut, data playlist diratakan, diberi score, dibuang duplikatnya, dibatasi berdasarkan artist, lalu diubah menjadi jadwal.

## Ringkasan Cepat

| Tahap | Function | Hasil |
|---|---|---|
| 1 | `flattenPlaylists()` | Satu array berisi seluruh track |
| 2 | `scoreTracks()` | Track dengan tambahan `score` |
| 3 | `dedupeTracks()` | Track unik berdasarkan `trackId` |
| 4 | `enforceArtistQuota()` | Track dengan batas jumlah per artist |
| 5 | `buildSchedule()` | Jadwal berisi `slot` dan `trackId` |

## Catatan Belajar

- **Nested array** dapat diproses menggunakan nested loop ketika data memiliki lebih dari satu tingkat.
- **Object baru** dapat dibuat untuk menambahkan informasi hasil proses tanpa bergantung pada object track awal.
- **`Math.abs()`** berguna ketika perhitungan membutuhkan jarak atau selisih tanpa memperhatikan tanda negatif.
- **`indexOf()` tidak digunakan** pada deduplikasi; source code menggunakan array ID dan nested loop untuk memeriksa duplikat.
- **Dynamic property access** pada `jumlahArtist[artistSekarang]` memungkinkan jumlah setiap artist disimpan berdasarkan nama artist.
- **Function composition** membuat beberapa tahap pemrosesan dapat dirangkai menjadi satu pipeline.
- **Tidak ada sorting** pada source code, sehingga `score` hanya dihitung dan tidak digunakan untuk mengurutkan track.
- **Quota artist** diterapkan setelah deduplikasi sehingga track dengan `trackId` yang sama sudah disingkirkan terlebih dahulu.

## What I Practiced

```text
JavaScript Fundamentals
Arrays
Nested Arrays
Nested for Loops
Objects
Dynamic Property Access
Math.abs()
Arithmetic Operators
Array Mutation
Deduplication
Data Transformation
Function Composition
Pipeline Processing
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Playlist Remix Engine  
**Language:** JavaScript  
**Focus:** JavaScript Fundamentals Review

---

<p align="center">
  <strong>JavaScript Fundamentals Review Section — Build a Playlist Remix Engine Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
