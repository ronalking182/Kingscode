---
title: "Finding The Highest And The Lowest value In An Array In Java"
image: "/images/posts/java/java.jpeg"
excerpt: 'To develop a method that retrieves the greatest value in an array, you must first understand how to create a method.' 
date: '2022-27-03'
slug: 'finding-the-highest-and-the-lowest-value-in-an-array-in-java'
keywords: 'Finding The Highest And The Lowest value In An Array In Java'
isFeatured: false
category: 'Java'
---

To develop a method that retrieves the greatest value in an array, you must first understand how to create a method. If you don't know how to create a method, I recommend reading my article on Java methods.

## Below are the steps to retrieves the greatest value in an array

Step 1

1. create a method name with an argument of an array e.g

<aside>
💡 your method should have a return type int or double (  your choice )

</aside>

```java
public static int Highest(int[] array) {}
```

1. Inside your method  initialize variable depending on your array type or method return type ( it advisable to use your method return type), make it equals to the argument of your method with an index of 0 e.g

```java
public static int Highest(int[] array) {
        int high = array[0];
}
```

1. Loop through your array and compare each value to your variable you initialized earlier  e.g

```java

public static int Highest(int[] array) {
        int high = array[0];
        for (int i = 0; i < array.length; i++) {
           if(array[i] > high){
              high = array[i];
           }
        }
    return high;
    }
```

Almost the same thing for finding lowest , the only difference is in the for loop like so  

```java
 for (int i = 0; i < array.length; i++) {
           if(array[i] < low){
              low = array[i];
           }
//you can choose  to change the varible name to low if u want 
```

**Lets test our our method** 

test Example with highest ;

```java
public class Highset {
    public static void main(String[] args) {
        int[] num = {1, 3, 5, 7, 10, 11, 15, 2, 1};
        int highest = Highest(num);
        System.out.println(highest);
    }
    public static int Highest(int[] array) {
        int high = array[0];
        for (int i = 0; i < array.length; i++) {
           if(array[i] > high){
              high = array[i];
           }
        }
    return high;
    }
}

//output:15
```

test Example with lowest ;

```java
public class Highset {
    public static void main(String[] args) {
        int[] num = {1, 3, 5, 7, 10, 11, 15, 2, 1};
        int lowest = Lowest(num);
        System.out.println(highest);
    }
    public static int Lowest(int[] array) {
        int low = array[0];
         for (int i = 0; i < array.length; i++) {
           if(array[i] < low){
              low = array[i];
           }
        }
    return low;
    }
}

//output:1
```