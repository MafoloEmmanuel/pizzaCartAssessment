const assert = require('assert');
const PizzaCartEvent = require('../pizza');
describe('Unit testing Pizza cart', () => {
    describe('Show the price of any size of pizza bought', () => {
        it('Buy a small pizza R31.99', () => {
            let pizzaInsta = PizzaCartEvent();
            pizzaInsta.buyPizza("small");
            pizzaInsta.smallChoice();
            assert.equal(31.99, pizzaInsta.smallChoice())

        });
        it('Buy a medium pizza R58.99', () => {
            let pizzaInsta = PizzaCartEvent();
            pizzaInsta.buyPizza("medium");
            pizzaInsta.mediumChoice();
            assert.equal(58.99, pizzaInsta.mediumChoice())

        });
        it('Buy a large pizza for R87.99', () => {
            let pizzaInsta = PizzaCartEvent();
            pizzaInsta.buyPizza("large");
            pizzaInsta.largeChoice();
            assert.equal(87.99, pizzaInsta.largeChoice())

        })
    })
    describe("Show how many times each pizza size has been ordered ", () => {
        let pizzaInsta = PizzaCartEvent();

        it('Show that a small pizza is bought 1 time', () => {
            pizzaInsta.buyPizza('small');
            pizzaInsta.countSmall()
            assert.equal(1, pizzaInsta.countSmall()
            )
        });
        it('Show that a medium pizza is bought 2 times', () => {
            pizzaInsta.buyPizza('medium');
            pizzaInsta.buyPizza('medium');

            pizzaInsta.countMedium();
            assert.equal(2, pizzaInsta.countMedium())
        });
        it('Show that a large pizza is bought 3 times', () => {
            pizzaInsta.buyPizza('large');
            pizzaInsta.buyPizza('large');
            pizzaInsta.buyPizza('large');


            pizzaInsta.countLarge();
            assert.equal(3, pizzaInsta.countLarge())
        });
    });
    describe("Show the Overall total", () => {
        let pizzaInsta = PizzaCartEvent();

        it("Show that the ovarall total cost for 1xsmall pizza, 2xmedium and 3xlarge is R413.94", () => {

            pizzaInsta.buyPizza('small');
            pizzaInsta.countSmall();

            pizzaInsta.buyPizza('medium');
            pizzaInsta.buyPizza('medium');

            pizzaInsta.countMedium();

            pizzaInsta.buyPizza('large');
            pizzaInsta.buyPizza('large');
            pizzaInsta.buyPizza('large');


            pizzaInsta.countLarge();

            assert.equal("R"+413.94, pizzaInsta.totalCost())

        })
    })
})
