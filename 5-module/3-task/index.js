function initCarousel() {
  let left = document.querySelector('.carousel__arrow_left');
  let right = document.querySelector('.carousel__arrow_right');
  let elem = document.querySelector('.carousel__inner');

  const width = elem.offsetWidth;

  let count = 0;

  let position = 0;

  left.style.display = 'none';

  right.onclick = function(e){
    position -= width;
    elem.style.transform = `translateX(${position}px)`;
    count += 1;
    if (count == 3){
      right.style.display = 'none';
    }
    left.style.display = '';
  }

  left.onclick = function(e){
    position += width;
    elem.style.transform = `translateX(${position}px)`;
    count -= 1;
    if (count == 0){
      left.style.display = 'none';
    }
    right.style.display = '';
  }
}
