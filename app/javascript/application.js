import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import Greetings from './components/greetings'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Greetings />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
