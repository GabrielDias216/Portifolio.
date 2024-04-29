const text = "Olá,  sou Gabriel dias! desevolvedor full-stack. "; // Seu texto de apresentação
let index = 0;
let typing;

function type() {
  const typedText = document.getElementById("typed-text");
  if (typedText) {
    typedText.innerText += text[index];
    index++;
    if (index >= text.length) {
      clearInterval(typing);
    }
  }
}
window.onload = function () {
  typing = setInterval(type, 100);
};



const observador = new IntersectionObserver((observar) => {
  observar.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('show')
    } else {
      entrada.target.classList.remove('show')
    }
  })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => observador.observe(element))




const observador2 = new IntersectionObserver((observar2) => {
  observar2.forEach((entrada2) => {
    if (entrada2.isIntersecting) {
      entrada2.target.classList.add('show2')
    } else {
      entrada2.target.classList.remove('show2')
    }
  })
})

const elements2 = document.querySelectorAll('.hidden2')

elements2.forEach((element) => observador2.observe(element))








