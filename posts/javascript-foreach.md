---
title: "Javascript forEach()"
image: "/images/posts/javascript/javascript.png"
excerpt: JavaScript's forEach method is one of several options for looping through arrays. Each method has its own set of benefits, and you must choose which one to use based on your requirements
date: '2022-04-08'
slug: ‘javascript-foreach’
keywords: 'loops in javascript, loops forEach, forEach loop in javascript, forEach loop '
isFeatured: false
category: 'JavaScript'
---

JavaScript's forEach method is one of several options for looping through arrays. Each method has its own set of benefits, and you must choose which one to use based on your requirements.

&nbsp;

In this article, i will show you how to loop through an array in javascript using the forEach loop

&nbsp;

## Why do we need a forEach loop

&nbsp;

A forEach loop is basically used to iterate over an array, to produce a new array under your own specified condition. What do i mean ?  let say we are given this array:

&nbsp;

```jsx
const numbers = [1, 2, 3, 4, 5];
```

&nbsp;

and you want to form a new array from the array `numbers`  by multiplying each element of the  array by 2 , all you need to do is use a forEach loop and then set you condition.

&nbsp;

### ForEach loop Syntax

The forEach method passes an anonymous function for each element of an array together with the following parameters:

&nbsp;

1.The value of the current array element :that is, each individual element of the array.

2.Index (optional) - The current element's index number

3.Array (optional) - The array object to which the current element belongs

&nbsp;

firstly, to loop through the following array we would need to create a function 

&nbsp;

```jsx
//normal function
numbers.forEach(function() {
    // code
});

//arrow function

numbers.forEach(()=>{
  //code
  }
)
```

&nbsp;

You can either chose to use an array function or a normal function. The function will be executed for each single element of the array. It must take at least one parameter which represents the elements of an array, **it a must**:

&nbsp;

```jsx
numbers.forEach(function(number) {
    console.log(number);
});

//arrow function

numbers.forEach(number => console.log(number))
```

&nbsp;

output:

&nbsp;

```
1
2
3
4
5
```

&nbsp;

That's all we need to do for looping through the array:

&nbsp;

### Optional Paremeter

Optionally for each loop takes in three paremeter:

&nbsp;

1.the first paremter being the the value of each individual array, it a must to include this 

2.The second is optional , it the `index` use to number each individual element in the for loop, E.g

&nbsp;

```jsx

 numbers.forEach((number, index) => {
    console.log('Index: ' + index + ' Value: ' + number);
});
```

&nbsp;

 outPut:

&nbsp;

```
index:0 value: 1
index:1 value: 2
index:2 value: 3
index:3 value: 4
index:4 value: 5
```

&nbsp;

1.The third paremeter is called the `array`  paremeter: It is also optional and can be used if necessary in various operations. Otherwise, if we call it, it will just get printed as many times as the number of elements of the array:

&nbsp;

```jsx
numbers.forEach((number, index, array) => {
    console.log(array);
});
```

&nbsp;

outPut:

&nbsp;

```
*(5)[1,2,3,4,5]
(5)[1,2,3,4,5]
(5)[1,2,3,4,5]
(5)[1,2,3,4,5]
(5)[1,2,3,4,5]*
```

&nbsp;

### Example

Consider given this following array:

&nbsp;

```jsx
const numbers = [1, 2, 3, 4, 5];
```

&nbsp;

produce an array form the given array that is a multiple of 2

Solution: 

&nbsp;

```jsx
const multipleOfTwo = numbers.forEach(function(number){
 return number *2 
 }
)

console.log(multipleOfTwo);
```

&nbsp;

```
2
4
6
8
10
```

&nbsp;

### Conclusion

ForEach loop method is a very nice and easy way to loop over an array when necessary. If you are still struggling or finding it hard to understand the concept of function I suggest you check out my article about [function](https://www.kingscod/blog/javascript-function-and-function-expression) and [arrow function](http://www.kingscod/blog/javascript-arrow-function).