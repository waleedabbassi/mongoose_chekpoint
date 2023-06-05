const mongoose = require('mongoose');

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

