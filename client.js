console.log('Here are all the available people:', people);

$(readyNow);

let correctNumber;

function readyNow() {
    console.log('jquery Loaded');
    // click listener
    $('#peopleDivs').on('click', '.clickable', correctPerson)

    // load images on DOM loadup
    appendPersonDivs();
    // pick a person at random using correctPerson
    populateName();
    
}

function appendPersonDivs() {
    // append a div containing profile pictures for everyone on people objects
    // run a loop on people array to get each person's info
    for (i=0; i < people.length; i++) {
        // set each div picture to have data equal to their array index
        $('#peopleDivs').append(`
            <div data-num=${i} class="clickable">
                <img src="http://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">
            </div>
        `);
    }
} // end appendPersonDivs

// generate a random number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
} // end randomNumber


function populateName() {
    // call randomNumber using people array size
    let number = randomNumber(1, people.length)
    // set the variable correctNumber to the new random number
    correctNumber = number;
    // append newly chosen person's name to DOM
    $('#personName').text(`
        Click On: ${people[number].name}
    `)
    // return new number for later use
    return number;
} // end populateName


function correctPerson() {
    // console.log('You clicked someone!');
    // set a variable equal to the data of the person clicked
    personNumber = $(this).data('num');
    console.log(personNumber);

   if(people[correctNumber] === people[personNumber]) {
       console.log('Its the right person!');
       
   }
} // end correctPerson
