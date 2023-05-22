function foodDelivery(input) {
    let chicketMenuPrize = 10.35;
    let fishMenuPrize = 12.40;
    let veggieMenuPrize = 8.15;
    let deliveryPrize = 2.50;

    let chickensMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veggieMenus = Number(input[2]);

    let totalMenusPrize = chickensMenus * chicketMenuPrize + fishMenus * fishMenuPrize + veggieMenus * veggieMenuPrize;
    let totalPlusDesert = totalMenusPrize * 0.20;

    let total = totalMenusPrize + totalPlusDesert + deliveryPrize;

    console.log(total);
}

foodDelivery(["2", "4", "3"])