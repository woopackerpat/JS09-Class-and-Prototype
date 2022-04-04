class Sale {
    name;
    calcPrice() {
        return this.price * (1-this.discount) * this.amount
    }

}

class Beverage extends Sale {
    amount;
    price;
    discount;
    constructor(name, amount, price, discount) {
        super()
        this.name = name;
        this.amount = amount;
        this.price = price;
        this.discount = discount
    }

}

const beverage = new Beverage('Pepsi', 3 , 19, 0.1)
console.log(beverage)
console.log(beverage.calcPrice())