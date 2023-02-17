

// fr - b
// fron -  sver - database


//TWD - events upcoing or past - 




//backend

// form - 

// database - datsabace APi

// i am mannal database - display in a neet Ui


// list of inform - grpuped
const events = [
    {
        title:'TWD JS Workshops',
        img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMHdvcmtzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',

        timing:'9Am',
        Tutors: ['Hari','Nabendu']

    },
    {
        title:'TWD React Workshops',
        img:'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',

        timing:'4Am',
        Tutors: ['Hari','Nabendu']
    },
    {
        title:'TWD HTML Workshops',
        img:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMHdvcmtzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',

        timing:'7Am',
        Tutors: ['Hari','Nabendu']
    },
    {
        title:'TWD Css Workshops',
        img:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',

        timing:'9Am',
        Tutors: ['Hari','Nabendu']
    },
    {
        title:'TWD Angular Workshops',
        img:'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',

        timing:'9Am',
        Tutors: ['Hari','Nabendu']
    },
]


const user = [
    {
        name:'Hari',
        pass:123
    }
]

// json
const container = document.querySelector('.info-container')
console.log(events[0].img)


events.forEach(function(value){
    container.innerHTML += `<div class="event-info">
    <div class='flex-div'>
    <img src=${value.img} alt="">
    </div>
    <div class='info'>
    
    <h1>${value.title}</h1>
    
     <p>Tutor- ${value.Tutors}</p>   
    
    <h3> Timing - ${value.timing}</h3>
    </div>
    </div>
    
    `
})



