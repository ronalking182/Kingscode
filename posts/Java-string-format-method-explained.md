---
title: "Java String format() method explained"
image: "/images/posts/java/java.jpeg"
excerpt: The  format method is similar to the printf method. You can concatenate a string  using this method and at the same time...'
date: '2022-04-07'
slug: ‘Java-string-format-method-explained’
keywords: 'Java String format method explained, format() method'
isFeatured: false
category: 'Java'
---

The  format method is similar to the printf method. You can concatenate a string  using this method and at the same time, you can format the output of concatenated string. In this tutorial, we will see several examples of Java String format() method. with the help of the format() method, we can 

&nbsp;

1.concatenate string using the format method

2.format a value passed and concatenate it at the same time 

&nbsp;

the format() can do what the printf() method can do and much more

Example

```java
public class Example{  
   public static void main(String args[]){  
	String str = "just a string";  
		
	String formattedString = String.format("My String is %s", str);  
		
	String formattedString2 = String.format("My String is %.6f",12.121);

	System.out.println(formattedString); 
	System.out.println(formattedString2);  
   }
}
```

Output:
```
My String is just a string
My String is 12.121000
```