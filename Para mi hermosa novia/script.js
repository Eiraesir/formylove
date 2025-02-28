const snoopy = document.getElementById("snoopy");
const messageBox = document.getElementById("message");
const photo = document.getElementById("photo");

const messages = [
    "Aunque la distacia nos separe recuerda que eso solo sera temporal y estaremos juntos ❤️",
    "No tengas envidia de otras relaciones, nosotros haremos nuestra propia historia mas linda que ninguna otra 😊",
    "Podria vivir sin ti pero aun asi elijo estar contigo toda mi vida 💕",
    "En este mundo nos pusieron lejos pero eso no impedira que tengamos nuestra hermosa historia de amor 🌍",
    "Nos conocimos a la distancia para asi demostrar que si se puede lograr estar juntos sin importar ningun obstaculo 💖",
    "Asi como planeamos nuestro futuro, vivamos nuestro presente con amor pues todo estara bien ❣️",
    "Eres la chica mas linda e inteligente por eso sin importar lo que pase no dejare que decaigas 💗",
    "Cuidare tu corazon y nunca dejare que se rompa, tambien hare siempre lo mejor por hacerte feliz ❤️‍🩹",
    "Aunque exitan sobrepensamientos e inseguridades yo las calmare y te demostrare que nada de eso detendra que nuestro futuro sea juntos porque te amo 💝",
    "Eres el amor de mi vida y por ti lo dare todo para algun dia estar a tu lado pero no solo quedaran como palabras si no con acciones para que sepas que a tu lado llegare 💌",
];

const photos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg",
    "foto7.jpg",
    "foto8.jpg",
    "foto9.jpg",
    "foto10.jpg",
    "foto11.jpg"
];

snoopy.addEventListener("click", function () {
    // Mostrar un mensaje aleatorio
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageBox.textContent = randomMessage;

    // Mostrar una foto aleatoria
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    photo.src = randomPhoto;
    photo.style.display = "block";

    // Esperar a que la imagen se cargue para obtener sus dimensiones
    photo.onload = function () {
        const safeMargin = 100; // Margen adicional de seguridad
        const photoWidth = photo.offsetWidth + safeMargin;
        const photoHeight = photo.offsetHeight + safeMargin;
        const messageWidth = messageBox.offsetWidth + safeMargin;
        const messageHeight = messageBox.offsetHeight + safeMargin;

        const maxX = window.innerWidth - snoopy.offsetWidth;
        const maxY = window.innerHeight - snoopy.offsetHeight;

        let x, y;
        do {
            x = Math.random() * maxX;
            y = Math.random() * maxY;
        } while (
            (x > messageBox.offsetLeft - messageWidth && x < messageBox.offsetLeft + messageWidth) &&
            (y > messageBox.offsetTop - messageHeight && y < messageBox.offsetTop + messageHeight) ||
            (x > photo.offsetLeft - photoWidth && x < photo.offsetLeft + photoWidth) &&
            (y > photo.offsetTop - photoHeight && y < photo.offsetTop + photoHeight)
        );

        snoopy.style.left = `${x}px`;
        snoopy.style.top = `${y}px`;
    };
});

