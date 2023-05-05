(jQuery)(function() {
  
    $(document).ready(function(){


        $("ul.main li").each(function(){
            $(this).click(function(){
                $(this).find("ul").toggleClass("active")  
            })
            
        });

        // Hamburger Toggle
        $(".mobile-nav").click(function(){
            $("#about .nav .nav-container .nav-button").toggleClass("mobile-active")  
        });

        // FAQs
     
        $(".faqs-frame h5").each(function(){
            $(this).click(function(){
                $(".faqs-frame p").hide();
                $(this).next("p").fadeIn("slow");
            })
        })


     
          
          
        



    })
})



// HERO Splide
window.addEventListener("load", (event) => {

const splide = new Splide( '.hero .splide', {
    heightRatio: 0.5625,
    cover      : true,
    video      : {
      loop: true,
    },
  } );
 new Splide( '.hero .splide' ).mount( window.splide.Extensions );

 
 
// Ecosystem
  new Splide('.ecosystem .splide', {
    type       : 'loop',
    height     : '9rem',
    perPage    : 2,
    autoWidth: true,
    pagination: false,
    breakpoints: {
        768: {
           perPage: 1,
           snap: true
        }
     }
  } );

 new Splide( '.ecosystem .splide' ).mount( window.splide.Extensions );

    // Hero slider pagination images : auto jquery
    $("img.preview").each(function(a,i){
        var src =  $(this).attr("src");
          console.log("SRC",src);
              $("button.splide__pagination__page").eq(a).attr("style",`background:url(${src})`)
      })

  });

