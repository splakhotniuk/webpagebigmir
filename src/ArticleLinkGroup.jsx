import React from 'react';
import { Link } from "react-router-dom";
import { RenderArticleTime } from './RenderArticleTime.jsx'

export const ArticleLinkGroup = (props) => {
    const createArticleLink = (article) => {
        return(
            <div key={article.number}>
                <div className="row">
                    <div >
                        <RenderArticleTime time={article.time}/>
                    </div>
                    <div className="col">
                        <Link to={article.articlePath} className="text-body">{article.heading}</Link>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="container">
        <div className="list-group">
            {
                (props.articles.slice(0, props.namberOfArticles)).map(createArticleLink)
                
            }
        </div>
        </div>
    )
};