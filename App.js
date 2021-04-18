import 'react-native-gesture-handler';
import React from 'react'
import { store } from "./src/store";
import { Provider } from "react-redux";
import StartScreen from "./src/screens/StartScreen";

const App = () => {
  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}

export default App
