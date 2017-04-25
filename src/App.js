import React, { Component } from 'react';
import './App.css';
import BreadcrumbContainer from './components/breadcrumb-container.jsx';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Topics from './components/topics.jsx';
import { BrowserRouter as Router, Route, Link,  } from 'react-router-dom';

const breadcrumbMap = {
  "/": "Home",
  "/topics/rendering": 'React Rendering'
}

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path="/" component={(props) => <BreadcrumbContainer {...props} breadcrumbMap={breadcrumbMap}/>} />

        <hr/>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
    );
  }
}

export default App;