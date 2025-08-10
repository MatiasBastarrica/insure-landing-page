const navIcon = document.querySelector(".nav-icon");
const dialog = document.querySelector("dialog");

const mobileNav = (function () {
  let isOpen = false;
  return { isOpen };
})();

navIcon.addEventListener("click", () => {
  if (mobileNav.isOpen) {
    dialog.close();
    mobileNav.isOpen = false;
  } else {
    dialog.show();
    mobileNav.isOpen = true;
  }
});
