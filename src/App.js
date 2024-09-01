import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import Login from './components/Login';
import Signup from './components/Signup'; // Import the Signup component

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/signup" component={Signup} /> {/* Add the Signup route */}
                <Route path="/customers" exact component={CustomerList} />
                <Route path="/customers/:id" component={CustomerDetails} />
            </Switch>
        </Router>
    );
};

export default App;
