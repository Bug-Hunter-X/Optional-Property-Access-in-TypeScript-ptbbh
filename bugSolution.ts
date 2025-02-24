function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + (person.lastName || ''));
}

printName({firstName: 'John'}); // This will work
printName({firstName: 'Jane', lastName: 'Doe'}); // This will work

// Alternative solution using optional chaining
function printName2(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + person?.lastName);
}

printName2({firstName: 'John'});
printName2({firstName: 'Jane', lastName: 'Doe'});