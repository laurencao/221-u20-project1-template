function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}
//when user clicks the button or spacebar it'll take them to the feed 
window.addEventListener('keyup', checkKeyPress);
document.getElementById("fade_text").addEventListener('mouseup',()=> goToLocation("/feed"));
 
