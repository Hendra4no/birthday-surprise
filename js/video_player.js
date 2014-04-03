(function() {
  var div="\
    <div id='video-player'>\
      <div class='video-box'>\
        <div class='close'><a href='#'>CLOSE</a></div>\
        <div class='video'></div>\
      </div>\
    </div>"
  $('body').on('click','.play',function(event){
    event.preventDefault();

    $('.intro-video').html('');
    $('.intro-video').append('<iframe width="640" height="480" src="http://www.youtube.com/embed/dsE6D-Xg-Ns?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
  });
})()
