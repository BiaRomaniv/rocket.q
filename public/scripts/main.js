import  Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalQuestion = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')
const modalButtonColor =document.querySelector('.buttons .color')

//seleciona todos os botoes com a class check e delete
const checkButtons = document.querySelectorAll("a.check")
const deleteButtons = document.querySelectorAll("a.delete")

//quando o marcar como lido for clicado abrir modal
checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
    })
//quando o excluir for clicado abrir modal
deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => handleClick (event, false))
    })


//função para lidar com o click nos botoes, colocando um check em true inicialmente
function handleClick(event, check = true) {
    event.preventDefault() // quando clicar nos links, que não devem se comportar como links (ou seja, nao tentar abrir uma pagina)
 



    modalTitle.innerHTML = check ? "Marcar esta pergunta como lida" : "Excluir esta pergunta" //se check é true, troca o innerHtml pra marcar como lida, se não, Excluir
    modalQuestion.innerHTML = check ? "Deseja marcar esta pergunta como lida?" : "Tem certeza que deseja excluir esta pergunta?"
    modalButton.innerHTML = check ? "Sim, marcar como lida" : "Sim, excluir"
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}

