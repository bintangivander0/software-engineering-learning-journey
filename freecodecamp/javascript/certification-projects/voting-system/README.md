# Build a Voting System

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Certification%20Project-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Certification Project" />
</p>

> **Milestone:** Certification Project setelah mempelajari Maps and Sets.

## About

Project ini merupakan Certification Project pada JavaScript Certification di freeCodeCamp yang membuat sistem voting sederhana menggunakan `Map` dan `Set`.

Program menyimpan setiap opsi voting sebagai key pada `Map` dan menyimpan kumpulan voter pada `Set`. Program juga menyediakan function untuk menambahkan opsi, memberikan vote, dan menampilkan hasil voting.

## Konsep Utama

- `Map` digunakan untuk menyimpan opsi voting dan kumpulan voter untuk setiap opsi.
- `Set` digunakan untuk menyimpan voter tanpa duplikasi pada setiap opsi.
- `.set()` digunakan untuk menambahkan opsi baru ke dalam `Map`.
- `.get()` digunakan untuk mengambil `Set` voter dari sebuah opsi.
- `.has()` digunakan untuk memeriksa keberadaan opsi atau voter.
- `.add()` digunakan untuk menambahkan voter ke dalam `Set`.
- `.size` digunakan untuk mendapatkan jumlah voter.
- `forEach()` digunakan untuk membaca setiap opsi dan kumpulan voter.
- Conditional statement digunakan untuk menentukan hasil berdasarkan kondisi data voting.

## Struktur Project

```text
voting-system/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Membuat `Map` untuk Polling

```js
const poll = new Map();
poll.set("Indonesia", new Set());
poll.set("Malaysia", new Set());
poll.set("Brunei", new Set());
```

`Map` digunakan untuk menyimpan setiap negara sebagai key dan `Set` sebagai value yang berisi voter untuk negara tersebut.

`Set` cocok digunakan untuk data voter karena setiap voter dapat disimpan sebagai nilai unik.

### 2. Menambahkan Voter

```js
poll.get("Indonesia").add("voters1");
poll.get("Indonesia").add("voters2");
poll.get("Indonesia").add("voters3");
```

`get()` mengambil `Set` milik opsi `Indonesia`, kemudian `add()` memasukkan voter ke dalam `Set` tersebut.

Pola yang sama digunakan untuk opsi `Malaysia` dan `Brunei`.

### 3. Function `addOption()`

```js
const addOption = (option) => {
  if (option === "") return `Option cannot be empty.`;

  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
  } else {
    return `Option "${option}" already exists.`;
  }
}
```

Function `addOption()` digunakan untuk menambahkan opsi baru ke dalam polling.

Program terlebih dahulu memeriksa apakah `option` kosong. Jika tidak kosong, `has()` digunakan untuk memeriksa apakah opsi tersebut sudah ada di dalam `poll`.

Jika belum ada, `set()` membuat key baru dengan value berupa `Set` kosong.

### 4. Function `vote()`

```js
const vote = (option, voterId) => {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  } else {
    const thisOption = poll.get(option);

    if (thisOption.has(voterId)) {
      return `Voter ${voterId} has already voted for "${option}".`;
    } else {
      thisOption.add(voterId);
      return `Voter ${voterId} voted for "${option}".`;
    }
  }
}
```

Function `vote()` memeriksa apakah opsi tersedia sebelum menerima vote.

Setelah `Set` voter untuk opsi tersebut diperoleh dengan `get()`, `has()` digunakan untuk memeriksa apakah voter sudah pernah memberikan vote.

Jika voter belum ada, `add()` memasukkannya ke dalam `Set`.

### 5. Function `displayResults()`

```js
const displayResults = () => {
  let result = "";

  poll.forEach((voters, country) => {
    result += `${country}: ${voters.size} votes\n`
  });

  return ("Poll Results:\n" + result).trimEnd();
}
```

Function `displayResults()` membaca seluruh data polling menggunakan `forEach()`.

Parameter `voters` berisi `Set` voter, sedangkan `country` berisi key dari `Map`.

Property `size` digunakan untuk mendapatkan jumlah voter pada setiap opsi.

Hasil setiap opsi kemudian digabungkan ke dalam string `result`.

### 6. Menampilkan Hasil Polling

```js
console.log(displayResults());
```

Function `displayResults()` dipanggil dan hasil polling ditampilkan pada console.

## Method yang Dipakai

- `set()` digunakan untuk menambahkan key dan value ke dalam `Map`.
- `get()` digunakan untuk mengambil value berdasarkan key dari `Map`.
- `has()` digunakan untuk memeriksa keberadaan key pada `Map` atau nilai pada `Set`.
- `add()` digunakan untuk menambahkan nilai ke dalam `Set`.
- `forEach()` digunakan untuk melakukan iterasi terhadap isi `Map`.
- `trimEnd()` digunakan untuk menghapus whitespace atau line break pada bagian akhir string.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `Map` | Menyimpan pasangan key dan value untuk data polling |
| `Set` | Menyimpan voter sebagai nilai unik |
| `set()` | Menambahkan key dan value ke `Map` |
| `get()` | Mengambil value berdasarkan key |
| `has()` | Memeriksa keberadaan data |
| `add()` | Menambahkan nilai ke `Set` |
| `size` | Mengambil jumlah nilai dalam `Set` |
| `forEach()` | Melakukan iterasi terhadap data `Map` |
| `trimEnd()` | Menghapus whitespace di akhir string |

## Catatan Belajar

- **`Map`** cocok digunakan ketika data perlu disimpan dalam pasangan key dan value.
- **`Set`** cocok digunakan ketika setiap nilai harus unik.
- **`has()`** dapat digunakan untuk memeriksa keberadaan data sebelum menambahkannya.
- **`get()`** digunakan untuk mengambil value dari `Map` berdasarkan key.
- **`size`** dapat digunakan untuk mengetahui jumlah voter yang tersimpan dalam `Set`.

## What I Practiced

```text
JavaScript Map
JavaScript Set
Map set()
Map get()
Map has()
Set has()
Set add()
Set size
Map forEach()
Conditional Statements
Arrow Functions
Template Literals
String trimEnd()
```

---

**Platform:** freeCodeCamp  
**Certification Project:** Build a Voting System  
**Language:** JavaScript

---

<p align="center">
  <strong>Certification Project — Build a Voting System Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
