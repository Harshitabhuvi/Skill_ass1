import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
