console.log('Here are all the available people:', people);

$(readyNow);

function readyNow() {
    console.log('jquery Loaded');
    // load images on DOM loadup
    appendPersonDivs();
    // pick a person at random using populateName
    populateName();
}

function appendPersonDivs() {
    // append a div containing profile pictures for everyone on people objects
    // run a loop on people array to get each person's info
    for (let person of people) {
        $('#peopleDivs').append(`
            <div>
                <img src="http://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
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
    $('#personName').append(`
        <p>${people[number].name}</p>
    `)
} // end populateName
