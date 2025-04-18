function hideSelf() {
  const button = document.querySelector('.hide-self-button');
  button.onclick = function(event){
    event.currentTarget.hidden = true;
  };
}
