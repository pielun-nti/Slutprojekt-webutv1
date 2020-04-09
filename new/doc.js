window.onload=function(){
    var out = document.getElementsByClassName("flex_hover");
    function reset(){ //for loop to reset animation in flexHoverOut after it is complete.
      for (var i=0; i<out.length; i++){
        out[i].removeAttribute("style");
      }
    }
    
    var canMove = true;
      for (var i=0; i<out.length; i++){ //animation for off hover
        out[i].addEventListener("mouseout", function flexHoverOut( event ) {
          if(canMove){
            this.style.animation= "moveDown 1s"; //calls keyframe from main.css
            setTimeout(reset, 1000); //delay in fire of the reset function
          }
        })
      }
    
      var grow = document.getElementsByClassName("flex_item");
      var words = document.getElementsByClassName("category");
      var showImages = document.getElementsByClassName("images");
      for(var i =0; i<grow.length; i++){
        grow[i].addEventListener("click", function fullExpand() { //make chosen section full width
          for(var j =0; j<grow.length; j++){
          grow[j].style.display = "none";
            grow[j].classList.remove("flex_hover"); //supress moveUp keyframe
          }
          this.classList.add("absoluteSection");
          this.style.display= "inline";
          for(var i = 0; i<words.length; i++) {
            words[i].style.visibility ="hidden";
          }
          this.style.animation= "expand 2s forwards";
          canMove = false; //stop flexHoverOut function from firing
          for(var i = 0; i<showImages.length; i++) {
            showImages[i].style.display ="inline-block";
          }
          document.querySelector(".back").style.animation = "fadeIn 2s 1.5s forwards";
          document.querySelector(".back").style.cursor = "pointer";
          })
        }
    }