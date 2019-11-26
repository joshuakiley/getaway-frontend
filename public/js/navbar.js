document.addEventListener("DOMContentLoaded", () => {
  const sidenav = document.querySelectorAll(".sidenav");
  const colapse = document.querySelectorAll(".collapsible");
  const sideInstance = M.Sidenav.init(sidenav);
  const colapseInstance = M.Collapsible.init(colapse);
});

const closeSideNav = () => {
  const sidenav = document.querySelectorAll(".sidenav");
  sidenav.close();
};

document.querySelectorAll(".sidenavlink").onclick = closeSideNav;




/////

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('.collapsible').collapsible();
});
