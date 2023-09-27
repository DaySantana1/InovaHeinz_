document.addEventListener("DOMContentLoaded", function () {
    const ranges = document.querySelectorAll(".range");
  
    ranges.forEach(function (range) {
      const slider = range.querySelector(".slider");
      const value = range.querySelector(".value");
  
      function updateSliderValue() {
        value.textContent = slider.value;
      }
  
      slider.addEventListener("input", updateSliderValue);
      updateSliderValue(); // Atualize o valor inicial
    });
  });
  

  function irParaCliente() {
    // Redireciona para a página do cliente
    window.location.href = 'cliente.html';
}