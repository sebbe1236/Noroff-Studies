var cartItems = [
  {
    name: "Skiing jacket",
    price: "70 Euros",
    id: "main",
  },
];
const button = document.querySelector(".addtocart-btn");
let confirmAdded = document.querySelector(".cartinfo-text");

function addToCart(event) {
  document.querySelector(".cartinfo-text").style.display = "block";
  document.querySelector(".cartinfo-text").innerHTML += `<p>Product added to cart</p>`;
  let jacketAdded = event.target.dataset.jacket;
  document.querySelector(".cart").style.display = "block";

  document.querySelector(".choosen-items").innerHTML += `
    <ul>${jacketAdded}</ul>
    <ul>Price: 70 euros</ul>
    `;

  localStorage.setItem(cartItems, event);
}

button.addEventListener("click", addToCart);
