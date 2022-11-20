//  let age = 19 // data-type - number
//  let myName = 'Aziz' // data-type -string
// let bool = false // data-type - boolean
// let number; // data-type - undefind
// console.log(number)
// console.log(a) // data-type - null
 //                ^^^  
// BU "ПРОСТИЙ" MA'LUMOT TURLARINI (DATA-TYPE) EDI



// 'СЛОЖНЫЙ'(OBYEKTIV) MA'LUMOT TURLARI (DATA-TYPE)
            // ^^^   
// OBJECT

// let person = {
//     name: 'Aziz', // string 
//     age: 19,  // number
//     isMarried: false, // boolean
// }

// console.log(person)

// // array

// let arr = ["water", "phone", "mouse" ]
// console.log(arr)

// arr[0] = 'powernbank'
// console.log(arr)



// let x = 6
// let y = 9

// console.log(y - x)
// console.log(y + x)
// console.log(y / x)
// console.log(y * x)
// console.log(y % x)

// let z = 84
// console.log(z % 8)

// x++
// console.log(x)

// x--
// console.log(x)

// let a = 10 
// let b = 14

// console.log(a == b)

// console.log(4 / 0)

// console.log('4' + 4)

// alert('HELLO WORLD')
// let answer = confirm('siz galuboymisiz')
// console.log(answer)

// let answer = prompt(message = 'What is your name')
// console.log(answer)


                        // FOR LOOP
// //  First way
// for (let i = 0; i <= 20; i++) {
//    console.log(i)
// }

// // Second way
// let i = 0
// do{
//    console.log(i)
//    i++
// }while(i < 20)

// // Third way 
// let i = 0 
// while (i < 20) {
//     console.log(i)
//     i++
// }


// let answers = []
// let questions = [
//    "who are you",
//     'how old are you',
//     'where are you from'
// ] 

// for (let i = 0; i < questions. length; i++) {
//     answers[i] = prompt(questions[i])
// }
// console.log(answers)

                  // SHARTLI OPERATORLAR
            // if or false 

// let age = prompt(message = 'Yoshingiz nechada?')


// if(age < 18) {
//     alert ('xali voxli')
// }else if (age > 80) {
//     alert('Endi kech')
// }else{
//     alert('Welcome')
// }

// switch (age){
//     case '18' :
//         alert( 'sizni yoshiz 18 da')
//         break
//     case '50' :
//         alert('sizni yoshiz 50da')
//         break 
//     default : 
//     alert ('sizni yoshiz nomalum')      
// }



                       // FUNCTION and RETURN
                 
// function myFirstFunction() {
//     console.log('HI !!!  My name is Aziz')
// }              
// myFirstFunction()         


// // FUNCTION EXPRESSION
//  let myFunc = function() {  // buni o'rni almashsa natija chiqmaydi
//     console.log ('this function is expression')
// }
// myFunc()

// // FUNCTION DECLORATION
// // myFirstFunction( name = "Aziz")  //o'rni almashsa ham natija o'zgarmaydi
// let num = 5
// function myFirstFunction(name) {
//     let num = 10
//     num++
//     console.log(num)
//     console.log(`HI !!!  My name is ${name}`)
// }
// myFirstFunction( name = "Aziz")
// console.log(num)





// function myFirstApp(name, age) {
//     alert(`Hi, my name is ${name} and I am full stack developer`)


//     function showSkills() {
//         let skills = ['Html', 'CSS', 'Javascript']
//         for (let i = 0; i < skills.length; i++)
//            alert(`I have skills ${skills[i]}`)
//     }
//     showSkills()

//     function checkAge() {
//       let age = prompt(message = 'Yoshinigiz nechada ?')  
//        if(age > 18){
//         alert (`Exactly data for learning IT`)
//        }
//        else if (age < 18) {
//         alert (`Super data for learning IT`)
//        }
//     }
//     checkAge()

// " RETURN - haqida qisqacha tushuncha"
  
// function name () {
//     return ( "Hi my name is Aziz")
// }
// console.log(name())
//      function calcPow(num){
//         return num * num
//      }
//      console.log(calcPow(num = 5))
// }
// myFirstApp( name = "Aziz", age = 18)



            //   LESSON : THIS  ,  BIND
// function Aziz () {
//     console.log(this)
// }


// // OBJECTNI ICHIDAGI 'THIS' OBJECTNI O'ZIGA TENG
// const person = {
//     name : 'Aziz',
//     age : 19,
//     job : 'Pythondev',
//     callContext : Aziz,
//     callAnotherContext : Aziz.bind(this),
//     callInfoJob : function(number) {
//         console.group(`${this.name} info: `);
//      console.log(`Name is ${person.name}`);
//      console.log(`Age is ${person.age}`);
//      console.log(`Job is ${person.job}`);
//      console.log(`Contact is ${number}`);
//         console.groupEnd();
//     }
// }


// const frontendev = {
//  name : 'Azico',
//  age : 16,
//  job : 'front-end dev'
// }

// const fullInfo = person.callInfoJob.bind(frontendev , '+998-(93)-689-76-97 ') () ;


//           // CALL  ,  APPLY
// person.callInfoJob.apply(frontendev , ['+998-(93)-689-76-97 '])   
// person.callInfoJob.call(frontendev , '+998-(93)-689-76-97 ')        



              // ========== //
            //   First way 

// const array = [19 , 27, 48, 73] ;

// function mult(arr , number) {
//     return arr . map(function (i) {
//         return i * number
//     })
// }
// console.log(mult(array, number = 6));

            //   Second way

// const array = [34, 44 , 64 ,43]

// Array.prototype.logger = function (number) {
//     return this.map (function (i) {
//     return i * number
//     })
// }
// console.log(array .logger(4));


                    //    Closure/
// // //  //  //  //  //  //  ///  ///  /// //  //  // 

// function urlGenerator (domain) {
//     return function (host) {
//         return `https://${host}. ${domain}`
//     }
// }

// const comUrl = urlGenerator ('com')

// console.log(comUrl('google'));
// console.log(comUrl('netflix'));
// console.log(comUrl('instagram'));
// console.log(comUrl('facebook'));

// const ruUrl = urlGenerator ('ru')

// console.log(ruUrl('yandex'));
// console.log(ruUrl('mail'));
// console.log(ruUrl('ok'));
// console.log(ruUrl('sefan'));

//   //   //   //  //   //   //  //

// function bind ( context , fn) {
//     return function ( ...args) {
//         fn.apply (context , args)
//     }
// }

// function personInfo () {
//     console.log(`
//     Name = ${this.name},
//     Age = ${this. age}, 
//     Job = ${this. job}`);
// }

// const Aziz = {
//    name: 'Aziz',
//    age: 18,
//    job: 'Pythondev' 
// }

// const Azico = {
//    name: 'Azico',
//    age: 19,
//    job: 'front-End dev'
// }

// bind(Aziz, personInfo)()
// bind(Azico, personInfo) ()


 // // // //  //  //  //  //  //  //  


                //  . LocalStorage

// const number = 8;

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number', number.toString())
// console.log(localStorage.getItem('number'));
// localStorage.clear()

// //   //    //    //    //

// const person = {
//     name: 'Aziz', 
//     age: 19,
//     job:'Pythondev' 

// }

// localStorage.setItem('person', JSON.stringify(person))
// const localData = localStorage.getItem('person')
// const personInfo = JSON.parse(localData)

// personInfo.name = 'Azico'
// console.log(personInfo);

// console.log(JSON.parse(localData)); // 1 way 
// console.log(localData);  // 2 way
 
// localStorage.setItem('updatePerson', JSON.stringify(personInfo))

//                  // // //  JSON    
// localStorage.setItem('person', person.toString)

// const json = JSON.stringify(person)

// console.log('obj to json' ,json);

// const obj = JSON.parse(json)

// console.log('json to obj', obj);


//   //   //   //   //   //   //   //   //    //    //    //    //    //    //    //  
               
                        // Class, getters & setters
// class Car {
//     constructor(options) {
//         this.name = options.name
//         this.isAirBag = options.isAirBag
//         this.extraBalon = options.extraBalon
//     }
//     speed () {
//         console.log('350 km/h');
//     }
// }
// const BMW = new Car ( {
//     name: 'BMW',
//     isAirBag: true,
//     extraBalon: 2
// })
// class BUS  extends Car {
//     static type = 'BUS'
// }
// class Bus extends Car  {
//     constructor(options ) {
//         super(options)
//         this.weight = options.weight 
//     }
//     speed() {
//         super.speed()
//         console.log(' 60 km/h')
//     }
//     get extraBalonInfo() {
//         return this.extraBalon * 3
//     }
//     set extraBalonInfo(newValue) {
//         this.extraBalon = newValue
//     }
// }
// const Man  = new Bus ( {
//     name: 'MAN', 
//     isAirBag: false,
//     extraBalon: 1,
//     weight: '40,000 kg'
// })


    //    //    //    //    //    //    //

// class Component {
//     constructor(selector) {
//         this.$el = document.querySelector(selector)
//     }

//     showElement() {
//          this.$el.style.display = 'block'
//     }

//     hideElement() {
//          this.$el.style.display = 'none'
//     }
// }    


// class Square extends Component {
//     constructor(options) {
//         super(options.selector);
//         this.$el.style.width = this.$el.style.height = options.size + 'px';
//         this.$el.style.background = options.color
//      }
// }

// const square1 = new Square (options = {
//          selector: "#square1",
//          size: 100,
//          color: 'violet'
// } )

// const square2 = new Square (options = {
//     selector: "#square2",
//     size: 100,
//     color: 'blue'
// } )


// class Circle extends Square {
//     constructor(options) {
//         super(options);
//         this.$el.style.borderRadius = '50%'

//      } 
// }    

// const circle1 = new Circle (options = {
//     selector: "#circle",
//     size: 100,
//     color: 'black'
// } )


//    //    //    //   //     //     //   // 
                            //   Amaliyot
//                           // Функция Конструктор
// function User (name, id) {
//     this.name = name;
//     this.id = id; 
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     }
// }

// User.prototype.exit = function() {
//    console.log(`User ${this.name} exit`);
// }
// const Azico = new User ('Aziz' , '4')
// const Sammi = new User ('Sammi' , '5')
// const yusuf = new User ('Yusuf' , '19')

// Azico.exit()
// Sammi.exit()
// yusuf.hello()

// console.log(Azico);
// console.log(Sammi); 

            // // Контекст Визова : This

// function hi () {
//     console.log(this);
// }
// hi()

// function showThis (a, b) {
//     console.log(this);
// function summ () {
//     console.log (this);
//     return a + b 
// }
// console.log( summ());
// }
// showThis(a = 2, b = 3);

//      //     //  Контекст Визова : This  Second way

// const obj = {
//     a: 43,
//     b: 38,
//     c: 32,
//  sum: function () {
//         console.log(`${this.a} + ${this.b} + ${this.c}` );
//     }
// }

// obj.sum ()


          //    //    Обычный Функция  This = Window
// function User (name, id) {
//     this.name = name,
//     this.id = id,
//     this.age = 19,
//     this.human = true
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     }
// }          


// const Azico = new User ('Aziz', 4)
// const yusuf = new User ('Yusuf', 9)

// console.log(Azico);
// Azico.hello()

// console.log(yusuf);
// yusuf.hello()


// //    // Call,  // Apply,  //Bind
 
// function sayName (surname) {
//     console.log(this);
//     console.log(this.name + surname)
// }


// const user = {
//     name: 'Aziz'
// }

// sayName.call(user, ' ibn Nasim')
// sayName.apply(user, [' Ibn Nasim'])

// function count (num) {
//     return this + num
// }

// const double = count.bind(this.Arg = 2)
// console.log(double(13));
// console.log(double(19));
// console.log(double(14));

// const btn = document.querySelector('button') 
// btn.addEventListener('click', function () {
//     this.style.backgroundColor = 'red' 
// // })


// setTimeout( function() {
//   alert('hi bruh')
// } ,1000)
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.loader')

  setTimeout( () => {
    loader.style.opacity = '0'
    setTimeout( () => {
      loader.style.display = 'none'
    }, 500)
  }, 2000)
})

// setInterval( function() {
//   alert('hi bro')
// } ,2000)