// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
// program to reverse a string

function reverseString(string) {

    // empty string that will be used to reverse
    let revString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        revString += string[i];
    }
    return revString;
}

// take input from the user
// const inputString = prompt('Enter a word: ');

let inputString = 'uncopyrightable';
const result = reverseString(inputString);
console.log(result);

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string)
{
    const strlen = string.length;
    let newString2 = "";
 
    // Conversion to ASCII values
    for (let i = 0; i < strlen; i++)
    {
        if (string[i] >= 'A' && string[i] <= 'Z')
           //fromcharcode converts to unicode value in order to switch invert the case
           //charcodeat converts back to the letter value from unicode
           //i edited a formula that I found on stackoverflow and geeksforgeeks to use the acsii table instead of toUpper and toLower
            console.log(String.fromCharCode(string.charCodeAt(i) + 32));
        else if (string[i] >= 'a' && string[i] <= 'z')
             //converts to unicode value in order to switch invert the case
            //charcodeat converts back to the letter value from unicode
            console.log(String.fromCharCode(string.charCodeAt(i) - 32));
    }
    return newString2;
}
 

let inputString2 = "My Name is GaBrIeLlE";
const result2 = swapCase(inputString2);
console.log(result2);
 

   
    

//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(){
    const temps = [23, 32, 41, 50, 59];

    const celcius = temps.map(x=>((x-32)*5)/9);

    console.log(celcius);



    
}


toCelcius();


//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(){
    

    const grades = [20, 30, 50, 80, 90, 100];

    const map1 = grades.map(x => x>=75);

    console.log(map1);
}

 passOrFail();








//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    const combinedArray = [];
    for(let i=0; i<5; i++){
        combinedArray[i] = cardinalNumbers[i]+ " is " + germanNumbers[i];
        }
        console.log(combinedArray);



//    cardinalNumbers.forEach((card, i) => { 
//     const num2 = germanNumbers[i];
//     console.log(card, 'is' ,num2);

//    });


}


germanNumbers();





// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    // const num = 0;
    // if (num<=1){
    //     return false;
    // }
    // else{
    //     for(let i =2; i<num; i++){
    //         if(num %i == 0){
    //             return false;
    //         }
    //     }
    // }
    // return true;

    
    const result = numbers.filter((num)=>{
  
    if (num<=1){
        return false;
    }
    else{
        for(let i =2; i<num; i++){
            if(num %i == 0){
                return false;
            }
        }
    }
    return num;



    });
    console.log(result);

}

returnPrimeNumbers();



//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
 function iHeartJavaScript(){
    for (let i =1; i<=100; i++){
        if(i%3==0){
            console.log('CSC 225 RULES');
        }
        else if (i%5==0){
            console.log('I LOVE JAVASCRIPT');
        }
        else {
            console.log(i);
        }
    }
 }
iHeartJavaScript();