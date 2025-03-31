const reverseWords =(input)=> {
    // To check if the string is valid
    if (typeof input !== "string") {
        console.log("Invalid input")
        return
    }

    //Trim extra spaces from start and end
    input = input.trim()
    // To check empty sentence
    if (input === "") {
        console.log("Empty sentence")
        return
    }
    // To split input into words
    let words = input.split(" ")

    // Empty array
    let inputWords = []

    // To remove the extra space, otherwise the array will include empty string 
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            inputWords.push(words[i])
        }
    }

    // To reverse the array of words
    let reversedWords = inputWords.reverse()

    // reversedinput store the reversed words
    let reversedinput = reversedWords.join(" ")

    console.log("Reversed input:", reversedinput)
}


reverseWords("Old Is Gold")
reverseWords("   Hello     World")
reverseWords(" ")
reverseWords(1234)
reverseWords("Sachin")