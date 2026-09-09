const buahPasar = ["apel", "jeruk", "mangga", "pisang", "semangka"];

console.log("Daftar buah di pasar:");
for (let i = 0; i < buahPasar.length; i++) {
    console.log(buahPasar[i]);
}

console.log("Daftar buah di pasar (menggunakan for...of):");
buahPasar.forEach((buah)=>{
    console.log(buah);
})