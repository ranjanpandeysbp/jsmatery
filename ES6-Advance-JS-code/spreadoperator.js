let names = ['Ram', 'Shyam', 'Ravi'];

//names.push('Sanjeev');
names = [...names, 'Sanjeev', 'Peter'];
//console.log(names);

let empArr = [
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

empArr = [...empArr, { id: 444, name: 'Lizzy', age: 25 }];
//console.log(empArr);
