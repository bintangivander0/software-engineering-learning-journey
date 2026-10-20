# Implement Linked List Operations

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Data%20Structures-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Data Structures" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Data%20Structures-4B5563" alt="Data Structures" />
</p>

> **Milestone:** Lab setelah mempelajari Data Structures.

## About

Lab ini mengembangkan linked list yang sudah dibuat pada workshop **Build a Linked List**. Struktur dasarnya tetap memakai `head`, `length`, `element`, dan `next`, lalu ditambah operasi untuk mengecek isi, mengambil elemen berdasarkan indeks, menyisipkan elemen, menghapus elemen berdasarkan indeks, dan mengosongkan seluruh daftar.

freeCodeCamp mendefinisikan project ini sebagai **Implement Linked List Operations** dan menempatkannya di chapter **Data Structures** pada JavaScript Certification. Lab ini meminta lima operasi tambahan: `contains`, `getAt`, `insertAt`, `removeAt`, dan `clear`.

## Konsep Utama

- **Linked list** menyimpan elemen sebagai beberapa objek yang saling terhubung melalui `next`.
- **`head`** menunjuk ke objek pertama yang menjadi awal daftar.
- **`next`** menyimpan hubungan menuju objek berikutnya.
- **`length`** mencatat jumlah objek yang sedang ada di daftar.
- **Pencarian** dilakukan dengan bergerak dari `head` ke `next` sampai elemen ditemukan atau ujung daftar tercapai.
- **Indeks** menunjukkan posisi elemen dengan posisi pertama bernilai `0`.
- **Penyisipan** mengubah hubungan `next` agar objek baru masuk pada posisi yang diminta.
- **Penghapusan** mengubah hubungan `next` agar objek yang dihapus tidak lagi menjadi bagian dari rantai.
- **`clear`** mengembalikan daftar ke keadaan kosong dengan `head = null` dan `length = 0`.

## Struktur Project

```text
solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. `initList()` — membuat daftar kosong

```javascript
function initList() {
  return {
    head: null,
    length: 0
  };
}
```

Fungsi ini membuat keadaan awal daftar.

`head: null` berarti belum ada objek pertama.

`length: 0` berarti jumlah elemen masih nol.

Dua nilai ini menjadi dasar yang dipakai fungsi-fungsi berikutnya.

---

### 2. `isEmpty()` — memeriksa apakah daftar kosong

```javascript
function isEmpty(list) {
  return list.length === 0;
}
```

Fungsi hanya melihat `length`.

Jika `length` bernilai `0`, hasilnya `true`.

Jika `length` bukan `0`, hasilnya `false`.

Jadi fungsi ini tidak perlu berjalan dari satu objek ke objek lain. Ia cukup membaca satu nilai.

---

### 3. `add()` — menambahkan objek baru

```javascript
function add(list, element) {
  const node = { element, next: null };

  if (isEmpty(list)) {
    list.head = node;
  } else {
    let current = list.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  list.length++;
}
```

Baris pertama membuat objek baru.

```javascript
const node = { element, next: null };
```

Objek baru mempunyai dua bagian:

- `element` menyimpan nilai.
- `next` awalnya `null` karena objek baru belum menunjuk ke objek lain.

Jika daftar masih kosong:

```javascript
list.head = node;
```

Objek baru langsung menjadi `head`.

Jika daftar sudah berisi objek, program membuat posisi kerja:

```javascript
let current = list.head;
```

`current` mulai dari objek pertama.

Lalu:

```javascript
while (current.next !== null) {
  current = current.next;
}
```

Perulangan terus berjalan selama objek yang sedang dilihat masih mempunyai objek berikutnya.

Baris:

```javascript
current = current.next;
```

memindahkan `current` satu posisi ke depan.

Perulangan berhenti ketika `current.next` bernilai `null`.

Artinya, `current` sedang berada pada objek terakhir.

Setelah objek terakhir ditemukan:

```javascript
current.next = node;
```

hubungan dari objek terakhir diarahkan ke objek baru.

Terakhir:

```javascript
list.length++;
```

jumlah elemen ditambah satu.

**Inti `add`:** buat objek, cari objek terakhir jika diperlukan, sambungkan objek terakhir ke objek baru, lalu tambah jumlah elemen.

---

### 4. `remove()` — menghapus berdasarkan nilai

```javascript
function remove(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return;

  if (previous !== null) {
    previous.next = current.next;
  } else {
    list.head = current.next;
  }

  list.length--;
}
```

Fungsi ini mencari elemen berdasarkan nilainya.

`current` menunjukkan objek yang sedang diperiksa.

`previous` menyimpan objek yang berada tepat sebelum `current`.

Perulangan berhenti ketika salah satu dari dua keadaan terjadi:

1. `current` menjadi `null`, berarti elemen tidak ditemukan.
2. `current.element` sama dengan elemen yang dicari, berarti elemen ditemukan.

Jika tidak ditemukan:

```javascript
if (current === null) return;
```

fungsi berhenti tanpa mengubah daftar.

Jika elemen bukan berada di awal:

```javascript
previous.next = current.next;
```

objek sebelum `current` langsung dihubungkan dengan objek setelah `current`.

Jika elemen berada di awal:

```javascript
list.head = current.next;
```

`head` dipindahkan ke objek berikutnya.

Setelah penghapusan berhasil:

```javascript
list.length--;
```

jumlah elemen dikurangi satu.

**Inti `remove`:** cari objek, simpan objek sebelumnya, lalu ubah hubungan agar objek yang dicari dilewati.

---

### 5. `contains()` — mengecek apakah nilai ada

Kode yang dikerjakan:

```javascript
function contains(list, element) {
  let previous = null;
  let current = list.head;

  while (current !== null && current.element !== element) {
    previous = current;
    current = current.next;
  }

  if (current === null) return false;

  if (previous !== null) {
    return true;
  } else {
    return false;
  }
}
```

Tujuan fungsi ini adalah mengembalikan `true` jika elemen ditemukan dan `false` jika tidak ditemukan.

Bagian pencariannya sudah bergerak melalui linked list dengan cara yang benar.

Namun terdapat satu masalah pada hasil akhirnya.

Jika elemen ditemukan pada objek pertama, `previous` masih bernilai `null`.

Kode kemudian masuk ke:

```javascript
if (previous !== null) {
  return true;
} else {
  return false;
}
```

Akibatnya, elemen yang sebenarnya ditemukan pada `head` justru menghasilkan `false`.

Kondisi yang benar seharusnya cukup bergantung pada `current`.

Jika `current === null`, elemen tidak ditemukan.

Jika `current !== null`, elemen ditemukan.

**Catatan:** berdasarkan pengujian terhadap kasus yang diminta freeCodeCamp, bagian `contains()` untuk elemen pada `head` masih gagal. Jadi kode yang diberikan belum benar-benar lulus seluruh pengujian lab.

---

### 6. `getAt()` — mengambil nilai berdasarkan indeks

```javascript
function getAt(list, index) {
  if (!list || list.head === null) return undefined;

  let previous = null;
  let current = list.head;

  for (let i = 0; i <= index; i++) {
    if (!current) return undefined;

    previous = current;
    current = current.next;

    if (i === index) {
      return previous.element;
    }
  }
}
```

Fungsi ini mencari elemen berdasarkan posisi.

Misalnya:

```text
index 0: elemen pertama
index 1: elemen kedua
index 2: elemen ketiga
```

Program mulai dari:

```javascript
let current = list.head;
```

Kemudian `for` digunakan untuk menghitung posisi.

Pada setiap putaran:

```javascript
previous = current;
current = current.next;
```

`previous` menyimpan posisi yang sedang diperiksa, lalu `current` bergerak ke posisi berikutnya.

Ketika:

```javascript
i === index
```

fungsi mengambil:

```javascript
previous.element
```

Jika daftar kosong atau posisi yang dicari tidak tersedia, fungsi mengembalikan `undefined`.

Kode ini lulus kasus pengujian `getAt` yang mencakup indeks valid, indeks negatif, indeks di luar jumlah elemen, dan daftar kosong.

---

### 7. `insertAt()` — menyisipkan elemen pada posisi tertentu

```javascript
function insertAt(list, index, element) {
  if (!list || index < 0) return;

  const newNode = {
    element: element,
    next: null
  };

  if (index === 0) {
    newNode.next = list.head;
    list.head = newNode;
    list.length++;
    return;
  }

  let previous = null;
  let current = list.head;

  for (let i = 0; i <= index; i++) {
    if (current === null && i < index) return;

    if (i === index) {
      newNode.next = current;
      previous.next = newNode;
      list.length++;
      return;
    }

    previous = current;
    if (current !== null) {
      current = current.next;
    }
  }
}
```

Fungsi ini mempunyai dua kasus utama.

#### Memasukkan di awal

Jika:

```javascript
index === 0
```

objek baru ditempatkan sebelum `head` lama.

```javascript
newNode.next = list.head;
list.head = newNode;
```

Urutannya penting.

Pertama objek baru harus menyimpan `head` lama.

Setelah itu `head` daftar dipindahkan ke objek baru.

#### Memasukkan di tengah atau akhir

Program memakai `previous` dan `current`.

`current` menunjukkan posisi yang akan ditempati objek baru.

`previous` menunjukkan objek tepat sebelum posisi tersebut.

Ketika indeks sudah ditemukan:

```javascript
newNode.next = current;
previous.next = newNode;
```

Objek baru ditempatkan di antara `previous` dan `current`.

Setelah berhasil:

```javascript
list.length++;
```

jumlah elemen bertambah satu.

Kode ini menangani penyisipan di awal, tengah, akhir, daftar kosong pada indeks `0`, serta indeks yang tidak valid.

---

### 8. `removeAt()` — menghapus berdasarkan indeks

```javascript
function removeAt(list, index) {
  if (!list || index < 0) return;
  if (index >= list.length || list.head === null) return;

  if (index === 0) {
    list.head = list.head.next;
    list.length--;
    return;
  } else if (list.length === 1) {
    list.head = {};
    return;
  }

  let previous = null;
  let current = list.head;

  for (let i = 0; i <= index; i++) {
    if (i === index) {
      previous.next = current.next;
      list.length--;
      return;
    }

    previous = current;
    if (current !== null) {
      current = current.next;
    }
  }
}
```

Fungsi ini memastikan indeks valid terlebih dahulu.

Jika indeks negatif atau berada di luar daftar, fungsi langsung berhenti.

Jika indeks `0`:

```javascript
list.head = list.head.next;
```

`head` dipindahkan ke objek kedua.

Jika indeks bukan `0`, program mencari posisi dengan `previous` dan `current`.

Ketika posisi ditemukan:

```javascript
previous.next = current.next;
```

objek yang akan dihapus dilewati.

Setelah itu:

```javascript
list.length--;
```

jumlah elemen dikurangi satu.

Kode mempunyai blok:

```javascript
else if (list.length === 1) {
  list.head = {};
  return;
}
```

Namun blok ini tidak diperlukan karena kasus satu elemen pada `index === 0` sudah ditangani oleh kondisi sebelumnya. Jika blok tersebut pernah digunakan untuk menghapus satu-satunya elemen, `head` juga tidak boleh menjadi objek kosong; keadaan kosong harus menggunakan `null`.

Pada kode yang diberikan sekarang, penghapusan satu-satunya elemen masuk ke kondisi `index === 0`, sehingga `head` menjadi `null` dan `length` menjadi `0`.

---

### 9. `clear()` — mengosongkan seluruh daftar

```javascript
function clear(list) {
  list.head = null;
  list.length = 0;
}
```

Fungsi ini tidak perlu mencari objek satu per satu.

Cukup mengembalikan dua informasi utama ke keadaan awal:

```text
head = null
length = 0
```

Setelah itu daftar dianggap kosong dan dapat digunakan kembali.

---

### 10. Bagian kode percobaan

```javascript
const myList = initList();
```

Membuat daftar baru.

Kemudian lima pemanggilan `add()` menambahkan `42`, `43`, `44`, `45`, dan `46`.

Pemanggilan:

```javascript
getAt(myList, 3)
```

mengambil elemen pada indeks `3`, yaitu `45`.

Kemudian:

```javascript
insertAt(myList, 3, 44.5);
```

menyisipkan `44.5` pada indeks `3`.

Urutan menjadi:

```text
42, 43, 44, 44.5, 45, 46
```

Kemudian:

```javascript
removeAt(myList, 3);
```

menghapus `44.5` dari indeks `3`.

Daftar kembali menjadi:

```text
42, 43, 44, 45, 46
```

## Method yang Dipakai

- `JSON.stringify()` digunakan untuk menampilkan objek linked list dalam bentuk teks JSON yang lebih mudah dibaca.

## Bagian yang Paling Penting Buat Saya

Hal yang perlu benar-benar dikuasai sebelum lanjut ke materi berikutnya adalah hubungan antara `head`, `current`, `previous`, dan `next`.

Jangan menghafal `while` atau `for` sebagai aturan terpisah.

Pahami bahwa perulangan dipakai karena linked list tidak menyediakan akses langsung seperti `list[3]`.

Untuk mencari posisi tertentu, program harus mulai dari `head`, lalu memindahkan `current` ke `current.next` sampai posisi yang dicari tercapai.

Untuk mengubah atau menghapus bagian tengah, `previous` diperlukan supaya program masih mempunyai objek yang dapat diubah hubungannya.

`length++` berarti jumlah elemen bertambah satu setelah penambahan berhasil.

`length--` berarti jumlah elemen berkurang satu setelah penghapusan berhasil.

`head = null` berarti tidak ada elemen pertama karena daftar sedang kosong.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `head` | Menunjuk ke objek pertama dalam linked list. |
| `next` | Menunjukkan objek berikutnya. |
| `length` | Menyimpan jumlah elemen. |
| `current` | Menunjukkan objek yang sedang diperiksa. |
| `previous` | Menyimpan objek sebelum `current`. |
| `while` | Mengulang pencarian sampai kondisi berhenti tercapai. |
| `for` | Mengulang berdasarkan posisi indeks yang sedang dicari. |
| `current = current.next` | Memindahkan pemeriksaan ke objek berikutnya. |
| `previous.next = current.next` | Melewati objek yang akan dihapus. |
| `head = current.next` | Memindahkan awal daftar ke objek berikutnya. |
| `length++` | Menambah jumlah elemen satu. |
| `length--` | Mengurangi jumlah elemen satu. |
| `clear()` | Mengembalikan daftar ke keadaan kosong. |

## Catatan Belajar

- **`head`** adalah titik awal untuk menemukan seluruh isi linked list.
- **`next`** adalah hubungan yang membuat beberapa objek menjadi satu rangkaian.
- **`current`** bergerak ketika program perlu mencari objek tertentu.
- **`previous`** dibutuhkan ketika program harus mengubah hubungan sebelum objek yang ditemukan.
- **`while`** cocok ketika jumlah langkah belum diketahui dan program harus berhenti berdasarkan kondisi.
- **`for`** cocok ketika pencarian dilakukan berdasarkan posisi indeks.
- **`++`** digunakan setelah penambahan berhasil agar `length` tetap sesuai jumlah elemen.
- **`--`** digunakan setelah penghapusan berhasil agar `length` tetap sesuai jumlah elemen.
- **`null`** pada `head` berarti daftar tidak memiliki elemen pertama.
- **`null`** pada `next` berarti objek tersebut merupakan objek terakhir.
- **`contains`** harus mengembalikan `true` ketika nilai ditemukan termasuk jika nilai tersebut berada di `head`.
- **`getAt`** mengembalikan nilai `element`, bukan objek node-nya.
- **`insertAt`** harus menjaga hubungan objek sebelum dan sesudah posisi yang disisipkan.
- **`removeAt`** harus mengubah hubungan objek sebelum objek yang dihapus.
- **`clear`** harus membuat `head` menjadi `null` dan `length` menjadi `0`.

## What I Practiced

```text
Linked list
Node object
head reference
next reference
length tracking
while loop traversal
for loop traversal
current and previous references
Insertion by index
Removal by index
Element lookup
List clearing
Boundary checking
Reference reassignment
```

---

**Platform:** freeCodeCamp  
**Lab:** Implement Linked List Operations  
**Language:** JavaScript  
**Focus:** Data Structures

---

<p align="center">
  <strong>Data Structures Section — Implement Linked List Operations Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
