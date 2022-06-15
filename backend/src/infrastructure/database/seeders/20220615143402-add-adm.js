'use strict';

const {
  faker
} = require('@faker-js/faker');

let seed = []
for(let i=0; i<1; i++){
  seed.push(
    {
      name: "SÍNDICO",
      email: "sindic@gmail.com",
      apartment: faker.random.numeric(3),
      password: '12345678',
      createdAt: new Date(),
      updatedAt: new Date(),
      permission: 2,
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
