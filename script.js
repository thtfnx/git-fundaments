 let age = 19 // data-type - number
 let myName = 'Aziz' // data-type -string
let bool = false // data-type - boolean
let number; // data-type - undefind
console.log(number)
// console.log(a) // data-type - null
 //                ^^^  
// BU "ПРОСТИЙ" MA'LUMOT TURLARINI (DATA-TYPE) EDI



// 'СЛОЖНЫЙ'(OBYEKTIV) MA'LUMOT TURLARI (DATA-TYPE)
            // ^^^   
// OBJECT

let person = {
    name: 'Aziz', // string 
    age: 19,  // number
    isMarried: false, // boolean
}

console.log(person)

// array

let arr = ["water", "phone", "mouse" ]
console.log(arr)

arr[0] = 'powernbank'
console.log(arr)



let x = 6
let y = 9

console.log(y - x)
console.log(y + x)
console.log(y / x)
console.log(y * x)
console.log(y % x)

let z = 84
console.log(z % 8)

x++
console.log(x)

x--
console.log(x)

let a = 10 
let b = 14

console.log(a == b)

console.log(4 / 0)

console.log('4' + 4)

// alert('HELLO WORLD')
// let answer = confirm('siz galuboymisiz')
// console.log(answer)

let answer = prompt(message = 'What is your name')
console.log(answer)


                        // FOR LOOP
// //  First way
// for (let i = 0; i <= 20; i++) {
//    console.log(i)
// }

// Second way
// let i = 0
// do{
//    console.log(i)
//    i++
// }while(i < 20)

// Third way 
let i = 0 
while (i < 20) {
    console.log(i)
    i++
}


let answers = []
let questions = [
   "who are you",
    'how old are you',
    'where are you from'
] 

for (let i = 0; i < questions. length; i++) {
    answers[i] = prompt(questions[i])
}
console.log(answers)
















