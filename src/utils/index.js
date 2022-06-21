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

exports.listMovies = async (collection) => {
  try {
    const listMovies = await collection.find().toArray();
    console.log(listMovies);
  } catch (error) {
    console.log(error);
  }
};

//to do

//create function for updating database

//create function to delete one or more database entries
