

// // fr - b
// // fron -  sver - database


// // TWD - events upcoing or past - 




// // backend

// // form - 

// // database - datsabace APi

// // i am mannal database - display in a neet Ui


// // list of inform - grpuped
// const events = [
//     {
//         title:'TWD JS Workshops',
//         img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMHdvcmtzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',

//         timing:'9Am',
//         Tutors: ['Hari','Nabendu']

//     },
//     {
//         title:'TWD React Workshops',
//         img:'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',

//         timing:'4Am',
//         Tutors: ['Hari','Nabendu']
//     },
//     {
//         title:'TWD HTML Workshops',
//         img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMHdvcmtzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',

//         timing:'7Am',
//         Tutors: ['Hari','Nabendu']
//     },
//     {
//         title:'TWD Css Workshops',
//         img:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',

//         timing:'9Am',
//         Tutors: ['Hari','Nabendu']
//     },
//     {
//         title:'TWD Angular Workshops',
//         img:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',

//         timing:'9Am',
//         Tutors: ['Hari','Nabendu']
//     },
// ]


// const user = [
//     {
//         name:'Hari',
//         pass:123
//     }
// ]

// // json
// const container = document.querySelector('.info-container')
// console.log(events[0].img)





// function Auth(name,pass){

//     if(name === user[0].name  && pass === user[0].pass){
//         events.forEach(function(value){
//             container.innerHTML += `<div class="event-info">
//             <div class='flex-div'>
//             <img src=${value.img} alt="">
//             </div>
//             <div class='info'>
            
//             <h1>${value.title}</h1>
            
//              <p>Tutor- ${value.Tutors}</p>   
            
//             <h3> Timing - ${value.timing}</h3>
//             </div>
//             </div>
            
//             `
//         })
//     }else{
//         alert('Please Enter the valid input');
//     }
  
// }


// // string - string




// const name = prompt('Enter the username');
// const pass = Number(prompt('Enter the Pass')) 

// Number('123')

// // console.log(typeof Number('123'))
// Auth(name,pass)


// this

// in js  - all are lexicall

// based where they are created their scope is defined.
// all in js 

// dynamic - where they are called based their scope is defined.
// this - 


// scope - where we can access the value.

// var , let, const

// global - function or local - block level scope.

// global scope - evry 

// var a=10




// function b(){
//     var a=10
//     // const a = 10; //local scope
//     console.log(a,'inner')
// }

// b()
// console.log(a,'outer')


// if(true){
//     var a=10;
//     // console.log(a,'inner')
// }
// console.log(a,'outer')


// this

// var  a = this; // global window 

// console.log(a)

// this - in a varible - window
// this - inside a function - window;

// this - object  method - object;

// this - eventlisteneser - that element.


var a = this;

function a(){
    return this;
}

console.log(a())


const obj = {
    name:'Hari',
    detail:function(){
        return this.name
    }
}

console.log(obj.detail())

const btn = document.querySelectorAll('.btn');

btn.forEach(function(btn){

    btn.addEventListener('click',function(){
        console.log(btn)
        this.innerHTML= 'Changed'
    })

})

