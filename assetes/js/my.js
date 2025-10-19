$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,   // ✅ Show only 1 slide at a time
  slidesToScroll: 1, // ✅ Scroll 1 slide at a time
  autoplay: true,    // Optional: Auto play
  autoplaySpeed: 1000,
  arrows: true,      // Optional: Show next/prev arrows
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
