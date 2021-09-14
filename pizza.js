module.exports = function PizzaCartEvent() {
    // I want to be able to choose to buy small, medium or large pizza
    let total = 0.00;
    let smallCost = 31.99;
    let mediumCost = 58.99;
    let largeCost = 87.99;
    let smallTotal =0.00;
    let mediumTotal =0.00;
    let largeTotal = 0.00;

    let buyPizza = (choice) => {
        if (choice === "small") {
            smallTotal += smallCost;
        } else if (choice === "medium") {
            mediumTotal += mediumCost;
        } else if (choice === "large") {
            largeTotal += largeCost;
        }
    }
let totalCost = ()=>{
    total = smallTotal+mediumTotal+largeTotal;
    console.log(total)

    return total;
}
let totalSize=()=>{
    return buyPizza()
}
    return {
        buyPizza,
        totalCost,
        totalSize
    }
}