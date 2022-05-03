---
title: "JavaScript Arrow Function"
image: "/images/posts/javascript-function-and-function-expression/javascriptFunction.jpeg"
excerpt: Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions
date: '2022-04-07'
slug: ‘javaScript-arrow-function’
keywords: 'function, javascript function, functions in javascript, javascript arrow function, arrow function'
isFeatured: false
category: 'JavaScript'
---
Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example,

&nbsp;

this function

```jsx
function add(a, b){
return a + b
}
```

&nbsp;

can be written like this 

&nbsp;

```jsx
// using arrow functions
let x = (a, b) => a * b;
```

&nbsp;

### **Arrow Function Syntax**

&nbsp;

```jsx
const myFunction = (arg1, arg2, ...argN) => {
    //body of your function 
}
```

&nbsp;

1.`myFunction`  is the name of the function

2.`arg1, arg2, ...argN`  are the parameter of  the function

&nbsp;

if the body of a function has a single statement, you can write it like so ;
&nbsp;

```jsx
const myFunction = ( arg1, arg2, ...argN) => expression
```

&nbsp;

### ****Multiline Arrow Functions****

An arrow function can also have multiple line, in that case you use a `{}` then insert you statement like so; 

&nbsp;

```jsx
const addMe = (num1, num2) => {
let result = num1 + num2
return result 
}

const additon = addMe(5, 5)
console.log(additon)
//output = 10
```

&nbsp;

### **this with Arrow Function**

Inside a normal function the `this`  keyword refer to the function where it is called, however in arrow function `this`  keyword is not associated with the arrow function inside a regular function

&nbsp;

```jsx
function Car() { 
    name: 'Toyota',
    model: 2020,
    this.sayName = function () {

        // this is accessible
       console.log(this.model);

        function innerFunc() {

            // this refers to the global object
            console.log(this.model);
            console.log(this);
        }

        innerFunc();

    }
}

let x = new Car();
x.sayName();
```

&nbsp;

**Output**

&nbsp;

```
2020
undefined
Window {}
```

&nbsp;

**Inside an arrow function**

&nbsp;

```jsx
const Person = () => {
    name: 'Toyota',
    model: 2020,
    this.sayName = function () {

        // this is accessible
       console.log(this.model);

        const innerFunc = () => {

            // this refers to the global object
            console.log(this.model);
            console.log(this);
        }

        innerFunc();

    }
}

const x = new Car();
x.sayName();
```

&nbsp;

**Output**

&nbsp;

```
25
25
```

&nbsp;

`this` refers to the parent's scope. Hence, `this.age` gives **25**

&nbsp;

### **Things You Should Avoid With Arrow Functions**

1.You can not use arrow function to create a constructor For example,

&nbsp;

```jsx
let Foo = () => {};
let foo = new Foo(); // TypeError: Foo is not a constructor
```

&nbsp;

1.you can not use arrow function to create a method inside an object , like so;

&nbsp;

```jsx
let Car = {
    name: 'Toyota',
    model: 2020,
    sayName: () => {

        // this refers to the global .....
        console.log(this.model);
    }
}

Car.sayName(); // undefined
```

&nbsp;

1.The `this` keyword  can not be used in arrow function

&nbsp;

```jsx
Note:Some browsers may not support the use of arrow functions.
Arrow functions were introduced in ES6 
```