const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const calculateBtn = document.getElementById('calculateBtn');
const outputList = document.getElementById('output-list');

calculateBtn.addEventListener('click', () => {
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        outputList.innerHTML = '<li>Please enter a valid date of birth.</li>';
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - birthDate.getTime();

    const ageInSeconds = Math.floor(timeDiff / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor((currentDate.getFullYear() * 12 + currentDate.getMonth()) - (birthDate.getFullYear() * 12 + birthDate.getMonth()));
    const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();

    outputList.innerHTML = `
        <li>Age: ${ageInYears} years</li>
        <li>Months Passed: ${ageInMonths}</li>
        <li>Weeks Passed: ${ageInWeeks}</li>
        <li>Days Passed: ${ageInDays}</li>
        <li>Hours Passed: ${ageInHours}</li>
        <li>Minutes Passed: ${ageInMinutes}</li>
        <li>Seconds Passed: ${ageInSeconds}</li>
    `;
});