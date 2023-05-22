function suppliesForSchool(input) {
    let penPrice = 5.80;
    let markersPrice = 7.20;
    let cleanerPerLiterPrice = 1.20;

    let penAmount = Number(input[0]) * penPrice;
    let markersAmount = Number(input[1]) * markersPrice;
    let cleanerLitersAmount = Number(input[2]) * cleanerPerLiterPrice;
    let discount = Number(input[3])

    let totalWithoutDiscount = penAmount + markersAmount + cleanerLitersAmount;
    let discountAmount = discount / 100;

    let totalWithDiscount = totalWithoutDiscount - (totalWithoutDiscount * discountAmount);

    console.log(totalWithDiscount);
}

suppliesForSchool(["2", "3", "4", "25"])