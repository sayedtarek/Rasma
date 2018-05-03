  function shw(){
            var fr = document.getElementById("frame1");
            fr.style.visibility = 'visible';
            
 }

$(document).ready(

  function() { 

    $("html").niceScroll(
    {
         cursorcolor: '#62A2D5',
         cursorwidth:'10px',
    }
    
    );
$(".links li a").click(function(){
    $("html, body").animate({
        scrollTop: $("#" + $(this).data("value")).offset().top
    },1000)
    
  });
  
   $('#Containe').mixItUp();
   
   new WOW().init();
  
  }
  

 
);
