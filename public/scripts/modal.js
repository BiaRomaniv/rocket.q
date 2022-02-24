export default function Modal() {
    function open(){
        document.querySelector('.modal-wrapper').classList.add()

    } // funcionalidade de atribuir a classe active do modal
    function close(){}// funcionalidade de excluir a classe active do modal

    return{
        open,
        close
    }
}