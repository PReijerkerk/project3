// utilized when running "yarn test"
import React from 'react';
import ErrorBoundary from "./errorBoundary"
import { mount } from 'enzyme';

// this is a fake child comp that will test the ErrorBoundary
const Child = () =>{
throw "error"
}

// swallowErrors is to prevent console.error (the red error seen related to this specific test), this
//will be local to this test and will not prevent other console.error tests to be logged in react.
const swallowErrors = (codeToRun) => {
  const error = console.error;
  console.error = () => {}  //this is saying when console.error is called it will render nothing

  codeToRun()
  
  console.error = error
}

it('catches error and displays message', () => {
  swallowErrors(() =>{
    const wrapper = mount(
      // you can change this rendering to test how the code will fail
      <ErrorBoundary render ={() => <span>uh oh!</span>}>
        <Child />
      </ErrorBoundary>
    )
  
    const text = wrapper.text()
  
    expect(text).toEqual('uh oh!')
  })
})