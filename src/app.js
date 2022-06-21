const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const { addMovie, listMovies } = require("./utils");

const app = async (yargsObj) => {
  const collection = await connection();
  if (yargsObj.add) {
    // Waits for addMovie to be called
    await addMovie(collection, {
      title: yargsObj.title,
      actor: yargsObj.actor,
    });
    console.log("Entry added");
    // Waits for list to be called
  } else if (yargsObj.list) {
    await listMovies(collection);
  } else {
    console.log("Incorrect command");
  }
  // Waits for user to close database
  await client.close();
};

app(yargs.argv);
