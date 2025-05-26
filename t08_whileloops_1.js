var response = prompt("Do you want the loop to continue? Y / N");

while(response == "y" || response == "Y") {
  alert("Loop will repeat again.");
  response = prompt("Do you want the loop to continue?");
}
alert("Loop ended");