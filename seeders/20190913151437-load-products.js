'use strict';

/* eslint-disable max-len */
module.exports = {
  up: queryInterface =>
    queryInterface
      .bulkInsert('products', [
        {
          name: 'TOP DEPORTIVO NIKE PRO INDY LIGHT SUPPORT DRI FIT',
          description: 'COMPRESIÓN, FRESCURA, COMODIDAD Y SUJECIÓN',
          category: 'tops',
          vendor: 'Mercado Libre',
          brand: 'Nike'
        },
        {
          name: 'Vestido Nike Air Negro ',
          description: 'SE VOS MISMA',
          category: 'tshirts',
          vendor: 'Mercado Libre',
          brand: 'Nike'
        },
        {
          name: 'Remera Nike Academy',
          description: 'TIENDA OFICIAL NIKE',
          category: 'tshirts',
          vendor: 'Mercado Libre',
          brand: 'Nike'
        },
        {
          name: 'Conjunto Hombre Campera Mas Pantalon',
          description: 'CONJUNTOS HOMBRE 100 % ALGODON',
          category: 'set',
          vendor: 'Mercado Libre',
          brand: 'Adidas'
        },
        {
          name: 'Conjunto Hombre Otonio, Invierno Campera + Pantalon Oferta',
          description: 'CONJUNTOS HOMBRE 100 % ALGODON',
          category: 'set',
          vendor: 'Mercado Libre',
          brand: 'Adidas'
        },
        {
          name: 'Campera Varilite Rojo adidas Sport 78 Tienda',
          description:
            'Mantenete abrigado y sentite liviano. Esta campera para hombre con relleno de plumas liviano incorpora un diseño plegable que la convierte en una prenda muy versátil.',
          category: 'coats',
          vendor: 'Mercado Libre',
          brand: 'Adidas'
        },
        {
          name: 'Zapatillas Puma Moda Smash V2',
          description: 'VALLEJO CALZADOS',
          category: 'shoes',
          vendor: 'Mercado Libre',
          brand: 'Puma'
        }
      ])
      .then(() =>
        queryInterface.bulkInsert('variants', [
          {
            size: 'S',
            color: 'Rose',
            price: 1500,
            product_id: 8,
            image_url:
              'https://http2.mlstatic.com/top-deportivo-nike-pro-indy-light-support-swoosh-mujer-origi-D_NQ_NP_999387-MLA31355568068_072019-O.jpg'
          },
          {
            size: 'M',
            color: 'Rose',
            price: 1500,
            product_id: 8,
            image_url:
              'https://http2.mlstatic.com/top-deportivo-nike-pro-indy-light-support-swoosh-mujer-origi-D_NQ_NP_999387-MLA31355568068_072019-O.jpg'
          },
          {
            size: 'L',
            color: 'Rose',
            price: 1500,
            product_id: 8,
            image_url:
              'https://http2.mlstatic.com/top-deportivo-nike-pro-indy-light-support-swoosh-mujer-origi-D_NQ_NP_826831-MLA31355566946_072019-O.jpg'
          },
          {
            size: 'S',
            color: 'Black',
            price: 1499,
            product_id: 9,
            image_url:
              'https://http2.mlstatic.com/vestido-nike-air-negro-mujer-D_NQ_NP_795659-MLA31022138796_062019-F.jpg'
          },
          {
            size: 'M',
            color: 'Grey',
            price: 1499,
            product_id: 9,
            image_url:
              'https://essential.vteximg.com.br/arquivos/ids/199900-1000-1000/304-1670_1.jpg?v=636758049493100000'
          },
          {
            size: 'L',
            color: 'White',
            price: 1499,
            product_id: 9,
            image_url: 'https://cdn.fashiola.es/L481508985/nike-air-vestido-mujer.jpg'
          },
          {
            size: 'M',
            color: 'Rose',
            price: 989,
            product_id: 10,
            image_url:
              'https://http2.mlstatic.com/remera-nike-academy-rosa-hombre-D_NQ_NP_613499-MLA31063164391_062019-F.jpg'
          },
          {
            size: 'S',
            color: 'Black',
            price: 989,
            product_id: 10,
            image_url:
              'https://http2.mlstatic.com/remera-nike-academy-rosa-hombre-D_NQ_NP_613499-MLA31063164391_062019-F.webp'
          },
          {
            size: 'M',
            color: 'Black',
            price: '2800',
            product_id: 11,
            image_url:
              'https://http2.mlstatic.com/conjunto-hombre-campera-mas-pantalon-nb-100-algodon-friz-D_NQ_NP_951873-MLA31021954294_062019-F.webp'
          },
          {
            size: 'L',
            color: 'Green',
            price: 3000,
            product_id: 12,
            image_url:
              'https://http2.mlstatic.com/conjunto-hombre-otonio-invierno-campera-pantalon-oferta-D_NQ_NP_770655-MLA31602231124_072019-F.webp'
          },
          {
            size: 'M',
            color: 'Red',
            price: 3000,
            product_id: 12,
            image_url:
              'https://http2.mlstatic.com/conjunto-hombre-otonio-invierno-campera-pantalon-oferta-D_NQ_NP_737419-MLA29729154922_032019-F.webp'
          },
          {
            size: 'M',
            color: 'Green',
            price: 3000,
            product_id: 12,
            image_url:
              'https://http2.mlstatic.com/conjunto-hombre-otonio-invierno-campera-pantalon-oferta-D_NQ_NP_770655-MLA31602231124_072019-F.webp'
          },
          {
            size: 'L',
            color: 'Red',
            price: 3000,
            product_id: 12,
            image_url:
              'https://http2.mlstatic.com/conjunto-hombre-otonio-invierno-campera-pantalon-oferta-D_NQ_NP_737419-MLA29729154922_032019-F.webp'
          },
          {
            size: 'S',
            color: '',
            price: 3500,
            product_id: 13,
            image_url:
              'https://http2.mlstatic.com/campera-varilite-rojo-adidas-sport-78-tienda-oficial-D_NQ_NP_858481-MLA28236450558_092018-F.webp'
          },
          {
            size: 'M',
            color: '',
            price: 3500,
            product_id: 13,
            image_url:
              'https://http2.mlstatic.com/campera-varilite-rojo-adidas-sport-78-tienda-oficial-D_NQ_NP_858481-MLA28236450558_092018-F.webp'
          },
          {
            size: '8',
            color: 'Black',
            price: 2400,
            product_id: 14,
            image_url:
              'https://http2.mlstatic.com/zapatillas-puma-moda-smash-v2-hombre-ngbl-D_NQ_NP_638011-MLA31643772800_072019-F.webp'
          },
          {
            size: '9',
            color: 'White',
            price: 2400,
            product_id: 14,
            image_url:
              'https://http2.mlstatic.com/zapatillas-puma-moda-smash-v2-l-hombre-blmn-D_NQ_NP_741859-MLA31047572977_062019-F.webp'
          },
          {
            size: '10',
            color: 'Red',
            price: 2400,
            product_id: 14,
            image_url:
              'https://storage.googleapis.com/tradeinn-images/images/products_image/13701/fotos/137015165_2.jpg'
          }
        ])
      )
};
