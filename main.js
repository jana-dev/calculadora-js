var valorAtual = ''
var valorAnterior  = ''
var operacaoAtual = ''

//Função anonima
document.addEventListener('keydown', (event)=>{
    if (event.key.match(/[0-9]/)) {
        numero(event.key);
    }else if(event.key.match(/[%\/\*\-\+]/)){
        operacao(event.key);
    }
    if(event.key === "Enter"){
        calcular()
    }
})

function numero(num){
    valorAtual += num
    atualizarVisor();
}

function operacao(simbolo){
    operacaoAtual = simbolo;
    valorAnterior = valorAtual;
    valorAtual = '';
    atualizarVisor();
}


function limpar(){
    document.getElementById('textarea').value = 0
    valorAtual = ''
    operacaoAtual = ''
    valorAnterior = ''
}


function calcular(){
    console.log(valorAnterior + operacaoAtual + valorAtual);
    console.log(parseFloat(valorAnterior) + operacaoAtual + parseFloat(valorAtual))
    let resultado;
    switch(operacaoAtual){
        case '+':
            resultado = parseFloat(valorAnterior) + parseFloat(valorAtual);
            break;
        case '-':
            resultado = parseFloat(valorAnterior) - parseFloat(valorAtual);
            break;
        case '*':
            resultado = parseFloat(valorAnterior) * parseFloat(valorAtual);
            break;
        case '/':
            resultado = parseFloat(valorAnterior) / parseFloat(valorAtual);
        break;
    }
    valorAtual = resultado.toString()
    operacaoAtual = '';
    valorAnterior = '';
    atualizarVisor();
}


function atualizarVisor(){
    let visorTexto = '';
    if(valorAnterior !== ''){
        visorTexto += valorAnterior;
        if(operacaoAtual !== ''){
            visorTexto += operacaoAtual;
        }
    }
    visorTexto += valorAtual;
    document.getElementById("textarea").value = visorTexto
}