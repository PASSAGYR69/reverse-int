module.exports = function reverse (n) {
    let finalValue =  (((Math.abs(n).toString()).split('')).reverse()).join(''); 
    return +finalValue;
}

