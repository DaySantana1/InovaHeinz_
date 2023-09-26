const slider = document.querySelector(".slider");
const value = document.querySelector(".value");

value.textContent = slider.value;
slider.oninput =function(){
    value.textContent = this.value;
}

