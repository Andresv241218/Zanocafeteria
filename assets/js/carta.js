/* =========================================
   CARTA ZANO
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       CARRUSELES
    ===================================== */

    const sliders = document.querySelectorAll(".carta-slider");


    sliders.forEach((slider) => {

        const slides = slider.querySelectorAll(".carta-slide");

        const prevButton = slider.querySelector(".carta-slider-prev");

        const nextButton = slider.querySelector(".carta-slider-next");

        const dots = slider.querySelectorAll(".carta-dot");

        let currentSlide = 0;


        /* ================================
           MOSTRAR SLIDE
        ================================= */

        const showSlide = (index) => {

            currentSlide = index;


            slides.forEach((slide, i) => {

                slide.classList.toggle(
                    "active",
                    i === currentSlide
                );

            });


            dots.forEach((dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === currentSlide
                );

            });

        };


        /* ================================
           SIGUIENTE
        ================================= */

        const nextSlide = () => {

            const nextIndex =
                (currentSlide + 1) % slides.length;

            showSlide(nextIndex);

        };


        /* ================================
           ANTERIOR
        ================================= */

        const previousSlide = () => {

            const previousIndex =
                (currentSlide - 1 + slides.length)
                % slides.length;

            showSlide(previousIndex);

        };


        /* ================================
           BOTÓN SIGUIENTE
        ================================= */

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                nextSlide
            );

        }


        /* ================================
           BOTÓN ANTERIOR
        ================================= */

        if (prevButton) {

            prevButton.addEventListener(
                "click",
                previousSlide
            );

        }


        /* ================================
           INDICADORES
        ================================= */

        dots.forEach((dot, index) => {

            dot.addEventListener(
                "click",
                () => showSlide(index)
            );

        });


        /* ================================
           SWIPE EN MÓVIL
        ================================= */

        let touchStartX = 0;

        let touchEndX = 0;


        slider.addEventListener(
            "touchstart",
            (event) => {

                touchStartX =
                    event.changedTouches[0].screenX;

            },
            { passive: true }
        );


        slider.addEventListener(
            "touchend",
            (event) => {

                touchEndX =
                    event.changedTouches[0].screenX;

                const difference =
                    touchStartX - touchEndX;


                if (Math.abs(difference) < 50) {
                    return;
                }


                if (difference > 0) {
                    nextSlide();
                } else {
                    previousSlide();
                }

            },
            { passive: true }
        );


        /* ================================
           INICIALIZAR
        ================================= */

        showSlide(0);

    });

});
