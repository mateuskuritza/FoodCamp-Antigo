
function prato_selecionado(element) {
    const selecionados = document.getElementsByClassName("prato-selecionado");

    if( selecionados.length > 0 ){
        selecionados[0].classList.remove("prato-selecionado");
    }

    element.classList.add("prato-selecionado");

    const valorpedido = element.getElementsByClassName("valor-pedido");
    valor_prato = Number(valorpedido[0].innerHTML.replace("R$ ", ''));
    testarselecao();
}

function bebida_selecionada(element) {
    const selecionados = document.getElementsByClassName("bebida-selecionada");

    if( selecionados.length > 0 ){
        selecionados[0].classList.remove("bebida-selecionada");
    }
    
    element.classList.add("bebida-selecionada");

    const valorpedido = element.getElementsByClassName("valor-pedido");
    valor_bebida = Number(valorpedido[0].innerHTML.replace("R$ ", ''));
    testarselecao();
}

function sobremesa_selecionada(element) {
    const selecionados = document.getElementsByClassName("sobremesa-selecionada");

    if( selecionados.length > 0 ){
        selecionados[0].classList.remove("sobremesa-selecionada");
    }
    
    element.classList.add("sobremesa-selecionada");

    const valorpedido = element.getElementsByClassName("valor-pedido");
    valor_sobremesa = Number(valorpedido[0].innerHTML.replace("R$ ", ''));
    testarselecao();
}

function calcular_total(){

    total = valor_prato + valor_bebida + valor_sobremesa;
    console.log(total);
    
}


function testarselecao(){

    if(valor_prato*valor_bebida*valor_sobremesa!=0){
        const botaohabilitado = document.getElementById("botao-habilitado");
        const botaodesabilitado = document.getElementById("botao-desabilitado");
        botaohabilitado.style.display = "inherit";
        botaodesabilitado.style.display = "none";
    }
}


