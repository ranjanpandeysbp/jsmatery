let names2 = ['Ram', 'Shyam', 'Ravi'];

const findName = (name) => {
    if (names2.includes(name)) {
        console.log("The employee exist");
    } else {
        console.log("The employee does not exist");
    }
}

//findName('david');