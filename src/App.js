import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

import './App.css';

function App() {
    return <>
        <Router>
            
            <Switch>
                <Route path="/" component={Home} exact></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Switch>
        </Router>

    </>;
}
export default App;