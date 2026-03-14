let customers=

JSON.parse(localStorage.getItem("customers"))||[]

function addCustomer(){

let name=document.getElementById("name").value
let bike=document.getElementById("bike").value

customers.push({name,bike})

localStorage.setItem(

"customers",

JSON.stringify(customers)

)

render()

}

function render(){

let list=document.getElementById("list")

list.innerHTML=""

customers.forEach(c=>{

list.innerHTML+=`<li>${c.name} - ${c.bike}</li>`

})

}

render()
