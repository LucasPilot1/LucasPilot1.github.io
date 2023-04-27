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
        titulo: "Tortilla",
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
        titulo: "BLANQUEADOR BRILLA KING 2000 ML",
        imagen: "https://ik.imagekit.io/instaleap/d1/stockimages.tiendasd1.com/kobastockimages/IMAGENES/12000089.png?tr=w-449",
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
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/1060684-800-auto?v=638155561022830000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "naranja",
        titulo: "Malla de Naranja Olimpica X 2,5 Kg",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/612904-800-auto?v=637626516522770000&width=800&height=auto&aspect=true",
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
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/1060741-800-auto?v=638155561544700000&width=800&height=auto&aspect=true",
        categoria: {
            nombre: "Olimpica",
            id: "olimpica"
        },
        precio: 1000
    },
    {
        id: "cocacola",
        titulo: "Gaseosa CocaCola Sabor Original Lata 235 Ml X6 Unds",
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/1078023-800-auto?v=638174305729770000&width=800&height=auto&aspect=true",
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
        imagen: "https://olimpica.vtexassets.com/arquivos/ids/864684-800-auto?v=637907529186670000&width=800&height=auto&aspect=true",
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
    // Calypso
    {
        id: "francesa",
        titulo: "Papa rizada x 2500g",
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
        id: "tocineta",
        titulo: "Dedito de Queso x 300gr",
        imagen: "https://calypso-recursos.s3.amazonaws.com/productos/8shjVjbIHUldoUm.jpg",
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
    // Carrefour
    {
        id: "mostaza",
        titulo: "Mostaza Bary 1 Galón",
        imagen: "https://www.bary.com.co/wp-content/uploads/2021/07/MOSTAZA-PRUEBA.png",
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
        imagen: "https://quesospuertorico.com/wp-content/uploads/2022/06/pan-hamburguesa-anjojoli-bimbo-x-10-unidades.jpg",
        categoria: {
            nombre: "Carrefour",
            id: "carrefour"
        },
        precio: 1000
    },
    {
        id: "jamon",
        titulo: "Jamón Pierna",
        imagen: "",
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
        titulo: "Salsa de Tomate BARY 1000 gr",
        imagen: "https://exitocol.vtexassets.com/arquivos/ids/13182792-800-auto?v=637900593029400000&width=800&height=auto&aspect=true",
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
        titulo: "Bolsas para llevar de 50 Kg",
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
        imagen: "https://multidesechables.com/wp-content/uploads/2018/12/copas-plasticas-blancas-para-tomar-ron.jpg?x87776",
        categoria: {
            nombre: "Casa del Panadero",
            id: "panadero"
        },
        precio: 1000
    },
    {
        id: "gusanos",
        titulo: "GOMAS GRISSLY GUSANOS Grande",
        imagen: "https://copservir.vtexassets.com/arquivos/ids/771844/GOMAS-GRISSLY-GUSANOS_F.png?v=637951128673700000",
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
    }
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
                <p class="producto-precio">$${producto.precio}</p>
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