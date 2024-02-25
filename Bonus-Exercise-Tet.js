//Toán tử ba ngôi	

const x = 100;
const resutl = (x <10000) ? "nhỏ hơn 10000" : "lớn hơn 10000";

//Shorthand Evaluated
const variable2 = variable1 || "";

//Variable declaration – If Comparison
let a,y,z = 3;

if (isTurnOn){}

//For loop – For loop with decimal base

for (let item in simpleArr) {}

//Object property

const x1 = 1, y1= 2;
const obj = {x,y};

//Rút gọn định nghĩa function(Sử dụng arrow function)

sayHello = name => console.log('hello', name);
setTimeout(() => console.log('loaded'), 2000);

getvalue = ratio => ratio * 6.9;

//Set default value for parameter in function
getValue = (a,b = 3, c = 4) => (a * b + c);

//Template list
const wellcome = 'you have logged in as ${first} +  ${last} + .';

//Destructuring Assignment	
import {action , service} from 'lib';
const {form, errors, entity, controller, component} = this.props;

//Spead Operator
//joining array
const  old = [1,3,5];
const number = [2,4,6,...old];
//cloning array
const arr = [1,2,3,4];
const arr2 = [...array];

//Constraint Param 
mandatory = () => {throw new Error('thiếu tham số'); }
sample = (param1 = mandatory()) => param1

//Find() in arrays
const employees =  [
    {name: 'Emp A', age: 25},
    {name: 'Emp B', age: 28},
    {name: 'Emp C', age: 35}
]
const name = 'Emp A'
emp = employees.find(item => item.name === name)

//Object[key]
function validate (fullName){
    if(!fullName.firtname){
        return false
    }
    if(!fullName.lastname){
        return false
    }
    return true
}

console.log(validate({firtname: 'Duy', lastname: 'Buffet'}));

const rule = {
    firtname: {
        reqired: true
    },
    lastname: {
        reqired: true
    }
    
} 

const validate = (rule, values) => {
    for (props in rule){
        if(rule[props].reqired){
            if(!values[props]){
                return false
            }
        }
    }
    return true;
} 

console.log(validate(rule, {firtname: 'Duy'}));
console.log(validate(rule, {firtname: 'Duy', lastname: 'Buffet'}));

//Bitwise NOT double

~~6.9===6