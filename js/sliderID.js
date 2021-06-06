$(document).ready(function() {

    $( '#my-slider1' ).sliderPro({
        width: 1160, 
          height: 700,
        fade: true,
        arrows: true,
        orientation: 'horizontal',
        thumbnailsPosition: 'right',
        buttons: false,
        fullScreen: true,
        shuffle: false,
        responsive: true,
        thumbnailArrows: true,
        autoplay: false,
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        thumbnailsMoveComplete: function () {
          jQuery(".sp-image-container img").unbind();
        },
        breakpoints: {
              1400: {
              thumbnailsPosition: 'right',
              thumbnailWidth: 350,
              thumbnailHeight: 200
            },
            800: {
              thumbnailsPosition: 'bottom',
              thumbnailWidth: 270,
              thumbnailHeight: 150
            },
            500: {
              thumbnailsPosition: 'bottom',
              thumbnailWidth: 120,
              thumbnailHeight: 70
            },
      
             300: {   
              thumbnailsPosition: 'bottom',
              thumbnailWidth: 420,
              thumbnailHeight: 70
            } 
           }
      });
});