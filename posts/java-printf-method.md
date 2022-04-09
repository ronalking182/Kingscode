---
title: "Java “printf()” method"
image: "/images/posts/java/java.jpeg"
excerpt: The printf method  in Java can be used to write a formatted string to the console with different format options.'
date: '2022-04-07'
slug: 'java-printf-method'
keywords: 'java printf method'
isFeatured: false
category: 'Java'
---

# ****Java printf method****

The printf method  in Java can be used to write a formatted string to the console with different format options. It is also a method of the PrintStream.

### Syntax available for printf()

```java
System.out.printf(string);
System.out.printf(format, arguments);
System.out.printf(locale, format, arguments);
```
&nbsp;

****Format specifiers****

&nbsp;

 Format specifiers always start with “%”, following the ‘%’ sign, a format specifier includes flags

```java
%<flags><width><.precision>conversion-character
```

&nbsp;

Although, all the specifiers mentioned in the brackets are optional, format specifier consists of % accompanied with a conversion character

&nbsp;

- The <flags> define the standard ways for modifying the output. it is also a  common way  for formatting integers and floating-point numbers.

- The <width> specifies the length of the field for printing the argument

- The <.precision> specifies the number of digits of precision when printing a floating-point value

- A conversion character determines how the argument will be formatted

&nbsp;

|Specifier |Explanation |
--- | ---|
|%c|Format characters
|%n|add a new line character
|%o|Format octal numbers (base 8)
|%d|Format decimal (integer) numbers (base 10)
|%i|Format integers (base 10)
|%x|Format numbers in hexadecimal (base 16)
|%e|Format exponential floating-point numbers
|%s|Format string of characters
|%u|Format unsigned decimal (integer) numbers
|%f|Format floating-point numbers

&nbsp;

Example 

&nbsp;

1.String Formating:

we use the %s or %S when it comes to formatting strings using printf in Java,

```java
System.out.printf("%s%n", "hello world!");
System.out.printf("'%S' %n", "hello world!");
```

output:

```
hello world!
'HELLO WORLD!'
```

&nbsp;

2.formating Integer:

With the use %d specifier you can format any type of integer available in java e.g byte, short, int, long

```java
System.out.printf("it is an integer: %d%n", 10000);
```

output

```java
it is an integer: 10000

```

Output can also be formatted for different locales by overloading the method with the local parameter.

```java
System.out.printf(Locale.US, "%,d %n", 12300);
System.out.printf(Locale.ITALY, "%,d %n", 10000);
```

output:

```
12,300
10.000
```

&nbsp;

3.Formatting floating numbers and doubles:

To format a float number, you have to use the %*f*
 specifier

```java
System.out.printf("%f%n", 3.1423);
```

output: 

```
3.142300
```

EX

```java
System.out.printf("'%3.2f'%n", 3.1423);
```

Now the minimum width of our floating number will be 3, and the length of the decimal part will be 2 so the output will be

```
3.15
```

&nbsp;

4.Formatting a Boolean value

To format Boolean values, we use the *%b*
 format specifier

```java
boolean adult = true; 
boolean member = false;
  System.out.printf(“%b%n”, adult);
 System.out.printf("%b%n", member);
```

The output will be:
```
true
false
```