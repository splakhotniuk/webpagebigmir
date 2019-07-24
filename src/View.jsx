import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Section} from './Section.jsx'
import articles from './articles.jsx'
import thematics from './thematics.jsx'
import pathSegment from './pathSegment.jsx'

var thematicPathes = [];

const addThematicPathes = (theme) => {
  var thematicPath = pathSegment[theme.thematic];
  thematicPathes.push(thematicPath, theme.subthemes.map(subtheme => (thematicPath + pathSegment[subtheme])));
}

thematics.map(addThematicPathes);
console.log("ВСЕ ТЕМАТИЧЕСКИЕ ПУТИ ", thematicPathes);
thematicPathes = thematicPathes.flat();
console.log("ВСЕ ТЕМАТИЧЕСКИЕ ПУТИ ", thematicPathes);

export const View = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Section}/>
        {thematicPathes.map(thematicPath => <Route path={thematicPath} exact component={Section} key={thematicPath}/>)}
        {articles.map(article => <Route path={article.articlePath} exact component={Section} key={article.number}/>)}
      </Router>
    </div>
  );
};