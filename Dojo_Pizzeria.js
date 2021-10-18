
function pizzaOven(){
    var pizzaTypeOne= ["hand tossed", "marinara","mozzarella", "feta","mushrooms", "olives","onions"]
    var pizzaTypeTwo= ["deep dish","traditional","mozzarella","pepperoni", "sausage"]
    var pizzaTypeThree= ["deep dish","marinara","mozzarella","olives","chicken"]
    var pizzaTypeFour= ["thin crust","marinara","mozzarella"]
    
    var pizzaPicker = Math.floor(Math.random()*4 +1)
    if(pizzaPicker==1){
        console.log(pizzaTypeOne)
    }
    else if(pizzaPicker==2){
        console.log(pizzaTypeTwo)
    }
    else if(pizzaPicker==3){
        console.log(pizzaTypeThree)
    } else if(pizzaPicker==4){
        console.log(pizzaTypeFour)
    }
}
pizzaOven()

// -----------------------------------------------------------------------

var crustOptions=["deep dish","hand tossed","thin crust"]
var sauceOptions=["Marinara","traditional"]
var cheeseOptions=["mozzarella"]
var toppingsOptions=["mushrooms", "olives", "onions","pepperoni", "sausage"]

function randomPizza(){
    var crust = Math.floor((Math.random()* crustOptions.length) +0)
    var sauce = Math.floor((Math.random()* sauceOptions.length) +0)
    var cheese = Math.floor((Math.random()* cheeseOptions.length) +0)
    var topping = Math.floor((Math.random()* toppingsOptions.length) +0)
console.log(crust,sauce,cheese,topping)
    var pizza = [crustOptions[crust],sauceOptions[sauce],cheeseOptions[cheese],toppingsOptions[topping]]
    return pizza
}
console.log(randomPizza())