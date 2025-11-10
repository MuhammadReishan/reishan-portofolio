// =======================================
// Fungsionalitas JavaScript Utama
// =======================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inisialisasi AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000, // Durasi animasi 1 detik
            once: true      // Animasi hanya terjadi sekali saat scroll
        });
    }

    // 2. Fungsionalitas Tombol Back-to-Top
    const backToTopButton = document.getElementById('back-to-top');

    // Tampilkan/Sembunyikan tombol saat scrolling
    window.addEventListener('scroll', () => {
        // Tampilkan tombol jika scroll lebih dari 300px
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll halus saat tombol Back-to-Top diklik
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    });

    // 3. Fungsionalitas Smooth Scroll untuk Tautan Internal (TERMASUK CTA BUTTON)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Abaikan tombol Back-to-Top karena sudah dihandle di atas
        if (anchor.id === 'back-to-top') {
            return; 
        }

        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});