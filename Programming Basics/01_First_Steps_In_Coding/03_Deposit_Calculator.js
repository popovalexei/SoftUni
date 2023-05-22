function depositCalculator(input) {
  let depositAmount = Number(input[0]);
  let depositMonths = Number(input[1]);
  let procent = Number(input[2]) / 100;

  let finalAmount = depositAmount + depositMonths * ((depositAmount * procent) / 12);

  console.log(finalAmount);
}

depositCalculator(['200', '3', '5.7']);

// сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
