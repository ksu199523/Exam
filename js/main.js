const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');
const body = document.body;

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--open')
  body.classList.toggle('lock');
})

const preview = document.querySelector(".video__preview");

preview.addEventListener("click", () => {

  const iframe = document.createElement("iframe");

  iframe.src = "https://www.youtube.com/embed/lWo7PCmDFf8?autoplay=1";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "0";

  preview.innerHTML = "";
  preview.appendChild(iframe);

});

const colorSwitcher = document.querySelector('.dark-ligth');

colorSwitcher.addEventListener('click', () => {
  body.classList.toggle('dark')
});