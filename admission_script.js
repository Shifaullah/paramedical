 // ---------custom js--------
 $('.menuBtn').click(function() {
  this.classList.toggle('fa-times');
 });

// slider image zoom animation
  setTimeout(function() {
    $('.admissionSlider').css('background-size','110% 110%');
  },1500);

// slider text animtion 
 var texts = [
        'Better Education For A Better World',
        'Explore The World Of Our Students',
        'Exceptional People, Exceptional Care',
        'The Learning Process Continues Until The Day You Die',
        " Education's roots are bitter, But the fruit is sweet"
        ];
 var h1 = document.querySelector('.slider-text h2');
 var count = 0;

 h1.addEventListener('animationiteration',function(){
  this.innerText = texts[count];
  count++;
    if(count > 4){count = 0} 
  });
