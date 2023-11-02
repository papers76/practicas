var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor : true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  
function Alerta() {  
  Swal.fire({
    title: '¡Tu información ha sido enviada correctamente!',
    text: 'Nuestro personal se pondrá en contacto contigo pronto...',
    width: '50%',
    backdrop: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    showConfirmButton: true,
    confirmButtonColor: '#60CA48',
    confirmButtonText: 'Continuar...',
    closeButtonArialLabel: 'Cerrar Alerta...',
    icon: 'success',
    timer: 5000
  });
} 
