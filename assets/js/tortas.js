/* =========================================
   TORTAS ZANO
   Categorías + productos
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       ELEMENTOS
    ===================================== */

    const categoryButtons =
        document.querySelectorAll(
            ".torta-category-button"
        );


    const modal =
        document.getElementById(
            "tortas-modal"
        );


    const modalOverlay =
        modal?.querySelector(
            ".tortas-modal-overlay"
        );


    const modalClose =
        document.getElementById(
            "cerrar-tortas-modal"
        );


    const modalTitle =
        document.getElementById(
            "tortas-modal-title"
        );


    const productsContainer =
        document.getElementById(
            "tortas-modal-products"
        );


    /* =====================================
       COMPROBAR ELEMENTOS
    ===================================== */

    if (
        !modal ||
        !productsContainer
    ) {

        console.warn(
            "No se encontró el modal de Tortas."
        );

        return;

    }


    /* =====================================
       PRODUCTOS
    ===================================== */

    const productos = {


        /* =================================
           CHEESECAKES
        ================================== */

        cheesecake: [

            {
                id:
                    "cheesecake-chocolate",

                name:
                    "Cheesecake de chocolate",

                category:
                    "CHEESECAKE",

                image:
                    "assets/media/imagenes/tortas/cheesecake/cheesecake de chocolate.JPG",

                description:
                    "Cheesecake elaborado con harina de avena y almendras, crema de queso, chocolate sin azúcar y chantilly.",

                price:
                    "Desde S/ 65"
            },


            {
                id:
                    "cheesecake-maracumango",

                name:
                    "Cheesecake de maracumango",

                category:
                    "CHEESECAKE",

                image:
                    "assets/media/imagenes/tortas/cheesecake/cheesecake de maracumango.JPG",

                description:
                    "Cheesecake con pulpas de mango y maracuyá, decorado con chantilly.",

                price:
                    "Desde S/ 65"
            },


            {
                id:
                    "cheesecake-pistacho",

                name:
                    "Cheesecake de pistacho",

                category:
                    "CHEESECAKE",

                image:
                    "assets/media/imagenes/tortas/cheesecake/cheesecake de pistacho.JPG",

                description:
                    "Cheesecake con crema de pistacho artesanal y trozos de pistacho.",

                price:
                    "Desde S/ 65"
            }

        ],


        /* =================================
           TORTAS
        ================================== */

        tortas: [

            {
                id:
                    "torta-chocolate",

                name:
                    "Torta de chocolate",

                category:
                    "TORTA",

                image:
                    "assets/media/imagenes/tortas/tortas/torta de chocolate.JPG",

                description:
                    "Elaborada con mix de harinas gluten free, manjar y fudge de la casa.",

                price:
                    "Desde S/ 55"
            },


            {
                id:
                    "torta-zanahoria",

                name:
                    "Torta de zanahoria",

                category:
                    "TORTA",

                image:
                    "assets/media/imagenes/tortas/tortas/torta de zanahoria.JPG",

                description:
                    "Elaborada con mix de harinas gluten free, frosting cítrico y frutos secos.",

                price:
                    "Desde S/ 55"
            }

        ],


        /* =================================
           QUEQUES
        ================================== */

        queques: [

            {
                id:
                    "queque-de-arandano-y-limon",

                name:
                    "Queque de arándano y limón",

                category:
                    "QUEQUE",

                image:
                    "assets/media/imagenes/tortas/queque/queque de arandano y limon.JPG",

                description:
                    "Elaborado con harina de avena e integral, arándanos frescos y jugo de limón.",

                price:
                    "S/ 70"
            },


            {
                id:
                    "queque-naranja",

                name:
                    "Queque de naranja",

                category:
                    "QUEQUE",

                image:
                    "assets/media/imagenes/tortas/queque/queque de naranja.JPG",

                description:
                    "Elaborado con mix de harina gluten free, jugo y naranja deshidratada.",

                price:
                    "S/ 70"
            },


            {
                id:
                    "queque-platano",

                name:
                    "Queque de plátano",

                category:
                    "QUEQUE",

                image:
                    "assets/media/imagenes/tortas/queque/queque de platano.JPG",

                alt:
                    "Queque de plátano ZANO",

                description:
                    "Elaborado con plátano maduro, mix de harinas gluten free y chispas de chocolate.",

                price:
                    "S/ 70"
            },


            {
                id:
                    "queque-zanahoria",

                name:
                    "Queque de zanahoria",

                category:
                    "QUEQUE",

                image:
                    "assets/media/imagenes/tortas/queque/queque de zanahoria.JPG",

                description:
                    "Elaborado con mix de harinas gluten free, frosting cítrico y pecanas.",

                price:
                    "S/ 70"
            }

        ],


        /* =================================
           PIONONO
        ================================== */

        pionono: [

            {
                id:
                    "pionono-chocolucuma",

                name:
                    "Pionono de chocolúcuma",

                category:
                    "ESPECIAL",

                image:
                    "assets/media/imagenes/tortas/pionono/pionono de chocolucuma.JPG",

                description:
                    "Biscocho integral enrollado con manjar de lúcuma y chocolate sin azúcar.",

                price:
                    "S/ 110"
            }

        ]

    };


    /* =====================================
       NOMBRES DE CATEGORÍAS
    ===================================== */

    const categoryNames = {

        cheesecake:
            "Cheesecakes",

        tortas:
            "Tortas",

        queques:
            "Queques",

        pionono:
            "Pionono"

    };


    /* =====================================
       ABRIR MODAL
    ===================================== */

    const openModal = (
        category
    ) => {


        const products =
            productos[category];


        /* ---------------------------------
           COMPROBAR CATEGORÍA
        --------------------------------- */

        if (!products) {

            console.warn(
                `Categoría no encontrada: ${category}`
            );

            return;

        }


        /* ---------------------------------
           TÍTULO
        --------------------------------- */

        modalTitle.textContent =
            categoryNames[category];


        /* ---------------------------------
           LIMPIAR PRODUCTOS
        --------------------------------- */

        productsContainer.innerHTML =
            "";


        /* ---------------------------------
           CREAR PRODUCTOS
        --------------------------------- */

        products.forEach(
            (product) => {


                const card =
                    document.createElement(
                        "article"
                    );


                /* -------------------------
                   CLASE DE LA CARD
                ------------------------- */

                card.className =
                    "tortas-product-card";


                /* -------------------------
                   CATEGORÍA
                ------------------------- */

                card.dataset.category =
                    category;


                /* -------------------------
                   CONTENIDO
                ------------------------- */

                card.innerHTML = `

                    <div class="tortas-product-image">

                        <img
                            src="${product.image}"
                            alt="${product.alt || product.name + " ZANO"}"
                            loading="lazy"
                        >

                    </div>


                    <div class="tortas-product-content">

                        <span class="tortas-product-category">
                            ${product.category}
                        </span>


                        <h3>
                            ${product.name}
                        </h3>


                        <p class="tortas-product-description">
                            ${product.description}
                        </p>


                        <div class="tortas-product-footer">

                            <span class="tortas-product-price">
                                ${product.price}
                            </span>

                        </div>

                    </div>

                `;


                /* -------------------------
                   AGREGAR CARD
                ------------------------- */

                productsContainer.appendChild(
                    card
                );

            }
        );


        /* ---------------------------------
           MOSTRAR MODAL
        --------------------------------- */

        modal.classList.add(
            "active"
        );


        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        /* ---------------------------------
           BLOQUEAR SCROLL DE LA PÁGINA
        --------------------------------- */

        document.body.style.overflow =
            "hidden";

    };


    /* =====================================
       CERRAR MODAL
    ===================================== */

    const closeModal = () => {


        modal.classList.remove(
            "active"
        );


        modal.setAttribute(
            "aria-hidden",
            "true"
        );


        /* ---------------------------------
           RESTAURAR SCROLL
        --------------------------------- */

        document.body.style.overflow =
            "";

    };


    /* =====================================
       BOTONES DE CATEGORÍA
    ===================================== */

    categoryButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {


                    const category =
                        button.dataset.category;


                    openModal(
                        category
                    );

                }
            );

        }
    );


    /* =====================================
       CERRAR CON BOTÓN
    ===================================== */

    modalClose?.addEventListener(
        "click",
        closeModal
    );


    /* =====================================
       CERRAR CON OVERLAY
    ===================================== */

    modalOverlay?.addEventListener(
        "click",
        closeModal
    );


    /* =====================================
       CERRAR CON ESC
    ===================================== */

    document.addEventListener(
        "keydown",
        (event) => {


            if (
                event.key === "Escape" &&
                modal.classList.contains(
                    "active"
                )
            ) {

                closeModal();

            }

        }
    );

});