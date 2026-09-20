// variable url
const products = "https://fakestoreapi.com/products";
const users = "https://fakestoreapi.com/users";

// function
async function getData(url) {
  try {
    const response = await fetch(url);
    const dataJson = await response.json();
    return dataJson;
  } catch (error) {
    console.log("disini ada error di function");
  }
}

// function
async function listData(url) {
  const lists = await getData(url);
  return lists;
}

const productList = await listData(products);
productList.forEach((product) => {
  console.log(product);

  const title = document.createElement("h1")
  const price = document.createElement("p")
  const image = document.createElement("img")

  title.textContent = "Nama Produk : " + product.title
  price.textContent = "Harga : " + product.price
  image.src = product.image
  image.width = 150

  const container = document.getElementById("container")
  container.append(title, price, image)
});
