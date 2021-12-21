var item = prompt("Masukkan nama makanan / minuman : (contoh : nasi, daging, susu, pizza,sprite) ");
switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu ':
        alert("Makanan / minuman sehat!");
        break;
    case 'pizza':
    case 'sprite':
        alert("Makanan / minuman tidak sehat!");
        break;
    default:
        alert("Makanan / minuman tidak diketahui!");
        break;
}