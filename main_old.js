// const judul = document.createElement("p"); // membuat element
// judul.textContent = "Pelajaran Memanipulasi DOM"; // tambah text
// document.body.append(judul); // tempelkan

// const sapa = document.getElementById("sapaan");
// sapa.textContent = "Assalamu alaikum";

const statusValue = document.getElementById("inputStatus");
const containerStatus = document.getElementById("statusContainer");

const tombol = document.getElementById("submit");
tombol.addEventListener("click", () => {
  const statusText = statusValue.value;
  const tulisan = document.createElement("p");
  tulisan.textContent = statusText;
  containerStatus.prepend(tulisan);
  statusValue.value = "";
});
