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
})//jQuery ends




//window loads start
window.addEventListener("load", (event) => {

// AOS Animation
AOS.init({
    duration: 650,
    // once: true
  }); 

// HERO Splide
const splide = new Splide( '.hero .splide', {
    heightRatio: 0.5625,
    cover      : true,
    video      : {
      loop: true,
    },
  } );
 new Splide( '.hero .splide' ).mount( window.splide.Extensions );

 
 
// Ecosystem splide
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
            $("button.splide__pagination__page").eq(a).attr("style",`background:url(${src})`)
})



// Counter
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
                    for(const counter of counters) {
      	              counterUp( counter, {
      		              duration: 1000,
      		              delay: 16,
      	              })
                    // el.classList.add( 'is-visible' )
                  }
	    }
	} )
}

// observer
const IO = new IntersectionObserver( callback, { threshold: 1 } )

// First element to target
const el = document.querySelector( '.figur' )

// all numbers
const counters = document.querySelectorAll( '.figur' )

IO.observe( el )



  });//wndoew load ends

