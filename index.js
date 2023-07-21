export function Slider() {
  return {
    oncreate: () => {
      // Inicializa Slick después de que los elementos del carrousel se hayan renderizado
      $(".slick-carousel").slick({
        // Configuración de Slick, aquí puedes personalizar el comportamiento del carrousel
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        lazyLoad: "ondemand",

        // Otros ajustes de configuración de Slick
      });
    },
    view: () => {
      return m("div", { class: "slick-carousel" }, [
        m("div", { class: "carousel-item" }, [
          m("img", {
            src: "https://source.unsplash.com/collection/881002",
            alt: "Imagen 1",
          }),
        ]),
        m("div", { class: "carousel-item" }, [
          m("img", {
            src: "https://source.unsplash.com/random",
            alt: "Imagen 2",
          }),
        ]),
        m("div", { class: "carousel-item" }, [
          m("img", {
            src: "https://source.unsplash.com/collection/881003",
            alt: "Imagen 2",
          }),
        ]),
      ]);
    },
  };
}
