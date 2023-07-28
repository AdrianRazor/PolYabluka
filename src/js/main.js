document.addEventListener("DOMContentLoaded", function (event) {
  const root = document.documentElement;

  // dropdown
  const dropdown = document.querySelectorAll(".dropdown");
  if (dropdown) {
    dropdown.forEach((drop) => {
      const head = drop.querySelector(".dropdown__head");
      const current = drop.querySelector(".dropdown__current");
      const icon = drop.querySelectorAll(".dropdown__icon");

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

      if (current && icon) {
        icon.forEach((el) => {
          el.addEventListener("click", () => {
            const elUse = el.querySelector("use");
            const elValue = elUse.getAttribute("xlink:href");

            const currentUse = current.querySelector("use");
            const currentValue = currentUse.getAttribute("xlink:href");

            currentUse.setAttribute("xlink:href", elValue);
            elUse.setAttribute("xlink:href", currentValue);

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
