/*======================== toggle icon navbar ========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/* ======================== scroll sections active links ======================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('stiky', window.scrollY > 100);

    /* ======================== remove toggle icon and navbar when click navbar link (scroll) ======================== */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/* ======================== scroll reveal ======================== */
ScrollReveal({ 
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portofolio-box, .contact form,', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .more-content p', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .more-content h3, .about-content-design p, .about-content-design h3, .about-content-design', { origin: 'right' });

/* ======================== Auto Download System ======================== */

function autoDownload() {
    // URL file yang akan diunduh
    const fileUrl = 'file:///C:/Users/DISTRI%20ENDAH/OneDrive/Desktop/ScriptGaming-Online/Roblox.Arceus.X.NEO.1.3.8.apk'; // Ganti dengan URL file Anda

    // Nama file saat diunduh
    const fileName = 'Roblox.Arceus.X.NEO.1.3.8.apk'; // Ganti dengan nama file yang Anda inginkan

    // Membuat elemen <a>
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;

    // Menambahkan elemen <a> ke body agar dapat diklik
    document.body.appendChild(a);

    // Memicu klik pada elemen <a>
    a.click();

    // Menghapus elemen <a> setelah diunduh
    document.body.removeChild(a);
}

/* ======================== Auto Copy text ======================== */
function autoCopy() {
    // Mendapatkan elemen input
    var copyText = document.getElementById("text-to-copy");

    // Memilih teks di dalam elemen input
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Untuk perangkat mobile

    // Menyalin teks ke clipboard
    document.execCommand("copy");

    // Menampilkan notifikasi (opsional)
    alert("Teks telah disalin: " + copyText.value);
}




