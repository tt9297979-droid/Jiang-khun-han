function runDyno(){

let rpm=[]
let hp=[]

for(let i=2000;i<=12000;i+=500){

rpm.push(i)

let torque=10+Math.sin(i/1500)*4

let horsepower=(torque*i)/7127

hp.push(horsepower)

}

new Chart(document.getElementById("dyno"),{

type:"line",

data:{

labels:rpm,

datasets:[{

label:"Horsepower",

data:hp

}]

}

})

}
