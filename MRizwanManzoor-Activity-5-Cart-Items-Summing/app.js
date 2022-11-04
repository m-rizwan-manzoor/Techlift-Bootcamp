const formElement = document.querySelector('form');
const totalElement = document.getElementById('total');

let items_price = {
  birthday_cake: 49.95,
  party_cups: 5.00,
  beer_kegs: 919.99,
  pound_of_beef: 269.45,
  bullet_proof_vest: 450.00
}

function totalAmount(event) {
  event.preventDefault();

  const inputElements = document.querySelectorAll("input");
  let totalCount = 0;

  for (inputElement of inputElements) {
    let selectedItemPrice = inputElement.dataset.ref
    totalCount += inputElement.value * items_price[selectedItemPrice]
  }

  totalElement.textContent = "$" + totalCount;
}

formElement.addEventListener('submit', totalAmount);