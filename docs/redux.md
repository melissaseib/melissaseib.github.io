# Redux

## Intro

Redux is a tricky beast and should only be used if the project requires it. A common use case for redux is storing state from an external application, aka API call responses.

A simple way to conceptualize redux is as global state. In addition to API data that we may want accessible in multiple components, we can also capture data from a child component and re-use it in a container component by storing it in the global redux state.

An example flow would be an input on a child component that takes in information to create a new user.

For each of the input fields, we'd want a controlled piece of local state (ex. when the "username" input changes, the `username` piece of local state will be set with `this.setState{username: input.username}`, or something to that effect). Then, when we submit form and trigger a `createUser` submit function, all of the controlled local state from the form inputs (let's say there's `username`, `email`, `phoneNumber`, and `cityAndState` fields) can get bundled up into one data object to get placed in the redux global state, ex `let submitData = {username: this.state.username, email: this.state.email, phoneNumber: this.state.phoneNumber, cityAndState: this.state.cityAndState}`. Here we're using local state to keep track of the changes in the form, but only saving that data to Redux once every field is filled out.

The important distinction here is that we don't want to keep track of every piece of state change in our local component at the global level, but we DO want to have all of the user information at the global level once the form is filled out, so we can redirect back to a homepage or profile component on form submit and provide a nice customized header greeting of `Hello {this.props.username}` using the username that we've passed in as a prop from Redux, or something to that effect.

If you need a primer on redux, take a look at the [docs](https://redux.js.org/introduction)

## Redux State Structure

The root reducer is found in `reducers/index` which imports the reducers found in the rest of the folder.

By default, the redux state will look like this:

```
{
    user: {
        email: '',
        name: '',
    }
}
```

## ImmutableJS - I get by with a little help rom my friends

To enforce the core concept of redux, immutability, we use [immutable.js](https://facebook.github.io/immutable-js/docs/#/) library created by Facebook
