var drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(function(button) {
  //Get the drum data.
  var drum = button.getAttribute("data-drum");
  if (drum) {
    //Set the image
    button.style.backgroundImage = "url('images/" + drum + ".png')";
    //Set the click callback
    button.addEventListener("click", function() {
      //Button clicked
      var drumSound = new Audio("sounds/" + this.getAttribute("data-drum") + ".mp3");
      drumSound.play();
    })
  } else {
    //Did not set the data-drum attribute
    console.log("Did not set data-drum attribute of drum class element: " + button);
    button.innerHTML = "❌";
  }
});

document.addEventListener("keydown", function(e) {
  document.querySelector("." + e.key)?.click();
});
