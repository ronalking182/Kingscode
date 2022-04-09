---
title: "Conditional Statement in Java"
image: "/images/posts/java/java.jpeg"
excerpt: 'Generally speaking, conditional statements in java programming are employed to carry out tasks that can only be carried out under specific circumstances.'
date: '2022-04-06'
slug: 'conditional-statement-in-Java'
keywords: 'conditional statement in Java, java comparison'
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

Generally speaking, conditional statements in java programming are employed to carry out tasks that can only be carried out under specific circumstances. Java comparison is an important aspect of this JAVA series, therefore let's speak about it first before discussing conditional statements, which we'll cover in a short while.

&nbsp;

## JAVA Comparison

&nbsp;

We will be making used of the JAVA comparison operator to carry out JAVA Comparison and the Logical operator

**Java Booleans**

Very often, in programming, you will need a data type that can only have one of two values, like:

- YES / NO
- ON / OFF
- TRUE / FALSE

For this, Java has a `boolean` data type, which can take the values `true` or `false`.

&nbsp;

A boolean type is declared with the `boolean`keyword and can only take the values `true` or `false`:

```java
boolean isProgrammingFun = true;
boolean isFoodGood = false;
System.out.println(isProgrammingFun);     // Outputs true
System.out.println(isFoodGood);   // Outputs false

```

&nbsp;

Because of this, boolean expressions are more commonly used to return boolean values, which can be used for conditional tests (see below).

&nbsp;

**Boolean Expression**

A Java expression that returns a Boolean value of true or false is known as a Boolean expression.

&nbsp;

To determine whether an expression (or a variable) is true or false, you can use a comparison operator such as the 

1. greater than (>) operator

2. less than (<) operator

3. equal to (==) operator

4. not quals to (≠) operator

5. greater than or equals to (≥)

6. less than or quals to (≤)

&nbsp;

```java
int x = 10;
int y = 9;
System.out.println(x > y); // returns true, because 10 is higher than 9
System.out.println(x < y); // returns false, because 10 is not less than 9
```

&nbsp;

In the examples below, we use the **equal to** (`==`) operator to evaluate an expression:

&nbsp;

```java
int x = 10;
System.out.println(x == 10); // returns true, because the value of x is equal to 10
System.out.println(x != 10); //returns false because x is equals to 10
System.out.println(x <= 10); // returns false
System.out.println(x >= 10); // returns true, because x equals to 10 
```

&nbsp;

**Logical operator** 

1. “AND”(&&)
2. “OR”(||)
3. “NOT”(!)

```java
boolean result = x < 5 &&  x < 10;
System.out.println(result);//Returns true if both statements are true
boolean resultTwo = x < 5 || x < 4;
System.out.println(resultTwo);//Returns true if one of the statements is true
boolean resultThree = !(x < 5 && x < 10);
System.out.println(resultThree);//Reverse the result, returns false if the result is true
```

&nbsp;

## Conditional statement in JAVA

Java provides various  control flow statements.

1. Decision Making statements
    - if statements or if else statements
    - switch statement
2. Jump statements
    - break statement
    - continue statement


&nbsp;

**Decision-Making statements:**

Decision-making statements, as the name suggests, determine which statements are executed and when. Decision-making statements parse the Boolean expression and control the program flow based on the outcome of the condition.Java has the following conditional statements:

- Use `if` to specify a block of code to be executed, if a specified condition is true

- Use `else` to specify a block of code to be executed, if the same condition is false

- Use `else if` to specify a new condition to test, if the first condition is false

- Use `switch` to specify many alternative blocks of code to be executed

&nbsp;

**1. If Statement:**Use the `if`
 statement to specify a block of Java code to be executed if a condition is `true`.

```java
if (condition) {
  // block of code to be executed if the condition is true
}
```

&nbsp;

<aside> Note that `if`
 is in lowercase letters. Uppercase letters (If or IF) will generate an error.
</aside> 

&nbsp;

Example

```java
if (20 > 18) {
  System.out.println("20 is greater than 18");
}

//We can also test variables:
int x = 20;
int y = 18;
if (x > y) {
  System.out.println("x is greater than y");
}
```

&nbsp;

2.The else Statement

Use the `else` statement to specify a block of code to be executed if the condition is `false`

```java
if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
}
```

Example

```java
int time = 20;
if (time < 18) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}
// Outputs "Good evening."
```

&nbsp;

3.The else if Statement

Use the `else if` statement to specify a new condition if the first condition is `false`.

```java
if(condition 1) {    
statement 1; //executes when condition 1 is true   
}  
else if(condition 2) {  
statement 2; //executes when condition 2 is true   
}  
else {  
statement 2; //executes when all the conditions are false   
}
```

Example

```java
int time = 22;
if (time < 10) {
  System.out.println("Good morning.");
} else if (time < 20) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}
// Outputs "Good evening."
```

&nbsp;

# Short Hand If...Else

There is also a short-hand if-else, which is known as the **ternary operator** because it consists of three operands.

&nbsp;

```java
variable = (condition) ? expressionTrue :  expressionFalse;
```

Example

```java
int time = 20;
if (time < 18) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}
//Short hand
int time = 20;
String result = (time < 18) ? "Good day." : "Good evening.";
System.out.println(result);
```

&nbsp;

## **Java Switch**

Switch statements in Java are comparable to if-else-else statements. A single case is run based on the variable that is being switched in the switch statement, which comprises various blocks of code called cases.if-else can be swapped with switch.

&nbsp;
```java
switch (expression)
{
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
  case valueN:
    statementN;
    break;
  default:
    statementDefault;
}
```
&nbsp;

 • The break statement is used inside the switch to terminate a statement sequence.

- The expression can be of type byte, short, int char, or an enumeration. Beginning with JDK7, *expression* can also be of type String.

- Duplicate case values are not allowed.

- The break statement is optional. If omitted, execution will continue on into the next case alternatively if you don’t want to use the break statement you can return your statement 

&nbsp;

Example

```java
switch (expression)
{
  case value1:
   return statement1;
  case value2:
    return statement2;
  case valueN:
  return statementN;
  default:
    statementDefault;
}
```

&nbsp;
# The default Keyword

The `default` keyword specifies some code to run if there is no case match

&nbsp;
## Jump

 Java supports three jump statements: **break, continue** and **return**. These three statements transfer control to another part of the program.

- **Break:** In Java, a break is majorly used for:
    - Terminate a sequence in a switch statement (discussed above).

    - To exit a loop.

    - Used as a “civilized” form of goto.

    &nbsp;
- **Continue:** Sometimes it is useful to force an early iteration of a loop. That is, you might want to continue running the loop but stop processing the remainder of the code in its body for this particular iteration. This is, in effect, a goto just past the body of the loop, to the loop’s end. The continue statement performs such an action.

&nbsp;
Next ->[Loop Control in JAVA](https://www.kingscod.com/blog/loops-in-Java) 