//Business Logic

function PizzaOrder(size, flavor, toppings, qty) {
  this.size = size
  this.flavor = flavor
  this.toppings = toppings
  this.qty = qty
}
//var newOrder = new PizzaOrder(size,flavor,toppings,qty)


  function totalCost(costFlavor,costSize, costTops){
    this.costFlavor = costFlavor
    this.costSize = costSize
    this.costTops = costTops
var size = document.querySelectorAll("input[name=size]:checked")[0].value
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

var flavor = document.getElementById('flavor').value;
costFlavor = 0;
if (flavor === 'pepperoni'){
	costFlavor += 400;
}else if (flavor === 'mushroom'){
costFlavor += 500;
} else if (flavor === 'bacon'){
costFlavor += 600;
}else if (flavor === 'barbeque'){
costFlavor += 700;
}

var toppings = document.querySelectorAll("input[name=tops]:checked")[0].value

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
var qty = document.getElementById('qty').value

var totalCharge = ((costSize + costFlavor + costTops) * qty) + delivery
alert(totalCharge) 
document.getElementById('price').innerHTML = "Your order total is Ksh. " + totalCharge + "."
}
