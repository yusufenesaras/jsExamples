// Elementleri seç
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();
eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

function getData(e){
    
    let username = nameInput.value.trim();

    if(username === ""){
        alert("Gecerli bir kullanici adi girin!")
    }else{

        github.getGithubData(username)
        .then(response =>{
            if(response.user.message === "Not Found"){
                ui.showError("Kullanici bulunamadi.");
            }else{
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo); 
            }
        })    
        .catch(err => ui.showError(err));
        
    }
    
    
    ui.clearInput(); // input her aramada temizleniyor
    e.preventDefault(); //sayfa yenilenmesi önlemek icin.
}
function clearAllSearched(){
    //Tüm arananaları temizle

    if(confirm("Emin misiniz?")){
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }

}
function getAllSearched(){
    let users = Storage.getSearchedUsersFromStorage();
    

    let result = "";
    users.forEach(user => {
        //
        result +=  
        `
        <li class="list-group-item">${user}</li> 

        `
    });

    lastUsers.innerHTML = result;
}