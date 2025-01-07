// var buat nyimpen index slide yg skrg lgi aktif.
let currentIndex = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide'); //ambil smua elemen dengan class 'slide'.

  slides.forEach((slide) => slide.style.display = 'none'); //smua slide di hide dlu

  currentIndex += direction; //geser posisi slide berdasarkan arah yg digunakan yaitu next atau prev

  if (currentIndex < 0) {
    currentIndex = slides.length - 1; //klo index ny mines bkl lompat ke slide paling akhir
  }
  if (currentIndex >= slides.length) {
    currentIndex = 0; //klo index udh lebih dri jumlah slide, bkl balik ke gambar pertama
  }

  slides[currentIndex].style.display = 'block'; //tampilin sesuai sm index yang lg aktif
}

document.addEventListener('DOMContentLoaded', () => {
  moveSlide(0); //pas html berhasil di load, langsung nampilin gambar pertama
});



const paimon = document.getElementById('paimon'); //ambil id paimon dari html

console.log(paimon); //pengecekan di console apakah si elemen paimon bisa diambil atau gabisa

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX; //posisi x kursor di layar
    const mouseY = e.clientY; //posisi y kursor di layar

    paimon.style.left = mouseX + 'px'; //geser posisi horizontal paimon biar ikut kursor
    paimon.style.top = mouseY + 'px'; //geser posisi vertikal paimon biar ikut kursor
});

