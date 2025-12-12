const continerChat = document.querySelector('.chat')

let div = document.createElement('div')
div.classList.add('chat__container__client')

let p2 = document.createElement('p')
let p3 = document.createElement('p')
let p1 = document.createElement('p')

const chatOwnerc = () => {
    p1.setAttribute("id", "p1chat");
    p1.classList.add('chat__owner');

    let span1 = document.createElement('span');
    span1.innerText = 'Janet';
    span1.classList.add('name');

    let span2 = document.createElement('span');
    span2.innerText = 'S/10,000';
    span2.classList.add('price');

    p1.appendChild(span1);
    p1.appendChild(document.createTextNode(", no se procesó la compra con tu tarjeta American Express Blue ya que excede tu línea. Increméntala a "));
    p1.appendChild(span2);
    p1.appendChild(document.createTextNode(" respondiendo \"SI\" a este mensaje."));
    
    continerChat.appendChild(p1);
}

const chatClient = () => {
    p2.setAttribute("id", "p2chat")
    continerChat.appendChild(div)
    p2.classList.add('chat__client')
    div.appendChild(p2).innerText = 'si'
}

const respuetaOwner = () => {
    const p3 = document.createElement('p');
    p3.setAttribute('id', 'p3chat');
    p3.classList.add('chat__owner');
    
    const nombreDestacado = document.createElement('span');
    nombreDestacado.classList.add('name');
    nombreDestacado.innerText = 'Janet';
    
    const precioDestacado = document.createElement('span');
    precioDestacado.classList.add('price');
    precioDestacado.innerText = 'S/10,000';
    
    p3.innerHTML = `¡Felicidades, ${nombreDestacado.outerHTML}! 
      Ahora tu línea es de ${precioDestacado.outerHTML}, ya puedes continuar con tu compra`;
    continerChat.appendChild(p3);
}


const chatOwnerShow = () => {
    let x = document.getElementById("p1chat");
    x.style.display = "block";
    return x;
}

const chatOwnerHidden = () => {
    let x = document.getElementById("p1chat");
    x.style.display = "none";
    return x;
}

const chatClientShow = () => {
    let x = document.getElementById("p2chat");
    x.style.display = "block";
    return x;
}

const chatClientHidden = () => {
    let x = document.getElementById("p2chat");
    x.style.display = "none";
    return x;
}

const respuetaOwnerShow = () => {
    let x = document.getElementById("p3chat");
    x.style.display = "block";
    return x;
}

const respuetaOwnerHidden = () => {
    let x = document.getElementById("p3chat");
    x.style.display = "none";
    return x;
}




// setTimeout

// setTimeout(chatClient, 2000)
/////////////////////////////////////////////////////////////////////////////

// setTimeout(respuetaOwner, 2500)

/////////////////////////////////////////////////////////////////////////
 

let num = 10;
let x = 0;
let i = 0;

const listp = ["p1chat","p2chat","p3chat"]
console.log(listp[1]);


//chatClientHidden
chatOwnerc();
chatClient();
respuetaOwner();
//respuetaOwner();
setTimeout(chatOwnerHidden,1800);
setTimeout(chatClientHidden,1800);
setTimeout(respuetaOwnerHidden,1800);
/*--*/
setTimeout(chatOwnerShow,2000);
setTimeout(chatClientShow,3500);
setTimeout(respuetaOwnerShow,5000);
/*-ocultar-*/
setTimeout(chatOwnerHidden,6500);
setTimeout(chatClientHidden,6500);
setTimeout(respuetaOwnerHidden,6500);
/*--*/
setTimeout(chatOwnerShow,6700);
setTimeout(chatClientShow,8200);
setTimeout(respuetaOwnerShow,9700);
/*-ocultar-*/
setTimeout(chatOwnerHidden,12000);
setTimeout(chatClientHidden,12000);
setTimeout(respuetaOwnerHidden,12000);
/*--*/
setTimeout(chatOwnerShow,12200);
setTimeout(chatClientShow,13700);
setTimeout(respuetaOwnerShow,15200);
/*-ocultar-*/
setTimeout(chatOwnerHidden,17000);
setTimeout(chatClientHidden,17000);
setTimeout(respuetaOwnerHidden,17000);
/*--*/
setTimeout(chatOwnerShow,17200);
setTimeout(chatClientShow,18700);
setTimeout(respuetaOwnerShow,20200);
/*-ocultar-*/
setTimeout(chatOwnerHidden,22000);
setTimeout(chatClientHidden,22000);
setTimeout(respuetaOwnerHidden,22000);
/*--*/
setTimeout(chatOwnerShow,22200);
setTimeout(chatClientShow,23700);
setTimeout(respuetaOwnerShow,25200);
/*__*/
setTimeout(chatOwnerHidden,25400);
setTimeout(chatClientHidden,25400);
setTimeout(respuetaOwnerHidden,25400);
/*__*/
setTimeout(chatOwnerShow,25600);
setTimeout(chatClientShow,27100);
setTimeout(respuetaOwnerShow,28600);
/*__*/
setTimeout(chatOwnerHidden,28800);
setTimeout(chatClientHidden,28800);
setTimeout(respuetaOwnerHidden,28800);
/*__*/
setTimeout(chatOwnerShow,29000);
setTimeout(chatClientShow,30500);
setTimeout(respuetaOwnerShow,32000);
/*__*/
setTimeout(chatOwnerHidden,32200);
setTimeout(chatClientHidden,32200);
setTimeout(respuetaOwnerHidden,32200);
/*__*/
setTimeout(chatOwnerShow,32400);
setTimeout(chatClientShow,33900);
setTimeout(respuetaOwnerShow,35400);
//myFunction()

/*
//$('.list-datos').hide();
while (i < 120000) {

    

}*/
