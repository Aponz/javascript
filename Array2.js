// 1.Menambah isi array
// var array = [];
// array[0] = "Arifin";
// array[1] = "Surya";
// array[2] = false;
// array[3] = 3;
// console.log(array);


//  2. Menghapus isi Array
// var array = ["Arifin", "Surya", false, 3];
// array[1] = undefined;
// console.log(array);


// 3. Menampilkan Array
// var array = ["Arifin", "Surya", "Alianso", "B", "C"];
// for (var i = 0; i < array.length; i++) {
//     console.log("Mahasiswa ke - " + (i + 1) + " : " + array[i]);
// }

// Method pada array
// 1. join
// untuk menggabungkan isi array
// var array = ["Arifin", "Surya", "Alianso", "B", "C"];
// console.log(array.join(" - "));

// 2. Push dan Pop
// push untuk menambah element terakhir di array
// pop untuk menghapus element terakhir di array

// Push
// array.push("Apon", "Pon");
// console.log(array.join(" - "));

// Pop
// array.pop();
// array.pop();
// console.log(array.join(" - "));

// 3. Unshift dan Shift
// Unshift untuk menambah element awal di array
// Shift untuk menghapus element awal di array

// Unshift
// array.unshift("Aapon", "Poon");
// console.log(array.join(" - "));

// shift
// array.shift();
// array.shift();
// console.log(array.join(" - "));

// 4. Splice 
// Splice untuk menambahkan di element di tengah2 array
// splice (indexAwal , mauDihapusBerapa , elemntBaru1, elementBaru2, ... )
// array.splice(3, 0, "AAA", "BBB");
// array.splice(3, 5, "Kuy");
// console.log(array.join(" - "));

// 5. Slice 
// Slice untuk mengiris sebuah array menjadi array yg baru
// slice (awal,akhir)
// var array2 = array.slice(1, 4);
// console.log(array2.join(" - "));

// 6. forEach
// perulangan seperti for. tapi ini pada array
// var angka = [1, 2];
// var nama = ["Arifin", "Surya", "Alinaso", ];
// nama.forEach(function (e, i) {
//     console.log("Mahasiswa ke - " + i + " adalah : " + e);
// })

// 7. map
// mengembalikan nilai array
// var angka = [1, 3, 2, 5, 4, 7, 8, 6];
// var angka2 = angka.map(function (e) {
//     return e * 2;
// });
// console.log(angka2.join("-"));

// 8. sort
// untuk mengurutkan 
var angka = [1, 3, 2, 5, 10, 4, 20, 7, 8, 6];
// angka.sort();
angka.sort(function (a, b) {
    return a - b;
})
// jika b - a maka dari besar ke kecil (descending)
console.log(angka.join(" - "));