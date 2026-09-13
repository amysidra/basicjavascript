//normal function
function menyapa(nama, umur) {
    console.log("halo " + nama);
    console.log(`umur saya ${umur} tahun`);
}

// arrow function
const menyapaArrow = (nama, umur) => {
    console.log("hai " + nama);
    console.log(`umur saya ${umur} tahun`);
}


menyapa("rafi", 20);
menyapaArrow("rafi", 20);