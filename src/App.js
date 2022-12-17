import { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>{this.props.counter}</div>
        <button onClick={this.props.onAdd}>Добавить</button>
        <button onClick={this.props.onSub}>Убавить</button>

        <button onClick={() => this.props.onAddNum(15)}>Добавить 15</button>
        <button onClick={() => this.props.onSubNum(17)}>Убавить 17</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({ type: "ADD" }),
    onSub: () => dispatch({ type: "SUB" }),
    onAddNum: (num) => dispatch({ type: "ADDNUM", payload: num }),
    onSubNum: (num) => dispatch({ type: "SUBNUM", payload: num }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
