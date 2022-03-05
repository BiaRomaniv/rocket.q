export default function Modal() {

    const cancelButtons = document.querySelectorAll('.button.cancel')// funcionalidade para fechar modal quando clicar em cancelar
        cancelButtons.forEach(button =>{
            button.addEventListener("click", event => {
                close()
            })
        })

    function open(){
        document.querySelector(".modal-wrapper").classList.add("active")// funcionalidade de atribuir a classe active do modal

    } 
    function close(){
        document.querySelector(".modal-wrapper").classList.remove("active")// funcionalidade de excluir a classe active do modal
    }
        
 
    return{
        open,
        close,

    }
}