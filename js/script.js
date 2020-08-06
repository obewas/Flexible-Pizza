//Business Logic

function PizzaOrder(size, flavor, toppings, qty) {
  this.size = size
  this.flavor = flavor
  this.toppings = toppings
  this.qty = qty
  this.customerDetails = function(){
  
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value
    var city = document.gtElementById('city').value
    var estate = document.getElementById('estate').value
    var contact = document.getElementById('ctc').value
    var hse = document.getElementById('hse').value
  }
     
  }
  

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
var delivery = document.querySelectorAll("input[name=del]:checked")[0].value

  costDel = 0
  if (delivery === 'yes'){
    costDel += 300
  } else if (delivery === 'no'){
    costDel += 0
  }
var qty = document.getElementById('qty').value
  qty = parseInt(qty)
  alert('qty')
var totalCharge = (costSize + costFlavor + costTops) + costDel

var today = new Date()
document.getElementById('price').innerHTML = today + "Your order total is Ksh. " + totalCharge + "."
}
