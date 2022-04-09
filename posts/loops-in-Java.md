---
title: "Loops in Java"
image: "/images/posts/java/java.jpeg"
excerpt: 'It is common in programming to use loops to keep going back and forth over something or a certain task provided a condition is given and the condition evaluate to true.'
date: '2022-04-07'
slug: 'loops-in-Java'
keywords: 'loops in Java'
isFeatured: false
category: 'Java'
---



It is common in programming to use loops to keep going back and forth over something or a certain task provided a condition is given and the condition evaluate to true. In Java, we have three types of loops that all work the same way. However, there are some differences in syntax and how long it takes to check for conditions.

1.while loop 

2.do-while loop

3.for loop

&nbsp;

# Java While Loop

The `while` loop, loops through a block of code as long as a specified condition is `true` .

&nbsp;

The while loop can also be used to iterate over a set of statements repeatedly. If we don't know how many iterations we'll need ahead of time, we should use a while loop.

&nbsp;

It's also known as the entry-controlled loop because the condition is tested at the beginning of the loop. If the condition is true, the loop body will be executed; otherwise, the statements following the loop will be executed.

The while loop's syntax is seen below.
```java
while (boolean condition)
{
   loop statements...
}
```

&nbsp;

![while loop in java](https://res.cloudinary.com/react-webpractice/image/upload/v1649455959/Screen_Shot_2022-03-09_at_11.26.02_AM_xuxpnw.png)

&nbsp;

```java
public class Calculation {    
public static void main(String[] args) {       
int i = 0;    
System.out.println("Printing the list of first 10 even numbers \n");    
while(i<=10) {    
System.out.println(i);    
i = i + 2;    
}    
 }    
}

&nbsp;

```

output:

```
Printing the list of first 10 even numbers 

0
2
4
6
8
10
```

&nbsp;

Example 

As long as the variable (i) is less than 5, the code in the loop will run, over and over again

```java
int i = 0;
while (i < 5) {
  System.out.println(i);
  i++;
}
```

output:

```

1
2
3
4
```
&nbsp;

<aside>
💡 **Note:**
 Do not forget to increase the variable used in the condition, otherwise the loop will never end!
</aside>

&nbsp;

**Quick Quiz** 
Write a program to print natural number from 100 to 200.

&nbsp;
# Java Do/While Loop

Do while Loops are a subset of While loops, with the only difference being that your code runs at least once before checking the condition, and then if the condition is true, your code begins iterating until the condition is false, as opposed to While loops which check condition first before running.

&nbsp;
### Syntax

```java
do {
  // code block to be executed
}
while (condition);
```

Example:

Even if the condition is false, the loop will be executed at least once because the code block is executed prior to the condition being tested:

```java
int i = 0;
do {
  System.out.println(i);
  i++;
}
while (i > 5);
```

output:

```
0
```

&nbsp;

**Quick Quiz** 
Write a program to print first n natural number using do while loop.

&nbsp;

## **For loops**

The Syntax of a for loop look like this: 

```java
For( initialize; check Boolean expression; update ){ 
//code; 
} 
```
&nbsp;

A for loop is usually used to execute a piece of code for specific number of time

&nbsp;
 
**Quick Quiz** 
Write a program to print first n Odd number using for loop. 

&nbsp;

**Decrementing For loop** 

```java
For ( i = 7; , i!=0 , i-- ){ 
System.out.println( i ); 
} 
```

&nbsp;

**Quick Quiz** 
Write a program to print first n natural number using for loop in reverse order

output:

```
O 7, 6, 5, 4, 3, 2, 1 
```

&nbsp;

### **Break and Continue**

&nbsp;

**Break Statement**
The break statement is used exit the loop irrespective of whether the condition is true or false
Whenever a “break” is encountered inside the loop, the control is sent outside the loop
Example –

```java
For ( int i = 1; i>0 ; i++){
If( i ==2){
System.out.println(“This is break”);
Break;
```
&nbsp;

Continue Statement The continue statement is used to immediately move to the next iteration of the loop. The control is taken to the next iteration thus skipping everything below “continue” inside the loop for that iteration.

Example –

```java
For ( int i = 1; i>0 ; i++){
If( i ==2){
System.out.println(“This is break”);
Continue;
  }
System.out.println( i );
System.out.println( “best” );
 }
In While
Int i =0;
While( i<10 ){
i++;
if( i== 2 ){
System.out.println(“This is break/continue”);
Break/continue;
 }
System.out.println( i );
}
```

&nbsp;

### Practice Set

1. Write a program to print the following pattern 

**** 

*** 

** 

* 

2. Write a program to sum first n even number using while loop. 

3. Write a JAVA program to print multiplication table of a given number n. 

4. Write a JAVA program to print multiplication table of 10 in reverse order. 
5. Write a program to calculate the sum of the number occurring in the multiplication table of 8

&nbsp;

Next → [Methods in JAVA](https://www.kingscod.com/blog/how-to-create-a-method-in-java)

&nbsp;

## All Concepts 

1.[Variable and Data Types and Strings in JAVA ](https://www.kingscod.com/blog/variable-and-data-type-in-java)

2.[Operators in JAVA](https://www.kingscod.com/blog/operator-in-java)

3.[Condition in JAVA ](https://www.kingscod.com/blog/conditional-statement-in-Java)

4.[Loop Control in JAVA](https://www.kingscod.com/blog/loops-in-Java) 

5.Arrays in JAVA (coming soon)
6.[Methods in JAVA](https://www.kingscod.com/blog/how-to-create-a-method-in-java)

7.Introduction to OOPS ( important ),(coming soon)

8.Access Modifier & Constructor (coming soon)

9.Inheritance in JAVA (coming soon)

10.Abstract Classes & Interface (coming soon)

11.Package in JAVA (coming soon)

12.Multithreading in JAVA (coming soon)

13.Error & Exception (coming soon)

14.Advance JAVA – I (coming soon)

15.Advance JAVA – II(coming soon)
