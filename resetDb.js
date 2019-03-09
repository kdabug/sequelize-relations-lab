const { sequelize } = require("./model");

const main = async () => {
  await sequelize.sync({ force: true });
  process.exit();
};

main();
