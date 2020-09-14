/*Go to top*/
window.onscroll = function() {
    console.info(document.documentElement.scrollTop)
    var header = document.getElementById("myHeader")
    var gototop = document.getElementById("gototop")
    if (document.documentElement.scrollTop>100 || document.body.scrollTop>100)
    {
         header.style.position = "fixed"
         header.style.left = 0
         header.style.right = 0
         header.style.top = 0
         header.style.backgroundColor = "black"
         header.style.zIndex = 9

         totop.style.display = "block"
     } else {
         header.style.position = "relative";
         header.style.backgroundColor = "black"
         totop.style.display = "none"
    }
}

function gototop () 
{
   var timer = setInterval(function(){
      document.documentElement.scrollTop-=5;

      if    (document.documentElement.scrollTop <= 0)
         clearInterval(timer);
   }, 1); 
}
