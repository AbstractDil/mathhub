 // disable right click
 document.addEventListener('contextmenu', event => event.preventDefault());

 document.onkeydown = function (e) {

     // disable F12 key
     if(e.keyCode == 123) {
         return false;
     }

     // disable I key
     if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
         return false;
     }

     // disable J key
     if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
         return false;
     }

     // disable U key
     if(e.ctrlKey && e.keyCode == 85) {
         return false;
     }
     // disable r key
     if(e.ctrlKey  && e.shiftKey && e.keyCode == 114) {
         return false;
     } 
     // disable R key
     if(e.ctrlKey  && e.shiftKey && e.keyCode == 82) {
         return false;
     }
     if(e.ctrlKey && e.keyCode == 82) {
         return false;
     }
     //f5 disable
     if(e.keyCode == 116) {
         return false;
     }
 }
$('body').bind('copy paste',function(e) {
 e.preventDefault(); return false; 
});


$(document).ready(function() {

   window.history.pushState(null, "", window.location.href);        

   window.onpopstate = function() {

       window.history.pushState(null, "", window.location.href);

   };

});
