$(function(){var BASE_VIDEO_URL="http://vimeo.com/api/oembed.json"
$('a[href^="https://vimeo.com"]').on('click',function(event){event.preventDefault();var params={url:this.href,width:'700px'}
$.get(BASE_VIDEO_URL,params,function(oembed){var videoPlayer=new VideoPlayer(oembed);videoPlayer.show();},"json");});});