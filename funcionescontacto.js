

var formulario = document.getElementById("formulario");
        var popup = document.getElementById("popup");
        var cerrarPopup = document.getElementById("cerrarPopup");

        // Abre el popup si el formulario es válido
        formulario.addEventListener("submit", function (e) {
            e.preventDefault(); // Evita que el formulario se envíe

            if (formulario.checkValidity()) {
                popup.classList.add("open-popup");
            }
        });

        // Cierra el popup al hacer clic en el botón "Cerrar"
        cerrarPopup.addEventListener("click", function () {
            popup.classList.remove("open-popup");
        });