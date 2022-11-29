console.error("It's is working, why are you red?");
console.log("It's is working, why are you red?");

variable keywords, const and let

const age = 21;
// age = 5; // cannot override constant
console.log(age);

let score = 10;

score = 50;
console.log(score);

var foobar = '';

let type = "i am weakly typed";
type = 50;

// types in javascript

// Boolean (true or false)
// const isClassBoring = false;
// const isNull = null;
// let name; // until we set a value for name, its type is undefined
// const score = 70;
// const notANumber = NaN;
// const infinityValue = Infinity;
// const negativeInfinity = -Infinity;
// const firstName = 'Mat';

// name = 'Mat';

// console.log(typeof name);

// const firstName = 'Mat';
// const age = 55;

// let statement = 'Hello ' + firstName + ' I see you are ' + age;
// statement = `Hi, ${firstName} I see you are ${age} years old.`;
// console.log(statement);

// console.log(`Hello ${firstName} how are you doing? I see you will be ${age+1} next year `)

// console.log('5' + 5);
// console.log('3' - 1);

const content = 'Today is Monday';

// console.log(content.length);

// const content2 = String('Today is Monday');
// console.log(content2.length);
// console.log(content.search('is'));
// console.log(content.substr(4,5));
// console.log(content.toLowerCase());
// console.log(content.split(''));
// console.log(content.split(' '));
// const num = 3;
// console.log(3 == '3');
// console.log(3 === '3');
// console.log(3 === num);

// let age = 30;
// if (age > 40) {
//     console.log('You are older than 40');
// } else {
//     console.log('You are young!');
// }

// age = 10;
// age = 5;
// age = 500;
// if(age < 10 || age > 80) {
//     console.log('you cannot play this game');
// } else {
//     console.log('Ready to begin?');
// }

// function sayHelloSimple(){
//     return 'hi there!';
// }

// console.log(sayHelloSimple());

// function sayHello(name){
//     if(undefined === name) {
//         name = 'ye without a name';
//     }
//     return `Hey there ${name}`;
// }

// const helloMessage = sayHello('mat');
// const helloMessage = sayHello();
// console.log(helloMessage);

// const ages = new Array(4,3,2);
// console.log(ages[0]);
// const ages2 = [4,3,2];
// console.log(ages2);

// const things = [1, true, undefined, null, 'hello'];
// console.log(things);

// const favoriteMovies = [
//     'The Empire Strikes Back',
//     'The Passion of Joan of Arc'
// ];

console.log(favoriteMovies);
favoriteMovies.push('Das Boot');
console.log(favoriteMovies);
console.log(favoriteMovies.pop()); // remove (in place) from end and return
console.log(favoriteMovies.shift()); // remove (in place) from beginning and return
console.log(favoriteMovies[1]);

// console.log(favoriteMovies.includes('Das Boot'));
// console.log(favoriteMovies.includes('Argo'));
// console.log(favoriteMovies.indexOf('Das boot'));

// const Person = {
//     name: 'Mat',
//     age: 44,
//     professor: true,
//     address: {
//         street: '1200 Victory Blvd',
//         city: 'Staten Island'
//     },
//     greeting: 'Hello',
//     setGreeting: function(greeting){
//         this.greeting = greeting;
//     },
//     getGreeting: function(){
//         return this.greeting;
//     },
//     greet: function(){
//         return `${this.greeting} ${this.name}`;
//     }
// };
// Person.setGreeting('yo!');
// console.log(Person.getGreeting());
// console.log(Person.greet());

// function Dog(name, breed){

//     this.name = name;
//     this.breed = breed;
//     this.getNameAndBreed = function(){
//         return `${this.name} is a ${this.breed}`;
//     }
//     this.speak = function(){
//         return 'bark! bark!';
//     }
// }

const rex = new Dog('Rex', 'Wolfhound');
const cooper = new Dog('Cooper', 'Wheaten Terrier');

console.log(rex.getNameAndBreed());
console.log(cooper.speak());


class Cat {

    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }

    getNameAndBreed(){
        return `${this.name} is a ${this.breed}`;
    }

}

const mickey = new Cat('Mickey', 'Tabby');
console.log(mickey.getNameAndBreed());




const books = [
    {
        title: 'Tale of Two Cities',
        year: 1859,
        author: 'Charles Dickens',
        isbn: 123456,
        mainCharacters: [
            'Charles Darnay',
            'Madame Defarge',
            'Sydney Carton',
        ]
    },
    {
        title: 'Things Fall Apart',
        year: 1958,
        // just to demonstrate order doesnt matter
        author: 'Chinua Achebe',
        isbn: 1234567,
        mainCharacters: [
            'Okonkwo',
            'Nwoye',
            'Mr Brown',
        ]
        
    },
    {
        title: 'Brave New World',
        year: 1932,
        author: 'Aldous Huxley',
        mainCharacters: [
            'Lenina Crowe',
            'Bernard Marx',
            'John the Savage',
        ]
        
    },
    
];

const bookTitlesAndAuthors = books.map(
    function(book){
        return `${book.title} is written by ${book.author}`;
    }
);

console.log(bookTitlesAndAuthors);

books.forEach(
    function(bk){
        console.log(`${bk.title} was written in ${bk.year}`);
    }
);


const modernBooks = books.filter(
    function(book){
        return book.year > 1900;
    }
);

// console.log(modernBooks);

modernBooks.forEach(function(book){
    console.log(`${book.title} is a modern book!`);
});

books.filter(function(book){
    return book.year > 1900
}).forEach(function(book){
    console.log(`${book.title} is a modern book, cool!`);
});

//

const numbers = [1,2,3,4,5];

const squares = numbers.map(function(n){
    return n*n;
});

// console.log(numbers, squares);

const squares2 = numbers.map(n => n*n);
const squares3 = numbers.map(n => {
    return n*n;
})


const cities = [
    {
        name: 'New York',
        temperature: 45,
    },
    {
        name: 'São Paulo',
        temperature: 85,
    }
];

function fToC(temp){
    return (temp-32)*(5/9);
}

const centigradeCities = cities.map(function(city){
    // return {
    //     name: city.name,
    //     temperature: fToC(city.temperature).toFixed(2),
    // }
    city.temperature = fToC(city.temperature).toFixed(2);
    return city;
});

console.log(centigradeCities);













