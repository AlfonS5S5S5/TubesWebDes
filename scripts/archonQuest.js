$(document).ready(function() { //menunggu smpe 1 halaman brs load
    $('.bookmark a').on('click', function(e) { //cek klo kita klik link href di class bookmark a
        e.preventDefault(); //biar mencegah action default (yang biasanya langsung pindah tanpa animasi)
        const targetId = $(this).attr('href'); //baca id yang ada di html
        $('html, body').animate({
            scrollTop: $(targetId).offset().top
        }, 800); //effect nya smooth, jadi pindah ke tujuan href nya pelan pelan sesuai ms yang digunakan yaitu 800
    });
});