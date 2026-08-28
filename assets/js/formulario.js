/* =========================================
   FORMULARIO DE PEDIDO - ZANO
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       WHATSAPP ZANO
    ===================================== */

    const WHATSAPP_ZANO =
        "51932727029";


    /* =====================================
       ELEMENTOS
    ===================================== */

    const form =
        document.getElementById(
            "pedido-form"
        );


    const nombreInput =
        document.getElementById(
            "pedido-nombre"
        );


    const celularInput =
        document.getElementById(
            "pedido-celular"
        );


    const productoInput =
        document.getElementById(
            "pedido-producto"
        );


    const precioInput =
        document.getElementById(
            "pedido-precio"
        );


    const comentariosInput =
        document.getElementById(
            "pedido-comentarios"
        );


    const terminosInput =
        document.getElementById(
            "pedido-terminos"
        );


    /* =====================================
       COMPROBAR FORMULARIO
    ===================================== */

    if (!form) {

        console.warn(
            "No se encontró el formulario de pedido."
        );

        return;

    }


    /* =====================================
       VALIDAR NOMBRE
    ===================================== */

    const validarNombre = () => {

        if (!nombreInput) {
            return true;
        }


        const nombre =
            nombreInput.value.trim();


        if (nombre.length < 2) {

            nombreInput.setCustomValidity(
                "Ingresa tu nombre."
            );

            return false;

        }


        nombreInput.setCustomValidity("");

        return true;

    };


    /* =====================================
       VALIDAR CELULAR
    ===================================== */

    const validarCelular = () => {

        if (!celularInput) {
            return true;
        }


        const celular =
            celularInput.value.trim();


        /*
         * Permitimos:
         *
         * 999999999
         * 999 999 999
         * 999-999-999
         */

        const celularLimpio =
            celular.replace(
                /[\s-]/g,
                ""
            );


        const formatoValido =
            /^9\d{8}$/.test(
                celularLimpio
            );


        if (!formatoValido) {

            celularInput.setCustomValidity(
                "Ingresa un número de celular peruano válido."
            );

            return false;

        }


        celularInput.setCustomValidity("");

        return true;

    };


    /* =====================================
       VALIDAR PRODUCTO
    ===================================== */

    const validarProducto = () => {

        if (!productoInput) {
            return true;
        }


        const producto =
            productoInput.value.trim();


        if (!producto) {

            productoInput.setCustomValidity(
                "Selecciona un producto."
            );

            return false;

        }


        productoInput.setCustomValidity("");

        return true;

    };


    /* =====================================
       VALIDAR TÉRMINOS
    ===================================== */

    const validarTerminos = () => {

        if (!terminosInput) {
            return true;
        }


        if (!terminosInput.checked) {

            terminosInput.setCustomValidity(
                "Debes aceptar los términos y condiciones y la política de privacidad."
            );

            return false;

        }


        terminosInput.setCustomValidity("");

        return true;

    };


    /* =====================================
       VALIDACIÓN EN TIEMPO REAL
    ===================================== */

    nombreInput?.addEventListener(
        "input",
        validarNombre
    );


    celularInput?.addEventListener(
        "input",
        validarCelular
    );


    productoInput?.addEventListener(
        "input",
        validarProducto
    );


    terminosInput?.addEventListener(
        "change",
        validarTerminos
    );


    /* =====================================
       EVITAR LETRAS EN CELULAR
    ===================================== */

    celularInput?.addEventListener(
        "input",
        () => {

            celularInput.value =
                celularInput.value.replace(
                    /[^0-9\s-]/g,
                    ""
                );

        }
    );


    /* =====================================
       ENVIAR FORMULARIO
    ===================================== */

    form.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            /* ---------------------------------
               VALIDAR CAMPOS
            --------------------------------- */

            const nombreValido =
                validarNombre();


            const celularValido =
                validarCelular();


            const productoValido =
                validarProducto();


            const terminosValidos =
                validarTerminos();


            /* ---------------------------------
               COMPROBAR VALIDACIÓN
            --------------------------------- */

            if (
                !nombreValido ||
                !celularValido ||
                !productoValido ||
                !terminosValidos
            ) {

                form.reportValidity();

                return;

            }


            /* ---------------------------------
               OBTENER DATOS
            --------------------------------- */

            const nombre =
                nombreInput?.value.trim() || "";


            const celular =
                celularInput?.value.trim() || "";


            const producto =
                productoInput?.value.trim() || "";


            const precio =
                precioInput?.value.trim() || "";


            const comentarios =
                comentariosInput?.value.trim() || "";


            /* ---------------------------------
               CREAR MENSAJE
            --------------------------------- */

            let mensaje =
                "Hola ZANO 👋\n\n";


            mensaje +=
                "Quiero realizar un pedido.\n\n";


            mensaje +=
                `Nombre: ${nombre}\n`;


            mensaje +=
                `Celular / WhatsApp: ${celular}\n\n`;


            mensaje +=
                `Producto: ${producto}\n`;


            mensaje +=
                `Precio: ${precio}\n`;


            if (comentarios) {

                mensaje +=
                    `\nComentarios:\n${comentarios}\n`;

            }


            mensaje +=
                "\nAcepto los términos y condiciones y la política de privacidad.";


            /* ---------------------------------
               CREAR URL DE WHATSAPP
            --------------------------------- */

            const mensajeWhatsApp =
                encodeURIComponent(
                    mensaje
                );


            const whatsappURL =
                `https://wa.me/${WHATSAPP_ZANO}?text=${mensajeWhatsApp}`;


            /* ---------------------------------
               CONSOLA
            --------------------------------- */

            console.log(
                "Pedido preparado:"
            );


            console.log(
                mensaje
            );


            /* ---------------------------------
               ABRIR WHATSAPP
            --------------------------------- */

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

});
