
function myFunction()
{
  var Un = document.forms["myForm"]["Uname"].value;
  var Pw = document.forms["myForm"]["Pass"].value;
  if(Un=="Sagar" &&  Pw=="2019")
  {
	window.location.href="Waiting2.html";
  }
  else{
	alert("Invalid Username or Password");
  }
}

