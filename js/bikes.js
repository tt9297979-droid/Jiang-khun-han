fetch("data/bikes.json")

.then(res=>res.json())

.then(data=>{

let table=document.getElementById("bikeTable")

data.forEach(b=>{

table.innerHTML+=`

<tr>

<td>${b.model}</td>
<td>${b.year}</td>
<td>${b.engine}</td>
<td>${b.bore}</td>
<td>${b.stroke}</td>
<td>${b.power}</td>

</tr>

`

})

})
