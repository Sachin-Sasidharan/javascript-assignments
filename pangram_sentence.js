const pangram = (input) => {
    // To check if the input is string
    if (typeof input !== "string") {
        console.log("Invalid input")
        return
    }

    // to remove spaces and convert to lowercase
    input = input.trim().toLowerCase()

    // to check if the input is empty
    if (input === "") {
        console.log("Empty input")
        return
    }

    // removes duplicate letters
    let letter = new Set()

    // Loop through each character in the input
    for (let i = 0; i < input.length; i++) {
        let char = input[i]

        // To check if the character is a letter between a and z
        if (char >= 'a' && char <= 'z') {

            // Adding valid letter
            letter.add(char)
        }
    }

    // To check if it's a pangram
    if (letter.size === 26) {
        console.log("It is a pangram")
    } else {
        console.log("It is not a pangram")
    }
}


pangram("The quick brown fox jumps over the lazy dog")
pangram("Hello world!")                             
pangram("   ")                                       
pangram(12345)                     
