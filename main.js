const config = {
  type: "carousel",
  startAt: 0,
  perView: 4,
};
new Glide(".glide", config).mount();

const openTitles = document.querySelectorAll(".content-introduce-each-col");

for (const openTitle of openTitles) {
  function activeArrow() {
    openTitle.classList.add("active");
  }
  function unActiveArrow() {
    openTitle.classList.remove("active");
  }
  openTitle.addEventListener("click", (event) => {
    const wasActive = openTitle.classList.contains("active");
    openTitles.forEach((openTitle) => {
      openTitle.classList.remove("active");
    });
    if (!wasActive) {
      openTitle.classList.add("active");
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Responsive JS

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    const config = {
      type: "carousel",
      startAt: 0,
      perView: 3,
    };
    new Glide(".glide", config).mount();

    const menu = document.querySelector(".header-menu-button");
    const headerNavbar = document.querySelector(".header-navbar");
    const nav = document.querySelector("#nav");
    const navList = document.querySelector("#nav li");

    function showMenu() {
      headerNavbar.classList.add("active");
      nav.classList.add("active");
      navList.classList.add("active");
      window.onscroll = function () { window.scrollTo(0,0); };
    };
    
    function hideMenu() {
      headerNavbar.classList.remove("active");
      nav.classList.remove("active");
      navList.classList.remove("active");
      window.onscroll = function () { window.scrollTo(); };
    }

    menu.addEventListener("click", showMenu);
    headerNavbar.addEventListener("click", hideMenu);

    nav.addEventListener("click", function (e) {
        e.stopPropagation();
    })

  } else {
    console.warn('Something went wrong!!!!')
  }
}


var x = window.matchMedia("(max-width: 1000px)");
myFunction(x);
