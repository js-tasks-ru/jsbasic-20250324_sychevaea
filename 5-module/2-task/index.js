function toggleText() {
  const button = document.querySelector('.toggle-text-button');
  button.onclick = function(event){
    const div = document.querySelector('#text');
    div.hidden = !div.hidden;
  }
}
