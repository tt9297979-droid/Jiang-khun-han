let parts=

JSON.parse(localStorage.getItem("parts"))||[]

function addPart(){

let part=document.getElementById("part").value

parts.push(part)

localStorage.setItem(

"parts",

JSON.stringify(parts)

)

render()

}

function render(){

let list=document.getElementById("parts")

list.innerHTML=""

parts.forEach(p=>{

list.innerHTML+=`<li>${p}</li>`

})

}

render()
