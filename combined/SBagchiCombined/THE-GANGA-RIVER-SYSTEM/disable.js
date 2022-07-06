// disable right click 
document.addEventListener("contextmenu", function(event){
    event.preventDefault();
    swal("Right Click is Disabled By Administrator.","","warning");    
    }, false);


    document.onkeydown = function (e) {
  
        // disable F12 key
        if(e.keyCode == 123) 
        {
            swal(" F12 Key is Disabled By Administrator.","","warning"); 
            return false;
        }
 
        // disable I key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
            swal(" CTRL+SHIFT+I Key is Disabled By Administrator.","","warning"); 
            return false;
        }
 
        // disable J key
        if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            swal(" CTRL+SHIFT+J Key is Disabled By Administrator.","","warning"); 
            return false;
        }
 
        // disable U key
        if(e.ctrlKey && e.keyCode == 85) {
            swal(" CTRL+U Key is Disabled By Administrator.","","warning"); 
            return false;
        }
        // disable F3 key
        if(e.ctrlKey  && e.shiftKey && e.keyCode == 114) {
            swal(" F3 Key is Disabled By Administrator.","","warning"); 
            return false;
        } 
        // disable R key
        if(e.ctrlKey  && e.shiftKey && e.keyCode == 82) {
            swal(" CTRL+SHIFT+R Key is Disabled By Administrator.","","warning"); 
            return false;
        }
        if(e.ctrlKey && e.keyCode == 82) {
            swal(" CTRL+R Key is Disabled By Administrator.","","warning"); 
            return false;
        }
        //f5 disable
        if(e.keyCode == 116) {
            swal(" F5 Key is Disabled By Administrator.","","warning"); 
            return false;
        }
        //A disable 
        if(e.ctrlKey && e.keyCode == 65) {
            swal(" CTRL+A Key is Disabled By Administrator.","","warning"); 
            return false;
        }
        //C disable 
        if(e.ctrlKey && e.keyCode == 67) {
            swal(" CTRL+C Key is Disabled By Administrator. ","Our system detected that you are trying to copy our content. \n Your public ip address is sent to our server.","warning"); 
            return false;
        }
        //V disable 
        if(e.ctrlKey && e.keyCode == 86) {
            swal(" CTRL+V Key is Disabled By Administrator.","","warning"); 
            return false;
        }
        
    }
 $('body').bind('copy paste',function(e) {
    e.preventDefault(); 
    swal(" Copy & Paste Functionality is Disabled By Administrator.","","warning"); 
    return false; 
});
const Username = prompt("Enter Username");
        if(Username == "Sagar2021")
        {
       const Password = prompt("Enter Password");
        
        if(Password=="202120222035s"){
            alert("Access Granted");
            // window.location="index.html";

        }
        else
        {
            alert("Incorrect Password.");
            window.location="error.html"
    }
}
else{
    alert("Access Denied.")
    window.location="error.html"
}

