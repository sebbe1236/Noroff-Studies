//Add to cart function

// button.forEach(function(button) {
//   button.onclick = function(event) {

//   }
// }

// button.addEventListener("onclick", clicktest)

const bestSellers = document.querySelector(".api-content");
const pictureWinter = "https://rainydaysapi.sebbeprojects.com/wp-content/uploads/2021/08/winter-jacket.jpg";

const url = "https://rainydaysapi.sebbeprojects.com/wp-json/wc/store/products/";

async function apiWp() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const objects = result;
    console.log(result);
    bestSellers.innerHTML = "";
    for (let i = 0; i < objects.length; i++) {
      bestSellers.innerHTML += `<a href="featered.html?id=${objects[i].id}"><div>
      <h5>${objects[i].name}</h5>
      <img src="${objects[i].images[0].src}" alt="product image">
      
     
      </div>`;
    }
  } catch (error) {
    console.log("dette gikk galt");
  }
}

apiWp();
