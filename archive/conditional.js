const umurRafi = 1; // dapet dari database

if (umurRafi <= 12) {
    console.log("Rafi masih anak-anak");
} else if (umurRafi > 12 && umurRafi <=18) {
    console.log("Rafi masih remaja");
} else if (umurRafi > 18) {
    console.log("Rafi sudah dewasa");
}