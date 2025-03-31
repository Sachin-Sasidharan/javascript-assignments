// countWords function to count number of words in a sentence
const countWords = (input) => {

    // To check if the input is a valid string
    if (typeof input !== "string") {
        console.log("Invalid input")
        return
    }

    //Removes spaces at the beginning and end
    input = input.trim()

    // To check if input is empty
    if (input === "") {
        console.log("Empty input")
        return
    }

    //Split input
    let words = input.split(" ")

    // To remove the extra space, otherwise the array will include empty string 
    let newWords = []
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            newWords.push(words[i])
        }
    }

    //Count the words
    let wordCount = newWords.length;
    console.log("Number of words:", wordCount)
}

countWords("Hello Sachin, how are you?")
countWords("   123     hello  ")
countWords("")
countWords("        ")
countWords(null)
countWords(undefined)
countWords(12345)