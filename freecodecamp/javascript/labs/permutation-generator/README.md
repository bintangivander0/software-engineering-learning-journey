# Build a Permutation Generator

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Recursion-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Recursion" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Recursion-4B5563" alt="Recursion" />
</p>

> **Milestone:** Lab pada chapter **Recursion**.

## About

Project ini membuat function `permuteString()` untuk menghasilkan seluruh kemungkinan permutation dari karakter-karakter sebuah string.

Implementasi menggunakan recursion dengan tiga parameter: `str` untuk menyimpan karakter yang belum dipilih, `prefix` untuk menyimpan karakter yang sudah dipilih, dan `results` untuk menyimpan hasil permutation.

Pada setiap pemanggilan recursive, satu karakter dipilih dari `str`, karakter tersebut ditambahkan ke `prefix`, lalu karakter yang sudah dipilih dikeluarkan dari `str`. Proses berhenti ketika `str` sudah kosong. Pada kondisi tersebut, `prefix` merupakan satu permutation lengkap dan dimasukkan ke `results`.

## Konsep Utama

- **Recursion** digunakan untuk membangun permutation secara bertahap.
- **Base case** terjadi ketika `str.length === 0`.
- **`prefix`** menyimpan karakter yang sudah dipilih untuk permutation saat ini.
- **`str`** menyimpan karakter yang belum digunakan.
- **`results`** menyimpan seluruh permutation yang sudah ditemukan.
- **`for` loop** mencoba setiap karakter yang masih tersedia.
- **`slice()`** digunakan untuk membuat string yang tidak lagi berisi karakter yang sedang dipilih.
- **`Set`** digunakan untuk menghapus hasil permutation yang duplikat.
- **Spread syntax** mengubah `Set` kembali menjadi array.

## Struktur Project

```text
permutation-generator/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `permuteString()`

```javascript
function permuteString(str, prefix = "", results = []) {
```

Function menerima tiga parameter.

| Parameter | Fungsi |
|---|---|
| `str` | Karakter yang belum digunakan |
| `prefix` | Karakter yang sudah dipilih |
| `results` | Array untuk menyimpan hasil |

`prefix` memiliki default value `""`, sedangkan `results` memiliki default value `[]`.

Karena kedua parameter tersebut memiliki default value, function dapat dipanggil hanya dengan satu argument:

```javascript
permuteString("cat");
```

### 2. Base Case

```javascript
if (str.length === 0) {
  results.push(prefix);
  return results;
}
```

Ketika `str` sudah kosong, tidak ada karakter lagi yang harus dipilih.

Artinya `prefix` sudah menjadi satu permutation lengkap.

Contohnya:

```text
str = ""
prefix = "cat"
```

Maka:

```javascript
results.push("cat");
```

`"cat"` dimasukkan ke array hasil dan recursion berhenti pada cabang tersebut.

### 3. Mencoba Setiap Karakter

```javascript
for (let i = 0; i < str.length; i++) {
```

Loop digunakan untuk mencoba setiap karakter yang tersedia sebagai pilihan berikutnya.

Jika:

```text
str = "cat"
```

maka recursion mencoba:

```text
c
a
t
```

sebagai karakter berikutnya.

### 4. Menyimpan Karakter yang Dipilih

```javascript
const hurufTerkini = str[i];
```

`hurufTerkini` menyimpan karakter pada posisi yang sedang diproses.

Contohnya jika:

```text
str = "cat"
i = 1
```

maka:

```text
hurufTerkini = "a"
```

### 5. Menghapus Karakter yang Sudah Dipilih

```javascript
const hurufTersisa = str.slice(0, i) + str.slice(i + 1);
```

String baru dibuat tanpa karakter yang sedang dipilih.

Contohnya:

```text
str = "cat"
i = 1
hurufTerkini = "a"
```

Maka:

```text
str.slice(0, 1) = "c"
str.slice(2)    = "t"
```

sehingga:

```text
hurufTersisa = "ct"
```

### 6. Memanggil Function Secara Recursive

```javascript
permuteString(
  hurufTersisa,
  prefix + hurufTerkini,
  results
);
```

Karakter yang dipilih ditambahkan ke `prefix`.

Pada saat yang sama, `hurufTersisa` menjadi `str` untuk pemanggilan berikutnya.

Contohnya:

```text
str = "cat"
prefix = ""
hurufTerkini = "c"
hurufTersisa = "at"
```

menjadi:

```javascript
permuteString("at", "c", results);
```

Kemudian proses yang sama dilakukan terhadap `"at"`.

### 7. Membentuk Cabang Permutation

Untuk:

```javascript
permuteString("cat");
```

proses secara konseptual dapat dilihat sebagai:

```text
cat
├── c
│   ├── ca → cat
│   └── ct → cta
│
├── a
│   ├── ac → act
│   └── at → atc
│
└── t
    ├── tc → tca
    └── ta → tac
```

Hasil yang terbentuk mengikuti urutan pilihan karakter pada setiap loop:

```javascript
[
  "cat",
  "cta",
  "act",
  "atc",
  "tca",
  "tac"
]
```

### 8. Menghapus Duplikasi

```javascript
return [...new Set(results)];
```

`Set` digunakan untuk menyimpan nilai unik.

Hal ini dibutuhkan ketika string memiliki karakter yang sama.

Contohnya:

```javascript
permuteString("fcc");
```

Beberapa cabang dapat menghasilkan permutation yang sama.

`Set` menghilangkan duplikasi tersebut sebelum hasil dikembalikan sebagai array.

### 9. Array Hasil

`results` diberikan ke setiap pemanggilan recursive.

Dengan demikian, setiap base case dapat menambahkan permutation ke array yang sama:

```javascript
results.push(prefix);
```

Setelah seluruh cabang selesai diproses, array tersebut berisi seluruh permutation yang ditemukan.

## Alur Kerja

```text
permuteString(str)
       ↓
Apakah str kosong?
   ├── Ya → push prefix → selesai
   │
   └── Tidak
         ↓
   Coba setiap karakter
         ↓
   Pilih karakter
         ↓
   Buang karakter dari str
         ↓
   Tambahkan karakter ke prefix
         ↓
   Panggil permuteString() lagi
         ↓
   Ulangi sampai str kosong
         ↓
   Hapus duplikasi dengan Set
         ↓
   Return results
```

## Contoh Lengkap

Input:

```javascript
permuteString("cat");
```

Tahap pertama memiliki tiga pilihan:

```text
c
a
t
```

Ketika `c` dipilih:

```text
prefix = "c"
str = "at"
```

Kemudian muncul dua pilihan:

```text
ca
ct
```

Cabang tersebut menghasilkan:

```text
cat
cta
```

Cabang `a` menghasilkan:

```text
act
atc
```

Cabang `t` menghasilkan:

```text
tca
tac
```

Sehingga hasil akhirnya:

```javascript
[
  "cat",
  "cta",
  "act",
  "atc",
  "tca",
  "tac"
]
```

## Method dan Syntax yang Dipakai

- **`slice()`** digunakan untuk mengambil bagian string sebelum dan sesudah karakter yang sedang dipilih.
- **`push()`** digunakan untuk memasukkan permutation lengkap ke `results`.
- **`Set`** digunakan untuk menyimpan nilai unik.
- **Spread syntax (`...`)** digunakan untuk mengubah isi `Set` menjadi array baru.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| Recursion | Membuat permutation dari sisa karakter |
| `str` | Menyimpan karakter yang belum dipilih |
| `prefix` | Menyimpan karakter yang sudah dipilih |
| `results` | Menyimpan seluruh hasil |
| Base case | Menghentikan recursion ketika `str` kosong |
| `for` | Mencoba setiap karakter |
| `slice()` | Menghapus karakter yang sedang dipilih |
| `push()` | Menambahkan hasil lengkap |
| `Set` | Menghapus permutation duplikat |
| Spread syntax | Mengubah `Set` menjadi array |

## Catatan Belajar

- **Recursion** pada project ini membuat beberapa cabang berdasarkan pilihan karakter.
- **Base case** memastikan setiap cabang berhenti ketika seluruh karakter sudah masuk ke `prefix`.
- **`prefix` dan `str` bekerja berpasangan**: satu menyimpan karakter yang sudah dipilih dan satu menyimpan karakter yang belum dipilih.
- **Loop di dalam recursion** membuat setiap karakter dapat dicoba sebagai pilihan pada setiap level.
- **`slice()`** membuat string yang tidak lagi berisi karakter yang sudah digunakan.
- **`results` dibagikan** ke pemanggilan recursive sehingga setiap base case dapat menyimpan hasil pada array yang sama.
- **`Set` diperlukan** untuk menangani string yang memiliki karakter duplikat seperti `"fcc"`.
- **Urutan hasil** mengikuti urutan karakter yang dicoba oleh `for` loop dan urutan recursion.

## What I Practiced

```text
JavaScript Recursion
Recursive Functions
Base Case
Recursive Case
String Processing
for Loops
slice()
push()
Arrays
Set
Spread Syntax
Backtracking Pattern
Permutation Generation
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Permutation Generator  
**Language:** JavaScript  
**Focus:** Recursion

---

<p align="center">
  <strong>Recursion Section — Build a Permutation Generator Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
