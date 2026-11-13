# Implement the Data Sanitizer Sweep Process

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Loops-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Loops" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Loops-4B5563" alt="Loops" />
</p>

> **Milestone:** Lab setelah mempelajari Loops.

## About

Project ini mengimplementasikan proses pemeriksaan dan sanitasi log menggunakan dua function, yaitu `sanitizeLog()` dan `cleanLogs()`.

Function `sanitizeLog()` memeriksa sebuah log terhadap daftar karakter yang tidak diperbolehkan. Jika karakter tersebut ditemukan, seluruh kemunculannya diganti dengan `"#"`.

Function `cleanLogs()` kemudian memproses kumpulan log menggunakan `for...of` loop. Function ini menghitung jumlah entry, mendeteksi karakter fatal, menghitung informational entry, dan menghitung entry yang membutuhkan sanitasi sebelum mengembalikan ringkasan proses.

## Konsep Utama

- Function
- Function parameters
- Array
- Array iteration
- `forEach()`
- `for...of`
- `includes()`
- `replaceAll()`
- `startsWith()`
- Conditional statement
- `else if`
- Boolean
- Counter
- Early return
- String comparison
- Template literal
- `return`

## Struktur Project

```text
data-sanitizer-sweep-process/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `sanitizeLog()`

Function pertama menerima dua parameter:

```javascript
function sanitizeLog(entry, disallowedCharacters) {
```

`entry` adalah string log yang akan diperiksa.

`disallowedCharacters` adalah array yang berisi karakter-karakter yang tidak diperbolehkan.

Function ini mengembalikan `entry` setelah seluruh karakter yang perlu diganti selesai diproses.

### 2. Memeriksa Setiap Karakter yang Tidak Diperbolehkan

```javascript
disallowedCharacters.forEach((char) => {
```

Method `forEach()` digunakan untuk memproses setiap elemen dari `disallowedCharacters`.

Pada setiap iterasi, parameter `char` menyimpan satu karakter yang sedang diperiksa.

### 3. Memeriksa Apakah Karakter Ada di Dalam Log

```javascript
if (entry.includes(char)) {
```

Method `includes()` memeriksa apakah `entry` mengandung `char`.

Jika karakter tersebut ditemukan, kondisi bernilai `true` dan proses penggantian dilakukan.

### 4. Mengganti Karakter

```javascript
entry = entry.replaceAll(char, "#");
```

Method `replaceAll()` mengganti seluruh kemunculan `char` di dalam `entry` dengan:

```text
#
```

Nilai hasil penggantian kemudian disimpan kembali ke variable `entry`.

Karena proses berada di dalam `forEach()`, pemeriksaan berlanjut untuk karakter berikutnya dalam `disallowedCharacters`.

### 5. Mengembalikan Log yang Telah Diproses

```javascript
return entry;
```

Setelah seluruh karakter selesai diperiksa, `sanitizeLog()` mengembalikan nilai `entry`.

Jika tidak ada karakter yang cocok, nilai yang dikembalikan tetap sama dengan input awal.

### 6. Function `cleanLogs()`

Function kedua menerima dua parameter:

```javascript
function cleanLogs (logs, disallowedCharacters) {
```

`logs` adalah kumpulan log yang akan diperiksa.

`disallowedCharacters` adalah daftar karakter yang digunakan oleh `sanitizeLog()` untuk menentukan apakah sebuah entry membutuhkan sanitasi.

### 7. Menghitung Total Entry

```javascript
const totalEntry = logs.length;
```

Property `length` digunakan untuk memperoleh jumlah seluruh entry di dalam `logs`.

Jumlah tersebut disimpan di `totalEntry` dan digunakan pada ringkasan akhir.

### 8. Menyiapkan Status dan Counter

```javascript
let fatalMarker = false;
let sanitizedEntry = 0;
let informationalEntry = 0;
```

Tiga variable digunakan selama proses.

`fatalMarker` menyimpan status apakah karakter fatal telah ditemukan.

`sanitizedEntry` menghitung jumlah entry yang terdeteksi membutuhkan sanitasi.

`informationalEntry` menghitung jumlah entry yang diawali dengan karakter `"/"`.

### 9. Memproses Setiap Log

```javascript
for (const log of logs) {
```

`for...of` loop digunakan untuk mengambil setiap `log` dari array `logs`.

Setiap entry kemudian diperiksa melalui beberapa kondisi secara berurutan.

### 10. Memeriksa Fatal Character

```javascript
if (log.includes("$")) {
```

Method `includes()` digunakan untuk memeriksa apakah sebuah log mengandung:

```text
$
```

Jika karakter tersebut ditemukan, proses dianggap mengalami kondisi fatal.

### 11. Mengubah `fatalMarker`

```javascript
fatalMarker = true;
```

Ketika `"$"` ditemukan, `fatalMarker` diubah dari `false` menjadi `true`.

### 12. Menghentikan Proses

```javascript
return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
```

Setelah karakter fatal ditemukan, function langsung menjalankan `return`.

Artinya, `cleanLogs()` berhenti pada saat itu juga dan entry setelah log tersebut tidak diproses.

Nilai yang dikembalikan adalah:

```text
Sanitizing stopped. Failure Reason: Fatal character occurred.
```

### 13. Memeriksa Informational Entry

```javascript
if (log.startsWith("/")) {
```

Jika tidak ada fatal character, program memeriksa apakah log dimulai dengan:

```text
/
```

Method `startsWith()` digunakan untuk melakukan pemeriksaan tersebut.

### 14. Menghitung Informational Entry

```javascript
informationalEntry++;
```

Jika log dimulai dengan `"/"`, nilai `informationalEntry` ditambah satu.

Pada struktur kondisi kode ini, entry tersebut kemudian tidak masuk ke blok `else if` untuk pemeriksaan sanitasi.

### 15. Memeriksa Apakah Log Membutuhkan Sanitasi

```javascript
else if (log !== sanitizeLog(log, disallowedCharacters)) {
```

Jika log bukan informational entry, program memanggil:

```javascript
sanitizeLog(log, disallowedCharacters)
```

Hasil sanitasi dibandingkan dengan nilai `log` asli menggunakan operator:

```javascript
!==
```

Jika hasil dari `sanitizeLog()` berbeda dari log asli, berarti terdapat setidaknya satu karakter yang menyebabkan hasil string berubah.

### 16. Menghitung Sanitized Entry

```javascript
sanitizedEntry++;
```

Jika log asli berbeda dari hasil `sanitizeLog()`, nilai `sanitizedEntry` ditambah satu.

Pada kode ini, hasil `sanitizeLog()` digunakan untuk menentukan apakah entry berubah.

Function `cleanLogs()` tidak menyimpan string hasil sanitasi tersebut ke dalam array baru.

### 17. Memeriksa Status Setelah Loop

```javascript
if (!fatalMarker) {
```

Setelah seluruh log selesai diproses, program memeriksa bahwa `fatalMarker` masih bernilai `false`.

Jika karakter fatal sebelumnya ditemukan, function sudah berhenti melalui early `return`.

### 18. Mengembalikan Ringkasan

```javascript
return `Total Entry Count: ${totalEntry}. Sanitized Entry Count: ${sanitizedEntry}. Informational Entry Count: ${informationalEntry}. Finished sanitizing logs.`;
```

Jika proses selesai tanpa fatal character, function mengembalikan sebuah template literal.

Ringkasan tersebut berisi:

- jumlah seluruh entry;
- jumlah entry yang terdeteksi membutuhkan sanitasi;
- jumlah informational entry;
- pesan bahwa proses sanitasi selesai.

## Method yang Dipakai

- `forEach()` digunakan untuk memproses setiap karakter di dalam `disallowedCharacters`.
- `includes()` digunakan untuk memeriksa keberadaan karakter tertentu di dalam sebuah string.
- `replaceAll()` digunakan untuk mengganti seluruh kemunculan karakter yang tidak diperbolehkan dengan `"#"`.
- `startsWith()` digunakan untuk memeriksa apakah sebuah log diawali dengan `"/"`.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `sanitizeLog()` | Memproses satu log berdasarkan daftar karakter yang tidak diperbolehkan |
| `cleanLogs()` | Memeriksa kumpulan log dan mengembalikan ringkasan proses |
| `disallowedCharacters` | Menyimpan karakter yang diperiksa oleh `sanitizeLog()` |
| `forEach()` | Memproses setiap karakter yang tidak diperbolehkan |
| `includes()` | Memeriksa keberadaan karakter dalam string |
| `replaceAll()` | Mengganti seluruh kemunculan karakter tertentu |
| `totalEntry` | Menyimpan jumlah seluruh log |
| `fatalMarker` | Menyimpan status ditemukannya fatal character |
| `sanitizedEntry` | Menghitung entry yang berubah ketika diproses oleh `sanitizeLog()` |
| `informationalEntry` | Menghitung entry yang dimulai dengan `"/"` |
| `for...of` | Memproses setiap entry di dalam `logs` |
| `startsWith()` | Memeriksa karakter awal sebuah log |
| Early `return` | Menghentikan `cleanLogs()` ketika fatal character ditemukan |
| Template literal | Membentuk ringkasan akhir proses |

## Catatan Belajar

- **`sanitizeLog()`** menangani proses pemeriksaan dan penggantian karakter pada satu entry.
- **`forEach()`** menjalankan pemeriksaan untuk setiap karakter di dalam `disallowedCharacters`.
- **`includes()`** digunakan sebelum `replaceAll()` untuk menentukan apakah karakter terdapat di dalam string.
- **`replaceAll()`** mengganti seluruh kemunculan karakter yang cocok dengan `"#"`.
- **`cleanLogs()`** memproses setiap log menggunakan `for...of`.
- **Karakter `"$"`** menyebabkan function berhenti melalui early `return`.
- **`startsWith("/")`** digunakan untuk menentukan informational entry.
- **Informational entry** dihitung melalui cabang `if`, sehingga tidak masuk ke pemeriksaan sanitasi pada cabang `else if`.
- **`sanitizeLog()`** dipanggil dalam kondisi perbandingan untuk menentukan apakah sebuah log berubah setelah proses sanitasi.
- **`sanitizedEntry`** menghitung entry yang hasil sanitasi string-nya berbeda dari log asli.
- **`fatalMarker`** dimulai dengan `false` dan berubah menjadi `true` ketika fatal character ditemukan.
- **Template literal** digunakan untuk membentuk ringkasan ketika seluruh proses selesai tanpa fatal character.

## What I Practiced

```text
JavaScript Functions
Function Parameters
Arrays
Array Length
For...of Loops
Array forEach()
String includes()
String replaceAll()
String startsWith()
Conditional Statements
Else-if Statements
Boolean State
Counters
Increment Operator
Early Returns
String Comparison
Template Literals
Return Values
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement the Data Sanitizer Sweep Process  
**Language:** JavaScript  
**Focus:** Loops

---

<p align="center">
  <strong>Loops Section — Implement the Data Sanitizer Sweep Process Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
