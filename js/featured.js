const queryContent = document.querySelector(".query-content");

const queryString = document.location.search;
const param = new URLSearchParams(queryString);
const id = param.get("id");
const Url = "https://rainydaysapi.sebbeprojects.com/wp-json/wc/store/products/" + id;

console.log(id);

async function idFetch() {
  try {
    const response = await fetch(Url);
    const details = await response.json();
    console.log(details);
    productFetch(details);
  } catch (error) {
    console.log("lol");
  }
}
idFetch();
function productFetch(details) {
  console.log(details);
  queryContent.innerHTML += `
  <h3>${details.name}</h3>
  <div class= "featered-contentpage">
  
                               <div>
                               
                               <img src="${details.images[0].src}"></div>
                               
                               <div><p><h3>Price:</h3>${details.prices.price}€</p>
                               <h3>Product description:</h3>
                               <p>${details.short_description}</p></div>
    `;
}

productFetch();
