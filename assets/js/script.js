// Toggle Button for Dark Mode/Light Mode

let toggleButton = document.getElementById('flexSwitchCheckDefault');
let body = document.body;

toggleButton.addEventListener('click', function () {
    if (body.dataset.bsTheme === 'light') {
        body.dataset.bsTheme = 'dark';
    } else {
        body.dataset.bsTheme = 'light';
    }
});

// Switch to Dark Mode after 7pm

function nightTime() {

    const myDate = dayjs();
    const hour = myDate.$H;

    if (hour >= 19 && body.dataset.bsTheme === 'light') {
        body.dataset.bsTheme = 'dark';
    } else {
        body.dataset.bsTheme = 'light';
    }

};

// Display current time and date with a greeting

function greetings() {
    const dayTimeDisplay = document.getElementById('current-time');
    const myDate = dayjs();
    const hour = myDate.$H;
    const message = "Today is " + myDate.format('dddd, MMMM D, YYYY h:mm A') + " (This page turns off lights after 7pm, to turn on lights, click the toggle button above)";

    if (hour < 12) {
        dayTimeDisplay.textContent = "Good Morning! " + message;
    } else if (hour < 17) {
        dayTimeDisplay.textContent = "Good Afternoon! " + message;
    } else {
        dayTimeDisplay.textContent = "Good Evening! " + message;
    }
}

greetings();
nightTime()