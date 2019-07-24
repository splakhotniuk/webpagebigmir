import React from 'react';
import articles from './articles'
import { ArticleCard } from './ArticleCard.jsx'

export const ShortThematicBlock = (props) => {

    const blockArticles = articles.filter(article => article.thematic === props.thematic).slice(0, 4);
   

  return (
        <div className="mt-2">
            <div className="row">
                <div className="col-7 pblank-0">
                    <ArticleCard article={blockArticles[0]}/>
                </div>
                <div className="col-5 mt-2 mt-lg-0 pblank-0">
                    <div className="row">
                        <div className="col-md pblank-0">
                            <ArticleCard article={blockArticles[1]}/>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md pblank-0">
                            <ArticleCard article={blockArticles[3]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};