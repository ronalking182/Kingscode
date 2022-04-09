---
title: "How to create Dark mode in react"
image: '/images/posts/how-to-create-dark-mode-in-react/reactDark.png'
excerpt: In this tutorial, I will be showing you  how to create  dark mode in react . Dark mode is a future that not only developers...
date: '2022-04-08'
slug: 'how-to-create-dark-mode-in-react'
isFeatured: false
category: 'CSS'
---

# How to create Dark mode in react

In this tutorial, I will be showing you  how to create  dark mode in react . Dark mode is a future that not only developers and programmers love to use, but also non-technical people  enjoy using it.

&nbsp;

# Prerequisites

I'm going to assume you have a basic understanding of the React framework.
Everyone is welcome to join in the fun. As a matter of fact, our program does not contain any "stateful" variables or lifecycle functions, we don't need them to make use of this feature.. Aim for simplicity (as in all situations). 

&nbsp;

We will be using `create react app` for this tutorial as it is an extremely easy way to quickly and easy establish a React application template that you can build on.

&nbsp;

## Initialize the project

Open up your command line and run `create-react-app dark-mode-example` but if you have your own existing project then disregard creating a new one 

&nbsp;

### Adding Styles

Dark/light settings will be determined in the following order of importance when the application loads:

1.User’s previous toggle setting

2.Use’s browser preference

3.Light mode

&nbsp;

Navigate to your root/main css file (App.css) and copy the following styles into it 

```css
:root{
--font-color:#333;
--link-color:cornflowerblue;
--background-color:#eee;
}

[data-theme="dark"]{
--font-color:#eee;
--link-color:lightblue;
--background-color:#333;
}

body{
background-color:var(--background-color);
color:var(--font-color);
}

a{
color:var(--link-color);
}
```

&nbsp;

Explanation:

So what was all those code you copied used for? let me explane:

1.the `:roots`selector represent the DOM tree, anything you put here will be available any where in your application. It is also where you create your CSS variable that holds the color for your light mood. It is always meant to come first before any other selector.

2.`[data-theme="dark"]`this is used to set the colors for our dark mood. It is called an attribute selector, we will use it to target any element with a`[data-theme="dark"]`

&nbsp;

## Adding the Toggle Button

Next we will create a custom checkbox that we will use as a toggle switch. But before then create a `src/DarkMode.js`and a `src/DarkMode.css`in your `DarkMode.js` put this inside

```jsx
import './DarkMode.css'

const DarkMode = () =>{
return(
  <div>
<span>light</span>
<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>
<span>dark</span>
  </div>
 )
}
export default DarkMode;
```

 Copy the following in your `src/DarkMode.css` file .

```css

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
```

&nbsp;


## The Main Deal

This section covers the main part that will put our dark mode to work. Go to your `DarkMode.js` file and add the following into it 

```jsx
import './DarkMode.css'

const DarkMode = () =>{

//create a function to set dark mode
const setDark = () => {
  // This is how we handle persistance,
  localStorage.setItem("theme", "dark");
  // set our html arttribute to the atribute of the dark theme
  document.documentElement.setAttribute("data-theme", "dark");
};

//create a function to set light mode
const setDark = () => {
  // This is how we handle persistance,
  localStorage.setItem("theme", "light");
  // set our html arttribute to use the :root content for light mood
  document.documentElement.setAttribute("data-theme", "light");
};

// this get the value (which theme to use) if it exist
const storedTheme = localStorage.getItem("theme");

//checks your browser to see the default theme if it dark
const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

//to toggle them
const toggleTheme  = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};

return(
  <div>
<span>light</span>
<label class="switch" htmlFor="checkbox">
  <input 
  type="checkbox"
onChange={toggleTheme}
defaultChecked={defaultDark} 
     />
  <span class="slider round"></span>
</label>
<span>dark</span>
  </div>
 )
}

export default DarkMode;
```

&nbsp;

Explanation:

1.We create functions called `setDark`and `setLight` which do exactly what the names describe.These should be as straightforward as feasible.

2.Local Storage is for persistent, so that even if we refresh a  page or leave it and come back again it will still remain the same where you left it .

3.we use `document.documentElement.setAtribute` to change the value on the html DOM element When that attribute is added then the `[data-theme="dark"]` selector from our CSS becomes active and the dark colors variables are set (and vice versa) .

4.The `storedTheme`  section  is where the "initial" state is established when the page is loaded before the actual toggle switch has been used. `storedTheme` gets the value from `localStorage` if it exists. `prefersDark` checks a media query for the user's browser settings for [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme). Lastly `defaultDark` is meant to check both of those and decide whether to default to dark mode based on the 3 rules of priority we established at the beginning of this tutorial. If it evaluates to true, we set the app to dark mode before the component even renders. *(Note the reason we can do this is we are targeting the `<html>` attribute which will already exist.).*

5.if the box is `checked`we enable dark mode, otherwise light mode.This is the [event handler](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers)
 function we have written to capture the *change* event that occurs when a user clicks the checkbox.We place the event handler onto the `onChange` attribute so it fires every time the checkbox changes.

6.To determine if the checkbox is enabled by default, we  use the `defaultDark`
 boolean value.

&nbsp;

 And there you have it 💥 , your Dark/Light mood in your react app has been set, you can decide to use this in your navbar component or use it where your users can easily  access it