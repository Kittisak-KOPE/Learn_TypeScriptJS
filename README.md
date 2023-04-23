# TypeScript

## Data Type

```
boolean
number
string
```

## Variable

```
const, let varName : dataType = defaultParameter
```

## Any, Unknown

```
let varName : any = defaultParameter

let varName : unknown = defaultParameter
```

## Type Assetions

```
(unknownVariable as string).toUpperCase()

(<string>unknownVariable).toUpperCase()
```

## Condition

### if

```
if(Condition){
    //command A
}else{
    //command B
}

Variable = (Condition)? //command when is true : //command when is false;
```

### Switch..Case

```
switch(variableHasValueForCompare){
    case value1: //command A;
        break;
    case valueN: //command N;
        break;
    default: //commandForDefault;
        break;
}
```

## loop

```
for(let count:number=1; count<=10; cout++){
    //command A
}

for(let number=1; count<=10; cout++){
    //command A
}

variableArrayHasValues((element)=>{
    //command A with element
})
```

## Function

### void

```
function nameFunction() void{
    //command A
}

nameFunction();
```

### parameter

```
function nameFunction(parameter1: dataType, ...){
    //command A
}

nameFunction(argument1, ...)
```

### return

```
function nameFunction() dataType{
    return value;
}
```

### parameter + return

```
function nameFunction(parameter1: dataType, ...) dataType{
    return value;
}
```

### Arrow Function

```
const nameFunction = (parameter1: dataType, ...) dataType =>{
    return value;
}
```

### Default Parameter

```
const nameFunction = (parameter1: dataType = defaultValue, ...){
    //command A
}
```

## Object

```
const nameObject = {
    propery:value
}

const nameObject = {propery:type} = {defaultValue}
// const position : {x:number, y:number} = {x:10, y:20}
```

## Function Get Value from Object

```
const funcName = (object) : void =>{
    //command A
}

//ex
const person={
    name:"kittisak",
    age: 20
}

//const showDetail = (data:{name:string, age:number}) => {}
//const showDetail = (data:{name:string, age:number}):void => {}
function showDetail(data:{name:string, age:number}) {
    console.log(`ชื่อ = ${data.name}, อายุ = ${data.age}`)
}

showDetail(person)
```

## Function Export Value from Object


```
const funcName = () : object =>{
    return object
}

//ex
const position : {lat:number, long:number} = {lat:10, long:20}

//function randomPosition():{lat:number, long:number}{}
const randomPosition = ():{lat:number, long:number} => {
    return{
        lat:Math.random(),
        long:Math.random()
    }
}

console.log(randomPosition())
```

## Excess Properties Check

```
fnName({parameter object})

// Not Use
function showDetail(data:{name:string, age:number}){
    console.log(`ชื่อ =${data.name}, อายุ = ${data.age}`)
}

const person={
    name: "kittisak",
    age: 30,
    address: "กรุงเทพมหานคร"
}

showDetail(person)

// Use Excess Properties Check
function showDetail(data:{name:string, age:number}){
    console.log(`ชื่อ =${data.name}, อายุ = ${data.age}`)
}

showDetail({
    name: "kittisak",
    age: 30,
    address: "กรุงเทพมหานคร"
})

```

## Type Aliases

### Create by us

```
type typeAliasesName = {
    property: type,
    ...
}

let variableName : typeAliasesName = {property:value, ...}

//ex 
type Employee ={
id: number,
name: string,
salary: number,
phone: string
}

let emp1:Employee={id:1, name:"kittisak", salary:50000, phone:"089978698"}
emp1.id = 100
console.log(emp1)
```

### Optional Properties

```
type typeAliasesName = {
    property ?: type,
    ...
}

//ex 
type Employee ={
id: number,
name: string,
salary: number,
phone?: string
}

let emp1:Employee={id:1, name:"kittisak", salary:50000}
console.log(emp1)
```

### Readonly Modifier

```
type typeAliasesName = {
    readonly property ?: type,
    ...
}
```

## Array

```
const arrayName: dataType[] = [];
const arrayName: dataType[] = [element1, ...];

// ex1
const users:string[] = []

users.push("KOPE")
users.push("GAIL")
users.push(100)

console.log(users)
```

```
//for loop, length
const users:string[] = ["user1", "user2", "user3"]
for(let i=0; i<users.length; i++){
    console.log(users[i])
}
//or
users.forEach(element=>{
    console.log(element)
})
```

```
//wiht type aliases
type Employee={
    name:string,
    salary:number,
    department:string
}

const employees:Employee[] = []
employees.push({name:"KOPE", salary:1000000, department:"CEO"})
employees.push({name:"GIF", salary:50000, department:"Project Manager"})
employees.push({name:"BOW", salary:35000, department:"Businese Analyst"})

console.log(employees)

console.log(employees[0])

employees.forEach(element => {
    console.log(element.name)
})

for(let person of employees){
    console.log(person)
}
```

## Function Overload

```
//ex1
function fnName():string
function fnName(variableName:dataType):string
function fnName(variableName?:unknown):unknown
---
function sayHi():string
function sayHi(name:string):string
function sayHi(name?:unknown):unknown{
    if(!name){
        return `Hello TypeScript`
    }if(typeof name == "string"){
        return `Hello ${name}`
    }
    throw new Error("Erro Type")
}

console.log(sayHi("asfd"))
```

```
//ex2
function fnName(a:number, b:number):number
function fnName(a:string, b:string):string
function fnName(variableName?:unknown):unknown
---
function total(a:number, b:number):number
function total(a:string, b:string):string
function total(a:unknown, b:unknown):unknown{
    if(typeof a == "number" && typeof b == "number"){
        return a+b
    }
    if(typeof a == "string" && typeof b == "string"){
        return parseInt(a) + parseInt(b)
    }
    throw new Error("Error Data Type")
}

console.log(total("100", "200"))
```

## Spread Operator

```
const section:string[] = ["Account", "Mony"]
const departments:string[] = ["Programmer", "Marketing", "Graphic"]

departments.push(...section)

console.log(departments)
```

## Rest Parameter

```
const total1 = (...numbers: number[]) => {
    return numbers.reduce((result, value)=>{
        return result+value
    }, 0)
}

console.log(total1(100, 200, 300, 100))
```

## Destructuring

```
// With Array
const colors:string[] = ["R", "G", "B"]
const [red, green, blue] = colors

console.log(red)
```

```
// With Object
const person={
    fname: "KOPE",
    age: 30,
    address: "RAYONG"
}
const {fname, age, address} = person

console.log(fname)
```

## Tuple

```
const variableName:[type1, type2, ...] = [value1, value2, ...]
---
const grade:[number, string] = [4, "veryGood"]

console.log(grade[1])
console.log(grade)
```

```
// label
const goodStatus:[code:number, status:string] = [200, "OK"]

console.log(goodStatus[0])
```

## Type wiht tuple form

```
type HttpStatusCode = [number, string]
const goodStatus:HttpStatusCode = [200, "OK"]
const notFound:HttpStatusCode = [404, "Not Found"]
const badRequest:HttpStatusCode = [400, "Invelid Request"]
const serverErr:HttpStatusCode = [500, "Internal Server Error"]

console.log(goodStatus)
```