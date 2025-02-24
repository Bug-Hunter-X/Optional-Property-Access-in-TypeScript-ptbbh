function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + person.lastName);
}

printName({firstName: 'John'}); // This will work
printName({firstName: 'Jane', lastName: 'Doe'}); // This will work

// However, the following will not work because lastName is optional but we are trying to access it in a way that it may be undefined. 
function printName2(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + person?.lastName); // This is correct
}

printName2({firstName: 'John'});
printName2({firstName: 'Jane', lastName: 'Doe'});