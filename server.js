const express = require("express");
const { Author, Book } = require("./model");
// const logger = require("morgan");
// const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
// app.use(logger("dev"));
// app.use(bodyParser.json());

// establish routes (HOLD OFF FOR NOW, INSTRUCTIONS FOR THIS BELOW)
// /authors (shows all authors)
// /books (shows all books)
// /authors/:id/books (shows all books by a particular author)
app.get("/", (req, res) => {
  res.send("welcome to the bookz app");
});
app.get("/authors", async (req, res) => {
  try {
    const allAuthors = await Author.findAll();
    const authors = allAuthors.map(author => author.dataValues);
    res.json({ authors: authors });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});
app.get("/books", async (req, res) => {
  try {
    const allBooks = await Book.findAll();
    const books = allBooks.map(book => book.dataValues);
    res.json({ books: books });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});
app.get("/authors/:id/books", async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    const authorBooks = await author.getBooks();
    const authorsBooks = authorBooks.map(book => book.dataValues);
    res.json({ authorsBooks });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
