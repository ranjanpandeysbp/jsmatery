let emp = {
    contact: {
        mobile: 12234455,
        email: 'abc@h.com'
    },
    address: {
        street: 'abc',
        city: 'xyz'
    }
}
console.log("&&&&&&&&&&&&&&&&&&&&&&&&");
console.log(emp.contact.mobile);//program stops if contact object does not exist
console.log(emp?.contact?.mobile);//program continues even if contact object is not present