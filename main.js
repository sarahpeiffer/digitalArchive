window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById("header").style.paddingTop = "10px";
    document.getElementById("title").style.padding = "10px 10px";
    document.getElementById("title").style.height = "auto";
    document.getElementById("header").style.fontSize = "30px";
    document.getElementById("title").style.paddingBottom = "5px"
    document.getElementById("button-div").style.display = "none"


    // let playlistDiv = document.createElement("div")
    // playlistDiv.innerHTML = "<iframe src='https://open.spotify.com/embed/playlist/5ptmpsm2a0619TglNLiaqi' frameborder='0' display='inline' allowtransparency='true' allow='encrypted-media'></iframe>";
    // playlistDiv.classList.add("playlistHeader");
    // playlistDiv.id = "playlistHeaderID";
    // document.getElementById("title").append(playlistDiv);
  } 
  else {
    document.getElementById("title").style.padding = "80px 10px";
    document.getElementById("header").style.paddingTop = "10%";
    document.getElementById("header").style.fontSize = "100px";
    document.getElementById("title").style.height = "100%";
    document.getElementById("button-div").style.display = "block"
    // let playListDiv = document.getElementById("playlistHeaderID");
    // if(playListDiv != null) {
    //     document.getElementById("title").removeChild(playListDiv);
    // }
  }
}

function scrollDown() {
    document.getElementById("small-spacer").scrollIntoView();
}