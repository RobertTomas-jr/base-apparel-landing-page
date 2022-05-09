let text = document.querySelector('#email');
const errBtn = document.querySelector('.img-err');
const btn = document.querySelector('button');
const textErr = document.querySelector('.text-err');

text.focus();
text.addEventListener('keydown', ()=> {
  text.style.color = 'hsl(0, 6%, 24%)';
});
btn.addEventListener('click', check);
function check(e) {
    e.preventDefault();
    text.style.color = 'hsl(0, 36%, 70%)';
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!text.value.match(pattern)){
      textErr.style.display = 'block';
      errBtn.style.display = 'block';
      text.style.borderColor ='hsl(0, 93%, 68%)';
      text.value = '';
      text.focus();
    }else  if (text.value = '') {
      textErr.style.display = 'block';
      errBtn.style.display = 'block';
    }
    else {
      textErr.style.display = 'none';
      errBtn.style.display = 'none';
      text.style.borderColor ='';
    }
}

