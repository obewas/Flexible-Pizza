//Business Logic

function PizzaOrder(size, flavor, toppings, qty) {
  this.size = size
  this.flavor = flavor
  this.toppings = toppings
  this.qty = qty
}
//var newOrder = new PizzaOrder(size,flavor,toppings,qty)

function totalCost(){
/*var size = document.getElementsByTagName('size').value
alert(size)
costSize = 0
if (size === 'small'){
  costSize += 400
} else if (size === 'medium'){
  costSize += 500
} else if (size === 'large') {
  costSize += 600;
} else if (size === 'xlarge') {
  costSize += 700;
}
*/
var select = document.getElementById('flavor').value;
cost = 0;
alert(select);
if (select === 'pepperoni'){
	cost += 400;
}else if (select === 'mushroom'){
cost += 500;
}
if (select === 'bacon'){
cost += 600;
}if (select === 'barbeque'){
cost += 700;
}

/*
var toppings = document.getElementsByName('tops').value
  costTops = 0
  if (toppings === 'Vegetable'){
   costTops += 250
} else if (toppings === 'beef'){
  costTops += 250
} else if (toppings === 'chkn'){
  costTops += 250
}
var delivery = document.getElementsByName('del').value
  costDel = 0
  if (delivery === 'yes'){
    costDel += 300
  } else {
    costDel = 0
  }
//var qty = document.getElementById('qty').value

var totalCharge = ((costFlavor + costTops) + costDel);
alert(costFlavor) */

document.getElementById('price').innerHTML = "Your order total is Ksh. " + select + "."
}
