let menu = document.querySelector('.menu__burger');

let menuX = document.querySelector('.burgerX');

let burger = document.querySelector('.burger');


menu.addEventListener('click', function () { 
    burger.classList.add('burger__active')
 })

 menuX.addEventListener('click', function () { 
    burger.classList.remove('burger__active')
  })


  function startTime()
  {
  var today=new Date();
  var h=today.getHours();
  var m=today.getMinutes();
  var s=today.getSeconds();
  // add a zero in front of numbers<10<br>
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('txt').innerHTML=h+":"+m+":"+s;
  t=setTimeout(function(){startTime()},500);
  }
  
  function checkTime(i)
  {
  if (i<10)
    {
    i="0" + i;
    }
  return i;
  }


  let h1 = document.querySelector('.header__content-title');

  let text = h1.innerHTML
  h1.innerHTML = ''
  
  function strs(x = 0) {
      h1.innerHTML += text[x]
      x++
      if (x < text.length) {
          setTimeout(() => {
              strs(x)
          }, 220);
      }
  }
  
  strs()

