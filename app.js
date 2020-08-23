// Get DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Display Time
const displayTime = () => {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';     // Change AM/PM
    hours = hours % 12 || 12;   // 12hour format

    time.innerHTML = `${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)}`;

    setTimeout(displayTime, 1000);
}

// Add Zero To Min and Sec
const addZero = n => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Change background & greeting
const changeBg = () => {
    let today = new Date();
    hours = today.getHours();

    if (hours < 12) {
        // Morning
        document.body.style.backgroundImage = "url('./img/morning.jpeg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good morning!';
    } else if(hours < 18) {
        // Afternoon
        document.body.style.background = "url('./img/afternoon.jpeg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good afternoon!';
        document.body.style.color = '#fff';
    } else {
        // Night
        document.body.style.backgroundImage = "url('./img/night.jpeg')";
        document.body.style.backgroundSize = "cover";
        greeting.textContent = 'Good night!';
        document.body.style.color = '#fff';
    }
}
//---------------------------------NAME-------------------------------
// Change name
const changeName = () => {
    if (localStorage.getItem('name') === null) {
        name.textContent = 'Enter your name here..';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set name
const setName = e => {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {    // 13 = Enter key
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

//---------------------------------FOCUS-------------------------------
// Change focus
const changeFocus = () => {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = 'Enter focus.';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set focus
const setFocus = e => {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {    // 13 = Enter key
            localStorage.setItem('focus', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Event listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Call functions
displayTime();
changeBg();
changeName();
changeFocus();