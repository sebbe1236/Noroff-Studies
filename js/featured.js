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
  queryContent.innerHTML += `
  <div class= "featered-contentpage">
  <h3>${details.name}</h3>
                               <div><img src="${details.images[0].src}"></div>
                               <p><p>Price:</p>${details.prices.price}</p>
                               <p>Product description:</p>
                               <p>${details.short_description}</p></div>
    `;
}

productFetch();
