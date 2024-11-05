function getCharacters(done){

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data =>{
            done(data);
        });
}
 
getCharacters(data => {
    data.results.forEach(personaje => {

        function generarNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        var numeroAleatorio = generarNumeroAleatorio(1, 12);
        var dateName = ['semana(s)', 'mes(es)', 'dia(s)', 'hora(s)', 'minuto(s)'];
        var frasesTontas = ['Mi gata me aruñó', 'Me gusta el spaghetti', 'Los abuelos deberian ser eternos', 'No me he bañado hoy', 
        'Profesional en procrastinación', "Mi dieta consiste en 90% memes", "El único ejercicio que hago es saltar a conclusiones", "Si me ves sin café, por favor, ayúdame a encontrar", "Si la vida te da limones, pídele sal y tequila", 
        "Hoy estoy como las instrucciones de IKEA: confusa y sin sentido", "Sigo esperando a que mi carta de Hogwarts llegue por correo", "El lunes debería ser ilegal. Propongo que sea parte del fin de semana", "Mi capacidad para recordar contraseñas es directamente proporcional a mi habilidad para recordar", 
        "La dieta de hoy: ensalada... de gominolas", "No soy perezoso, solo estoy en modo de ahorro de energía.", "Viviendo la vida al revés: comiendo postre primero.", 
        "La paciencia es una virtud, pero también es una verdura. Y a veces, las verduras toman tiempo para cocinarse", "Me gusta mi café", "Sigo esperando", "Que sueño", ":D", "Viva petro", "Va a llover", "Rick and Morty es lo mejor"];

        var posicionAleatoria = generarNumeroAleatorio(0, dateName.length - 1);
        var imgAleatorio = generarNumeroAleatorio(1, 43);

        var enlaceLoop = ['https://i.pinimg.com/originals/8d/81/a4/8d81a41f3180bbac48abeab224d77c51.jpg', 
        "https://i.pinimg.com/originals/80/bb/2c/80bb2cce7b04fee12d7f61c1b86e19e1.jpg", 
        "https://i.pinimg.com/originals/94/0f/0c/940f0c386152b6331544ece70b3a400e.jpg", 
        "https://i.pinimg.com/originals/5b/44/f8/5b44f8ee33cee450a55ebf6bc624edf2.jpg", 
        "https://i.pinimg.com/originals/2d/91/a8/2d91a8181aee49e5be3258c0921b2f53.jpg", 
        "https://i.pinimg.com/originals/77/57/75/7757755edde9f1abe47310a2dd57b291.jpg", 
        "https://i.pinimg.com/originals/18/e2/4a/18e24a9ff627ecfd3376e0771adbdf7f.jpg", 
        "https://i.pinimg.com/originals/cf/b8/83/cfb88324061790a7ed0f71ff7e6d234c.jpg", 
        "https://i.pinimg.com/originals/fa/c9/c2/fac9c20301479bcc7f9c08b3d7ec90b7.jpg", 
        "https://i.pinimg.com/originals/46/37/6e/46376e22aac0e082db323fe4ec5d6967.jpg", 
        "https://i.pinimg.com/originals/d2/9d/77/d29d777d34ff78808e8615aa92674f1e.jpg", 
        "https://fastly.picsum.photos/id/689/720/720.jpg?hmac=W8-Ym_7ycHLrRxGfKO0bm_XQuE0AW2pBKx9vQN-QySA",
        "https://i.pinimg.com/originals/fd/01/ba/fd01bad68be48a17634398edaa7f2828.jpg",
        "https://fastly.picsum.photos/id/38/720/720.jpg?hmac=8KiqGY_qIPM3-E_CnEkT_pg9OD85RVo74YrC6hxIh_Q",
        "https://i.pinimg.com/originals/16/36/3b/16363b7856b58a3139e0c99a418392fa.jpg",
        "https://i.pinimg.com/originals/8a/06/98/8a06985d8e906d3b5bf308bcc5635df0.jpg",
        "https://i.pinimg.com/originals/75/47/59/754759c5e6d4a2651098f933965955d2.jpg",
        "https://i.pinimg.com/originals/eb/54/f9/eb54f9c56c55e93282aec20f96aad53f.jpg",
        "https://i.pinimg.com/originals/35/a4/0c/35a40c05e54323d33bde61d99bd1f7b5.jpg",
        "https://i.pinimg.com/originals/7c/d6/89/7cd689f98f456ddb0c792667dbba5844.jpg",
        "https://fastly.picsum.photos/id/291/1920/1080.jpg?hmac=SHeM7_83XkrlZUldgY-WfjkYnkn58JwF5WITrnU0jZM",
        "https://i.pinimg.com/originals/4c/b7/b6/4cb7b67f0691b6718bd93f220a0b1b79.jpg",
        "https://i.pinimg.com/originals/5d/fc/0d/5dfc0df62f22a32f616c461e7bc647c1.jpg",
        "https://i.pinimg.com/564x/d1/4b/13/d14b13202db143c18370d1aa3405a024.jpg",
        "https://i.pinimg.com/originals/56/fe/ea/56feea2bb94df5ba3d842bf55b733ee2.jpg",
        "https://i.pinimg.com/originals/a8/7a/69/a87a69befb1350c58db883012d7b0bf6.jpg",
        "https://i.pinimg.com/originals/3d/70/9e/3d709ec71c3d803a89f3be8d178bea00.jpg",
        "https://i.pinimg.com/originals/8f/d2/b5/8fd2b538d8868700b46a418dac1e27f5.jpg",
        "https://i.pinimg.com/originals/49/54/b4/4954b423021769f7dc71567725a94630.jpg",
        "https://i.pinimg.com/originals/f4/85/3a/f4853a553e797ab43c4914d5a27dddc0.jpg",
        "https://i.pinimg.com/originals/06/30/9c/06309ca5cf80ffe19601b26d5b8a9a5f.jpg",
        "https://i.pinimg.com/originals/db/41/85/db41855f32cbde2e3bbd97bc4fffed4b.jpg",
        "https://i.pinimg.com/originals/c1/c4/52/c1c4520c2692720649f7bf1af8b9a14f.jpg",
        "https://i.pinimg.com/originals/87/0f/60/870f608f74c132310fabf55d88328559.jpg",
        "https://i.pinimg.com/736x/19/1a/44/191a449e18705c615691d2f19bf41121.jpg",
        "https://i.pinimg.com/originals/ce/2b/c9/ce2bc952213ad8517637347d61234d4c.jpg",
        "https://i.pinimg.com/originals/76/0a/6a/760a6a909f6095b85c42545ffb3d457e.jpg",
        "https://i.pinimg.com/originals/5b/3e/67/5b3e67c41ff81ec8ed792892b8e4cf92.jpg",
        "https://i.pinimg.com/originals/70/fe/0c/70fe0c7ea81d449b6e5590b5ffd4e1ec.jpg",
        "https://i.pinimg.com/originals/26/0e/6a/260e6ae24b1e0e089e476263f16f350b.jpg",
        "https://i.pinimg.com/originals/8e/70/0f/8e700fd498f1dfcf2e649b2b35126644.jpg",
        "https://i.pinimg.com/originals/dd/bf/09/ddbf0986081ac0ab3cbc986c4c623134.jpg",
        "https://i.pinimg.com/originals/9c/94/e1/9c94e142a7dee328b26d3b6f520cec5e.jpg",
        "https://i.pinimg.com/originals/95/09/01/9509013ef61675ba9e71c3f61692e17c.jpg"] 


        const div = document.createRange().createContextualFragment(/*html*/`
        
    <div class="cardDefault">
        <div class="apirm">
            <div class="p1Card">
                <div class="userStats">
                    <div class="image-container">
                        <img id="imgPublic" src="${personaje.image}" alt="">
                    </div>
                        
                    <p id="nameUserPublic">${personaje.name}</p>
                    <p id="punto">•</p>
                    <p id="datePublic">${numeroAleatorio} ${dateName[posicionAleatoria]}</p>
                </div> 

                <div class="svgPublic">
                    <div class="svgPublicThree">
                        <svg id="threePoints" aria-label="Más opciones" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="34" role="img" viewBox="0 0 24 24" width="34"><title>Más opciones</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                    </div> 
                    <div class="svgPublicX">
                        <svg id="xSvg" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                    </div> 
                </div>             
            </div>

            <img id="post" src="${enlaceLoop[imgAleatorio]}">

            <div class="svgCard">
                <div class="reactionCard">
                    <div id="svgContainer">
                        <svg id="svg1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);transform: ;msFilter:;"><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
                        <div id="likeCounter">0</div>
                    </div>
                    
                    <svg id="svg2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);transform: ;msFilter:;"><path d="M20 2H4c-1.103 0-2 .897-2 2v18l5.333-4H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14H6.667L4 18V4h16v12z"></path></svg>
                    
                    <button class="share-button" onclick="toggleShareMenu()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);transform: ;msFilter:;"><path d="M11 7.05V4a1 1 0 0 0-1-1 1 1 0 0 0-.7.29l-7 7a1 1 0 0 0 0 1.42l7 7A1 1 0 0 0 11 18v-3.1h.85a10.89 10.89 0 0 1 8.36 3.72 1 1 0 0 0 1.11.35A1 1 0 0 0 22 18c0-9.12-8.08-10.68-11-10.95zm.85 5.83a14.74 14.74 0 0 0-2 .13A1 1 0 0 0 9 14v1.59L4.42 11 9 6.41V8a1 1 0 0 0 1 1c.91 0 8.11.2 9.67 6.43a13.07 13.07 0 0 0-7.82-2.55z"></path></svg>
                          <path d="M17 3a2 2 0 0 1 1.732 2.768L5 17l6-6 6 6-1.732 1.768A2 2 0 0 1 15 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10z"/>
                        </svg>
                    </button>
                    
                      <div id="shareMenu" class="share-menu">
                        <a href="javascript:void(0)" onclick="shareOnTwitter()">Twitter</a><br>
                        <a href="javascript:void(0)" onclick="shareOnFacebook()">Facebook</a><br>
                        <a href="javascript:void(0)" onclick="shareOnLinkedIn()">LinkedIn</a><br>
                      </div>                        
                </div>
    
                <div class="saveCard">
                    <svg id="svg4" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" style="fill: rgb(255, 255, 255);transform: ;msFilter:;"><path d="M5 21h14a2 2 0 0 0 2-2V8a1 1 0 0 0-.29-.71l-4-4A1 1 0 0 0 16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zm10-2H9v-5h6zM13 7h-2V5h2zM5 5h2v4h8V5h.59L19 8.41V19h-2v-5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H5z"></path></svg>
                </div>
            </div>

            <p id="estadoUser2">${frasesTontas[posicionAleatoria]}</p>
            <div class="Estados">
                <p id="userName">
                    ${personaje.name}
                </p>
                <p id="estadoUser"> I'm ${personaje.species} and i'm ${personaje.gender}.</p>   
            </div>
        </div>

       <div>
            <div id="comentarios">
                <p id="newComentary"></p>
            </div>
            <form id="formularioComentario">
                <textarea id="comentario" name="comentario" placeholder="Escribe tu comentario aquí..." required onkeydown="agregarConEnter(event)"></textarea>        
            </form>               
       </div>

       <script>
        function agregarConEnter(event) {
            if (event.key === 'Enter' && !event.shiftKey) {
                const userLocal = localStorage.getItem('loggedInUser');

                // Evitar el salto de línea si no se presiona Shift
                event.preventDefault();
                
                // Obtener el valor del comentario
                var comentario = document.getElementById('comentario').value;

                // Crear un nuevo elemento de párrafo para mostrar el comentario
                var nuevoComentario = document.createElement('p');
                nuevoComentario.textContent = userLocal + ": " + comentario;

                // Agregar el nuevo comentario a la sección de comentarios
                document.getElementById('comentarios').appendChild(nuevoComentario);

                // Limpiar el campo de comentario después de agregarlo
                document.getElementById('comentario').value = '';
            }
        }
       </script>
    </div>
        `);
        const  main = document.querySelector("main");
        main.append(div);
    });
});


