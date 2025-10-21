let hamburger = document.querySelector('.navHamburger');
    hamburger.addEventListener("click", function(){
        document.body.classList.toggle('open');
    });

let telefono = document.querySelector('.telefono');
  telefono.addEventListener("click", function(){
    document.body.classList.toggle('openTelefono');
    document.body.classList.remove('openWhatsapp');
    document.body.classList.remove('openEmail');
 });

 let whatsapp = document.querySelector('.whatsapp');
  whatsapp.addEventListener("click", function(){
    document.body.classList.toggle('openWhatsapp');
    document.body.classList.remove('openTelefono');
    document.body.classList.remove('openEmail');
 });

 let email = document.querySelector('.email');
  email.addEventListener("click", function(){
    document.body.classList.toggle('openEmail');
    document.body.classList.remove('openTelefono');
    document.body.classList.remove('openWhatsapp');
 });

function sendMail(){
    event.preventDefault();
    let parms = {
      nome : document.getElementById("nome").value, 
      cognome : document.getElementById("cognome").value,
      descrizione : document.getElementById("descrizione").value,
      email : document.getElementById("email").value,
    }
    if (document.getElementById("nome").value != "" && document.getElementById("email").value !=""){
      emailjs.send("service_oaq0vl4","template_4wqhx6t", parms).then(alert("Grazie per averci contattato.")) 
      document.getElementById("myForm").reset();}
        else{
            alert("Inserire i campi obbligatori") }
}

/*onclick="sendMail()"*/