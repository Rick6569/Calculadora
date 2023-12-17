function adicionarCaracter(num) {
  const display = document.querySelector(".display").value
  document.querySelector(".display").value = display + num
}

function limparTela() {
  document.querySelector(".display").value = ""
}

function calcular() {
  const display = document.querySelector(".display").value
  document.querySelector(".display").value = eval(display)
}

function inverterNumero() {
  const display = document.querySelector(".display").value
  document.querySelector(".display").value = display * -1
}