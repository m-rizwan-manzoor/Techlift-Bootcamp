function validateName() {
  let name = document.forms["myForm"]["nameOnCard"].value;

  if (name.includes(" ")) {
    return true;
  } else {
    alert("Name must be two or more words.");
    return false;
  }
}

function validateCard() {
  let number = document.forms["myForm"]["cardNumber"].value;

  let regEx = /^[0-9+]{4}-[0-9+]{4}-[0-9+]{4}-[0-9+]{4}$/;
  if (number.match(regEx)) {
    return true;
  } else {
    alert("Please enter a valid credit card number.");
    return false;
  }
}

function validateCVV() {
  let number = document.forms["myForm"]["cvv"].value;

  let regEx = /^[0-3+]{3}$/;
  if (number.match(regEx)) {
    return true;
  } else {
    alert("Please enter a valid CVV number.");
    return false;
  }
}