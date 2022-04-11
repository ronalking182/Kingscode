---
title: "JavaScript Function and Function Expressions"
image: "/images/posts/javascript-function-and-function-expression/javascriptFunction.jpeg"
excerpt: By breaking down a complex problem into smaller chunks, you can make your program more understandable and reusable...
date: '2022-11-07'
slug: ‘javaScript-function-and-function-expressions’
keywords: 'function, javascript function, functions in javascript'
isFeatured: false
category: 'JavaScript'
---
## What is a function?
&nbsp;

A function is a block of code that performs a specific task. Suppose you need to create a counter. You can create two functions to solve this problem:

&nbsp;

-a function to add to the counter

-a function to subtract from the counter

&nbsp;

By breaking down a complex problem into smaller chunks, you can make your program more understandable and reusable.

&nbsp;

javaScript also has a huge number of inbuilt functions. For example, `Math.sqrt()` is a function to calculate the square root of a number.

&nbsp;

In this tutorial you will learn how to create your own defined function.

&nbsp;

### Declaring a function

&nbsp;

The syntax to declare a function is:

```jsx
function nameOfFunction () {
    // function body   
}
```
&nbsp;

1.A function is declared using the `function` keyword

2.A function's name should follow the same principles as a variable's name. Giving your function a name that describes what it does is always a good idea.For example, if a function is used to add two numbers, you could name the function `add`or `addNumbers`.

3.The body of function is written within `{}`.

For example,

```jsx
function greating(){
console.log("Hello there");
}
```

&nbsp;

### **Calling a Function**

In the above program, we have declared a function named `greeting()`. To use that function, we need to call it.
Here's how you can call the above `greeting()` function.

```jsx
// function call
greeting();
```

&nbsp;

### **Example 1:**

```jsx
// program to print a text
// declaring a function
function greeting() {
    console.log("Hello there!");
}

// calling the function
greeting();
```

**Output**

```
Hello there!
```

&nbsp;

### ****Function Parameters****

The declaration of a function can additionally include a set of parameters. When defining a function, a parameter is a value that is passed in.

&nbsp;

****Example 2: Function with Parameters****

```jsx
console.log("Enter a name:")
// program to print the text
// declaring a function
function greeting(name) {
    console.log("Hello " + name + ":)");
}

// calling function
greeting(name);
```

**Output**

```
Enter a name: Simon
Hello Simon :)
```

&nbsp;

In the above function, it is declared with the paremeter `name`.when the function is called, an argument is passed into the function.

&nbsp;

<aside>
💡 **Note**: When a value is passed when declaring a function, it is called **parameter**. And when the function is called, the value passed is called **argument**.
</aside>

&nbsp;

A function can have more than one paremeter :

```jsx
// program to add two numbers using a function
// declaring a function
function add(a, b) {
    console.log(a + b);
}

// calling functions
add(3,4);
add(2,9);
```

&nbsp;

**Output**

```
7
11
```

&nbsp;

In the example above, the sum of two numbers is calculated using the `add` function.

&nbsp;

<aside>
💡 You should be aware that you can use a function as many times as you like. You can define a single function and then call it with different arguments many times.
</aside>

&nbsp;

### ****Function Return****

To return the value of a function call, use the `return` statement.

&nbsp;

The `return` statement signals the end of the function. After `return` ,any code is not performed.

&nbsp;

The function returns a `undefined` value if nothing is returned.

&nbsp;

****Example 4: Sum of Two Numbers****

```jsx
// program to add two numbers
// declaring a function
function add(a, b) {
    return a + b;
}

// take input from the user
let number1 = parseFloat(prompt("Enter first number: "));
let number2 = parseFloat(prompt("Enter second number: "));

// calling function
let result = add(number1,number2);

// display the result
console.log("The sum is " + result);
```

&nbsp;

The `prompt` keyword enable the your browser or command line to  place a request to the user, which in this case it you

&nbsp;

**Output**

```
Enter first number: 3.4
Enter second number: 4
The sum is 7.4
```

&nbsp;

In the above program, the sum of the numbers is returned by the function using the `return`
 statement. And that value is stored in the result variable, and then printed out.

&nbsp;

### **Benefits of Using a Function**

-The use of functions allows the code to be reused. It is possible to declare it once and then utilize it several times.

-Each little task is split into a function, making the program easy to follow.

-Function increases readability.