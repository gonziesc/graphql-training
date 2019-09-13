'use strict';

/* eslint-disable max-len */
module.exports = {
  up: queryInterface =>
    queryInterface
      .bulkInsert('products', [
        {
          name: 'Zapatillas YEEZY',
          description: 'BOOST 350 V2',
          category: 'shoes',
          vendor: 'Falabella',
          brand: 'Adidas'
        },
        {
          name: 'Zapatillas OZWEEGO',
          description: 'ZAPATILLAS DEPORTIVAS CON UN ESTILO FUTURISTA',
          category: 'shoes',
          vendor: 'Falabella',
          brand: 'Adidas'
        },
        {
          name: 'Zapatillas NMDR1',
          description: 'ZAPATILLAS CON DETALLES ICÓNICOS DE LOS 80 LISTAS PARA LAS CALLES',
          category: 'shoes',
          vendor: 'Falabella',
          brand: 'Adidas'
        },
        {
          name: 'BOTINES MALICE TERRENO SUAVE',
          description: 'BOTINES LIVIANOS PARA CONTROLAR EL PARTIDO',
          category: 'shoes',
          vendor: 'Falabella',
          brand: 'Adidas'
        },
        {
          name: 'ZAPATILLAS NIKE EPIC REACT FLYKNIT',
          description: 'BOOST 350 V2',
          category: 'shoes',
          vendor: 'Nike',
          brand: 'Nike'
        },
        {
          name: 'MUSCULOSA NIKE SPORTSWEAR',
          description: 'BOOST 350 V2',
          category: 'tshirts',
          vendor: 'Falabella',
          brand: 'Nike'
        },
        {
          name: 'PANTALON JOGGING NIKE NEW SPORTSWEAR VINTAGE',
          description: 'BOOST 350 V2',
          category: 'shoes',
          vendor: 'Nike',
          brand: 'Nike'
        }
      ])
      .then(() =>
        queryInterface.bulkInsert('variants', [
          {
            size: '8',
            color: 'Black',
            price: 5748,
            product_id: 1,
            image_url:
              'https://http2.mlstatic.com/zapatillas-adidas-yeezy-boost-350-v2-beluga-20-hombre-D_NQ_NP_920274-MLA29893924813_042019-Q.jpg'
          },
          {
            size: '9',
            color: 'Red',
            price: 5748,
            product_id: 1,
            image_url:
              'https://http2.mlstatic.com/zapatillas-adidas-yeezy-boost-350-v2-zebra-hombre-D_NQ_NP_966099-MLA31063590278_062019-Q.jpg'
          },
          {
            size: '10',
            color: 'Blue',
            price: 5748,
            product_id: 1,
            image_url: 'https://mysnikers.com/wp-content/uploads/2019/02/0fa0647e-1-400x400.jpg'
          },
          {
            size: '8',
            color: 'White',
            price: 3000,
            product_id: 2,
            image_url:
              'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/8fbd8242e74443ddb39aaa3f0090dcf8_9366/Zapatillas_OZWEEGO_J_Negro_EE7772_01_standard.jpg'
          },
          {
            size: '11',
            color: 'Red',
            price: 3000,
            product_id: 2,
            image_url:
              'https://moov.vteximg.com.br/arquivos/ids/482876-750-750/image-b6938c422e60498bb4c526b1634e9b69.jpg?v=637012331232470000'
          },
          {
            size: '10',
            color: 'Blue',
            price: 3000,
            product_id: 2,
            image_url: 'https://chemasport.es/25135-big_default/zapatillas-adidas-ozweego-blanco-h.jpg'
          },
          {
            size: '10',
            color: 'White',
            price: 8000,
            product_id: 3,
            image_url:
              'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/aa979c883c14449e9e1ca9ab00eea2ba_9366/Zapatillas_NMDR1_Negro_BD7751_01_standard.jpg'
          },
          {
            size: '10',
            color: 'Red',
            price: 8000,
            product_id: 3,
            image_url:
              'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/b0513942735848c0af5daa7000f28fe8_9366/Zapatillas_NMDR1_W_Beige_EE5179_01_standard.jpg'
          },
          {
            size: '7',
            color: 'White',
            price: '4821',
            product_id: 4,
            image_url:
              'https://showsport.vteximg.com.br/arquivos/ids/629026-1000-1000/ADI-BB7960-20-1-.jpg?v=636964865816570000'
          },
          {
            size: '9',
            color: 'Red',
            price: 2340,
            product_id: 5,
            image_url: 'https://www.digitalsport.com.ar/files/products/5cb6408ed73a2-466454-500x500.jpg'
          },
          {
            size: '9',
            color: 'Blue',
            price: 2340,
            product_id: 5,
            image_url:
              'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/mfzn6h227xpvee95yzlk/calzado-de-running-epic-react-flyknit-dPT0OXxW.jpg'
          },
          {
            size: '10',
            color: 'Red',
            price: 2340,
            product_id: 5,
            image_url:
              'https://dexter.vteximg.com.br/arquivos/ids/450370-1000-1000/BQ8928700_1.jpg?v=636900007030170000'
          },
          {
            size: '10',
            color: 'Blue',
            price: 2340,
            product_id: 5,
            image_url: 'https://www.digitalsport.com.ar/files/products/5aff372658b43-448666-500x500.jpg'
          },
          {
            size: 'S',
            color: '',
            price: 1800,
            product_id: 6,
            image_url:
              'https://http2.mlstatic.com/musculosa-nike-hombre-sportswear-tank-ace-logo-5876-D_NQ_NP_735493-MLA31042119623_062019-F.jpg'
          },
          {
            size: 'M',
            color: '',
            price: 1800,
            product_id: 6,
            image_url:
              'https://http2.mlstatic.com/musculosa-nike-hombre-sportswear-tank-ace-logo-5876-D_NQ_NP_735493-MLA31042119623_062019-F.jpg'
          },
          {
            size: 'S',
            color: '',
            price: 2400,
            product_id: 7,
            image_url:
              'https://http2.mlstatic.com/pantalon-jogging-nike-mujer-sportwear-gym-vintage-5800-D_NQ_NP_830558-MLA31604609891_072019-Q.jpg'
          },
          {
            size: 'M',
            color: '',
            price: 2400,
            product_id: 7,
            image_url:
              'https://http2.mlstatic.com/pantalon-jogging-nike-mujer-sportwear-gym-vintage-5800-D_NQ_NP_830558-MLA31604609891_072019-Q.jpg'
          },
          {
            size: 'L',
            color: '',
            price: 2400,
            product_id: 7,
            image_url:
              'https://http2.mlstatic.com/pantalon-jogging-nike-mujer-sportwear-gym-vintage-5800-D_NQ_NP_830558-MLA31604609891_072019-Q.jpg'
          }
        ])
      )
};
