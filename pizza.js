module.exports = function PizzaCartEvent() {
    // I want to be able to choose to buy small, medium or large pizza
    let total = 0.00;
    let smallCost = 31.99;
    let mediumCost = 58.99;
    let largeCost = 87.99;
    let smallTotal =0.00;
    let mediumTotal =0.00;
    let largeTotal = 0.00;
    let smallCount =0;
    let mediumCount =0;
    let largeCount =0;
    const orders =[]

// show orders with statuses like payment due, paid and collected
let orderStatus = ()=>{
    const order = {
        
            orderId : orders.length+1,
            status : "Payment due",
            amount : totalCost()
          }
          orders.push(order)
          
    
}
//set the pizza prices
    let buyPizza = (choice) => {
        if (choice === "small") {
            smallTotal += smallCost;
            smallCount++;
        } else if (choice === "medium") {
            mediumTotal += mediumCost;
            mediumCount++;
        } else if (choice === "large") {
            largeTotal += largeCost;
            largeCount++ ;
        }
    }
    // get pizza prices for each size
    let smallChoice = ()=>{
        return smallTotal;
    }
    let mediumChoice =()=>{
        return  mediumTotal;
    }
    let largeChoice= ()=>{
        return   largeTotal;
    }
    // count pizzas
    let countSmall =() =>{
        return smallCount;
    }
    let countMedium = ()=>{
        return mediumCount;
    }
    let countLarge = ()=>{
        return largeCount;
    }

let totalCost = ()=>{
total = smallChoice()+mediumChoice()+largeChoice();
    return "R" + total.toFixed(2)
}

    return {
        buyPizza,
        smallChoice,
        mediumChoice,
        largeChoice,
        totalCost,
        countLarge,
        countMedium,
        countSmall,
        orderStatus
    }
}