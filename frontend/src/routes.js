import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Questions from './pages/Questions';
import QuestionDetail from './pages/QuestionDetail';

import Header from './components/Header';

export default function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/questions" component={Questions} />
        <Route path="/question-detail" component={QuestionDetail} />
      </Switch>
    </BrowserRouter>
  );
}
