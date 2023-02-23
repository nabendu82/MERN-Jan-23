//difference between let var const
//this keyword.
//ES6: Scope:

//lexical scope - where the variable and the function are 
// declared based that their scope is determined.

//Dynamic scope - this.

//global - function - block;

// let a =10; //global - access it anywhere


// // scope  - 
// function d(){
//     console.log(a)
// }

// d()

// if(true){
//     console.log(a)
// }



// function dell(){
//     let a = 10; //localscope- 
    
// }

// dell()


// if(true){
//     let a =10;
    
// }

// function ddd(){
//     console.log(a)

// }

// ddd()


// if(true){
//     var a = 10;
    
// }
// console.log(a)

//this - is referece to an object in which the function/vari is property of.

// var - function - objecmethod - eventlistener;

// var a = this.alert('hello');

// console.log(a)



// window.alert('hello')


// function all(){
//     console.log(this)
// }

// const obj ={
//     add:12,
//     details:function(){
//         console.log(this.add)
//     }
// }

// const obj1 ={
//     add:120,
//     details:function(){
//         console.log(this.add)
//     }
// }

// // window.all()

// obj1.details()

// const add = document.querySelector('.infoo');

// add.addEventListener('click',function(){
//   this.innerHTML='change'
// })


// const a = localStorage.getItem('name');

// localStorage.setItem('age',27);

// console.log(localStorage.getItem('age'))