---
title: "How To Sum Up An  Array In Java"
image: "/images/posts/java/java.jpeg"
excerpt: 'With this article, I will share with you  how to create a method  you can use to improve your java program performance and architecture.' 
date: '2022-03-27'
slug: 'how-to-sum-an-array-in-java'
keywords: 'how to sum an array in java adding an array in java'
isFeatured: false
category: 'Java'
---


To create a method that sum’s up an array,  first of all you have to know how to create a method, if you know how to create a method then let dive right in, else I suggest u look up my article on Java method[link](https://kingscod.com/blog/how-to-create-a-method-in-java)

&nbsp;

## Below are the steps to create a method that sum’s up an array

Steps

1. create a method name with an argument of an array e.g

<aside>
💡 your method should have a return type int or double (  your choice )

</aside>

```java
public static int sumMyArray(int[] array){}
```

&nbsp;


1. Inside your method  initialize variable depending on your array type or method return type ( it advisable to use your method return type), make it equals to 0 e.g

```java
public static int sumMyArray(int[] array){
 int sum = 0;
}
```

&nbsp;

2. Loop through your array and  add each value in ur array to sum e.g

```java

public static int sumMyArray(int[] array){
 int sum = 0;
for(int i=0; i < array.length; i++)
        sum += array[i];
  return sum;
}
```

&nbsp;

**Lets test our our method** 

test Example
```java
public class Sample {
    public static void main(String[] args){
        int[] num = {1, 3, 5, 7, 10, 11, 15, 2, 1};
        int sum = sumMyArray(num);
        System.out.println(sum);
 
    }

    public static int sumMyArray(int[] array){
            int sum = 0;
            for(int i=0; i < array.length; i++)
                sum += array[i];
            return sum;
        }
}

//output:55
```