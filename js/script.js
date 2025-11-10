// 1. Inisialisasi AOS (Animasi Gulir)
AOS.init({
    duration: 1000, 
    once: true,     
});

// 2. Logika Tombol Kembali ke Atas (Back to Top)
const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Tampilkan tombol jika posisi gulir (scroll) di bawah 300px dari atas
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

// Fungsi kembali ke atas
backToTopButton.addEventListener('click', function() {
    document.body.scrollTop = 0; // Untuk Safari
    document.documentElement.scrollTop = 0; // Untuk Chrome, Firefox, IE, dan Opera
});
