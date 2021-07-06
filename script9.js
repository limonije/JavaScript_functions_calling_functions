const checkAge = function(number) {
     if (number >= 18) { 
        return true;
    } return false;
};

const greeting = function(number) {
    const check = checkAge(number);
    if (check == true) {
        console.log("Hello there");
    } else {
        console.log("Hey kiddo");
    }
};

greeting(18);

/*const calculateVAT = function(number) {
    const amountVAT = number * 0.21;
    return amountVAT;
};

const priceWith = function(number) {
    const amountVAT = calculateVAT(number)
    const basePrice = number;
    const total = basePrice + amountVAT;
    return total;
};

console.log(priceWith (500));*/

const basePrice = function(total, perc) {
    const base = total / (1 + perc);
    return base;
};

const priceWithoutVAT = function(total, perc) {
    const priceNoVAT = basePrice (total, perc);
    const amountVAT = total - priceNoVAT;
    const array = [priceNoVAT, amountVAT];
    return array;
};

console.log(priceWithoutVAT (1.47, 0.09));
