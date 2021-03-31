
function prato_selecionado(element) {
    const selecionados = document.querySelector(".prato-selecionado");
    
    if( selecionados !== null ){
        selecionados.classList.remove("prato-selecionado");
    }

    element.classList.add("prato-selecionado");

    const valorPedido = element.querySelector(".valor-pedido");
    valor_prato = Number(valorPedido.innerHTML.replace("R$ ", ''));

    pratoPedido = element.querySelector(".nome-pedido");
    pratoPedido = pratoPedido.innerHTML;

    testarselecao();
}

function bebida_selecionada(element) {
    const selecionados = document.querySelector(".bebida-selecionada");

    if( selecionados !== null ){
        selecionados.classList.remove("bebida-selecionada");
    }
    
    element.classList.add("bebida-selecionada");

    const valorPedido = element.querySelector(".valor-pedido");
    valor_bebida = Number(valorPedido.innerHTML.replace("R$ ", ''));

    bebidaPedido = element.querySelector(".nome-pedido");
    bebidaPedido = bebidaPedido.innerHTML;

    testarselecao();
}

function sobremesa_selecionada(element) {
    const selecionados = document.querySelector(".sobremesa-selecionada");

    if( selecionados !== null ){
        selecionados.classList.remove("sobremesa-selecionada");
    }
    
    element.classList.add("sobremesa-selecionada");

    const valorPedido = element.querySelector(".valor-pedido");
    valor_sobremesa = Number(valorPedido.innerHTML.replace("R$ ", ''));

    sobremesaPedido = element.querySelector(".nome-pedido");
    sobremesaPedido = sobremesaPedido.innerHTML;

    testarselecao();
}

function calcular_total(){
    total = (valor_prato + valor_bebida + valor_sobremesa).toFixed(2);    
}

function testarselecao(){
    if(valor_prato*valor_bebida*valor_sobremesa!=0){
        const botaoHabilitado = document.querySelector("#botao-habilitado");
        const botaoDesabilitado = document.querySelector("#botao-desabilitado");
        botaoHabilitado.style.display = "inherit";
        botaoDesabilitado.style.display = "none";
        calcular_total();
    }
}

function mensagemwhats(){
    const nomeCliente = prompt("Qual seu nome?");
    const enderecoCliente = prompt("Qual seu endereço?")
    const linkWhats = "https://api.whatsapp.com/send?phone=5542998043116&text="+encodeURIComponent("Olá, gostaria de fazer o pedido: - Prato: " + pratoPedido + " - Bebida: " + bebidaPedido + " - Sobremesa: " + sobremesaPedido + " Total: R$ " + total + " Nome: " + nomeCliente + " Endereço: " + enderecoCliente);
    window.open(linkWhats);
}

function confirmarPedido(){

    const caixa = document.querySelectorAll(".confirmar");
    caixa[0].classList.toggle("none");
    caixa[1].classList.toggle("none");
}
