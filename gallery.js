

var modal = document.getElementById("myModal");

for(let i =  1; i < 13; i++) {
    var img = document.getElementById("img" + i);
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      var captionContent = document.getElementById("caption" + i);
      modalImg.src = this.src;
      if(captionContent != null) {
        captionText.innerHTML = captionContent.innerHTML;
      }
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}