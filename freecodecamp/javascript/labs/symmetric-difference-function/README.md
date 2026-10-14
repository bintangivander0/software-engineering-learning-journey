# Implement a Symmetric Difference Function

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-Higher%20Order%20Functions%20and%20Callbacks-4B5566?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript Higher Order Functions and Callbacks" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-Higher%20Order%20Functions%20and%20Callbacks-4B5563" alt="Higher Order Functions and Callbacks" />
</p>

> **Milestone:** Lab setelah mempelajari Higher Order Functions and Callbacks.

## About

Project ini membuat fungsi `diffArray()` untuk mencari elemen yang hanya terdapat pada salah satu dari dua array.

Fungsi membandingkan kedua array, mengambil elemen yang tidak ditemukan pada array lainnya, lalu menggabungkan kedua hasil tersebut menjadi satu array.

## Konsep Utama

- **Function** digunakan untuk membungkus proses pencarian symmetric difference.
- **Array** digunakan sebagai struktur data yang dibandingkan.
- **`filter()`** digunakan untuk memilih elemen yang tidak terdapat pada array lainnya.
- **`includes()`** digunakan untuk memeriksa keberadaan suatu elemen di dalam array.
- **Arrow function** digunakan sebagai callback pada `filter()`.
- **`concat()`** digunakan untuk menggabungkan hasil dari kedua proses penyaringan.

## Struktur Project

```text
symmetric-difference-function/
└── solution.js
