// LISTA DE CANALES
const nombrearra = ["html1", "html2", "html3", "html4", "html5","html6","push1","push2","sms1", "sms2"]
const dict_chat = {1:"../index.html",2:"../html2/index.html",3:"../html3/index.html",4:"../html4/index.html",5:"../html5/index.html",6:"../html6/index.html",7:"../push1/index.html",8:"../push2/index.html",9:"../sms1/index.html",10:"../sms2/index.html"}
templateBot(nombrearra)

const chatbot = () => {
    const screen = document.querySelector(".screen2")
    const valorUser = document.getElementById("textvalor").value

    let p = document.createElement("p")
    p.classList.add("user")
    p.textContent = valorUser

    screen.appendChild(p)
    console.log(valorUser)

    ////////7detalles////////
    let pDetalle = document.createElement("p")
    pDetalle.classList.add("bot")

    const pBot = document.createElement("p")
    pBot.classList.add("bot")
    //reduce //
    for(let [key, value] of Object.entries(dict_chat)) {
        console.log("Clave:", key);
        console.log("Valor:", value);
        if(valorUser === key.toString()) {        
            window.location.replace(value);
        } else {
            pDetalle.textContent = "Por favor ingrese un dato correcto!"
            screen.appendChild(pDetalle)
        }
    }


    if(valorUser === "") {
        pDetalle.textContent = "el espacio no debe de estar vacio"
        screen.appendChild(pDetalle)

        p.style.display = "none"
    }

    scrollToBottom();

   document.getElementById("textvalor").value = ""
  };

btn.addEventListener("click", () => {
    chatbot()
   
})

const textvalor = document.getElementById('textvalor');

textvalor.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      console.log('Enter presionado');
      console.log('Valor:', textvalor.value);
      // Tu lógica aquí
      chatbot()
    }
});
  
// Opción 2: keypress (deprecated pero aún funciona)
textvalor.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // Tu código
        chatbot()
    }
});