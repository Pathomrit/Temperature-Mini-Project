const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const tempInput = document.querySelectorAll("input");
// console.log(tempInput);

tempInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let tempValue = parseInt(e.target.value);
    let inputName = e.target.name;
    // console.log("name input ", inputName, " value ", tempValue);
    if (e.target.value === "") {
      celsiusInput.value = null;
      fahrenheitInput.value = null;
      kelvinInput.value = null;
      return;
    }
    if (inputName === "celsius") {
      let fahrenheit = tempValue * 1.8 + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      let kelvin = tempValue + 273;
      kelvinInput.value = kelvin.toFixed(2);
    } else if (inputName === "fahrenheit") {
      let celsius = (tempValue - 32) / 1.8;
      celsiusInput.value = celsius.toFixed(2);
      let kelvin = (tempValue - 32) / 1.8 + 273;
      kelvinInput.value = kelvin.toFixed(2);
    } else if (inputName === "kelvin") {
      let celsius = tempValue - 273;
      celsiusInput.value = celsius.toFixed(2);
      let fahrenheit = (tempValue - 273) * 1.8 + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
    }
  });
});
