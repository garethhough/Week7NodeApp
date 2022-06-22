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
//filter db entries by title or actor
exports.filterMovies = async (collection, movieObj) => {
  try {
    const filterMovies = await collection.find(movieObj).toArray();
    console.log(filterMovies);
  } catch (error) {
    console.log(error);
  }
};

//remove function that deletes database entries using crud
exports.deleteMovie = async (collection, movieObj) => {
  try {
    const deleteMovie = await collection.deleteOne({ title: movieObj.title });
    console.log(deleteMovie);
  } catch (error) {
    console.log(error);
  }
};
