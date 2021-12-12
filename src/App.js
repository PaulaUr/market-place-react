import React from "react";
import { Provider } from 'react-redux';
import Main from "./components/main/Main.component";
import { ConfigureStore } from "./redux/configureStore";
import "./App.css";

const store = ConfigureStore();

const App = () => {

  return (
    <React.Fragment>
      <div className="App-header">
        <div className="App-header-title">Market Place</div>
      </div>
      <Provider store={store}>
        <Main/>
      </Provider>
    </React.Fragment>
  );
};

export default App;
