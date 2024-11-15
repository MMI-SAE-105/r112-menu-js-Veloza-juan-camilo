// const nav = document.querySelector('.menu');
// console.log(nav);
// nav.aria_hiden = false;

// toggle = document.querySelector('.menu-btn');
// toggle.ariaExpanded = true;

const toggle = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
    nav.ariaHidden = isOpen;
    toggle.ariaExpanded = isClosed;
});
