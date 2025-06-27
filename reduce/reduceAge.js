const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jim', age: 35 },
    { name: 'Jack', age: 40 }
  ];
  
  const totalAge = people.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age;
  }, 0);  // 0 é o valor inicial do acumulador
  
  console.log(`Total Age: ${totalAge}`);  // Resultado: 130
  