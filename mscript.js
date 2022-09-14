var x = 1;
var score = 5;

function runTest() {
document.getElementById('starter').style.display = "none";
var q1 = prompt('Question 1: Sound Waves are Transverse.\n Put 1 for True, 2 for False');
var q2 = prompt('Question 2: Sound Waves are Faster in Warm Air.\n Put 1 for True, 2 for False');
var q3 = prompt('Question 3: Sound Waves can travel without a medium.\n Put 1 for True, 2 for False');
var q4 = prompt('Question 4: The Part of the Sound Wave with the most Energy is called the Rarefraction.\n Put 1 for True, 2 for False');
var q5 = prompt('Question 5: Sound Waves are faster in Liquids than Gas.\n Put 1 for True, 2 for False');
setTimeout(scoreRead, 1);
}
if(q1 == 2){
score += 1;
}
if(q2 == 1){
score += 2;
}
if(q3 == 2){
score += 3;
}
if(q4 == 2){
score += 4;
}
if(q5 == 1){
score += 5;
}
function scoreRead() {
document.getElementById('textbox').innerHTML = "You scored a " + score + "/5";
}
