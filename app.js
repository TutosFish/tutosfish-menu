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
            nombre: "Ceviche Dorado",

            precios: {
                "Pequeño": 0, // ← Precio
                "Mediano": 0, // ← Precio
                "Grande": 0   // ← Precio
            }

        },

        {
            nombre: "Ceviche Dorado Mixto",

            precios: {
                "Pequeño": 0,
                "Mediano": 0,
                "Grande": 0
            }

        },

        {
            nombre: "Ceviche Dorado Triple",

            precios: {
                "Pequeño": 0,
                "Mediano": 0,
                "Grande": 0
            }

        },

        {
            nombre: "Ceviche Marlin Blanco",

            precios: {
                "Pequeño": 0,
                "Mediano": 0,
                "Grande": 0
            }

        },

        {
            nombre: "Ceviche Marlin Mixto",

            precios: {
                "Pequeño": 0,
                "Mediano": 0,
                "Grande": 0
            }

        },

        {
            nombre: "Ceviche Marlin Triple",

            precios: {
                "Pequeño": 0,
                "Mediano": 0,
                "Grande": 0
            }

        },

        {
            nombre: "Ceviche de Camarón",

            precios: {
                "Pequeño": 0,
                "Mediano": 0,
                "Grande": 0
            }

        },

        {
            nombre: "Ceviche de Pulpo",

            precios: {
                "Pequeño": 0,
                "Mediano": 0,
                "Grande": 0
            }

        },

        {
            nombre: "Vuelve a la Vida",

            precios: {
                "Normal": 0
            }

        },

        {
            nombre: "Ceviche de la Casa",

            precios: {
                "Normal": 0
            }

        },

        {
            nombre: "Ceviche 1000 Millas",

            precios: {
                "Normal": 0
            }

        }

    ]

},

{
    nombre: "Caldosas",

    descripcion: "Especialidad de la casa",

    productos: [

        {
            nombre: "Caldosa Dorada",

            precios: {
                "Normal": 0
            }

        },

        {
            nombre: "Caldosa Dorada Mixta",

            precios: {
                "Normal": 0
            }

        },

        {
            nombre: "Caldosa Dorada Triple",

            precios: {
                "Normal": 0
            }

        },

        {
            nombre: "Caldosa Marlin Blanco",

            precios: {
                "Normal": 0
            }

        },

        {
            nombre: "Caldosa Marlin Mixta",

            precios: {
                "Normal": 0
            }

        },

        {
            nombre: "Caldosa Marlin Triple",

            precios: {
                "Normal": 0
            }

        },

        {
            nombre: "Caldosa Camarón",

            precios: {
                "Normal": 0
            }

        },

        {
            nombre: "Caldosa Pulpo",

            precios: {
                "Normal": 0
            }

        }

    ]

},

{
    nombre: "Tartar",

    descripcion: "Preparado al momento.",

    productos: [

        {
            nombre: "Tartar de Pescado",
            precios: {
                "Pequeño": 0, // ₡4400
                "Mediano": 0, // ₡5800
                "Grande": 0   // ₡7000
            }
        },

        {
            nombre: "Tartar Mixto Camarón",
            precios: {
                "Pequeño": 0, // ₡5200
                "Mediano": 0, // ₡6300
                "Grande": 0   // ₡7500
            }
        },

        {
            nombre: "Tartar Mixto Pulpo",
            precios: {
                "Pequeño": 0, // ₡5200
                "Mediano": 0, // ₡6300
                "Grande": 0   // ₡7500
            }
        },

        {
            nombre: "Tartar Triple",
            precios: {
                "Pequeño": 0, // ₡5200
                "Mediano": 0, // ₡6300
                "Grande": 0   // ₡7500
            }
        },

        {
            nombre: "Tartar de Marlin",
            precios: {
                "Pequeño": 0, // ₡5000
                "Mediano": 0, // ₡6200
                "Grande": 0   // ₡7700
            }
        },

        {
            nombre: "Tartar Marlin Mixto Camarón",
            precios: {
                "Pequeño": 0, // ₡5500
                "Mediano": 0, // ₡6700
                "Grande": 0   // ₡8000
            }
        },

        {
            nombre: "Tartar Marlin Mixto Pulpo",
            precios: {
                "Pequeño": 0, // ₡5500
                "Mediano": 0, // ₡6700
                "Grande": 0   // ← confirmar
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
                "Normal":0 // ← Precio
            }
        },

        {
            nombre: "Papicamarón",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Papas Locas Pescado",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Papas Locas Mixtas Camarón",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Papas Locas Mixtas Pulpo",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Papas Locas Triples",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Papas Locas Marlin",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Papas Locas Marlin Mixtas Camarón",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Papas Locas Marlin Mixtas Pulpo",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Papas Locas Marlin Triples",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Adicional de Papas",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Adicional de Pan",
            precios:{
                "Normal":0
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
                "Normal":0
            }

        },

        {
            nombre:"Torre Mixta Camarón",

            precios:{
                "Normal":0
            }

        },

        {
            nombre:"Torre Mixta Pulpo",

            precios:{
                "Normal":0
            }

        },

        {
            nombre:"Torre Triple",

            precios:{
                "Normal":0
            }

        },

        {
            nombre:"Torre Marlin",

            precios:{
                "Normal":0
            }

        },

        {
            nombre:"Torre Marlin Mixta Camarón",

            precios:{
                "Normal":0
            }

        },

        {
            nombre:"Torre Marlin Mixta Pulpo",

            precios:{
                "Normal":0
            }

        },

        {
            nombre:"Torre Marlin Triple",

            precios:{
                "Normal":0
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

           precios: {
                "2 und": 0, 
                "3 und": 0, 
                "4 und": 0   
            }

        },

        {
            nombre:"Canasta Mixta Camarón",

           precios: {
                "2 und": 0, 
                "3 und": 0, 
                "4 und": 0   
            }

        },

        {
            nombre:"Canasta Mixta Pulpo",

           precios: {
                "2 und": 0, 
                "3 und": 0, 
                "4 und": 0   
            }

        },

        {
            nombre:"Canasta Triple",

           precios: {
                "2 und": 0, 
                "3 und": 0, 
                "4 und": 0   
            }

        },

        {
            nombre:"Canasta Marlin",

           precios: {
                "2 und": 0, 
                "3 und": 0, 
                "4 und": 0   
            }

        },

        {
            nombre:"Canasta Marlin Mixta Camarón",

           precios: {
                "2 und": 0, 
                "3 und": 0, 
                "4 und": 0   
            }
        },

        {
            nombre:"Canasta Marlin Mixta Pulpo",

           precios: {
                "2 und": 0, 
                "3 und": 0, 
                "4 und": 0   
            }

        },

        {
            nombre:"Canasta Marlin Triple",

           precios: {
                "2 und": 0, 
                "3 und": 0, 
                "4 und": 0   
            }

        }

    ]

},
{
    nombre: "Pastas",

    descripcion: "Pastas preparadas al momento",

    productos: [

        {
            nombre: "Pasta Salsa Blanca",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Pasta Salsa Roja",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Pasta al Ajillo",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Pasta Pesto",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Pasta a la Diabla",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Pasta con Camarón",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Pasta con Mariscos",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Pasta Mixta",
            precios: {
                "Normal": 0
            }
        }

    ]

},

{
    nombre: "Empanizados",

    descripcion: "Especialidades empanizadas",

    productos: [

        {
            nombre: "Camarones Empanizados",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Camarones Tempura",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Filet de Pescado Empanizado",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Filet de Pescado al Ajillo",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Deditos de Pescado",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Nuggets de Pollo",
            precios: {
                "Normal": 0
            }
        }

    ]

},

{
    nombre: "Pescados",

    descripcion: "Especialidades de pescado",

    productos: [

        {
            nombre: "Salmón al Ajillo",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Filet de Pescado",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Pescado Entero",

            nota: "El precio depende del tipo de pescado y su peso.",

            precios: { }

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
                "Normal": 0
            }
        },

        {
            nombre: "Nachos Mixtos Camarón",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Nachos Mixtos Pulpo",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Nachos Triples",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Nachos Marlin",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Nachos Marlin Mixtos Camarón",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Nachos Marlin Mixtos Pulpo",
            precios: {
                "Normal": 0
            }
        },

        {
            nombre: "Nachos Marlin Triples",
            precios: {
                "Normal": 0
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
            precios:{ "Normal":0 }
        },

        {
            nombre: "Arroz con Mariscos",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Arroz con Pulpo",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Arroz Negro con Camarones",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Arroz Negro con Mariscos",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Arroz Negro con Pulpo",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Arroz con Pulpo Baby",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Arroz con Mariscos para Llevar",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Camarones con Arroz para Llevar",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Adicional de Arroz",
            precios:{ "Normal":0 }
        }

    ]

},

{
    nombre: "Sopas",

    descripcion: "Sopas y cremas",

    productos: [

        {
            nombre: "Sopa de Mariscos",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Sopa de Pescado",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Crema de Mariscos",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Crema de Pescado",
            precios:{ "Normal":0 }
        }

    ]

},

{
    nombre: "Cazuelas",

    descripcion: "Especialidades de la casa",

    productos: [

        {
            nombre: "Cazuela de Pescado",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Cazuela de Gambas",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Cazuela de Pulpo",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Cazuela de Mariscos",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Cazuela Mixta",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Cazuela de Marlin",
            precios:{ "Normal":0 }
        },

        {
            nombre: "Tuto's Mariscada",
            precios:{ "Normal":0 }
        }

    ]

},
{
    nombre: "Bebidas",

    descripcion: "Bebidas frías",

    productos: [

        {
            nombre: "Coca Cola",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Coca Cola Zero",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Fanta Naranja",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Fanta Kolita",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Sprite",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Canada Dry",
            precios:{
                "Normal":0
            }
        },

        {
            nombre: "Agua Embotellada",
            precios:{
                "Normal":0
            }
        }

    ]

},

{
    nombre: "Batidos",

    descripcion: "Batidos Naturales",

    productos: [

        {
            nombre:"Sandía + Fresa",

            precios:{
                "Agua":2200,
                "Leche":2500
            }

        },

        {
            nombre:"Naranja + Fresa",

            precios:{
                "Agua":2200,
                "Leche":2500
            }

        },

        {
            nombre:"Piña + Papaya",

            precios:{
                "Agua":2200,
                "Leche":2500
            }

        },

        {
            nombre:"Piña + Hierbabuena",

            precios:{
                "Agua":2200,
                "Leche":2500
            }

        },

        {
            nombre:"Fresa + Mora",

            precios:{
                "Agua":2200,
                "Leche":2500
            }

        },

        {
            nombre:"Fresa + Guanábana",

            precios:{
                "Agua":2200,
                "Leche":2500
            }

        },

        {
            nombre:"Mango + Fresa",

            precios:{
                "Agua":2200,
                "Leche":2500
            }

        }

    ]

},

{
    nombre:"Frescos Naturales",

    descripcion:"Refrescantes",

    productos:[

        {

            nombre:"600 ml",

            precios:{

                "Normal":1400

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

                "Normal":0

            }

        },

        {

            nombre:"Burrito de Camarón con Papas",

            precios:{

                "Normal":0

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

                "Normal":0

            }

        },

        {

            nombre:"Mayonesa de Cilantro",

            precios:{

                "Normal":0

            }

        },

        {

            nombre:"Mayonesa de Albahaca",

            precios:{

                "Normal":0

            }

        },

        {

            nombre:"Mayonesa de Chile Panameño",

            precios:{

                "Normal":0

            }

        },

        {

            nombre:"Mayonesa de Piña",

            precios:{

                "Normal":0

            }

        },

        {

            nombre:"Mayonesa de Maracuyá",

            precios:{

                "Normal":0

            }

        },

        {

            nombre:"Mayonesa Original",

            precios:{

                "Normal":0

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

/*=========================================
        INICIAR
=========================================*/

showCategories();