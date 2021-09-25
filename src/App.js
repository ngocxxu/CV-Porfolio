import './App.css';
import { Router,Switch } from "react-router";
import { createBrowserHistory } from 'history';
import UserTemplate from './template/UserTemplate'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Porfolio from './pages/Porfolio';
import Menu from './components/Menu';
import CodingProject from './components/CodingProject';
import DesignProject from './components/DesignProject';

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <UserTemplate path='/' exact Component={Home}></UserTemplate>
        <UserTemplate path='/home' exact Component={Home}></UserTemplate>
        <UserTemplate path='/aboutme' exact Component={AboutMe}></UserTemplate>
        <UserTemplate path='/resume' exact Component={Resume}></UserTemplate>
        <UserTemplate path='/porfolio' exact Component={Porfolio}></UserTemplate>
        <UserTemplate path='/porfolio/all' exact Component={Porfolio}></UserTemplate>
        <UserTemplate path='/porfolio/codingproject' exact Component={CodingProject}></UserTemplate>
        <UserTemplate path='/porfolio/designproject' exact Component={DesignProject}></UserTemplate>
        <UserTemplate path='/blog' exact Component={Blog}></UserTemplate>
        <UserTemplate path='/contact' exact Component={Contact}></UserTemplate>
        <Menu></Menu>
      </Switch>
    </Router>
  );
}

export default App;
