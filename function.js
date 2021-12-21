function jumlahVolumeDuaKubus(a, b) {
    var volumeA, volumeB, total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}
console.log(jumlahVolumeDuaKubus(2, 3));
console.log(jumlahVolumeDuaKubus(3, 3));