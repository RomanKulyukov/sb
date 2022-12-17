import { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div>{this.props.counter}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}
export default connect(mapStateToProps)(App);
