(function(){var div="\
    <div id='video-player'>\
      <div class='video-box'>\
        <div class='close'><a href='#'>CLOSE</a></div>\
        <div class='video'></div>\
      </div>\
    </div>"
$('body').on('click','#video-player',function(event){event.preventDefault();$('#video-player').remove();});function VideoPlayer(oembed){this.iframe=oembed.html;}
VideoPlayer.prototype.show=function(){$('body').append(div);$('#video-player .video').html(this.iframe);}
this.VideoPlayer=VideoPlayer;})()