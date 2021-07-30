
 function myFunction()
  {
    var Un = document.forms["myForm"]["Uname"].value;
    var Pw = document.forms["myForm"]["Pass"].value;
    if(Un=="Std@21" &&  Pw=="Student@2021")
    {
      window.location.href="Waiting.html";
    }
    else{
      alert("Invalid Student Name or Password");
    }
  }