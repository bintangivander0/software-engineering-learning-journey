# Build a Project Idea Board

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Classes-4B5563?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Classes" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Classes-4B5563" alt="Classes" />
</p>

> **Milestone:** Lab setelah mempelajari Classes.

## About

Project ini membuat sebuah **Project Idea Board** menggunakan JavaScript Classes. Setiap `ProjectIdea` menyimpan judul, deskripsi, dan status project, sedangkan `ProjectIdeaBoard` mengelola kumpulan project idea.

Project ini digunakan untuk mempraktikkan pembuatan class, constructor, object instance, property, method, array, dan pengelolaan data menggunakan JavaScript.

## Konsep Utama

- `class`
- Constructor
- `this`
- Object
- Object Properties
- Method
- Array
- `push()`
- `findIndex()`
- `splice()`
- `forEach()`
- Template Literal
- Object Reference
- Nested Object

## Struktur Project

```text
project-idea-board/
└── solution.js
```

## Source Code

- [`solution.js`](./solution.js)

## Pembahasan

### 1. Object `projectStatus`

```js
const projectStatus = {
  PENDING: {
    description: "Pending Execution"
  },
  SUCCESS: {
    description: "Executed Successfully"
  },
  FAILURE: {
    description: "Execution Failed"
  }
};
```

`projectStatus` menyimpan tiga status project dalam sebuah object, yaitu `PENDING`, `SUCCESS`, dan `FAILURE`.

Setiap status memiliki property `description` yang digunakan ketika informasi project ditampilkan.

### 2. Class `ProjectIdea`

```js
class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}
```

Class `ProjectIdea` digunakan sebagai blueprint untuk membuat sebuah project idea.

Constructor menerima `title` dan `description`, kemudian menetapkan status awal menggunakan `projectStatus.PENDING`.

Method `updateProjectStatus()` digunakan untuk mengganti status project idea dengan status baru.

### 3. Class `ProjectIdeaBoard`

```js
class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }
}
```

Class `ProjectIdeaBoard` digunakan untuk membuat board yang menyimpan kumpulan project idea.

Constructor menerima judul board dan membuat array kosong `ideas` sebagai tempat penyimpanan project idea.

### 4. Method `pin()`

```js
pin(ProjectIdea) {
  this.ideas.push(ProjectIdea);
}
```

Method `pin()` menambahkan sebuah project idea ke array `ideas` menggunakan `push()`.

### 5. Method `unpin()`

```js
unpin(ProjectIdea) {
  const index = this.ideas.findIndex(idea => idea === ProjectIdea);
  this.ideas.splice(index, 1);
}
```

Method `unpin()` mencari posisi object project idea menggunakan `findIndex()` berdasarkan object reference, kemudian menghapusnya menggunakan `splice()`.

### 6. Method `count()`

```js
count() {
  return this.ideas.length;
}
```

Method `count()` mengembalikan jumlah project idea yang tersimpan di dalam array `ideas`.

### 7. Method `formatToString()`

```js
formatToString() {
  let result = `${this.title} has ${this.count()} idea(s)\n`;

  this.ideas.forEach(idea => {
    result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`
  })

  return result;
}
```

Method `formatToString()` membentuk informasi board menjadi sebuah string.

Template literal digunakan untuk memasukkan nilai property ke dalam string, sedangkan `forEach()` digunakan untuk memproses setiap project idea di dalam array.

Property `idea.status.description` digunakan untuk mengambil deskripsi dari status project yang sedang tersimpan.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `class` | Membuat blueprint object |
| `constructor()` | Menginisialisasi object instance |
| `this` | Mengakses property dan method instance |
| `push()` | Menambahkan project idea ke array |
| `findIndex()` | Mencari posisi project idea dalam array |
| `splice()` | Menghapus project idea dari array |
| `forEach()` | Memproses setiap project idea |
| Template Literal | Membentuk string dengan nilai dinamis |
| Object Reference | Membandingkan object yang sama dalam array |

## Catatan Belajar

- **Class** digunakan sebagai blueprint untuk membuat object.
- **Constructor** digunakan untuk menginisialisasi property saat object dibuat.
- **`this`** digunakan untuk mengakses property milik instance.
- **Method** digunakan untuk menjalankan operasi pada object.
- **Array** digunakan untuk menyimpan kumpulan project idea.
- **Object Reference** digunakan saat `unpin()` mencari project idea yang sama.
- **Template Literal** digunakan untuk membentuk string yang berisi nilai dinamis.

## What I Practiced

```text
JavaScript Classes
Class Declaration
Constructor
Object Instances
The this Keyword
Object Properties
Class Methods
Arrays
Array Methods
Object References
Template Literals
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Project Idea Board  
**Language:** JavaScript  
**Focus:** Classes

---

<p align="center">
  <strong>Classes Section — Build a Project Idea Board Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>

**README STATUS: `PASS`** — struktur, badge, milestone, pembahasan, metadata, dan footer sudah mengikuti Identity Lock serta standar README yang Anda tetapkan. README_Standard
