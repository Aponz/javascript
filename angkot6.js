var jmlAngkot = 10;
var noAngkot = 1;
var angkotBisa = 6;
for (noAngkot; noAngkot <= jmlAngkot; noAngkot++) {
    if (noAngkot <= angkotBisa && noAngkot !== 5) {
        console.log('Angkot no ' + noAngkot + ' beroperasi dengan baik ');
    } else if (noAngkot == 8 || noAngkot == 10 || noAngkot == 5) {
        console.log("Angkot no " + noAngkot + " Sedang lembur ");
    } else {
        console.log('Angkot no ' + noAngkot + ' sedang tidak beroperasi');
    }
}