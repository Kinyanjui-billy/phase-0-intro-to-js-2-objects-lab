// Write your solution in this file!


const employee = {};

function updateEmployeeWithKeyAndValue(employees, key, value){
    return Object.assign({}, employee, { "name": "Sam", "streetAddress": "11 Broadway"});
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employees, key, value){

    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    let newObj = Object.assign({}, employee)
    delete newObj[key]
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
