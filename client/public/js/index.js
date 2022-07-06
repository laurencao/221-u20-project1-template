function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}
window.addEventListener('keyup', checkKeyPress);
document.getElementById("fade_text").addEventListener('mouseup',()=> goToLocation("/feed"));
 
