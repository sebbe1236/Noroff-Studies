var cartItems = [
  {
    Heading: "You have added",
    product: "Skiing jacket cross country",
    price: "70 Euros",
  },
];
const button = document.querySelector(".addtocart-btn");
let confirmAdded = document.querySelector(".cartinfo-text");
let itemList = document.querySelector(".choosen-items");

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

// function addToCart() {
//   for (var i = 0; i < cartItems.length; i++) {
//     if (cartItems < 1) {
//       button.disabled = false;
//       itemList.innerHTML += `
// <p>${cartItems[i].Heading}</p>
// <p>${cartIteems[i].product}</p>
// <p>${cartItems[i].price}</p>
// `;
//       confirmAdded.innerHTML += ` <p> Product added to cart</p>`;
//       break;
//     } else {
//       button.disabled = true;
//       document.querySelector(".cartinfo-text").style.display = "block";
//     }
//   }
// }
