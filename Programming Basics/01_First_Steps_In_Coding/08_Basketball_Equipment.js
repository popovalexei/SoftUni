function basketballEquipment(input) {
    let anualFee = Number(input[0]);

    let shoes = anualFee * 0.6;
    let equip = shoes * 0.8;
    let ball = equip * 0.25;
    let accessories = ball * 0.20;

    let total = anualFee + shoes + equip + ball + accessories;

    console.log(total);
}

basketballEquipment(["550"])