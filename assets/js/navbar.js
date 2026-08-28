/* =========================================
   NAVBAR ZANO
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const navbarLinks = document.querySelector(".navbar-links");
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarOverlay = document.querySelector(".navbar-overlay");

    if (!navbar || !navbarLinks || !navbarToggle) {
        return;
    }

    /* =====================================
       CAMBIO DEL NAVBAR AL HACER SCROLL
    ===================================== */

    const handleScroll = () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();


    /* =====================================
       ABRIR / CERRAR MENÚ MÓVIL
    ===================================== */

    const openMenu = () => {

        navbarLinks.classList.add("active");
        navbarToggle.classList.add("active");

        if (navbarOverlay) {
            navbarOverlay.classList.add("active");
        }

        navbarToggle.setAttribute("aria-expanded", "true");

        document.body.style.overflow = "hidden";

    };


    const closeMenu = () => {

        navbarLinks.classList.remove("active");
        navbarToggle.classList.remove("active");

        if (navbarOverlay) {
            navbarOverlay.classList.remove("active");
        }

        navbarToggle.setAttribute("aria-expanded", "false");

        document.body.style.overflow = "";

    };


    const toggleMenu = () => {

        const menuOpen = navbarLinks.classList.contains("active");

        if (menuOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    };


    navbarToggle.addEventListener("click", toggleMenu);


    /* =====================================
       CERRAR AL HACER CLICK EN UN ENLACE
    ===================================== */

    const links = navbarLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {
            closeMenu();
        });

    });


    /* =====================================
       CERRAR AL HACER CLICK EN OVERLAY
    ===================================== */

    if (navbarOverlay) {

        navbarOverlay.addEventListener("click", () => {
            closeMenu();
        });

    }


    /* =====================================
       CERRAR CON ESC
    ===================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });


    /* =====================================
       SI PASAMOS A DESKTOP
       CERRAMOS EL MENÚ MÓVIL
    ===================================== */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 850) {
            closeMenu();
        }

    });

});