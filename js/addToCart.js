var cartItems = [
  {
    name: "Skiing jacket",
    price: "70 Euros",
    id: "main",
  },
];
const button = document.querySelector(".addtocart-btn");

function addToCart(event) {
  document.querySelector(".cart").style.display = "block";
  let jacketAdded = event.target.dataset.jacket;
  document.querySelector(".choosen-items").innerHTML += `
    <p>${jacketAdded}</p>
    <p>Price: 70 euros<p>
    `;
}

button.addEventListener("click", addToCart);
