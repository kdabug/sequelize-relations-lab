const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const sequelize = new Sequelize({
  database: "seq_relations_db",
  dialect: "postgres",
  operatorsAliases: Op
});

// create models for Author and Book (HOLD OFF FOR NOW, INSTRUCTIONS FOR THIS BELOW)
// establish relationships between your models (HOLD OFF FOR NOW, INSTRUCTIONS FOR THIS BELOW)
const Author = sequelize.define("author", {
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING,
  birth_year: Sequelize.INTEGER
});

const Book = sequelize.define("book", {
  title: Sequelize.STRING,
  year: Sequelize.INTEGER,
  cover_image_url: Sequelize.STRING
});

Author.hasMany(Book, { onDelete: "cascade" });
Book.belongsTo(Author);

// The onDelete: cascade bit here deletes the records an artist has
// if an artist is deleted. This avoids us having to delete the records
// first, then deleting the artist.

module.exports = {
  Author,
  Book,
  sequelize
};
