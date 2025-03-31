//countOfDigit arrow function is created to find the number of digits in the input
const countOfDigit = (num) => {

    // To check input is null, undefined or empty
    if (num === null || num === undefined || String(num).trim() === "") {
        console.log("Invalid input")
        return
    }

    // Converts input to string 
    let str = String(num)

    //Remove all non-digit characters using Regex
    let digits = str.replace(/\D/g, '')

    // Counts the number of digits
    let count = digits.length
    console.log("The count of digits in " + num + " is: " + count)
}


countOfDigit("0000")
countOfDigit(-1234)
countOfDigit(-12.34)
countOfDigit("a00  12bc")
countOfDigit("")
countOfDigit(null)
countOfDigit(undefined)
countOfDigit("   ")