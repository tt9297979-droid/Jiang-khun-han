function calcCC(){

let bore=parseFloat(document.getElementById("bore").value)

let stroke=parseFloat(document.getElementById("stroke").value)

let cc=(Math.PI/4)*bore*bore*stroke/1000

document.getElementById("result").innerText=

cc.toFixed(2)+" CC"

}
