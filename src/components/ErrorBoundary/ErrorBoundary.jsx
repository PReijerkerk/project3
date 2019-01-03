//use this high up in your component tree as possible, have one at the top level 
//you can use this in multiple locations for testing.
import React from 'react';
import propTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  
  static propTypes = {
    // node represents an element or just a DOM Node 
    children: propTypes.oneOfType([
      propTypes.node,
      propTypes.arrayOf(propTypes.node)
    ]).isRequired, 
    render: propTypes.func.isRequired
  }

  state = {
    hasError:false, 
    error: null,
    errorInfo: null
  }
  // this will be the catch(think of a try catch
  componentDidCatch(error, errorInfo){
    this.setState({
      hasError:true,
      error,
      errorInfo
    });

      // tutorial suggested Bugsnag, may need to change this 
    if (window.Bugsnag){
      window.Bugsnag.notify(error)
    }
  }
  render(){
    if(this.state.hasError){
      return (
        this.props.render(
          this.state.error, 
          this.state.errorInfo
        )
      )}
    return (this.props.children)
  }
}