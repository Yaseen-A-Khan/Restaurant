let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCart = document.querySelector(".listCart");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "CHCIKEN AND VEG COMBO",
    image: "1.PNG",
    price: 1200,
  },
  {
    id: 2,
    name: "GRILLED CHICKEN",
    image: "2.PNG",
    price: 1200,
  },
  {
    id: 3,
    name: "SALMON",
    image: "3.PNG",
    price: 2200,
  },
  {
    id: 4,
    name: "PANNER BUTTER MASALA",
    image: "4.PNG",
    price: 230,
  },
  {
    id: 5,
    name: "VEG SALAD",
    image: "5.PNG",
    price: 200,
  },
  {
    id: 6,
    name: "TOMATO PIZZA",
    image: "6.PNG",
    price: 400,
  },
  {
    id: 7,
    name: " AALOO PARATHA",
    image: "7.PNG",
    price: 150,
  },
  {
    id: 9,
    name: "SPINACH SOUP",
    image: "8.PNG",
    price: 200,
  },
  {
    id: 10,
    name: "CHICKEN BIRIYANI",
    image: "9.PNG",
    price: 1200,
  },
];
let listCarts = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button style="background-color:#432C7A"onclick="addToCart(${key})">Add To Cart</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCart(key) {
  if (listCarts[key] == null) {
    // copy product form list to list cart
    listCarts[key] = JSON.parse(JSON.stringify(products[key]));
    listCarts[key].quantity = 1;
  }
  reloadCart();
}
function reloadCart() {
  listCart.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCarts.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCart.appendChild(newDiv);
    }
  });
  total.innerText = "Rs " + totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCarts[key];
  } else {
    listCarts[key].quantity = quantity;
    listCarts[key].price = quantity * products[key].price;
  }
  reloadCart();
}
