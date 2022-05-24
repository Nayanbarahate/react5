import React from 'react'



export default function MYHOME() {
   
  return (
    <div>
      <center>
       <h1>Pure Components</h1>
       <p>A React component is considered pure if it renders the same output for the same state and props.In the case of Pure Components, the React components do not re-render blindly without considering the updated values of React “props” and “state”. If updated values are the same as previous values, render is not triggered.</p>
       <h1>High order Components</h1>
       <p>A higher-order component is a function that takes a component and returns a new component.</p>
       <b>Example:-</b>
       <h3>const EnhancedComponent = higherOrderComponent(WrappedComponent);</h3>
       </center>
    </div>
  )
}
