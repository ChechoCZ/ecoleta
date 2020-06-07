import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Light Bulbs', image: 'lampadas.svg' },
    { title: 'Batteries', image: 'baterias.svg' },
    { title: 'Paper and Paperboard', image: 'papel-papelao.svg' },
    { title: 'Electronic Waste', image: 'eletronicos.svg' },
    { title: 'Organic Waste', image: 'organicos.svg' },
    { title: 'Cooking Oil', image: 'oleo.svg' },
  ])
}