import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Student from './components/Student';
import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        {/* https://reactrouter.com/web/api/Route/component */}
        <Route path='/contact' component={Contact} />
        <Route path='/students/:name' component={Student} />
        {/* https://reactrouter.com/web/api/Route/render-func */}
        <Route exact path='/' render={() => <Home msg='Hello there' />} />
        <Route path='*' render={() => <div>Not found</div>} />
      </Switch>
    </>
  );
};

export default App;
