import React from 'react';
import {StartPage} from './StartPage'
import {ThematicPage} from './ThematicPage'
import articles from './articles.jsx'


export const Section = (props) => {
    console.log("Match: ", props.match);
   
    console.log("Все статьи", articles)
    const pageArticles = articles.filter(article => article.thematic==="СПОРТ");
    const realtyArticles = articles.filter(article => article.subtheme==="Недвижимость")
    console.log("Статьи о спорте", pageArticles);
    console.log("Статьи о недвижимости", realtyArticles);

    
        

    if ( props.match.path === "/") {
        return (<StartPage articles={articles}/>)
    }
    const thematicPageArticles = articles.filter(article => 
        article.thematicPath === props.match.path || 
        article.subthemePath === props.match.path ||
        article.articlePath === props.match.path)

    return (<ThematicPage articles={thematicPageArticles}/>)
};