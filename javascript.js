const menuBtn = document.querySelector(".open-menu");
const cancelBtn = document.querySelector(".close-menu");
const navLinkBtns = document.querySelectorAll(".nav .btn");
const nav = document.querySelector(".nav");
const navListItems = document.querySelectorAll(".nav-item");
const headerTag = document.querySelector("header");
let darkMode = JSON.parse(localStorage.getItem('darkMode'));
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const lightModeToggle = document.querySelector('#light-mode-toggle')

const allNavLinks = [...navListItems, ...navLinkBtns];
const toggleModeBtns = [lightModeToggle,darkModeToggle];
// toggle
function toggleMenu() {
  nav.classList.toggle("show");

  allNavLinks.forEach((el, index) => {
    if (!el.style.animation) {
      el.style.animation = `slideX 0.5s ease forwards ${index / 20 + 1}s `;
    } else {
      el.style.animation = "";
    }
  });
  menuBtn.classList.toggle("notShowMenu");
  cancelBtn.classList.toggle("notShowMenu");
};

const arrayBtn = [menuBtn, cancelBtn];
arrayBtn.forEach((el) => el.addEventListener("click", toggleMenu));


allNavLinks.forEach((el) => {
  el.addEventListener("click", () => {
    if (Number(window.innerWidth) < 768) {
      toggleMenu();
    }
  });
});

// nav background
window.addEventListener("scroll", () => {
  headerTag.classList.toggle("sticky", window.scrollY > 0);
  
});

// dark mode
const enableDarkMode = () =>{
  document.body.classList.add("darkMode");
  darkModeToggle.classList.add("showDark")
  lightModeToggle.classList.add("showDark")
};


const toggleDarkModeFunc = () => {
  document.body.classList.toggle("darkMode");
  darkModeToggle.classList.toggle("showDark")
  lightModeToggle.classList.toggle("showDark")
  if(!darkMode)
  {
    localStorage.setItem("darkMode",true)
  }else {
    localStorage.setItem("darkMode",false)
  }
}


toggleModeBtns.forEach(el => {
  el.addEventListener("click", () => {
    toggleDarkModeFunc()
  })
});

window.addEventListener("load", () => {
  headerTag.classList.toggle("sticky", window.scrollY > 0);
  if(darkMode){
    enableDarkMode();
  }

});

// Smooth Scrolling
$('.nav a, a.btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      500
    );
  }
});

