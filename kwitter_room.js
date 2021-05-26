var firebaseConfig = {
    apiKey: "AIzaSyDUa5e-ID0q9sM__XMfN6TjYhVWNsCh_L4",
    authDomain: "chat-web-app-b312e.firebaseapp.com",
    databaseURL: "https://chat-web-app-b312e-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-b312e",
    storageBucket: "chat-web-app-b312e.appspot.com",
    messagingSenderId: "786705956141",
    appId: "1:786705956141:web:e62960bfad62af7c9a27a4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("username");
    document.getElementById("Username").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log (name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}