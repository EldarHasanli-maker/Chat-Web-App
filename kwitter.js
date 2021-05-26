function addUser(){
    user_name=document.getElementById("player1_name_input").value;
    localStorage.setItem ("username",user_name);
    window.location="kwitter_room.html";
}