// js/script.js - KODE LENGKAP TERBARU

// =======================================================
// 1. Logika Dark Mode (Sudah Ada)
// =======================================================
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

function applyTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        if (toggleButton) toggleButton.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        if (toggleButton) toggleButton.textContent = '🌙';
    }
}

// =======================================================
// 2. Logika Active Navigation / Scroll Spy (FITUR BARU)
// =======================================================

// Dapatkan semua elemen yang dibutuhkan
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section'); // Mengambil semua section utama

function activateScrollSpy() {
    let current = '';

    // Cari tahu section mana yang sedang dilihat
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Cek jika posisi scroll berada di dalam batas section
        // Tambahkan offset (misalnya 150px) agar highlight aktif sedikit lebih awal
        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    // Sesuaikan link navigasi yang aktif
    navLinks.forEach(link => {
        link.classList.remove('active-link');
        
        // Bandingkan href link dengan ID section saat ini
        if (link.href.includes(current)) {
            link.classList.add('active-link');
        }
    });
    
    // Khusus untuk Hero Section (yang tidak punya ID di <main>)
    if (window.scrollY < document.getElementById('about').offsetTop - 150) {
        // Hapus active link jika masih di atas section About
        navLinks.forEach(link => link.classList.remove('active-link'));
    }
}

// Pasang event listener untuk scroll
window.addEventListener('scroll', activateScrollSpy);
// Pasang event listener untuk dimuat (untuk inisialisasi awal)
document.addEventListener('DOMContentLoaded', activateScrollSpy);


// =======================================================
// 3. Logika Inisialisasi & Back to Top (Sudah Digabung)
// =======================================================

const backToTopButton = document.getElementById('back-to-top');

document.addEventListener('DOMContentLoaded', () => {
    // A. Inisialisasi Dark Mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme === 'dark');
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark);
    }
    
    // B. Inisialisasi AOS
    AOS.init({
        duration: 1000, 
        once: true,    
    });
});

// Event listener untuk tombol Dark Mode
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        applyTheme(!isDark);
    });
}

// Logika Tampilkan/Sembunyikan Tombol Back to Top
window.onscroll = function() {
    // Gabungkan fungsi Back to Top Display dan Scroll Spy
    if (backToTopButton) {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }
    // Panggil Scroll Spy
    activateScrollSpy(); 
};


// Fungsi kembali ke atas (dengan animasi smooth scroll)
if (backToTopButton) {
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}