document.getElementById('check-btn').addEventListener('click', validatePhoneNumber);
document.getElementById('clear-btn').addEventListener('click', clearResults);

const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)\d{3}([-\s]?)\d{4}$/;

function validatePhoneNumber() {
    const input = document.getElementById('user-input').value;
    if (input === '') {
        alert('Please provide a phone number');
    } else if (phoneRegex.test(input)) {
        document.getElementById('results-div').innerText = `Valid US number: ${input}`;
    } else {
        document.getElementById('results-div').innerText = `Invalid US number: ${input}`;
    }
}
function clearResults() {
    document.getElementById('results-div').innerText = '';
}
