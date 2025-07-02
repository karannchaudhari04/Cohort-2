

function countdown(num = 30) {
    console.log(num);
    if (num > 0) {
        setTimeout(() => countdown(num - 1), 1000);
    } else {
        console.log("Countdown finished!");
    }
}

countdown();