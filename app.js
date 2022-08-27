**
 * Define Global Variables
*/
const navigation = document.getElementById('navbar__list');
const section =document.querySelectorAll('section');

/**
 * End Global Variables
*/

// build the nav
const docFragment = document.createDocumentFragment();
  section.forEach(function (section) {
    listItem = document.createElement("li");
    listItem.innerHTML = `<li> <a a href = "#${section.id}" data-nav= "${section.id}" class="menu__link">${section.dataset.nav}</a>`;
    docFragment.appendChild(listItem);
  });
  navigation.appendChild(docFragment);



// Add class 'active' to section when near top of viewport
// The section will be active when it is viewed by the user

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-150px 0px 0px 150px"
};

  const observer = new IntersectionObserver(function (entries, observer) {
    section.forEach(active=> {
      if (!active.isIntersecting) {
        active.classList.add("your-active-class");
      } else {
       active.classList.remove("your-active-class");

      }
    })
  }, options);

section.forEach(section => {
  observer.observe(section);
});

  
// scroll to the apropriate section smoothly after clicking on the nav bar 
function scrollToSection(event) {
  event.preventDefault();
  const section = document.getElementById(`${event.target.dataset.nav}`)
  section.scrollIntoView({ behavior: "smooth", block: "center" });
};
navigation.addEventListener("click", scrollToSection);


