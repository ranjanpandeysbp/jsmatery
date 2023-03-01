let empArr3 = [
    {
        id: 111,
        name: 'John',
        age: 34
    },
    {
        id: 222,
        name: 'Peter',
        age: 26
    },
    {
        id: 333,
        name: 'Ram',
        age: 19
    }
];

let empsAgeGt20 = empArr3.filter((emp) => {
    return emp.age > 27;
});

console.log(empsAgeGt20);