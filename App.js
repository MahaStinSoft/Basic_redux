import React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./src/Main";
import  { createStore } from 'redux';
import { Provider } from "react-redux";
import reducer from './src/reducer';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
    <Main/>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },

});

export default App;
