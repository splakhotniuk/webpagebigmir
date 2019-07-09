import React from 'react';

export const ThematicPage = (props) => {
    console.log("Match thematicPage: ", props.match);
    return (
        <div className="container">
            {
            (props.articles).map(article=>{return (
                <h1 key={article.number}>{article.heading}</h1>
            )})
            }
        </div>
    )
};