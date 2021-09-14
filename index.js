const express = require('express');
const exphbs = require('express-handlebars');
const PizzaCartEvent = require('./pizza');
const PizzaService = require('./PizzaService');

let pizza = PizzaCartEvent()
let service = PizzaService()
const app = express();

app.engine('handlebars', exphbs({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const PORT = process.env.PORT || 3005
app.get('/', (req, res) => {
    res.render("index", {
        smallCount: pizza.countSmall(),
        mediumCount: pizza.countMedium(),
        largeCount: pizza.countLarge(),
        smallPrice: pizza.smallChoice().toFixed(2),
        mediumPrice: pizza.mediumChoice().toFixed(2),
        largePrice: pizza.largeChoice().toFixed(2),
        totalCost: pizza.totalCost()

    });
})

app.get('/pizzas', (req, res) => {
    const pizzas = service.listAll();
     res.render('pizza/index', {
        pizzas: service.listAll()
    });
})
app.post('/pizza/add', (req, res) => {

    console.log(req.body)
    service.addPizza(req.body)
    res.redirect('/pizzas');
})  
app.get('/pizza/add', (req, res) => {
    res.render('pizza/add')
})

app.post('/buypizza', (req, res) => {
    pizza.buyPizza(req.body.choice)
    res.redirect('/')
})
app.get('/orderpizza', (req,res)=>{
    res.render('orders',{
        orderList: pizza.orderStatus()

    })
})
app.get('/checkOrders',(req,res) =>{
    res.render('checkout', {
    })
})
app.listen(PORT, () => {
    console.log('App running on port ', PORT)
})