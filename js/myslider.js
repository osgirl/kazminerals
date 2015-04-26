$(document).ready(function () {

    $('.slider').css('display','block');
  	$('.slidesjs_slider').slidesjs({
        width: 898,
        height: 512,
        navigation: false,

        play: {
          auto: true,
          interval: 4000,
          swap: true,
          pauseOnHover: true,
          restartDelay: 2500
        },

        callback: {
          start: function(number) {
            console.log('Начало анимации на слайде #' + number);
            $('.slidesjs_slider__content'+number).fadeOut();
          },
          complete: function(number) {
            console.log('Анимация завершена, текущий слайд #' + number);
            $('.slidesjs_slider__content'+number).fadeIn();
          }
        }
  	});
});