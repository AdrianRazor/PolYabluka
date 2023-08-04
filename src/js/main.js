document.addEventListener("DOMContentLoaded", function (event) {
  const root = document.documentElement;

  // header
  const header = document.querySelector(".header__mobile");
  const burger = document.querySelector(".header__burger");
  if (burger && header) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      header.classList.toggle("open");
    });

    const headerClose = document.querySelector(".header__close");
    if (headerClose) {
      headerClose.addEventListener("click", () => {
        burger.classList.remove("active");
        header.classList.remove("open");
      });
    }

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("header__mobile")) {
        burger.classList.remove("active");
        header.classList.remove("open");
      }
    });
  }

  // lang
  const lang = document.querySelectorAll(".lang");
  if (lang) {
    lang.forEach((langDrop) => {
      const wrapper = langDrop.querySelector(".lang__wrapper");
      const body = langDrop.querySelector(".lang__body");
      const head = langDrop.querySelector(".lang__head");
      const current = langDrop.querySelector(".lang__current");
      const item = langDrop.querySelectorAll(".lang__item");

      if (head) {
        head.addEventListener("click", () => {
          if (langDrop.classList.contains("open")) {
            langDrop.classList.remove("open");
            wrapper.style.height = 0;
          } else {
            lang.forEach((langDrops) => {
              langDrops.classList.remove("open");
              wrapper.style.height = 0;
            });

            langDrop.classList.add("open");
            wrapper.style.height = `${body.scrollHeight}px`;
          }
        });
      }

      if (current && item) {
        item.forEach((el) => {
          el.addEventListener("click", () => {
            const icon = el.querySelector(".lang__icon");
            const text = el.querySelector(".lang__text");

            if (icon) {
              const itemUse = icon.querySelector("use");
              const itemValue = itemUse.getAttribute("xlink:href");

              const currentUse = current.querySelector("use");
              const currentValue = currentUse.getAttribute("xlink:href");

              currentUse.setAttribute("xlink:href", itemValue);
              itemUse.setAttribute("xlink:href", currentValue);
            }

            if (text) {
              const itemValue = text.textContent;

              const currentText = current.querySelector(".lang__text");
              const currentValue = currentText.textContent;

              currentText.textContent = itemValue;
              text.textContent = currentValue;
            }

            langDrop.classList.remove("open");
          });
        });
      }

      window.addEventListener("click", (e) => {
        if (!e.target.closest(".lang")) {
          langDrop.classList.remove("open");
          wrapper.style.height = 0;
        }
      });
    });
  }

  // read more
  const servicesText = document.querySelector(".services__box .text.hidden");
  const servicesBtn = document.querySelector(".services__btn");
  if (servicesText && servicesBtn) {
    servicesBtn.addEventListener("click", () => {
      servicesText.classList.toggle("hidden");
      servicesBtn.classList.toggle("active");
    });
  }

  // chat
  const chat = document.querySelector(".chat");
  if (chat) {
    const chatBtn = chat.querySelector(".chat__btn");

    chatBtn.addEventListener("click", () => {
      chat.classList.toggle("open");
    });

    window.addEventListener("click", (e) => {
      if (!e.target.closest(".chat.open")) {
        chat.classList.remove("open");
      }
    });
  }

  // active buttons
  const cardBtn = document.querySelectorAll(".card__btn");
  if (cardBtn) {
    setActiveClass(cardBtn);
  }

  // sort
  const sort = document.querySelector(".sort");
  const sortHead = sort.querySelector(".sort__head");
  if (sort && sortHead) {
    const sortCurrent = sort.querySelector("p");
    const sortItem = sort.querySelectorAll(".sort__item");

    if (sortItem) {
      sortItem.forEach((item) => {
        item.addEventListener("click", () => {
          sortCurrent.textContent = item.textContent;
          sort.classList.remove("open");
        });
      });
    }

    sortHead.addEventListener("click", () => {
      sort.classList.toggle("open");
    });

    window.addEventListener("click", (e) => {
      if (!e.target.closest(".sort")) {
        sort.classList.remove("open");
      }
    });
  }

  // dropdown
  const dropdown = document.querySelectorAll(".dropdown");
  if (dropdown) {
    dropdown.forEach((drop) => {
      const dropdownHead = drop.querySelector(".dropdown__head");
      const dropdownItem = drop.querySelectorAll(".dropdown__item");

      dropdownHead.addEventListener("click", () => {
        drop.classList.toggle("open");
      });

      dropdownItem.forEach((item) => {
        item.addEventListener("click", () => {
          item.classList.toggle("active");
        });
      });
    });
  }

  // splide
  if (document.querySelector(".splideStart")) {
    var splideStart = new Splide(".splideStart", {
      type: "loop",
      height: 550,
      arrows: false,
      breakpoints: {
        1279: {
          height: 370,
        },
        767: {
          height: 230,
        },
      },
    });
    splideStart.mount();
  }

  if (document.querySelector(".splidePopular")) {
    var splidePopular = new Splide(".splidePopular", {
      type: "loop",
      perPage: 1,
      width: 200,
      gap: 15,
      pagination: false,

      mediaQuery: "min",
      breakpoints: {
        1280: {
          destroy: true,
        },
        768: {
          width: 560,
        },
        375: {
          perPage: 2,
          width: 280,
          gap: 20,
        },
      },
    });
    splidePopular.mount();
  }

  if (document.querySelector(".splideGoods")) {
    var splideGoods = new Splide(".splideGoods", {
      type: "loop",
      perPage: 4,
      perMove: 4,
      gap: 30,
      pagination: false,

      breakpoints: {
        1279: {
          width: "75%",
          perPage: 2,
          perMove: 2,
          gap: 15,
        },
        374: {
          perPage: 1,
          perMove: 1,
        },
      },
    });
    splideGoods.mount();
  }

  if (document.querySelector(".splideTestimonials")) {
    var splideTestimonials = new Splide(".splideTestimonials", {
      type: "loop",
      height: 430,
      perPage: 3,
      perMove: 3,
      gap: 30,
      pagination: false,

      breakpoints: {
        1279: {
          width: "82%",
          height: "auto",
          perPage: 1,
          perMove: 1,
        },
      },
    });
    splideTestimonials.mount();
  }

  function setActiveClass(element) {
    element.forEach((el) => {
      el.addEventListener("click", () => {
        el.classList.toggle("active");
      });
    });
  }

  console.log("DOM fully loaded and parsed");
});
