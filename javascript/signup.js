const form= document.querySelector(".signup form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");
// Désactivation de l'envoi par défaut
form.onsubmit=(e)=>{
    e.preventDefault();
}

continueBtn.onclick=()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST","php/signup.php",true);
    // Réponse à l'arrivée de la requête
    xhr.onload=()=>{
        if(xhr.readyState===XMLHttpRequest.DONE){
            if(xhr.status===200){
                let data = xhr.response;
                if(data == "success"){
                  location.href="Inchatlist.php";
                }else{  
                  errorText.textContent=data;
                  errorText.style.display="block";
                  
                }
            }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}