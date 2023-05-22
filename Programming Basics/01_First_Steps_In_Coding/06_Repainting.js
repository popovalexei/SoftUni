function repainting(input) {
    let nailon = 1.50;
    let paint = 14.50;
    let fluidForPaint = 5;
    let torbichki = 0.40;

    let neededNailon = (Number(input[0]) + 2) * nailon;
    let neededPaint = Number(input[1]) * paint;
    let neededPaintWithExtra = neededPaint + (neededPaint * 0.10);
    let neededFluidForPaint = Number(input[2]) * fluidForPaint;
    let neededHours = Number(input[3]);

    let totalWithoutWork = neededNailon + neededPaintWithExtra + neededFluidForPaint + torbichki;
    let totalForWorkers = (totalWithoutWork * 0.30) * neededHours;

    let final = totalWithoutWork + totalForWorkers;

    console.log(final);

}

repainting(["10", "11", "4", "8"])