let queue=

JSON.parse(localStorage.getItem("queue"))||[]

function book(){

let name=document.getElementById("name").value

let date=document.getElementById("date").value

queue.push({name,date})

localStorage.setItem(

"queue",

JSON.stringify(queue)

)

render()

}

function render(){

let list=document.getElementById("queue")

list.innerHTML=""

queue.forEach(q=>{

list.innerHTML+=`<li>${q.name} - ${q.date}</li>`

})

}

render()
