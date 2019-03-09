const { Author, Book } = require("./model");

const main = async () => {
  // Delete everything in the database.
  await Book.destroy({
    where: {}
  });
  await Author.destroy({
    where: {}
  });

  // create books and authors and relationships here (HOLD OFF FOR NOW, INSTRUCTIONS FOR THIS BELOW)
  const irving = await Author.create({
    first_name: "John",
    last_name: "Irving",
    birth_year: 1942
  });
  const shakespeare = await Author.create({
    first_name: "William",
    last_name: "Shakespeare",
    birth_year: 1564
  });

  const owenMeany = await Book.create({
    title: "A Prayer for Owen Meany",
    year: 1989,
    cover_image_url: "https://en.wikipedia.org/wiki/File:PrayerForOwenMeany.JPG"
  });
  const worldGarp = await Book.create({
    title: "The World According to Garp",
    year: 1978,
    cover_image_url:
      "https://en.wikipedia.org/wiki/File:TheWorldAccordingtoGarp.jpg"
  });
  const sonCircus = await Book.create({
    title: "A Son of the Circus",
    year: 1978,
    cover_image_url:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/ASonOfTheCircus.JPG"
  });
  const avenueMysteries = await Book.create({
    title: "Avenue of Mysteries",
    year: 2015,
    cover_image_url:
      "https://upload.wikimedia.org/wikipedia/en/2/27/Avenue_of_Mysteries.jpg"
  });
  const ciderHouse = await Book.create({
    title: "The Cider House Rules",
    year: 1985,
    cover_image_url:
      "https://upload.wikimedia.org/wikipedia/en/a/a6/CiderHouseRules.jpg"
  });

  const othello = await Book.create({
    title: "othello",
    year: 1603,
    cover_image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Othello_and_Desdemona_Act_V_Scene_II.tif/lossy-page1-440px-Othello_and_Desdemona_Act_V_Scene_II.tif.jpg"
  });
  const hamlet = await Book.create({
    title: "Hamlet",
    year: 1600,
    cover_image_url:
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/Edwin_Booth_Hamlet_1870.jpg"
  });
  const likeIt = await Book.create({
    title: "As You Like It",
    year: 1623,
    cover_image_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/First_Folio%2C_Shakespeare_-_0203.jpg/440px-First_Folio%2C_Shakespeare_-_0203.jpg"
  });

  await owenMeany.setAuthor(irving);
  await worldGarp.setAuthor(irving);
  await ciderHouse.setAuthor(irving);
  await sonCircus.setAuthor(irving);
  await avenueMysteries.setAuthor(irving);
  await hamlet.setAuthor(shakespeare);
  await othello.setAuthor(shakespeare);
  await likeIt.setAuthor(shakespeare);
};

main();
