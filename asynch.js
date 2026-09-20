// variable url
const products = "https://fakestoreapi.com/products";
const users = "https://fakestoreapi.com/users";

// function
async function getData(url) {
    try {
        const response = await fetch(url)
        const dataJson = await response.json()
        return dataJson
    } catch (error) {
        console.log("disini ada error di function pertama")
    }
}

// function 
async function listData(url) {
    const lists = await getData(url)
    console.log(lists)
}

listData(products);