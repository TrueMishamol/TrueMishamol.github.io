window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.lineHeight = "50px";
    document.getElementById("logo").style.fontSize = "80px";
  } else {
    document.getElementById("navbar").style.lineHeight = "87px";
    document.getElementById("logo").style.fontSize = "25px";
  }
}