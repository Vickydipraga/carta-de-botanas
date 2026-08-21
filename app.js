const business = {
  name: "Carta De Botanas",
  brandTitle: "DE BOTANAS",
  brandSubtitle: "CARTA DIGITAL",
  whatsapp: "",
  instagram: "",
  maps: "",
};

const categories = [
  { name: "ENTRADAS", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/AMNrA6iq0CalFnmqykhi.JPG" },
  { name: "MEXICANO", image: "https://i.pinimg.com/736x/88/d7/14/88d7149da234ff7ffdb198b26e9169c4.jpg" },
  { name: "LOMITOS", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { name: "SANDWICH", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { name: "PRINCIPALES", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { name: "PASTAS", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { name: "MINUTAS", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { name: "WRAPS & ENSALADA", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { name: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/e363e5d1-4b1a-4897-9d7d-ea363e276048.jpeg?quality=90&width=1680&webp=1" },
  { name: "BEBIDAS", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { name: "TRAGOS", image: "https://i.pinimg.com/236x/24/6a/26/246a269b6452768cfe9d210b85519d5f.jpg" },
  { name: "VINOS", image: "https://i.pinimg.com/236x/a4/de/d9/a4ded9927e9ec6f6c1ce2ae5c3ad0990.jpg" },
  { name: "POSTRES", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
];

const subcategories = {
  MEXICANO: [
    { name: "Todos", image: "https://i.pinimg.com/736x/88/d7/14/88d7149da234ff7ffdb198b26e9169c4.jpg" },
    { name: "Fajitas", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/mA7BOL3XLcvrOg4MY3Bm.JPG" },
    { name: "Tacos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqgGc0COzQemuUtEvoqQlwar4euEwhdjP4A&s" },
    { name: "Quesadillas", image: "https://www.vvsupremo.com/wp-content/uploads/2016/12/Chipotle-Chicken-Quesadillas.jpg" },
    { name: "Burritos", image: "https://assets.unileversolutions.com/recipes-v2/248654.jpg" },
  ],
  BEBIDAS: [
    { name: "Todos", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
    { name: "Sin Alcohol", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
    { name: "Cervezas", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  ],
  TRAGOS: [
    { name: "Todos", image: "https://i.pinimg.com/236x/24/6a/26/246a269b6452768cfe9d210b85519d5f.jpg" },
    { name: "Tragos", image: "https://i.pinimg.com/236x/24/6a/26/246a269b6452768cfe9d210b85519d5f.jpg" },
    { name: "Botellas", image: "https://lh3.googleusercontent.com/R-YmFVv0i4Y_2On8UAbR_apEYbuWiXVAXE5l-kAj1Y_tpwsnIbd8casRy8rDDtBD8tyLVgshAVJt-BpNnQ=s265-w265-h265" },
  ],
  VINOS: [
    { name: "Todos", image: "https://i.pinimg.com/236x/a4/de/d9/a4ded9927e9ec6f6c1ce2ae5c3ad0990.jpg" },
    { name: "Malbec 750 ml", image: "https://i.pinimg.com/236x/a4/de/d9/a4ded9927e9ec6f6c1ce2ae5c3ad0990.jpg" },
    { name: "Malbec 375 ml", image: "https://i.pinimg.com/236x/2b/ac/0d/2bac0de071df8a05586b8d5f6af84322.jpg" },
    { name: "Cabernet 750 ml", image: "https://bodegavistalba.com/tienda/134-large_default/tomero-cabernet-sauvignon.jpg" },
    { name: "Blend 750 ml", image: "https://acdn.mitiendanube.com/stores/871/106/products/mosquita-muerta-blend1-16012ed07b1313753d15585332481699-640-0.jpg" },
    { name: "Blancos 750 ml", image: "https://jumboargentina.vtexassets.com/arquivos/ids/799272-800-600?v=638345361796200000&width=800&height=600&aspect=true" },
    { name: "Dulces 750 ml", image: "https://winesupply.vtexassets.com/arquivos/ids/158881-800-auto?v=638246812420270000&width=800&height=auto&aspect=true" },
  ],
  "WRAPS & ENSALADA": [
    { name: "Todos", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
    { name: "Wraps", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
    { name: "Ensaladas", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  ],
};

const menuNotices = {
  "MEXICANO::Fajitas": "Todas nuestras fajitas son para dos personas e incluyen 6 tortillas y 4 variedades de salsas.",
  "MEXICANO::Tacos": "Porción individual. Incluye 2 tortillas rellenas y 4 variedades de salsas.",
  "LOMITOS::Todos": "Todos nuestros lomitos vienen acompañados con papas fritas.",
  "PIZZAS::Todos": "Elegí el tamaño de tu pizza: 4 porciones u 8 porciones.",
};

const recommendedProductIds = ["fajitas-mixtas", "ojo-de-bife", "rabas"];

const products = [
  { id: "aros-de-cebolla", rank: "BOTANA", title: "Aros de Cebolla", category: "ENTRADAS", price: 5000, short: "Crujientes aros de cebolla rebozados y fritos hasta alcanzar la perfección dorada.", description: "Crujientes aros de cebolla, rebozados y fritos hasta alcanzar la perfección dorada.", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/AMNrA6iq0CalFnmqykhi.JPG" },
  { id: "nachos-con-queso", rank: "PARA COMPARTIR", title: "Nachos con Queso", category: "ENTRADAS", price: 7000, short: "Tortilla chips con una generosa capa de queso cheddar derretido.", description: "Tortilla chips cubiertos con una generosa capa de queso cheddar derretido, ideales para compartir.", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/4HngptVpRkXPCIhtj27A.JPG" },
  { id: "nachos-de-botanas", rank: "DE LA CASA", title: "Nachos De Botanas", category: "ENTRADAS", price: 9000, short: "Tortilla chips con cheddar derretido y panceta ahumada.", description: "Tortilla chips cubiertos con una generosa capa de queso cheddar derretido y panceta ahumada, ideales para compartir.", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/y9Ebv7eRp1guPvFfRvMy.JPG" },
  { id: "bastones-de-mozzarella", rank: "BOTANA", title: "Bastones de Mozzarella", category: "ENTRADAS", price: 9000, short: "Cinco bastones de mozzarella envueltos en jamón, empanizados y fritos.", description: "Cinco bastones de queso mozzarella, envueltos en jamón cocido, empanizados y fritos, con un interior suave y fundido.", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/ak7pHnL5JKjeGzzp5iBl.JPG" },
  { id: "pollos-machotes", rank: "BOTANA", title: "Pollos Machotes", category: "ENTRADAS", price: 8000, short: "Jugosas piezas de pollo rebozadas, sazonadas y fritas.", description: "Jugosas piezas de pollo rebozadas, sazonadas y fritas, irresistibles y llenas de sabor.", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/r7Pa6kva1yplZLpRIrb0.JPG" },
  { id: "empanada-de-osobuco", rank: "CLÁSICA", title: "Empanada de Osobuco", category: "ENTRADAS", price: 2500, short: "Empanada rellena de osobuco cocido lentamente.", description: "Empanada rellena de osobuco cocido lentamente y horneada hasta alcanzar un dorado perfecto.", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/3rJ2bOVq7Cv5AedehPcl.JPG" },
  { id: "rabas", rank: "BOTANA", title: "Rabas", category: "ENTRADAS", price: 20000, short: "Anillos de calamar crujientes por fuera y tiernos por dentro.", description: "Anillos de calamar rebozados y fritos, crujientes por fuera y tiernos por dentro.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "langostinos-rebozados", rank: "BOTANA", title: "Langostinos Rebozados", category: "ENTRADAS", price: 15000, short: "Langostinos frescos, rebozados y fritos.", description: "Langostinos frescos, rebozados y fritos, ideales para un aperitivo delicioso.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "papas-fritas", rank: "CLÁSICA", title: "Papas Fritas", category: "ENTRADAS", price: 8000, short: "Papas doradas y crujientes, el acompañamiento perfecto.", description: "Clásicas papas fritas, doradas y crujientes, el acompañamiento perfecto.", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/sJ5VmHdWNjBxeGzHqHmE.JPG" },
  { id: "papas-fritas-con-huevo", rank: "BOTANA", title: "Papas Fritas con Huevo", category: "ENTRADAS", price: 9500, short: "Papas fritas cubiertas con un huevo frito.", description: "Papas fritas cubiertas con un huevo frito, una combinación simple y deliciosa.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "papas-tomates-cherry-panceta", rank: "BOTANA", title: "Papas con Tomates Cherry y Panceta", category: "ENTRADAS", price: 11000, short: "Papas con tomates cherry y panceta crocante.", description: "Papas fritas acompañadas con tomates cherry y panceta crocante.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "tortilla-de-papa", rank: "CLÁSICA", title: "Tortilla de Papa", category: "ENTRADAS", price: 8000, short: "Clásica tortilla española de papas y huevos.", description: "Una clásica tortilla española hecha con papas y huevos, suave y sabrosa.", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/fDd0MG4PtikzZpB8ypsy.JPG" },
  { id: "provoleta", rank: "BOTANA", title: "Provoleta", category: "ENTRADAS", price: 16000, short: "Queso provolone a la parrilla, dorado y fundido.", description: "Queso provolone a la parrilla, dorado y fundido, con un toque de orégano.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "combo-infantil", rank: "INFANTIL", title: "Combo Infantil", category: "ENTRADAS", price: 9000, short: "Bastones de pollo empanizado con papas fritas.", description: "Una combinación pensada para los más pequeños: bastones de pollo empanizado y papas fritas.", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/4YVN07crwXZCEU0BU4fa.JPG" },
  { id: "picada-de-botanas", rank: "PARA COMPARTIR", title: "Picada De Botanas", category: "ENTRADAS", price: 35000, short: "Una selección especial para compartir.", description: "Picada De Botanas con una selección especial de la casa, ideal para compartir.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "fajitas-de-carne", rank: "PARA COMPARTIR", title: "Fajitas de Carne", category: "MEXICANO", subcategory: "Fajitas", price: 35000, short: "Para dos personas, con 6 tortillas y 4 salsas.", description: "Fajitas de carne para dos personas. Incluyen 6 tortillas y 4 variedades de salsas.", image: "https://i.pinimg.com/736x/88/d7/14/88d7149da234ff7ffdb198b26e9169c4.jpg" },
  { id: "fajitas-de-pollo", rank: "PARA COMPARTIR", title: "Fajitas de Pollo", category: "MEXICANO", subcategory: "Fajitas", price: 30000, short: "Para dos personas, con 6 tortillas y 4 salsas.", description: "Fajitas de pollo para dos personas. Incluyen 6 tortillas y 4 variedades de salsas.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "fajitas-de-langostinos", rank: "PARA COMPARTIR", title: "Fajitas de Langostinos", category: "MEXICANO", subcategory: "Fajitas", price: 40000, short: "Para dos personas, con 6 tortillas y 4 salsas.", description: "Fajitas de langostinos para dos personas. Incluyen 6 tortillas y 4 variedades de salsas.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4o2JtTKR_YzD5Pk2f3MAyrlKGTfV0tmQo0g&s" },
  { id: "fajitas-mixtas", rank: "PARA COMPARTIR", title: "Fajitas Mixtas", category: "MEXICANO", subcategory: "Fajitas", price: 32000, short: "Para dos personas, con 6 tortillas y 4 salsas.", description: "Fajitas mixtas de pollo y carne para dos personas. Incluyen 6 tortillas y 4 variedades de salsas.", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/mA7BOL3XLcvrOg4MY3Bm.JPG" },
  { id: "fajitas-vegetarianas", rank: "PARA COMPARTIR", title: "Fajitas Vegetarianas", category: "MEXICANO", subcategory: "Fajitas", price: 25000, short: "Para dos personas, con 6 tortillas y 4 salsas.", description: "Fajitas vegetarianas para dos personas. Incluyen 6 tortillas y 4 variedades de salsas.", image: "https://static.wixstatic.com/media/7d795e_d1e59426898b4491b50f0e60cbccc2f8~mv2.jpg/v1/fill/w_569,h_354,al_c,q_80/Fajitas-vegetarianas-con-guacamole-.jpg" },
  { id: "fajitas-mixtas-con-champinones", rank: "PARA COMPARTIR", title: "Fajitas Mixtas con Champiñones", category: "MEXICANO", subcategory: "Fajitas", price: 38000, short: "Para dos personas, con 6 tortillas y 4 salsas.", description: "Fajitas mixtas con champiñones para dos personas. Incluyen 6 tortillas y 4 variedades de salsas.", image: "https://images.deliveryhero.io/image/pedidosya/products/3cd99dd1-3768-4b0c-9cf4-32fd01c9d5b6.jpeg?quality=90&width=1680&webp=1" },
  { id: "fajitas-mixtas-con-panceta", rank: "PARA COMPARTIR", title: "Fajitas Mixtas con Panceta", category: "MEXICANO", subcategory: "Fajitas", price: 38000, short: "Para dos personas, con 6 tortillas y 4 salsas.", description: "Fajitas mixtas con panceta para dos personas. Incluyen 6 tortillas y 4 variedades de salsas.", image: "https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/sUagwcPwQLsFOHCThxZr/pub/2L8Il00kqE0cGhB18yZL.JPG" },
  { id: "fajitas-de-mar", rank: "PARA COMPARTIR", title: "Fajitas de Mar", category: "MEXICANO", subcategory: "Fajitas", price: 40000, short: "Para dos personas, con 6 tortillas y 4 salsas.", description: "Fajitas de mar para dos personas. Incluyen 6 tortillas y 4 variedades de salsas.", image: "https://cheforopeza.com.mx/wp-content/uploads/2021/05/fajitas-mar-y-tierra-sitio-940x450.jpg" },
  { id: "extra-queso-fajitas", rank: "EXTRA", title: "Extra Queso", category: "MEXICANO", subcategory: "Fajitas", price: 12000, short: "Porción extra de queso para acompañar tus fajitas.", description: "Porción extra de queso para acompañar tus fajitas.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "tacos-de-carne", rank: "PORCIÓN INDIVIDUAL", title: "Tacos de Carne", category: "MEXICANO", subcategory: "Tacos", price: 17000, short: "2 tortillas rellenas con 4 variedades de salsas.", description: "Porción individual de tacos de carne. Incluye 2 tortillas rellenas y 4 variedades de salsas.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqgGc0COzQemuUtEvoqQlwar4euEwhdjP4A&s" },
  { id: "tacos-de-pollo", rank: "PORCIÓN INDIVIDUAL", title: "Tacos de Pollo", category: "MEXICANO", subcategory: "Tacos", price: 16000, short: "2 tortillas rellenas con 4 variedades de salsas.", description: "Porción individual de tacos de pollo. Incluye 2 tortillas rellenas y 4 variedades de salsas.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "tacos-de-langostinos", rank: "PORCIÓN INDIVIDUAL", title: "Tacos de Langostinos", category: "MEXICANO", subcategory: "Tacos", price: 22000, short: "2 tortillas rellenas con 4 variedades de salsas.", description: "Porción individual de tacos de langostinos. Incluye 2 tortillas rellenas y 4 variedades de salsas.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbvIBl05Zdz__CT1nH_XkWdV_6aIYeaPJQg&s" },
  { id: "tacos-vegetarianos", rank: "PORCIÓN INDIVIDUAL", title: "Tacos Vegetarianos", category: "MEXICANO", subcategory: "Tacos", price: 15000, short: "2 tortillas rellenas con 4 variedades de salsas.", description: "Porción individual de tacos vegetarianos. Incluye 2 tortillas rellenas y 4 variedades de salsas.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRKE0y_tpIW59yTVaL9AdZEe-1Avn47Ir_Fg&s" },
  { id: "tacos-de-pollo-con-champinones", rank: "PORCIÓN INDIVIDUAL", title: "Tacos de Pollo con Champiñones", category: "MEXICANO", subcategory: "Tacos", price: 18000, short: "2 tortillas rellenas con 4 variedades de salsas.", description: "Porción individual de tacos de pollo con champiñones. Incluye 2 tortillas rellenas y 4 variedades de salsas.", image: "https://storage.googleapis.com/avena-recipes/2019/10/1571780342764.jpeg" },
  { id: "tacos-de-carne-con-panceta", rank: "PORCIÓN INDIVIDUAL", title: "Tacos de Carne con Panceta", category: "MEXICANO", subcategory: "Tacos", price: 18000, short: "2 tortillas rellenas con 4 variedades de salsas.", description: "Porción individual de tacos de carne con panceta. Incluye 2 tortillas rellenas y 4 variedades de salsas.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCPobh4a0j5AjmcRdSLRKpvH52rpow_f5pCA&s" },
  { id: "tacos-de-mar", rank: "PORCIÓN INDIVIDUAL", title: "Tacos de Mar", category: "MEXICANO", subcategory: "Tacos", price: 20000, short: "2 tortillas rellenas con 4 variedades de salsas.", description: "Porción individual de tacos de mar. Incluye 2 tortillas rellenas y 4 variedades de salsas.", image: "https://pbs.twimg.com/media/FD1o6k1X0AQt_QJ.jpg" },
  { id: "extra-queso-tacos", rank: "EXTRA", title: "Extra Queso", category: "MEXICANO", subcategory: "Tacos", price: 12000, short: "Porción extra de queso para acompañar tus tacos.", description: "Porción extra de queso para acompañar tus tacos.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "quesadilla-de-carne", rank: "QUESADILLA", title: "Quesadilla de Carne", category: "MEXICANO", subcategory: "Quesadillas", price: 19000, short: "Carne jugosa y queso derretido.", description: "Tortilla rellena de carne jugosa y queso derretido, perfecta para cualquier momento.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMEZTkJfyrIRQap5SQwtkXb5AJ8bB00Y-XRA&s" },
  { id: "quesadilla-de-pollo", rank: "QUESADILLA", title: "Quesadilla de Pollo", category: "MEXICANO", subcategory: "Quesadillas", price: 17500, short: "Pollo tierno y queso fundido.", description: "Tortilla rellena de pollo tierno y queso fundido, un clásico sabroso.", image: "https://www.vvsupremo.com/wp-content/uploads/2016/12/Chipotle-Chicken-Quesadillas.jpg" },
  { id: "quesadilla-de-langostinos", rank: "QUESADILLA", title: "Quesadilla de Langostinos", category: "MEXICANO", subcategory: "Quesadillas", price: 25000, short: "Langostinos y queso con un toque de mar.", description: "Tortilla rellena de langostinos y queso, una opción con un toque de mar.", image: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/01/14/5e9981eab8ccc.jpeg" },
  { id: "quesadilla-caprese", rank: "QUESADILLA", title: "Quesadilla Caprese", category: "MEXICANO", subcategory: "Quesadillas", price: 21000, short: "Queso, tomate y albahaca.", description: "Tortilla rellena de queso, tomate y albahaca, una opción fresca y deliciosa.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYWsq04AYtzKI92PM2X7T9hsU3sOCJfg8Jog&s" },
  { id: "quesadilla-vegetariana", rank: "QUESADILLA", title: "Quesadilla Vegetariana", category: "MEXICANO", subcategory: "Quesadillas", price: 17000, short: "Verduras frescas y queso.", description: "Tortilla rellena de una mezcla de verduras frescas y queso, una opción ligera y sabrosa.", image: "https://www.cocinacaserayfacil.net/wp-content/uploads/2021/07/Quesadillas-vegetarianas.jpg" },
  { id: "quesadilla-de-pollo-con-champinones", rank: "QUESADILLA", title: "Quesadilla de Pollo con Champiñones", category: "MEXICANO", subcategory: "Quesadillas", price: 22000, short: "Pollo, champiñones salteados y queso derretido.", description: "Tortilla rellena de pollo y champiñones salteados, con queso derretido.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "quesadilla-de-carne-con-panceta", rank: "QUESADILLA", title: "Quesadilla de Carne con Panceta", category: "MEXICANO", subcategory: "Quesadillas", price: 22000, short: "Carne, panceta crujiente y queso fundido.", description: "Tortilla rellena de carne y panceta crujiente, combinada con queso fundido.", image: "https://d36fw6y2wq3bat.cloudfront.net/recipes/quesadillas-de-bacon-y-queso/300/quesadillas-de-bacon-y-queso.jpg" },
  { id: "quesadilla-de-mar", rank: "QUESADILLA", title: "Quesadilla de Mar", category: "MEXICANO", subcategory: "Quesadillas", price: 23000, short: "Mezcla de mariscos y queso.", description: "Tortilla con una mezcla de mariscos y queso, ideal para los amantes del mar.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZ03_134as8wcdBvx6HfGAe7sW3bIdmoVQQ&s" },
  { id: "quesadilla-de-pollo-y-roquefort", rank: "QUESADILLA", title: "Quesadilla de Pollo y Roquefort", category: "MEXICANO", subcategory: "Quesadillas", price: 21000, short: "Pollo y queso roquefort de sabor intenso.", description: "Tortilla con pollo y queso roquefort, ofreciendo un sabor intenso y único.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBJ-mGes9nuezQICYbnCnxJ8BCll9dnRIMA&s" },
  { id: "burrito-de-panceta", rank: "BURRITO", title: "Burrito de Panceta", category: "MEXICANO", subcategory: "Burritos", price: 17000, short: "Panceta crujiente, queso y otros ingredientes sabrosos.", description: "Tortilla grande rellena de panceta crujiente, queso y otros ingredientes sabrosos, envuelta y lista para disfrutar.", image: "https://assets.unileversolutions.com/recipes-v2/248654.jpg" },
  { id: "burrito-de-roquefort", rank: "BURRITO", title: "Burrito de Roquefort", category: "MEXICANO", subcategory: "Burritos", price: 17000, short: "Queso roquefort y sabores que equilibran su intensidad.", description: "Tortilla rellena de queso roquefort y una mezcla de ingredientes que complementan su sabor fuerte y distintivo.", image: "https://m.ftscrt.com/static/recipe/b947240c-6deb-4682-9344-d1d66bd7c8e1_fs2.jpg" },
  { id: "burrito-tinga", rank: "BURRITO", title: "Burrito Tinga", category: "MEXICANO", subcategory: "Burritos", price: 17000, short: "Carne en salsa tinga con arroz y frijoles.", description: "Tortilla grande rellena de carne desmenuzada cocida en una salsa tinga especiada, acompañada de arroz y frijoles.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCr7OtAZppjLXG6xqU1YRhaPl7uwBvdjVgQ&s" },
  { id: "wrap-vegetariano", rank: "WRAP", title: "Wrap Vegetariano", category: "WRAPS & ENSALADA", subcategory: "Wraps", price: 15000, short: "Wrap relleno con una selección de vegetales frescos.", description: "Wrap vegetariano relleno con una selección de vegetales frescos.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "wrap-de-pollo", rank: "WRAP", title: "Wrap de Pollo", category: "WRAPS & ENSALADA", subcategory: "Wraps", price: 17000, short: "Wrap relleno de pollo y vegetales frescos.", description: "Wrap relleno de pollo acompañado con vegetales frescos.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "ensalada-mix-verduras", rank: "ENSALADA", title: "Ensalada Mix de Verduras", category: "WRAPS & ENSALADA", subcategory: "Ensaladas", price: 16000, short: "Mix fresco de verduras seleccionadas.", description: "Ensalada preparada con un mix fresco de verduras seleccionadas.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "ensalada-cesar", rank: "ENSALADA", title: "Ensalada César", category: "WRAPS & ENSALADA", subcategory: "Ensaladas", price: 15000, short: "La clásica ensalada César.", description: "Ensalada César clásica, fresca y sabrosa.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "ensalada-de-mar", rank: "ENSALADA", title: "Ensalada de Mar", category: "WRAPS & ENSALADA", subcategory: "Ensaladas", price: 22000, short: "Ensalada fresca con sabores de mar.", description: "Ensalada fresca acompañada con una selección de sabores de mar.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "ensalada-de-botanas", rank: "DE LA CASA", title: "Ensalada De Botanas", category: "WRAPS & ENSALADA", subcategory: "Ensaladas", price: 18000, short: "La ensalada especial de la casa.", description: "Ensalada especial De Botanas preparada con ingredientes seleccionados.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "ensalada-sour-salad", rank: "ENSALADA", title: "Ensalada Sour Salad", category: "WRAPS & ENSALADA", subcategory: "Ensaladas", price: 17000, short: "Ensalada fresca de sabor distintivo.", description: "Ensalada Sour Salad fresca y llena de sabor.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "lomito-simple", rank: "LOMITO", title: "Lomito Simple", category: "LOMITOS", price: 16000, short: "Acompañado con papas fritas.", description: "Lomito simple acompañado con papas fritas.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "lomito-completo", rank: "LOMITO", title: "Lomito Completo", category: "LOMITOS", price: 18000, short: "Acompañado con papas fritas.", description: "Lomito completo acompañado con papas fritas.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "lomito-de-botanas", rank: "DE LA CASA", title: "Lomito De Botanas", category: "LOMITOS", price: 20000, short: "Acompañado con papas fritas.", description: "Lomito especial De Botanas acompañado con papas fritas.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "lomito-pan-arabe", rank: "LOMITO", title: "Lomito en Pan Árabe", category: "LOMITOS", price: 18000, short: "Acompañado con papas fritas.", description: "Lomito servido en pan árabe y acompañado con papas fritas.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "lomito-vegetariano", rank: "LOMITO", title: "Lomito Vegetariano", category: "LOMITOS", price: 15000, short: "Acompañado con papas fritas.", description: "Lomito vegetariano acompañado con papas fritas.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "lomito-mexicano", rank: "LOMITO", title: "Lomito Mexicano", category: "LOMITOS", price: 18000, short: "Acompañado con papas fritas.", description: "Lomito mexicano acompañado con papas fritas.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "sandwich-milanesa-carne", rank: "SÁNDWICH", title: "Sándwich de Milanesa de Carne", category: "SANDWICH", price: 16000, short: "Sándwich de milanesa de carne.", description: "Sándwich preparado con milanesa de carne.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "sandwich-carne-desmechada", rank: "SÁNDWICH", title: "Sándwich de Carne Desmechada", category: "SANDWICH", price: 17000, short: "Sándwich de carne desmechada.", description: "Sándwich relleno con carne desmechada.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "hamburguesa", rank: "SÁNDWICH", title: "Hamburguesa", category: "SANDWICH", price: 15000, short: "Hamburguesa clásica.", description: "Hamburguesa clásica de la casa.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "extra-carne-sandwich", rank: "EXTRA", title: "Extra Carne", category: "SANDWICH", price: 10000, short: "Porción extra de carne.", description: "Porción extra de carne para agregar a tu pedido.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "ojo-de-bife", rank: "PRINCIPAL", title: "Ojo de Bife", category: "PRINCIPALES", price: 20000, short: "Ojo de bife cocido al punto elegido.", description: "Ojo de bife cocido al punto elegido.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "vacio-al-horno", rank: "PRINCIPAL", title: "Vacío al Horno", category: "PRINCIPALES", price: 20000, short: "Vacío cocido lentamente al horno.", description: "Vacío cocido lentamente al horno.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "trucha-salmonada", rank: "PRINCIPAL", title: "Trucha Salmonada", category: "PRINCIPALES", price: 23000, short: "Trucha salmonada.", description: "Trucha salmonada preparada con el estilo de la casa.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "pacu", rank: "PRINCIPAL", title: "Pacú", category: "PRINCIPALES", price: 18000, short: "Pacú preparado con el estilo de la casa.", description: "Pacú preparado con el estilo de la casa.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "tapeo-parrillero", rank: "PARA COMPARTIR", title: "Tapeo Parrillero", category: "PRINCIPALES", price: 50000, short: "Selección parrillera para compartir.", description: "Tapeo parrillero con una selección especial para compartir.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "noquis-de-papa", rank: "PASTA", title: "Ñoquis de Papa", category: "PASTAS", price: 17000, short: "Ñoquis de papa.", description: "Ñoquis de papa preparados con el estilo de la casa.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "sorrentinos-cuatro-quesos", rank: "PASTA", title: "Sorrentinos de Cuatro Quesos", category: "PASTAS", price: 19000, short: "Sorrentinos rellenos de cuatro quesos.", description: "Sorrentinos rellenos con una mezcla de cuatro quesos.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "malfatti", rank: "PASTA", title: "Malfatti", category: "PASTAS", price: 18000, short: "Malfatti preparados con el estilo de la casa.", description: "Malfatti preparados con el estilo de la casa.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "milanesa-de-carne", rank: "MINUTA", title: "Milanesa de Carne", category: "MINUTAS", price: 20000, short: "Milanesa de carne.", description: "Milanesa de carne dorada y crocante.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "milanesa-napolitana", rank: "MINUTA", title: "Milanesa Napolitana", category: "MINUTAS", price: 21600, short: "Milanesa con salsa, jamón y queso.", description: "Milanesa napolitana con salsa, jamón y queso gratinado.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "pizza-gamberi", title: "Gamberi", short: "Elegí entre 4 u 8 porciones.", description: "Pizza con suculentos langostinos, acompañados de una salsa suave y queso derretido.", price: 15000, options: [{ id: "4-porciones", label: "4 porciones", price: 15000 }, { id: "8-porciones", label: "8 porciones", price: 30000 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/e363e5d1-4b1a-4897-9d7d-ea363e276048.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-quattro-formaggi", title: "Quattro Formaggi", short: "Elegí entre 4 u 8 porciones.", description: "Pizza con una mezcla de cuatro quesos fundidos, perfectamente combinados para un sabor intenso.", price: 12000, options: [{ id: "4-porciones", label: "4 porciones", price: 12000 }, { id: "8-porciones", label: "8 porciones", price: 24000 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/e363e5d1-4b1a-4897-9d7d-ea363e276048.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-il-tatto", title: "Il Tatto", short: "Elegí entre 4 u 8 porciones.", description: "Pizza con una combinación especial de ingredientes selectos y un sabor único.", price: 12000, options: [{ id: "4-porciones", label: "4 porciones", price: 12000 }, { id: "8-porciones", label: "8 porciones", price: 24000 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/e363e5d1-4b1a-4897-9d7d-ea363e276048.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-la-nonna", title: "La Nonna", short: "Elegí entre 4 u 8 porciones.", description: "Pizza tradicional con salsa de tomate, queso y una selección de embutidos.", price: 12000, options: [{ id: "4-porciones", label: "4 porciones", price: 12000 }, { id: "8-porciones", label: "8 porciones", price: 24000 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/e363e5d1-4b1a-4897-9d7d-ea363e276048.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-veggy", title: "Veggy", short: "Elegí entre 4 u 8 porciones.", description: "Pizza vegetariana cargada de una variedad de verduras frescas.", price: 10800, options: [{ id: "4-porciones", label: "4 porciones", price: 10800 }, { id: "8-porciones", label: "8 porciones", price: 21600 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/c13f129f-1ada-4567-b05a-b7dddfb83693.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-capri", title: "Capri", short: "Elegí entre 4 u 8 porciones.", description: "Pizza con una mezcla fresca de ingredientes mediterráneos, ligera y sabrosa.", price: 12000, options: [{ id: "4-porciones", label: "4 porciones", price: 12000 }, { id: "8-porciones", label: "8 porciones", price: 24000 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/8e648826-4207-479a-b2cf-7063c6521401.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-grasso-giuseppe", title: "Grasso Giuseppe", short: "Elegí entre 4 u 8 porciones.", description: "Pizza con ingredientes abundantes y ricos, ideal para disfrutar sin reservas.", price: 12000, options: [{ id: "4-porciones", label: "4 porciones", price: 12000 }, { id: "8-porciones", label: "8 porciones", price: 24000 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/e363e5d1-4b1a-4897-9d7d-ea363e276048.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-caprese", title: "Caprese", short: "Elegí entre 4 u 8 porciones.", description: "Pizza con tomate fresco, mozzarella y albahaca.", price: 10800, options: [{ id: "4-porciones", label: "4 porciones", price: 10800 }, { id: "8-porciones", label: "8 porciones", price: 21600 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/76e49b44-9dbb-44ed-91b8-c20a2484d28e.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-pizzari-di-acerli", title: "Pizzari di Acerli", short: "Elegí entre 4 u 8 porciones.", description: "Pizza de la casa con una combinación especial de sabores.", price: 10800, options: [{ id: "4-porciones", label: "4 porciones", price: 10800 }, { id: "8-porciones", label: "8 porciones", price: 21600 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/e363e5d1-4b1a-4897-9d7d-ea363e276048.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-fugazza", title: "Fugazza", short: "Elegí entre 4 u 8 porciones.", description: "Pizza con cebolla caramelizada, de sabor suave y sabroso.", price: 10200, options: [{ id: "4-porciones", label: "4 porciones", price: 10200 }, { id: "8-porciones", label: "8 porciones", price: 20400 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/4d999ab3-8597-46f1-bdb8-7e83f73a6f23.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-del-napo", title: "Del Napo", short: "Elegí entre 4 u 8 porciones.", description: "Pizza inspirada en la cocina napolitana, con ingredientes clásicos.", price: 10200, options: [{ id: "4-porciones", label: "4 porciones", price: 10200 }, { id: "8-porciones", label: "8 porciones", price: 20400 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/20bf6cd9-d5b7-4e87-9e69-f59d6ad96669.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-e-noni", title: "E Noni", short: "Elegí entre 4 u 8 porciones.", description: "Pizza con ingredientes tradicionales y el sabor de las recetas familiares.", price: 10200, options: [{ id: "4-porciones", label: "4 porciones", price: 10200 }, { id: "8-porciones", label: "8 porciones", price: 20400 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/e363e5d1-4b1a-4897-9d7d-ea363e276048.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-especial", title: "Especial", short: "Elegí entre 4 u 8 porciones.", description: "Pizza con una selección especial de ingredientes.", price: 10200, options: [{ id: "4-porciones", label: "4 porciones", price: 10200 }, { id: "8-porciones", label: "8 porciones", price: 20400 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/e363e5d1-4b1a-4897-9d7d-ea363e276048.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-uovo", title: "Uovo", short: "Elegí entre 4 u 8 porciones.", description: "Pizza con huevo, una combinación de sabor y textura extra.", price: 10200, options: [{ id: "4-porciones", label: "4 porciones", price: 10200 }, { id: "8-porciones", label: "8 porciones", price: 20400 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/e363e5d1-4b1a-4897-9d7d-ea363e276048.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-de-popolo", title: "De Popolo", short: "Elegí entre 4 u 8 porciones.", description: "Pizza con sabores locales, simples y auténticos.", price: 9000, options: [{ id: "4-porciones", label: "4 porciones", price: 9000 }, { id: "8-porciones", label: "8 porciones", price: 18000 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/94ad79eb-a132-4c44-85dd-ec5916a2c260.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "pizza-di-aglio", title: "Di Aglio", short: "Elegí entre 4 u 8 porciones.", description: "Pizza con ajo, queso y sabores complementarios.", price: 9000, options: [{ id: "4-porciones", label: "4 porciones", price: 9000 }, { id: "8-porciones", label: "8 porciones", price: 18000 }], category: "PIZZAS", image: "https://images.deliveryhero.io/image/pedidosya/products/e363e5d1-4b1a-4897-9d7d-ea363e276048.jpeg?quality=90&width=1680&webp=1", available: true },
  { id: "bebida-coca-cola-310", rank: "SIN ALCOHOL", title: "Gaseosa Línea Coca-Cola 310 ml", category: "BEBIDAS", subcategory: "Sin Alcohol", price: 3500, short: "Gaseosa individual de la línea Coca-Cola.", description: "Gaseosa de la línea Coca-Cola en presentación de 310 ml.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "bebida-agua-saborizada", rank: "SIN ALCOHOL", title: "Agua Saborizada de Pomelo o Manzana", category: "BEBIDAS", subcategory: "Sin Alcohol", price: 3500, short: "Elegí sabor pomelo o manzana.", description: "Agua saborizada, disponible en sabores pomelo o manzana.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "bebida-agua", rank: "SIN ALCOHOL", title: "Agua sin Gas o con Gas", category: "BEBIDAS", subcategory: "Sin Alcohol", price: 3500, short: "Elegí agua sin gas o con gas.", description: "Agua mineral, disponible sin gas o con gas.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "bebida-stella-sin-alcohol", rank: "SIN ALCOHOL", title: "Stella Artois sin Alcohol 330 ml", category: "BEBIDAS", subcategory: "Sin Alcohol", price: 6000, short: "Cerveza Stella Artois sin alcohol.", description: "Stella Artois sin alcohol en botella de 330 ml.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "bebida-corona-sin-alcohol", rank: "SIN ALCOHOL", title: "Corona sin Alcohol 330 ml", category: "BEBIDAS", subcategory: "Sin Alcohol", price: 7000, short: "Cerveza Corona sin alcohol.", description: "Corona sin alcohol en botella de 330 ml.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "cerveza-corona-330", rank: "CERVEZA", title: "Corona 330 ml", category: "BEBIDAS", subcategory: "Cervezas", price: 7000, short: "Cerveza Corona en botella de 330 ml.", description: "Cerveza Corona en presentación individual de 330 ml.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "cerveza-stella-330", rank: "CERVEZA", title: "Stella Artois 330 ml", category: "BEBIDAS", subcategory: "Cervezas", price: 6000, short: "Cerveza Stella Artois de 330 ml.", description: "Cerveza Stella Artois en presentación individual de 330 ml.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "cerveza-stella-litro", rank: "CERVEZA", title: "Stella Artois 1 Litro", category: "BEBIDAS", subcategory: "Cervezas", price: 12000, short: "Cerveza Stella Artois de un litro.", description: "Cerveza Stella Artois en botella de un litro, ideal para compartir.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "trago-fernet-branca-coca", rank: "TRAGO", title: "Fernet Branca con Coca-Cola", category: "TRAGOS", subcategory: "Tragos", price: 6000, short: "El clásico Fernet Branca con Coca-Cola.", description: "Fernet Branca preparado con Coca-Cola.", image: "https://lh3.googleusercontent.com/dW4JkBRFBvp6VdrfbFLYBezqgeN4aYZRoCzQS1TVRTjGQm8NLbvbQZSfeC6b_YC0U1u1ondGGU_zCKV1xg=s265-w265-h265" },
  { id: "trago-branca-soda", rank: "TRAGO", title: "Branca con Soda", category: "TRAGOS", subcategory: "Tragos", price: 6000, short: "Fernet Branca servido con soda.", description: "Fernet Branca preparado con soda.", image: "https://lh3.googleusercontent.com/dW4JkBRFBvp6VdrfbFLYBezqgeN4aYZRoCzQS1TVRTjGQm8NLbvbQZSfeC6b_YC0U1u1ondGGU_zCKV1xg=s265-w265-h265" },
  { id: "trago-caipiroska", rank: "TRAGO", title: "Caipiroska", category: "TRAGOS", subcategory: "Tragos", price: 7000, short: "Vodka, lima y azúcar.", description: "Refrescante combinación de vodka, lima y azúcar.", image: "https://i.pinimg.com/736x/b0/88/d7/b088d7172bcc4a2ec56667c9de93ecda.jpg" },
  { id: "trago-bianco-tonic", rank: "TRAGO", title: "Bianco Tonic", category: "TRAGOS", subcategory: "Tragos", price: 6000, short: "Vermouth blanco con tónica.", description: "Vermouth blanco combinado con agua tónica.", image: "https://i.pinimg.com/236x/6a/db/79/6adb79f7ca966a3a332839935fa645bf.jpg" },
  { id: "trago-carpano-original", rank: "TRAGO", title: "Carpano Original", category: "TRAGOS", subcategory: "Tragos", price: 6000, short: "Aperitivo Carpano de sabor intenso.", description: "Carpano Original servido como aperitivo.", image: "https://i.pinimg.com/236x/0a/6b/15/0a6b158a05253709cfa9b7876b4c99e6.jpg" },
  { id: "trago-negroni", rank: "TRAGO", title: "Negroni", category: "TRAGOS", subcategory: "Tragos", price: 6000, short: "Campari, vermouth rosso y gin.", description: "Clásico italiano preparado con Campari, vermouth rosso y gin.", image: "https://i.pinimg.com/236x/f7/3a/41/f73a415a8d75d2ff057b9808daa1d4a4.jpg" },
  { id: "trago-cernova-energizante", rank: "TRAGO", title: "Cernova con Energizante", category: "TRAGOS", subcategory: "Tragos", price: 6000, short: "Cernova combinado con energizante.", description: "Vodka Cernova preparado con bebida energizante.", image: "https://i.pinimg.com/736x/ce/6d/20/ce6d200e5f37d5d61b3c8a2d3107809c.jpg" },
  { id: "trago-pentonic", rank: "TRAGO", title: "Pentonic", category: "TRAGOS", subcategory: "Tragos", price: 6000, short: "Aperitivo refrescante con tónica.", description: "Pentonic, una combinación fresca y burbujeante.", image: "https://i.pinimg.com/736x/c6/f5/80/c6f5801084da8f0b58bfe0ef534ec633.jpg" },
  { id: "trago-gancia", rank: "TRAGO", title: "Gancia", category: "TRAGOS", subcategory: "Tragos", price: 6000, short: "El clásico aperitivo argentino.", description: "Gancia servido como aperitivo fresco y herbal.", image: "https://i.pinimg.com/236x/a7/27/a0/a727a0df95faa7d675ddd91088b9bd20.jpg" },
  { id: "trago-caipirina", rank: "TRAGO", title: "Caipiriña", category: "TRAGOS", subcategory: "Tragos", price: 7000, short: "Cachaça, lima y azúcar.", description: "Clásico brasileño preparado con cachaça, lima y azúcar.", image: "https://i.pinimg.com/736x/8b/cd/72/8bcd72e86349a5d7a58690195772bd3e.jpg" },
  { id: "trago-mojito-clasico", rank: "TRAGO", title: "Mojito Clásico", category: "TRAGOS", subcategory: "Tragos", price: 8000, short: "Ron, menta, lima y soda.", description: "Mojito clásico preparado con ron, menta, lima y soda.", image: "https://i.pinimg.com/736x/0b/a2/9a/0ba29a7fb322dc7246dcd82ce7739902.jpg" },
  { id: "trago-mojito-maracuya", rank: "TRAGO", title: "Mojito de Maracuyá", category: "TRAGOS", subcategory: "Tragos", price: 8000, short: "Mojito con el toque tropical del maracuyá.", description: "Mojito refrescante con pulpa de maracuyá.", image: "https://i.pinimg.com/736x/82/82/6f/82826fe35e8d7e07cec79b61eff71545.jpg" },
  { id: "trago-mojito-malibu", rank: "TRAGO", title: "Mojito Malibú", category: "TRAGOS", subcategory: "Tragos", price: 8000, short: "Mojito con el dulzor tropical de Malibú.", description: "Mojito preparado con el sabor tropical de Malibú.", image: "https://i.pinimg.com/736x/8f/b3/1d/8fb31da0052d43fb208bc26c091ac1cd.jpg" },
  { id: "trago-blue-gin-tonic", rank: "TRAGO", title: "Blue Gin Tonic", category: "TRAGOS", subcategory: "Tragos", price: 7000, short: "Gin tonic de color azul y sabor refrescante.", description: "Blue Gin combinado con agua tónica.", image: "https://i.pinimg.com/736x/9d/fd/2f/9dfd2f458eb78418bd55878eae0c05ec.jpg" },
  { id: "trago-campari-orange", rank: "TRAGO", title: "Campari Orange", category: "TRAGOS", subcategory: "Tragos", price: 7000, short: "Campari combinado con naranja.", description: "Campari preparado con jugo de naranja.", image: "https://i.pinimg.com/736x/d7/94/31/d7943103afeed7a604d49d058e7a1aec.jpg" },
  { id: "trago-campari-tonic", rank: "TRAGO", title: "Campari Tonic", category: "TRAGOS", subcategory: "Tragos", price: 7000, short: "Campari con la frescura de la tónica.", description: "Campari combinado con agua tónica.", image: "https://i.pinimg.com/736x/d7/94/31/d7943103afeed7a604d49d058e7a1aec.jpg" },
  { id: "trago-aperol-spritz", rank: "TRAGO", title: "Aperol Spritz", category: "TRAGOS", subcategory: "Tragos", price: 7000, short: "Aperol, espumante y soda.", description: "Refrescante mezcla de Aperol, espumante y soda.", image: "https://i.pinimg.com/236x/24/6a/26/246a269b6452768cfe9d210b85519d5f.jpg" },
  { id: "trago-julep-cynar-70", rank: "TRAGO", title: "Julep de Cynar 70", category: "TRAGOS", subcategory: "Tragos", price: 7000, short: "Cynar 70, menta fresca y cítricos.", description: "Julep preparado con Cynar 70 y menta fresca.", image: "https://i.pinimg.com/736x/0d/d7/66/0dd7664646883dcf4cd45c16a53696eb.jpg" },
  { id: "trago-whisky-nacional", rank: "TRAGO", title: "Whisky Nacional", category: "TRAGOS", subcategory: "Tragos", price: 7000, short: "Whisky nacional para disfrutar solo o con hielo.", description: "Medida de whisky nacional, servido solo o con hielo.", image: "https://i.pinimg.com/736x/82/64/2c/82642cd2144670d775da365ba21523ec.jpg" },
  { id: "trago-whisky-importado", rank: "TRAGO", title: "Whisky Importado", category: "TRAGOS", subcategory: "Tragos", price: 9000, short: "Whisky importado de calidad.", description: "Medida de whisky importado, servido solo o con hielo.", image: "https://i.pinimg.com/736x/1a/f2/c0/1af2c0f784ae8136d8f0cfc0ebe61e65.jpg" },
  { id: "botella-fernet-branca-combo", rank: "BOTELLA", title: "Fernet Branca 750 ml + 2 Coca-Cola de 1,5 Litros + Hielo", category: "TRAGOS", subcategory: "Botellas", price: 40000, short: "Combo completo para compartir.", description: "Una botella de Fernet Branca de 750 ml, dos Coca-Cola de 1,5 litros y hielo.", image: "https://lh3.googleusercontent.com/R-YmFVv0i4Y_2On8UAbR_apEYbuWiXVAXE5l-kAj1Y_tpwsnIbd8casRy8rDDtBD8tyLVgshAVJt-BpNnQ=s265-w265-h265" },
  { id: "vino-santa-julia-malbec-750", rank: "MALBEC", title: "Santa Julia Malbec · 750 ml", category: "VINOS", subcategory: "Malbec 750 ml", price: 10000, short: "Botella de 750 ml.", description: "Santa Julia Malbec · 750 ml.", image: "https://i.pinimg.com/236x/a4/de/d9/a4ded9927e9ec6f6c1ce2ae5c3ad0990.jpg" },
  { id: "vino-tomero-malbec-750", rank: "MALBEC", title: "Tomero Malbec · 750 ml", category: "VINOS", subcategory: "Malbec 750 ml", price: 14000, short: "Botella de 750 ml.", description: "Tomero Malbec · 750 ml.", image: "https://i.pinimg.com/236x/3e/ed/ed/3eeded0e04436a3d756e557d6836f355.jpg" },
  { id: "vino-fabre-montmartre-terruno-malbec-750", rank: "MALBEC", title: "Fabre Montmartre Terruño Malbec · 750 ml", category: "VINOS", subcategory: "Malbec 750 ml", price: 17000, short: "Botella de 750 ml.", description: "Fabre Montmartre Terruño Malbec · 750 ml.", image: "https://i.pinimg.com/236x/2b/ac/0d/2bac0de071df8a05586b8d5f6af84322.jpg" },
  { id: "vino-dona-paula-unic-malbec-750", rank: "MALBEC", title: "Doña Paula Unic Malbec · 750 ml", category: "VINOS", subcategory: "Malbec 750 ml", price: 16000, short: "Botella de 750 ml.", description: "Doña Paula Unic Malbec · 750 ml.", image: "https://i.pinimg.com/236x/c3/5b/f6/c35bf64e677fba5eb89f72d98f881a25.jpg" },
  { id: "vino-familia-ascon-malbec-750", rank: "MALBEC", title: "Familia Ascon Malbec · 750 ml", category: "VINOS", subcategory: "Malbec 750 ml", price: 16000, short: "Botella de 750 ml.", description: "Familia Ascon Malbec · 750 ml.", image: "https://i.pinimg.com/236x/57/ba/4c/57ba4c083d385350dee95949b0f99c2d.jpg" },
  { id: "vino-perro-callejero-malbec-750", rank: "MALBEC", title: "Perro Callejero Malbec · 750 ml", category: "VINOS", subcategory: "Malbec 750 ml", price: 16000, short: "Botella de 750 ml.", description: "Perro Callejero Malbec · 750 ml.", image: "https://i.pinimg.com/236x/9e/38/78/9e3878398f174447c1e5614a44d223c7.jpg" },
  { id: "vino-cordero-piel-lobo-malbec-750", rank: "MALBEC", title: "Cordero con Piel de Lobo Malbec · 750 ml", category: "VINOS", subcategory: "Malbec 750 ml", price: 18000, short: "Botella de 750 ml.", description: "Cordero con Piel de Lobo Malbec · 750 ml.", image: "https://i.pinimg.com/236x/e6/72/d4/e672d433207030e2253cba92d843cf5e.jpg" },
  { id: "vino-escorihuela-gascon-malbec-750", rank: "MALBEC", title: "Escorihuela Gascón Malbec · 750 ml", category: "VINOS", subcategory: "Malbec 750 ml", price: 18000, short: "Botella de 750 ml.", description: "Escorihuela Gascón Malbec · 750 ml.", image: "https://i.pinimg.com/236x/0f/6c/44/0f6c444aaaf0d6a51d3816b37b66e6c5.jpg" },
  { id: "vino-fabre-montmartre-terruno-malbec-375", rank: "MALBEC", title: "Fabre Montmartre Terruño Malbec · 375 ml", category: "VINOS", subcategory: "Malbec 375 ml", price: 9000, short: "Botella de 375 ml.", description: "Fabre Montmartre Terruño Malbec · 375 ml.", image: "https://i.pinimg.com/236x/2b/ac/0d/2bac0de071df8a05586b8d5f6af84322.jpg" },
  { id: "vino-tomero-malbec-375", rank: "MALBEC", title: "Tomero Malbec · 375 ml", category: "VINOS", subcategory: "Malbec 375 ml", price: 9000, short: "Botella de 375 ml.", description: "Tomero Malbec · 375 ml.", image: "https://i.pinimg.com/236x/3e/ed/ed/3eeded0e04436a3d756e557d6836f355.jpg" },
  { id: "vino-tomero-cabernet-sauvignon-750", rank: "CABERNET", title: "Tomero Cabernet Sauvignon · 750 ml", category: "VINOS", subcategory: "Cabernet 750 ml", price: 14000, short: "Botella de 750 ml.", description: "Tomero Cabernet Sauvignon · 750 ml.", image: "https://bodegavistalba.com/tienda/134-large_default/tomero-cabernet-sauvignon.jpg" },
  { id: "vino-tomero-cabernet-franc-750", rank: "CABERNET", title: "Tomero Cabernet Franc · 750 ml", category: "VINOS", subcategory: "Cabernet 750 ml", price: 14000, short: "Botella de 750 ml.", description: "Tomero Cabernet Franc · 750 ml.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS80BddLb8Ca0eXQzZjO2eZWnatUL2cLw5vcg&s" },
  { id: "vino-cordero-piel-lobo-sauvignon-750", rank: "CABERNET", title: "Cordero con Piel de Lobo Sauvignon · 750 ml", category: "VINOS", subcategory: "Cabernet 750 ml", price: 16000, short: "Botella de 750 ml.", description: "Cordero con Piel de Lobo Sauvignon · 750 ml.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhMVZ2z5Jp60tgPenLdUcVnFDiWxmp0xG-A&s" },
  { id: "vino-mosquita-muerta-blend-750", rank: "BLEND DE TINTAS", title: "Mosquita Muerta · 750 ml", category: "VINOS", subcategory: "Blend 750 ml", price: 35000, short: "Botella de 750 ml.", description: "Mosquita Muerta · 750 ml.", image: "https://acdn.mitiendanube.com/stores/871/106/products/mosquita-muerta-blend1-16012ed07b1313753d15585332481699-640-0.jpg" },
  { id: "vino-santa-julia-chardonnay-750", rank: "BLANCO", title: "Santa Julia Chardonnay · 750 ml", category: "VINOS", subcategory: "Blancos 750 ml", price: 10000, short: "Botella de 750 ml.", description: "Santa Julia Chardonnay · 750 ml.", image: "https://jumboargentina.vtexassets.com/arquivos/ids/799272-800-600?v=638345361796200000&width=800&height=600&aspect=true" },
  { id: "vino-tomero-sauvignon-blanc-750", rank: "BLANCO", title: "Tomero Sauvignon Blanc · 750 ml", category: "VINOS", subcategory: "Blancos 750 ml", price: 14000, short: "Botella de 750 ml.", description: "Tomero Sauvignon Blanc · 750 ml.", image: "https://bodegavistalba.com/tienda/135-full_default/tomero-sauvignon-blanc.jpg" },
  { id: "vino-escorihuela-sauvignon-blanc-750", rank: "BLANCO", title: "Escorihuela Sauvignon Blanc · 750 ml", category: "VINOS", subcategory: "Blancos 750 ml", price: 18000, short: "Botella de 750 ml.", description: "Escorihuela Sauvignon Blanc · 750 ml.", image: "Logo/Logo-de-Botanas-Market-Negro.png" },
  { id: "vino-los-cardos-sauvignon-blanc-750", rank: "DULCE", title: "Los Cardos Sauvignon Blanc · 750 ml", category: "VINOS", subcategory: "Dulces 750 ml", price: 12000, short: "Botella de 750 ml.", description: "Los Cardos Sauvignon Blanc · 750 ml.", image: "https://winesupply.vtexassets.com/arquivos/ids/158881-800-auto?v=638246812420270000&width=800&height=auto&aspect=true" },
  { id: "vino-santa-julia-chenin-750", rank: "DULCE", title: "Santa Julia Chenin · 750 ml", category: "VINOS", subcategory: "Dulces 750 ml", price: 12000, short: "Botella de 750 ml.", description: "Santa Julia Chenin · 750 ml.", image: "https://www.lacoopeencasa.coop/media/lcec/publico/articulos/3/d/e/3de26483d3b673f315e379fb32690e72" },
];

const state = {
  selectedCategory: "ENTRADAS",
  selectedSubcategory: "Todos",
  order: {},
  currentProduct: null,
  selectedOptionId: null,
  heroIndex: 0,
  adminProductId: null,
  adminFilterCategory: "Todos",
  adminFamilyName: null,
  lastLocalOrder: null,
};

const formatter = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
const adminAccessKey = "delMonAdminAccess";
// Debe coincidir con el codigo de administrador definido en mozo.js.
const adminCode = "4321";

const categoryRow = document.querySelector("#categoryRow");
const brandTitle = document.querySelector("#brandTitle");
const brandSubtitle = document.querySelector("#brandSubtitle");
const subcategoryRow = document.querySelector("#subcategoryRow");
const menuNotice = document.querySelector("#menuNotice");
const popularGrid = document.querySelector("#popularGrid");
const recommendedHeading = document.querySelector("#recommendedHeading");
const heroSlider = document.querySelector("#heroSlider");
const promoCard = document.querySelector(".promo-card");
const floatingCart = document.querySelector("#floatingCart");
const floatingBadge = document.querySelector("#floatingBadge");
const cartToast = document.querySelector("#cartToast");
const cartToastName = document.querySelector("#cartToastName");
const cartToastDetail = document.querySelector("#cartToastDetail");
const orderPanel = document.querySelector("#orderPanel");
const orderItems = document.querySelector("#orderItems");
const orderNote = document.querySelector("#orderNote");
const orderCount = document.querySelector("#orderCount");
const orderTotal = document.querySelector("#orderTotal");
const whatsappButton = document.querySelector("#whatsappButton");
const shareCartaLink = document.querySelector("#shareCartaLink");
const quickWhatsappLink = document.querySelector("#quickWhatsappLink");
const quickInstagramLink = document.querySelector("#quickInstagramLink");
const quickMapsLink = document.querySelector("#quickMapsLink");
const closeOrderButton = document.querySelector("#closeOrderButton");
const clearOrderButton = document.querySelector("#clearOrderButton");
const localOrderButton = document.querySelector("#localOrderButton");
const reviewDialog = document.querySelector("#reviewDialog");
const closeReviewButton = document.querySelector("#closeReviewButton");
const reviewItems = document.querySelector("#reviewItems");
const reviewTable = document.querySelector("#reviewTable");
const reviewNote = document.querySelector("#reviewNote");
const reviewTotal = document.querySelector("#reviewTotal");
const confirmLocalButton = document.querySelector("#confirmLocalButton");
const qrDialog = document.querySelector("#qrDialog");
const closeQrButton = document.querySelector("#closeQrButton");
const orderQrNode = document.querySelector("#orderQrNode");
const orderQrCanvas = document.querySelector("#orderQrCanvas");
const orderQrImage = document.querySelector("#orderQrImage");
const qrFallback = document.querySelector("#qrFallback");
const qrCodeLabel = document.querySelector("#qrCodeLabel");
const newOrderButton = document.querySelector("#newOrderButton");
const productDialog = document.querySelector("#productDialog");
const closeDialogButton = document.querySelector("#closeDialogButton");
const dialogImage = document.querySelector("#dialogImage");
const dialogCategory = document.querySelector("#dialogCategory");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogPrice = document.querySelector("#dialogPrice");
const dialogDescription = document.querySelector("#dialogDescription");
const dialogOptions = document.querySelector("#dialogOptions");
const addCurrentButton = document.querySelector("#addCurrentButton");
const heroTrack = document.querySelector("#heroTrack");
const heroDots = document.querySelector("#heroDots");
const bannerButton = document.querySelector("#bannerButton");
const adminPanel = document.querySelector("#adminPanel");
const editPanel = document.querySelector("#editPanel");
const familyPanel = document.querySelector("#familyPanel");
const closeAdminButton = document.querySelector("#closeAdminButton");
const closeEditButton = document.querySelector("#closeEditButton");
const closeFamilyButton = document.querySelector("#closeFamilyButton");
const editPanelTitle = document.querySelector("#editPanelTitle");
const familyPanelTitle = document.querySelector("#familyPanelTitle");
const adminBusinessName = document.querySelector("#adminBusinessName");
const adminBrandTitle = document.querySelector("#adminBrandTitle");
const adminBrandSubtitle = document.querySelector("#adminBrandSubtitle");
const adminWhatsapp = document.querySelector("#adminWhatsapp");
const adminInstagram = document.querySelector("#adminInstagram");
const adminMaps = document.querySelector("#adminMaps");
const saveBusinessButton = document.querySelector("#saveBusinessButton");
const adminRecommendedList = document.querySelector("#adminRecommendedList");
const adminFamilyList = document.querySelector("#adminFamilyList");
const adminSubmenuPanel = document.querySelector("#adminSubmenuPanel");
const newFamilyButton = document.querySelector("#newFamilyButton");
const familyOriginalName = document.querySelector("#familyOriginalName");
const familyNameInput = document.querySelector("#familyNameInput");
const familyImageInput = document.querySelector("#familyImageInput");
const familyImageFile = document.querySelector("#familyImageFile");
const familyPreviewImage = document.querySelector("#familyPreviewImage");
const familyPreviewTitle = document.querySelector("#familyPreviewTitle");
const saveFamilyButton = document.querySelector("#saveFamilyButton");
const deleteFamilyButton = document.querySelector("#deleteFamilyButton");
const newSubmenuButton = document.querySelector("#newSubmenuButton");
const submenuList = document.querySelector("#submenuList");
const adminFilterLabel = document.querySelector("#adminFilterLabel");
const adminProductSelect = document.querySelector("#adminProductSelect");
const adminProductList = document.querySelector("#adminProductList");
const adminCount = document.querySelector("#adminCount");
const adminPreviewImage = document.querySelector("#adminPreviewImage");
const adminPreviewCategory = document.querySelector("#adminPreviewCategory");
const adminPreviewTitle = document.querySelector("#adminPreviewTitle");
const adminCategory = document.querySelector("#adminCategory");
const adminSubcategory = document.querySelector("#adminSubcategory");
const adminTitle = document.querySelector("#adminTitle");
const adminPrice = document.querySelector("#adminPrice");
const adminRank = document.querySelector("#adminRank");
const adminImage = document.querySelector("#adminImage");
const adminImageFile = document.querySelector("#adminImageFile");
const adminShort = document.querySelector("#adminShort");
const adminDescription = document.querySelector("#adminDescription");
const newProductButton = document.querySelector("#newProductButton");
const deleteProductButton = document.querySelector("#deleteProductButton");
const toggleProductVisibilityButton = document.querySelector("#toggleProductVisibilityButton");
const resetAdminButton = document.querySelector("#resetAdminButton");
const saveAdminButton = document.querySelector("#saveAdminButton");

let heroTimer;
let cartToastTimer;
let dragStartX = 0;
let dragCurrentX = 0;
let isDraggingHero = false;
const heroIntervalMs = 5200;

function money(value) {
  if (!Number.isFinite(Number(value)) || Number(value) <= 0) return "Consultar";
  return formatter.format(value).replace(/\s/g, " ");
}

function hasPrice(product) {
  return Number.isFinite(Number(product?.price)) && Number(product.price) > 0;
}

function productOptions(product) {
  return Array.isArray(product?.options) ? product.options.filter((option) => hasPrice(option)) : [];
}

function productPriceLabel(product) {
  const options = productOptions(product);
  if (options.length === 0) return money(product.price);
  return `Desde ${money(Math.min(...options.map((option) => Number(option.price))))}`;
}

function orderKeyFor(productId, optionId = "") {
  return optionId ? `${productId}::${optionId}` : productId;
}

function resolveOrderItem(orderKey, quantity = 0) {
  const [productId, optionId = ""] = String(orderKey).split("::");
  const product = findProduct(productId);
  if (!product) return null;
  const option = productOptions(product).find((item) => item.id === optionId);
  return {
    ...product,
    id: orderKey,
    productId,
    optionId: option?.id || "",
    title: option ? `${product.title} · ${option.label}` : product.title,
    price: option?.price ?? product.price,
    quantity,
  };
}

function removeProductFromOrder(productId) {
  Object.keys(state.order).forEach((key) => {
    if (key === productId || key.startsWith(`${productId}::`)) delete state.order[key];
  });
}

function isProductVisible(product) {
  return product && product.hidden !== true;
}

function menuLabel(value) {
  const specialLabels = {
    SANDWICH: "Sándwiches",
    "WRAPS & ENSALADA": "Wraps & Ensaladas",
  };
  if (specialLabels[value]) return specialLabels[value];
  const text = String(value || "").toLocaleLowerCase("es-AR");
  return text.charAt(0).toLocaleUpperCase("es-AR") + text.slice(1);
}

function findProduct(id) {
  return products.find((product) => product.id === id);
}

function findCategory(name) {
  return categories.find((category) => category.name === name);
}

function readImageFile(file, callback) {
  if (!file || !file.type.startsWith("image/")) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(String(reader.result)));
  reader.readAsDataURL(file);
}

function cleanMenuUrl() {
  const url = new URL(window.location.href);
  url.hash = "";
  return url.toString();
}

function whatsappUrl(phone = "", message = "") {
  const cleanPhone = String(phone || "").replace(/\D/g, "");
  const base = cleanPhone ? `https://wa.me/${cleanPhone}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(message)}`;
}

function safeExternalUrl(value) {
  const url = String(value || "").trim();
  if (!url) return "";
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

function saveData() {
  localStorage.setItem("deBotanasCartaMenuDataV15", JSON.stringify({ business, categories, subcategories, products }));
}

function loadData() {
  const saved = localStorage.getItem("deBotanasCartaMenuDataV15");
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    if (parsed.business) Object.assign(business, parsed.business);
    if (business.name === "Del Mon Restaurante") business.name = "Carta De Botanas";
    if (business.brandTitle === "DEL MON") business.brandTitle = "DE BOTANAS";
    if (business.brandSubtitle === "RESTAURANTE") business.brandSubtitle = "CARTA DIGITAL";
    if (Array.isArray(parsed.categories) && parsed.categories.length > 0) {
      categories.splice(0, categories.length, ...parsed.categories);
    }
    if (parsed.subcategories && typeof parsed.subcategories === "object") {
      Object.keys(subcategories).forEach((key) => delete subcategories[key]);
      Object.assign(subcategories, parsed.subcategories);
    }
    if (Array.isArray(parsed.products)) {
      products.splice(0, products.length, ...parsed.products);
    }
  } catch {
    localStorage.removeItem("deBotanasCartaMenuDataV15");
  }
}

function filteredProducts() {
  return products.filter((product) => {
    if (!isProductVisible(product)) return false;
    const matchesCategory = state.selectedCategory === "Todos" || product.category === state.selectedCategory;
    const matchesSubcategory =
      !subcategories[state.selectedCategory] ||
      state.selectedSubcategory === "Todos" ||
      product.subcategory === state.selectedSubcategory;
    return matchesCategory && matchesSubcategory;
  });
}

function heroProducts() {
  return recommendedProductIds
    .map((productId) => findProduct(productId))
    .filter((product) => product && isProductVisible(product));
}

function renderHeroSlides() {
  const heroItems = heroProducts();
  const hasHeroItems = heroItems.length > 0;
  recommendedHeading.hidden = !hasHeroItems;
  heroSlider.hidden = !hasHeroItems;
  heroDots.hidden = !hasHeroItems;
  if (state.heroIndex >= heroItems.length) state.heroIndex = 0;
  heroTrack.innerHTML = heroItems
    .map(
      (product) => `
        <article class="hero-card" data-detail="${product.id}">
          <img src="${product.image}" alt="${product.title}" />
          <div class="hero-overlay"></div>
          <span class="top-pill">${product.rank}</span>
          <div class="hero-content">
            <h2>${product.title}</h2>
            <p>${product.short}</p>
            <strong>${productPriceLabel(product)}</strong>
            <button class="orange-button" type="button" data-add="${product.id}" ${hasPrice(product) ? "" : "disabled"}>
              <i data-lucide="plus"></i>
              Agregar
            </button>
          </div>
        </article>
      `,
    )
    .join("");
  renderHeroPosition();
  refreshIcons();
}

function renderHeroDots() {
  heroDots.innerHTML = heroProducts()
    .map(
      (_, index) =>
        `<button type="button" class="${index === state.heroIndex ? "is-active" : ""}" data-hero="${index}" aria-label="Ver recomendado ${index + 1}"></button>`,
    )
    .join("");
}

function renderHeroPosition(offsetPx = 0) {
  if (window.matchMedia("(min-width: 800px)").matches) {
    state.heroIndex = 0;
    heroTrack.style.transform = "none";
    heroDots.hidden = true;
    renderHeroDots();
    return;
  }
  const width = heroTrack.getBoundingClientRect().width || 1;
  heroTrack.style.transform = `translateX(${state.heroIndex * -width + offsetPx}px)`;
  heroDots.hidden = heroProducts().length === 0;
  renderHeroDots();
}

function moveHero(direction) {
  if (window.matchMedia("(min-width: 800px)").matches) return;
  const total = heroProducts().length;
  if (total === 0) return;
  state.heroIndex = (state.heroIndex + direction + total) % total;
  renderHeroPosition();
}

function scheduleHero() {
  window.clearInterval(heroTimer);
  if (window.matchMedia("(min-width: 800px)").matches) return;
  heroTimer = window.setInterval(() => moveHero(1), heroIntervalMs);
}

function renderCategories() {
  categoryRow.hidden = products.length === 0;
  categoryRow.innerHTML = categories
    .map(
      (category) => `
        <a class="category-card ${category.name === state.selectedCategory ? "is-active" : ""}" href="#" data-category="${category.name}">
          <img src="${category.image}" alt="${menuLabel(category.name)}" loading="lazy" />
          <span>${menuLabel(category.name)}</span>
        </a>
      `,
    )
    .join("");
}

function renderSubcategories() {
  const activeSubcategories = subcategories[state.selectedCategory] || [];
  const notice = menuNotices[`${state.selectedCategory}::${state.selectedSubcategory}`] || "";
  subcategoryRow.hidden = products.length === 0 || activeSubcategories.length === 0;
  menuNotice.hidden = !notice;
  menuNotice.textContent = notice;
  subcategoryRow.innerHTML = activeSubcategories
    .map(
      (subcategory) => `
        <a class="subcategory-card ${subcategory.name === state.selectedSubcategory ? "is-active" : ""}" href="#" data-subcategory="${subcategory.name}">
          <img src="${subcategory.image}" alt="${menuLabel(subcategory.name)}" loading="lazy" />
          <span>${menuLabel(subcategory.name)}</span>
        </a>
      `,
    )
    .join("");
}

function renderProducts() {
  promoCard.hidden = !products.some((product) => ["BEBIDAS", "VINOS"].includes(product.category));
  const visibleProducts = filteredProducts().filter((product) => {
    if (state.selectedCategory !== "Todos") return true;
    return !heroProducts().some((hero) => hero.id === product.id);
  });
  popularGrid.innerHTML = visibleProducts.length
    ? visibleProducts
        .map(
          (product) => `
            <article class="dish-card">
              <button type="button" class="card-image-button" data-detail="${product.id}" aria-label="Ver ${product.title}">
                <img src="${product.image}" alt="${product.title}" loading="lazy" />
              </button>
              <div>
                <h3>${product.title}</h3>
                <p>${product.short}</p>
                <strong>${productPriceLabel(product)}</strong>
              </div>
              <button class="add-button" type="button" data-add="${product.id}" aria-label="${hasPrice(product) ? `Agregar ${product.title}` : `${product.title} sin precio cargado`}" ${hasPrice(product) ? "" : "disabled"}>
                <i data-lucide="plus"></i>
              </button>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-state">Estamos preparando la nueva carta.</div>`;
  refreshIcons();
}

function getOrderItems() {
  return Object.entries(state.order)
    .map(([orderKey, quantity]) => resolveOrderItem(orderKey, quantity))
    .filter(Boolean);
}

function getOrderSummary() {
  const items = getOrderItems();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const note = orderNote.value.trim();
  return { items, count, total, note };
}

function createOrderCode() {
  const now = new Date();
  const datePart = now.toISOString().slice(2, 10).replaceAll("-", "");
  const timePart = String(now.getHours()).padStart(2, "0") + String(now.getMinutes()).padStart(2, "0");
  return `FUE-${datePart}-${timePart}-${Math.floor(100 + Math.random() * 900)}`;
}

function buildOrderMessage(type, code = createOrderCode()) {
  const { items, total, note } = getOrderSummary();
  const lines = items.map((item) => `${item.quantity} x ${item.title} - ${money(item.price * item.quantity)}`);
  const noteText = note ? `\nAclaraciones: ${note}` : "";
  const localText = type === "En el local" ? "\nMesa: asigna mozo al escanear" : "";
  return {
    code,
    text: `${business.name}\nPedido: ${code}\nTipo: ${type}${localText}\n\n${lines.join("\n")}\n\nTotal: ${money(total)}${noteText}`,
  };
}

function renderOrder() {
  const { items, count, total, note } = getOrderSummary();

  floatingBadge.textContent = count;
  floatingCart.hidden = count === 0;
  if (count === 0) orderPanel.hidden = true;
  orderCount.textContent = count === 1 ? "1 producto" : `${count} productos`;
  orderTotal.textContent = money(total);
  orderItems.innerHTML = items
    .map(
      (item) => `
        <article class="order-item">
          <img src="${item.image}" alt="${item.title}" />
          <div>
            <strong>${item.title}</strong>
            <span>${money(item.price * item.quantity)}</span>
          </div>
          <div class="qty-control" aria-label="Modificar cantidad de ${item.title}">
            <button type="button" data-qty="-1" data-id="${item.id}" aria-label="Quitar ${item.title}">−</button>
            <b>${item.quantity}</b>
            <button type="button" data-qty="1" data-id="${item.id}" aria-label="Agregar ${item.title}">+</button>
          </div>
        </article>
      `,
    )
    .join("");
  const deliveryOrder = buildOrderMessage("Delivery / para llevar");
  whatsappButton.href = whatsappUrl(
    business.whatsapp,
    `Hola, quiero hacer este pedido por delivery / para llevar:\n\n${deliveryOrder.text}`,
  );
  localOrderButton.disabled = count === 0;
  whatsappButton.classList.toggle("is-disabled", count === 0);
  refreshIcons();
}

function addProduct(id, optionId = "") {
  const product = findProduct(id);
  if (!hasPrice(product) || !isProductVisible(product)) return;
  const options = productOptions(product);
  if (options.length > 0 && !optionId) {
    openProduct(id);
    return;
  }
  const option = options.find((item) => item.id === optionId);
  if (options.length > 0 && !option) return;
  const orderKey = orderKeyFor(id, option?.id);
  state.order[orderKey] = (state.order[orderKey] || 0) + 1;
  renderOrder();
  showCartToast(resolveOrderItem(orderKey), orderKey);
}

function changeQuantity(orderKey, delta) {
  const item = resolveOrderItem(orderKey);
  const nextQuantity = (state.order[orderKey] || 0) + delta;
  if (nextQuantity <= 0) delete state.order[orderKey];
  else state.order[orderKey] = nextQuantity;
  renderOrder();
  if (delta > 0 && item) showCartToast(item, orderKey);
}

function showCartToast(product, orderKey = product.id) {
  const quantity = state.order[orderKey] || 0;
  window.clearTimeout(cartToastTimer);
  cartToastName.textContent = product.title;
  cartToastDetail.textContent = quantity === 1 ? "Agregado al carrito" : `${quantity} unidades en el carrito`;
  cartToast.hidden = false;
  cartToast.classList.remove("is-visible");
  floatingCart.classList.remove("is-bumping");
  void cartToast.offsetWidth;
  cartToast.classList.add("is-visible");
  floatingCart.classList.add("is-bumping");
  if (navigator.vibrate) navigator.vibrate(30);
  cartToastTimer = window.setTimeout(() => {
    cartToast.hidden = true;
    cartToast.classList.remove("is-visible");
    floatingCart.classList.remove("is-bumping");
  }, 2350);
}

function clearOrder() {
  state.order = {};
  orderNote.value = "";
  renderOrder();
  orderPanel.hidden = true;
}

function renderReview() {
  const { items, total, note } = getOrderSummary();
  reviewItems.innerHTML = items
    .map(
      (item) => `
        <article class="review-item">
          <span>${item.quantity}x</span>
          <div>
            <strong>${item.title}</strong>
            <small>${money(item.price)} c/u</small>
          </div>
          <b>${money(item.price * item.quantity)}</b>
        </article>
      `,
    )
    .join("");
  reviewTable.textContent = "El mozo asigna la mesa al escanear el QR.";
  reviewNote.textContent = note ? `Aclaraciones: ${note}` : "Sin aclaraciones.";
  reviewTotal.textContent = money(total);
}

function openLocalReview() {
  if (getOrderSummary().count === 0) return;
  renderReview();
  reviewDialog.hidden = false;
  orderPanel.hidden = true;
}

function closeReview(shouldReturnToCart = true) {
  reviewDialog.hidden = true;
  if (shouldReturnToCart && getOrderSummary().count > 0) {
    orderPanel.hidden = false;
  }
}

function drawQrFallback(payload) {
  qrFallback.hidden = false;
  qrFallback.textContent = payload.text;
}

function confirmLocalOrder() {
  if (getOrderSummary().count === 0) return;
  const payload = buildOrderMessage("En el local");
  state.lastLocalOrder = payload;
  closeReview(false);
  qrDialog.hidden = false;
  qrCodeLabel.textContent = payload.code;
  qrFallback.hidden = true;
  qrFallback.textContent = "";
  orderQrNode.hidden = true;
  orderQrNode.innerHTML = "";
  orderQrCanvas.hidden = true;
  orderQrImage.hidden = true;
  orderQrImage.removeAttribute("src");

  const canvasContext = orderQrCanvas.getContext("2d");
  canvasContext.clearRect(0, 0, orderQrCanvas.width, orderQrCanvas.height);

  if (typeof window.QRCode === "function") {
    orderQrNode.hidden = false;
    new window.QRCode(orderQrNode, {
      text: payload.text,
      width: 240,
      height: 240,
      colorDark: "#171717",
      colorLight: "#fffdf8",
      correctLevel: window.QRCode.CorrectLevel.M,
    });
  } else if (window.QRCode?.toCanvas) {
    orderQrCanvas.hidden = false;
    window.QRCode.toCanvas(orderQrCanvas, payload.text, {
      width: 240,
      margin: 2,
      color: {
        dark: "#171717",
        light: "#fffdf8",
      },
    }).catch(() => drawQrFallback(payload));
  } else {
    orderQrImage.hidden = false;
    orderQrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&margin=10&data=${encodeURIComponent(payload.text)}`;
    orderQrImage.onerror = () => {
      orderQrImage.hidden = true;
      drawQrFallback(payload);
    };
  }
}

function closeQr() {
  qrDialog.hidden = true;
}

function startNewOrder() {
  closeQr();
  clearOrder();
}

function openProduct(id) {
  const product = findProduct(id);
  if (!product) return;
  const options = productOptions(product);
  state.currentProduct = product;
  state.selectedOptionId = options[0]?.id || null;
  dialogImage.src = product.image;
  dialogImage.alt = product.title;
  dialogCategory.textContent = product.category;
  dialogTitle.textContent = product.title;
  dialogPrice.textContent = money(options[0]?.price ?? product.price);
  dialogDescription.textContent = product.description;
  dialogOptions.hidden = options.length === 0;
  dialogOptions.innerHTML = options
    .map(
      (option) => `
        <button class="dialog-option ${option.id === state.selectedOptionId ? "is-selected" : ""}" type="button" data-product-option="${option.id}">
          <span>${option.label}</span>
          <strong>${money(option.price)}</strong>
        </button>
      `,
    )
    .join("");
  productDialog.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeProduct() {
  productDialog.hidden = true;
  document.body.style.overflow = "";
  state.currentProduct = null;
  state.selectedOptionId = null;
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function rerenderAll() {
  state.heroIndex = Math.max(0, Math.min(state.heroIndex, heroProducts().length - 1));
  renderCategories();
  renderSubcategories();
  renderHeroSlides();
  renderProducts();
  renderOrder();
  renderBrand();
  renderQuickLinks();
  refreshIcons();
}

function renderBrand() {
  brandTitle.textContent = business.brandTitle || "DE BOTANAS";
  brandSubtitle.textContent = business.brandSubtitle || "CARTA DIGITAL";
}

function renderQuickLinks() {
  const menuUrl = cleanMenuUrl();
  const shareText = `Te comparto la carta digital de ${business.name}: ${menuUrl}`;
  const contactText = `Hola, quiero consultar por la carta de ${business.name}.`;
  const instagramUrl = safeExternalUrl(business.instagram);
  const mapsUrl =
    safeExternalUrl(business.maps) ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.name || "Carta De Botanas")}`;

  shareCartaLink.href = whatsappUrl("", shareText);
  quickWhatsappLink.href = whatsappUrl(business.whatsapp, contactText);
  quickInstagramLink.href = instagramUrl || "#";
  quickMapsLink.href = mapsUrl;
  quickInstagramLink.classList.toggle("is-disabled", !instagramUrl);
  quickMapsLink.classList.toggle("is-disabled", !mapsUrl);
}

function hasAdminAccess() {
  try {
    const access = JSON.parse(sessionStorage.getItem(adminAccessKey) || "null");
    return Boolean(access?.grantedAt && Date.now() - access.grantedAt < 8 * 60 * 60 * 1000);
  } catch {
    return false;
  }
}

function requestAdminAccess() {
  const code = window.prompt("Código de administrador");
  if (code !== adminCode) {
    window.alert("Código incorrecto.");
    history.replaceState(null, "", location.pathname);
    return false;
  }
  sessionStorage.setItem(adminAccessKey, JSON.stringify({ grantedAt: Date.now(), source: "direct" }));
  return true;
}

function openAdmin() {
  if (!hasAdminAccess() && !requestAdminAccess()) return;
  document.body.classList.add("admin-mode");
  adminPanel.hidden = false;
  renderAdmin();
}

function closeAdmin() {
  adminPanel.hidden = true;
  closeEdit();
  closeFamily();
  document.body.classList.remove("admin-mode");
  if (location.hash === "#admin") history.replaceState(null, "", location.pathname);
}

function renderAdminLegacy() {
  adminBusinessName.value = business.name;
  adminBrandTitle.value = business.brandTitle || "DE BOTANAS";
  adminBrandSubtitle.value = business.brandSubtitle || "CARTA DIGITAL";
  adminWhatsapp.value = business.whatsapp;
  adminInstagram.value = business.instagram || "";
  adminMaps.value = business.maps || "";
  adminCategory.innerHTML = categories.map((category) => `<option value="${category.name}">${category.name}</option>`).join("");
  if (!products.some((product) => product.id === state.adminProductId)) {
    state.adminProductId = products[0]?.id || null;
  }
  adminCount.textContent = `${products.length} ${products.length === 1 ? "plato" : "platos"}`;
  adminProductList.innerHTML = products
    .map(
      (product) => `
        <button class="admin-product-button ${product.id === state.adminProductId ? "is-active" : ""}" type="button" data-admin-product="${product.id}">
          <img src="${product.image}" alt="${product.title}" />
          <span>
            <strong>${product.title}</strong>
            <span>${product.category} · ${money(product.price)}${isProductVisible(product) ? "" : " · Oculto"}</span>
          </span>
        </button>
      `,
    )
    .join("");
  adminProductSelect.value = state.adminProductId;
  renderAdminProduct();
}

function renderAdmin() {
  adminBusinessName.value = business.name;
  adminBrandTitle.value = business.brandTitle || "DE BOTANAS";
  adminBrandSubtitle.value = business.brandSubtitle || "CARTA DIGITAL";
  adminWhatsapp.value = business.whatsapp;
  adminInstagram.value = business.instagram || "";
  adminMaps.value = business.maps || "";
  adminCategory.innerHTML = categories.map((category) => `<option value="${category.name}">${category.name}</option>`).join("");
  if (!products.some((product) => product.id === state.adminProductId)) {
    state.adminProductId = products[0]?.id || null;
  }

  const filteredAdminProducts =
    state.adminFilterCategory === "Todos"
      ? products
      : products.filter((product) => product.category === state.adminFilterCategory);

  adminRecommendedList.innerHTML = heroProducts()
    .map(
      (product, index) => `
        <article class="admin-reco-card">
          <img src="${product.image}" alt="${product.title}" />
          <div>
            <span>#${index + 1} recomendado</span>
            <strong>${product.title}</strong>
            <small>${product.category} · ${money(product.price)}${isProductVisible(product) ? "" : " · Oculto"}</small>
          </div>
          <div class="admin-card-actions">
            <button type="button" data-move-product="${product.id}" data-direction="-1" aria-label="Subir ${product.title}">↑</button>
            <button type="button" data-move-product="${product.id}" data-direction="1" aria-label="Bajar ${product.title}">↓</button>
            <button type="button" data-edit-product="${product.id}">Editar</button>
          </div>
        </article>
      `,
    )
    .join("");

  adminFamilyList.innerHTML = [{ name: "Todos", image: categories[0]?.image || "" }, ...categories]
    .map(
      (category) =>
        category.name === "Todos"
          ? `
            <button class="admin-family-button ${category.name === state.adminFilterCategory ? "is-active" : ""}" type="button" data-admin-family="${category.name}">
              <img src="${category.image}" alt="${category.name}" />
              <span>${category.name}</span>
            </button>
          `
          : `
            <article class="admin-family-card ${category.name === state.adminFilterCategory ? "is-active" : ""}">
              <button class="admin-family-button" type="button" data-admin-family="${category.name}">
                <img src="${category.image}" alt="${category.name}" />
                <span>${category.name}</span>
              </button>
            </article>
          `,
    )
    .join("");

  renderAdminSubmenuPanel();

  const hiddenCount = filteredAdminProducts.filter((product) => !isProductVisible(product)).length;
  adminCount.textContent = `${filteredAdminProducts.length} ${filteredAdminProducts.length === 1 ? "plato" : "platos"}${hiddenCount ? ` · ${hiddenCount} oculto${hiddenCount === 1 ? "" : "s"}` : ""}`;
  adminFilterLabel.textContent =
    state.adminFilterCategory === "Todos" ? "Mostrando toda la carta." : `Familia: ${state.adminFilterCategory}.`;
  adminProductList.innerHTML = filteredAdminProducts.length
    ? filteredAdminProducts
        .map(
          (product) => `
            <article class="admin-product-button ${product.id === state.adminProductId ? "is-active" : ""} ${isProductVisible(product) ? "" : "is-hidden-product"}">
              <button type="button" class="admin-product-main" data-edit-product="${product.id}">
                <img src="${product.image}" alt="${product.title}" />
                <span>
                  <strong>${product.title}</strong>
                  <span>${product.category} · ${money(product.price)}${isProductVisible(product) ? "" : " · Oculto"}</span>
                </span>
              </button>
              <div class="admin-card-actions">
                <button type="button" data-move-product="${product.id}" data-direction="-1" aria-label="Subir ${product.title}">↑</button>
                <button type="button" data-move-product="${product.id}" data-direction="1" aria-label="Bajar ${product.title}">↓</button>
                <button class="visibility-action ${isProductVisible(product) ? "is-hide" : "is-show"}" type="button" data-toggle-visibility="${product.id}">${isProductVisible(product) ? "Ocultar" : "Mostrar"}</button>
                <button type="button" data-edit-product="${product.id}">Editar</button>
              </div>
            </article>
          `,
        )
        .join("")
    : `<div class="empty-state">No hay platos en esta familia.</div>`;
  adminProductSelect.value = state.adminProductId;
}

function renderAdminSubmenuPanel() {
  if (state.adminFilterCategory === "Todos") {
    adminSubmenuPanel.innerHTML = `
      <div class="admin-submenu-empty">
        Seleccioná una familia para ver y editar su submenú.
      </div>
    `;
    return;
  }

  const category = findCategory(state.adminFilterCategory);
  const items = subcategories[state.adminFilterCategory] || [{ name: "Todos", image: category?.image || "" }];
  adminSubmenuPanel.innerHTML = `
    <div class="admin-submenu-head">
      <div>
        <strong>Submenú de ${state.adminFilterCategory}</strong>
        <span>${items.length} ${items.length === 1 ? "opción" : "opciones"}</span>
      </div>
      <button type="button" data-edit-family="${state.adminFilterCategory}">Editar familia y submenú</button>
    </div>
    <div class="admin-submenu-list">
      ${items
        .map(
          (item) => `
            <span class="admin-submenu-chip">
              <img src="${item.image || category?.image || ""}" alt="${item.name}" />
              ${item.name}
            </span>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderAdminSubcategories(categoryName, selectedValue = "Todos") {
  const options = subcategories[categoryName] || [{ name: "Todos" }];
  adminSubcategory.innerHTML = options
    .map((subcategory) => `<option value="${subcategory.name}">${subcategory.name}</option>`)
    .join("");
  adminSubcategory.disabled = !subcategories[categoryName];
  adminSubcategory.value = selectedValue || "Todos";
}

function renderAdminProduct() {
  const product = findProduct(adminProductSelect.value) || products[0];
  if (!product) return;
  state.adminProductId = product.id;
  adminProductSelect.value = product.id;
  editPanelTitle.textContent = product.title;
  adminPreviewImage.src = product.image;
  adminPreviewImage.alt = product.title;
  adminPreviewCategory.textContent = `${product.category}${isProductVisible(product) ? "" : " · Oculto"}`;
  adminPreviewTitle.textContent = product.title;
  toggleProductVisibilityButton.textContent = isProductVisible(product) ? "Ocultar plato" : "Mostrar plato";
  toggleProductVisibilityButton.classList.toggle("is-show", !isProductVisible(product));
  adminCategory.value = product.category;
  renderAdminSubcategories(product.category, product.subcategory || "Todos");
  adminTitle.value = product.title;
  adminPrice.value = product.price;
  adminRank.value = product.rank || "";
  adminImage.value = product.image || "";
  adminShort.value = product.short || "";
  adminDescription.value = product.description || "";
}

function openEditProduct(id) {
  const product = findProduct(id);
  if (!product) return;
  state.adminProductId = product.id;
  adminProductSelect.value = product.id;
  renderAdminProduct();
  editPanel.hidden = false;
  document.body.classList.add("editing-product");
}

function closeEdit() {
  if (!editPanel) return;
  editPanel.hidden = true;
  document.body.classList.remove("editing-product");
}

function openFamilyEditor(name) {
  const category = findCategory(name);
  if (!category) return;
  if (!subcategories[category.name]) {
    subcategories[category.name] = [{ name: "Todos", image: category.image || "" }];
  }
  state.adminFamilyName = category.name;
  familyOriginalName.value = category.name;
  familyNameInput.value = category.name;
  familyImageInput.value = category.image || "";
  familyPanelTitle.textContent = category.name;
  familyPreviewTitle.textContent = category.name;
  familyPreviewImage.src = category.image || "";
  familyPreviewImage.alt = category.name;
  renderSubmenuEditor(category.name);
  familyPanel.hidden = false;
}

function closeFamily() {
  if (!familyPanel) return;
  familyPanel.hidden = true;
}

function createFamily() {
  let index = categories.length + 1;
  let name = `Nueva familia ${index}`;
  while (findCategory(name)) {
    index += 1;
    name = `Nueva familia ${index}`;
  }
  categories.push({
    name,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=82",
  });
  subcategories[name] = [{ name: "Todos", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=240&q=82" }];
  state.adminFilterCategory = name;
  saveData();
  rerenderAll();
  renderAdmin();
  openFamilyEditor(name);
}

function saveFamily() {
  const originalName = familyOriginalName.value;
  const category = findCategory(originalName);
  if (!category) return;
  const nextName = familyNameInput.value.trim() || originalName;
  const duplicate = categories.some((item) => item.name === nextName && item.name !== originalName);
  if (duplicate) {
    window.alert("Ya existe una familia con ese nombre.");
    return;
  }
  const nextSubmenus = collectSubmenus(originalName);
  if (!nextSubmenus) return;

  category.name = nextName;
  category.image = familyImageInput.value.trim() || category.image;
  products.forEach((product) => {
    if (product.category === originalName) product.category = nextName;
  });
  nextSubmenus.forEach((submenu) => {
    products.forEach((product) => {
      if (product.category === nextName && product.subcategory === submenu.previousName) {
        if (submenu.name === "Todos") delete product.subcategory;
        else product.subcategory = submenu.name;
      }
    });
  });
  subcategories[nextName] = nextSubmenus.map(({ name, image }) => ({ name, image }));
  if (nextName !== originalName) delete subcategories[originalName];
  if (state.selectedCategory === originalName) state.selectedCategory = nextName;
  if (state.adminFilterCategory === originalName) state.adminFilterCategory = nextName;
  state.adminFamilyName = nextName;
  saveData();
  rerenderAll();
  renderAdmin();
  closeFamily();
}

function renderSubmenuEditor(categoryName) {
  const items = subcategories[categoryName] || [];
  submenuList.innerHTML = items
    .map(
      (item, index) => `
        <article class="submenu-item" data-submenu-index="${index}">
          <img src="${item.image || findCategory(categoryName)?.image || ""}" alt="${item.name}" />
          <div>
            <label>
              Nombre
              <input type="text" value="${item.name}" data-submenu-name="${index}" ${index === 0 ? "readonly" : ""} />
            </label>
            <label>
              Imagen URL
              <input type="url" value="${item.image || ""}" data-submenu-image="${index}" />
            </label>
            <label class="file-picker compact-file">
              Cargar imagen
              <input type="file" accept="image/*" data-submenu-file="${index}" />
              <span>Elegir imagen</span>
            </label>
          </div>
          <button type="button" data-delete-submenu="${index}" ${index === 0 ? "disabled" : ""}>Eliminar</button>
        </article>
      `,
    )
    .join("");
}

function addSubmenu() {
  const categoryName = familyOriginalName.value;
  if (!categoryName) return;
  if (!subcategories[categoryName]) {
    subcategories[categoryName] = [{ name: "Todos", image: findCategory(categoryName)?.image || "" }];
  }
  let index = subcategories[categoryName].length;
  let name = `Submenú ${index}`;
  while (subcategories[categoryName].some((item) => item.name === name)) {
    index += 1;
    name = `Submenú ${index}`;
  }
  subcategories[categoryName].push({
    name,
    image: findCategory(categoryName)?.image || "",
  });
  renderSubmenuEditor(categoryName);
}

function collectSubmenus(categoryName) {
  const current = subcategories[categoryName] || [{ name: "Todos", image: findCategory(categoryName)?.image || "" }];
  const nextItems = current.map((item, index) => {
    const nameInput = submenuList.querySelector(`[data-submenu-name="${index}"]`);
    const imageInput = submenuList.querySelector(`[data-submenu-image="${index}"]`);
    return {
      name: index === 0 ? "Todos" : nameInput?.value.trim() || item.name,
      image: imageInput?.value.trim() || item.image || findCategory(categoryName)?.image || "",
      previousName: item.name,
    };
  });

  const names = new Set();
  for (const item of nextItems) {
    if (names.has(item.name)) {
      window.alert("Hay submenús con nombres repetidos.");
      return null;
    }
    names.add(item.name);
  }
  return nextItems;
}

function deleteSubmenu(index) {
  const categoryName = familyOriginalName.value;
  const items = subcategories[categoryName];
  if (!items || index <= 0 || index >= items.length) return;
  const removedName = items[index].name;
  items.splice(index, 1);
  products.forEach((product) => {
    if (product.category === categoryName && product.subcategory === removedName) delete product.subcategory;
  });
  saveData();
  rerenderAll();
  renderSubmenuEditor(categoryName);
}

function deleteFamily() {
  const name = familyOriginalName.value;
  if (!name || products.some((product) => product.category === name)) {
    window.alert("No se puede eliminar una familia que tiene platos. Primero mové esos platos a otra familia.");
    return;
  }
  const index = categories.findIndex((category) => category.name === name);
  if (index < 0) return;
  categories.splice(index, 1);
  delete subcategories[name];
  if (state.selectedCategory === name) state.selectedCategory = categories[0]?.name || "Todos";
  if (state.adminFilterCategory === name) state.adminFilterCategory = "Todos";
  saveData();
  rerenderAll();
  renderAdmin();
  closeFamily();
}

function saveAdminProduct() {
  saveBusinessData(false);
  const product = findProduct(state.adminProductId);
  if (!product) return;
  product.category = adminCategory.value;
  if (subcategories[product.category] && adminSubcategory.value !== "Todos") {
    product.subcategory = adminSubcategory.value;
  } else {
    delete product.subcategory;
  }
  product.title = adminTitle.value.trim() || product.title;
  const nextPrice = adminPrice.value.trim();
  product.price = nextPrice === "" ? null : Number(nextPrice) || null;
  product.rank = adminRank.value.trim() || "NUEVO";
  product.image = adminImage.value.trim() || product.image;
  product.short = adminShort.value.trim() || product.short;
  product.description = adminDescription.value.trim() || product.description;
  saveData();
  rerenderAll();
  renderAdmin();
  closeEdit();
}

function saveBusinessData(shouldRenderAdmin = true) {
  business.name = adminBusinessName.value.trim() || business.name;
  business.brandTitle = adminBrandTitle.value.trim() || business.brandTitle;
  business.brandSubtitle = adminBrandSubtitle.value.trim() || business.brandSubtitle;
  business.whatsapp = adminWhatsapp.value.trim() || business.whatsapp;
  business.instagram = adminInstagram.value.trim();
  business.maps = adminMaps.value.trim();
  saveData();
  renderBrand();
  renderQuickLinks();
  if (shouldRenderAdmin) renderAdmin();
}

function createProduct() {
  const id = `plato-${Date.now()}`;
  products.push({
    id,
    rank: "NUEVO",
    title: "Nuevo plato",
    category: categories[0]?.name || "ENTRADAS",
    price: null,
    short: "Descripción breve del plato.",
    description: "Detalle del plato.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=84",
  });
  state.adminProductId = id;
  saveData();
  rerenderAll();
  renderAdmin();
  openEditProduct(id);
}

function deleteProduct() {
  if (products.length <= 1 || !state.adminProductId) return;
  const index = products.findIndex((product) => product.id === state.adminProductId);
  if (index >= 0) products.splice(index, 1);
  removeProductFromOrder(state.adminProductId);
  state.adminProductId = products[0]?.id || null;
  saveData();
  rerenderAll();
  renderAdmin();
  closeEdit();
}

function toggleProductVisibility(id = state.adminProductId) {
  const product = findProduct(id);
  if (!product) return;
  product.hidden = isProductVisible(product);
  if (!isProductVisible(product)) removeProductFromOrder(product.id);
  state.adminProductId = product.id;
  saveData();
  rerenderAll();
  renderAdmin();
  renderAdminProduct();
  renderOrder();
}

function moveProduct(id, direction) {
  const index = products.findIndex((product) => product.id === id);
  const nextIndex = index + direction;
  if (index < 0 || nextIndex < 0 || nextIndex >= products.length) return;
  const [product] = products.splice(index, 1);
  products.splice(nextIndex, 0, product);
  state.adminProductId = id;
  saveData();
  rerenderAll();
  renderAdmin();
}

function resetData() {
  localStorage.removeItem("deBotanasCartaMenuDataV15");
  location.reload();
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const detailButton = event.target.closest("[data-detail]");
  const categoryButton = event.target.closest("[data-category]");
  const subcategoryButton = event.target.closest("[data-subcategory]");
  const heroDot = event.target.closest("[data-hero]");
  const quantityButton = event.target.closest("[data-qty]");
  const openOrderButton = event.target.closest("[data-open-order]");
  const adminProductButton = event.target.closest("[data-admin-product]");
  const editProductButton = event.target.closest("[data-edit-product]");
  const adminFamilyButton = event.target.closest("[data-admin-family]");
  const editFamilyButton = event.target.closest("[data-edit-family]");
  const moveProductButton = event.target.closest("[data-move-product]");
  const toggleVisibilityButton = event.target.closest("[data-toggle-visibility]");
  const deleteSubmenuButton = event.target.closest("[data-delete-submenu]");

  if (addButton) {
    event.preventDefault();
    addProduct(addButton.dataset.add);
  }
  if (detailButton && !addButton && !isDraggingHero) openProduct(detailButton.dataset.detail);
  if (quantityButton) changeQuantity(quantityButton.dataset.id, Number(quantityButton.dataset.qty));
  if (openOrderButton && Object.keys(state.order).length > 0) {
    event.preventDefault();
    orderPanel.hidden = false;
  }
  if (adminProductButton) {
    state.adminProductId = adminProductButton.dataset.adminProduct;
    openEditProduct(state.adminProductId);
  }
  if (editProductButton) {
    state.adminProductId = editProductButton.dataset.editProduct;
    openEditProduct(state.adminProductId);
  }
  if (adminFamilyButton) {
    state.adminFilterCategory = adminFamilyButton.dataset.adminFamily;
    renderAdmin();
  }
  if (editFamilyButton) {
    openFamilyEditor(editFamilyButton.dataset.editFamily);
  }
  if (moveProductButton) {
    moveProduct(moveProductButton.dataset.moveProduct, Number(moveProductButton.dataset.direction));
  }
  if (toggleVisibilityButton) {
    toggleProductVisibility(toggleVisibilityButton.dataset.toggleVisibility);
  }
  if (deleteSubmenuButton) {
    deleteSubmenu(Number(deleteSubmenuButton.dataset.deleteSubmenu));
  }
  if (categoryButton) {
    event.preventDefault();
    state.selectedCategory = categoryButton.dataset.category;
    state.selectedSubcategory = "Todos";
    renderCategories();
    renderSubcategories();
    renderProducts();
  }
  if (subcategoryButton) {
    event.preventDefault();
    state.selectedSubcategory = subcategoryButton.dataset.subcategory;
    renderSubcategories();
    renderProducts();
  }
  if (heroDot) {
    state.heroIndex = Number(heroDot.dataset.hero);
    renderHeroPosition();
    scheduleHero();
  }
});

window.addEventListener("hashchange", () => {
  if (location.hash === "#admin") openAdmin();
  else closeAdmin();
});

closeAdminButton.addEventListener("click", closeAdmin);
closeEditButton.addEventListener("click", closeEdit);
closeFamilyButton.addEventListener("click", closeFamily);
saveBusinessButton.addEventListener("click", () => saveBusinessData());
adminCategory.addEventListener("change", () => renderAdminSubcategories(adminCategory.value, "Todos"));
saveAdminButton.addEventListener("click", saveAdminProduct);
newProductButton.addEventListener("click", createProduct);
newFamilyButton.addEventListener("click", createFamily);
newSubmenuButton.addEventListener("click", addSubmenu);
saveFamilyButton.addEventListener("click", saveFamily);
deleteFamilyButton.addEventListener("click", deleteFamily);
deleteProductButton.addEventListener("click", deleteProduct);
toggleProductVisibilityButton.addEventListener("click", () => toggleProductVisibility());
resetAdminButton.addEventListener("click", resetData);

editPanel.addEventListener("click", (event) => {
  if (event.target === editPanel) closeEdit();
});

familyPanel.addEventListener("click", (event) => {
  if (event.target === familyPanel) closeFamily();
});

adminImageFile.addEventListener("change", () => {
  readImageFile(adminImageFile.files?.[0], (dataUrl) => {
    adminImage.value = dataUrl;
    adminPreviewImage.src = dataUrl;
  });
});

familyImageFile.addEventListener("change", () => {
  readImageFile(familyImageFile.files?.[0], (dataUrl) => {
    familyImageInput.value = dataUrl;
    familyPreviewImage.src = dataUrl;
  });
});

submenuList.addEventListener("change", (event) => {
  const fileInput = event.target.closest("[data-submenu-file]");
  if (!fileInput) return;
  const index = fileInput.dataset.submenuFile;
  readImageFile(fileInput.files?.[0], (dataUrl) => {
    const imageInput = submenuList.querySelector(`[data-submenu-image="${index}"]`);
    const preview = fileInput.closest(".submenu-item")?.querySelector("img");
    if (imageInput) imageInput.value = dataUrl;
    if (preview) preview.src = dataUrl;
  });
});

heroTrack.addEventListener("pointerdown", (event) => {
  if (window.matchMedia("(min-width: 800px)").matches) return;
  isDraggingHero = true;
  dragStartX = event.clientX;
  dragCurrentX = 0;
  heroTrack.classList.add("is-dragging");
  window.clearInterval(heroTimer);
  heroTrack.setPointerCapture(event.pointerId);
});

heroTrack.addEventListener("pointermove", (event) => {
  if (!isDraggingHero) return;
  dragCurrentX = event.clientX - dragStartX;
  renderHeroPosition(dragCurrentX);
});

function endHeroDrag() {
  if (!isDraggingHero) return;
  heroTrack.classList.remove("is-dragging");
  const threshold = heroTrack.getBoundingClientRect().width * 0.18;
  if (dragCurrentX <= -threshold) moveHero(1);
  else if (dragCurrentX >= threshold) moveHero(-1);
  else renderHeroPosition();
  isDraggingHero = false;
  dragCurrentX = 0;
  scheduleHero();
}

heroTrack.addEventListener("pointerup", endHeroDrag);
heroTrack.addEventListener("pointercancel", endHeroDrag);
window.addEventListener("resize", () => {
  renderHeroPosition();
  scheduleHero();
});

bannerButton.addEventListener("click", () => {
  state.selectedCategory = "TRAGOS";
  state.selectedSubcategory = "Todos";
  renderCategories();
  renderSubcategories();
  renderProducts();
  document.querySelector("#popularGrid").scrollIntoView({ block: "center" });
});

closeOrderButton.addEventListener("click", () => {
  orderPanel.hidden = true;
});

clearOrderButton.addEventListener("click", clearOrder);
orderNote.addEventListener("input", renderOrder);
localOrderButton.addEventListener("click", openLocalReview);
closeReviewButton.addEventListener("click", closeReview);
confirmLocalButton.addEventListener("click", confirmLocalOrder);
closeQrButton.addEventListener("click", closeQr);
newOrderButton.addEventListener("click", startNewOrder);

reviewDialog.addEventListener("click", (event) => {
  if (event.target === reviewDialog) closeReview();
});

qrDialog.addEventListener("click", (event) => {
  if (event.target === qrDialog) closeQr();
});

addCurrentButton.addEventListener("click", () => {
  if (!state.currentProduct) return;
  addProduct(state.currentProduct.id, state.selectedOptionId || "");
  closeProduct();
});

dialogOptions.addEventListener("click", (event) => {
  const optionButton = event.target.closest("[data-product-option]");
  if (!optionButton || !state.currentProduct) return;
  const option = productOptions(state.currentProduct).find((item) => item.id === optionButton.dataset.productOption);
  if (!option) return;
  state.selectedOptionId = option.id;
  dialogPrice.textContent = money(option.price);
  dialogOptions.querySelectorAll("[data-product-option]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.productOption === option.id);
  });
});

closeDialogButton.addEventListener("click", closeProduct);
productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) closeProduct();
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!familyPanel.hidden) closeFamily();
  else if (!editPanel.hidden) closeEdit();
  else if (!qrDialog.hidden) closeQr();
  else if (!reviewDialog.hidden) closeReview();
  else if (!productDialog.hidden) closeProduct();
  else if (!orderPanel.hidden) orderPanel.hidden = true;
});

loadData();
if (location.hash === "#admin") openAdmin();
renderBrand();
renderQuickLinks();
renderCategories();
renderSubcategories();
renderHeroSlides();
renderProducts();
renderOrder();
refreshIcons();
scheduleHero();





