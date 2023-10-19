const pswrdField=document.querySelector(".form .field input[type='password']");
toggleBtn= document.querySelector(".form .field i");
// Ajout d'un gestionnaire d'événements au clic sur le bouton de toggle
toggleBtn.onclick=()=>{
    if(pswrdField.type=="password"){
        pswrdField.type="text";
        toggleBtn.classList.add("active");
    }else{
        pswrdField.type="password";
        toggleBtn.classList.remove("active");
    }
}