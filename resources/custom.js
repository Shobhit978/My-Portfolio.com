AOS.init();
//Google Sheet connect code
var scriptURL = "https://script.google.com/macros/s/AKfycbwVBDtd3HvmpubhGllbyXLiKIyRXklnctM3g6a9gC63lxGo36QT2FQq78DqDbapObKq/exec";
var form = document.forms['google-sheet'];
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
});

//scroll to top
$("#top-button").click(
  function(){
      $("html, body").animate({scrollTop: 0}, 100);
  }
);