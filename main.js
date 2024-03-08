// PRODUCTOS
const productos = [
    // D1
    {
        id: "miel",
        titulo: "MIEL DE ABEJAS MEEL 350 G",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000826.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "tortilla",
        titulo: "TORTILLA BURRITO CRACHOS 8 UND - 580 G",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000225.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "sal",
        titulo: "SAL REFISAL 1000 G",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12002874.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "esponja",
        titulo: "ESPONJA MULTIUSOS TIDY HOUSE 3 UND",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000213.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "pano",
        titulo: "PAÑO ABSORBENTE TIDY HOUSE 1 UND",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000211.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "servilleta",
        titulo: "SERVILLETA CORTADA RENDY 200 UND",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000175.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "toallacocina",
        titulo: "TOALLA DE COCINA DOBLE HOJA RENDY 50 HOJAS",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000177.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "ambientador",
        titulo: "AMBIENTADOR EN AEROSOL LAVANDA HOSH 360 ML",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12003571.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "lavalozacrema",
        titulo: "CREMA LAVALOZA BRILLA KING 500 GRS",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000131.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "desengrasante",
        titulo: "DESENGRASANTE BRILLA KING 500 ML",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000240.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "citronela",
        titulo: "LIMPIADOR MULTIUSOS CITRONELLA BRILLA KING 1000 ML",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000678.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "blanqueador",
        titulo: "BLANQUEADOR EN GEL BRILLA KING 1000 ML",
        imagen: "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12002695.png",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "lavanda",
        titulo: "LIMPIADOR LAVANDA JAZMÍN BRILLA KING 1L",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000090.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "lavaloza",
        titulo: "LAVALOZA LÍQUIDO BRILLA KING 500 ML",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000231.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "kedeli",
        titulo: "LIMONADA DE COCO KEDELI EN POLVO 450 GR",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12001116.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "jugolimon",
        titulo: "JUGO DE LIMÓN TREE FRUTS 250 ML",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12002197.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "salsamaiz",
        titulo: "SALSA MAÍZ DULCE ZEV 200GR",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12004001.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "tonica",
        titulo: "AGUA TÓNICA WHITE CROWN 269 ML",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12004176.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "papel",
        titulo: "PAPEL HIGIÉNICO 3 H 12 UN RENDY 33 MTS",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12004365.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "ginger",
        titulo: "GASEOSA SCHWEPPES GINGER ALE PET 1500ML",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12004749.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "detergentepolvo",
        titulo: "DETERGENTE EN POLVO MULTIUSOS BONAROPA 2800 G",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000310.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "lychees",
        titulo: "LYCHEES EN ALMÍBAR COOLTIVO 567 G",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12004167.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "guantes",
        titulo: "GUANTE DOMÉSTICO TIDY HOUSE TALLA M",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000218.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "trapero",
        titulo: "REPUESTO PARA TRAPERO TIDY HOUSE 1 UND",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000723.png?tr=w-449",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "multiusos",
        titulo: "DESINFECTANTE MULTIUSOS BRILLA KING 500ML",
        imagen: "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12003535.png",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "panos",
        titulo: "PAÑO LIMPIÓN TIDY HOUSE 4 UND",
        imagen: "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000215.png",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "scott",
        titulo: "PAÑO REUTILIZABLE DURAMAX 50 UND",
        imagen: "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12004388.png",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "manos",
        titulo: "JABÓN LÍQUIDO FLOR DE LOTO NATURAL FEELING 500 ML",
        imagen: "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12003223.png",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "vodka",
        titulo: "VODKA RUSSKAYA 750 ML",
        imagen: "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12005185.png",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "encendedor",
        titulo: "Encendedores",
        imagen: "https://dlucas.com.pe/wp-content/uploads/2021/03/encendedor-desechable2.jpg",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "ginebra",
        titulo: "GINEBRA DAFNE 700 ML",
        imagen: "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12003805.png",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    {
        id: "zdenaranja",
        titulo: "JUGO DE NARANJA FRESCO TREE FRUTS 1000 ML",
        imagen: "https://stockimages.tiendasd1.com/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000380.png",
        categoria: {
            nombre: "D1",
            id: "d1"
        },
        precio: 1000
    },
    // CORZO
    {
        id: "semiduro",
        titulo: "Queso Semiduro",
        imagen: "https://sumerlabs.com/sumer-app-90b8f.appspot.com/product_photos%2F30aaf853dbf4e75a4b73e4cb477f4dd2%2Fa9342590-7eff-11ec-a2e5-ed41a65448e8?alt=media&token=2409590c-0af7-488d-8b96-2772da3ece88",
        categoria: {
            nombre: "Corzo",
            id: "corzo"
        },
        precio: 1000
    },
    // OLIMPICA
    {
        id: "yerbabuena",
        titulo: "Yerbabuena",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/735647-800-auto?v=637782321468130000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "limon",
        titulo: "Malla de Limón Tahití 1,5 Kg",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/735583-800-auto?v=637782320812070000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "lechuga",
        titulo: "Lechuga Olimpica Verde Cresca Hidropónica X 180 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/735623-1600-auto?v=637782321222600000&width=1600&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "patotanquediscos",
        titulo: "Desinfectante Inodoro Pato Discos Activos Citrico Repuesto 36ml",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/1078474-800-auto?v=638175522608830000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "patotanque",
        titulo: "Limpiador Inodoro Pato Tanque Pastilla Marina 3 Pack 120g",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/1320192-800-auto?v=638446576715100000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "naranja",
        titulo: "Malla de Naranja Olimpica X 2,5 Kg",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/1158828-800-auto?v=638313353731000000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "chorizo",
        titulo: "Chorizo Rica Paquete Familiar 20 Unds X1000 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/711376-800-auto?v=637741083778400000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "cafe",
        titulo: "Café Nescafé Matinal 82 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/717294-800-auto?v=637756102178570000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "cerezas",
        titulo: "Cerezas La Coruña Marraschino 500 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/613433-800-auto?v=637626517473130000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "naranjaimportada",
        titulo: "Naranja Importada X Unidad",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/735585-800-auto?v=637782320844600000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "manzada",
        titulo: "Manzana Verde Importada X Unidad",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/735537-800-auto?v=637782320426030000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "tomate",
        titulo: "Tomate Verde X Unidad",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/865371-800-auto?v=637908070947270000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "ziploc",
        titulo: "Bolsa Ziploc Reutilizable Grandes Para Organizar Slider 10 Unds",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/1316631-800-auto?v=638443147853000000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "cocacola",
        titulo: "Gaseosa CocaCola Sabor Original Lata 235 Ml X6 Unds",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/1245690-800-auto?v=638373822148330000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "lechepolvo",
        titulo: "LECHE POLV MEDALLA DE ORO AZUCARADA 900g",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/1071367-800-auto?v=638168438989730000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "cebolla",
        titulo: "Cebolla Cabezona Blanca X Unidad",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/865293-800-auto?v=637908069989870000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "pepino",
        titulo: "Pepino x Unidad",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/865297-800-auto?v=637908070057770000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "takis",
        titulo: "TAKIS",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/869579-800-auto?v=637922821154300000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "cebollin",
        titulo: "Cebollín",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/865295-800-auto?v=637908070026970000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "cilantro",
        titulo: "Cilantro Criollo Macito X 50 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/735478-800-auto?v=637782319915130000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "azucar",
        titulo: "Azúcar La Económica 2,5 Kg",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/633608-800-auto?v=637626557412800000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "ajo",
        titulo: "COND AJO POLV O CHAPET 60 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/643967-800-auto?v=637626590793970000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "adobocompleto",
        titulo: "COND ADOBO OCOMPLET CHAPET 60 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/643970-800-auto?v=637626590808330000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "pimienta",
        titulo: "COND PIMIENTA O CHAPET 60 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/643969-800-auto?v=637626590803630000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "bolsasbasura",
        titulo: "Bolsa Basura Eterna Resident 10 Unds X3 Pack",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/717451-800-auto?v=637756105254570000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "aluminio",
        titulo: "Papel Aluminio Olimpica X40 M",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/629836-800-auto?v=637626548133170000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "fresas",
        titulo: "Fresa Olimpica Estuche Jumbo X 500 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/613307-800-auto?v=637626517244930000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "kiwi",
        titulo: "Kiwi X Unidad",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/1158835-800-auto?v=638313357348870000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "uvas",
        titulo: "Uva Isabela Olimpica Bandeja X 500 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/613795-800-auto?v=637626518055970000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    
    {
        id: "te",
        titulo: "Té Suntea Instantáneo Limón 436 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/764458-800-auto?v=637806292099000000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "stella",
        titulo: "CAJA FRIA Cerveza Stella Artois En Botella 330 ML X6 Unds",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/916598-800-auto?v=638023931764830000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "smirnoff",
        titulo: "Vodka Smirnoff Green Apple Lata 1000 ML X4 Unds",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/648406-800-auto?v=637626618138170000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "monster",
        titulo: "Bebida Energizante Monster 437ml",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/1141205-800-auto?v=1780083765&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "res",
        titulo: "4kg de carne de res Posta Rosada la más pulpa abierta",
        imagen: "https://i0.wp.com/todosobreganado.com/wp-content/uploads/2018/03/carne-de-res-colombiana.jpg?fit=1300%2C866&ssl=1",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "crispeta",
        titulo: "Maíz Olimpica Pira 500 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/613409-800-auto?v=637626517430700000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "arandanos",
        titulo: "Jugo L'onda Cranberry 1,89 ML (Que NO sea light)",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/765469-800-auto?v=637806424308700000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "canela",
        titulo: "Condimento El Rey Canela Seleccionada 15 G",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/957229-1200-auto?v=638047464304200000&width=1200&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "jengibre",
        titulo: "250 gr de Jengibre",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/735464-1200-auto?v=637782319705830000&width=1200&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    // CARNES
    {
        id: "cerdo",
        titulo: "Carne de Cerdo - Palamilanesa",
        imagen: "https://www.lafazenda.com.co/_/images/uploads/753_326_imagen_productos_20.png",
        categoria: {
            nombre: "Carnes",
            id: "carnes"
        },
        precio: 1000
    },
    {
        id: "pollo",
        titulo: "Pollo - 5 kg de pechuga blanca congelada en bloque sin hueso",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/892138/24039413.jpg?v=637971252364270000",
        categoria: {
            nombre: "Carnes",
            id: "carnes"
        },
        precio: 1000
    },
    {
        id: "burger",
        titulo: "Carne de Hamburguesa",
        imagen: "https://gastronomicainternacional.com/wp-content/uploads/2020/04/carne-hamburguesa-2-1024x576.jpg",
        categoria: {
            nombre: "Carnes",
            id: "carnes"
        },
        precio: 1000
    },
    // Calypso
    {
        id: "francesa",
        titulo: "IPA114 PAPA FRITTERS RIZADA X 2.5Kg",
        imagen: "https://calypso-recursos.s3.amazonaws.com/productos/eGZN5NwNUSua3JK.jpg",
        categoria: {
            nombre: "Calypso",
            id: "calypso"
        },
        precio: 1000
    },
    {
        id: "casco",
        titulo: "Papa Cascos Sazonada x 2500 g",
        imagen: "https://calypso-recursos.s3.amazonaws.com/productos/ybTAU6XPvf16gXa.jpg",
        categoria: {
            nombre: "Calypso",
            id: "calypso"
        },
        precio: 1000
    },
    {
        id: "nuggets",
        titulo: "Nuggets Tradicional de Pollo Apanado 900Gr",
        imagen: "https://calypso-recursos.s3.amazonaws.com/productos/pPdMCVy6sRYJ3j9.jpg",
        categoria: {
            nombre: "Calypso",
            id: "calypso"
        },
        precio: 1000
    },
    {
        id: "aceite",
        titulo: "Aceite Oleico para Fritura x 20Lt",
        imagen: "https://calypso-recursos.s3.amazonaws.com/productos/laRI9tcZpfSgVHK.jpg",
        categoria: {
            nombre: "Calypso",
            id: "calypso"
        },
        precio: 1000
    },
    {
        id: "quesotajado",
        titulo: "Queso Tajado x 500g",
        imagen: "https://calypso-recursos.s3.amazonaws.com/productos/pE014tFwhpr3U92.jpg",
        categoria: {
            nombre: "Calypso",
            id: "calypso"
        },
        precio: 1000
    },
    {
        id: "tocineta",
        titulo: "Tocineta ahumada x 1000g",
        imagen: "https://calypso-recursos.s3.amazonaws.com/productos/0CGEuuoasijQnYp.jpg",
        categoria: {
            nombre: "Calypso",
            id: "calypso"
        },
        precio: 1000
    },
    {
        id: "deditos",
        titulo: "Dedito de Queso x 300gr",
        imagen: "https://calypso-recursos.s3.amazonaws.com/productos/8shjVjbIHUldoUm.jpg",
        categoria: {
            nombre: "Calypso",
            id: "calypso"
        },
        precio: 1000
    },
    {
        id: "paparipio",
        titulo: "Papa Cabello de Angel Premium x 1.000Gr",
        imagen: "https://calypso-recursos.s3.amazonaws.com/productos/y9wtRDoycim66qB.jpg",
        categoria: {
            nombre: "Calypso",
            id: "calypso"
        },
        precio: 1000
    },
    {
        id: "molidatubo",
        titulo: "Carne Molida de Angus 70/30 - 4KGr x und promedio",
        imagen: "https://calypso-recursos.s3.amazonaws.com/productos/gwWHntBKWFSXabe.jpg",
        categoria: {
            nombre: "Calypso",
            id: "calypso"
        },
        precio: 1000
    },
    {
        id: "salchicha",
        titulo: "Salchicha Americana Super Hot Dog x 16Unidades",
        imagen: "https://calypso-recursos.s3.amazonaws.com/productos/k6ZZeEZjdQQtA8u.jpg",
        categoria: {
            nombre: "Calypso",
            id: "calypso"
        },
        precio: 1000
    },
    {
        id: "salsatoci",
        titulo: "Mayonesa Sabor Tocineta x 1000g",
        imagen: "https://calypso-recursos.s3.amazonaws.com/productos/pfXoQPNtJ5K3GGu.jpg",
        categoria: {
            nombre: "Calypso",
            id: "calypso"
        },
        precio: 1000
    },
    // Carrefour
    {
        id: "mostaza",
        titulo: "Mostaza Bary la mas grande que tenga",
        imagen: "https://distrimarketsas.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6OTA1MzY1LCJwdXIiOiJibG9iX2lkIn19--d368264d1a05d09cf16d5f30fa09785ce1f3d335/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJqcGciLCJyZXNpemVfdG9fZml0IjpbODAwLDgwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--1420d7fd3d20057726f0ef3c0043db24ca0403be/salsa-con-mostaza-bary-180gr.jpg?locale=es",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "bbq",
        titulo: "Salsa BBQ Bary 1 Galón",
        imagen: "https://asicuc.com.co/wp-content/uploads/2020/08/galo.png",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "panperro",
        titulo: "Bimbo Pan Perro Paquete X 10 Unidades",
        imagen: "https://salsamentariaeltigre.co/wp-content/uploads/2020/07/IMAGENES-10800.jpg",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "pantajado",
        titulo: "Pan Mantequilla Extralargo Guadalupe x 550g",
        imagen: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/193083-800-800?v=637814023796400000&width=800&height=800&aspect=true",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "panhamburguesa",
        titulo: "Pan Hamburguesa Ajonjolí Bimbo x 10und",
        imagen: "https://www.recetasderechupete.com/wp-content/uploads/2017/05/Pan-de-hamburguesa.jpg",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "jamon",
        titulo: "Jamón Pierna",
        imagen: "data:image/jpeg;base64,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",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "palillos",
        titulo: "Palillos de dientes El Sol x180und",
        imagen: "https://fonina.co/2369-large_default/palillos-de-dientes-el-sol-x180und.jpg",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "palilloshamburguesa",
        titulo: "Palillos para Hamburguesa",
        imagen: "https://productosbiodegradablescolombia.com/wp-content/uploads/2020/03/Pinchos-palillos-6.jpg",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "tenedores",
        titulo: "Tenedores Desechables Negros",
        imagen: "https://www.plasticomania.com/363-large_default/tenedores-luxe-plastico-negros.jpg",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "peperoni",
        titulo: "Peperoni",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKuYkGizrapahbCdJSYgxMP68q3n4nE4zdg&usqp=CAU",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "salsatomate",
        titulo: "Salsa de Tomate BARY la mas grande",
        imagen: "https://exitocol.vtexassets.com/arquivos/ids/20148629-800-auto?v=638345489232630000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "j1",
        titulo: "Porta comida J1 Negro",
        imagen: "https://images.rappi.com/products/1628431538752.png",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "p1",
        titulo: "Porta comida P1 Negro",
        imagen: "https://desechablesdiversos.com/enlinea/wp-content/uploads/2020/04/00878.jpg",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "vasoplastico16",
        titulo: "Vaso desechable plástico 16oz de los económicos",
        imagen: "https://serka.com.co/wp-content/uploads/sites/3/2022/09/Historias-1-31.png",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "vasoplastico",
        titulo: "Vaso desechable plástico 12oz de los económicos",
        imagen: "https://distribuidorafp.com.co/wp-content/uploads/2020/12/Vaso-Desechable-Transparente-Tuc-50-und-x-12-oz.jpg",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "mayonesa",
        titulo: "Mayonesa Pompeya 1 Galón",
        imagen: "https://pordomicilio.com.co/cienaga/wp-content/uploads/jet-engine-forms/27/2022/08/Galon-4150g-Mayonesa.png",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "pina",
        titulo: "Salsa Piña Oro Miel la mas grande",
        imagen: "https://www.sabrosisima.com.co/wp-content/uploads/2022/03/Gel-pina-4000gr.-doypack.jpg",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "mantequilla",
        titulo: "Mantequilla La Fina mesa con sal x250g",
        imagen: "https://solofruver.com/wp-content/uploads/2021/12/MANTEQUILLA-LA-FINA-CON-SAL.jpg",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    // Casa del Panadero
    {
        id: "coco",
        titulo: "Crema de coco",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_781053-MCO43762279481_102020-O.jpg",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "souffle",
        titulo: "100 Copas Souffle con tapa",
        imagen: "https://frigoca.com/wp-content/uploads/2021/04/Copa-souffle-1-oz-1.jpg",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "bolsallevar",
        titulo: "Bolsas para llevar de 5 Kg",
        imagen: "https://m.media-amazon.com/images/I/71f78fOC58L._AC_UL1500_.jpg",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "porcionar",
        titulo: "Bolsas para porcionar",
        imagen: "https://static.wixstatic.com/media/41f8d3_d21bcea9f38d3f618b55f3218d1c0b2c.gif",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "separadores",
        titulo: "Separadores Lamina Plastico 15x15 Separar Carne Hamburguesa",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_814688-MCO52055852963_102022-O.jpg",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "parafinado",
        titulo: "Papel Parafinado de Cuadros Cortado",
        imagen: "https://ecocosta.com.co/wp-content/uploads/2022/03/PAPEL-PARAFINADO-DE-CUADROS.jpg",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "tajin",
        titulo: "Tajín",
        imagen: "https://dislicoresqa.vtexassets.com/arquivos/ids/257244/165000-TAJIN-CLASICO-142GRM.png?v=637892563740770000",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "12oz",
        titulo: "Vaso 12 onzas de icopor Darnel Sin Tapa",
        imagen: "https://surtiya.com.co/wp-content/uploads/sites/4/2021/10/VASO-12-ICOPOR-PQ-20-DARNEL-CJ-502.png",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "16oz",
        titulo: "Vaso 16 onzas de icopor Darnel Sin Tapa",
        imagen: "https://serka.com.co/wp-content/uploads/sites/3/2021/04/VASO-16-ICOPOR-CTAPA-PQ-20-DARNEL-CJ-251_Mesa-de-trabajo-1-copia-51.png",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "vasos16",
        titulo: "VASO 16 OZ",
        imagen: "https://www.todoaseo.com/wp-content/uploads/2019/01/04654.jpg",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "copitas",
        titulo: "Copitas de Aguardiente x 50",
        imagen: "https://distribuidoraixcoyax.com.gt/wp-content/uploads/2020/09/vaso-pequeno-300x300.jpg",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "domo",
        titulo: "Vasos Domo con Tapa 16 oz",
        imagen: "https://www.plasticossanjose.com/wp-content/uploads/2017/12/WhatsApp-Image-2020-08-20-at-3.54.48-PM-2-e1598023134306.jpeg",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "gusanos",
        titulo: "GOMAS GRISSLY GUSANOS Grande",
        imagen: "https://colsubsidiogrocery.vtexassets.com/arquivos/ids/177557/7702011129741_1.png?v=638213387077300000",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "pitillos",
        titulo: "Pitillos de Colores con empaque individual",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_644732-MCO42901159350_072020-O.jpg",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "chips",
        titulo: "bolsa de chips de chocolate",
        imagen: "https://pepitasybolitas.com/wp-content/uploads/2020/06/Chips-Chocolate-Negro-1.jpg",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    // Estanco La 30
    {
        id: "agua",
        titulo: "Pacas de agua en botella",
        imagen: "https://copservir.vtexassets.com/arquivos/ids/766672/AGUA-CRISTAL_F.png?v=637950282434970000",
        categoria: {
            nombre: "Estanco La 30",
            id: "estanco"
        },
        precio: 1000
    },
        {
        id: "light",
        titulo: "canasta de Águila Light",
        imagen: "https://jotajotafoods.com/wp-content/uploads/2022/06/CER00037.jpg",
        categoria: {
            nombre: "Estanco La 30",
            id: "estanco"
        },
        precio: 1000
    },
    {
    id: "tradicional",
    titulo: "canasta de Águila Tradicional",
    imagen: "https://sushilight.com/wp-content/uploads/2019/05/Aguila.jpg",
    categoria: {
        nombre: "Estanco La 30",
        id: "estanco"
    },
    precio: 1000
},
{
id: "club",
titulo: "canasta de Clubcolombia dorada",
imagen: "https://jotajotafoods.com/wp-content/uploads/2022/05/CER00005.jpg",
categoria: {
    nombre: "Estanco La 30",
    id: "estanco"
},
precio: 1000
},
{
id: "coronita",
titulo: "cajas de Coronita",
imagen: "https://bevgo.com.co/wp-content/uploads/2021/03/82038.jpg",
categoria: {
    nombre: "Estanco La 30",
    id: "estanco"
},
precio: 1000
},
{
id: "gatorade",
titulo: "pacas de Gatorade",
imagen: "https://cdn1.totalcommerce.cloud/gastronomy/product-zoom/es/bebida-gatorade-tropical-fruit-500ml-1.webp",
categoria: {
    nombre: "Estanco La 30",
    id: "estanco"
},
precio: 1000
},
{
id: "gingerestanco",
titulo: "pacas de Ginger",
imagen: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/559678-800-800?v=638411087952430000&width=800&height=800&aspect=true",
categoria: {
    nombre: "Estanco La 30",
    id: "estanco"
},
precio: 1000
},
{
id: "poker",
titulo: "canasta de Poker",
imagen: "https://jotajotafoods.com/wp-content/uploads/2021/12/CER00028-1.jpg",
categoria: {
    nombre: "Estanco La 30",
    id: "estanco"
},
precio: 1000
},
{
id: "smirnoffestanco",
titulo: "caja de Smirnoff Icee Manzana",
imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUs1LGBH0g9GQNZMBgXIw39xmPwkwHmCsQg&usqp=CAU",
categoria: {
    nombre: "Estanco La 30",
    id: "estanco"
},
precio: 1000
},
{
id: "soda",
titulo: "pacas de Soda Schweppes",
imagen: "https://d2d21jw8en5l3a.cloudfront.net/vendty2_db_4188_TIEND2016/imagenes_productos/OIP%20(72).jpg",
categoria: {
    nombre: "Estanco La 30",
    id: "estanco"
},
precio: 1000
},
{
id: "stellaestanco",
titulo: "caja de Stella",
imagen: "https://dislicoresqa.vtexassets.com/arquivos/ids/282104/370519-CERVEZA_STELLA_ARTOIS_SIXPACK_330ML.png?v=637901730325130000",
categoria: {
    nombre: "Estanco La 30",
    id: "estanco"
},
precio: 1000
},
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {    
        
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }        

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}

let productosEnCarrito;

const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (productosEnCarritoLS) {
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
} else {
    productosEnCarrito = []; 
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
       productosEnCarrito[index].cantidad++;
    } else { 
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito; 
}
