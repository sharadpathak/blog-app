import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './components/Create';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
