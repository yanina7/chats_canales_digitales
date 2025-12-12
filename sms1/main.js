const continerChat = document.querySelector('.chat')

let div = document.createElement('div')
div.classList.add('chat__container__client')

let p1 = document.createElement('p')

const chatOwnerc = () => {
    p1.setAttribute("id", "p1chat")
    p1.classList.add('chat__owner')
    
    let span1 = document.createElement('span');
    span1.innerText = 'Thaly';
    span1.classList.add('name');
	span1.classList.add('info--mod')
	

    let a1 = document.createElement('a');
  	let textTolink = document.createTextNode("https://api.whatsapp.com/send?phone=51993119000&text=Hola%20AVI,%20quiero%20saber%20mi%20fecha%20y%20monto%20de%20pago%E2%80%8B");
    a1.appendChild(textTolink);
    a1.title = "https://api.whatsapp.com/send?phone=51993119000&text=Hola%20AVI,%20quiero%20saber%20mi%20fecha%20y%20monto%20de%20pago%E2%80%8B";
    a1.href = "https://api.whatsapp.com/send?phone=51993119000&text=Hola%20AVI,%20quiero%20saber%20mi%20fecha%20y%20monto%20de%20pago%E2%80%8B";
    a1.classList.add("link_web");

    p1.appendChild(span1);
    p1.appendChild(document.createTextNode(", no pierdas mas tiempo llamando, realiza tu consulta de Fecha de Pago de TC  de manera  rápida y segura desde nuestro WhatsApp AVI: "));
    p1.appendChild(a1);
	
    continerChat.appendChild(p1);
         

}


//<a class="link_web" href="#">www.interbank.pe</a>

//chatClientHidden
chatOwnerc();


