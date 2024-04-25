// Selecciona el formulario de búsqueda y agrega un evento de escucha para el evento "submit"
document.getElementById("searchForm").addEventListener("submit", function(event) {
    // Evita que el formulario se envíe y recargue la página
    event.preventDefault();

    // Obtiene el valor del campo de entrada de búsqueda y lo limpia de espacios al inicio y al final
    const searchInput = document.getElementById("searchInput").value.trim();

    // Selecciona el elemento donde se mostrarán los resultados de la búsqueda
    let result = document.getElementById("result");

    // Utiliza un switch para determinar qué hacer dependiendo del valor de búsqueda
    switch (searchInput.toLowerCase()) {
        case "obras":
            // Si la búsqueda es "obras", muestra un título y un enlace
            result.innerHTML = `<h2>Obras</h2><a href="OBRAS.html">OBRAS</a> `;
            break;
        case "salvador dali":
            // Si la búsqueda es "salvador dali", muestra un título y un enlace
            result.innerHTML = `<h2>Salvador Dalí</h2><a href="PINTORES.html">PINTORES</a>`;
            break;
        case "obras de salvador dali":
            // Si la búsqueda es "obras de salvador dali", muestra un título y un enlace
            result.innerHTML = `<h2>Obras de Salvador Dalí</h2><a href="OBRAS.html">OBRAS</a> `;
            break;
        case "museos":
        case "museo":
            // Si la búsqueda es "museos" o "museo", muestra un título y un enlace
            result.innerHTML = `<h2>Museos</h2><a href="MUSEOS.html">MUSEOS</a>`;
            break;
        // Los siguientes casos siguen un patrón similar para diferentes términos de búsqueda
        case "diego velazquez":
            result.innerHTML = `<h2>Diego Velázquez</h2><a href="PINTORES.html">PINTORES</a>`;
            break;
        case "obras de diego velazquez":
            result.innerHTML = `<h2>Obras de Diego Velázquez</h2><a href="OBRAS.html">OBRAS</a> `;
            break;
        case "leonardo davinci":
            result.innerHTML = `<h2>Leonardo DaVinci</h2><a href="PINTORES.html">PINTORES</a>`;
            break;
        case "obras de leonardo davinci":
            result.innerHTML = `<h2>Obras de Leonardo DaVinci</h2><a href="OBRAS.html">OBRAS</a> `;
            break;
        case "johannes vermeer":
            result.innerHTML = `<h2>Johannes Vermeer</h2><a href="PINTORES.html">PINTORES</a>`;
            break;
        case "obras de johannes vermeer":
            result.innerHTML = `<h2>Obras de Johannes Vermeer</h2><a href="OBRAS.html">OBRAS</a> `;
            break;
        case "linea temporal":
            result.innerHTML = `<h2>Línea Temporal</h2><a href="LINEATEMPORAL.html">LINEATEMPORAL</a>`;
            break;
        default:
            // Si no se encuentra ningún caso, muestra un mensaje predeterminado y un enlace
            result.innerHTML = `<h2>No hay resultados pero puedes jugar con esr</h2><a href="Juego.html">Juego</a>`;
    }
});
