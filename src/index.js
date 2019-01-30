import catOrDog from './cat-or-dog.js';

const pickForm = document.getElementById('pick-form');

pickForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const randomNumber = Math.random();
    const animal = catOrDog(randomNumber);
    let imageSource = '';
    if(animal === 'cat') {
        imageSource = './assets/cat.jpg';
    }
    else {
        imageSource = './assets/dog.jpg';
    }
    
    console.log(imageSource);
});

// grab form node from DOM

// addEventListener to formNode 

// have button/form submit generate random number

// create function that takes randomNumber and either returns dog or cat

// assign img tag either cat or dog