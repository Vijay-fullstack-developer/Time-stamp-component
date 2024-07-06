function updateTime() {
    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    const secondsColor = seconds % 2 === 0 ? 'blue' : 'red';

    const currenttime = `
<span>Date: ${date}-${month}-${year}</span> 
<span style="color: ${secondsColor};">Time: ${hours}:${minutes}:${seconds}</span>`;

    document.getElementById('click-on').innerHTML = currenttime;
}

let intervalId;

function startUpdating() {
    intervalId = setInterval(updateTime, 1000);
}

function stopUpdating() {
    clearInterval(intervalId);
}

function on_click() {
    updateTime();
    startUpdating();
}

function convertTimestamp() {
    const timestampInput = document.getElementById('timestampInput');
    const errorText = document.getElementById('error-text');
    const resultElement = document.getElementById('result');

    // Clear previous error messages and styling
    timestampInput.classList.remove('red');
    errorText.textContent = '';

    // Get the timestamp value from the input
    const timestampStr = timestampInput.value.trim();

    // Check if the input is empty or not a number
    if (!timestampStr || isNaN(timestampStr)) {
        timestampInput.classList.add('red');
        errorText.textContent = 'Please enter a valid timestamp.';
        resultElement.textContent = '';
        return;
    }

    // Parse the timestamp and convert it to a Date object
    const timestamp = parseInt(timestampStr, 10); // Assuming timestamp is in seconds
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds

    // Define options for formatting the date
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    // Format the date using Intl.DateTimeFormat
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    // Display the formatted date in the result element
    resultElement.textContent = `Date and Time: ${formattedDate}`;
}

