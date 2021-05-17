console.log('Here are all the available people:', people);

$(readyNow);

function readyNow() {
    console.log('jquery Loaded');
    appendPersonDivs();
}

function appendPersonDivs() {
    // append a div containing profile pictures for everyone on people objects
    $('#peopleDivs').append(`
        <div>
            <img src="http://github.com/brandonwharton.png?size=250" alt="Profile image of Brandon">
        </div>
    `);
} // end appendPersonDivs

