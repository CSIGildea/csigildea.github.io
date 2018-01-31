$(document).ready(function() {
  	$(".item").click(function( event ) {
     	 $(this)
          .addClass('active')
          .siblings('.item')
            .removeClass('active');
     	 id = ($(this).attr('id')+"p");
     	 var text = document.querySelectorAll(".textoption");
     	 for(var i = 0; i < text.length; i++)
     	 {
     	 	text[i].classList.remove("menuShowText");
     	 	text[i].classList.add("menuHiddenText");
     	 }
     	 var selectedText = document.getElementById(id);
     	 selectedText.classList.remove("menuHiddenText");
     	 selectedText.classList.add("menuShowText");
    });
 
});