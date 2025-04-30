var idade = parseInt(prompt("digite a sua idade"));

if(idade <= 18){
    console.log("criança")
}else if(( idade >= 18) && (idade <= 65)){
    console.log("jovem ou adulto")
}else{
    console.log("idoso")
}

