const nav = document.querySelector(".wrapper");

const topNav = nav.offsetTop;

function fixNav(){
    console.log(topNav);
    if(window.scrollY > 53){
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      document.body.classList.add('fixed-nav');
    } else {
      document.body.style.paddingTop = 0;
      document.body.classList.remove('fixed-nav');
    }
 }

 window.addEventListener('scroll', fixNav);