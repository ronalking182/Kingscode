---
title: "Presedence of Operator"
image: "/images/posts/java/java.jpeg"
excerpt:  'Operator are applied and evaluated based on precedence. For example ( +, - ) has less Precedence compared to ...'
date: '2022-04-06'
slug: 'presedence-of-operator'
keywords: 'presedence of operator' 
isFeatured: false
category: 'Java'
---

 Operator are applied and evaluated based on precedence. For example ( +, - ) has less
Precedence compared to ( * , / ) hence * and / are evaluated first .
In case we like to change this order , we use parenthesis

&nbsp;

## **Presedence & Associativity**

### **Presedence**

Highest presendece goes to * and / . They are then evaluated on the basis of left to right associativity

```java
Int a = 6 * 5 – 34/2;
Int b = 60/5 – 34*2;
```

Output:

```
My String is just a string
My String is 12.121000
```

&nbsp;

### **Associativity**

Associativity tells the direction of execution on an operation .It can either be left to right. 
 - (* / ) Left to Right 

 - (+ -)  Left to Right 

 - (++ , =)  Right to Left 

 &nbsp;


**Quick Quiz** – How will you write the following expression in JAVA ? 
1. x – y/2 
2. b2 – 4ac/2a 
3. v2 – v2 
4. a * b – d