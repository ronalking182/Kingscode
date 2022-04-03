---
title: "How To Create A Methods In Java"
image: "/images/posts/java/java.jpeg"
excerpt: 'With this article, I will share with you  how to create a method  you can use to improve your java program performance and architecture.' 
date: '2022-27-03'
slug: 'how-to-create-a-method-in-java'
keywords: 'java method, java method example, java method definition'
isFeatured: false
category: 'Java'
---



# Methods In Java

With this article, I will share with you  how to create a method  you can use to improve your java program performance and architecture.

   Methods /  functions  makes it easier for developers  to re-create a particular action or solve a particular problem in programming without repeating one’s self  and  to build programs in very few steps

# **Prerequisites? Not really**

In order to follow this article, you don’t have to be an expert in Java.  Basic knowledge is enough to get the hang of this article. I also won’t go into basic details like creating a  java project   or Setting it up.

## How to create a method

Below are steps in creating method and everything you need to know about method in java

1. A method is either **public, private, protect**. Any other Access modifier will be discussed latter in this article if needed. 
2. A method can either  have a return type or can be void( which means it does not  return anything)
3. A method can take in an argument( perimeter ) if needed

Below is an example of a method without a return type

```java
public static void printHello(){
System.out.print("Hello");
}
```

Below is an example of a method with a return type

```java
public static String printHello(){
return "hello World";
}
```

Below is an example of a method with an argument

```java

public static int printHello(int num){
return num;
}
```

<aside>
💡 Note:Method with return type should be assign a variable name you want to use them Example

</aside>

let say we want to use our method with return type printHello

```java

public class Sample {
    public static void main(String[] args){
Strint hello = printHello();
System.out.println(hello);
}

public static String printHello(){
return "hello World";
  }
}
```

```java
//output: hello World
```

<aside>
💡 Method can either be static ( like the examples used in this article) or not

</aside>