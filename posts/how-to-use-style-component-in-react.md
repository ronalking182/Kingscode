---
title: "How to use Style component in React"
image: '/images/posts/style-component/style-component.png'
excerpt: 'Styled components is a CSS-in-JS tool that bridges the gap between components and styling, with a variety of features to get you started styling components in a reusable and effective way.' 
date: '2022-26-03'
slug: 'how-to-use-style-component-in-react'
isFeatured: false
category: 'CSS'
---




Styled components is a CSS-in-JS tool that bridges the gap between components and styling, with a variety of features to get you started styling components in a reusable and effective way. In this post, you'll discover the fundamentals of styled components and how to use them effectively in your React apps. Before starting this tutorial, you should have some experience with React. Check out our prior post on the subject if you're seeking for more styling possibilities for React components.

### **Why Styled Components?**

Styled components have the following benefits in addition to assisting you with scoping styles:

1. Automatic prefixing of vendors:Standard CSS properties can be used, and styled components will add vendor prefixes as necessary. 
2. Class names that are unique:Styled components are self-contained, and you won't have to bother about their names because the library will take care of that.
3. Styles that are no longer relevant are removed:Even if the styles are declared in your code, styled components delete them.

### **Installation**

Installing styled components is easy. You can do it through a [CDN](https://styled-components.com/docs/basics#installation) or with a package manager such as Yarn or npm 

```
yarn add styled-components
```

or npm

```
npm i styled-components
```

## **Starting Out**

To put it briefly, styled components use JavaScript’s template literal to bridge the gap between components and styles. So, when you create a styled component, what you’re actually creating is a React component with styles. It looks like this:

```jsx
import styled from "styled-components";

// Styled component named StyledButton
const Paragraph = styled.p`
  background-color: black;
  font-size: 32px;
  color: white;
`;

function Component() {
  // Use it like any other component.
  return <Paragraph> Hello </Paragraph>;
}
```

It Basically just creating a variable and equating it to `styled`    then a full stop “.” and then any HTML tag you want to render your  text with. 

Here, `Paragraph` is the styled component, and it will be rendered as an HTML “p” tag with the contained styles. `styled`  is an internal utility method that transforms the styling from JavaScript into actual CSS.

In raw HTML and CSS, we would have this:

```jsx
p {
  background-color: black;
  font-size: 32px;
  color: white;
}

<p> Hello </p>
```

Can we utilize props if styled components are React components? Yes, we certainly can.

**Adapting Based On Props**

Because styled components are functional, we can style elements dynamically with ease. Assume our page has two sorts of buttons, one with a black background and the other with a blue background. We don't need to make two different-looking components for them; we can change their look dependent on their props.

```jsx
import styled from "styled-components";

const StyledButton = styled.button`
  min-width: 200px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  /* The resulting background color will be based on the bg props. */
  background-color: ${props => props.bg === "black" ? "black" : "blue";
`;

function Profile() {
  return (
    <div>
      <StyledButton bg="black">Button A</StyledButton>
      <StyledButton bg="blue">Button B</StyledButton>
    </div>
  )
}
```

Because `StyledButton` is a React component that accepts props, we can assign a different background color based on the existence or value of the `bg` prop.

You’ll notice, though, that we haven’t given our button a `type`. Let’s do that:

```jsx
function Profile() {
  return (
    <>
      <StyledButton bg="black" type="button">
        Button A
      </StyledButton>
      <StyledButton bg="blue" type="submit" onClick={() => alert("clicked")}>
        Button B
      </StyledButton>
    </>
  );
}
```

Styled components can differentiate between the types of props they receive. They know that `type` is an HTML attribute, so they actually render `<button type="button">Button A</button>`, while using the `bg` prop in their own processing. Notice how we attached an event handler, too?

Speaking of attributes, an extended syntax lets us manage props using the `[attrs`](https://styled-components.com/docs/api#attrs) constructor Check this out:

```jsx
const StyledContainer = styled.section.attrs((props) => ({
  width: props.width || "100%",
  hasPadding: props.hasPadding || false,
}))`
  --container-padding: 20px;
  width: ${(props) => props.width}; // Falls back to 100%
  padding: ${(props) =>
    (props.hasPadding && "var(--container-padding)") || "none"};
`;
```

Notice how we don’t need a ternary when setting the width? That’s because we’ve already set a default for it with `width: props.width || "100%",`. Also, we used CSS custom properties  because we can!

Note: If styled components are React components, and we can pass props, then can we also use states? The library’s GitHub account has an issue addressing this very matter.

### EXTENDING STYLES

Let's imagine you're working on a landing page and you've set your container's max-width to a specific value to keep things centered. You have a `StyledContainer` for that:

```jsx
const StyledContainer = styled.section`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;
```

Then you realize that instead of 20 pixels of padding on both sides, you need a smaller container with 10 pixels of padding on both sides. Your initial instinct may be to create another styled component, and you'd be correct, but it won't take long for you to notice you're duplicating styles.

```jsx
const StyledContainer = styled.section`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

const StyledSmallContainer = styled.section`
  max-width: 1024px;
  padding: 0 10px;
  margin: 0 auto;
`;
```

Before you go ahead and create `StyledSmallContainer`, like in the snippet above, let’s learn the way to reuse and inherit styles. It’s more or less like how the `spread` operator works:

```jsx
const StyledContainer = styled.section`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

// Inherit StyledContainer in StyledSmallConatiner
const StyledSmallContainer = styled(StyledContainer)`
  padding: 0 10px;
`;

function Home() {
  return (
    <StyledContainer>
      <h1>The secret is to be happy</h1>
    </StyledContainer>
  );
}

function Contact() {
  return (
    <StyledSmallContainer>
      <h1>The road goes on and on</h1>
    </StyledSmallContainer>
  );
}
```

In your `StyledSmallContainer`, you’ll get all of the styles from `StyledContainer`, but the padding will be overridden. Keep in mind that, ordinarily, you’ll get a section element rendered for `StyledSmallContainer`, because that’s what `StyledContainer` renders. But that doesn’t mean it’s carved in stone or unchangeable.

### THE “AS” POLYMORPHIC PROP

With the as [](https://styled-components.com/docs/api#as-polymorphic-prop)polymorphic prop, you can swap the **end** element that gets rendered. One use case is when you inherit styles (as in the last example). If, for example, you’d prefer a `div` to a `section` for `StyledSmallContainer`, you can pass the `as` prop to your styled component with the value of your preferred element, like so:

```jsx
function Home() {
  return (
    <StyledContainer>
      <h1>It’s business, not personal</h1>
    </StyledContainer>
  );
}

function Contact() {
  return (
    <StyledSmallContainer as="div">
      <h1>Never dribble when you can pass</h1>
    </StyledSmallContainer>
  );
}
```

Now, `StyledSmallContainer` will be rendered as a `div`. You could even have a custom component as your value:

```jsx
function Home() {
  return (
    <StyledContainer>
      <h1>It’s business, not personal</h1>
    </StyledContainer>
  );
}

function Contact() {
  return (
    <StyledSmallContainer as={StyledContainer}>
      <h1>Never dribble when you can pass</h1>
    </StyledSmallContainer>
  );
}
```

### SCSS-LIKE SYNTAX

The CSS preprocessor Style  enables styled components to support SCSS-like syntax, such as nesting:

```jsx
const StyledProfileCard = styled.div`
  border: 1px solid black;

  > .username {
    font-size: 20px;
    color: black;
    transition: 0.2s;

    &:hover {
      color: red;
    }

    + .dob {
      color: grey;
    }
  }
`;

function ProfileCard() {
  return (
    <StyledProfileCard>
      <h1 className="username">John Doe</h1>
      <p className="dob">
        Date: <span>12th October, 2013</span>
      </p>
      <p className="gender">Male</p>
    </StyledProfileCard>
  );
}
```

### ANIMATION

Styled components have a `keyframes` helper that assists with constructing (reusable) animation keyframes. The advantage here is that the keyframes will be detached from the styled components and can be exported and reused wherever needed.

```jsx
import styled, {keyframes} from "styled-components";

const slideIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Toast = styled.div`
  animation: ${slideIn} 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
  border-radius: 5px;
  padding: 20px;
  position: fixed;
`;
```

### CSS HELPER

We've already shown how to change styles based on props. What if we wanted to take things a step further? This is made possible through the CSS helper function. Assume we have two text-input fields, each with a different color and two states: empty and active. This is something we can do:

```jsx
const StyledTextField = styled.input`
  color: ${(props) => (props.isEmpty ? "none" : "black")};
`; 
```

All’s well. Subsequently, if we need to add another state of filled, we’d have to modify our styles:

```jsx
const StyledTextField = styled.input`
  color: ${(props) =>
    props.isEmpty ? "none" : props.active ? "purple" : "blue"};
`;
```

Now the ternary operation is growing in complexity. What if we add another state to our text-input fields later on? Or what if we want to give each state additional styles, other than color? Can you imagine cramping the styles into the ternary operation? The `css` helper comes in handy.

```jsx
const StyledTextField = styled.input`
  width: 100%;
  height: 40px;

  ${(props) =>
    (props.empty &&
      css`
        color: none;
        backgroundcolor: white;
      `) ||
    (props.active &&
      css`
        color: black;
        backgroundcolor: whitesmoke;
      `)}
`;
```

We've improved our ternary syntax to accept additional styles, while also making it more comprehensible and organized. If the preceding statement appears to be incorrect, it is because the code is attempting to accomplish too much. So, let's take a step back and fine-tune:

```jsx
const StyledTextField = styled.input`
width: 100%;
height: 40px;

// 1. Empty state
${(props) =>
  props.empty &&
  css`
    color: none;
    backgroundcolor: white;
  `}

// 2. Active state
${(props) =>
  props.active &&
  css`
    color: black;
    backgroundcolor: whitesmoke;
  `}

// 3. Filled state
${(props) =>
  props.filled &&
  css`
    color: black;
    backgroundcolor: white;
    border: 1px solid green;
  `}
`;
```

Our refinement splits the styling into three different manageable and easy-to-understand chunks. It’s a win.

### STYLE SHEET MANAGER 

Like the CSS helper, `StyleSheetManager` is a helper method for modifying how styles are processed. It takes certain props — like `disableVendorPrefixes` (you can check out the  [full list](https://styled-components.com/docs/api#stylesheetmanager)) — that help you opt out of [vendor prefixes](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix) from its subtree.

```jsx
import styled, {StyleSheetManager} from "styled-components";

const StyledCard = styled.div`
  width: 200px;
  backgroundcolor: white;
`;

const StyledNav = styled.div`
  width: calc(100% - var(--side-nav-width));
`;

function Profile() {
  return (
    <div>
      <StyledNav />
      <StyleSheetManager disableVendorPrefixes>
        <StyledCard> This is a card </StyledCard>
      </StyleSheetManager>
    </div>
  );
}
```

`disableVendorPrefixes` is passed as a prop to `<StyleSheetManager>`. So, the styled components wrapped by `<StyleSheetManager>` would be disabled, but not the ones in `<StyledNav>`.

### EASIER DEBUGGING 

When introducing styled components to one of my colleagues, one of their complaints was that it’s hard to locate a rendered element in the DOM — or in React Developer Tools, for that matter. This is one of the drawbacks of styled components: In trying to provide unique class names, it assigns unique hashes to elements, which happen to be cryptic, but it makes the `displayName` readable for easier debugging.

```jsx
import React from "react";
import styled from "styled-components";
import "./App.css";

const LoginButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid red;
`;

function App() {
  return (
    <div className="App">
      <LoginButton>Login</LoginButton>
    </div>
  );
}
```

By default, styled components render `LoginButton` as `<button class="LoginButton-xxxx xxxx">Login</button>` in the DOM, and as `LoginButton` in React Developer Tools, which makes debugging easier. We can toggle the `displayName` boolean if we don’t want this behavior. This requires a Babel configuration.

**Note**: In the documentation, the package `babel-plugin-styled-components` is specified, as well as a `.babelrc` configuration file. The issue with this is that, because we’re using `create-react-app`, we can’t configure a lot of things unless we eject. This is where Babel macros come in.

We’ll need to install `babel-plugin-macros` with npm or Yarn, and then create a `babel-plugin-macros.config.js` at the root of our application, with the content:

```jsx
module.exports = {
  styledComponents: {
    displayName: true,
    fileName: false,
  },
};
```

With the `fileName` value inverted, the `displayName` will be prefixed with the file name for even more unique precision.

We also now need to import from the `macro`:

```jsx
// Before
import styled from "styled-components";

// After
import styled from "styled-components/macro";
```

## Conclusion

Do not take advantage of the fact that you can now compose your CSS programmatically. For what it's worth, try to keep your styled components as sane as possible. Don't try to write extensive conditionals, and don't assume that everything should be stylized. Also, don't over-abstract by developing fledgling styled components for use cases that you only have a hunch are coming up.

### FURTHER RESOURCES 

1. [Documentation](https://styled-components.com/docs), Styled Components
2. [Building a Reusable Component System with React.js and styled-components](https://levelup.gitconnected.com/building-a-reusable-component-system-with-react-js-and-styled-components-4e9f1018a31c), Lukas Gisder-Dubé
3. [Usage with Next.js](https://styled-components.com/docs/advanced#nextjs)
4. [Usage with Gatsby](https://styled-components.com/docs/advanced#gatsby)