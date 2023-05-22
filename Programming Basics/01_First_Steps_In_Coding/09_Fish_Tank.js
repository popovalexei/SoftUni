function fishTank(input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let procent = Number(input[3]);

    let volume = lenght * width * height;
    let volumeInLitres = volume * 0.001;
    let space = procent / 100;

    let neededLitres = volumeInLitres * (1 - space);

    console.log(neededLitres);
}

fishTank(["85", "75", "47", "17"]);