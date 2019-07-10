import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ServerPage from './pages/ServerPage';


const App = () => (
  <Router>
    <Route path="/" component={ServerPage} />
  </Router>
);

export default App;
