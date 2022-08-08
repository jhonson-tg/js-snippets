const makeCounter = () => {
    let count = 0;

    return () => {
        return count++;
    }
}

counter1 = makeCounter();
counter2 = makeCounter();
counter3 = makeCounter();

console.log(counter1())
console.log(counter1())
console.log(counter2())
console.log(counter3())