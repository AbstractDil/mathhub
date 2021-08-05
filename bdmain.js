
function myFunction()
{
  var Un = document.forms["myForm"]["Uname"].value;
  var Pw = document.forms["myForm"]["Pass"].value;
  if(Un=="Taal@2021" &&  Pw=="Taal@2021")
  {
	window.location.href="Waiting3.html";
  }
  else{
	alert("Invalid Username or Password");
  }
}

