// Write your code below this line

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const decodeString = word => {
    const wordArr = word.split("")
    const addNum = parseInt(wordArr[0])
    const decoded = []

    for (let i = 1; i < wordArr.length; i++) {
        let letter = alphabet.indexOf(wordArr[i]) + addNum
        decoded.push(alphabet[letter])
    }
    return decoded.join("")
}

console.log(decodeString('2fcjjm'))
console.log(decodeString("3ce"))
console.log(decodeString('1a'))