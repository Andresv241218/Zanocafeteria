/* =========================================
   FOOTER ZANO
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       AÑO AUTOMÁTICO
    ===================================== */

    const footerYear =
        document.getElementById("footer-year");

    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================
       BOTONES LEGALES
    ===================================== */

    const footerTerminos =
        document.getElementById(
            "footer-terminos"
        );

    const footerPrivacidad =
        document.getElementById(
            "footer-privacidad"
        );


    /* =====================================
       MODAL LEGAL
    ===================================== */

    const legalModal =
        document.getElementById(
            "legal-modal"
        );

    const terminos =
        document.getElementById(
            "legal-terminos"
        );

    const privacidad =
        document.getElementById(
            "legal-privacidad"
        );

    const legalTitle =
        document.getElementById(
            "legal-modal-title"
        );

    const legalSubtitle =
        document.getElementById(
            "legal-modal-subtitle"
        );


    /* =====================================
       COMPROBAR
    ===================================== */

    if (
        !legalModal ||
        !terminos ||
        !privacidad ||
        !legalTitle ||
        !legalSubtitle
    ) {

        console.warn(
            "No se encontró el modal legal."
        );

        return;

    }


    /* =====================================
       ABRIR TÉRMINOS
    ===================================== */

    footerTerminos?.addEventListener(
        "click",
        () => {

            terminos.classList.add(
                "active"
            );

            privacidad.classList.remove(
                "active"
            );

            legalTitle.textContent =
                "Términos y condiciones";

            legalSubtitle.textContent =
                "TÉRMINOS Y CONDICIONES";

            legalModal.classList.add(
                "active"
            );

            legalModal.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow =
                "hidden";

        }
    );


    /* =====================================
       ABRIR PRIVACIDAD
    ===================================== */

    footerPrivacidad?.addEventListener(
        "click",
        () => {

            privacidad.classList.add(
                "active"
            );

            terminos.classList.remove(
                "active"
            );

            legalTitle.textContent =
                "Política de privacidad";

            legalSubtitle.textContent =
                "POLÍTICA DE PRIVACIDAD";

            legalModal.classList.add(
                "active"
            );

            legalModal.setAttribute(
                "aria-hidden",
                "false"
            );

            document.body.style.overflow =
                "hidden";

        }
    );

});