import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutPage from './about';
import Header from './common/Header';
import CoursesPage from './courses';
import HomePage from './home';
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/courses' component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
