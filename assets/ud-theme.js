document.addEventListener("DOMContentLoaded", () => {
  // CART
  // Open Cart
  document.querySelectorAll(".ud-toggle-cart").forEach((el) => {
    el.addEventListener("click", () => {
      let headerHeight = document.getElementById("ud-cart-header").offsetHeight;
      let footerHeight =
        document.getElementById("ud-cart-checkout").offsetHeight;
      let height = headerHeight + footerHeight;

      setTimeout(() => {
        //$('.ud-cart-items').css({'height': 'calc(100vh - ' + height + 'px)', 'margin-top': headerHeight + 'px'});
        document.body.classList.toggle("ud-cart-open");
        document.body
          .querySelector(".ud-cart-menu")
          .classList.toggle("ud-open");

        // TODO: I have just no idea what this collapse function is for, unsure if it works
        // now that jQuery is removed
        document.getElementById("navbarContentAlt").collapse("hide");
        // $('#navbarContentAlt').collapse('hide');
        // initRipple();
      }, 250);
    });
  });

  // Close Cart
  document.querySelectorAll(".ud-close-cart").forEach((el) => {
    el.addEventListener("click", () => {
      document.querySelector(".ud-cart-menu").classList.remove("ud-open");
      document.body.classList.remove("ud-cart-open");
    });
  });

  // Open cart if url contains #CART
  if (window.location.href.includes("#cart")) {
    document.querySelector(".ud-toggle-cart").click();
  }

  // Swatches
  document.querySelectorAll(".swatches .color").forEach((el) => {
    if (brightnessByColor(el.style["background-color"]) > 200) {
      el.style["box-shadow"] = "0 0px 3px rgba(0,0,0,0.5)";
    }
  });

  /**
   * Calculate brightness value by RGB or HEX color.
   * @param color (String) The color value in RGB or HEX (for example: #000000 || #000 || rgb(0,0,0) || rgba(0,0,0,0))
   * @returns (Number) The brightness value (dark) 0 ... 255 (light)
   */
  function brightnessByColor(color) {
    var color = "" + color,
      isHEX = color.indexOf("#") == 0,
      isRGB = color.indexOf("rgb") == 0;
    if (isHEX) {
      const hasFullSpec = color.length == 7;
      var m = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
      if (m)
        var r = parseInt(m[0] + (hasFullSpec ? "" : m[0]), 16),
          g = parseInt(m[1] + (hasFullSpec ? "" : m[1]), 16),
          b = parseInt(m[2] + (hasFullSpec ? "" : m[2]), 16);
    }
    if (isRGB) {
      var m = color.match(/(\d+){3}/g);
      if (m)
        var r = m[0],
          g = m[1],
          b = m[2];
    }
    if (typeof r != "undefined") return (r * 299 + g * 587 + b * 114) / 1000;
  }

  // FIXED HEADER Watch Fixed Navbar Height and Adjust top padding of MainContent
  // const resizeObserver = new ResizeObserver(entries => {
  //   for (const entry of entries) {
  //     if(entry.contentRect) {
  //       $('#MainContent').css('margin-top', entry.contentRect.height);
  //     }
  //   }
  // });
  // resizeObserver.observe($('#HeaderContainer')[0]);
});
