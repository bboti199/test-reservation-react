import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CreatePage } from './pages/CreatePage';
import { EditPage } from './pages/EditPage';
import { Navbar } from './components';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/create' component={CreatePage} />
        <Route path='/edit/:id' component={EditPage} />
      </Switch>
    </BrowserRouter>
  );
};
