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
function makeAppResponsive() {
  const usageLink = document.querySelector("#usage-link");
  const avatarLink = document.querySelector("#avatar-link");
  const alertLink = document.querySelector("#alert-link");
  const badgeLink = document.querySelector("#badge-link");
  const buttonLink = document.querySelector("#button-link");
  const cardLink = document.querySelector("#card-link");
  const imageLink = document.querySelector("#image-link");
  const inputLink = document.querySelector("#input-link");

  if (window.innerWidth < 600) {
    document.querySelector(".ui-media").style.visibility = "hidden";
    usageLink.addEventListener("click", (event) => {
      closeSideNav();
    });
    avatarLink.addEventListener("click", (event) => {
      closeSideNav();
    });
    alertLink.addEventListener("click", (event) => {
      closeSideNav();
    });
    badgeLink.addEventListener("click", (event) => {
      closeSideNav();
    });
    buttonLink.addEventListener("click", (event) => {
      closeSideNav();
    });
    cardLink.addEventListener("click", (event) => {
      closeSideNav();
    });
    imageLink.addEventListener("click", (event) => {
      closeSideNav();
    });
    inputLink.addEventListener("click", (event) => {
      closeSideNav();
    });
  } else {
    // usageLink.removeEventListener("click");
  }
}
