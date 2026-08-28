/* =========================================
   MODAL CARTA ZANO
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       ELEMENTOS DEL MODAL
    ===================================== */

    const modal =
        document.getElementById("carta-modal");

    const overlay =
        modal?.querySelector(".carta-modal-overlay");

    const closeButton =
        document.getElementById("cerrar-carta");

    const image =
        document.getElementById("carta-modal-image");

    const imageWrapper =
        document.getElementById("carta-image-wrapper");

    const title =
        document.getElementById("carta-modal-title");

    const prevButton =
        document.getElementById("carta-prev");

    const nextButton =
        document.getElementById("carta-next");

    const dotsContainer =
        document.getElementById("carta-modal-dots");

    const counter =
        document.getElementById("carta-modal-counter");

    const openFullButton =
        document.getElementById("abrir-carta");

    const categoryButtons =
        document.querySelectorAll(
            ".carta-card-button"
        );


    /* =====================================
       CONTROLES DE ZOOM
    ===================================== */

    const zoomInButton =
        document.getElementById("carta-zoom-in");

    const zoomOutButton =
        document.getElementById("carta-zoom-out");

    const zoomResetButton =
        document.getElementById("carta-zoom-reset");


    /* =====================================
       COMPROBAR ELEMENTOS
    ===================================== */

    if (!modal || !image || !imageWrapper) {
        return;
    }


    /* =====================================
       PÁGINAS DE LA CARTA
    ===================================== */

    const pages = [

        {
            category: "Dulces",

            image:
                "assets/media/imagenes/dulces1.jpeg",

            alt:
                "Carta de dulces ZANO - página 1"
        },


        {
            category: "Dulces",

            image:
                "assets/media/imagenes/dulces2.jpeg",

            alt:
                "Carta de dulces ZANO - página 2"
        },


        {
            category: "Salados",

            image:
                "assets/media/imagenes/salados.jpeg",

            alt:
                "Carta de salados ZANO"
        },


        {
            category: "Bebidas",

            image:
                "assets/media/imagenes/bebidas.jpeg",

            alt:
                "Carta de bebidas ZANO"
        }

    ];


    /* =====================================
       ESTADO
    ===================================== */

    let currentPage = 0;

    let currentZoom = 1;


    /* =====================================
       CONFIGURACIÓN DEL ZOOM
    ===================================== */

    const MIN_ZOOM = 1;

    const MAX_ZOOM = 2.5;

    const ZOOM_STEP = 0.25;


    /* =====================================
       ACTUALIZAR ZOOM
    ===================================== */

    const updateZoom = () => {

        image.style.transform =
            `scale(${currentZoom})`;


        imageWrapper.classList.toggle(
            "zoomed",
            currentZoom > 1
        );


        if (zoomResetButton) {

            zoomResetButton.textContent =
                `${Math.round(currentZoom * 100)}%`;

        }

    };


    /* =====================================
       AUMENTAR ZOOM
    ===================================== */

    const zoomIn = () => {

        currentZoom =
            Math.min(
                currentZoom + ZOOM_STEP,
                MAX_ZOOM
            );

        updateZoom();

    };


    /* =====================================
       REDUCIR ZOOM
    ===================================== */

    const zoomOut = () => {

        currentZoom =
            Math.max(
                currentZoom - ZOOM_STEP,
                MIN_ZOOM
            );

        updateZoom();

    };


    /* =====================================
       RESTABLECER ZOOM
    ===================================== */

    const resetZoom = () => {

        currentZoom = MIN_ZOOM;

        image.style.transform =
            "scale(1)";


        imageWrapper.classList.remove(
            "zoomed"
        );


        if (zoomResetButton) {

            zoomResetButton.textContent =
                "100%";

        }

    };


    /* =====================================
       CREAR PUNTOS
    ===================================== */

    const createDots = () => {

        if (!dotsContainer) {
            return;
        }


        dotsContainer.innerHTML = "";


        pages.forEach((page, index) => {

            const dot =
                document.createElement("button");


            dot.type = "button";

            dot.className =
                "carta-modal-dot";


            dot.setAttribute(
                "aria-label",
                `Ver página ${index + 1}`
            );


            dot.addEventListener(
                "click",
                () => {
                    showPage(index);
                }
            );


            dotsContainer.appendChild(dot);

        });

    };


    /* =====================================
       MOSTRAR PÁGINA
    ===================================== */

    const showPage = (index) => {

        /* -------------------------------
           CONTROLAR LÍMITES
        -------------------------------- */

        if (index < 0) {

            index =
                pages.length - 1;

        }


        if (index >= pages.length) {

            index = 0;

        }


        currentPage = index;


        const page =
            pages[currentPage];


        /* -------------------------------
           CAMBIAR IMAGEN
        -------------------------------- */

        image.src =
            page.image;

        image.alt =
            page.alt;


        /* -------------------------------
           CAMBIAR TÍTULO
        -------------------------------- */

        if (title) {

            title.textContent =
                page.category;

        }


        /* -------------------------------
           ACTUALIZAR CONTADOR
        -------------------------------- */

        if (counter) {

            counter.textContent =
                `${currentPage + 1} / ${pages.length}`;

        }


        /* -------------------------------
           ACTUALIZAR PUNTOS
        -------------------------------- */

        if (dotsContainer) {

            const dots =
                dotsContainer.querySelectorAll(
                    ".carta-modal-dot"
                );


            dots.forEach((dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === currentPage
                );

            });

        }


        /* -------------------------------
           RESTABLECER ZOOM
        -------------------------------- */

        resetZoom();

    };


    /* =====================================
       ABRIR MODAL
    ===================================== */

    const openModal = (page = 0) => {

        showPage(page);


        modal.classList.add("active");


        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    };


    /* =====================================
       CERRAR MODAL
    ===================================== */

    const closeModal = () => {

        modal.classList.remove("active");


        modal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "";


        resetZoom();

    };


    /* =====================================
       BOTÓN CARTA COMPLETA
    ===================================== */

    if (openFullButton) {

        openFullButton.addEventListener(
            "click",
            () => {
                openModal(0);
            }
        );

    }


    /* =====================================
       BOTONES DE CATEGORÍAS
    ===================================== */

    categoryButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const category =
                    button.dataset.category;


                let pageIndex = 0;


                /* ---------------------------
                   BUSCAR CATEGORÍA
                ---------------------------- */

                if (category) {

                    pageIndex =
                        pages.findIndex(
                            page =>
                                page.category
                                    .toLowerCase() ===
                                category.toLowerCase()
                        );

                }


                if (pageIndex < 0) {
                    pageIndex = 0;
                }


                openModal(pageIndex);

            }
        );

    });


    /* =====================================
       BOTÓN SIGUIENTE
    ===================================== */

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => {

                showPage(
                    currentPage + 1
                );

            }
        );

    }


    /* =====================================
       BOTÓN ANTERIOR
    ===================================== */

    if (prevButton) {

        prevButton.addEventListener(
            "click",
            () => {

                showPage(
                    currentPage - 1
                );

            }
        );

    }


    /* =====================================
       CERRAR CON BOTÓN
    ===================================== */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeModal
        );

    }


    /* =====================================
       CERRAR CON OVERLAY
    ===================================== */

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeModal
        );

    }


    /* =====================================
       ZOOM +
    ===================================== */

    if (zoomInButton) {

        zoomInButton.addEventListener(
            "click",
            zoomIn
        );

    }


    /* =====================================
       ZOOM -
    ===================================== */

    if (zoomOutButton) {

        zoomOutButton.addEventListener(
            "click",
            zoomOut
        );

    }


    /* =====================================
       RESET ZOOM
    ===================================== */

    if (zoomResetButton) {

        zoomResetButton.addEventListener(
            "click",
            resetZoom
        );

    }


    /* =====================================
       ZOOM CON RUEDA
    ===================================== */

    imageWrapper.addEventListener(
        "wheel",
        (event) => {

            if (!modal.classList.contains("active")) {
                return;
            }


            event.preventDefault();


            if (event.deltaY < 0) {

                zoomIn();

            } else {

                zoomOut();

            }

        },
        {
            passive: false
        }
    );


    /* =====================================
       TECLADO
    ===================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !modal.classList.contains("active")
            ) {
                return;
            }


            /* ESC */

            if (event.key === "Escape") {

                closeModal();

            }


            /* SIGUIENTE */

            if (event.key === "ArrowRight") {

                showPage(
                    currentPage + 1
                );

            }


            /* ANTERIOR */

            if (event.key === "ArrowLeft") {

                showPage(
                    currentPage - 1
                );

            }


            /* ZOOM + */

            if (
                event.key === "+" ||
                event.key === "="
            ) {

                zoomIn();

            }


            /* ZOOM - */

            if (event.key === "-") {

                zoomOut();

            }


            /* ZOOM RESET */

            if (event.key === "0") {

                resetZoom();

            }

        }
    );


    /* =====================================
       INICIALIZAR
    ===================================== */

    createDots();

    showPage(0);

});