'use strict';

const {
  faker
} = require('@faker-js/faker');

let seed = []
for(let i=0; i<20; i++){
  seed.push(
    {
      name:faker.name.findName(),
      email:faker.internet.email(),
      apartment: faker.random.numeric(3),
      password: '12345678',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  )
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', seed)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};