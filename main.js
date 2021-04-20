window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("header").style.paddingTop = "10px";
    document.getElementById("title").style.padding = "10px 10px";
    document.getElementById("header").style.fontSize = "30px";
    document.getElementById("title").style.paddingBottom = "5px"
    // let playlistDiv = document.createElement("div")
    // playlistDiv.innerHTML = "<iframe src='https://open.spotify.com/embed/playlist/5ptmpsm2a0619TglNLiaqi' frameborder='0' display='inline' allowtransparency='true' allow='encrypted-media'></iframe>";
    // playlistDiv.classList.add("playlistHeader");
    // playlistDiv.id = "playlistHeaderID";
    // document.getElementById("title").append(playlistDiv);
  } else {
    document.getElementById("title").style.padding = "80px 10px";
    document.getElementById("header").style.paddingTop = "10%";
    document.getElementById("header").style.fontSize = "100px";
    document.getElementById("title").style.paddingBottom = "800px"
    // let playListDiv = document.getElementById("playlistHeaderID");
    // if(playListDiv != null) {
    //     document.getElementById("title").removeChild(playListDiv);
    // }
  }
}