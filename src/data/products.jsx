
const data = [
    {
        id:1,
        idCategory:7,
        title:"Umeboshi",
        description: "Ciruelas maceradas en sal. Alimento con un valor calórico moderado y escaso contenido en grasas, por lo que puede ser consumido por personas que realizan dietas para combatir el sobrepeso. Además, su alto contenido en fibra ayuda a combatir el estreñimiento y regula el tránsito intestinal ",
        imagesSrc: [
            {
                original: require('media/products/1_umeboshi/1.jpg'),
                thumbnail: require('media/products/1_umeboshi/1.jpg'),
            },
            {
                original: require('media/products/1_umeboshi/2.jpg'),
                thumbnail: require('media/products/1_umeboshi/2.jpg'),
            },
            {
                original: require('media/products/1_umeboshi/3.jpg'),
                thumbnail: require('media/products/1_umeboshi/3.jpg'),
            }
            ],
        imageMin: require('media/products/1_umeboshi/small.jpg'),
        stock: 2,
        price: 150
    },
    {
        id:2,
        title:"Furikake",
        idCategory:8,
        description: "Condimento a base de hojas y algas desidratadas, semllas de sesamo integral. ",
        imagesSrc: [
            {
                original: require('media/products/2_furikake/1.jpg'),
                thumbnail: require('media/products/2_furikake/1.jpg'),
            },{
                original: require('media/products/2_furikake/2.jpg'),
                thumbnail: require('media/products/2_furikake/2.jpg'),
            },
            {
                original: require('media/products/2_furikake/3.jpg'),
                thumbnail: require('media/products/2_furikake/3.jpg'),
            }
            ],
        imageMin: require('media/products/2_furikake/small.jpg'),
        stock: 21,
        price: 250
    },

    {
        id:3,
        idCategory:8,
        title:"Teka",
        description: "Condimento a base de verudas de raiz deshidratadas -tipo zanahoria, entre otras- y miso",
        imagesSrc: [
            {
                original: require('media/products/3_teka/1.jpg'),
                thumbnail: require('media/products/3_teka/1.jpg'),
            },
            {
                original: require('media/products/3_teka/2.jpg'),
                thumbnail: require('media/products/3_teka/2.jpg'),
            },
            {
                original: require('media/products/3_teka/3.jpg'),
                thumbnail: require('media/products/3_teka/3.jpg'),
            }
            ],
        imageMin: require('media/products/3_teka/small.jpg'),
        stock: 3,
        price: 100
        
    },
    {
        id:4,
        idCategory:1,
        title:"Miso",
        description: "Pasta de soja fermentada, el alimento fermentado cuyo ingrediente esencial es la soja. Se compone de soja o garbanzo hervida o cocida al vapor, que se fermentan con microorganismos de cultivo y el uso de sal. Dicha mezcla se deberá madurar durante un determinado período de tiempo hasta que la calidad del producto cumpla los requisitos estipulados. ",
        imagesSrc: [
                    {
                        original: require('media/products/4_miso/1.jpg'),
                        thumbnail: require('media/products/4_miso/1.jpg'),
                    },
                    {
                        original: require('media/products/4_miso/2.jpg'),
                        thumbnail: require('media/products/4_miso/2.jpg'),
                    },
                    {
                        original: require('media/products/4_miso/3.jpg'),
                        thumbnail: require('media/products/4_miso/3.jpg'),
                    },
                    {
                        original: require('media/products/4_miso/4.jpg'),
                        thumbnail: require('media/products/4_miso/4.jpg'),
                    }
                    ],
        imageMin: require('media/products/4_miso/small.jpg'),
        stock: 10,
        price: 150
    },
    {
        id:5,
        idCategory:2,
        title:"Tempeh",
        description: "El Tempe es un producto compacto, blanco, en forma de pastel, preparado a partir de soja descascarada hervida y fermentada en estado sólido con Rhizopus spp. ",
        imagesSrc: [
            {
                original: require('media/products/5_tempeh/1.jpg'),
                thumbnail: require('media/products/5_tempeh/1.jpg'),
            },
            {
                original: require('media/products/5_tempeh/2.jpg'),
                thumbnail: require('media/products/5_tempeh/2.jpg'),
            },
            {
                original: require('media/products/5_tempeh/3.jpg'),
                thumbnail: require('media/products/5_tempeh/3.jpg'),
            }
            ],
        imageMin: require('media/products/5_tempeh/small.jpg'),
        stock: 5,
        price: 325
    },
    {
        id:6,
        title:"Amazake",
        idCategory:4,
        description: "Su base es el arroz que se fermenta con Aspergillus oryzae, un tipo de fermento. El producto que se obtiene tras la fermentación es algo muy dulce que puede servir como endulzante de infinidad de platos y preparados. Aporta probióticos naturales que favorecen la flora intestinal.",
        imagesSrc: [
            {
                original: require('media/products/6_amazake/1.jpg'),
                thumbnail: require('media/products/6_amazake/1.jpg'),
            },
            {
                original: require('media/products/6_amazake/2.jpg'),
                thumbnail: require('media/products/6_amazake/2.jpg'),
            },
            {
                original: require('media/products/6_amazake/3.jpg'),
                thumbnail: require('media/products/6_amazake/3.jpg'),
            }
            ],
        imageMin: require('media/products/6_amazake/small.jpg'),
        stock: 7,
        price: 120
    },
    {
        id:7,
        idCategory:20,
        title:"Sake",
        description: "Vino fermentado a partir de arroz cocido, arroz inoculado con Aspergillus oryzae y levaduras de control. Método de elaboración tradicional tipo Nigori.",
        imagesSrc: [
            {
                original: require('media/products/7_sake/1.jpg'),
                thumbnail: require('media/products/7_sake/1.jpg'),
            },
            {
                original: require('media/products/7_sake/2.jpg'),
                thumbnail: require('media/products/7_sake/2.jpg'),
            },
            {
                original: require('media/products/7_sake/3.jpg'),
                thumbnail: require('media/products/7_sake/3.jpg'),
            },
            {
                original: require('media/products/7_sake/4.jpg'),
                thumbnail: require('media/products/7_sake/4.jpg'),
            }
            ],
        imageMin: require('media/products/7_sake/small.jpg'),
        stock: 7,
        price: 320
    },


]

export default data

