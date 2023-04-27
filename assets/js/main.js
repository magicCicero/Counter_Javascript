let nr = 0;

function plusOne() {
  nr += 1;
  document.querySelector(".output").innerHTML = nr;
}
function minusOne() {
  nr -= 1;
  document.querySelector(".output").innerHTML = nr;
}
function plusTen() {
  nr += 10;
  document.querySelector(".output").innerHTML = nr;
}
function minusTen() {
  nr -= 10;
  document.querySelector(".output").innerHTML = nr;
}
function plusHundred() {
  nr += 100;
  document.querySelector(".output").innerHTML = nr;
}
function minusHundred() {
  nr -= 100;
  document.querySelector(".output").innerHTML = nr;
}
function multiplicateTwo() {
  nr = nr * 2;
  document.querySelector(".output").innerHTML = nr;
}
function resetCounter() {
  nr = 0;
  document.querySelector(".output").innerHTML = nr;
}
