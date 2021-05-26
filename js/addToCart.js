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
    <ul>${jacketAdded}</ul>
    <ul>Price: 70 euros</ul>
    `;
  localStorage.setItem(cartItems, event);
}

button.addEventListener("click", addToCart);
