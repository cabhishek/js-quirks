var print = require('./print')

// ===================================================

// 1)Variable hoisting

// function foo() {
//     var name

//     print(name)

//     name = "Slim Shady"

//     print(name)
// }

// foo()

//1.a) Block scope like Java and C# ?
// function foo(bar) {
//     var blitz
//     var baz

//     baz  = bar * 2

//     //if (bar > 1000)
//     if (bar > 1) {
//         blitz = baz - 100
//     }

//     print("blitz value is =>" + blitz)

// }

// foo(200)

// How to create function scope?
// function foo(bar) {
//     var baz = bar * 2

//     //if (bar > 1000)
//     (function (name){
//         if (bar > 1) {
//             var blitz = baz - 100
//             print(name)
//         }

//         print("blitz value is =>" + blitz)

//     })("slim shady")

// }

// foo(200)

// var binds variable to its scope or assigns a scope to variables

// How to Shoot Yourself in the Foot With Var
// JavaScript’s var keyword is scoped to the function enclosing it.

// var introductions = [],
//     names = ["Slim", "Shady", "Eminem"]


// for(var i=0 i<names.length i++){

//     introductions[i] = function(soAndSo){
//         return "Hello, " + soAndSo + ", my name is " + names[i]
//     }
// }

// print(introductions[0]("John"))
// print(introductions[1]("Abhishek"))

//What went wrong?
//The answer is that pesky var i. Remember that i is bound in the surrounding environment
//JavaScript looks i up in its enclosing environment (its closure), and gets the value 3

//use => node --use-strict --harmony <file_name>
// for (let i = 0 i < 3 i++) {
//   print('i:', i)
// }

// print(i)

// Declares a block scope local variable, optionally initializing it to a value.

// function foo() {
//   print(name) // ReferenceError

//   let name = "Slim Shady"
// }

// ===================================================


//2) Implicit conversion  == is also not transitive so avoid

// print('2' == 2)

// print("abc" == new String("abc"))

// print('true' == true)
// print('false' == false)

// print(false == '0')

// //Always use === for equality checks
// print('2' === 2)
// print("abc" === new String("abc"))

// var data = {}

// var key1 ={}
//     key2 = {}

// data[key1] = "I am real slim shady"

// print(data[key2])

//JavaScript has no built-in hash-table/dict support

//3) Prototypes
// function Person(name){
//     this.name = name
// }

// print(Person.prototype)

// var person = new Person("Slim Shady")

// print(person instanceof Person)

// Person.prototype.printName = function(){
//     print("My name is real =>" + this.name)
// }

// print(Person.prototype)

// person.printName()

// print(Object.getPrototypeOf(person) === Person.prototype)

// Person.prototype.printAge = function(age){
//     print("My age is =>" + age)
// }

// person.printAge(40)

// print(Person.prototype)

// Person.prototype = {
//     printName : function(){
//         print("Now I am real =>" + this.name)
//     }
// }

// print(Person.prototype)

// person.printName()

// print(Object.getPrototypeOf(person) === Person.prototype)

//Inhertiance
// function Musician(name){
//     this.name = name
// }

// Musician.prototype = Object.create(Person.prototype)

// var musician = new Musician("Bob Dylan")

// musician.printName()

// Musician.prototype.Childern = function(){
//     print("Yes man has childern")
// }

// print(Musician.prototype)

// print(musician instanceof Person)
// print(musician instanceof Musician)


// ===================================================
//4) Bound methods

// function MyKlass() {
//     this.name = "Slim Shady"

//     var foo = this.printMe.bind(this)

//     foo()
// }

// MyKlass.prototype.printMe = function() {

//     print("I am real => " + this.name)
// }

// new MyKlass

// // the assignment f = this.foo does not assign a bound method to f. It’s simply a property lookup on the object this
// // it indeed has the property foo, which is a function. f now refers to that function. That’s it.
// // There is no implicit binding going on.

// var SomeView = Backbone.View.extend({

//     initialize: function() {
//         var messages = this.collection
//         messages.on("reset", this.render, this)
//     },

//     render: function(){
//         // ... awesome code here
//     }
// })

// //Angular js
// angular.bind(self, fn, args)

// angular.forEach(obj, iterator, [context])

//Other cool stuff

//A variable assignment is also an expression that returns the value being assigned
// var baz = 10

// print(foo = (bar = baz) * 2)

// print(bar)
// print(foo)

//functions vs methods
//“functions that belong to an object” to “methods.”

//5) new vs Object.create
// function Shape() {
//     this.x = 0
//     this.y = 0
//     console.log('Shape constructor called')
// }

// Shape.prototype = {
//     move: function(x, y) {
//         this.x += x
//         this.y += y
//     }
// }

// // Rectangle
// function Rectangle() {
//     console.log('Rectangle constructor called')
//     this.x = 0
//     this.y = 0
//     // If you want to call Shape's constructor function
//     // Shape.call(this);
// }

// Rectangle.prototype = Object.create(Shape)
// Rectangle.prototype = new Shape()

// rectangle = new Rectangle()

// print(rectangle instanceof Shape)
// print(Shape.isPrototypeOf(rectangle))


// function Person(name) {
//     this.name = name
// }

// // Person.prototype = Object.create(null);

// var person = new Person("Slim Shady");
// console.log(person.toString);
