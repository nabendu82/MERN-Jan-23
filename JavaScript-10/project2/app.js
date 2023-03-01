// console.log('hell')


const name = document.querySelector('#name')

const phoneNum =document.querySelector('#PhoneNumber')


const btn = document.querySelector('#btn');

function getdataVal(){
  const nameVal = name.value
  const getData = localStorage.getItem(nameVal);
console.log(nameVal)
  const table = document.querySelector('tbody');
  console.log(table)

  table.innerHTML +=
  `
      <tr>
       <td>${nameVal}</td>
      <td>${getData}</td>
    </tr>
  
  `
 
}

btn.addEventListener('click',function(){
    // console.log(name,phoneNum)
    const nameVal = name.value
    const phoneVal = phoneNum.value

    localStorage.setItem(nameVal,phoneVal)
   getdataVal()
})


getdataVal()
    null

