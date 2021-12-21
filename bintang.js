var bintang = '';

function myStars(jumlah) {
    for (var i = 0; i < jumlah; i++) {
        for (var k = 0; k < jumlah - i; k++) {
            bintang += ' ';
        }
        for (var j = 0; j <= i; j++) {
            bintang += '*';
        }
        for (var l = 0; l < i; l++) {
            bintang += '*';
        }
        bintang += '\n';
    }
    console.log(bintang)
}

myStars(10);