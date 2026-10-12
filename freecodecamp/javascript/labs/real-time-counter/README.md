# Build a Real Time Counter

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/JavaScript-DOM%20Manipulation%20and%20Events-4B5566?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript DOM Manipulation and Events" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-DOM%20Manipulation%20and%20Events-4B5563" alt="DOM Manipulation and Events" />
</p>

> **Milestone:** Lab setelah mempelajari DOM Manipulation and Events.

## About

Build a Real Time Counter adalah project web sederhana yang menghitung jumlah karakter yang sedang diketik pengguna pada sebuah textarea.

Setiap kali pengguna memasukkan teks, JavaScript membaca jumlah karakter dan memperbarui informasi counter. Input dibatasi hingga 50 karakter dan counter berubah warna ketika jumlah karakter mencapai batas tersebut.

## Konsep Utama

- **DOM Selection** digunakan untuk mengambil textarea dan elemen counter.
- **Input Event** digunakan untuk mendeteksi perubahan teks secara langsung.
- **`value`** digunakan untuk mengambil teks yang sedang dimasukkan pengguna.
- **`length`** digunakan untuk menghitung jumlah karakter.
- **Conditional Statement** digunakan untuk memeriksa batas maksimal karakter.
- **`style.color`** digunakan untuk mengubah warna counter ketika batas tercapai.
- **`slice()`** digunakan untuk mengambil maksimal 50 karakter dari input.
- **`textContent`** digunakan untuk memperbarui tampilan jumlah karakter.
- **Template Literal** digunakan untuk membentuk teks counter secara dinamis.
- **`maxlength`** digunakan untuk memberikan batas maksimal 50 karakter pada textarea.

## Struktur Project

```text
real-time-counter/
├── index.html
└── script.js
```

## Source Code

- [`index.html`](./index.html)
- [`script.js`](./script.js)

## Pembahasan

### 1. Membuat Textarea dengan Batas Karakter

Textarea pada HTML memiliki atribut `maxlength` dengan nilai `50`.

```html
<textarea id="text-input" maxlength="50"></textarea>
```

Atribut tersebut membatasi jumlah karakter yang dapat dimasukkan pengguna menjadi maksimal 50 karakter.

Textarea juga memiliki ID `text-input` yang digunakan JavaScript untuk mengambil elemennya.

### 2. Membuat Tampilan Counter

Counter ditampilkan menggunakan elemen paragraf.

```html
<p id="char-count">Character Count: 0/50</p>
```

Nilai awalnya adalah `0/50`.

JavaScript kemudian mengubah isi elemen tersebut sesuai jumlah karakter yang sedang dimasukkan.

### 3. Mengambil Elemen dari DOM

JavaScript mengambil textarea dan elemen counter menggunakan `querySelector()`.

```js
const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");
```

`textInput` digunakan untuk membaca isi textarea.

`charCount` digunakan untuk memperbarui informasi jumlah karakter.

### 4. Menggunakan Event `input`

Program menggunakan event `input`.

```js
textInput.addEventListener("input", () => {
```

Event ini dijalankan ketika isi textarea berubah.

Dengan demikian, jumlah karakter dapat diperbarui saat pengguna sedang mengetik.

### 5. Mengambil Isi Textarea

Isi textarea diambil melalui property `value`.

```js
const currentText = textInput.value;
```

Nilai tersebut kemudian digunakan untuk menghitung jumlah karakter.

### 6. Menghitung Jumlah Karakter

Program menggunakan property `length`.

```js
const currentCount = currentText.length;
```

Jika pengguna memasukkan:

```text
Hello
```

maka:

```text
currentCount = 5
```

Nilai tersebut digunakan untuk memperbarui counter.

### 7. Memeriksa Batas 50 Karakter

Program memeriksa apakah jumlah karakter sudah mencapai batas.

```js
if (currentCount >= 50) {
  charCount.style.color = "red";
  textInput.value = textInput.value.slice(0, 50);
  return;
}
```

Ketika jumlah karakter mencapai atau melewati 50, warna counter berubah menjadi merah.

Nilai textarea kemudian dipotong menggunakan `slice()` hingga indeks 50.

Function lalu dihentikan menggunakan `return`.

### 8. Memperbarui Counter

Jika jumlah karakter belum mencapai 50, counter diperbarui.

```js
charCount.textContent = `Character Count: ${currentCount}/50`;
```

Template literal digunakan untuk memasukkan jumlah karakter terbaru ke dalam teks.

Contohnya:

```text
Character Count: 1/50
Character Count: 10/50
Character Count: 25/50
Character Count: 40/50
```

Dengan event `input`, perubahan tersebut terjadi ketika pengguna mengetik.

## Method yang Dipakai

- `querySelector()` digunakan untuk mengambil elemen textarea dan counter.
- `addEventListener()` digunakan untuk menangani perubahan input.
- `slice()` digunakan untuk membatasi nilai textarea hingga 50 karakter.

## Ringkasan Cepat

| Konsep | Fungsi |
|---|---|
| `querySelector()` | Mengambil elemen dari DOM |
| `addEventListener()` | Menangani event `input` |
| `value` | Mengambil isi textarea |
| `length` | Menghitung jumlah karakter |
| `slice()` | Membatasi teks hingga 50 karakter |
| `textContent` | Memperbarui teks counter |
| Template Literal | Membentuk teks counter dinamis |
| `maxlength` | Membatasi input maksimal 50 karakter |
| Conditional Statement | Memeriksa batas karakter |
| `style.color` | Mengubah warna counter |

## Catatan Belajar

- **Event `input`** cocok digunakan ketika perubahan nilai harus diketahui saat pengguna mengetik.
- **`value`** digunakan untuk mengambil nilai yang sedang berada di dalam input atau textarea.
- **`length`** dapat digunakan untuk mengetahui jumlah karakter dalam string.
- **`maxlength`** dapat memberikan batas karakter langsung pada elemen textarea.
- **`slice()`** dapat mengambil sebagian karakter dari sebuah string.
- **`textContent`** dapat memperbarui teks pada elemen HTML.
- **Conditional Statement** dapat digunakan untuk menjalankan tindakan khusus ketika batas tertentu tercapai.

## What I Practiced

```text
DOM Selection
querySelector()
Input Events
addEventListener()
Textarea Value
String length
Conditional Statements
slice()
textContent
Template Literals
HTML maxlength
Dynamic Counter
```

---

**Platform:** freeCodeCamp  
**Lab:** Build a Real Time Counter  
**Languages:** HTML & JavaScript  
**Focus:** DOM Manipulation and Events

---

<p align="center">
  <strong>DOM Manipulation and Events Section — Build a Real Time Counter Completed</strong><br>
  <sub>Next stop: continue the JavaScript Certification journey.</sub>
</p>
