---
title: "Variable, Data Types and Strings in JAVA"
image: "/images/posts/java/java.jpeg"
excerpt: 'Variable and Data type are a crucial part of programming, in this section I will talk about Variable, Data Types and Strings.'
date: '2022-04-04'
slug: 'variable-and-data-types-in-java'
keywords: 'setting up  java'
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


## Printing Out Anything in JAVA

&nbsp;

Before we get into the meat of this series, let's talk about how to print a statement in Java, because we would definitely want to see our output when we perform a particular operation that needs an output.

To print out anything in java we would have to use :

&nbsp;

```java
System.out.print();//without carrage return
//or
System.out.println();// with carrage return
System.out.printf( );
System.out.format( ); 
```

&nbsp;

1.   **System.in:** This is the **standard input stream** that is used to read characters from the keyboard or any other standard input device.

2.  **System.out:** This is the **standard output stream** that is used to produce the result of a program on an output device like the computer screen.

3.   **println():** This method in
 Java is also used to display text on the console. It prints the text on the console and the cursor moves to the start of the next line at the console. The next printing takes place from the next line.

4. **printf()**:The printf method  in Java can be used to write a formatted string to the console with different format options. It is also a method of the PrintStream class [click](http://kingscod.com/blog/java-printf-method) on this for more information

5. **format():**The  format method is similar to the printf method. You can concatenate a string 
 using this method and at the same time, you can format the output of concatenated string.

&nbsp;

## Vocabulary & Grammar of JAVA

&nbsp;

The collection of rules that must be followed while running a JAVA program is referred to as syntax, much to the conventions we follow when speaking English.

&nbsp;

### Variables

&nbsp;

Variable:Any form of representation that holds a value.Values can
 be changed.Java is both statically typed and strongly typed.

Ex → int number = 15;

explanation

1. int :data type
2. number: variable name

&nbsp;

### Types of Variables in Java

&nbsp;

Now let us discuss different types of variables which are listed as ****follows:

1. Local Variables
2. Instance Variables
3. Static Variables

&nbsp;

1. **Local Variables**

A variable defined within a block or method or constructor is called a local variable.

&nbsp;


2.  **Instance Variables**

Instance variables are non-static variables and are declared in a class outside any method, constructor, or block.

&nbsp;

3. **Static Variables**

Static variables are also known as Class variables.These variables are declared similarly as instance variables. The difference is that static variables are declared using the static keyword within a class outside any method constructor or block.

&nbsp;

**Rules of declaring a variable**

&nbsp;

we can choose a name while declaring a JAVA variable if the following rules are followed:
1.  Must not begin with a digit  e.g →int 1arr is invalid!

2. Name is case sensitive num and Num are different

3. Should not be a keyword like ( void , static )

4. White space not allowed e.g → int ex num ; invalid

5. Can contain alphabet ,$character , _character, digit, if the other condition are met

&nbsp;

### Data Types

&nbsp;

Data Type in JAVA fall under the following categories

**Java has two categories of data:**

- **Primitive Data Type:** such as boolean, char, int, short, byte, long, float, and double
- **Non-Primitive Data Type or Object Data type:** such as String, Array, etc.

&nbsp;

## Primitive Data Types

&nbsp;

- `byte` - Value ranges from -128 to 127.

Takes 1 byte

Default value is 0.

- `Short` - Value ranges from – ( 2^16 )/2 to ( 2 )^16/2 -1 .

Takes 1 byte
Default value is 0.

- `int` - stores integers (whole numbers), without decimals, such as 123 or -123

- `float` - stores floating point numbers, with decimals, such as 19.99 or -19.99

- `Long` - Value ranges from – ( 2^64 )/2 to ( 2^64 )/2 -1 
Takes 8 byte 
Default value is 0.0l

- `Double` -For floating-point numbers, Java uses double. It can hold a wider variety of values than a float because it utilizes 64 bits to store each one.

- `char` - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes

- `boolean` - stores values with two states: true or false

&nbsp;

### **How to choose Datatypes for our variables**

&nbsp;

![how to choose data type in java](https://res.cloudinary.com/react-webpractice/image/upload/v1649451463/dataTypes_yqsxlv.png)

&nbsp;

In order to choose the datatype we first need to find the type of data we want to store . After that we need to analyse the min & max value we might use.

&nbsp;

**Keyword** 

&nbsp;
![keywords in java](https://res.cloudinary.com/react-webpractice/image/upload/v1649451579/Screen_Shot_2022-03-07_at_8.56.36_AM_v9xgdp.png)

&nbsp;

Words which are reserved and used by the JAVA compiler .They cannot be used as an Identifier.

&nbsp;

## String

&nbsp;

String:Any word or number written between double hyphen  in java. when declaring or initializing a string. always start with a capital later ‘S’

Ex

String name = “KingsCode”;

&nbsp;

### Practice set 1

&nbsp;

Learning to program isn’t complete without some practice, try and do the following on your own.

&nbsp;

1. Write a program to sum three number in JAVA 

2. Write a program to calculate CGPA using marks of three subjects ( out of 100 ) 

3. Write a JAVA program which asks the user to enter his/her name and greet them with “Hello <name > have a good day ”  

4. Write a JAVA program to detect whether a number entered by the user is integer or not. 

5. Write a JAVA program to convert Kilometer into miles.

&nbsp;

Next ->[Operators in JAVA](https://www.kingscod.com/blog/operators-in-Java)

