import Modal  from './modal.js'

const modal = Modal()


//botoes com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

//quando o marcar como lido for clicado
checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", event => {
        modal.open()
    })
})


