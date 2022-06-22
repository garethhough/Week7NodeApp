exports.addMovie = async (collection, movieObj) => {
  try {
    //add database entry using built in method of insertOne and passing the
    //movieObj entered by the user
    const addEntry = await collection.insertOne(movieObj);
    console.log(addEntry);
  } catch (error) {
    console.log(error);
  }
};

// create function that lists all entries in database
exports.listMovies = async (collection) => {
  try {
    const listMovies = await collection.find().toArray();
    console.log(listMovies);
  } catch (error) {
    console.log(error);
  }
};

// create function that updates database entries
exports.updateMovie = async (collection, movieObj) => {
  try {
    const updateMovie = await collection.updateOne(
      { title: movieObj.title },
      { $set: movieObj }
    );
    console.log(updateMovie);
  } catch (error) {
    console.log(error);
  }
};

//create function to delete one entry
exports.deleteMovie = async (collection, movieObj) => {
  try {
    const deleteMovie = await collection.deleteOne(movieObj);
    console.log(deleteMovie);
  } catch (error) {
    console.log(error);
  }
};

