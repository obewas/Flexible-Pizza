//Bsiness Logic
$(document).ready(function(){
    function Pizza(size, toppings){
        this.size = size;
        this.vegToppings = [];
        this.beefToppings= [];
        this.chickenToppings = [];
        
    }
    Pizza.prototype.addVeg = function(veges){
        this.toppings.push(veges);
    }
    Pizza.prototype.addBeef = function(beef){
        this.toppings.push(beef);
    }
    Pizza.prototype.addChicken = function(chicken){
        this.toppings.push(chicken);
    }
    
    Pizza.prototype.basicCost = function(){
        if (this.size === "small"){
            cost = 600;
        } else if (this.size === "medium") {
            cost = 800;
        } else if (this.size === "large"){
            cost = 1000;
        } else if (this.size === "xlarge"){
            cost = 1500;
        }
    this.vegToppings.forEach(function(){
        addCost += 200
        })
    this.beefToppings.forEach(function(){
        addCost += 200
    })
    this.chickenToppings.forEach(function(){
        addCost += 250
    })
    this.addCost = cost;
    }
contact

function fullOrder(fname, lname, city, location, contact, hse){
    this.fname = fname;
    this.lname = lname;
    this.city = city;
    this.location = location;
    this.contact = contact;
    this.hse = hse;
    this.pizzaCost = []
    }

fullOrder.prototype.addPiza = function(Pizza){
    Pizza.basicCost();
    this.pizzaCost.push(pizza)
}
fullOrder.prototype.sumTotal = function() {
    var totalCost = 0;
    this.pizzas.forEach(function(pizza) {
      totalCost += pizza.addCost;
    });
    this.totalCost = totalCost;
}

});