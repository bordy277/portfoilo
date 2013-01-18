 function initializeImages() {  
  var count = $('.content-image *').length;

  var current = 1;

  // $('.content-image img').animate({'marginLeft': 0}, 200);

  if (count<2) 
    {
      $('.count').hide();
    }

  $(".total").html(count);

  $('.current').html(current);

  function nextDriver() {
    $('.current').html(current);

    if (current>1) 
      {
        $('.prev').removeClass('no');
        $('.prev').addClass('yes');
      }
    else 
      {
        $('.prev').addClass('no'); 
        $('.prev').removeClass('yes');  
      }

    if (count<=$('.current').html()) 
      {
        $('.next').addClass('no');
        $('.next').removeClass('yes');
      }
    else
      {
        $('.next').removeClass('no');
        $('.next').addClass('yes');
      }
    };

  $('.next').click(function(){
    
    if ($(this).attr('class') == 'next yes')
      {
        current++;

        $('.content-image img').css({'zIndex': 0})

        $('.'+current).animate({'marginLeft': [0, 'easeInOutExpo']}, 500).css({'zIndex': 1});

        nextDriver();
      }
    else 
      {

      }

  });


  $('.prev').click(function(){

    if ($(this).attr('class') == 'prev yes')
      {

        $('.'+current).animate({'marginLeft': ['-690px', 'easeInOutExpo']}, 500).css({'zIndex': 1});

        current--;

        nextDriver();
      }
    else
      {

      }

  });

  function checkKey(e) {
      e = e || window.event;

      if (e.keyCode == '39') 
        {
          $('.next').trigger('click');
          return false;
        }
      else if (e.keyCode == '40') 
        {
          $('.next').trigger('click');
          return false;
        }
      else if (e.keyCode == '37') 
        {
          $('.prev').trigger('click');
          return false;
        }
      else if (e.keyCode == '38') 
        {
          $('.prev').trigger('click');
          return false;
        }
      else 
        {

        }

  }

  document.onkeydown = checkKey;
}






