---
title: "Introduction to JAVA"
image: "/images/posts/java/java.jpeg"
excerpt: This set of Java series is for you. If you have any questions or are unable to grasp a concept, the series provides practice sets that will help you improve your java skills.'
date: '2022-04-05'
slug: 'introduction-to-java'
keywords: 'introduction to java'
isFeatured: false
category: 'Java'
---

# JAVA series

This set of Java series is for you  If you have any questions or are unable to grasp a concept, the series provides practice sets that will help you improve your java skills.

&nbsp;


## All Concepts 

1. [Variable and Data Types and Strings in JAVA ](https://www.kingscod.com/blog/introduction-to-java)

2. [Operators in JAVA](https://www.kingscod.com/blog/operators-in-Java)
3. [Condition in JAVA ](https://www.kingscod.com/blog/condition-in-java)
4. [Loop Control in JAVA](https://www.kingscod.com/blog/loops-in-Java) 
5. Arrays in JAVA (coming soon)
6.[Methods in JAVA](https://www.kingscod.com/blog/how-to-create-a-method-in-java)
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

# Introduction to JAVA

JAVA is an Object Oriented Programming language Developed by Sum Micro-system of USA in 1991.

JAVA is a purely Object Oriented programing language Originally called  “OAK” by the Inventor of Java (James Gerlin). it was created in the year 1991 in USA.

&nbsp;

### How Java Works

&nbsp;

JAVA is compiled into the bytecode and then it is interpreted to machine code.

Source Code —> Byte Code —> Machine Code

&nbsp;

### Java Installation

- check out my article on how to set up vsCode ( an IDE )for Java [link](https://www.kingscod.com/blog/setting-up-vs-code-for-java-development)
- Also check out my article on how to create a java project in vscode

Optionally you can choose  to use any IDE of your choice 

- JDK – JAVA Development Kit
Collection of tools used for developing and running JAVA program
- JRE – JAVA Runtime Environment
Help in executing program developed in JAVA
- Package - A package in JAVA is used to group
relative classes . Think of it’s a folder
in a file directory

&nbsp;

## Basic Structure of a JAVA program

 When the JVM start, it looks for a class you give it at the command line, then it start looking  specifically for a method in your program that looks exactly like this 

 &nbsp;

```java
Public static void main (String [ ] args ){ 
//System.out.println( “Hello World” )
};
```
&nbsp;

- Next the JVM runs everything between the curly brace { } of your main method
- Every Java application has at least one class and a main method(not one main method by class, but  just one main method per application)

&nbsp;

![java main class picture](https://res.cloudinary.com/react-webpractice/image/upload/v1649423388/javaPic_wsqggk.png)

&nbsp;

1. **Method**: A method is a block of code which only runs when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions, and they are also known as **functions**. 

&nbsp;

2. **Classes**:Classes Everything in Java is associated with classes and objects, along with its attributes and methods. For example: in real life, a car is an object. The car has **attributes**, such as weight and color, and **methods**, such as drive and brake.

&nbsp;

**What are Strings and Variable ?**

- String: any word or number written in between a hyphen
- Variable: any form of representation that holds a value

&nbsp;

### Naming Convention

For Variable we use Pascal Convention or Case Convention

Normal – Add two number(wrong)
Pascal – AddTwoNumber(correct)

Camel – addTwoNumber(correct)

&nbsp;

- For Classes we use Pascal Convention

Normal – Add two number(wrong)
Pascal – AddTwoNumber(correct)

&nbsp;

- For method/functions we use camel Case Convention

Camel – addTwoNumber

&nbsp;

### **Comments in Java**

&nbsp;

There are three types of comments in Java.

**i.** Single line Comment

```java
// System.out.println("Sample!");
```

**ii.** Multi-line Comment

```java
/*
    System.out.println("Sample!");
    System.out.println("Alice!");
*/
```

**iii.** Documentation Comment. Also called a **doc comment**.

```java
/** documentation */
```
&nbsp;

Next -> [Variable and Data Types and Strings in JAVA](https://www.kingscod.com/blog/introduction-to-java)
