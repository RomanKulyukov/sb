import { Component } from "react";
import "./App.css";
import Counter from "./Counter";
import { connect } from "react-redux";
import { add, sub, addNum, subNum, asyncAdd } from "./redux/actions/actions";
class App extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: 40 }}>
          <div>{this.props.counter}</div>
          <button onClick={this.props.onAdd}>Добавить</button>
          <button onClick={this.props.onSub}>Убавить</button>

          <button onClick={() => this.props.onAddNum(15)}>Добавить 15</button>
          <button onClick={() => this.props.onSubNum(17)}>Убавить 17</button>
          <button onClick={() => this.props.onAsyncAdd(1000000)}>
            асинхронно добавить миллион
          </button>
        </div>
        <Counter />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter1.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNum: (num) => dispatch(addNum(num)),
    onSubNum: (num) => dispatch(subNum(num)),
    onAsyncAdd: (num) => dispatch(asyncAdd(num)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
