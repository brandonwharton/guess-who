console.log('Here are all the available people:', people);

$(readyNow);

function readyNow() {
    console.log('jquery Loaded');
    // click listener
    $('#peopleDivs').on('click', '.clickable', correctPerson)

    // load images on DOM loadup
    appendPersonDivs();
    // pick a person at random using populateName
    populateName();
}

function appendPersonDivs() {
    // append a div containing profile pictures for everyone on people objects
    // run a loop on people array to get each person's info
    for (i=0; i < people.length; i++) {
        
        $('#peopleDivs').append(`
            <div data-num=${i} class="clickable">
                <img src="http://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of ${people[i].name}">
            </div>
        `);
    }
} // end appendPersonDivs

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
} // end randomNumber

function populateName() {
    // call randomNumber using people array size
    let number = randomNumber(1, people.length)
    // append person's name to DOM
    $('#personName').append(`
        <h2>Click On: ${people[number].name}</h2>
    `)
} // end populateName

function correctPerson() {
    console.log('You clicked someone!');
    
}
