import { partnerLogos, productList, partnerLogoBasePath } from "./data.js";

// Nav
$(function () {
  //hide show nav
  $(".nav").hideScroll();

  //mobile menu
  const toggleBtn = $("#toggle_btn");
  const dropdownMenu = $(".dropdown-menu");

  toggleBtn.click(() => {
    dropdownMenu.toggleClass("open");
  });
});

// Partner Logos
$(function () {
  const container = document.getElementById("partner-logo-list");
  partnerLogos.forEach((logo) => {
    const img = document.createElement("img");

    img.src = partnerLogoBasePath + logo.fileName;
    img.alt = logo.alt;
    img.classList.add("logo-ticket-image");
    container.appendChild(img);
  });
});

// Products
$(function () {
  // Thêm active và li đầu tiên
  $("li:first").addClass("activeTab");

  // Đổi màu activeTab
  $("li").on("click", function () {
    $("li").removeClass("activeTab");
    $("div[id=products-tabs] ul .r-tabs-state-active").addClass("activeTab");
  });

  $("#products-tabs").responsiveTabs({
    animation: "slide",
  });
});
