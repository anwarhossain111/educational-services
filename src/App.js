import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import MoreServices from './components/MoreServices/MoreServices';
import Learners from './components/Learners/Learners';
function App() {
  return (
    <div>
      
        <Router>
          <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/services">
            <MoreServices></MoreServices>
          </Route>
          <Route path="/learner">
            <Learners></Learners>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
        </Router>
     
    </div>
  );
}

export default App;
