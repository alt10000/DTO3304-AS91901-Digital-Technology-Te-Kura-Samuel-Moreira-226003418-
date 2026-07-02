// builds the year list: century, century+33, century+66, repeated up to 1900
const years = [];
for (let century = 200; century <= 1900; century += 100) {
    years.push(century, century + 33, century + 66);
}

// adds final year separately since the loop stops at 1900
years.push(2000);

// grabs empty nav bar from page
const nav = document.getElementById('year-nav');
// grabs both stacked images used for the crossfade
const mapDisplayA = document.getElementById('map-display-a');
const mapDisplayB = document.getElementById('map-display-b');

// tracks which image is currently on top, and which year is selected
let activeDisplay = mapDisplayA;
let currentIndex = 0;

// swaps to a new map image, fading the new one in over the old one
function showMap(year) {
    // picks whichever image isn't currently visible to load the new map into
    const nextDisplay = activeDisplay === mapDisplayA ? mapDisplayB : mapDisplayA;
 
    // fades the new image in and the old one out at the same time
    nextDisplay.src = 'images/map images/Map ' + year + 'AD.png';
    nextDisplay.alt = 'Map ' + year + 'AD';
 
    nextDisplay.classList.add('active');
    activeDisplay.classList.remove('active');
    activeDisplay = nextDisplay;
}

// displays chosen map and highlights button that was clicked
function selectYear(index, clickedButton) {
    currentIndex = index;
    showMap(years[index]);

    // removes highlight from every button before adding it to new one
    const allButtons = nav.querySelectorAll('.year-btn');
    allButtons.forEach(function (btn) {
        btn.classList.remove('active');
    });
    clickedButton.classList.add('active');
}

// creates one button per year and adds it to nav bar
years.forEach(function (year, index) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'year-btn';
    button.textContent = year + 'AD';

    // runs selectYear whenever button is clicked
    button.addEventListener('click', function () {
        selectYear(index, button);
    });

    nav.appendChild(button);
});

// selects first year by default when page loads
const allButtons = nav.querySelectorAll('.year-btn');
selectYear(0, allButtons[0]);

// lets the left and right arrow keys step through the years
document.addEventListener('keydown', function (event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
        return;
    }

    // moves one year forward for right, one year back for left
    const step = event.key === 'ArrowRight' ? 1 : -1;
    const newIndex = currentIndex + step;

    // stops at the first and last year instead of wrapping around
    if (newIndex < 0 || newIndex >= years.length) {
        return;
    }

    const newButton = allButtons[newIndex];
    selectYear(newIndex, newButton);
    // moves keyboard focus so the visible outline follows the selection
    newButton.focus();
});
