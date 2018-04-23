# Coding Dojo Bootcamp Assignment  
## React / Basics / Composable Squares

### Assignment details  
Just like functions can call other functions, components can reference other components. For example, we can have an App component that spits out multiple Square components, each with a different color and label. Try your hand at building the UI below.  

Before you begin, know that React's props object is already configured to apply CSS styling to your elements. You just need to assign a style property to an object whose own keys mirror CSS attributes, but in camelCase instead of hyphens. For example:  

```
ReactDOM.render(
React.createElement('h1', { style: { backgroundColor: 'pink' } }, 'This text should have a pink background!'),
document.getElementById('app')
);
```

