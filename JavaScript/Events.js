

// Dispara Eventos Card and Icons ------------------------

document.addEventListener("DOMContentLoaded", function (event) {

    const Event1 = document.querySelectorAll('.card');
    if (Event1) {
        Event1.forEach((el, key) => {
            el.addEventListener('click', function () {
                el.classList.toggle('active');
                Event1.forEach((active, index) => {
                    if (key !== index) {
                        active.classList.remove('active')
                    }
                })
            })
        })
    }
});

const Event2 = document.querySelectorAll('.icon');
if (Event2) {
    Event2.forEach((el, key) => {
        el.addEventListener('click', function () {
            el.classList.toggle('active');

            // Método swal para criar os alertas dos dowloads (biblioteca sweetalert) -----------

            swal({
                title: "Deseja Fazer o Download?",
                buttons: ["Não", "Sim"],
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("Download com Sucesso !", {
                            icon: "success",
                        });
                    } else {
                        swal("Erro no seu Download !", {
                            icon: "warning",
                        });
                    }
                });
            Event2.forEach((active, index) => {
                if (key !== index) {
                    active.classList.remove('active')
                }
            })
        })
    })
}



// Button Events Flip  ------------------------------

// Button 1 and Button 1b ------------------------------

document.getElementById('button1').style.visibility = 'visible';
document.getElementById('button1b').style.visibility = 'visible';


document.getElementById('button1').onclick = function () {
    document.getElementById('flip-card1').classList.toggle('StartFlip');
};
document.getElementById('button1b').onclick = function () {
    document.getElementById('flip-card1').classList.toggle('StartFlip');
};


// Button 2 and Button 2b ------------------------------


document.getElementById('button2').style.visibility = 'visible';
document.getElementById('button2b').style.visibility = 'visible';


document.getElementById('button2').onclick = function () {
    document.getElementById('flip-card2').classList.toggle('StartFlip');
};
document.getElementById('button2b').onclick = function () {
    document.getElementById('flip-card2').classList.toggle('StartFlip');
};

// Button 3 and Button 3b ------------------------------

document.getElementById('button3').style.visibility = 'visible';
document.getElementById('button3b').style.visibility = 'visible';


document.getElementById('button3').onclick = function () {
    document.getElementById('flip-card3').classList.toggle('StartFlip');
};
document.getElementById('button3b').onclick = function () {
    document.getElementById('flip-card3').classList.toggle('StartFlip');
};



