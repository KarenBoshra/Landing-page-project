
/**
 * Define Global Variables
*/
const navigation = document.getElementById('navbar__list');
const section =document.querySelectorAll('section');

/**
 * End Global Variables
*/

// build the nav
function navBuilder() {
  section.forEach(function (section) {
    listItem = document.createElement("li");
    listItem.innerHTML = `<li> <a a href = "#${section.id}" data-nav= "${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    navigation.appendChild(listItem);
  })
};
navBuilder();

// Add class 'active' to section when near top of viewport
// The section will be active when it is viewed by the user
window.onscroll = function () {
  document.querySelectorAll("section").forEach(function (active) {
    const rect = active.getBoundingClientRect();
    if (
      rect.top >= -150 &&
      rect.top <= 150
    ){
       active.classList.add("your-active-class");
    } else {
      active.classList.remove("your-active-class");
    }
  })
};

// scroll to the apropriate section smoothly after clicking on the nav bar 
navigation.addEventListener("click", (event) => {
  event.preventDefault();
   const section = document.getElementById(`${event.target.dataset.nav}`)
    section.scrollIntoView({ behavior: "smooth" });
});



