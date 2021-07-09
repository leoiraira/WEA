$("#btnaceptado").click(function() {


            //si no es valido
            Swal.fire({
                position: 'center', //
                type: 'error',
                title: 'complete todo los campos requeridos',
                showConfirmButton: false,
                backdrop: true,
                allowOutsideClick: false,
                timer: 3000 //el tiempo que dura el mensaje en ms

            });


            Swal.fire({
                //     position: 'center', //
                //     type: 'success',
                //     title: 'Tu mensaje ha sido enviado con exito',
                //     showConfirmButton: false,
                //     backdrop: true,
                //     allowOutsideClick: false,
                //     timer: 3000 //el tiempo que dura el mensaje en ms

                // });
            });