function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

function enter() {
  let input = document.getElementById("numberInput").value;
  let result = factorial(input);
  document.getElementById("output").textContent = `${result}`;
}
