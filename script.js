const ativo = "pressionada"

// função
function handleKeyBoardActive(target){
  let tecla = document.querySelector(`[data-tecla="${target}"]`);
  tecla.classList.toggle(ativo)
}

// evento
document.addEventListener("keydown", (e)=>{
  e.preventDefault()
  let key = e.code.toLocaleUpperCase();
  console.log(e)
  handleKeyBoardActive(key)
})
