# Build a Campus Directory Normalizer

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Loops-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Loops" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Workshop-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Workshop" />
  <img src="https://img.shields.io/badge/Topic-Loops-4B5563" alt="Loops" />
</p>

> **Milestone:** Workshop setelah mempelajari Loops.

## About

Workshop ini membangun fungsi `normalizeDirectory()` untuk mengubah data direktori kampus yang tersusun bertingkat menjadi beberapa kumpulan data yang lebih mudah dicari berdasarkan ID dan email.

Source code menggunakan perulangan `for` bertingkat untuk membaca department, program, dan instructor. Setelah data dinormalisasi, fungsi tambahan digunakan untuk mencari instructor berdasarkan email, mencari ruangan berdasarkan kode department, dan membuat ringkasan jumlah department, program, instructor, data jam kantor yang belum tersedia, serta program tanpa ruangan.

## Konsep Utama

- **Loop bertingkat** — digunakan untuk membaca data department, program, lalu instructor pada tingkat yang berbeda.
- **`Object.entries()`** — mengubah object department menjadi pasangan nama dan data yang dapat diulang.
- **`Object.values()`** — mengambil seluruh nilai object untuk diproses dalam perulangan.
- **`Object.keys()`** — mengambil kunci object dan digunakan untuk menghitung jumlah data.
- **Object berdasarkan ID** — digunakan agar department, program, dan instructor dapat diakses menggunakan ID.
- **Array ID program** — menyimpan daftar ID program yang berada di dalam suatu department.
- **`push()`** — menambahkan ID program atau nomor ruangan ke array.
- **`sort()`** — mengurutkan daftar ruangan sebelum dikembalikan.
- **`null`** — menandai informasi seperti ruangan atau jam kantor yang tidak tersedia.
- **`??`** — menyediakan nilai pengganti ketika data bernilai `null` atau `undefined`.
- **Template literal** — digunakan untuk membentuk teks ringkasan.

## Struktur Project

```text
campus-directory-normalizer/
└── solution.js
```

## Source Code

- [`solution.js`](./campus-directory-normalizer/solution.js)

## Pembahasan

### 1. Menyiapkan tempat hasil normalisasi

```javascript
const departmentsById = {};
const programsById = {};
const instructorsById = {};
const instructorsByEmail = {};
```

Empat object kosong disiapkan untuk menyimpan hasil pengolahan data. `departmentsById` menyimpan department berdasarkan ID, `programsById` menyimpan program berdasarkan ID, `instructorsById` menyimpan instructor berdasarkan ID, dan `instructorsByEmail` membuat hubungan antara email instructor dan ID instructor.

### 2. Mengambil department untuk diproses

```javascript
const departmentEntries = Object.entries(rawData);

for (let i = 0; i < departmentEntries.length; i++) {
```

`Object.entries()` membuat pasangan kunci dan nilai dari `rawData` sehingga dapat dibaca dengan perulangan. `i` menjadi posisi department yang sedang diproses.

### 3. Mengambil nama dan data department

```javascript
const [departmentName, departmentData] = departmentEntries[i];
```

Pada setiap putaran, nama department dan data department dipisahkan menjadi dua variabel.

### 4. Menentukan ID department

```javascript
const departmentId = departmentData.Dept_code || `dept-${i + 1}`;
```

Jika `Dept_code` tersedia, kode tersebut digunakan sebagai ID. Jika tidak tersedia, program membuat ID cadangan berdasarkan posisi department.

### 5. Menyimpan department

```javascript
departmentsById[departmentId] = {
  id: departmentId,
  code: departmentData.Dept_code,
  name: departmentName,
  programIds: [],
};
```

Department disimpan menggunakan `departmentId` sebagai kunci. `programIds` dimulai sebagai array kosong karena daftar program akan diisi ketika program diproses.

### 6. Masuk ke perulangan program

```javascript
for (let j = 0; j < departmentData.programs.length; j++) {
  const program = departmentData.programs[j];
```

Setiap department memiliki daftar program. `j` digunakan untuk membaca program satu per satu. Sekarang `i` mengatur department dan `j` mengatur program di dalam department tersebut.

### 7. Menyimpan program berdasarkan ID

```javascript
programsById[program.id] = {
  ...program,
  departmentId,
};
```

Data program disalin ke `programsById` dan `departmentId` ditambahkan agar hubungan program dengan department tetap tersimpan.

### 8. Menyimpan hubungan department dan program

```javascript
departmentsById[departmentId].programIds.push(program.id);
```

ID program dimasukkan ke `programIds` milik department.

### 9. Masuk ke perulangan instructor

```javascript
for (let k = 0; k < program.instructors.length; k++) {
  const instructor = program.instructors[k];
```

Setiap program dapat memiliki beberapa instructor. `k` digunakan untuk membaca instructor satu per satu. Dengan demikian terdapat tiga tingkat perulangan: `i` untuk department, `j` untuk program, dan `k` untuk instructor.

### 10. Menyimpan instructor berdasarkan ID

```javascript
instructorsById[instructor.id] = {
  ...instructor,
  programId: program.id,
  departmentId,
};
```

Data instructor disimpan berdasarkan ID. `programId` dan `departmentId` ditambahkan agar hubungan instructor dengan program dan department tetap diketahui.

### 11. Membuat pencarian instructor berdasarkan email

```javascript
if (instructor.email) {
  instructorsByEmail[instructor.email] = instructor.id;
}
```

Tidak semua instructor memiliki email. Karena itu hubungan email hanya dibuat jika email tersedia.

### 12. Mengembalikan hasil normalisasi

```javascript
return {
  departmentsById,
  programsById,
  instructorsById,
  instructorsByEmail,
};
```

Setelah seluruh data selesai diproses, empat object hasil dikembalikan. Kemudian `normalizeDirectory(rawData)` dijalankan untuk menghasilkan `normalizedData`.

### 13. Mencari instructor berdasarkan email

```javascript
function getInstructorByEmail(email, normalizedData) {
  const instructorId = normalizedData.instructorsByEmail[email];

  if (!instructorId) {
    return "Instructor not found";
  }

  const instructor = normalizedData.instructorsById[instructorId];
  const department = normalizedData.departmentsById[instructor.departmentId];

  return {
    name: instructor.name ?? "Unknown Instructor",
    officeHours: instructor.officeHours ?? "Not Available",
    department: department.name ?? "Unknown Department",
  };
}
```

Fungsi ini mencari ID instructor berdasarkan email. Jika tidak ditemukan, fungsi mengembalikan pesan. Jika ditemukan, ID digunakan untuk mengambil instructor dan department terkait. Operator `??` menyediakan nilai pengganti jika data tidak tersedia.

### 14. Mencari ruangan berdasarkan kode department

```javascript
function listRoomsByBuilding(buildingCode, normalizedData) {

  const programValues = Object.values(normalizedData.programsById);
  const rooms = [];

  for (let i = 0; i < programValues.length; i++) {
    const program = programValues[i];
    const department = normalizedData.departmentsById[program.departmentId];

    if (department.code === buildingCode && program.room != null) {
      rooms.push(program.room);
    }
  }

  rooms.sort();
  return rooms;
}
```

`Object.values()` mengambil seluruh program. Perulangan memeriksa program satu per satu. Program dimasukkan ke `rooms` jika kode department sesuai dan ruangan tidak `null`. Setelah itu `sort()` mengurutkan hasil.

### 15. Menghitung jumlah data untuk ringkasan

```javascript
const departments = Object.keys(normalizedData.departmentsById).length;
const programs = Object.keys(normalizedData.programsById).length;
const instructors = Object.keys(normalizedData.instructorsById).length;
```

`Object.keys()` mengambil kunci dari masing-masing object. `length` kemudian menghitung jumlah kunci tersebut.

### 16. Menghitung instructor tanpa jam kantor

```javascript
const instructorValues = Object.values(normalizedData.instructorsById);
let missingOfficeHours = 0;

for (let i = 0; i < instructorValues.length; i++) {
  if (instructorValues[i].officeHours == null) {
    missingOfficeHours++;
  }
}
```

Penghitung dimulai dari `0`. Setiap instructor diperiksa. Jika jam kantor tidak tersedia, penghitung bertambah satu.

### 17. Menghitung program tanpa ruangan

```javascript
const programValues = Object.values(normalizedData.programsById);
let programsWithoutRooms = 0;

for (let i = 0; i < programValues.length; i++) {
  if (programValues[i].room === null) {
    programsWithoutRooms++;
  }
}
```

Program diperiksa satu per satu. Jika `room` bernilai `null`, penghitung bertambah satu.

### 18. Membentuk teks ringkasan

```javascript
return `
Campus Directory Summary
------------------------
Departments: ${departments}
Programs: ${programs}
Instructors: ${instructors}
Missing Office Hours: ${missingOfficeHours}
Programs Without Rooms: ${programsWithoutRooms}
`;
```

Template literal digunakan untuk membentuk teks ringkasan dan memasukkan nilai dari variabel penghitung.

### 19. Menampilkan ringkasan

```javascript
console.log(renderDirectorySummary(normalizedData));
```

Fungsi ringkasan dijalankan menggunakan data yang sudah dinormalisasi, lalu hasilnya ditampilkan ke konsol.

## Method yang Dipakai

- `Object.entries()` digunakan untuk mengambil pasangan kunci dan nilai dari object `rawData`.
- `Object.values()` digunakan untuk mengambil seluruh nilai object hasil normalisasi.
- `Object.keys()` digunakan untuk mengambil seluruh kunci object dan menghitung jumlahnya.
- `push()` digunakan untuk menambahkan ID program dan nomor ruangan ke array.
- `sort()` digunakan untuk mengurutkan daftar ruangan.
- `console.log()` digunakan untuk menampilkan ringkasan direktori.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `Object.entries()` | Mengambil pasangan kunci dan nilai dari object |
| `Object.values()` | Mengambil seluruh nilai dari object |
| `Object.keys()` | Mengambil seluruh kunci dari object |
| `for` | Mengulang data berdasarkan posisi |
| `if` | Memeriksa kondisi sebelum menjalankan kode |
| `++` | Menambah penghitung satu |
| `push()` | Menambahkan data ke akhir array |
| `sort()` | Mengurutkan isi array |
| `length` | Menghitung jumlah elemen atau kunci |
| `null` | Menandai data yang tidak tersedia |
| `??` | Memberikan nilai pengganti untuk `null` atau `undefined` |
| `...` | Menyalin properti dari object yang sudah ada |
| Template literal | Membentuk teks dengan nilai variabel di dalamnya |

## Catatan Belajar

- **`i`** digunakan untuk berpindah dari satu department ke department berikutnya.
- **`j`** digunakan untuk berpindah dari satu program ke program berikutnya di dalam department.
- **`k`** digunakan untuk berpindah dari satu instructor ke instructor berikutnya di dalam program.
- **`for` bertingkat** diperlukan karena data sumber mempunyai beberapa tingkat data yang harus dibaca.
- **`Object.entries()`** digunakan ketika program membutuhkan kunci sekaligus nilai object.
- **`Object.values()`** digunakan ketika program membutuhkan seluruh nilai object.
- **`Object.keys()`** digunakan ketika program membutuhkan daftar kunci atau jumlah data.
- **`++`** membuat penghitung bertambah satu ketika kondisi yang dicari ditemukan.
- **`push()`** menambahkan data baru ke array tanpa menghapus data yang sudah ada.
- **`null`** perlu diperiksa karena beberapa data sumber memang tidak tersedia.
- **`??`** memberikan teks pengganti ketika data bernilai `null` atau `undefined`.
- **Normalisasi** membuat data bertingkat menjadi beberapa object berdasarkan ID sehingga hubungan antar-data lebih mudah dicari.

## What I Practiced

```text
JavaScript for loops
Nested for loops
Object.entries()
Object.values()
Object.keys()
Objects
Arrays
Array push()
Array sort()
Array length
Conditional statements
Counters
Object property access
Template literals
Nullish coalescing
Data normalization
```

---

**Platform:** freeCodeCamp  
**Workshop:** Build a Campus Directory Normalizer  
**Language:** JavaScript  
**Focus:** Loops

---

<p align="center">
  <strong>Loops Section — Build a Campus Directory Normalizer Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
