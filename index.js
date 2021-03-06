var cart = [];

var getCart = function() {
  return cart;
}

var setCart = function(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


var addToCart = function (item) {


  var price = (Math.floor(Math.random()*100));

  cart.push({[item]: price});

  console.log(`${item} has been added to your cart.` );

  return cart;
}

var viewCart = function() {
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {

    var message = "In your cart, you have";
    for (var i=0; i< cart.length; i++) {
      for (var itemName in cart[i]) {
        message = `${message} ${itemName} at $${(cart[i])[itemName]},`
      };

    };
    message = `${message.slice(0,-1)}.`;
console.log(message);
};
}

var removeFromCart = function (item) {
  for (var i=0; i< cart.length; i++) {
    for (var itemName in cart[i]) {
      if (itemName === item) {
        cart.splice(i,1);
        return cart;
      }
    };
  };
  console.log("That item is not in your cart.");
}

var placeOrder = function (cardNumber) {
  if (!cardNumber) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    };

    cart = [];
}
