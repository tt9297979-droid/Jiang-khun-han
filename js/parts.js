fetch("data/parts.json")

.then(res=>res.json())

.then(data=>{

let table=document.getElementById("partsTable")

data.forEach(p=>{

table.innerHTML+=`

<tr>

<td>${p.name}</td>
<td>${p.part_number}</td>
<td>${p.price} บาท</td>
<td>${p.stock}</td>

</tr>

`

})

})
