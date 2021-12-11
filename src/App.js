import React from "react";
import { Provider } from 'react-redux';
import Main from "./components/main/Main.component";
import { ConfigureStore } from "./redux/configureStore";
import "./App.css";

const store = ConfigureStore();

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Market Place</h1>
      </header>
      <Provider store={store}>
        <Main/>
      </Provider>
    </div>
  );
};

export default App;
