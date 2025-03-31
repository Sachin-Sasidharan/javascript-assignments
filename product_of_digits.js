const productOfDigit = (num) => {
    // To check invalid inputs
    if (num === null || num === undefined || (typeof num !== "number" && typeof num !== "string")) {
        console.log("Invalid input")
        return
    }

    // Convert input to string and remove non-digit characters using Regex
    let str = String(num)
    str = str.replace(/\D/g, '')

    //If no digits the product is 0
    if (str.length === 0) {
        console.log("The product of all digits is 0")
        return
    }

    // Calculation
    let product = 1
    for (let char of str) {
        product *= Number(char)
    }
    console.log("The product of all digits is " + product)
}


productOfDigit(0) 
productOfDigit(1234)
productOfDigit(-1234)
productOfDigit(1023)
productOfDigit(12.34)
productOfDigit("00123")
productOfDigit("a1b2c3")
productOfDigit("")
productOfDigit("abc")
productOfDigit(null)
productOfDigit(undefined)
productOfDigit("   ")
productOfDigit("12@34")