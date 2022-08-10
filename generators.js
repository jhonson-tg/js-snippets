function* makeCounter() {
    let count = 0;
    while (true) {
        yield count++;
    }
}

const counter = makeCounter();
console.log(counter.next().value);
console.log(counter.next().value);