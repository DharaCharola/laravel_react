import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar';
import Previewer from './previewer';
import { Provider } from "react-redux";
import store from "../store"

export default class MainContainer extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="wrapper">
          <Sidebar />
          <Previewer />
        </div>
      </Provider>
    );
  }
}