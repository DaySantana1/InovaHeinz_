function abrirModal(carregarModal) {
    console.log("carregar a janela modal: " + carregarModal);
    var modal = document.getElementById(carregarModal); // Use carregarModal diretamente

    if (modal) {
        modal.style.display = 'block';
    }
}


function fecharModal(fecharModal){
    console.log("fechar janela modal: " + fecharModal);
}