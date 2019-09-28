## What problem does the context API help solve?
   - It simplifies state management & helps keeps our state relatively clean.
   - We use this when we have data that lots of components share (user, theme, etc), or when we have to pass data through intermediate components.

   <br />
   <br />


## In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   - **Actions** are information that contain a type of action & data that we want associated with the action type.

   - **Reducers** specify how the application's state changes in response to actions sent to the store.

   - **Store** holds the complete state tree of your app.

   <br />
   <br />


## What is the difference between Application state and Component state? When would be a good time to use one over the other?

   - **application state** is global; use this when data needs to be accessed from anywhere
   - **component state** is local & data is only available within that component.  Good for things like if a mouse is currently pressed in that component & the state of that component changes based on that.

<br />
   <br />



## Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A middleware that provides the ability to handle asynchronous operations inside our action creators.


Intercepts the normal Redux flow & allows something to happen before actions make it to the reducer.

 <br />
   <br />



## What is your favorite state management system you've learned and this sprint? Please explain why!

Redux, you can do more; such as add "please wait..." with middleware. 
