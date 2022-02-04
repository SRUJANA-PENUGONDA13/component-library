function openSideNav() {
  document.querySelector(".ui-sideNav").style.visibility = "visible";
  document.querySelector(".ui-sideNav").style.width = "250px";
  document.querySelector(".ui-body").style.marginLeft = "250px";
}
function closeSideNav() {
  document.querySelector(".ui-sideNav").style.visibility = "hidden";
  document.querySelector(".ui-sideNav").style.width = "0px";
  document.querySelector(".ui-body").style.marginLeft = "0px";
}
