function vacationBooksList(input) {
    let numberOfAllPages = Number(input[0]);
    let numberOfPagesPerHour = Number(input[1]);
    let days = Number(input[2])

    let readPerBook = numberOfAllPages / numberOfPagesPerHour;
    let neededHours = readPerBook / days;

    console.log(neededHours);
}

vacationBooksList(["212", "20", "2"])

