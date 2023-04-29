import React from 'react';
import styles from './App.module.css';
import Homepage from './components/homepage/homepage.jsx';
import Login from './components/login/login.jsx';
import Register from './components/register/register.jsx';
import About from './components/about/about.jsx';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data: {}
  }
  async componentDidMount() {
    const temp = await fetchData();
    this.setState({data: temp});
  }
  render() {
    return(
      <Router>
        <Routes>
          <Route path={"/"} element={<Homepage data={this.state.data}/>}/>
          <Route path={"/login"} element={<Login/>}/>
          <Route path={"/register"} element={<Register/>}/>
          <Route path={"/about"} element={<About/>}/>
        </Routes>
      </Router>
    )
  };

}

export default App;
