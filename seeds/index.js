const blogData = require('./blogData');
const commentData = require('./commentData');
const userData = require('./userData');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await userData();
  console.log('\n----- USERS SEEDED -----\n');

  await blogData();
  console.log('\n----- BLOGS SEEDED -----\n');

  await commentData();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();