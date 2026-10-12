# Build a Lightbox Viewer

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-DOM%20Manipulation%20and%20Events-4B5566?labelColor=F7DF1E&logo=javascript&logoColor=000" alt="JavaScript DOM Manipulation and Events" />
  <img src="https://img.shields.io/badge/freeCodeCamp-Lab-0A0A23?logo=freecodecamp&logoColor=white" alt="freeCodeCamp Lab" />
  <img src="https://img.shields.io/badge/Topic-DOM%20Manipulation%20and%20Events-4B5563" alt="DOM Manipulation and Events" />
</p>

> **Milestone:** Lab setelah mempelajari DOM Manipulation and Events.

## About

Build a Lightbox Viewer adalah project web yang membuat galeri gambar sederhana dengan fitur lightbox.

Pengguna dapat memilih salah satu gambar pada galeri untuk menampilkan versi gambar berukuran penuh dalam overlay. Lightbox dapat ditutup melalui tombol close atau dengan mengklik area lightbox.

## Preview

![Build a Lightbox Viewer Preview](preview.jpeg)

## Konsep Utama

- **DOM Selection** digunakan untuk mengambil elemen galeri, lightbox, gambar preview, dan tombol close.
- **Event Listener** digunakan untuk merespons klik pada gambar dan tombol close.
- **NodeList Iteration** digunakan untuk memasang event pada setiap gambar galeri.
- **String Replacement** digunakan untuk mengubah URL thumbnail menjadi URL gambar berukuran penuh.
- **DOM Property** digunakan untuk mengubah sumber gambar preview.
- **Inline Style** digunakan untuk menampilkan dan menyembunyikan lightbox.
- **CSS Fixed Positioning** digunakan untuk membuat lightbox menutupi halaman.
- **CSS Flexbox** digunakan untuk menempatkan gambar preview di tengah lightbox.

## Struktur Project

```text
lightbox-viewer/
├── index.html
├── styles.css
└── script.js
