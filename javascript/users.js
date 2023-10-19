const searchBar = document.querySelector(".utilisateur .search input");
const searchBtn = document.querySelector(".utilisateur .search button");
const userList = document.querySelector(".utilisateur .list-utilisateurs");

let searchActive = false;

searchBtn.onclick = () => {
  searchBar.classList.toggle("active");
  searchBar.focus();
  searchBtn.classList.toggle("active");
  searchBar.value="";
  searchActive = true;
};

searchBar.oninput = () => {
  let searchTerm = searchBar.value;

  if (searchActive) {
    // Envoyer une requête AJAX pour récupérer les résultats de recherche
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/search.php", true);
    xhr.onload = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let data = xhr.response;
          userList.innerHTML = data;
        }
      }
    };
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("searchTerm=" + searchTerm);
  }
};

searchBar.onblur = () => {
  searchActive = false;
};
// Récupérer la liste des utilisateurs
setInterval(() => {
  if (!searchActive) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "php/users.php", true);
    xhr.onload = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let data = xhr.response;
          userList.innerHTML = data;
        }
      }
    };
    xhr.send();
  }
}, 500);
