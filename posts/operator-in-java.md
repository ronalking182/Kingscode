---
title: "Operators in Java"
image: "/images/posts/java/java.jpeg"
excerpt: Depending on the situation, a variety of Java operators can be used. They're grouped according to the qualities they include.'
date: '2022-04-05'
slug: 'Operators in Java.'
keywords: 'operators-in-Java'
isFeatured: false
category: 'Java'
---

## All Concepts 

1. [Variable and Data Types and Strings in JAVA ](https://www.kingscod.com/blog/introduction-to-java)

2. [Operators in JAVA](https://www.kingscod.com/blog/operators-in-Java)
3. [Condition in JAVA ](https://www.kingscod.com/blog/condition-in-java)
4. [Loop Control in JAVA](https://www.kingscod.com/blog/loops-in-Java) 
5. Arrays in JAVA (coming soon)
6. [Methods in JAVA](https://www.kingscod.com/blog/how-to-create-a-method-in-java)
7. Introduction to OOPS ( important ),(coming soon)
8. Access Modifier & Constructor (coming soon)
9. Inheritance in JAVA (coming soon)
10. Abstract Classes & Interface (coming soon)
11. Package in JAVA (coming soon)
12. Multithreading in JAVA (coming soon)
13. Error & Exception (coming soon)
14. Advance JAVA – I (coming soon)
15. Advance JAVA – II(coming soon)

&nbsp;

Depending on the situation, a variety of Java operators can be used. They're grouped according to the qualities they include. Listed here are a few samples of the numerous kinds:

1. Arithmetic Operators
2. Unary Operators
3. Assignment Operator
4. Relational Operators
5. Logical Operators
6. Ternary Operator
7. Bitwise Operators
8. Shift Operators
9. instance of operator

Let’s take a look at them in detail.

&nbsp;

1. Primitive data types can be easily manipulated by applying arithmetic operators on the underlying data.

&nbsp;

- ***:** Multiplication
- **/ :** Division
- **% :** Modulo
- **+ :** Addition
- **– :** Subtraction

&nbsp;

Check out my article about [Presedence & Associativity](https://kingscod.com/blog/presedence-of-operator) to know more about performing arithmetic operation in java

|Operator |Name |Description |Example
|--- |---|---|---|
|+ |Addition|Adds together two values|x + y
|-|Subtraction|Subtracts one value from another|	x - y
|*|Multiplication|Multiplies two values	|x * y
|/|Division|Divides one value by another	|x / y
|%|Modulus|Returns the division remainder	|x % y
|++|Increment|Increases the value of a variable by 1|	++x
|--|Decrement|Decreases the value of a variable by 1	|--x


&nbsp;

**2. Unary Operators:** They are used to increment, decrement or negate a value.

- **– :** **Unary minus**, used for negating the values.
- **+ :** **Unary plus** indicates the positive value (numbers are positive without this, however). It performs an automatic conversion to int when the type of its operand is the byte, char, or short.
- **++ :** **Increment operator**, used for incrementing the value by 1. There are two varieties of increment operators.
    - **Post-Increment:** Value is first used for computing the result and then incremented.
    - **Pre-Increment:** Value is incremented first, and then the result is computed.

```
++a increments and then uses the variable.
a++ uses and then increments the variable.
 
int a=4 j;
System.out.println(++a)//output->5
System.out.println(a++)//output->4
System.out.println(a)//output->5

```

- **— : Decrement operator**, used for decrementing the value by 1. There are two varieties of decrement operators.
    - **Post-decrement:** Value is first used for computing the result and then decremented.
    - **Pre-Decrement:** Value is decremented first, and then the result is computed.

```
--a **decrement** and then uses the variable.
a-- uses and then **decrement** the variable.
 
int a=4 j;
System.out.println(--a)//output->3
System.out.println(a--)//output->4
System.out.println(a)//output->3

```

- **! : Logical not operator**, used for inverting a boolean value.

&nbsp;

3. '=' as an assignment operator The assignment operator is used to give any variable a value. It has right-to-left associativity, which means that the value given on the right-hand side of the operator is assigned to the variable on the left. As a result, the right-hand side value must be declared before use or be a constant.

The general format of the assignment operator is:

```
variable= value;
```

&nbsp;

4.Java Comparison Operators:Comparison operators are used to compare two values;

&nbsp;

**5. Logical Operators:**These operators are used together with comparison operator to perform logical statement

&nbsp;

|Operator |Name |Description |Example
|---|---|---|---|
|&&|Logical and|	Returns true if both statements are true|	x < 5 &&  x < 10
| &verbar;&verbar;  |Logical or|	Returns true if one of the statements is true|	x < 5 || x < 4
|!|Logical not|	Reverse the result, returns false if the result is true|	!(x < 5 && x < 10)
Next -> [Condition in JAVA ](https://www.kingscod.com/blog/condition-in-java)