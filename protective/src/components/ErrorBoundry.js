import { Component } from 'react'

export default class ErrorBoundry extends Component {
    state = {hasError: "Ankit", error:""};


    componentDidCatch(error){
        this.setState({hasError:true, error})
        console.log(error.message)
    }
  render() {
    if(this.state.hasError){
        return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}
