# Build a Linked List

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Data%20Structures-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Data Structures" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Workshop-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Workshop" />
  <img src="https://img.shields.io/badge/Topic-Data%20Structures-4B5563" alt="Data Structures" />
</p>

> **Milestone:** Workshop setelah mempelajari Data Structures.

## About

Workshop ini membangun singly linked list sederhana menggunakan JavaScript tanpa memakai struktur linked list bawaan. List menyimpan `head` dan `length`, sedangkan setiap node menyimpan `element` dan `next`.

Implementasi ini melatih cara membuat list kosong, menambahkan node di akhir, mencari node dengan traversal, dan menghapus node berdasarkan nilai `element`.

## Konsep Utama

- Linked List
- Node
- `head`
- `next`
- `length`
- Object literal
- Function
- `while` loop
- Traversal
- Reference antar-node
- `JSON.stringify()`

## Struktur Project

```text
linked-list/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. `initList()` membuat wadah list

```js
function initList() {
  return {
    head: null,
    length: 0
  };
}
```

Function ini belum membuat node. Function ini hanya membuat object yang menjadi wadah untuk mengelola linked list.

`head` bernilai `null` karena belum ada node pertama. `length` bernilai `0` karena jumlah node masih kosong.

Jadi ketika menulis:

```js
const myList = initList();
```

`myList` mempunyai dua informasi utama:

1. `head` menyimpan reference ke node pertama.
2. `length` menyimpan jumlah node dalam list.

### 2. `isEmpty()` mengecek kondisi list

```js
function isEmpty(list) {
  return list.length === 0;
}
```

Function ini tidak mencari node. Function hanya membaca `length`.

Jika `length` bernilai `0`, hasilnya `true`. Jika jumlah node sudah lebih dari `0`, hasilnya `false`.

### 3. `add()` membuat node baru

```js
const node = {
  element: element,
  next: null
};
```

Bagian ini adalah inti pertama dari linked list. Satu node dibuat sebagai object yang mempunyai dua bagian.

- `element` menyimpan data yang ingin dimasukkan.
- `next` menyimpan reference ke node berikutnya.

`next` dimulai dengan `null` karena node baru belum terhubung ke node lain.

### 4. `add()` ketika list masih kosong

```js
if (isEmpty(list)) {
  list.head = node;
}
```

Jika list kosong, node baru langsung menjadi `head`.

Contohnya saat menjalankan:

```js
add(myList, 42);
```

Node berisi `42` dibuat. Karena list masih kosong, `head` sekarang menyimpan reference ke node tersebut.

Setelah itu:

```js
list.length++;
```

Jumlah node berubah dari `0` menjadi `1`.

### 5. `add()` ketika list sudah mempunyai node

```js
let current = list.head;
while (current.next !== null) {
  current = current.next;
}
current.next = node;
```

Di sinilah konsep traversal mulai terasa.

`current` adalah variable sementara yang digunakan untuk berjalan dari satu node ke node berikutnya. Variable ini dimulai dari `head` agar node asli tidak dipindahkan.

`while` terus berjalan selama `current.next` masih menunjuk ke node lain. Ketika `current.next` sudah `null`, berarti `current` sedang berada di node terakhir.

Setelah node terakhir ditemukan, barulah:

```js
current.next = node;
```

Node terakhir sekarang menyimpan reference ke node baru.

Ini alasan mengapa kode seperti ini terasa berbeda dari array. Pada array, kita biasanya mengakses posisi berdasarkan index. Pada linked list ini, kita harus mengikuti reference `next` satu node demi satu node.

### 6. `remove()` mencari node yang ingin dihapus

```js
let previous = null;
let current = list.head;
```

`current` digunakan untuk mencari node target. `previous` digunakan untuk menyimpan node yang berada tepat sebelum `current`.

Pencariannya dilakukan dengan:

```js
while (current !== null && current.element !== element) {
  previous = current;
  current = current.next;
}
```

Setiap putaran melakukan dua pekerjaan.

1. `previous` menyimpan posisi `current` sebelum berpindah.
2. `current` berpindah ke node berikutnya melalui `current.next`.

Loop berhenti ketika target ditemukan atau ketika `current` sudah `null`.

### 7. `remove()` menghapus node tanpa memindahkan seluruh list

Jika target tidak ditemukan:

```js
if (current === null) {
  return;
}
```

Function selesai dan `length` tidak berubah.

Jika target berada setelah node pertama:

```js
if(previous !== null) {
  previous.next = current.next;
}
```

`previous.next` dibuat menyimpan reference yang sebelumnya dimiliki `current.next`. Dengan begitu, node target tidak lagi menjadi bagian dari jalur traversal list.

Jika target adalah node pertama:

```js
else {
  list.head = current.next;
}
```

`head` dipindahkan ke node setelah target.

Setelah node berhasil dihapus:

```js
list.length--;
```

Jumlah node dikurangi satu.

### 8. Urutan pengujian pada bagian akhir

Kode berikut membuat list kosong lalu mengisinya:

```js
const myList = initList();
add(myList, 42);
add(myList, 43);
add(myList, 44);
```

Setelah tiga pemanggilan `add()`, `myList.length` bernilai `3` dan `head` menunjuk ke node berisi `42`.

Kemudian:

```js
remove(myList, 43);
```

Node berisi `43` dihapus. `42` tetap menjadi node pertama, sedangkan node `44` tetap berada di list.

`JSON.stringify(myList, null, 2)` digunakan agar struktur object dapat dicetak ke console dalam format JSON yang lebih mudah dibaca.

## Bagian yang Paling Penting Buat Saya

Bagian yang paling bikin bingung pada awalnya adalah memahami bahwa `current`, `previous`, `head`, dan `next` bukan sekadar nama variable. Masing-masing memegang reference yang digunakan untuk menentukan posisi kita saat membaca atau mengubah linked list.

Cara membaca kode ini lebih mudah jika dilakukan dalam urutan berikut:

1. **Buat wadah** dengan `initList()`.
2. **Buat node** yang berisi `element` dan `next`.
3. **Tentukan head** jika list masih kosong.
4. **Telusuri node** menggunakan `current` jika list sudah berisi data.
5. **Hubungkan node** melalui property `next`.
6. **Gunakan previous dan current** saat mencari node yang akan dihapus.
7. **Perbarui reference** dan `length` setelah perubahan berhasil.

Hal yang perlu benar-benar dipahami bukan hafalan sintaksnya, tetapi hubungan antara `head`, `current`, `previous`, dan `next` saat list berubah.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `head` | Menyimpan reference ke node pertama |
| `length` | Menyimpan jumlah node |
| `element` | Menyimpan data dalam node |
| `next` | Menyimpan reference ke node berikutnya |
| `current` | Menunjuk node yang sedang diperiksa |
| `previous` | Menyimpan node sebelum `current` saat proses remove |
| `isEmpty()` | Mengecek apakah list tidak memiliki node |
| `add()` | Menambahkan node ke akhir list |
| `remove()` | Menghapus node berdasarkan nilai `element` |
| `JSON.stringify()` | Menampilkan object dalam format JSON yang lebih mudah dibaca |

## Catatan Belajar

- **Node** adalah object yang menyimpan `element` dan `next`.
- **`head`** menunjuk ke node pertama dalam list.
- **`next`** digunakan untuk menemukan node berikutnya.
- **Traversal** dilakukan dengan memindahkan `current` melalui `current.next`.
- **`previous`** diperlukan ketika node yang ditemukan harus dilewati dari hubungan list.
- **`length`** harus diperbarui setiap kali node berhasil ditambahkan atau dihapus.
- **Linked list** tidak diakses berdasarkan index seperti array, tetapi melalui hubungan antar-node.

## What I Practiced

```text
JavaScript Functions
Object Literals
Linked List Nodes
Head and Next References
While Loops
Linked List Traversal
Reference Manipulation
JSON.stringify()
```

---

**Platform:** freeCodeCamp  
**Workshop:** Build a Linked List  
**Language:** JavaScript  
**Focus:** Data Structures

---

<p align="center">
  <strong>Data Structures Section — Build a Linked List Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
