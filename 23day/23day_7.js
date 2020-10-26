let testJson =
    [{name : "사나", salary : 50000000},
        {name : "모모", salary : 1000000},
        {name : "다현", salary : 3000000},
        {name : "미나", salary : 2000000}];

let newJson = testJson.map(function(element, index){
    console.log(element);
    let returnObj = {};
    returnObj[element.name] = element.salary;
    return returnObj;
});

console.log("newObj");
console.log(newJson);


