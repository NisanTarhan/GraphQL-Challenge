import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';
import App from './components/App/index.js';
import {
  ApolloProvider,
} from "@apollo/client";
import client from './apollo.js'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);