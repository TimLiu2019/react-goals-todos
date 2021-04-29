import React, { Component } from "react";
import "../App.css";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";
import { connect } from "react-redux";
import { handleIntialData } from "../actions/shared";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleIntialData());

    // store.subscribe(() => this.forceUpdate());
  }

  render() {
    if (this.props.loading === true) {
      return <h3>Loading</h3>;
    }
    return (
      <div>
        <ConnectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

export default connect(state => ({
  loading: state.loading
}))(App);
