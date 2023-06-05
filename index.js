const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();


// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Define the person schema
const personSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  favoriteFoods: {
    type: [String]
  }
});

// Create the person model
const Person = mongoose.model('Person', personSchema);

/*
// Create a new person instance
const person = new Person({
  name: 'John Doe',
  age: 25,
  favoriteFoods: ['Pizza', 'Burger']
});

// Save the person to the database
person.save()
      .then((savedPerson) => {
        console.log('Person saved successfully:', savedPerson);
      })
      .catch((error) => {
        console.error('Error saving person:', error);
      });

*/
/*
// Create a arrayOfPeople instance
const arrayOfPeople = [
  
  {name: 'John Doe', age: 25, favoriteFoods: ['Pizza', 'Burger']},
  { name: 'Jane', age: 30, favoriteFoods: ['Sushi', 'Pasta'] },
  { name: 'Mike', age: 35, favoriteFoods: ['Steak', 'Ice Cream'] }
];
*/


/*
// // Create several people using Model.create()

Person.create(arrayOfPeople)
      .then((createpeople) => {
        console.log('People created successfully:', createpeople);
      })
      .catch((error) => {
        console.error('Error creating People :', error);
      });

*/
/*
// Find all people with the name "Jane"
Person.find({ name: 'Jane' })
  .then(foundPeople => {
    console.log('People found:', foundPeople);
  })
  .catch(error => {
    console.error('Error finding people:', error);
  });

  */


  /*
  // Find a person with a specific favorite food
Person.findOne({ favoriteFoods: 'Ice Cream'})
.then(foundPerson => {
  console.log('Person found:', foundPerson);
})
.catch(error => {
  console.error('Error finding person:', error);
});

*/

/*
// Find a person by _id

Person.findById({_id: '647e4c6833a1d97aece0450a'})
  .then(foundPerson => {
    console.log('Person found:', foundPerson);
  })
  .catch(error => {
    console.error('Error finding person:', error);
  });

*/


/*
//  finding a person by _id, adding "hamburger" to their favoriteFoods, and then saving the updated Person

  Person.findById({_id: '647e4c6833a1d97aece0450a'})
  .then((foundPerson) => {
    if (foundPerson) {
      // Add "hamburger" to the favoriteFoods array
      foundPerson.favoriteFoods.push('hamburger');
      
      // Mark the favoriteFoods field as edited (if necessary)
      foundPerson.markModified('favoriteFoods');
      
      // Save the updated Person
      foundPerson.save()
        .then((updatedPerson) => {
          console.log('Person updated:', updatedPerson);
        })
        .catch((error) => {
          console.error('Error saving updated person:', error);
        });
    } else {
      console.log('Person not found');
    }
  })
  .catch((error) => {
    console.error('Error searching for person:', error);
  });

  */

  /*
// find one and update by name and update the age 
  Person.findOneAndUpdate(
    { name: 'Mike' }, // Search criteria
    { age: 20 }, // Update
    { new: true } // Options to return the updated document
  )
    .then((updatedPerson) => {
      if (updatedPerson) {
        console.log('Person updated:', updatedPerson);
      } else {
        console.log('Person not found');
      }
    })
    .catch((error) => {
      console.error('Error updating person:', error);
    });

    */


/*
  // finds the document by its _id and removes it from the database

    Person.findByIdAndRemove({_id:'647e53b1948cecb65945671c'})
  .then((removedPerson) => {
    if (removedPerson) {
      console.log('Person removed:', removedPerson);
    } else {
      console.log('Person not found');
    }
  })
  .catch((error) => {
    console.error('Error removing person:', error);
  });

  */


/* 
// MongoDB and Mongoose - Delete Many Documents with model.remove()

  Person.deleteMany({ name: 'Mary' })
  .then((result) => {
    console.log('Number of people removed:', result.deletedCount);
  })
  .catch((error) => {
    console.error('Error removing people:', error);
  });

*/


/*
// Chain Search Query Helpers to Narrow Search Results

Person.find({ favoriteFoods: 'Pizza' })
  .sort({ name: 1 })
  .limit(2)
  .select('-age')
  .then(data => {
    console.log('People who like burritos:', data);
  })
  .catch(err => {
    console.error('Error finding people:', err);
  });

  */