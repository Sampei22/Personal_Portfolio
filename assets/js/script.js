function sendMail(){
    let parms = {
      nome : document.getElementById("nome").value, 
      cognome : document.getElementById("cognome").value,
      descrizione : document.getElementById("descrizione").value,
      email : document.getElementById("email").value 
    }
    if (document.getElementById("nome").value != "" && document.getElementById("email").value !=""){
      emailjs.send("service_oaq0vl4","template_4wqhx6t", parms).then(alert("Grazie per averci contattato.")) }
        else{
            alert("Inserire i campi obbligatori") }
}


