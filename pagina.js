
    //document.addEventListener("DOMContentLoaded", function(event) {
        // Obtenemos todos los elementos con la clase 'name' y 'ano1'
      //  const names = document.querySelectorAll('.name');
        //const anos = document.querySelectorAll('.ano1');

        // Iteramos sobre cada elemento y añadimos el evento a .name
       // names.forEach(name => {
         //   name.addEventListener('mouseover', () => {
           //     name.style.color = 'green'; // Cambiamos el color del texto al pasar el mouse sobre él
             //   name.style.border = '2px solid black'; // Creamos un cuadrado rojo alrededor del nombre
               // name.style.padding = '50px'; // Añadimos un padding para mantener un tamaño de 40px en el cuadrado
                //name.style.textAlign = 'center'; // Centramos el texto dentro del cuadrado
               // name.style.lineHeight = '40px'; // Centramos verticalmente el texto dentro del cuadrado
            //});

            //name.addEventListener('mouseout', () => {
              //  name.style.color = 'black'; // Restauramos el color del texto cuando el mouse sale del elemento
                //name.style.border = 'none'; // Eliminamos el cuadrado al salir el mouse del nombre
                //name.style.padding = '0'; // Restauramos el padding al valor predeterminado
                //name.style.textAlign = 'initial'; // Restauramos la alineación del texto
                //name.style.lineHeight = 'normal'; // Restauramos la altura de línea del texto
            //});
        //});

        // Iteramos sobre cada elemento y añadimos el evento a .ano1
        //anos.forEach(ano => {
          //  ano.addEventListener('mouseover', () => {
             //   ano.style.color = 'red'; // Cambiamos el color del texto al pasar el mouse sobre él
            //});

            //ano.addEventListener('mouseout', () => {
              //  ano.style.color = 'black'; // Restauramos el color del texto cuando el mouse sale del elemento
            //});
        //});
    //});
    document.addEventListener("DOMContentLoaded", function(event) {
        // Obtenemos todos los elementos con la clase 'name' y 'ano1'
        const name1 = document.querySelectorAll('.name1');
        const name2 = document.querySelectorAll('.name2');
        const name3= document.querySelectorAll('.name3');
        const name4= document.querySelectorAll('.name4');
        const anos = document.querySelectorAll('.ano1');
    
        // Iteramos sobre cada elemento y añadimos el evento a .name
        name1.forEach(name1 => {
            name1.addEventListener('mouseover', () => {
                name1.style.color = 'green'; // Cambiamos el color del texto al pasar el mouse sobre él
                name1.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg/1200px-Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg" alt="Leonardo da Vinci">'; // Mostramos la imagen
            });
    
            name1.addEventListener('mouseout', () => {
                name1.style.color = 'black'; // Restauramos el color del texto cuando el mouse sale del elemento
                name1.innerHTML = 'Leonardo da Vinci'; // Restauramos el texto original
            });
        });
        name2.forEach(name2 => {
            name2.addEventListener('mouseover', () => {
                name2.style.color = 'green'; // Cambiamos el color del texto al pasar el mouse sobre él
                name2.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Las_Meninas_01.jpg" alt="Diego Velazquez">'; // Mostramos la imagen
            });
    
            name2.addEventListener('mouseout', () => {
                name2.style.color = 'black'; // Restauramos el color del texto cuando el mouse sale del elemento
                name2.innerHTML = 'Diego Velazquez'; // Restauramos el texto original
            });
        });

        name3.forEach(name3 => {
            name3.addEventListener('mouseover', () => {
                name3.style.color = 'green'; // Cambiamos el color del texto al pasar el mouse sobre él
                name3.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg" alt="Johannes Vermeer">'; // Mostramos la imagen
            });
    
            name3.addEventListener('mouseout', () => {
                name3.style.color = 'black'; // Restauramos el color del texto cuando el mouse sale del elemento
                name3.innerHTML = 'Johannes Vermeer'; // Restauramos el texto original
            });
        });
        name4.forEach(name4 => {
            name4.addEventListener('mouseover', () => {
                name4.style.color = 'green'; // Cambiamos el color del texto al pasar el mouse sobre él
                name4.innerHTML = '<img src="https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvbnljLTItMjY4LmpwZyIsInJlc2l6ZUNyb3AsNjAwLDMwMCxDUk9QX0JBTEFOQ0UiXX0.X7q5uaI-aN456i9LDNv7oeVk3I-gljQWkIb9qiHcAMw.jpg" alt="Salvador Dali">'; // Mostramos la imagen
            });
    
            name4.addEventListener('mouseout', () => {
                name4.style.color = 'black'; // Restauramos el color del texto cuando el mouse sale del elemento
                name4.innerHTML = 'Salvador Dali'; // Restauramos el texto original
            });
        });

    
        // Iteramos sobre cada elemento y añadimos el evento a .ano1
        anos.forEach(ano => {
            ano.addEventListener('mouseover', () => {
                ano.style.color = 'red'; // Cambiamos el color del texto al pasar el mouse sobre él
            });
    
            ano.addEventListener('mouseout', () => {
                ano.style.color = 'black'; // Restauramos el color del texto cuando el mouse sale del elemento
            });
        });
    });
    



