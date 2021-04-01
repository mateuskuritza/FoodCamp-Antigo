function pedidoSelecionado(element){

    const pai = element.parentNode.classList.value;
    const selecionados = document.querySelector("." + pai + " .selecionado");
    
    if( selecionados !== null ){
        selecionados.classList.remove("selecionado");
    }

    element.classList.add("selecionado");

    testarSelecao();
}

function testarSelecao(){

    valores = [];
    pratosPedidos = [];
    const opcoes = [".pratos-principais", ".bebidas", ".sobremesas"];

    for(let i=0; i<opcoes.length;i++){
        valores[i] = document.querySelector(opcoes[i] + " .selecionado .valor-pedido");
        valores[i] = Number(valores[i].innerHTML.replace("R$ ", '')).toFixed(2);
    
        pratosPedidos[i] = document.querySelector(opcoes[i] + " .selecionado .nome-pedido");
        pratosPedidos[i] = pratosPedidos[i].innerHTML;
    }

    if(valores[0]*valores[1]*valores[2] !== 0){
        const botaoHabilitado = document.querySelector("#botao-habilitado");
        const botaoDesabilitado = document.querySelector("#botao-desabilitado");
        botaoHabilitado.style.display = "inherit";
        botaoDesabilitado.style.display = "none";
        calcular_total();
    }
}

function calcular_total(){
    total = (valores[0]*valores[1]*valores[2]).toFixed(2);    
}

function mensagemWhats(){
    const nomeCliente = prompt("Qual seu nome?");
    const enderecoCliente = prompt("Qual seu endereço?")
    const linkWhats = "https://api.whatsapp.com/send?phone=5542998043116&text="+encodeURIComponent("Olá, gostaria de fazer o pedido:\n-Prato: " + pratosPedidos[0] + "\n-Bebida: " + pratosPedidos[1] + "\n-Sobremesa: " + pratosPedidos[2] + "\n*Total:* R$" + total + "\n*Nome:* " + nomeCliente + "\n*Endereço:* " + enderecoCliente);
    window.open(linkWhats);
}

function confirmarPedido(){

    const caixa = document.querySelectorAll(".confirmar");
    caixa[0].classList.toggle("none");
    caixa[1].classList.toggle("none");
}

function inserirValores(){

    document.querySelector(".confirmar-prato").innerHTML = pratosPedidos[0];
    document.querySelector(".confirmar-prato-valor").innerHTML ="R$ " + valores[0];

    document.querySelector(".confirmar-bebida").innerHTML = pratosPedidos[1];
    document.querySelector(".confirmar-bebida-valor").innerHTML ="R$ " + valores[1];

    document.querySelector(".confirmar-sobremesa").innerHTML = pratosPedidos[2];
    document.querySelector(".confirmar-sobremesa-valor").innerHTML ="R$ " + valores[2];

    document.querySelector(".confirmar-total").innerHTML = "R$ " + total;
}