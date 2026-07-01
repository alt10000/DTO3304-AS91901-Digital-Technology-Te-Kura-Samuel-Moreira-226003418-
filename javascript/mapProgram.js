// builds year list: century, century+33, century+66, repeated up to 1900
const years = [];
for (let century = 200; century <= 1900; century += 100) {
    years.push(century, century + 33, century + 66);
}

// adds final year separately since the loop stops at 1900
years.push(2000);

// grabs empty nav bar from page
const nav = document.getElementById('year-nav');
// grabs image element used to display current map
const mapDisplay = document.getElementById('map-display');

// updates map image's source and alt text for given year
function showMap(year) {
    mapDisplay.src = 'images/map images/Map ' + year + 'AD.png';
    mapDisplay.alt = 'Map ' + year + 'AD';
}

// displays chosen map and highlights button that was clicked
function selectYear(year, clickedButton) {
    showMap(year);
    
    // removes highlight from every button before adding it to new one
    const allButtons = nav.querySelectorAll('.year-btn');
    allButtons.forEach(function (btn) {
        btn.classList.remove('active');
    });
    clickedButton.classList.add('active');
}

// creates one button per year and adds it to nav bar
years.forEach(function (year) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'year-btn';
    button.textContent = year + 'AD';
    
    // runs selectYear whenever button is clicked
    button.addEventListener('click', function () {
        selectYear(year, button);
    });
 
    nav.appendChild(button);
});

// selects first year by default when page loads
const firstButton = nav.querySelector('.year-btn');
selectYear(years[0], firstButton);
