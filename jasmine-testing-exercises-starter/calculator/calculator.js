window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // Get the inputs from the DOM
  let loanAmount = document.querySelector("#loan-amount");
  loanAmount.value = 10000;
  let loanYears = document.querySelector("#loan-years");
  loanYears.value = 8;
  let loanRate = document.querySelector("#loan-rate");
  loanRate.value = 5.8;

  calculateMonthlyPayment([loanAmount.value, loanYears.value, loanRate.value]);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  // update current payment
  updateMonthly(calculateMonthlyPayment());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  // values ={loanAmount, loanYears, loanRate}
  let principal = values[0];
  let interest = values[2] / 100 / 12;
  let numOfPayments = Math.floor(values[1] * 12);

  // calculate monthly payment
  let payment =
    (interest * principal) /
    (1 - Math.pow(1 + interest, -numOfPayments)).toFixed(2);
  // return payment to string

  return payment.toString();
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  console.log(monthly);
}
