console.log("Gamersclub no Ads Match Ativo")

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;

  function onYouTubeIframeAPIReady() {
      player = new YT.Player('gameModalMerchandiseVideo', {
          events: {
              'onReady': onPlayerReady
          }
      });
  }

  //SE PLAYER PRONTO MUTAR IFRAME//
  function onPlayerReady() {
      player.playVideo();
      // Mute!
      console.log("Player Mutado")
      player.mute();
  }
  

  
