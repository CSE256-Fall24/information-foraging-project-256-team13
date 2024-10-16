export function setup() {
  
  window.onscroll = function() {myFunction()};
  var header = document.getElementById("main-menu-container");
  var sticky = header.offsetTop;
  function myFunction() {
  if (window.scrollY > sticky) {
      header.classList.add("sticky");
      console.log("sticky");
  } else {
      header.classList.remove("sticky");
      console.log("not sticky  ");
  }
  }
  }