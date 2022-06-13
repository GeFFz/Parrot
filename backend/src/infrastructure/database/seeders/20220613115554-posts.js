'use strict';

const {
  faker
} = require('@faker-js/faker');

let seed = []
for(let i=0; i<40; i++){
  seed.push(
    {
      content:faker.lorem.lines(1),
      user_id: faker.random.numeric(),      
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  )
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', seed)
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