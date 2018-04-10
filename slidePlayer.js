var idx;
var slideshow;
var lastTime = +new Date;

function init()
{
    idx = 1;
    slideshow = document.getElementById("slideshow1");
}

function slideshow()
{  
    init();
    setInterval(slideshow.className = "", 3000);
    setInterval(slideshow.className = "frameout", 6000);
    setInterval(next, 9000);
}

function setOpacity(obj, opa) 
{  
    obj.style.opacity = opa / 100;
}

function fadein()
{
    var opa = 0;
    var timer = setInterval(func, 1);
    function func() 
    {
      if (opa < 100) 
      {
        opa += 0.2;
        setOpacity(slideshow, opa);
      } 
      else 
      {
        clearInterval(timer);
      }
    }
}

function fadeout()
{
    var opa = 100;
    var timer = setInterval(func, 1);
    function func() 
    {
      if (opa > 0) 
      {
        opa -= 0.3;
        setOpacity(slideshow, opa);
      } 
      else 
      {
        clearInterval(timer);
        idx = idx + 1;
        if (idx > 9)
        {
            idx = 1;
        }  
        img_url = "img/Ryo_" + idx + ".jpg";
        slideshow.src = img_url;
        fadein();
      }
    }   
}

function next()
{
    fadeout();    
}

function autoplay()
{
    init();
    fadein();
    var timer = setInterval(next, 10000);
    setInterval(function()
        {
            if (Math.abs(+new Date - lastTime) > 3000) 
            {
                clearInterval(timer);
                timer = setInterval(next, 10000);
            }
            lastTime = +new Date;
        }, 1000)
}