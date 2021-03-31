
function prato_selecionado(element) {
    const selecionados = document.querySelector(".prato-selecionado");
    
    if( selecionados !== null ){
        selecionados.classList.remove("prato-selecionado");
    }

    element.classList.add("prato-selecionado");

    const valorpedido = element.querySelector(".valor-pedido");
    valor_prato = Number(valorpedido.innerHTML.replace("R$ ", ''));

    pratopedido = element.querySelector(".nome-pedido");
    pratopedido = pratopedido.innerHTML;

    testarselecao();
}

function bebida_selecionada(element) {
    const selecionados = document.querySelector(".bebida-selecionada");

    if( selecionados !== null ){
        selecionados.classList.remove("bebida-selecionada");
    }
    
    element.classList.add("bebida-selecionada");

    const valorpedido = element.querySelector(".valor-pedido");
    valor_bebida = Number(valorpedido.innerHTML.replace("R$ ", ''));

    bebidapedido = element.querySelector(".nome-pedido");
    bebidapedido = bebidapedido.innerHTML;

    testarselecao();
}

function sobremesa_selecionada(element) {
    const selecionados = document.querySelector(".sobremesa-selecionada");

    if( selecionados !== null ){
        selecionados.classList.remove("sobremesa-selecionada");
    }
    
    element.classList.add("sobremesa-selecionada");

    const valorpedido = element.querySelector(".valor-pedido");
    valor_sobremesa = Number(valorpedido.innerHTML.replace("R$ ", ''));

    sobremesapedido = element.querySelector(".nome-pedido");
    sobremesapedido = sobremesapedido.innerHTML;

    testarselecao();
}

function calcular_total(){
    total = (valor_prato + valor_bebida + valor_sobremesa).toFixed(2);    
}

function testarselecao(){
    if(valor_prato*valor_bebida*valor_sobremesa!=0){
        const botaohabilitado = document.querySelector("#botao-habilitado");
        const botaodesabilitado = document.querySelector("#botao-desabilitado");
        botaohabilitado.style.display = "inherit";
        botaodesabilitado.style.display = "none";
        calcular_total();
    }
}

function mensagemwhats(){
    const linkwhats = "https://api.whatsapp.com/send?phone=5542998043116&text="+encodeURIComponent("Olá, gostaria de fazer o pedido: - Prato: " + pratopedido + " - Bebida: " + bebidapedido + " - Sobremesa: " + sobremesapedido + " Total: R$ " + total);
    window.open(linkwhats);
}
