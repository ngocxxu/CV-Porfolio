import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router';
import './App.css';
import CodingProject from './components/CodingProject';
import DesignProject from './components/DesignProject';
import Menu from './components/Menu';
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Porfolio from './pages/Porfolio';
import Resume from './pages/Resume';
import UserTemplate from './template/UserTemplate';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

export const history = createBrowserHistory();


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD21SELFKM5votjZ0VeS985VQfmRPRMxu0',
  authDomain: 'cv-bono-project.firebaseapp.com',
  projectId: 'cv-bono-project',
  storageBucket: 'cv-bono-project.appspot.com',
  messagingSenderId: '230334313629',
  appId: '1:230334313629:web:b8bb2732ddaacfa43ed074',
  measurementId: 'G-X1XWPPCLDT',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Router history={history}>
      <Switch>
        <UserTemplate path='/' exact Component={Home}></UserTemplate>
        <UserTemplate path='/home' exact Component={Home}></UserTemplate>
        <UserTemplate path='/aboutme' exact Component={AboutMe}></UserTemplate>
        <UserTemplate path='/resume' exact Component={Resume}></UserTemplate>
        <UserTemplate
          path='/porfolio'
          exact
          Component={Porfolio}
        ></UserTemplate>
        <UserTemplate
          path='/porfolio/all'
          exact
          Component={Porfolio}
        ></UserTemplate>
        <UserTemplate
          path='/porfolio/codingproject'
          exact
          Component={CodingProject}
        ></UserTemplate>
        <UserTemplate
          path='/porfolio/designproject'
          exact
          Component={DesignProject}
        ></UserTemplate>
        <UserTemplate path='/blog' exact Component={Blog}></UserTemplate>
        <UserTemplate path='/contact' exact Component={Contact}></UserTemplate>
        <Menu></Menu>
      </Switch>
    </Router>
  );
}

export default App;
