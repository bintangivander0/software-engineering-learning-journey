# Build a Device Loan Ledger

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Loops-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" lt="JavaScript Loops" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Loops-4B5563" alt="Loops" />
</p>

> **Milestone:** Lab setelah mempelajari JavaScript Loops.

## About

Project ini membuat sebuah ledger untuk mengelola peminjaman perangkat IT.

Source code menyediakan beberapa function untuk menangani proses checkout dan check-in perangkat, mencari perangkat yang sudah melewati tanggal jatuh tempo, serta mengubah ledger antara object JavaScript dan JSON string.

Implementasi menggunakan object bersarang, `for` loop, `while` tidak digunakan, beberapa array method, operasi tanggal sederhana, object spread, dan JSON.

## Konsep Utama

- Object bersarang digunakan untuk menyimpan informasi perangkat dan borrower.
- Object spread digunakan untuk membuat object ledger dan device yang diperbarui.
- `for` loop digunakan untuk memproses perangkat pada `listOverdueDevices()`.
- `filter()` digunakan untuk memilih perangkat yang sedang dipinjam dan sudah melewati jatuh tempo.
- `sort()` digunakan untuk mengurutkan perangkat berdasarkan tanggal jatuh tempo.
- `Object.values()` digunakan untuk mengambil seluruh device object dari ledger.
- `split()` dan `map(Number)` digunakan untuk memecah tanggal menjadi angka.
- `JSON.stringify()` digunakan untuk mengubah ledger menjadi JSON string.
- `JSON.parse()` digunakan untuk mengembalikan JSON string menjadi object JavaScript.

## Struktur Project

```text
device-load-ledger/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Data `equipmentLedger`

```javascript
const equipmentLedger = {
  "1": {
    type: "PC",
    status: "CheckedOut",
    borrower: {
      name: "John Smith",
      email: "john@acme.org"
    },
    dueDate: "11/30/2025"
  },
  ...
};
```

`equipmentLedger` merupakan object yang menggunakan asset tag sebagai key.

Setiap asset menyimpan jenis perangkat, status peminjaman, informasi borrower, dan tanggal jatuh tempo.

### 2. Function `checkoutDevice()`

```javascript
function checkoutDevice(ledger, assetTag, borrower) {
```

Function menerima ledger, asset tag, dan object borrower.

Langkah pertama mengambil device berdasarkan `assetTag`.

```javascript
const device = ledger[assetTag];
```

Jika asset tidak ditemukan, function mengembalikan ledger semula dan pesan bahwa asset tag tidak ditemukan.

Jika device sudah memiliki status `CheckedOut`, function juga mengembalikan ledger semula dengan pesan bahwa device sudah dipinjam.

Untuk proses checkout yang valid, source code membuat salinan ledger:

```javascript
const updatedLedger = {...ledger}
```

Kemudian membuat salinan device dan object `borrower`:

```javascript
const updatedDevice = {
  ...device,
  borrower: {
    ...device.borrower
  }
};
```

Status device kemudian diubah menjadi `CheckedOut`, sedangkan nama dan email borrower diperbarui dari object `borrower`.

Device yang telah diperbarui dimasukkan kembali ke `updatedLedger` menggunakan asset tag.

### 3. Function `checkinDevice()`

```javascript
function checkinDevice(ledger, assetTag) {
```

Function mengambil device berdasarkan asset tag.

Jika device tidak ditemukan, ledger semula dikembalikan bersama pesan error.

Jika ditemukan, source code membuat salinan ledger dan device, kemudian mengosongkan data borrower dan `dueDate`:

```javascript
updatedDevice.borrower.name = "";
updatedDevice.borrower.email = "";
updatedDevice.dueDate = "";
updatedDevice.status = "CheckedIn";
```

Hasil akhirnya dikembalikan dalam object yang berisi `ledger` dan `message`.

### 4. Function `parseDate()`

```javascript
function parseDate(dateString) {
  return dateString.split("/").map(Number);
}
```

Function memecah string tanggal berdasarkan `/`.

Contohnya:

```text
"11/30/2025"
```

menjadi:

```text
[11, 30, 2025]
```

`map(Number)` mengubah setiap bagian string menjadi number.

### 5. Function `dateToNumber()`

```javascript
function dateToNumber(dateString) {
  const [month, day, year] = parseDate(dateString);
  return (year * 10000) + (month * 100) + day;
}
```

Function mengubah tanggal menjadi satu angka yang dapat dibandingkan.

Untuk tanggal `"11/30/2025"`, komponen tahun, bulan, dan hari disusun menjadi bentuk numerik berdasarkan urutan tahun → bulan → hari.

Dengan format ini, tanggal dapat dibandingkan menggunakan operator `<`.

### 6. Function `listOverdueDevices()`

```javascript
function listOverdueDevices(ledger, today) {
```

Function mencari perangkat yang sudah melewati tanggal jatuh tempo.

Pertama, seluruh device diambil dari ledger:

```javascript
const devices = Object.values(ledger);
```

Kemudian `filter()` digunakan untuk memilih device yang memenuhi dua kondisi:

```javascript
device.status === "CheckedOut"
```

dan:

```javascript
dateToNumber(device.dueDate) < dateToNumber(today)
```

Artinya, hanya perangkat yang masih berstatus `CheckedOut` dan tanggal jatuh temponya lebih awal daripada `today` yang dimasukkan ke hasil.

Setelah itu, hasil diurutkan berdasarkan `dueDate`:

```javascript
overdueDevices.sort((a, b) => {
  return dateToNumber(a.dueDate) - dateToNumber(b.dueDate);
});
```

Perangkat dengan tanggal jatuh tempo paling awal berada lebih dahulu.

### 7. Contoh Pemeriksaan Overdue

```javascript
console.log(listOverdueDevices(equipmentLedger, "12/5/2025"));
```

Dengan tanggal `"12/5/2025"` sebagai `today`, device yang berstatus `CheckedOut` dan memiliki `dueDate` sebelum tanggal tersebut akan masuk ke hasil.

Source code mengembalikan object device secara langsung, bukan asset tag.

### 8. Function `serializeLedger()`

```javascript
function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}
```

`JSON.stringify()` mengubah object ledger menjadi JSON string.

Bentuk ini dapat digunakan ketika data perlu direpresentasikan sebagai string JSON.

### 9. Function `loadLedger()`

```javascript
function loadLedger(json) {
  return JSON.parse(json);
}
```

`JSON.parse()` melakukan kebalikan dari `JSON.stringify()` dengan mengubah JSON string kembali menjadi object JavaScript.

## Alur Kerja

```text
equipmentLedger
      │
      ├── checkoutDevice()
      │       └── memperbarui status dan borrower
      │
      ├── checkinDevice()
      │       └── mengosongkan borrower dan dueDate
      │
      ├── listOverdueDevices()
      │       ├── Object.values()
      │       ├── filter()
      │       └── sort()
      │
      └── serializeLedger() ↔ loadLedger()
              JSON.stringify() ↔ JSON.parse()
```

## Method yang Dipakai

- `Object.values()` digunakan untuk mengambil seluruh value dari object ledger.
- `filter()` digunakan untuk memilih device yang memenuhi kondisi overdue.
- `sort()` digunakan untuk mengurutkan device berdasarkan tanggal jatuh tempo.
- `split()` digunakan untuk memisahkan komponen tanggal.
- `map()` digunakan untuk mengubah komponen tanggal menjadi number.
- `JSON.stringify()` digunakan untuk serialisasi object menjadi JSON string.
- `JSON.parse()` digunakan untuk mengubah JSON string menjadi object.
- `console.log()` digunakan untuk menampilkan hasil pemeriksaan overdue.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| Nested Object | Menyimpan data device dan borrower |
| Object Spread | Membuat salinan object yang diperbarui |
| `Object.values()` | Mengambil seluruh device dari ledger |
| `filter()` | Memilih device yang overdue |
| `sort()` | Mengurutkan berdasarkan due date |
| `split()` | Memecah string tanggal |
| `map(Number)` | Mengubah bagian tanggal menjadi number |
| `JSON.stringify()` | Mengubah object menjadi JSON |
| `JSON.parse()` | Mengubah JSON menjadi object |

## Catatan Belajar

- **Nested object** cocok untuk menyimpan data yang memiliki hubungan bertingkat seperti device dan borrower.
- **Object spread** dapat digunakan untuk membuat object baru berdasarkan property dari object sebelumnya.
- **`Object.values()`** berguna ketika key asset tag tidak diperlukan dan yang ingin diproses adalah seluruh object device.
- **`filter()`** dapat digunakan untuk memilih data berdasarkan beberapa kondisi.
- **`sort()`** dapat mengurutkan array menggunakan hasil perbandingan dua elemen.
- **Konversi tanggal** menjadi angka memudahkan perbandingan tanggal tanpa membuat object `Date`.
- **JSON serialization** memungkinkan object JavaScript direpresentasikan sebagai string.
- **`JSON.parse()`** mengembalikan JSON string menjadi struktur object JavaScript.

## What I Practiced

```text
JavaScript Objects
Nested Objects
Object Spread
for Loops
Array Methods
Object.values()
filter()
sort()
split()
map()
Date Comparison
JSON.stringify()
JSON.parse()
Data Transformation
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Device Loan Ledger  
**Language:** JavaScript  
**Focus:** Loops

---

<p align="center">
  <strong>JavaScript Loops Section — Build a Device Loan Ledger Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
