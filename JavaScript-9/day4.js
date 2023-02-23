// console.log('Dom - Guide')

// Dom - proper - methpds

//js - mul - html - css


//select - grap
//event - eventhandlers - evnet
//grab
//dom


//grab - 5 methods - 

//id - getElementById('')
const btn = document.getElementById('btn')


btn.addEventListener('click',function(){
   const head = document.getElementById('head')
   const img = document.getElementById('img1')

   const text = document.getElementById('text')

   const body = document.body;

  

   img.src ='https://images.unsplash.com/photo-1675383281254-b0624461787d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60'
    


   img.classList.toggle('active')
  body.classList.toggle('theme')


const username = text.value;

if(username != ''){
    head.innerHTML = username
}
   console.log(img)
})
