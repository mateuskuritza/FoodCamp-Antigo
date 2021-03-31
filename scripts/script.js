


function prato_selecionado(element) {
    const selecionados = document.getElementsByClassName("prato-selecionado");

    if( selecionados.length > 0 ){
        selecionados[0].classList.remove("prato-selecionado");
    }
    
    element.classList.add("prato-selecionado");
}

function bebida_selecionada(element) {
    const selecionados = document.getElementsByClassName("bebida-selecionada");

    if( selecionados.length > 0 ){
        selecionados[0].classList.remove("bebida-selecionada");
    }
    
    element.classList.add("bebida-selecionada");
}

function sobremesa_selecionada(element) {
    const selecionados = document.getElementsByClassName("sobremesa-selecionada");

    if( selecionados.length > 0 ){
        selecionados[0].classList.remove("sobremesa-selecionada");
    }
    
    element.classList.add("sobremesa-selecionada");
}