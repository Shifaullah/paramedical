 // --------- swiper JS----------
 var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      loop : true,
      grabCursor: true,
        autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 5,
        depth: 500,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

$('.swiper-slide').click(function() {
  var a = document.createElement('a');
  a.href = "teacher.html";
  a.click();
});
// slider text animation
let sliderTexts = [
  'Mention Your Detail',
  'Mention Your Detail',
  'Mention Your Detail',
  'Mention Your Detail',
  'Mention Your Detail'
];
let sliderTextsAnimations = [
  'animate__zoomIn',
  'animate__slideInDown',
  'animate__slideInLeft',
  'animate__flash',
  'animate__bounce'
];
let ext = 0;
setInterval(function() {
  $('.slider h1, .slider p').addClass(sliderTextsAnimations[ext]);
  $('.slider h1, .slider p').removeClass(sliderTextsAnimations[ext-1]);
  $('.slider h1').text(sliderTexts[ext]);
  ext++;
  if(ext > 4){ext = 0;}
},5500);

// sign in
$('.signIn-btn').click(function() {
  $('.alerts').css('display','flex');
  $('body').css('overflow','hidden');
   $('.signUp').css('display','none');
  $('.signIn').css('display','inline-block');
});


$('.signUp-btn').click(function() {
  $('body').css('overflow','hidden');
  $('.alerts').css('display','flex');
  $('.signUp').css('display','inline-block');
  $('.signIn').css('display','none');
});

$('.cross').click(function() {
  $('.alerts').css('display','none');
   $('body').css('overflow','auto');
});





