import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './components/Login';
import Header from './components/Header'
import Home from './components/Home';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';


function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <Login/>
        </Route>
        <Route path="/home">
        <Header/>
        <Home/>
        </Route>
        <Route path="/network">
        <Header/>
        </Route>
      </Switch>
      </Router>
  );
}

const mapStateToProps = (state) =>{
  return {};
};

const mapDispatchToProps = (dispatch) =>({
getUserAuth: ()=> dispatch(getUserAuth()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App)
