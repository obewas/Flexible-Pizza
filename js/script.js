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
var customerOrder = function(){
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var city = $("#city").val();
    var location = $("#location").val();
    var contact = $("#ctc").val();
    var hse = $("#hse").val();

    return new fullOrder(fname, lname, city, location, contact, hse)
}
var orderedPizza = function(){
    var size = $("input['name=size']:checked").val();
    var flavor = $("option:selected").val();
    var newPizza = new Pizza(size, flavor)
    $("input['name=veg']:checked").each(function(){
        newPizza.addVeg($(this).val());
    });
    var beef = []
    $("input['name=beef']:checked").each(function(){
        newPizza.addBeef($(this).val());
    });
    $("input['name=chkn']:checked").each(function(){
        newPizza.addChicken($(this).val());
    });
    resetForm();
    return newPizza;

}


});