var vel = parseFloat(prompt("digite a velocidade do carro: "))

if((vel >= 50) && (vel < 60)){
    console.log("aplica multa de 15%")
    calculo=((250 / 100)*15)+250
			console.log("multa é: ", calculo)
}else if((vel >= 60) && (vel <70)){
    console.log("aplica multa de 25%")
    calculo=((250 / 100)*15)+250
			console.log("multa é: ", calculo)
}else if((vel >= 70) && (vel < 80)){
    console.log("aplica multa de 35%")
    calculo=((250 / 100)*15)+250
			console.log("multa é: ", calculo)
}else if(vel >= 80){
    console.log("aplica multa de 50%")
    calculo=((250 / 100)*15)+250
			console.log("multa é: ", calculo)
}else if(vel <= 0){
    console.log("velocidade invalida, multa de 250 reai")
}else{
console.log("não se aplica multa")
}






