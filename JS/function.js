function bookNow () { alert("20% off on your first booking"); } // Display message

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  // opens video in full screen
  
  function openFullscreen(){
    if (elem.requestFullscreen){
      elem.requestFullscreen();
    }
    else if (elem.webkitRequestFullscreen){
  /* Safari */
      elem.webkitRequestFullscreen();
    }
    else if (elem.msRequestFullscreen){
  /* IE11*/
      elem.msRequestFullscreen();    
    }
  }