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
        
    }
 $('body').bind('copy paste',function(e) {
    e.preventDefault(); 
    swal(" Copy & Paste Functionality is Disabled By Administrator.","","warning"); 
    return false; 
});

// Onload Modal 
    $(window).on('load', function()
     {
         setTimeout(function(){
            $('#onLoad').modal('show')
         },5000);
        
    });

    // form submission
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyAxUB09wm-Lqbaw3v6E7D9vi9rMi51vakCIpuUC2f3ZeAiJXFzJr4h0FprNXpLwYBsEg/exec'
    const form = document.forms['google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => swal({  title: "Thanks!",
text: " Your response has been sent successfully. ",
icon: "success",}))
        .catch(error => console.error('Error!', error.message))
    })

  
   
