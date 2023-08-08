var note = document.write("hello_world")
console.log(note);

function date() {
    document.getElementById('time').innerHTML = Date();
}

function changebg () {
    document.body.style.backgroundColor = 'lightgreen';
}

function resetback() {
    document.body.style.backgroundColor = 'white';
}

document.getElementById('head1').style.color = 'lightaqua';


var math = document.write("Computer science CSMJU");

function myfunction() {
    //alert("Hello World CSMJU");
    var x = 10;
    var y = 20;
    var z  = 3;
    document.getElementById('math').innerHTML= ((x+y+z)/2).toFixed(2);
}

function likefunction() {
    //value countter before process
    var counter = parseInt(document.getElementById('result').innerText);
    counter++;
    //show display
    document.getElementById('result').innerText = counter;

    // font size grow
    document.getElementById('result').style.fontSize = 10+counter+"px";
    var heartIcon = document.getElementsByClassName('bx bxs-heart')[0]; // Get the first element with the specified class
    heartIcon.style.fontSize = 10 + counter + 'px';
}

console.log("Hellow javascrip ");

function dellike() {
    var counter = parseInt(document.getElementById('result').innerText);
    counter--;
    document.getElementById('result').innerText = counter;

    var heartIcon = document.getElementsByClassName('bx bxs-heart')[0];
    var sadIcon = document.getElementsByClassName('bx bxs-sad')[0];

    heartIcon.style.fontSize = 10 + counter + 'px';

    if (counter < 5) {
        heartIcon.style.display = 'none';  // Hide heart icon
        sadIcon.style.display = 'inline';   // Show sad icon
        sadIcon.style.fontSize = 20 + counter + 'px';
    } else {
        heartIcon.style.display = 'inline'; // Show heart icon
        sadIcon.style.display = 'none';    // Hide sad icon
        heartIcon.style.fontSize = 10 + counter + 'px';
    }
}

