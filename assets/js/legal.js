/* =========================================
   MODAL LEGAL - ZANO
   Términos y Política de Privacidad
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       ELEMENTOS
    ===================================== */

    const modal = document.getElementById(
        "legal-modal"
    );

    const overlay = document.getElementById(
        "legal-modal-overlay"
    );

    const closeButton = document.getElementById(
        "cerrar-legal-modal"
    );

    const title = document.getElementById(
        "legal-modal-title"
    );

    const subtitle = document.getElementById(
        "legal-modal-subtitle"
    );

    const terminos = document.getElementById(
        "legal-terminos"
    );

    const privacidad = document.getElementById(
        "legal-privacidad"
    );


    /* =====================================
       BOTONES DE TÉRMINOS
       Formulario + Footer
    ===================================== */

    const abrirTerminos =
        document.querySelectorAll(
            "#abrir-terminos, #footer-terminos"
        );


    /* =====================================
       BOTONES DE PRIVACIDAD
       Formulario + Footer
    ===================================== */

    const abrirPrivacidad =
        document.querySelectorAll(
            "#abrir-privacidad, #footer-privacidad"
        );


    /* =====================================
       COMPROBAR ELEMENTOS
    ===================================== */

    if (
        !modal ||
        !overlay ||
        !closeButton ||
        !title ||
        !subtitle ||
        !terminos ||
        !privacidad
    ) {

        console.warn(
            "No se encontraron todos los elementos del modal legal."
        );

        return;

    }


    /* =====================================
       ABRIR MODAL
    ===================================== */

    const openLegalModal = (type) => {

        /* ---------------------------------
           OCULTAR TODO EL CONTENIDO
        --------------------------------- */

        terminos.classList.remove(
            "active"
        );

        privacidad.classList.remove(
            "active"
        );


        /* ---------------------------------
           TÉRMINOS
        --------------------------------- */

        if (type === "terminos") {

            terminos.classList.add(
                "active"
            );

            title.textContent =
                "Términos y condiciones";

            subtitle.textContent =
                "TÉRMINOS Y CONDICIONES";

        }


        /* ---------------------------------
           PRIVACIDAD
        --------------------------------- */

        if (type === "privacidad") {

            privacidad.classList.add(
                "active"
            );

            title.textContent =
                "Política de privacidad";

            subtitle.textContent =
                "POLÍTICA DE PRIVACIDAD";

        }


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
           BLOQUEAR SCROLL
        --------------------------------- */

        document.body.style.overflow =
            "hidden";

    };


    /* =====================================
       CERRAR MODAL
    ===================================== */

    const closeLegalModal = () => {

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
       ABRIR TÉRMINOS
    ===================================== */

    abrirTerminos.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    openLegalModal(
                        "terminos"
                    );

                }
            );

        }
    );


    /* =====================================
       ABRIR PRIVACIDAD
    ===================================== */

    abrirPrivacidad.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    openLegalModal(
                        "privacidad"
                    );

                }
            );

        }
    );


    /* =====================================
       CERRAR CON X
    ===================================== */

    closeButton.addEventListener(
        "click",
        closeLegalModal
    );


    /* =====================================
       CERRAR CON OVERLAY
    ===================================== */

    overlay.addEventListener(
        "click",
        closeLegalModal
    );


    /* =====================================
       CERRAR CON ESC
    ===================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("active")
            ) {

                closeLegalModal();

            }

        }
    );

});