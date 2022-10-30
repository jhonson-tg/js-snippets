const randomNumber = () => {
    const randomNum = Math.random() * 100;
    const multiply = () => {
        return {
            randomNum,
            squared: randomNum * 2
        }
    }
    return multiply;
}

const randomNumber2 = {
    randomNum: Math.random() * 100,
    multiply: () => {
        return {
            "randomNum": randomNumber2.randomNum,
            "squared": randomNumber2.randomNum * 2
        }
    }
}

console.log(randomNumber()(2));
console.log(randomNumber2.multiply());