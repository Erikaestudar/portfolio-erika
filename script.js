window.addEventListener("DOMContentLoaded", () => {
    let rolling = document.querySelector(".rolling")
    let clone = rolling.innerHTML
    rolling.innerHTML += clone // duplica o conteúdo inteiro
    let items = Array.from(rolling.querySelectorAll(".item"))

    // Criar um fragmento com todos os itens
    let itemsGroup = document.createDocumentFragment()
    items.forEach(item => {
        let clone = item.cloneNode(true)
        itemsGroup.appendChild(clone)
    })

    // Descobre qual é a largura da tela do navegador
    let widthScreen = window.innerWidth
    let widthGroup = rolling.scrollWidth

    // Calcula quantas imagens precisam pra preencher toda a tela
    let repeatCount = Math.ceil(widthScreen / widthGroup) + 2

    // Repetir o grupo completo várias vezes
    for (let i = 0; i < repeatCount; i++) {
        rolling.appendChild(itemsGroup.cloneNode(true))
    }
})



let form = document.querySelector("form")
let nameInput = document.querySelector("#name")
let messageInput = document.querySelector("#message")


form.addEventListener("submit", submitWhats)

function submitWhats(event) {
    event.preventDefault()

    let nameContact = nameInput.value.trim()
    let message = messageInput.value.trim()

    if (!nameContact || !message) {
        alert("Preencha seu nome e mensagem antes de enviar!")
        nameContact.focus()
        return
    }
    
    let phone = "5518996402021"

    let text = `Olá! Me chamo ${nameContact}, ${message}`
    let msgFormat = encodeURIComponent(text)

    let url = `https://wa.me/${phone}?text=${msgFormat}`

    window.open(url,'_blank')

    nameInput.value = ""
    messageInput.value = ""

    nameInput.focus()
}

