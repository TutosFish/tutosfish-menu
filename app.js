/*=========================================
        TUTO'S FISH
=========================================*/

const container = document.getElementById("categories");
const searchInput = document.getElementById("searchInput");

/*=========================================
        MENÚ
=========================================*/

const menu = [

   {
    nombre: "Ceviches",

    descripcion: "Nuestros ceviches",

    productos: [

        {
            nombre: "Ceviche Pescado",

            precios: {
                "Pequeño": 3600,
                "Mediano": 4700,
                "Grande": 6700
            }

        },

        {
            nombre: "Ceviche Pescado Mixto",

            precios: {
                "Pequeño": 4300,
                "Mediano": 5700,
                "Grande": 7500
            }

        },

        {
            nombre: "Ceviche Pescado Triple",

            precios: {
                "Pequeño": 4400,
                "Mediano": 5700,
                "Grande": 7500
            }

        },

        {
            nombre: "Ceviche Marlin Blanco",

            precios: {
                "Pequeño": 4100,
                "Mediano": 5500,
                "Grande": 7900
            }

        },

        {
            nombre: "Ceviche Marlin Mixto",

            precios: {
                "Pequeño": 4800,
                "Mediano": 6200,
                "Grande": 8200
            }

        },

        {
            nombre: "Ceviche Marlin Triple",

            precios: {
                "Pequeño": 5000,
                "Mediano": 6500,
                "Grande": 8200
            }

        },

        {
            nombre: "Ceviche Camarón / Pulpo",

            precios: {
                "Pequeño": 4800,
                "Mediano": 6200,
                "Grande": 8200
            }

        },

        {
            nombre: "Ceviche de Piangua",

            precios: {
                "Pequeño": 4200,
                "Mediano": 5500,
                "Grande": 7500
            }

        },

        {
            nombre: "Vuelve a la Vida",

            precios: {
                "Pequeño": 4700,
                "Mediano": 6000,
                "Grande": 8200
            }

        },

        {
            nombre: "Ceviche de la Casa",

            precios: {
                "Mediano": 6500,
                "Grande": 8800
            }

        },

        {
            nombre: "Ceviche 1000 Millas",

            precios: {
                "Mediano": 8000,
                "Grande": 10000
            }

        }

    ]

},

{
    nombre: "Caldosas",

    descripcion: "Especialidad de la casa",

    productos: [

        {
            nombre: "Caldosa Pescado",

            precios: {
                "Pequeña": 1700,
                "Grande": 3100
            }

        },

        {
            nombre: "Caldosa Pescado Mixto",

            precios: {
                "Pequeña": 2900,
                "Grande": 4000
            }

        },

        {
            nombre: "Caldosa Pescado Triple",

            precios: {
                "Pequeña": 3200,
                "Grande": 4300
            }

        },

        {
            nombre: "Caldosa Marlin Blanco",

            precios: {
                "Pequeña": 2400,
                "Grande": 3800
            }

        },

        {
            nombre: "Caldosa Marlin Mixto",

            precios: {
                "Pequeña": 3300,
                "Grande": 4400
            }

        },

        {
            nombre: "Caldosa Marlin Triple",

            precios: {
                "Pequeña": 3700,
                "Grande": 4800
            }

        },

        {
            nombre: "Caldosa Camarón / Pulpo",

            precios: {
                "Pequeña": 3800,
                "Grande": 5000
            }

        }

    ]

},

{
    nombre: "Tartar",

    descripcion: "Preparado al momento.",

    productos: [

        {
            nombre: "Tartar Pescado",

            precios: {
                "Pequeño": 4400,
                "Mediano": 5800,
                "Grande": 7000
            }

        },

        {
            nombre: "Tartar Mixto Camaron/Pulpo",

            precios: {
                "Pequeño": 5200,
                "Mediano": 6300,
                "Grande": 7500
            }

        },

        {
            nombre: "Tartar Triple",

            precios: {
                "Pequeño": 5200,
                "Mediano": 6300,
                "Grande": 7500
            }

        },

        {
            nombre: "Tartar Marlin",

            precios: {
                "Pequeño": 5000,
                "Mediano": 6200,
                "Grande": 7700
            }

        },

        {
            nombre: "Tartar Marlin Mixto",

            precios: {
                "Pequeño": 5500,
                "Mediano": 6700,
                "Grande": 8000
            }

        },

        {
            nombre: "Tartar Marlin Triple",

            precios: {
                "Pequeño": 5500,
                "Mediano": 6700,
                "Grande": 8000 // ← Pendiente de confirmar
            }

        }

    ]

},
{
    nombre: "Papas",

    descripcion: "Papas y especialidades",

    productos: [

        {
            nombre: "Papas a la Francesa",

            precios:{
                "Precio":2600
            }

        },

        {
            nombre: "Papicamarón",

            precios:{
                "Precio":6500
            }

        },

        {
            nombre: "Papas Locas Pescado",

            precios:{
                "Precio":5800
            }

        },

        {
            nombre: "Papas Locas Mixta",

            precios:{
                "Precio":6500
            }

        },

        {
            nombre: "Papas Locas Triples",

            precios:{
                "Precio":6500
            }

        },

        {
            nombre: "Papas Locas Marlin",

            precios:{
                "Precio":6300
            }

        },

        {
            nombre: "Papas Locas Marlin Mixta",

            precios:{
                "Precio":6800
            }

        },

        {
            nombre: "Papas Locas Marlin Triple",

            precios:{
                "Precio":6800
            }

        },

      

        {
            nombre: "Adicional de Papas",

            precios:{
                "Precio":1250
            }

        },

        {
            nombre: "Adicional de Pan",

            precios:{
                "Precio":800
            }

        }

    ]

},

{
    nombre: "Torres de Patacón",

    descripcion: "Torres de patacón",

    productos:[

        {
            nombre:"Torre de Pescado",

            precios:{
                "Precio":5200
            }

        },

        {
            nombre:"Torre Mixta",

            precios:{
                "Precio":5700
            }

        },

        {
            nombre:"Torre Triple",

            precios:{
                "Precio":6200
            }

        },

        {
            nombre:"Torre Marlin",

            precios:{
                "Precio":6300
            }

        },

        {
            nombre:"Torre Marlin Mixta",

            precios:{
                "Precio":6800
            }

        },

        {
            nombre:"Torre Marlin Triple",

            precios:{
                "Precio":6800
            }

        },

        {
            nombre:"Unidad de Patacón",

            precios:{
                "Precio":700
            }

        }

    ]

},

{
    nombre:"Canastas",

    descripcion:"Canastas de patacón",

    productos:[

        {
            nombre:"Canasta de Pescado",

            precios:{
                "2 und":4000,
                "3 und":5000,
                "4 und":6000
            }

        },

        {
            nombre:"Canasta Mixta",

            precios:{
                "2 und":4700,
                "3 und":5800,
                "4 und":6700
            }

        },

        {
            nombre:"Canasta Triple",

            precios:{
                "2 und":4800,
                "3 und":5800,
                "4 und":6700
            }

        },

        {
            nombre:"Canasta Marlin",

            precios:{
                "2 und":4800,
                "3 und":5800,
                "4 und":6800
            }

        },

        {
            nombre:"Canasta Marlin Mixta",

            precios:{
                "2 und":4800,
                "3 und":6000,
                "4 und":7000
            }

        },

        {
            nombre:"Canasta Marlin Triple",

            precios:{
                "2 und":4800,
                "3 und":6000,
                "4 und":7000
            }

        },

        {
            nombre:"Canasta Camarón al Ajillo",

            precios:{
                "Precio":7000
            }

        },

        {
            nombre:"Orden de Patacones",

            precios:{
                "5 und":3400
            }

        }

    ]

},

{
    nombre: "Pastas",

    descripcion: "Pastas preparadas al momento.",

    productos: [

        {
            nombre: "🍝 Todas las pastas pueden prepararse con pollo o camarón.",

            informacion: true
        },

        {
            nombre: "Pasta al Ajillo",
            precios: {
                "Precio": 6200
            }
        },

        {
            nombre: "Pasta Salsa Roja",
            precios: {
                "Precio": 6700
            }
        },

        {
            nombre: "Pasta Salsa Blanca",
            precios: {
                "Precio": 7000
            }
        },

        {
            nombre: "Pasta al Pesto",
            precios: {
                "Precio": 6800
            }
        },

        {
            nombre: "Pasta a la Diabla",
            precios: {
                "Precio": 6800
            }
        },

        {
            nombre: "Pasta con Pollo en Salsa Blanca",
            precios: {
                "Precio": 7000
            }
        },

        {
            nombre: "Pasta Negra con Mariscos",
            precios: {
                "Precio": 8500
            }
        },

        {
            nombre: "Lasaña de Camarón",
            precios: {
                "Precio": 5000
            }
        }

    ]

},
//--------------------------------------------------------------------------------------------

{
    nombre: "Empanizados",

    descripcion: "Especialidades empanizadas",

    nota: "🍟 Todos los empanizados incluyen papas o arroz y ensalada.\n🐟 El pescado puede variar según disponibilidad.",

    productos: [{
            nombre: "🍟 Todos los empanizados incluyen papas o arroz y ensalada.\n🐟 El pescado puede variar según disponibilidad.",
    },

        {
            nombre: "Camarones Empanizados",
            precios: {
                "Precio": 7800
            }
        },

        {
            nombre: "Filet de Pescado Empanizado",
            precios: {
                "Precio": 6000
            }
        },

        {
            nombre: "Deditos de Pescado",
            precios: {
                "Precio": 5800
            }
        },

        {
            nombre: "Nuggets de Pollo",
            precios: {
                "Precio": 4800
            }
        },

        {
            nombre: "Aros de Calamar",
            precios: {
                "Precio": 5800
            }
        },

        {
            nombre: "Palomitas de Camarón",
            precios: {
                "Precio": 5000
            }
        },

        {
            nombre: "Mozzarella Sticks",
            precios: {
                "Precio": 4500
            }
        }

    ]

},

{
    nombre: "Pescados",

    descripcion: "Especialidades de pescado",

    nota: "🐟 El pescado entero (Pargo Rojo) está sujeto a disponibilidad y su precio depende del tamaño.",

    productos: [

        {
            nombre: "Pescado al Ajillo",
            precios: {
                "Precio": 5800
            }
        },

        {
            nombre: "Salmón al Ajillo",
            precios: {
                "Precio": 8500
            }
        },

        {
            nombre: "Camarones al Ajillo",
            precios: {
                "Precio": 7800
            }
        },

        {
            nombre: "Pulpo al Ajillo",

            nota: "El precio varía según el tamaño del pulpo.",

            precios: {
                "Según tamaño": 0
            }
        },

        {
            nombre: "Pescado Entero",

            nota: "Pargo Rojo. El precio varía según el tamaño.",

            precios: {
                "Según tamaño": 0
            }
        }

    ]

},

{
    nombre: "Nachos",

    descripcion: "Nachos especiales",

    productos: [

        {
            nombre: "Nachos de Pescado",
            precios: {
                "Precio": 5000
            }
        },

        {
            nombre: "Nachos Mixtos Camarón",
            precios: {
                "Precio": 5500
            }
        },

        {
            nombre: "Nachos Mixtos Pulpo",
            precios: {
                "Precio": 5500
            }
        },

        {
            nombre: "Nachos Triples",
            precios: {
                "Precio": 6000
            }
        },

        {
            nombre: "Nachos Marlin",
            precios: {
                "Precio": 6000
            }
        },

        {
            nombre: "Nachos Marlin Mixtos Camarón",
            precios: {
                "Precio": 6500
            }
        },

        {
            nombre: "Nachos Marlin Mixtos Pulpo",
            precios: {
                "Precio": 6500
            }
        },

        {
            nombre: "Nachos Marlin Triples",
            precios: {
                "Precio": 6800
            }
        }

    ]

},
{
    nombre: "Arroces",

    descripcion: "Arroces preparados al momento",

    productos: [

        {
            nombre: "Arroz con Camarones",
            precios: {
                "Precio": 7300
            }
        },

        {
            nombre: "Arroz con Mariscos",
            precios: {
                "Precio": 7800
            }
        },

        {
            nombre: "Arroz con Pulpo",
            precios: {
                "Precio": 8800
            }
        },

        {
            nombre: "Arroz Negro con Camarones",
            precios: {
                "Precio": 8500
            }
        },

        {
            nombre: "Arroz Negro con Mariscos",
            precios: {
                "Precio": 9000
            }
        },

        {
            nombre: "Arroz Negro con Pulpo",
            precios: {
                "Precio": 9000
            }
        },

        {
            nombre: "Arroz con Pulpo Baby",
            precios: {
                "Precio": 8000
            }
        },

        {
            nombre: "Arroz con Mariscos para Llevar",
            precios: {
                "Precio": 7800
            }
        },

        {
            nombre: "Camarones con Arroz para Llevar",
            precios: {
                "Precio": 7600
            }
        },

        {
            nombre: "Arroz Tutos",
            precios: {
                "Precio": 8500
            }
        },

        {
            nombre: "Adicional de Arroz",
            precios: {
                "Precio": 700
            }
        }

    ]

},

{
    nombre: "Sopas",

    descripcion: "Sopas y cremas",

    productos: [
         {
            nombre: "Sopa de Pescado",
            precios: {
                "Agua": 6000,
                "Leche": 6500
            }
        },

        {
            nombre: "Sopa de Mariscos",
            precios: {
                "Agua": 6000,
                "Leche": 6500
            }
        },

        {
            nombre: "Crema de Mariscos",
            precios: {
                "Precio": 7000
            }
        },

        {
            nombre: "Comal de Mariscos",
            precios: {
                "Precio": 7800
            }
        },

        {
            nombre: "Comal de Mariscos para Llevar",
            precios: {
                "Precio": 8100
            }
        }

    ]

},

{
    nombre: "Cazuelas",

    descripcion: "Especialidades de la casa",

    productos: [

        {
            nombre: "🍚 Todas las cazuelas vienen acompañadas de arroz o tostadas.",
            precios: {
                "Precio": 0
            }
        },

        {
            nombre: "Cazuela de Pescado",
            precios: {
                "Precio": 5600
            }
        },

        {
            nombre: "Cazuela de Gambas",
            precios: {
                "Precio": 6600
            }
        },

        {
            nombre: "Cazuela Tuto's",
            precios: {
                "Precio": 7000
            }
        },

        {
            nombre: "Cazuela de Mejillón",
            precios: {
                "Precio": 5000
            }
        },

        {
            nombre: "Cazuela de Pulpo",
            precios: {
                "Precio": 9500
            }
        },

        {
            nombre: "Cazuela de Chicharrón de Pescado",
            precios: {
                "Precio": 4800
            }
        }

    ]

},
{
    nombre: "Bebidas",

    descripcion: "Bebidas frías",

    productos: [

        {
            nombre: "Coca Cola Regular",
            precios: {
                "355 ml": 900,
                "600 ml": 1400
            }
        },

        {
            nombre: "Coca Cola Zero",
            precios: {
                "355 ml": 900,
                "600 ml": 1400
            }
        },

        {
            nombre: "Fanta Roja",
            precios: {
                "355 ml": 900,
                "600 ml": 1400
            }
        },

        {
            nombre: "Fanta Naranja",
            precios: {
                "355 ml": 900,
                "600 ml": 1400
            }
        },

        {
            nombre: "Fanta Uva",
            precios: {
                "355 ml": 900,
                "600 ml": 1400
            }
        },

        {
            nombre: "Gin",
            precios: {
                "355 ml": 900,
                "600 ml": 1400
            }
        },

        {
            nombre: "Fresca",
            precios: {
                "355 ml": 900,
                "600 ml": 1400
            }
        },

        {
            nombre: "Del Valle",
            precios: {
                "355 ml": 900
            }
        },

        {
            nombre: "Fuze Tea",
            precios: {
                "600 ml": 1400
            }
        },

        {
            nombre: "Soda",
            precios: {
                "600 ml": 1400
            }
        },

        {
            nombre: "Soda Michelada",
            precios: {
                "Precio": 1800
            }
        },

        {
            nombre: "Vaso Michelado",
            precios: {
                "Precio": 500
            }
        }

    ]

},

{
    nombre: "Batidos",

    descripcion: "Batidos Naturales",

    productos: [

        {
            nombre: "Sandía + Fresa + Naranja",
            precios: {
                "Agua": 2200,
                "Leche": 2600
            }
        },

        {
            nombre: "Limonada + Hierbabuena",
            precios: {
                "Agua": 2200,
                "Leche": 2600
            }
        },

        {
            nombre: "Fresa + Arándano + Mora",
            precios: {
                "Agua": 2500,
                "Leche": 2800
            }
        },

        {
            nombre: "Mango + Fresa",
            precios: {
                "Agua": 2200,
                "Leche": 2600
            }
        },

        {
            nombre: "Piña + Papaya + Naranja",
            precios: {
                "Agua": 2200,
                "Leche": 2600
            }
        },

        {
            nombre: "Fresa + Sandía",
            precios: {
                "Agua": 2200,
                "Leche": 2600
            }
        },

        {
            nombre: "Fresa + Guanábana",
            precios: {
                "Agua": 2200,
                "Leche": 2600
            }
        },

        {
            nombre: "Piña + Hierbabuena",
            precios: {
                "Agua": 2200,
                "Leche": 2600
            }
        }

    ]

},



{
    nombre:"Burritos",

    descripcion:"Especialidades",

    productos:[

        {

            nombre:"Burrito de Camarón",

            precios:{

                "precio":6000

            }

        },

        {

            nombre:"Burrito de Camarón con Papas",

            precios:{

                "precio":6500

            }

        }

    ]

},

{
    nombre:"Mayonesas",

    descripcion:"Salsas de la casa",

    productos:[

        {

            nombre:"Mayonesa de Aguacate",

            precios:{

                "x":0

            }

        },

        {

            nombre:"Mayonesa de Cilantro",

            precios:{

                "x":0

            }

        },

        {

            nombre:"Mayonesa de Albahaca",

            precios:{

                "x":0

            }

        },

        {

            nombre:"Mayonesa de Chile Panameño",

            precios:{

                "x":0

            }

        },

        {

            nombre:"Mayonesa de Piña",

            precios:{

                "x":0

            }

        },

        {

            nombre:"Mayonesa de Maracuyá",

            precios:{

                "x":0

            }

        },

        {

            nombre:"Mayonesa Original",

            precios:{

                "x":0

            }

        }

    ]

}

];

/*=========================================
        VARIABLES
=========================================*/

let currentCategory = null;

let currentView = "categories";

/*=========================================
        LIMPIAR
=========================================*/

function clearScreen(){

    container.innerHTML="";

}

/*=========================================
        TITULO
=========================================*/

function createTitle(text){

    const h2=document.createElement("h2");

    h2.className="section-title";

    h2.textContent=text;

    container.appendChild(h2);

}

/*=========================================
        BOTÓN VOLVER
=========================================*/

function createBack(callback,text="Volver"){

    const btn=document.createElement("button");

    btn.className="back-button";

    btn.innerHTML="← "+text;

    btn.onclick=callback;

    container.appendChild(btn);

}

/*=========================================
        MOSTRAR CATEGORÍAS
=========================================*/

function showCategories(){

    currentView="categories";

    currentCategory=null;

    clearScreen();

    menu.forEach(category=>{

        const card=document.createElement("div");

        card.className="category-card";

        card.innerHTML=`

            <div class="category-left">

                <div class="category-info">

                    <h3>${category.nombre}</h3>

                    <p>${category.descripcion}</p>

                </div>

            </div>

            <div class="category-arrow">

                ❯

            </div>

        `;

        card.onclick=()=>{

            showProducts(category);

        };

        container.appendChild(card);

    });

}

/*=========================================
        MOSTRAR PRODUCTOS
=========================================*/

function showProducts(category){

    currentView = "products";

    currentCategory = category;

    clearScreen();

    createBack(showCategories);

    createTitle(category.nombre);

    category.productos.forEach(product=>{

        const card=document.createElement("div");

        card.className="category-card";

        card.innerHTML=`

            <div class="category-left">

                <div class="category-info">

                    <h3>${product.nombre}</h3>

                </div>

            </div>

            <div class="category-arrow">

                ❯

            </div>

        `;

        card.onclick=()=>{

            showProductDetail(product);

        };

        container.appendChild(card);

    });

}

/*=========================================
        DETALLE PRODUCTO
=========================================*/

function showProductDetail(product){

    currentView="detail";

    clearScreen();

    createBack(()=>{

        showProducts(currentCategory);

    },currentCategory.nombre);

    createTitle(product.nombre);

    const card=document.createElement("div");

    card.className="product";

    const list=document.createElement("div");

    list.className="price-list";

    Object.entries(product.precios).forEach(([size,price])=>{

        const row=document.createElement("div");

        row.className="price-row";

        row.innerHTML=`

            <span>${size}</span>

            <span>₡${price.toLocaleString("es-CR")}</span>

        `;

        list.appendChild(row);

    });

    card.appendChild(list);

    container.appendChild(card);

}

/*=========================================
        BUSCADOR
=========================================*/

searchInput.addEventListener("input",()=>{

    const text=searchInput.value
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"");

    if(currentView==="categories"){

        clearScreen();

        menu
            .filter(category=>

                category.nombre
                    .toLowerCase()
                    .includes(text)

            )
            .forEach(category=>{

                const card=document.createElement("div");

                card.className="category-card";

                card.innerHTML=`

                    <div class="category-left">

                        <div class="category-info">

                            <h3>${category.nombre}</h3>

                            <p>${category.descripcion}</p>

                        </div>

                    </div>

                    <div class="category-arrow">

                        ❯

                    </div>

                `;

                card.onclick=()=>showProducts(category);

                container.appendChild(card);

            });

    }

});
function mostrarModal(texto){

    document.getElementById("modalTexto").textContent = texto;

    document.getElementById("modalInfo").style.display = "flex";

}

function cerrarModal(){

    document.getElementById("modalInfo").style.display = "none";

}

/*=========================================
        INICIAR
=========================================*/

showCategories();
