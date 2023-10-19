const form= document.querySelector(".login form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");

form.onsubmit=(e)=>{ // Écouteur d'événements lors de la soumission du formulaire
    e.preventDefault(); // Empêche le formulaire de se soumettre
    }
    
continueBtn.onclick=()=>{ 
    let xhr = new XMLHttpRequest(); // Crée une nouvelle requête AJAX
    xhr.open("POST","php/login.php",true); // 
    xhr.onload=()=>{ // Écouteur d'événements pour la réponse du serveur
    if(xhr.readyState===XMLHttpRequest.DONE){ // Vérifie l'état de la réponse
        if(xhr.status===200){ 
            let data = xhr.response; 
            console.log(data);
            if(data == "success"){ 
            location.href="Inchatlist.php"; // Redirige l'utilisateur vers la page de la liste des utilisateurs
        }else{
            errorText.textContent=data; // Affiche le message d'erreur dans le texte d'erreur
            errorText.style.display="block"; // Affiche le texte d'erreur
    }
    }
    }
    }
    let formData = new FormData(form); 
    xhr.send(formData); // Envoie la requête AJAX 
    }