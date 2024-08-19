// Function to create a Person object with user input
function createPerson() {
    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name:");
    const age = parseInt(prompt("Enter age:"), 10);
  
    return {
      firstName: firstName,
      lastName: lastName,
      age: age,
  
      // Method to get the full name
      getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
      },
  
      // Method to increment the age
      incrementAge: function() {
        this.age++;
      }
    };
  }
  
  // Create a Person object using user input
  const person = createPerson();
  
  // Display the full name and age
  console.log("Full Name:", person.getFullName());
  console.log("Age:", person.age);
  
  // Increment the age and display it again
  person.incrementAge();
  console.log("Age after increment:", person.age);
  