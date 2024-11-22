// Criando uma função para alterar a cor

function aplicarCor(){
    const cor = document.getElementById("selecaoCor").value;

    document.body.style.backgroundColor = cor;
}

//Função para gerar uma cor aleatoria
function corAlteatoria(){

    document.getElementById("r").innerHTML = "R:"
    document.getElementById("g").innerHTML = "G:"
    document.getElementById("b").innerHTML = "B:"

    //Função Math.random gera um número aleatorio 0 a 0.999
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    document.getElementById("r").innerHTML += r;
    document.getElementById("g").innerHTML += g;
    document.getElementById("b").innerHTML += b;

    const cor = `rgb(${r}, ${g}, ${b})`

    document.body.style.backgroundColor = cor;

}