# Layout

## docs

All of the documentation for the boilerplate and any project specific documentation lives here.

## public

The index.html, favicon, and manifest.json live here.

## src

The actual guts of the React project

### containers

* The ['smart' React components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
* Each container should live in it's own folder (ex: containers/App)
* The container should be self sufficient,
* Any container specific dump components should live in a file inside the container folder
  * Ex: ProfileForm should live inside the Profile container folder in a file called profileForm.js
* components.js should always be reserved for [styled-components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) only
* index.js is the actual smart container

### components

* The dumb React components
* Each component should live in it's own folder (ex: ListItem)
* In order for a component to live inside the components folder it _MUST_ be able to be reused across multiple containers/components
  * We shouldn't see a ProfileForm in it's own component folder
* Components should be stateless functions whenever possible
  * Exceptions would be for things that require common UI state

### api

* Object that abstracts away the fetch calls
* You should never use plain fetch in a saga

### constants

* Any constants the appliation needs
* Most notably the redux actions live in ActionTypes.js

### images

* Pretty pictures

### reducers

* Redux reducers. See [Redux Docs File](https://github.com/Equitas/react-boilerplate/blob/master/docs/redux.md)

### sagas

* Redux-Saga functions. See [Redux-Saga Docs File](https://github.com/Equitas/react-boilerplate/blob/master/docs/redux-saga.md)
