import React, { Component } from "react";
import { connect } from "react-redux";
// import classes from '../Counter/Counter.module.css';
import { add2 } from "./redux/actions/actions";
class Counter extends Component {
  render() {
    return (
      <div style={{ padding: 20, border: "1px solid #ccc" }}>
        <h1>Counter {this.props.counter}</h1>
        <div>
          <button onClick={() => this.props.onAdd2(10)}>Add 10</button>
          <button onClick={() => this.props.onAdd2(-10)}>Sub 10</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter2.counter2,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd2: (num) => dispatch(add2(num)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
