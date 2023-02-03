1. Why do we need to `import React from "react"` in our files?
   React is what defines JSX

2. If I were to console.log(page) in index.js, what would show up?
   A JavaScript object. React elements that describe what React should
   eventually add to the real DOM for us.

3. What's wrong with this code:

```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

We need our JSX to be nested under a single parent element

4. What does it mean for something to be "declarative" instead of "imperative"?
   Declarative means I can tell the computer WHAT to do
   and expect it to handle the details. Imperative means I need
   to tell it HOW to do each step.

5. What does it mean for something to be "composable"?
   We have small pieces that we can put together to make something
   larger/greater than the individual pieces.

6. What is a React component?
   A function that returns React elements. (UI)

7. What's wrong with this code?

```
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
```

Any components need to begin with uppercase letter => MyComponent()

8. What's wrong with this code?

```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root"))
```

The first parameter should <Header /> like an HTML tag not function ()

9. What do props help us accomplish?
   Make a component more reusable.

10. How do you pass a prop into a component?
    <MyAwesomeHeader title="???" />

11. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
    DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
    No, because the JSX we use to describe native DOM elements will
    be turned into REAL DOM elements by React. And real DOM elements
    only have the properties/attributes specified in the HTML specification.
    (Which doesn't include properties like `blahblahblah`)

12. How do I receive props in a component?

```
function Navbar(props) {
   return (
      <header>
      ...
      </header>
   )
}
```

Use . syntax. Ex: props.name, props.phone,...

13. What data type is `props` when the component receives it?
    An object!

14. What does the `.map()` array method do?
Returns a new array. Whatever gets returned from the callback
function provided is placed at the same index in the new array.
Usually we take the items from the original array and modify them
in some way.


15. What do we usually use `.map()` for in React?
Convert an array of raw data into an array of JSX elements
that can be displayed on the page.


16. Why is using `.map()` better than just creating the components
   manually by typing them out?
It makes our code more "self-sustaining" - not requiring
additional changes whenever the data changes.
