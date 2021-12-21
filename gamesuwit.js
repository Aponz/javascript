var tanya = true;
while (tanya) {


    var p = prompt("Pilih : gajah, orang, semut");
    var comp = Math.random();
    console.log(comp);

    if (comp < 0.35) {
        comp = "gajah";
    } else if (comp >= 0.35 && comp <= 0.67) {
        comp = "orang";
    } else {
        comp = "semut";
    }

    // menentukan aturan
    var hasil = "";
    if (p == comp) {
        hasil = "SERI!";
    } else if (p == "gajah") {
        // if (comp == "orang") {
        //     hasil = "MENANG!";
        // } else {
        //     hasil = "KALAH!";
        // }
        hasil = (comp == "orang") ? "MENANG!" : "KALAH!";
    } else if (p == "orang") {
        hasil = (comp == "gajah") ? "KALAH!" : "MENANG!";
    } else if (p == "semut") {
        hasil = (comp == "gajah") ? "MENANG!" : "KALAH!";
    } else {
        hasil = "Memilih pilihan yang tidak sesuai";
    }

    //tampilan hasil
    alert("Kamu memilih : " + p + " dan komputer memilih : " + comp);
    alert("Hasilnya kamu " + hasil);
    tanya = confirm("Ingin bermain lagi ? ");
}
alert("Terima kasih sudah bermain :)");