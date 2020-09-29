 $('.menuBtn').click(function() {
  this.classList.toggle('fa-times');
 });

// pre loader
setTimeout(function() {
  $('.loader').css({
    opacity : '0',
    visibility : 'hidden'
  });
  
  setTimeout(function() {
    $('.loader').css('display','none');
  },500);
},2000);

// slider image zoom animation
  setTimeout(function() {
    $('.Slider').css('background-size','110% 110%');
  },1500);

// slide to top button
$(document).scroll(function() {
  if(scrollY > (window.innerHeight + 50)){
    $('.slidetotop').css('bottom','20px');
  }else{
    $('.slidetotop').css('bottom','100%');
  }
});

 // input line animation
var inputs = document.querySelectorAll('.input-div .input');
inputs.forEach(function(a,index) {
  a.addEventListener('focus',function() {
    this.parentElement.querySelector('.inputLine').style.left = 0;
  });
  a.addEventListener('blur',function() {
    if(this.value == ""){
      a.parentElement.querySelector('.inputLine').style.left = "-100%" ;
    }
  });
});

// alert 
function submitt(e,el) {
  e.preventDefault();
  el.querySelectorAll('.input').forEach(function(ev) {
    ev.value = "";
  });
  $('.alerts, .alerts .alert').css('display','block');
  setTimeout(function() {
    $('.alerts, .alerts .alert').css('display','none');
  },1500);
};

// online classes view more section
  $('.more').click(function() {
    if( $(this).text() == 'View More'){
      $(this).text("Show Less");
    }else{
      $(this).text("View More");
    }
    $(this).parent().parent().prev().toggleClass('d-flex');

  });

  // department
  $('.staff figure figcaption span').click(function() {
    var a = document.createElement('a');
    a.href = 'teacher.html';
    a.click();
  });