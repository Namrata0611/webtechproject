function like(param1) {
    let span = param1.parentElement.children[1];

    let prevValue = span.innerHTML;
    let newValue = parseInt(prevValue) + 1;

    span.innerHTML = newValue;
}

function dislike(param1) {
    let span = param1.parentElement.children[3];

    let prevValue = span.innerHTML;
    let newValue = parseInt(prevValue) + 1;

    span.innerHTML = newValue;
}

function love(param1) {
    let span = param1.parentElement.children[5];

    let prevValue = span.innerHTML;
    let newValue = parseInt(prevValue) + 1;

    span.innerHTML = newValue;
} 