const upBtn = document.querySelector(".up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

upBtn.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
