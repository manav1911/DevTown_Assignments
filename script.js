/*
User clicks on an option 
Generate a random omputer option
Compare the two options
Display the winner & Score
*/

/*
Rock = 0
Paper = 1
Scissor = 2
*/

//Create a function to generate a random response between 0&2 (Inclusive of both)
const options = ["rock",'paper', 'scissors']
const generateRandomResponse = () => (Math.random()*10).toFixed(0)%3