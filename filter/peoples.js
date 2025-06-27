const peoples = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 30},
    {name: 'Jim', age: 35},
    {name: 'Jack', age: 40},
]




function ShowOldPeople(peoples){
    return peoples.filter((people)=>{
        return people.age >= 30;
    }
)
}

function ShowYoungPeople(peoples){


    return peoples.filter((people)=>{
        return people.age<30;
    })
}

console.log(`Old Peoples: ${JSON.stringify(ShowOldPeople(peoples))}`);
console.log(ShowYoungPeople(peoples));