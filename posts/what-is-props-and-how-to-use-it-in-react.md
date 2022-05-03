---
title: "What is “Props” and how to use it in React?"
image: "/images/posts/react/p.png"
excerpt: "In this article, I will go over one of React's most crucial concepts: props. I'll teach you how to use them to maintain a dynamic data flow in your program."
date: '2022-04-29'
slug: 'what-is-props-and-how-to-use-it-in-react'
keywords: 'props in react, react props '
isFeatured: false
category: 'React'
---

An important React concept, props, will be covered in this article. My tutorials will show you how to keep your program's data moving in a dynamic way.

&nbsp;

### ****Prerequisites****

You'll need the following items to follow along with this tutorial:

&nbsp;
-A React app.

&nbsp;

## ****What are props in React?****

&nbsp;

The React Frame work  has a particular name for "properties," "props." It stands for "properties" and is used for "passing data from one component to another."

In React, we use props to transfer data across components. Here's how data is sent from one component to another:

This is what my `App.js` component looks like:

```jsx
function App() {
  return (
    <div className="App">
      
    </div>
  )
}

export default App
```

Now let's create another component named `Equipment.js`. The information in this file pertains to a designer's most-loved Tools. As a result, the code will look somewhat like the following:

```jsx
function Equipment() {
    return (
      <div>
        <h1>My name is John James.</h1>
        <p>My favorite design tool is Spline.</p>
      </div>
    );
}

export default Equipment
```

We will now import this component into the `App` component:

```jsx
import Tool from "./Equipment"

function App() {
  return (
    <div className="App">
      <Equipment/>
    </div>
  )
}

export default App
```

Let's assume that the `Equipment.js` Designers and their favorite tools will be described using a component that may be reused across other components.

This component's data is hard coded, despite the fact that React makes it easy to import its functionality. In order to maintain consistency between components, we'll either have to rewrite the logic for all of them or rely on props.

Props, in case you're unfamiliar, allow us to dynamically reuse the functionality of a component. As a result, the component's data will not be a one-way flow. Because of this, any other component that relies on this logic can have its data updated to fit the new requirements.

## ****How to use props in React****

Two methods of using props will be covered in this section: one without de-structuring, and the other with.

### ****How to use props without destructuring****

You must supply props as an argument to your function in order to use it. This works in a similar way to supplying parameters to JavaScript functions. Here's an illustration:

```jsx
function Equipment(props) {
    return (
      <div>
        <h1>My name is {props.name}.</h1>
        <p>My favorite design tool is {props.tool}.</p>
      </div>
    );
}

export default Equipment
```

 Explanation 

Step 1:

 `function Equipment(props){}` . This automatically allows you to use props in your React app's component.

Step 2:

It's time to put them where you need them in your code.

```jsx
return (
 <div>
        <h1>My name is {props.name}.</h1>
        <p>My favorite design tool is {props.tool}.</p>
      </div>   
 );
```

Step 3:

We've completed our props, so the next step is to populate them with information. `Equipment` component has already been imported  and it appears in the browser currently as:

```
My name is .
My favorite design tool is .
```

So that your props don't show up as empty when declared, you can provide default data for them (optional)

Remember that the `App` component is now in this condition.

```jsx
import Tool from "./Equipment"

function App() {
  return (
    <div className="App">
      <Equipment/>
    </div>
  )
}

export default App
```

To do this, you pass in the data like attributes. It looks like this:

```jsx
import Tool from "./Equipment"

function App() {
  return (
    <div className="App">
      <Equipment name="John James" tool="Figma"/>
    </div>
  )
}

export default App
```

Notice the change?  from `<Equipment/>` to `<Equipment name="John James" tool="Spline"/>`. This will not throw an error in  your way because those attributes are attached to the props created in the `Equipment` component.

You should have this in your browser

```jsx
My name is John James.
My favorite design tool is Figma.
```

It's now possible to dynamically populate any component with data from the `Equipment` component.  You can declare as many props as you want.

In the next section, you will learn how to use destructuring with props.

## ****How to use props with destructuring****

The code for this section is completely alike as the last section except for the method for declaring the props. If you do not know how to use destructuring in JavaScript then check out [this](https://www.freecodecamp.org/news/how-to-use-es6-javascript-features-in-react/)
 article

In the previous section, we did:

```jsx
 function Equipment(props) {
    return (
      <div>
        <h1>My name is {props.name}.</h1>
        <p>My favorite design tool is {props.tool}.</p>
      </div>
    );
}

export default Equipment
```

But  with destructuring  you simply do this:

```jsx
function Equipment({name, tool}) {

    return (
      <div>
        <h1>My name is {name}.</h1>
        <p>My favorite design tool is {tool}.</p>
      </div>
    );
}

export default Equipment
```

The difference is at  the first line of your function. Instead of passing `props` as an argument, we destructured and passed in the variables as the function's argument.

 nothing else changes apart from that .

## ****Conclusion****

This tutorial covered all you need to know about using props and dynamically passing data between your components.

The greatest way to grasp these principles is to put them into practice and build awesome things with them, so don't just read through them; go build as well.