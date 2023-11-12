let index=0;
const totalWorkItem=$('.work-item').length;
// console.log(totalWorkItem)

$(document).ready(function(){

    //Nav Toggle
    $('.nav-toggle').click(()=>{
        $('.header .nav').slideToggle()
        // $('.header .nav').css({display:"flex"})
    })
    $('.header .nav a').click(()=>{
        if($(window).width() < 768){
            $('.header .nav').slideToggle()

        }
    })

    //Fix header
    $(window).scroll(()=>{
        if($(this).scrollTop() >100){
            $('.header').addClass('fixed')
            // console.log('header')
        }
        else{
            $('.header').removeClass('fixed')
        }
    })

  // =============== Smoth Scroll ==================

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

//   ========================================

    // Set lightbox img height

    const wHeight=$(window).height();
    $('.lightbox-img').css('max-height',wHeight+"px")

    $('.work-item-inner').click(function(){
        index=($(this).parent('.work-item').index())

        $('.lightbox').addClass('open');
        lightboxSlideShow()
    })
    $('.lightbox .prev').click(()=>{
        // console.log('prev')
        if(index == 0){
            index=totalWorkItem-1
        }
        else{
            index --;
        }
        lightboxSlideShow();
    }) 
    $('.lightbox .next').click(()=>{
        // console.log('next')
        if(index == totalWorkItem-1){
            index=0;
        }
        else{
            index ++;
        }
        lightboxSlideShow()
    })

    //Close Light box
    $('.light-box-close').click(()=>{
        $('.lightbox').removeClass('open')

    })

    // close imgbox click outside

    $('.lightbox').click((event)=>{
        if($(event.target).hasClass('lightbox')){
            // console.log('out click')
            $('.lightbox').removeClass('open')
        }
    })

  
})

const lightboxSlideShow=()=>{

const imgSrc = $('.work-item').eq(index).find('img').attr('data-large');
// console.log(index,imgSrc)
$('.lightbox-img').attr('src',imgSrc)

const category = $('.work-item').eq(index).find('h4').html();
$('.lightbox-category').html(category)
$('.lightbox-counter').html(`${index+1} / ${totalWorkItem}`)

}