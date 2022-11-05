var myVar = setInterval(slider, 3000);
document.getElementById("play").disabled = true;
var img_list = [
  { source: "./images/giraffe.png", name: "Giraffe" },
  { source: "./images/horse.jpg", name: "Horse" },
  { source: "./images/lion.jpg", name: "Lion" },
  { source: "./images/gorilla.png", name: "Gorilla" },
];
var i = 0;
function slider() {
  document.getElementById("image").src = img_list[i].source;
  document.getElementById("animal_name").innerHTML = img_list[i].name;
  i++;
  if (i == img_list.length) {
    i = 0;
  }
}

function pause() {
  document.getElementById("pause").disabled = true;
  document.getElementById("play").disabled = false;
  clearInterval(myVar);
}
function play() {
  document.getElementById("play").disabled = true;
  document.getElementById("pause").disabled = false;
  myVar = setInterval(slider, 3000);
}