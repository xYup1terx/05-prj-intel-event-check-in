//Get all needed Dom elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//Track attendance
let count = 0;
const maxCount = 50;

//Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (count >= maxCount) {
    // Find the winning team
    const waterCount = parseInt(
      document.getElementById("waterCount").textContent,
      10
    );
    const zeroCount = parseInt(
      document.getElementById("zeroCount").textContent,
      10
    );
    const powerCount = parseInt(
      document.getElementById("powerCount").textContent,
      10
    );

    let winningTeam = "";
    let winningClass = "";
    if (waterCount >= zeroCount && waterCount >= powerCount) {
      winningTeam = "Water Wise";
      winningClass = "team-water";
    } else if (zeroCount >= waterCount && zeroCount >= powerCount) {
      winningTeam = "Net Zero";
      winningClass = "team-zero";
    } else {
      winningTeam = "Renewables";
      winningClass = "team-power";
    }

    const greeting = document.getElementById("greeting");
    greeting.innerHTML = `🎉 Check-in goal reached! <span class="${winningClass}">${winningTeam}</span> wins! 🎉`;
    greeting.style.display = "block";
    return;
  }
  //Get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);

  //Increment Count
  count++;
  const attendeeCount = document.getElementById("attendeeCount");
  attendeeCount.textContent = count;

  console.log("Total check-ins: ", count);

  //Update progress bar
  let percentValue = count / maxCount;
  if (percentValue > 1) percentValue = 1;
  const percentage = Math.round(percentValue * 100) + "%";
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;
  progressBar.textContent = percentage;

  console.log(`Progress: ${percentage}`);

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Show welcome message or celebration
  const greeting = document.getElementById("greeting");
  if (count === maxCount) {
    // Find the winning team
    const waterCount = parseInt(
      document.getElementById("waterCount").textContent,
      10
    );
    const zeroCount = parseInt(
      document.getElementById("zeroCount").textContent,
      10
    );
    const powerCount = parseInt(
      document.getElementById("powerCount").textContent,
      10
    );

    let winningTeam = "";
    let winningClass = "";
    if (waterCount >= zeroCount && waterCount >= powerCount) {
      winningTeam = "Water Wise";
      winningClass = "team-water";
    } else if (zeroCount >= waterCount && zeroCount >= powerCount) {
      winningTeam = "Net Zero";
      winningClass = "team-zero";
    } else {
      winningTeam = "Renewables";
      winningClass = "team-power";
    }

    greeting.innerHTML = `🎉 Check-in goal reached! <span class="${winningClass}">${winningTeam}</span> wins! 🎉`;
    greeting.style.display = "block";
  } else {
    let teamColorClass = "";
    if (team === "water") {
      teamColorClass = "team-water";
    } else if (team === "zero") {
      teamColorClass = "team-zero";
    } else if (team === "power") {
      teamColorClass = "team-power";
    }
    const message = `🎉Welcome, ${name} from <span class='${teamColorClass}'>${teamName}</span>!🎉`;
    greeting.innerHTML = message;
    greeting.style.display = "block";
  }

  //Reset form
  form.reset();
});
