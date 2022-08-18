// this is my function that sums two numbers
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (x) => {
    return ((x/1.2)*127.9)
}

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromYanToPound = (x) => {
    return ((x/127.9)*0.8)
}

// just a console log for ourselves.
console.log(fromDollarToYen(1))
console.log(fromEuroToDollar(3.5))
console.log(fromYanToPound(1))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
// module.exports = { fromDollarToYen };
module.exports = { sum, fromEuroToDollar,fromYanToPound,fromDollarToYen };
// module.exports = { fromYanToPound };