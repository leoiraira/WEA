$("#timers").click(function() {
    Swal.fire({
        title: ' <h2  class = "textTimers"> Cargando su solicitud... </h2>',
        html: ' <strong class = "textTimers"></strong> <span class = "textTimers" > segundos </span>',

        timer: 3100, //tiempo del timer
        background: 'rgba(236, 239, 241, 0.9)',
        footer: '<span class = "textTimers" > </span>',
        backdrop: true,
        allowOutsideClick: false,

        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                Swal.getContent().querySelector('strong')
                    .textContent = Swal.getTimerLeft()
            }, 100)
        },
        onClose: () => {
            clearInterval(timerInterval)
            window.location.href = "prueba.html"

        }
    }).then((result) => {
        if (
            result.dismiss === Swal.DismissReason.timer

        ) {


        }
    });
});