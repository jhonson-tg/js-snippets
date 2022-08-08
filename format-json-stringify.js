const fs = require('fs');
const data = {
    name: "Jhonson",
    designation: "Senior software engineer",
    hobbies: [
        "Investing",
        "listening to music"
    ]
}

// As the value in the JSON.stringify(data, null, <value>) increases the space provided for each property increases.
fs.writeFileSync(
    'out.txt',
    JSON.stringify(data, null, 3),
    'utf-8'
)