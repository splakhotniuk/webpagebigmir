import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Section} from './Section.jsx'
import articles from './articles.jsx'


export const View = () => {
  return (
    <div>
      <Router>
          <Route path="/" exact component={Section}/>
          <Route path="/news" exact component={Section}/>
          <Route path="/sport" exact component={Section}/>
          <Route path="/sport/football" exact component={Section}/>
          <Route path="/sport/boks" exact component={Section}/>
          <Route path="/sport/basketball" exact  component={Section}/>
          <Route path="/sport/biathlon" exact component={Section}/>
          <Route path="/sport/hockey" exact component={Section}/>
          <Route path="/finance" exact component={Section}/>
          <Route path="/finance/personalbudget/" exact component={Section}/>
          <Route path="/finance/economy/" exact component={Section}/>
          <Route path="/finance/business/" exact component={Section}/>
          <Route path="/finance/realty/" exact component={Section}/>
          <Route path="/finance/career/" exact component={Section}/>
        {
          articles.map(article => <Route path={article.articlePath} exact component={Section} key={article.number}/>)
        }
      </Router>
    </div>
  );
};