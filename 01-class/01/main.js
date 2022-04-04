class Calculator {
    value = 0;
    constructor(value) {
        this.value = value;
    };
    sum(addValue) {
        return this.value += addValue;
    };
    substract(substractValue) {
        return this.value -= substractValue;
    };
    multiply(mulValue) {
        return this.value *= mulValue;
    };
    divide(divValue) {
        return this.value /= divValue
    }
    show() {
        alert(this.value)
    }

}