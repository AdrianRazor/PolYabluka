document.addEventListener("DOMContentLoaded", function (event) {
  const root = document.documentElement;

  // dropdown
  const dropdown = document.querySelectorAll(".dropdown");
  if (dropdown) {
    dropdown.forEach((drop) => {
      const head = drop.querySelector(".dropdown__head");
      const current = drop.querySelector(".dropdown__current");
      const item = drop.querySelectorAll(".dropdown__item");

      if (head) {
        head.addEventListener("click", () => {
          if (drop.classList.contains("open")) {
            drop.classList.remove("open");
          } else {
            dropdown.forEach((drops) => {
              drops.classList.remove("open");
            });

            drop.classList.add("open");
          }
        });
      }

      if (current && item) {
        item.forEach((el) => {
          el.addEventListener("click", () => {
            const icon = el.querySelector(".dropdown__icon");
            const text = el.querySelector(".dropdown__text");

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

              const currentText = current.querySelector(".dropdown__text");
              const currentValue = currentText.textContent;

              currentText.textContent = itemValue;
              text.textContent = currentValue;
            }

            drop.classList.remove("open");
          });
        });
      }

      window.addEventListener("click", (e) => {
        if (!e.target.closest(".dropdown")) {
          drop.classList.remove("open");
        }
      });
    });
  }

  console.log("DOM fully loaded and parsed");
});
