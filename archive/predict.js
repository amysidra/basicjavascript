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
rafi.nama = "haidar rafi";
console.log(rafi.nama.toUpperCase()); // wajib
console.log(rafi.nama.charAt(8).toUpperCase()); // wajib
console.log(rafi.umur.toString())