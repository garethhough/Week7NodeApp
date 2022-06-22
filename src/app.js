const yargs = require("yargs");

const { connection, client } = require("./db/connection");

const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
  filterMovies,
} = require("./utils");

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
    // Waits for update to be called
  } else if (yargsObj.update) {
    await updateMovie(collection, {
      title: yargsObj.title,
    });
    console.log("Entry updated");
    // Waits for delete to be called
  } else if (yargsObj.delete) {
    await deleteMovie(collection, {
      title: yargsObj.title,
    });
    console.log("Entry deleted");
    // Waits for filterActor to be called
  } else if (yargsObj.filterActor) {
    await filterMovies(collection, {
      actor: yargsObj.actor,
    });
    console.log("Entries filtered");
    // Waits for filterTitle to be called
  } else if (yargsObj.filterTitle) {
    await filterMovies(collection, {
      title: yargsObj.title,
    });
    console.log("Entries filtered");
  } else {
    console.log("Incorrect command");
  }
  // Waits for user to close database
  await client.close();
};

app(yargs.argv);
