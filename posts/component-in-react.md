---
title: "React Components"
image: "/images/posts/react/component.png"
excerpt: "A component is a single piece of interface that is isolated from the rest of the system. One of the futures of react is that you can break down large amount of codes into component."
date: '2022-04-01'
slug: 'component-in-react'
keywords: 'component, component in react'
isFeatured: false
category: 'React'
---

# ****React Components****

&nbsp;

## What is a component

A component is a single piece of interface that is isolated from the rest of the system. One of the futures of react is that you can break down large amount of codes into component. Everything in React is a component. Because React is built on components, all of our code must be contained within a component.

&nbsp;

Even plain HTML tags are component on their own, and they are added by default.

&nbsp;

The next 2 lines  do the same thing. One with **JSX**, one without, by injecting `<h1>Hello World!</h1>` into an element with id `app`

&nbsp;

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('app'))

ReactDOM.render(
  React.createElement('h1', null, 'Hello World!'),
  document.getElementById('app')
)
```

&nbsp;

This is how we can deal with the built-in HTML components using React, but you'll quickly outgrow them. React excels in allowing us to build a user interface by combining custom components.

&nbsp;

# **Custom components**

There are 2 ways to define a component in React.

A function component:

&nbsp;

```jsx
const HomePage = () => {
  return (
    <div>
      <h1>Title</h1>
      <p>Description</p>
    </div>
  )
}
```

&nbsp;

A class component:

```jsx
import React, { Component } from 'react'

class BlogPostExcerpt extends Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <p>Description</p>
      </div>
    )
  }
}
```

&nbsp;

Up until recently, class components were the only way to define a component that had its own state, but with the help of React Hooks, we can now create component in react with functions.