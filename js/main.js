$(document).ready(function(){

        $('.form-toggler').click(function() {
          $('.form_sp').show(400);
          $('.form-toggler').hide();
          $('.close').style('display', 'block');
        });

                     
        

          var owl = $(".owl-carousel").owlCarousel({
              items: 1.5,
              slideSpeed: 500,
              autoplay: false,
              autoplayTimeout: 4500,
              loop: true,
              mouseDrag: true,
              singleItem: true,
              dots: true,
              margin: 0,
              center: true,
              nav: true,
              responsive: {
                0: {
                  items: 1,
                  nav: false
                },

                992: {
                  items: 1.5,
                  nav: true,
                }

              }
          }).data('owlCarousel');




          var documentElem = $(document),
                    nav = $('.sticky_menu'),
                    scrollStart = 130;
                
                documentElem.on('scroll', function() {
                    var currentScrollTop = $(this).scrollTop();
                    
                    //scroll down
                    if (currentScrollTop >  scrollStart) {
                      $('.sticky_menu').fadeIn(100);

                    } 
                    //scroll up
                    else $('.sticky_menu').fadeOut(100);
                    
                });
 
      });
  
