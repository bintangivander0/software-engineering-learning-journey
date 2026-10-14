# Build an All-True Property Validator

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Higher%20Order%20Functions%20and%20Callbacks-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Higher Order Functions and Callbacks" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Higher%20Order%20Functions%20and%20Callbacks-4B5563" alt="Higher Order Functions and Callbacks" />
</p>

> **Milestone:** Lab setelah mempelajari Higher Order Functions and Callbacks.

## About

Project ini membuat fungsi `truthCheck()` untuk memeriksa apakah sebuah property pada seluruh object di dalam collection memiliki nilai yang truthy.

Fungsi menggunakan `reduce()` untuk memproses setiap object dan mempertahankan hasil pemeriksaan melalui accumulator. Property yang diperiksa ditentukan melalui parameter `pre`.

Pada pemanggilan yang tersedia, property `isBot` diperiksa pada seluruh object. Karena salah satu object memiliki nilai `isBot` berupa `false`, hasil pemeriksaannya adalah `false`.

## Konsep Utama

- `reduce()` digunakan untuk memproses seluruh object dalam array menjadi satu nilai akhir.
- **Higher Order Function** digunakan melalui callback yang diberikan kepada `reduce()`.
- **Arrow Function** digunakan untuk menulis callback secara ringkas.
- **Bracket Notation** digunakan melalui `obj[pre]` untuk mengakses property berdasarkan nama yang diberikan.
- **Truthy dan Falsy** digunakan untuk menentukan apakah nilai property dianggap benar.
- **Double Negation (`!!`)** digunakan untuk mengubah nilai menjadi boolean.
- **Logical AND (`&&`)** digunakan untuk mempertahankan hasil `true` hanya jika seluruh pemeriksaan bernilai truthy.
- **Accumulator** menyimpan hasil pemeriksaan dari object-object yang sudah diproses.

## Struktur Project

```text
all-true-property-validator/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Function `truthCheck()`

```javascript
function truthCheck(collection, pre) {
```

Function menerima dua parameter:

- `collection` berisi array object yang akan diperiksa.
- `pre` berisi nama property yang ingin diperiksa.

Dengan parameter `pre`, function tidak terpaku pada satu property tertentu.

### 2. Menggunakan `reduce()`

```javascript
return collection.reduce((acc, obj) => {
```

`reduce()` memproses setiap object dalam `collection` dan menghasilkan satu nilai akhir.

Parameter `acc` berperan sebagai accumulator, sedangkan `obj` mewakili object yang sedang diproses.

### 3. Mengakses Property Secara Dinamis

```javascript
const isTruthty = !!obj[pre];
```

`obj[pre]` menggunakan bracket notation sehingga nama property dapat diberikan melalui parameter `pre`.

Operator `!!` mengubah nilai property menjadi boolean.

Contohnya, ketika `pre` bernilai `"isBot"`, bagian:

```javascript
obj[pre]
```

mengakses:

```javascript
obj["isBot"]
```

### 4. Mempertahankan Hasil dengan `&&`

```javascript
return acc && isTruthty;
```

Operator `&&` membuat accumulator tetap `true` hanya jika hasil sebelumnya dan pemeriksaan saat ini sama-sama truthy.

Jika salah satu pemeriksaan menghasilkan `false`, hasil akhirnya menjadi `false`.

### 5. Initial Value `true`

```javascript
}, true);
```

Nilai awal accumulator adalah `true`.

Ini membuat pemeriksaan dimulai dari kondisi bahwa semua object dianggap memenuhi syarat sampai ditemukan property yang falsy.

### 6. Pemanggilan Function

```javascript
truthCheck(
  [
    {name: "Quincy", role: "Founder", isBot: false},
    {name: "Naomi", role: "", isBot: false},
    {name: "Camperbot", role: "Bot", isBot: true}
  ],
  "isBot"
);
```

Function memeriksa property `isBot` pada ketiga object.

Nilainya adalah:

```text
false
false
true
```

Karena tidak semua nilai `isBot` truthy, hasil akhirnya adalah:

```text
false
```

## Method yang Dipakai

- `reduce()` digunakan untuk mengolah seluruh elemen array menjadi satu nilai akhir.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `reduce()` | Menghasilkan satu nilai dari seluruh elemen array |
| Callback | Menentukan proses yang dilakukan pada setiap elemen |
| `obj[pre]` | Mengakses property secara dinamis |
| `!!` | Mengubah nilai menjadi boolean |
| `&&` | Memastikan seluruh pemeriksaan tetap bernilai truthy |
| Accumulator | Menyimpan hasil pemeriksaan sementara |

## Catatan Belajar

- **`reduce()`** dapat digunakan ketika beberapa nilai perlu diproses menjadi satu hasil akhir.
- **Callback** memungkinkan function lain menjalankan logika yang diberikan sebagai argument.
- **Bracket notation** memungkinkan property object diakses menggunakan nama property yang tersimpan dalam variable.
- **`!!`** dapat digunakan untuk mendapatkan nilai boolean dari suatu expression.
- **Accumulator** menyimpan hasil proses sebelumnya selama `reduce()` berjalan.
- **`&&`** dapat digunakan untuk memastikan seluruh kondisi harus bernilai truthy.

## What I Practiced

```text
JavaScript Higher Order Functions
Array reduce()
Callback Functions
Arrow Functions
Object Property Access
Bracket Notation
Truthy and Falsy Values
Boolean Coercion
Logical AND
Accumulator
```

---

**Platform:** freeCodeCamp  
**Lab:** Build an All-True Property Validator  
**Language:** JavaScript  
**Focus:** Higher Order Functions and Callbacks

---

<p align="center">
  <strong>Higher Order Functions and Callbacks Section — Build an All-True Property Validator Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
