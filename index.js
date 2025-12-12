const btnImg = document.getElementById("btn__img")
const close = document.getElementById("close")
const chatBotSection = document.querySelector(".Chatbot__home")
const btn = document.getElementById("btn")


// DIA Y MES
const fecha = document.getElementById("fecha__actual")

const fechaActual = new Date()
const dia = fechaActual.getDate()
const anno = fechaActual.getFullYear()
const nombreMes = fechaActual.toLocaleDateString('es-ES',{ month: "short" })
const devwoman = "Yanina.Mercado.Bot"
fecha.textContent = `${dia} ${nombreMes} ${anno} ${devwoman}`

// SCROLL AUTOMATICO
const pantalla = document.querySelector(".screen2")
function scrollToBottom() {
    pantalla.scrollTop = pantalla.scrollHeight;
}



btnImg.addEventListener("click", () => {
    chatBotSection.classList.remove("hidden")
})

close.addEventListener("click", () => {
    chatBotSection.classList.add("hidden")
})


// MESAJES DEL BOT
function templateBot(nombrePlatillos) {
    let p = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")

    p.classList.add("bot")
    p2.classList.add("bot")
    p3.classList.add("bot")

    let template1 = [
        "Aquí tienes los canales digitales",
        "para campañas contextuales",
        "Por favor elige un número:"
    ]

    p.textContent = template1[0]
    p2.textContent = template1[1]


    const screen = document.querySelector(".screen2")
    screen.appendChild(p)
    screen.appendChild(p2)

    console.log(p)


    ///////////platillos//////////
    let indice = 0;

    // BUCLE RECORRE LA LISTA PLATILLOS
    nombrePlatillos.forEach(element => {
        let p = document.createElement("p")
        p.classList.add("bot")
        indice++
        p.textContent = `${indice}.- ${element}`;
        screen.appendChild(p)
    });

    p3.textContent = template1[2]
    screen.appendChild(p3)

}

