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
  const servicesBtn = document.querySelector(".services__btn");
  const servicesText = document.querySelector(".services__box .text.hidden");

  const characteristicsBtn = document.querySelector(".characteristics__btn");
  const characteristicsInner = document.querySelector(
    ".characteristics__inner"
  );

  const descriptionBtn = document.querySelector(".description__show");
  const descriptionContent = document.querySelector(".description__content");

  const engravingBtn = document.querySelectorAll(".engraving__btn-more");
  const engravingInfo = document.querySelectorAll(".engraving__info");

  if (servicesBtn && servicesText) {
    servicesBtn.addEventListener("click", () => {
      servicesBtn.classList.toggle("active");
      servicesText.classList.toggle("hidden");
    });
  }
  if (characteristicsBtn && characteristicsInner) {
    characteristicsBtn.addEventListener("click", () => {
      characteristicsBtn.classList.toggle("active");
      characteristicsInner.classList.toggle("show");
    });
  }
  if (descriptionBtn && descriptionContent) {
    descriptionBtn.addEventListener("click", () => {
      descriptionBtn.classList.toggle("active");
      descriptionContent.classList.toggle("show");
    });
  }
  if (engravingBtn && engravingInfo) {
    engravingBtn.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        engravingInfo[i].classList.toggle("show");
      });
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

  // select
  const select = document.querySelectorAll(".select");
  if (select) {
    select.forEach((sel) => {
      const selectHead = sel.querySelector(".select__head");

      if (selectHead) {
        const selectCurrent = sel.querySelector("p");
        const selectItem = sel.querySelectorAll(".select__item");

        selectHead.addEventListener("click", () => {
          sel.classList.toggle("open");
        });

        if (selectItem) {
          selectItem.forEach((item) => {
            item.addEventListener("click", () => {
              selectCurrent.textContent = item.textContent;
              sel.classList.remove("open");
            });
          });
        }

        window.addEventListener("click", (e) => {
          if (!e.target.closest(".select")) {
            sel.classList.remove("open");
          }
        });
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

  // filters modal
  const catalogModal = document.querySelector(".catalog__modal");
  const catalogselectBtn = document.querySelector(".catalog__select-btn");
  if (catalogModal && catalogselectBtn) {
    const catalogModalCloseBtn = document.querySelector(
      ".catalog__modal-close"
    );
    const catalogModalResetBtn = document.querySelector(
      ".catalog__modal-reset"
    );

    catalogselectBtn.addEventListener("click", () => {
      catalogModal.classList.add("open");
    });

    catalogModalCloseBtn.addEventListener("click", () => {
      catalogModal.classList.remove("open");
    });

    catalogModalResetBtn.addEventListener("click", () => {
      const checkbox = document.querySelectorAll(".checkbox input");

      checkbox.forEach((input) => {
        input.checked = false;
      });
    });
  }

  // modal cart
  const modalCart = document.querySelector(".modal--cart");
  const cartBtn = document.querySelector("#cart");
  if (modalCart && cartBtn) {
    cartBtn.addEventListener("click", () => {
      root.classList.add("lock");
      modalCart.classList.add("open");
    });

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        root.classList.remove("lock");
        modalCart.classList.remove("open");
      }
    });

    const closeBtn = modalCart.querySelector(".modal__close");

    closeBtn.addEventListener("click", () => {
      root.classList.remove("lock");
      modalCart.classList.remove("open");
    });
  }

  // modal login
  const modalLogin = document.querySelector(".modal--login");
  const loginModalBtn = document.querySelector("#profile-change-login");
  if (modalLogin && loginModalBtn) {
    loginModalBtn.addEventListener("click", () => {
      root.classList.add("lock");
      modalLogin.classList.add("open");
    });

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal--login")) {
        root.classList.remove("lock");
        modalLogin.classList.remove("open");
      }
    });

    const closeBtn = modalLogin.querySelector(".modal__close");

    closeBtn.addEventListener("click", () => {
      root.classList.remove("lock");
      modalLogin.classList.remove("open");
    });
  }

  // modal password
  const modalPassword = document.querySelector(".modal--password");
  const passwordModalBtn = document.querySelector("#profile-change-password");
  if (modalPassword && passwordModalBtn) {
    passwordModalBtn.addEventListener("click", () => {
      root.classList.add("lock");
      modalPassword.classList.add("open");
    });

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal--password")) {
        root.classList.remove("lock");
        modalPassword.classList.remove("open");
      }
    });

    const closeBtn = modalPassword.querySelector(".modal__close");

    closeBtn.addEventListener("click", () => {
      root.classList.remove("lock");
      modalPassword.classList.remove("open");
    });
  }

  // use bonuses button
  const modalBonuses = document.querySelector(".modal--bonus");
  const useBonusesBtn = document.querySelector("#use-bonuses");
  if (useBonusesBtn && modalBonuses) {
    useBonusesBtn.addEventListener("click", () => {
      modalBonuses.classList.add("open");
    });

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal--bonus")) {
        modalBonuses.classList.remove("open");
      }
    });

    const closeBtn = modalBonuses.querySelector(".modal__close");

    closeBtn.addEventListener("click", () => {
      modalBonuses.classList.remove("open");
    });
  }

  // history accordion
  const historyItem = document.querySelectorAll(".history__item");
  if (historyItem) {
    historyItem.forEach((item) => {
      const historyHead = item.querySelector(".history__head");

      historyHead.addEventListener("click", () => {
        item.classList.toggle("open");
      });
    });
  }

  // tabs
  const tabItem = document.querySelectorAll(".engraving__tab");
  const tabContent = document.querySelectorAll(".engraving__content");
  if (tabItem && tabContent) {
    tabItem.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        tabItem.forEach((el) => el.classList.remove("active"));
        tabContent.forEach((el) => el.classList.remove("active"));

        tab.classList.add("active");
        tabContent[i].classList.add("active");
      });
    });
  }

  // splide
  if (document.querySelector(".splideStart")) {
    var splideStart = new Splide(".splideStart", {
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

  if (
    document.querySelector(".splideProductMain") &&
    document.querySelector(".splideProductThumbnails")
  ) {
    var splideProductMain = new Splide(".splideProductMain", {
      type: "fade",
      heightRatio: 1,
      pagination: false,
      arrows: false,
      breakpoints: {
        1289: {
          arrows: false,
        },
        767: {
          width: "85%",
          arrows: true,
        },
      },
    });

    var splideProductThumbnails = new Splide(".splideProductThumbnails", {
      rewind: true,
      perPage: 3,
      isNavigation: true,
      gap: 30,
      focus: "center",
      pagination: false,
      width: "80%",
      dragMinThreshold: {
        mouse: 4,
        touch: 10,
      },
      breakpoints: {
        767: {
          destroy: true,
        },
      },
    });

    splideProductMain.sync(splideProductThumbnails);
    splideProductMain.mount();
    splideProductThumbnails.mount();
  }

  // gallery in tabs
  const galleryMainOptions = {
    type: "fade",
    height: 560,
    pagination: false,
    arrows: false,
    breakpoints: {
      767: {
        height: 250,
      },
    },
  };

  const galleryThumbOptions = {
    direction: "ttb",
    width: 120,
    height: 420,
    fixedHeight: 120,
    gap: 30,
    focus: "center",
    isNavigation: true,
    pagination: false,

    breakpoints: {
      767: {
        width: 60,
        height: 200,
        fixedHeight: 60,
        gap: 10,
      },
    },
  };

  if (
    document.querySelector(".splideKeyboardsMain") &&
    document.querySelector(".splideKeyboardsThumbnails")
  ) {
    var splideKeyboardsMain = new Splide(
      ".splideKeyboardsMain",
      galleryMainOptions
    );
    var splideKeyboardsThumbnails = new Splide(
      ".splideKeyboardsThumbnails",
      galleryThumbOptions
    );

    splideKeyboardsMain.sync(splideKeyboardsThumbnails);
    splideKeyboardsMain.mount();
    splideKeyboardsThumbnails.mount();
  }

  if (
    document.querySelector(".splideIpadMain") &&
    document.querySelector(".splideIpadThumbnails")
  ) {
    var splideIpadMain = new Splide(".splideIpadMain", galleryMainOptions);
    var splideIpadThumbnails = new Splide(
      ".splideIpadThumbnails",
      galleryThumbOptions
    );

    splideIpadMain.sync(splideIpadThumbnails);
    splideIpadMain.mount();
    splideIpadThumbnails.mount();
  }

  if (
    document.querySelector(".splideMacBookMain") &&
    document.querySelector(".splideMacBookThumbnails")
  ) {
    var splideMacBookMain = new Splide(
      ".splideMacBookMain",
      galleryMainOptions
    );
    var splideMacBookThumbnails = new Splide(
      ".splideMacBookThumbnails",
      galleryThumbOptions
    );

    splideMacBookMain.sync(splideMacBookThumbnails);
    splideMacBookMain.mount();
    splideMacBookThumbnails.mount();
  }

  if (
    document.querySelector(".splideAccessoriesMain") &&
    document.querySelector(".splideAccessoriesThumbnails")
  ) {
    var splideAccessoriesMain = new Splide(
      ".splideAccessoriesMain",
      galleryMainOptions
    );
    var splideAccessoriesThumbnails = new Splide(
      ".splideAccessoriesThumbnails",
      galleryThumbOptions
    );

    splideAccessoriesMain.sync(splideAccessoriesThumbnails);
    splideAccessoriesMain.mount();
    splideAccessoriesThumbnails.mount();
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
