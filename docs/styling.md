# Styling

Use [styled-components](https://github.com/styled-components/styled-components) whenever feasible because they allow for greater flexibility with props. And if you ever come across a situation where you need to change css classnames based on props, ponder long and hard why you aren't using styled components.

A common use case here would be to style a custom html element or bootstrap component that we want to have a different font color or background color based on the props we pass in.

In the local `components.js` file, we might have something like a styled bootstrap `Link` component, like so:

```
export const StyledLink = styled(Link)`
    color: ${props => props.color || 'white'};
    font-weight: bold;
    &:hover {
        color: ${props => props.hoverColor || 'blue'};;
        font-size: 105%;
        text-decoration: none;
    };`
```

You would then use in your components `index.js` file just like any other component, ex:

````
<StyledLink to={{ pathname: '/stakeholder/Neurology' }}
            color="#0165b3"
            hoverColor="#0165b3">
            Coming Soon
</StyledLink>
                        ```

Note that the props are passed in just like props on any other component, and et viola, you have repeatable styling with minimal overhead.


Use CSS whenever neccessary. Sometimes external packages need CSS to play well with React and that's fine, just put the css in a styles.css file inside the same directory as the _COMPONENT_ that needs access to the styles.
````
