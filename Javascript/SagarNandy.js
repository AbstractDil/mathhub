
function failed(){
    swal({
      title:"Downloading Failed",
  text: "Please try after sometime.",
  icon:"error"

})
}
function services(){
  swal({
    title:"No Service",
    text:"Services will be provided soon...",
    icon:"error"

})
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

//   $(window).on('load', function() {
//     $('#preloader').addClass("loaded");
//     $('.line-drop').fadeOut('slow');
// });

/*=====preloader==== */
// $(function(){
//   setTimeout(function(){
//     $("#preloader").fadeOut(1000);
//   },2000);
// });
