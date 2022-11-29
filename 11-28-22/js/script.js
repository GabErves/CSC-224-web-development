//goal, output a text input for a user and a button
// when a user clicks the button, have it greet the user
// if the input is empty when clicking on display 

document.addEventListener('DOMContentLoaded', function(){
    const buttonElement = document.getElementById('button');
    buttonElement.addEventListener('click', sayHello);
});

function sayHello(){
    //find name input
    const nameElement = document.getElementById('name');
    //get its value
    const nameValue = nameElement.value;
    console.log('The name entered:', nameValue);
    // find where we are going to put the result
    const resultElement = document.getElementById('result');
    if('' === nameValue){
        resultElement.style.color = '#FF0000';
        resultElement.innerHTML = 'No name emtered, try again!';
        return;


    }
    resultElement.style.color = '';
    
    resultElement.innerHTML = `Hello ${nameValue}`



}