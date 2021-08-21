document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems,);
});


function registro() {

    let nombre = document.getElementById('first_name').value;
    let apellido = document.getElementById('last_name').value;
    let celular = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let ciudad = document.getElementById('autocomplete-input').value;
    let mensaje = document.getElementById('icon_prefix2').value;

    if (nombre == 0 || apellido == 0 || celular == 0 || ciudad == 0 || email == 0) {
        swal.fire({
            title: 'Por favor complete todos los campos solicitados',
            icon: 'error'
        })
    }else{

        swal.fire({
            title: `Aspirante: ${nombre} ${apellido}`,
                html:
                    `Fue registrado con exito<br>
                     Nos comunicaremos por medio del siguiente <br>
                     Email: ${email}<br>
                     Trabajaremos todos en conjunto para poder <br>
                     lograr totas tus expectativas ${mensaje}`,
                icon: 'success',
                confirmButtonText: 'Nuevo Registro'
        })
    }

}