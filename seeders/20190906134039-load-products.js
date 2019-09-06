'use strict';

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
            product_id: 1
          },
          {
            size: '9',
            color: 'Red',
            price: 5748,
            product_id: 1
          },
          {
            size: '10',
            color: 'Blue',
            price: 5748,
            product_id: 1
          },
          {
            size: '8',
            color: 'White',
            price: 3000,
            product_id: 2
          },
          {
            size: '11',
            color: 'Red',
            price: 3000,
            product_id: 2
          },
          {
            size: '10',
            color: 'Blue',
            price: 3000,
            product_id: 2
          },
          {
            size: '10',
            color: 'White',
            price: 8000,
            product_id: 3
          },
          {
            size: '10',
            color: 'Red',
            price: 8000,
            product_id: 3
          },
          {
            size: '7',
            color: 'White',
            price: '4821',
            product_id: 4
          },
          {
            size: '9',
            color: 'Red',
            price: 2340,
            product_id: 5
          },
          {
            size: '9',
            color: 'Blue',
            price: 2340,
            product_id: 5
          },
          {
            size: '10',
            color: 'Red',
            price: 2340,
            product_id: 5
          },
          {
            size: '10',
            color: 'Blue',
            price: 2340,
            product_id: 5
          },
          {
            size: 'S',
            color: '',
            price: 1800,
            product_id: 6
          },
          {
            size: 'M',
            color: '',
            price: 1800,
            product_id: 6
          },
          {
            size: 'S',
            color: '',
            price: 2400,
            product_id: 7
          },
          {
            size: 'M',
            color: '',
            price: 2400,
            product_id: 7
          },
          {
            size: 'L',
            color: '',
            price: 2400,
            product_id: 7
          }
        ])
      )
};
