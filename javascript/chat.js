const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox =document.querySelector(".chat-box");

form.onsubmit=(e)=>{
    e.preventDefault();
}

sendBtn.onclick=()=>{
    let xhr = new XMLHttpRequest();
    xhr.open("POST","php/insert-chat.php",true);
    xhr.onload=()=>{
        if(xhr.readyState===XMLHttpRequest.DONE){
            if(xhr.status===200){
                inputField.value= " " ;
                
              }
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}
chatBox.onmouseenter=()=>{
  chatBox.classList.add("active");
}
chatBox.onmouseleave=()=>{
  chatBox.classList.remove("active");
}
setInterval(() => {
    
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "php/get-chat.php", true);
      xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            let data = xhr.response;
            chatBox.innerHTML = data;
            if(!chatBox.classList.contains("active")){
              scrollAuto();}
          }
        }
      };
      let formData = new FormData(form);
      xhr.send(formData);

    
  }, 500);

  function scrollAuto(){
    chatBox.scrollTop= chatBox.scrollHeight;
  }
function deleteMessage(msg_id) {
    var confirmation = confirm("Are you sure you want to delete this message?");
    if (confirmation) {
        // Send an AJAX request to delete the message
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "php/delete_message.php", true);
        xhr.send("msg_id=" + msg_id);
    }
}
