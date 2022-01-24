class Storage{

    static getSearchedUsersFromStorage(){
        //tum kullanicilari al

        let users;

        if(localStorage.getItem("searched") === null){
            users  = [];
        }else{
            users = JSON.parse(localStorage.getItem("searched"));

        }

        return users;

    }

    static addSearchedUserToStorage(username){
        //sorgulanmıs kullaniciyi storage ' a ekle
        let users = this.getSearchedUsersFromStorage();

        //indexof ile sorgulama yapcaz array de var mı yok mu?

        if(users.indexOf(username) === -1){
            //-1 geliyorsa username yok demektir.
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users))
    }

    static clearAllSearchedUsersFromStorage(){
        //tüm kullanicilari sil

        localStorage.removeItem("searched");

    }

}