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
