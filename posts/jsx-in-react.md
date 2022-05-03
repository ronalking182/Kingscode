---
title: "JSX in React:Explained with Examples"
image: "/images/posts/react/props.jpeg"
excerpt: "In  React framework, JSX is a key notion. As a result, if you fully grasp it, you'll be able to write better React code."
date: '2022-04-28'
slug: 'jsx-in-react'
keywords: 'jsx, jsx in react '
isFeatured: false
category: 'React'
---

In  React framework, JSX is a key notion. As a result, if you fully grasp it, you'll be able to write better React code.

&nbsp;

While React can function without JSX, it is better suited for working with components, so it benefits greatly from JSX.

&nbsp;

Using JSX initially appears to be a combination of HTML, JavaScript (and, as you'll see, CSS).

&nbsp;

However, this is not the case because using JSX syntax is essentially developing a declarative syntax for a component UI. And you describe that UI in JavaScript, which allows you to do a lot of cool stuff. 

&nbsp;

## ****What is JSX?****

<aside>
💡 JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together

</aside>

&nbsp;

JSX allow  you to write HTML/XML-like structures (e.g., DOM-like tree structures) in the same file where you write JavaScript code, then preprocessor will transform these expressions into actual JavaScript code. Just like XML/HTML, JSX tags have a tag name, attributes, and children.

&nbsp;

Take a look at the below code:

```jsx
const tag = <h1>I am a h1 tag</h1>
```

&nbsp;

Here is an example of a JSX syntax in JSX file and see the corresponding JavaScript code which transforms by preprocessor(babel).

```jsx
<div>Hello Kingscod</div>
```

&nbsp;

**Corresponding Output**

```jsx
React.createElement("div", **null**, "Hello JavaTpoint");
```

&nbsp;

The above line creates a **react element** and passing **three arguments**
 inside where the first is the name of the element which is div, second is the **attributes** passed in the div tag, and last is the **content** you pass which is the "Hello Kingscod."

&nbsp;

### **Nested Elements in JSX**

If you want to use more than one element, you must wrap it in one container element. Here, we use **div** as a container element which has **three**  nested elements inside it

```jsx
 
function App(){   
      return(  
         <div>  
            <h1>Kingcod</h1>  
          <h2>Learing JSx</h2>  
            <p>This website contains the best CS tutorials.</p>  
         </div>  
      );    
}  
export default App;
```

&nbsp;

### **JSX Attributes**

JSX also allows the use of attributes just like HTML element. JSX uses **camelcase**
 naming convention for attributes rather than standard naming convention of HTML ,We can also use our own custom attributes in JSX

&nbsp;

**using Camelcase**

-`onchange` => `onChange`

-`onclick` => `onClick`

-`onsubmit` => `onSubmit`

&nbsp;

```jsx
function App(){   
      return(  
         <div className="contianer">  
            <h1 className="title">Kingcod</h1>  
          <h2 className="header">Learing JSx</h2>  
            <p>This website contains the best CS tutorials.</p>  
         </div>  
      );    
}  
export default App;
```

&nbsp;

#### Arttributes can either be 

1.**As String Literals:**We can specify the values of attributes in double quotes:

```jsx
function Example(){   
      return(  
         <div className="contianer">  
            <h1 className="title">Example Component</h1>   
         </div>  
      );    
}  
export default Example;
```

&nbsp;

1. **As Expressions:**We can specify the values of attributes as expressions using curly braces {}, the expression can be anything e.g an array, object, strings, etc. In this example i will be using a string

```jsx
function Example(){  
const content = "paragraph" 
const design = "contianer"
      return(  
         <div className={design}>  
            <p className={content}>Example Component</p>   
         </div>  
      );    
}  
export default Example;
```

&nbsp;

### ****JS in JSX****

Whenever you need to add  JS, all you need to do is to  put it inside curly braces `{}`.  Curly braces accept *any* JS code For example here’s how to use a constant value defined elsewhere:

&nbsp;

```jsx
function App(){ 
const title = "Kingcod"
const tutorial = "JSX"
      return(  
         <div>  
            <h1>{title}</h1>  
          <h2>Learing {tutorial}</h2>  
            <p>This website contains the best CS tutorials.</p>  
         </div>  
      );    
}  
export default App;
```

&nbsp;

### **JSX Comments**

With JSX  we can  comments  any block of code by beginning it with /* and ends with */ and wrapping them in curly braces {} just like in the case of JSX expressions

```jsx
function App(){   
      return(  
         <div className="contianer">  
            <h1 className="title">Kingcod</h1>  
          <h2 className="header">Learing JSx</h2>  
            {/* This is a comment in JSX */} 
         </div>  
      );    
}  
export default App;
```

&nbsp;

### **JSX Styling**

Styling in JSX isn’t that hard, we just need to give our JSX tag a class name and either style it with external CSS or internal CSS. to style with external CSS all we need to do is  give our JSX a class name, we will have to put `className`   a**s string literals** attribute, then import our css file into the component we want to use it in  ( in this case our `styled.css` in in the same folder as our `App.js`):

&nbsp;

```jsx
import "./styles.css"
function App(){   
      return(  
         <div className="contianer">  
            <h1 className="title">Kingcod</h1>  
          <h2 className="header">Learing JSx</h2>  
         </div>  
      );    
}  
export default App;
```

&nbsp;

 Internal styling :

```jsx
function App(){
const myStyle = {  
         fontSize: 80,  
         fontFamily: 'Courier',  
         color: '#003300'  
      }
return(
	<div>
	<h1 style = {myStyle}>www.kingscod.com</h1>
	</div>
 );
}
```