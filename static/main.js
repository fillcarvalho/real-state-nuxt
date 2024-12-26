addEventListener("load", (event) => {});

onload = (event) => {
  // slider js
  silder();

  // sticky hedder
  stickystickyHeader();

// search controller
  search();

// mobile menu
  drawer();

// accordion
  accordions();

//glightbox
  GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: false,
    selector: ".glightbox",
    slideEffect: "fade",
    videosWidth: "800px",
  });
  GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: false,
    selector: ".glightbox2",
    slideEffect: "fade",
    videosWidth: "800px",
  });
  GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: false,
    selector: ".glightbox3",
    slideEffect: "fade",
    videosWidth: "800px",
  });
};
