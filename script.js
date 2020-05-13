console.log("Gamersclub no Ads Match Ativo")
console.log("Running...")

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
      alert("Video desativado")
      player.mute();
  }


  //ALTERAR MUSICA PRÉ LOBBY //

  const interval    = setInterval(()=>{
    const audio   = document.getElementById("soundHandle1");
    if(audio){
        if(audio.src="/sounds/lobby-beta/pre-ready.mp3"){
            const url = chrome.runtime.getURL('music.mp3');
            console.log(url);
            audio.src = url;
            audio.load();
            audio.play();
        }
        console.log("Essa musica é melhor ♥")
    }
})
  

  
