// Swiper JS
const swiper = new Swiper(".swiper", {
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });
  
  const menu = document.querySelector("nav .container ul.menu");
  const menuSm = document.querySelector("nav .container ul.menu2");
  /*==================== MENU ====================*/
  const menuBtn = document.querySelector("#menu-btn");
  const menu2 = document.querySelector("nav .container ul.menu2");
  const closeBtn = document.querySelector("#close-btn");
  
  menuBtn.addEventListener("click", () => {
    menu2.style.display = "block";
    menuBtn.classList.add("burg");
    closeBtn.style.display = "inline-block";
  });
  closeBtn.addEventListener("click", () => {
    menu2.style.display = "none";
    menuBtn.classList.remove("burg");
    closeBtn.style.display = "none";
  });
  
  //change color of clicked item in menu
  const navItems = menu.querySelectorAll("li");
  const changeActiveItems = () => {
    navItems.forEach((item) => {
      const link = item.querySelector("a");
      link.classList.remove("active");
    });
  };
  navItems.forEach((item) => {
    const link = item.querySelector("a");
    link.addEventListener("click", () => {
      changeActiveItems();
      link.classList.add("active");
    });
  });
  
  const navItemsSm = menuSm.querySelectorAll("li");
  const changeActiveItemsSm = () => {
    navItemsSm.forEach((item) => {
      const link = item.querySelector("a");
      link.classList.remove("active");
    });
  };
  navItemsSm.forEach((item) => {
    const link = item.querySelector("a");
    link.addEventListener("click", () => {
      changeActiveItemsSm();
      link.classList.add("active");
    });
  });
  
  /*==================== Read More ====================*/
  const readMore = document.querySelector(".read-more");
  const readLess = document.querySelector(".read-less");
  const readMoreContent = document.querySelector(".read-more-content");
  readMore.addEventListener("click", () => {
    readMoreContent.style.display = "block";
    readMore.style.display = "none";
    readLess.style.display = "block";
  });
  readLess.addEventListener("click", () => {
    readMoreContent.style.display = "none";
    readMore.style.display = "block";
    readLess.style.display = "none";
  });
  
  /*==================== Show/Hide Educations/Skills ====================*/
  const edItem = document.querySelectorAll("section.education .skill");
  const head = document.querySelector("section .education .skill .head");
  
  edItem.forEach((skill) => {
    skill.querySelector(".head").addEventListener("click", () => {
      skill.querySelector(".items").classList.toggle("show-items");
    });
  });
  
  window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("show-box-shadow", window.scrollY > 0);
  });
  