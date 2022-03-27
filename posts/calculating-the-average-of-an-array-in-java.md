---
title: "Calculating The Average Of An Array In Java"
image: "/images/posts/java/java.jpeg"
excerpt: 'With this article, I will share with you  how to calculate the average of an array in Java using a method.' 
date: '2022-27-03'
slug: 'calculating-the-average-of-an-array-in-java'
isFeatured: false
category: 'Java'
---

With this article, I will share with you  how to calculate the average of an array in Java using a method.

You must first learn how to create a method before you can develop a method that finds the average of an array. If you already know how to build a method, go ahead and skip to the next section; otherwise, I recommend reading my Java methods article.

## Below are the steps in calculating the average of an array

Step 1

1. create a method name with an argument of an array e.g

<aside>
💡 your method should have a return type int or double (  your choice )

</aside>

```java
public static double AverageNumber(double[] array){}
```

1. Inside your method  initialize  2 variable depending on your array type or method return type ( it advisable to use your method return type), make the both equals to 0  

```java
public static double AverageNumber(double[] array){
        int sum = 0;
        double avg = 0;
}
```

1. Loop through your array and  add each value in ur array to sum variable, and then divide the sum by the length of the array and attach it to the second variable e.g

```java

public static double AverageNumber(double[] array){
        int sum = 0;
        double avg = 0;
        for(int i=0; i < array.length; i++)
            sum += array[i];
        avg = sum / array.length;
        return avg;
    }
```

**Lets test our our method** 

test Example ;

```java
public class Average {
    public static void main(String[] args){
        double[] num = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 };
        double AverageValue = AverageNumber(num);
    System.out.println(AverageValue);
    }
    public static double AverageNumber(double[] array){
        int sum = 0;
        double avg = 0;
        for(int i=0; i < array.length; i++)
            sum += array[i];
        avg = sum / array.length;
        return avg;
    }
}

//output: 6.0
```