// js/script.js

// =======================================================
// 1. Logika Dark Mode (Fitur Baru)
// =======================================================
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Fungsi untuk menerapkan tema (true = dark, false = light)
function applyTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        if (toggleButton) toggleButton.textContent = '☀️'; // Icon mode gelap
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        if (toggleButton) toggleButton.textContent = '🌙'; // Icon mode terang
    }
}

// Cek preferensi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    
    // Jika ada preferensi di Local Storage
    if (savedTheme) {
        applyTheme(savedTheme === 'dark');
    } else {
        // Jika tidak ada, cek preferensi sistem operasi
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark);
    }
    
    // Inisialisasi AOS setelah tema dimuat
    AOS.init({
        duration: 1000, 
        once: true,    
    });
});

// Event listener untuk tombol Dark Mode
if (toggleButton) { // Pastikan tombol ada
    toggleButton.addEventListener('click', () => {
        const isDark = body.classList.contains('dark-mode');
        applyTheme(!isDark);
    });
}


// =======================================================
// 2. Logika Tombol Kembali ke Atas (Back to Top)
// =======================================================
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Tampilkan tombol jika posisi gulir (scroll) di bawah 300px dari atas
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        if (backToTopButton) backToTopButton.style.display = "block";
    } else {
        if (backToTopButton) backToTopButton.style.display = "none";
    }
}

// Fungsi kembali ke atas (dengan animasi smooth scroll)
if (backToTopButton) {
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah lompatan link instan
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Membuat animasi kembali ke atas menjadi halus
        });
    });
}