const addOne = (amount) => {
    if (typeof amount !== 'number') {
        throw Error('ARgument must be a number');
    }
    return amount + 1;
}

try {
    const result = addOne("Twelve");
    console.log(result);
}
catch (e) {
    console.log('Error on 1');
}

try {
    const result1 = addOne("12");
    console.log(result1);
}
catch (e) {
    console.log("Error on 2");
}
try {
    const result2 = addOne(12);
    console.log(result2);
}
catch {
    console.log('Error on 3');
}


