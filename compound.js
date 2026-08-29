// object

const rafi = {
    nama: "rafi ahmad",
    umur: 20,
    isMarried: true,
    alamat: {
        jalan: "jl. raya no. 123",
        kota: "jakarta",
        provinsi: "DKI Jakarta",
        kecamatan: "Cengkareng",
        kelurahan: "Cengkareng Barat",
    },
    sekolah: ["SDN 1 Cengkareng", "SMPN 2 Cengkareng", "SMAN 3 Cengkareng"],
};

console.log(rafi.nama); // wajib
console.log(rafi["nama"]); // alternatif
console.log(rafi.alamat.kota);
console.log(rafi["alamat"]["kota"]); // alternatif


// array

const namaBuah = ["apel", "jeruk", "mangga", "pisang"]; // index dimulai dari 0

console.log(namaBuah);
console.log(namaBuah[0]); // apel
console.log(namaBuah[3]); // pisang
console.log(namaBuah[4]); // undefined, karena index 4 tidak ada

console.log(rafi.sekolah[1]); // SMPN 2 Cengkareng