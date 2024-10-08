//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}

// Función que muestra/oculta el contenido de la línea de tiempo al hacer clic
function configurarTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const content = item.querySelector('.timeline-content');
        const paragraph = content.querySelector('p');

        // Inicialmente, oculta el párrafo
        paragraph.style.display = 'none';
        paragraph.style.opacity = '0';

        // Al hacer clic en el cuadro, muestra/oculta el párrafo
        content.addEventListener('click', () => {
            if (paragraph.style.display === 'none') {
                paragraph.style.display = 'block'; // Muestra el contenido
                setTimeout(() => {
                    paragraph.style.opacity = '1'; // Hace visible el contenido
                }, 10); // Pequeño retraso para permitir que display: block se aplique
            } else {
                paragraph.style.opacity = '0'; // Hace invisible el contenido
                setTimeout(() => {
                    paragraph.style.display = 'none'; // Oculta el contenido después de la transición
                }, 300); // Espera a que la transición de opacidad termine
            }
        });
    });
}

// Llama a la función de configuración de la línea de tiempo
configurarTimeline();


// Función enlace de la flecha
const btn_scrolltop = document.getElementById("btn_scrolltop")
btn_scrolltop.addEventListener('click', ()=>{
    window.scrollTo(0,0)
})