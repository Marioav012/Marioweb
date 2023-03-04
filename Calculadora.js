const display = document.getElementById("display");
function insertChar(char) {
  display.value += char;
}
function clearDisplay() {
  display.value = "";
}
function deleteChar() {
  display.value = display.value.slice(0, -1);
}
function calculate() {
  const result = eval(display.value);
  display.value = result;
}
