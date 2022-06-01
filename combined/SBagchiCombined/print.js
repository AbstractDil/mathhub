setInterval(myTimer);

function myTimer() {
const d = new Date();
//   document.getElementById("date_time").innerHTML = d.toLocaleDateString() + d.toLocaleTimeString();

document.getElementById("date_time").innerHTML = 'Current time : ' +  d.toLocaleString();
}

// jan

function janDiv() {
    var divContents = document.getElementById("jan").innerHTML;
    var a = window.open('', '', 'height=720,width=1080');
    a.document.write('<html><title>Days Of January - https://nandysagar.in/combined</title>');
    a.document.write('<body > <center> <h2><u>S.Bagchi Combined</u></h2></center> ');
    a.document.write(divContents);
    a.document.write('Url is:'+ window.location.href);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

// feb 
function febDiv() {
    var divContents = document.getElementById("feb").innerHTML;
    var a = window.open('', '', 'height=720,width=1080');
    a.document.write('<html><title>Days Of February - https://nandysagar.in/combined</title>');
    a.document.write('<body > <center> <h2><u>S.Bagchi Combined</u></h2></center> ');
    a.document.write(divContents);
    a.document.write('Url is:'+ window.location.href);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}
// march
function marchDiv() {
    var divContents = document.getElementById("march").innerHTML;
    var a = window.open('', '', 'height=720,width=1080');
    a.document.write('<html><title>Days Of March - https://nandysagar.in/combined</title>');
    a.document.write('<body > <center> <h2><u>S.Bagchi Combined</u></h2></center> ');
    a.document.write(divContents);
    a.document.write('Url is:'+ window.location.href);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}
// april 

function aprilDiv() {
    var divContents = document.getElementById("april").innerHTML;
    var a = window.open('', '', 'height=720,width=1080');
    a.document.write('<html><title>Days Of April - https://nandysagar.in/combined</title>');
    a.document.write('<body > <center> <h2><u>S.Bagchi Combined</u></h2></center> ');
    a.document.write(divContents);
    a.document.write('Url is:'+ window.location.href);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

// may
function mayDiv() {
    var divContents = document.getElementById("may").innerHTML;
    var a = window.open('', '', 'height=720,width=1080');
    a.document.write('<html> <title>Days Of May - https://nandysagar.in/combined</title>');
    a.document.write('<body > <center> <h2><u>S.Bagchi Combined</u></h2></center> ');
    a.document.write(divContents);
    a.document.write('Url is:'+ window.location.href);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

// june

function juneDiv() {
    var divContents = document.getElementById("june").innerHTML;
    var a = window.open('', '', 'height=720,width=1080');
    a.document.write('<html> <title>Days Of June - https://nandysagar.in/combined</title>');
    a.document.write('<body > <center> <h2><u>S.Bagchi Combined</u></h2></center> ');
    a.document.write(divContents);
    a.document.write('Url is:'+ window.location.href);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}

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
