//Business Logic
function PizzaOrder(size, flavor, toppings, qty) {
  this.size = size
  this.flavor = flavor
  this.toppings = toppings
  this.qty = qty
}
var newOrder = new PizzaOrder(size,flavor,toppings,qty)


var size = document.getElementsByName('size').value 
if (size === 'small'){
  costSize = 400
} else if (size === 'medium'){
  costSize = 500
} else if (size === 'large') {
  costSize = 600;
} else if (size === 'xlarge') {
  costSize = 700;
}
var flavor = document.getElementById('flavor').value
  if (flavor === 'pepperoni'){
  costFlavor = 400;
} else if (flavor === 'bacon'){
  costFlavor = 600;
} else if (flavor === 'mushrooms'){
  costFlavor = 400;
} else if (flavor === 'barbeque'){
  costFlavor = 500;
}
var toppings = document.getElementsByName('tops').value
  if (toppings === 'Vegetable'){
   costTops = 250
} else if (toppings === 'beef'){
  costTops = 250
} else if (toppings === 'chkn'){
  costTops = 250
}
var delivery = document.getElementsByName('del').value
  if (delivery === 'yes'){
    costDel = 300
  } else {
    costDel = 0
  }
var qty = document.getElementById('qty').value

var totalCost = ((costSize + costFlavor + costTops) * qty) + costDel;

document.getElementById('price').innerHTML = "Your order total is Ksh. " + totalCost + "."