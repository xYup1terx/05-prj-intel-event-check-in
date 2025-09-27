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
  const percentage = Math.round((count / maxCount) * 100) + "%";
  //added lines
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;
  progressBar.textContent = percentage;

  console.log(`Progress: ${percentage}`);

  // Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // Show welcome message
  let teamColorClass = "";
  if (team === "water") {
    teamColorClass = "team-water";
  } else if (team === "zero") {
    teamColorClass = "team-zero";
  } else if (team === "power") {
    teamColorClass = "team-power";
  }
  const message = `🎉Welcome, ${name} from <span class='${teamColorClass}'>${teamName}</span>!🎉`;
  const greeting = document.getElementById("greeting");
  greeting.innerHTML = message;
  greeting.style.display = "block";

  //Reset form
  form.reset();
});
