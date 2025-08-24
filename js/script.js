// Datos de los productos del menú
const productos = [
    {
        id: 2,
        nombre: "Bandeja campesina",
        descripcion: "Costilla ahumada, chicharron, chorizo, arroz, frijol, patacon, arepa, aguacate y limonada",
        tipo: "Bandeja",
        observacion: "Sin observación",
        precio: 37000,
        imagen: "img/2.jpeg"
    },
    {
        id: 3,
        nombre: "Bandeja con chorizo",
        descripcion: "2 chorizos, chicharron, arroz, frijol, patacon, arepa, aguacate y limonada",
        tipo: "Bandeja",
        observacion: "Sin observación",
        precio: 29000,
        imagen: "img/3.jpeg"
    },
    {
        id: 4,
        nombre: "Bandeja mixta",
        descripcion: "Carne molida, chorizo, chicharron, media pezuña ahumada, huevo, arroz, frijol, patacon, arepa, aguacate y limonada",
        tipo: "Bandeja",
        observacion: "Sin observación",
        precio: 39000,
        imagen: "img/4.jpg"
    },
    {
        id: 5,
        nombre: "Bandeja paisa",
        descripcion: "Carne molida, chorizo, huevo, arroz, frijol, patacon, arepa, aguacate y limonada",
        tipo: "Bandeja",
        observacion: "Sin observación",
        precio: 33000,
        imagen: "img/5.jpg"
    },
    {
        id: 6,
        nombre: "Bandeja con pezuña",
        descripcion: "Bandeja con pezuña, chicharron, arroz, frijol, patacon, arepa, aguacate y limonada",
        tipo: "Bandeja",
        observacion: "Sin observación",
        precio: 29000,
        imagen: "img/6.jpeg"
    },
    {
        id: 7,
        nombre: "Cazuela",
        descripcion: "Chicharron, arroz, frijol, patacon, arepa, aguacate y limonada(dos huevos o chicharron)",
        tipo: "Bandeja",
        observacion: "Sin observación",
        precio: 24000,
        imagen: "img/7.jpg"
    },
    {
        id: 8,
        nombre: "Mondongo",
        descripcion: "Sopa de mondongo con complemento(arroz, patacón, arepa, aguacate y limonada), cazuela grande",
        tipo: "Sopa",
        observacion: "Solo fines de semana",
        precio: 33000,
        imagen: "img/8.jpg"
    },
    {
        id: 9,
        nombre: "Mondonguito",
        descripcion: "Sopa de mondongo con complemento(arroz, patacón, arepa, aguacate y limonada), cazuela pequeña",
        tipo: "Sopa",
        observacion: "Solo fines de semana",
        precio: 25000,
        imagen: "img/9.jpg"
    },
    {
        id: 10,
        nombre: "Ajiaco",
        descripcion: "Sopa ajiaco con complemento(arroz, patacón, arepa, aguacate y limonada), cazuela grande",
        tipo: "Sopa",
        observacion: "Solo fines de semana",
        precio: 23000,
        imagen: "img/10.jpg"
    },
    {
        id: 11,
        nombre: "Panceta",
        descripcion: "Panceta, crispeta, yuca, papa, guacamole y limonada",
        tipo: "Individual",
        observacion: "Sin observación",
        precio: 25000,
        imagen: "img/11.jpg"
    },
    {
        id: 12,
        nombre: "Panceta en bandeja",
        descripcion: "Panceta, crispeta, yuca, papa, guacamole, arroz, frijol, patacon, arepa, aguacate y limonada",
        tipo: "Bandeja",
        observacion: "Sin observación",
        precio: 39000,
        imagen: "img/12.jpg"
    },
    {
        id: 13,
        nombre: "Plato infantil",
        descripcion: "Frijol, arroz, aguacate, papas a la francesa, salchichas y limonada",
        tipo: "Plato infantil",
        observacion: "Sin observación",
        precio: 19000,
        imagen: "img/13.jpg"
    },
    {
        id: 14,
        nombre: "Salchipapa",
        descripcion: "Salchipapa, salas y vaso de limonada",
        tipo: "Comida rapida",
        observacion: "Sin observación",
        precio: 15000,
        imagen: "img/14.jpg"
    },
    {
        id: 15,
        nombre: "Paisita",
        descripcion: "Carne molida, chorizo, huevo, arroz, frijol, patacon, arepa, aguacate y limonada",
        tipo: "Bandeja",
        observacion: "Sin observación",
        precio: 27000,
        imagen: "img/15.jpeg"
    },
    {
        id: 16,
        nombre: "Tamal tolimense",
        descripcion: "Contiene pollo, tocino, cerdo, huevo, arroz, arverja, masa delgada de maiz, zanahoria y papa",
        tipo: "Tamal",
        observacion: "Sin observación",
        precio: 15000,
        imagen: "img/16.jpg"
    },
    {
        id: 17,
        nombre: "Porción de frijol con chicharron",
        descripcion: "Porción de frijol con chicharrón",
        tipo: "Porciones",
        observacion: "Sin observación",
        precio: 11000,
        imagen: "img/17.jpg"
    },
    {
        id: 18,
        nombre: "Porción de frijol",
        descripcion: "Porción de frijol",
        tipo: "Porciones",
        observacion: "Sin observación",
        precio: 10000,
        imagen: "img/18.jpg"
    },
    {
        id: 21,
        nombre: "Arroz",
        descripcion: "Porción personal de arroz",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 7000,
        imagen: "img/21.jpg"
    },
    {
        id: 22,
        nombre: "Arepas",
        descripcion: "Porción de arepas",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 3000,
        imagen: "img/22.jpg"
    },
    {
        id: 23,
        nombre: "Patacón",
        descripcion: "Porción de patacón",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 4000,
        imagen: "img/23.jpg"
    },
    {
        id: 24,
        nombre: "Huevo",
        descripcion: "Porción de huevo",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 2400,
        imagen: "img/24.jpg"
    },
    {
        id: 25,
        nombre: "Chicharrón",
        descripcion: "Porción de chicharron",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 4500,
        imagen: "img/25.jpg"
    },
    {
        id: 26,
        nombre: "Costilla",
        descripcion: "Porción de costilla",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 15000,
        imagen: "img/26.jpeg"
    },
    {
        id: 27,
        nombre: "Pezuña",
        descripcion: "Porción de pezuña",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 14000,
        imagen: "img/27.jpg"
    },
    {
        id: 28,
        nombre: "Carne molida",
        descripcion: "Porción de carne molida",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 9500,
        imagen: "img/28.jpg"
    },
    {
        id: 29,
        nombre: "Chorizo",
        descripcion: "Porción dee Chorizo",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 8000,
        imagen: "img/29.jpg"
    },
    {
        id: 30,
        nombre: "Chorizo especial",
        descripcion: "Porción de Chorizo especial",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 10800,
        imagen: "img/30.jpg"
    },
    {
        id: 31,
        nombre: "Aguacate",
        descripcion: "Porción de aguacate",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 1200,
        imagen: "img/31.jpg"
    },
    {
        id: 32,
        nombre: "Ají",
        descripcion: "Porción de aji",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 2400,
        imagen: "img/32.jpg"
    },
    {
        id: 33,
        nombre: "Postre",
        descripcion: "Postre",
        tipo: "Postre",
        observacion: "Sin observación",
        precio: 6000,
        imagen: "img/33.jpg"
    },
    {
        id: 34,
        nombre: "Mazamorra",
        descripcion: "Porción de mazamorra",
        tipo: "Adiciones",
        observacion: "Sin observación",
        precio: 6000,
        imagen: "img/34.jpg"
    },
    {
        id: 35,
        nombre: "Jugo especial",
        descripcion: "Vaso de jugo especial",
        tipo: "Bebidas",
        observacion: "Sin observación",
        precio: 6000,
        imagen: "img/35.jpg"
    },
    {
        id: 36,
        nombre: "Gaseosa 400ml",
        descripcion: "Gaseosa 400ml",
        tipo: "Bebidas",
        observacion: "Sin observación",
        precio: 4800,
        imagen: "img/36.jpg"
    },
    {
        id: 37,
        nombre: "Gaseosa 250ml",
        descripcion: "Gaseosa 250ml",
        tipo: "Bebidas",
        observacion: "Sin observación",
        precio: 3000,
        imagen: "img/37.jpg"
    },
    {
        id: 38,
        nombre: "Agua de 600ml",
        descripcion: "Agua de 600ml",
        tipo: "Bebidas",
        observacion: "Sin observación",
        precio: 2400,
        imagen: "img/38.jpg"
    },
    {
        id: 39,
        nombre: "Agua de 280ml",
        descripcion: "Agua de 280ml",
        tipo: "Bebidas",
        observacion: "Sin observación",
        precio: 1800,
        imagen: "img/39.jpg"
    },
    {
        id: 40,
        nombre: "Jugo en agua",
        descripcion: "Vaso de jugo en agua",
        tipo: "Bebidas",
        observacion: "Sin observación",
        precio: 4500,
        imagen: "img/40.jpg"
    },
    {
        id: 41,
        nombre: "Jugo en leche",
        descripcion: "Vaso de jugo en leche",
        tipo: "Bebidas",
        observacion: "Sin observación",
        precio: 6000,
        imagen: "img/41.jpg"
    },
    {
        id: 42,
        nombre: "Limonada",
        descripcion: "Vaso de limonada",
        tipo: "Bebidas",
        observacion: "Sin observación",
        precio: 1800,
        imagen: "img/42.jpg"
    },
    {
        id: 43,
        nombre: "Jarra de limonada",
        descripcion: "1lt de limonada",
        tipo: "Bebidas",
        observacion: "Sin observación",
        precio: 8000,
        imagen: "img/43.jpg"
    },
    {
        id: 44,
        nombre: "Desechables",
        descripcion: "Recipientes desechables para llevar",
        tipo: "Desechables",
        observacion: "Sin observación",
        precio: 1200,
        imagen: "img/44.jpg"
    }
];

// Variables del carousel
let paginaActual = 0;
const totalPaginas = 21; // 21 páginas predefinidas



// Función para formatear precio
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(precio);
}

// Función para crear una tarjeta de producto con imagen
function crearTarjetaProducto(producto) {
    // Detectar si la descripción es de una sola línea o múltiples líneas
    const esUnaLinea = producto.descripcion.length <= 50; // Aproximadamente 50 caracteres por línea
    const claseDescripcion = esUnaLinea ? 'single-line' : 'multi-line';
    
    return `
        <div class="product-card">
        <!-- Validación para la imagen -->
        ${producto.imagen ? 
            `<img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">` : 
            ''}

        <h3 class="product-name">${producto.nombre}</h3>
        <p class="product-description ${claseDescripcion}">${producto.descripcion}</p>
        ${producto.observacion !== "Sin observación" ? 
            `<span class="product-observation">${producto.observacion}</span>` : 
            '<span class="product-observation" style="visibility: hidden;">Sin observación</span>'}
        <div class="product-price">${formatearPrecio(producto.precio)}</div>
    </div>
    `;
}

// Función para crear tarjeta especial de frijol simple
function crearTarjetaFrijolSimple() {
    const descripcion = "Porción de frijol | Con desechable";
    const esUnaLinea = descripcion.length <= 50;
    const claseDescripcion = esUnaLinea ? 'single-line' : 'multi-line';
    
    return `
        <div class="product-card">
            <img src="img/18.jpg" alt="Porción de frijol" class="product-image">
            <h3 class="product-name">Porción de Frijol</h3>
            <p class="product-description ${claseDescripcion}">${descripcion}</p>
            <div class="product-price">
                <div class="precio-simple">${formatearPrecio(10000)}</div>
                <div class="precio-desechable">${formatearPrecio(10500)}</div>
            </div>
        </div>
    `;
}

// Función para crear tarjeta especial de frijol con chicharrón
function crearTarjetaFrijolConChicharron() {
    const descripcion = "Porción de frijol y chicharrón | Con desechable";
    const esUnaLinea = descripcion.length <= 50;
    const claseDescripcion = esUnaLinea ? 'single-line' : 'multi-line';
    
    return `
        <div class="product-card">
            <img src="img/17.jpg" alt="Porción de frijol y chicharrón" class="product-image">
            <h3 class="product-name">Porción de Frijol y Chicharrón</h3>
            <p class="product-description ${claseDescripcion}">${descripcion}</p>
            <div class="product-price">
                <div class="precio-simple">${formatearPrecio(11000)}</div>
                <div class="precio-desechable">${formatearPrecio(12000)}</div>
            </div>
        </div>
    `;
}

// Función para crear un item de producto sin imagen (solo listado)
function crearItemProductoSinImagen(producto) {
    return `
        <div class="product-item-no-image">
            <div class="product-info">
                <h4 class="product-name-no-image">${producto.nombre}</h4>
                <p class="product-description-no-image">${producto.descripcion}</p>
                ${producto.observacion !== "Sin observación" ? 
                    `<span class="product-observation-no-image">${producto.observacion}</span>` : ''}
            </div>
            <div class="product-price-no-image">${formatearPrecio(producto.precio)}</div>
        </div>
    `;
}

// Función para mostrar productos de una página específica
function mostrarPagina(pagina) {
    const menuGrid = document.querySelector('.menu-grid');
    menuGrid.innerHTML = '';
    
    if (pagina === 0) {
        // Página 0: Porciones de frijol
        menuGrid.innerHTML += crearTarjetaFrijolSimple();
        menuGrid.innerHTML += crearTarjetaFrijolConChicharron();
        
    } else if (pagina === 1) {
        // Página 1: Bandeja campesina y Bandeja con chorizo
        const bandejaCampesina = productos.find(p => p.id === 2);
        const bandejaChorizo = productos.find(p => p.id === 3);
        
        if (bandejaCampesina) menuGrid.innerHTML += crearTarjetaProducto(bandejaCampesina);
        if (bandejaChorizo) menuGrid.innerHTML += crearTarjetaProducto(bandejaChorizo);
        
    } else if (pagina === 2) {
        // Página 2: Bandeja mixta y Bandeja paisa
        const bandejaMixta = productos.find(p => p.id === 4);
        const bandejaPaisa = productos.find(p => p.id === 5);
        
        if (bandejaMixta) menuGrid.innerHTML += crearTarjetaProducto(bandejaMixta);
        if (bandejaPaisa) menuGrid.innerHTML += crearTarjetaProducto(bandejaPaisa);
        
    } else if (pagina === 3) {
        // Página 3: Bandeja con pezuña y Cazuela
        const bandejaPezuña = productos.find(p => p.id === 6);
        const cazuela = productos.find(p => p.id === 7);
        
        if (bandejaPezuña) menuGrid.innerHTML += crearTarjetaProducto(bandejaPezuña);
        if (cazuela) menuGrid.innerHTML += crearTarjetaProducto(cazuela);
        
    } else if (pagina === 4) {
        // Página 4: Mondongo y Mondonguito
        const mondongo = productos.find(p => p.id === 8);
        const mondonguito = productos.find(p => p.id === 9);
        
        if (mondongo) menuGrid.innerHTML += crearTarjetaProducto(mondongo);
        if (mondonguito) menuGrid.innerHTML += crearTarjetaProducto(mondonguito);
        
    } else if (pagina === 5) {
        // Página 5: Ajiaco y Panceta
        const ajiaco = productos.find(p => p.id === 10);
        const panceta = productos.find(p => p.id === 11);
        
        if (ajiaco) menuGrid.innerHTML += crearTarjetaProducto(ajiaco);
        if (panceta) menuGrid.innerHTML += crearTarjetaProducto(panceta);
        
    } else if (pagina === 6) {
        // Página 6: Panceta en bandeja y Plato infantil
        const pancetaBandeja = productos.find(p => p.id === 12);
        const platoInfantil = productos.find(p => p.id === 13);
        
        if (pancetaBandeja) menuGrid.innerHTML += crearTarjetaProducto(pancetaBandeja);
        if (platoInfantil) menuGrid.innerHTML += crearTarjetaProducto(platoInfantil);
        
    } else if (pagina === 7) {
        // Página 7: Salchipapa y Paisita
        const salchipapa = productos.find(p => p.id === 14);
        const paisita = productos.find(p => p.id === 15);
        
        if (salchipapa) menuGrid.innerHTML += crearTarjetaProducto(salchipapa);
        if (paisita) menuGrid.innerHTML += crearTarjetaProducto(paisita);
        
    } else if (pagina === 8) {
        // Página 8: Tamal tolimense y Arroz
        const tamal = productos.find(p => p.id === 16);
        const arroz = productos.find(p => p.id === 21);
        
        if (tamal) menuGrid.innerHTML += crearTarjetaProducto(tamal);
        if (arroz) menuGrid.innerHTML += crearTarjetaProducto(arroz);
        
    } else if (pagina === 9) {
        // Página 9: Arepas y Patacón
        const arepas = productos.find(p => p.id === 22);
        const patacon = productos.find(p => p.id === 23);
        
        if (arepas) menuGrid.innerHTML += crearTarjetaProducto(arepas);
        if (patacon) menuGrid.innerHTML += crearTarjetaProducto(patacon);
        
    } else if (pagina === 10) {
        // Página 10: Huevo y Chicharrón
        const huevo = productos.find(p => p.id === 24);
        const chicharron = productos.find(p => p.id === 25);
        
        if (huevo) menuGrid.innerHTML += crearTarjetaProducto(huevo);
        if (chicharron) menuGrid.innerHTML += crearTarjetaProducto(chicharron);
        
    } else if (pagina === 11) {
        // Página 11: Costilla y Pezuña
        const costilla = productos.find(p => p.id === 26);
        const pezuña = productos.find(p => p.id === 27);
        
        if (costilla) menuGrid.innerHTML += crearTarjetaProducto(costilla);
        if (pezuña) menuGrid.innerHTML += crearTarjetaProducto(pezuña);
        
    } else if (pagina === 12) {
        // Página 12: Carne molida y Chorizo
        const carneMolida = productos.find(p => p.id === 28);
        const chorizo = productos.find(p => p.id === 29);
        
        if (carneMolida) menuGrid.innerHTML += crearTarjetaProducto(carneMolida);
        if (chorizo) menuGrid.innerHTML += crearTarjetaProducto(chorizo);
        
    } else if (pagina === 13) {
        // Página 13: Chorizo especial y Aguacate
        const chorizoEspecial = productos.find(p => p.id === 30);
        const aguacate = productos.find(p => p.id === 31);
        
        if (chorizoEspecial) menuGrid.innerHTML += crearTarjetaProducto(chorizoEspecial);
        if (aguacate) menuGrid.innerHTML += crearTarjetaProducto(aguacate);
        
    } else if (pagina === 14) {
        // Página 14: Ají y Postre
        const aji = productos.find(p => p.id === 32);
        const postre = productos.find(p => p.id === 33);
        
        if (aji) menuGrid.innerHTML += crearTarjetaProducto(aji);
        if (postre) menuGrid.innerHTML += crearTarjetaProducto(postre);
        
    } else if (pagina === 15) {
        // Página 15: Mazamorra y Jugo especial
        const mazamorra = productos.find(p => p.id === 34);
        const jugoEspecial = productos.find(p => p.id === 35);
        
        if (mazamorra) menuGrid.innerHTML += crearTarjetaProducto(mazamorra);
        if (jugoEspecial) menuGrid.innerHTML += crearTarjetaProducto(jugoEspecial);
        
    } else if (pagina === 16) {
        // Página 16: Gaseosa 400ml y Gaseosa 250ml
        const gaseosa400 = productos.find(p => p.id === 36);
        const gaseosa250 = productos.find(p => p.id === 37);
        
        if (gaseosa400) menuGrid.innerHTML += crearTarjetaProducto(gaseosa400);
        if (gaseosa250) menuGrid.innerHTML += crearTarjetaProducto(gaseosa250);
        
    } else if (pagina === 17) {
        // Página 17: Agua 600ml y Agua 280ml
        const agua600 = productos.find(p => p.id === 38);
        const agua280 = productos.find(p => p.id === 39);
        
        if (agua600) menuGrid.innerHTML += crearTarjetaProducto(agua600);
        if (agua280) menuGrid.innerHTML += crearTarjetaProducto(agua280);
        
    } else if (pagina === 18) {
        // Página 18: Jugo en agua y Jugo en leche
        const jugoAgua = productos.find(p => p.id === 40);
        const jugoLeche = productos.find(p => p.id === 41);
        
        if (jugoAgua) menuGrid.innerHTML += crearTarjetaProducto(jugoAgua);
        if (jugoLeche) menuGrid.innerHTML += crearTarjetaProducto(jugoLeche);
        
    } else if (pagina === 19) {
        // Página 19: Limonada y Jarra de limonada
        const limonada = productos.find(p => p.id === 42);
        const jarraLimonada = productos.find(p => p.id === 43);
        
        if (limonada) menuGrid.innerHTML += crearTarjetaProducto(limonada);
        if (jarraLimonada) menuGrid.innerHTML += crearTarjetaProducto(jarraLimonada);
        
    } else if (pagina === 20) {
        // Página 20: Desechables
        const desechables = productos.find(p => p.id === 44);
        
        if (desechables) menuGrid.innerHTML += crearTarjetaProducto(desechables);
    }
    
    // Actualizar indicador de página
    const productosEnPagina = document.querySelectorAll('.product-card').length;
    document.querySelector('.page-indicator').textContent = 
        `Página ${pagina + 1} de ${totalPaginas} - ${productosEnPagina} productos mostrados`;
    
    // Actualizar estado de botones
    document.getElementById('btnAnterior').disabled = pagina === 0;
    document.getElementById('btnSiguiente').disabled = pagina === totalPaginas - 1;
    
    // Detectar dinámicamente el tipo de descripción después de renderizar
    setTimeout(detectarTipoDescripcion, 100);
}

// Función para ir a la página anterior
function paginaAnterior() {
    if (paginaActual > 0) {
        paginaActual--;
        mostrarPagina(paginaActual);
        // Reanudar contador de auto-rotación
        if (window.reanudarAutoRotacion) {
            window.reanudarAutoRotacion();
        }
    }
}

// Función para ir a la página siguiente
function paginaSiguiente() {
    if (paginaActual < totalPaginas - 1) {
        paginaActual++;
        mostrarPagina(paginaActual);
        // Reanudar contador de auto-rotación
        if (window.reanudarAutoRotacion) {
            window.reanudarAutoRotacion();
        }
    }
}

// Función para ir a una página específica
function irAPagina(pagina) {
    if (pagina >= 0 && pagina < totalPaginas) {
        paginaActual = pagina;
        mostrarPagina(paginaActual);
        // Reanudar contador de auto-rotación
        if (window.reanudarAutoRotacion) {
            window.reanudarAutoRotacion();
        }
    }
}

// Función para continuar la secuencia del carousel
function continuarSecuenciaCarousel() {
    // Simplemente avanzar a la siguiente página desde la actual
    if (paginaActual < totalPaginas - 1) {
        paginaSiguiente();
    } else {
        // Si estamos en la última página, volver al inicio
        irAPagina(0);
    }
}

// Función para mostrar productos sin imagen en sección separada
function mostrarProductosSinImagen() {
    const productosSinImagen = productos.filter(producto => 
        !producto.imagen || producto.imagen === "img/default.jpg"
    );
    
    if (productosSinImagen.length > 0) {
        const seccionSinImagen = document.querySelector('.productos-sin-imagen');
        if (seccionSinImagen) {
            seccionSinImagen.innerHTML = `
                <h2 class="section-title">Otros Productos</h2>
                <div class="productos-lista">
                    ${productosSinImagen.map(producto => crearItemProductoSinImagen(producto)).join('')}
                </div>
            `;
        }
    }
}

// Función para activar pantalla completa (silenciosa)
function activarPantallaCompleta() {
    try {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch(() => {});
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen().catch(() => {});
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen().catch(() => {});
        }
    } catch (error) {
        // Silenciar errores de pantalla completa
    }
}

// Inicializar el menú cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Activar pantalla completa automáticamente
    setTimeout(activarPantallaCompleta, 1000);
    
    mostrarPagina(0);
    mostrarProductosSinImagen();
    
    // Detectar tipo de descripción después de la carga inicial
    setTimeout(detectarTipoDescripcion, 500);
    
    // Agregar event listeners a los botones
    document.getElementById('btnAnterior').addEventListener('click', paginaAnterior);
    document.getElementById('btnSiguiente').addEventListener('click', paginaSiguiente);
    
    // Agregar navegación con teclado (navegación circular)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            if (paginaActual === 0) {
                irAPagina(totalPaginas - 1); // Ir al final desde el inicio
            } else {
                paginaAnterior();
            }
        } else if (e.key === 'ArrowRight') {
            if (paginaActual === totalPaginas - 1) {
                irAPagina(0); // Ir al inicio desde el final
            } else {
                paginaSiguiente();
            }
        }
    });
    
    // Agregar navegación táctil para dispositivos móviles
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Detectar inicio del toque
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    // Detectar fin del toque
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    // Función para manejar el swipe
    function handleSwipe() {
        const swipeThreshold = 50; // Umbral mínimo para considerar un swipe
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swipe hacia la derecha = ir a página anterior
                if (paginaActual === 0) {
                    irAPagina(totalPaginas - 1); // Ir al final desde el inicio
                } else {
                    paginaAnterior();
                }
            } else {
                // Swipe hacia la izquierda = ir a página siguiente
                if (paginaActual === totalPaginas - 1) {
                    irAPagina(0); // Ir al inicio desde el final
                } else {
                    paginaSiguiente();
                }
            }
        }
    }
    
    // Auto-rotación con contador reanudado (cambiar página cada 17 segundos)
    let autoRotacionInterval = setInterval(() => {
        continuarSecuenciaCarousel();
    }, 17000);
    
    // Función para reanudar el contador de auto-rotación
    function reanudarAutoRotacion() {
        clearInterval(autoRotacionInterval);
        autoRotacionInterval = setInterval(() => {
            continuarSecuenciaCarousel();
        }, 17000);
    }
    
    // Reanudar contador cuando se cambia de página manualmente
    window.reanudarAutoRotacion = reanudarAutoRotacion;
});

// Función para manejar errores de imagen
function manejarErrorImagen(img) {
    img.onerror = function() {
        this.src = 'img/default.jpg';
        this.alt = 'Imagen no disponible';
    };
}

// Función para detectar dinámicamente si el texto es de una o múltiples líneas
function detectarTipoDescripcion() {
    const descripciones = document.querySelectorAll('.product-description');
    
    descripciones.forEach(descripcion => {
        // Obtener el texto real
        const texto = descripcion.textContent || descripcion.innerText;
        
        // Calcular si es de una sola línea basándose en el ancho del contenedor
        const rect = descripcion.getBoundingClientRect();
        const esUnaLinea = texto.length <= 50 || rect.height <= 60; // 60px es aproximadamente la altura de una línea
        
        // Remover clases anteriores
        descripcion.classList.remove('single-line', 'multi-line');
        
        // Agregar la clase apropiada
        if (esUnaLinea) {
            descripcion.classList.add('single-line');
        } else {
            descripcion.classList.add('multi-line');
        }
    });
}
