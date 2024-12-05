let songz = document.getElementById('songz');
let close = document.getElementById('close');
let open = document.getElementById('open');
let aud = document.getElementById('aud');
const showcases = document.querySelector('.showcases');
let bor = document.getElementById('.bor');
aud.muted = true;
showcases.addEventListener("mousemove", dragging);
open.addEventListener('click', function(){
  open.style.display = 'none';
  setTimeout(function() {
    songz.style.width = '130px';
    songz.style.right = '20px';
  }, 120);
  close.style.display = 'block';
  aud.muted = false;
});
close.addEventListener('click', function(){
  close.style.display = 'none';
  open.style.marginTop = 6 + 'px';
  setTimeout(function() {
    open.style.display = 'block';
    songz.style.width = '65px';
    songz.style.right = '85px';
  }, 20);
  aud.muted = true;
});