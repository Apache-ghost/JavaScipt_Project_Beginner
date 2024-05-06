function calculate() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Enter both names.");
    } else {
        const lovePercentage = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");
        result.innerHTML = `${name1} and ${name2} Love Percentage: ${lovePercentage}`;
        if (lovePercentage < 30) {
            result.innerHTML += "<br>Not a great match, keep looking!";
        } else if (lovePercentage >= 30 && lovePercentage < 70) {
            result.innerHTML += "<br>There is a potential, give it a try!";
        } else {
            result.innerHTML += "<br>Great match, love is in the air!";
        }
    }
}