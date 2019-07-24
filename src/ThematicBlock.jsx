import React from 'react';
import articles from './articles'
import { ArticleCard } from './ArticleCard.jsx'

export const ThematicBlock = (props) => {

    const blockArticles = articles.filter(article => article.thematic === props.thematic).slice(10, 16);
   

  return (
        <div className="mt-2">
            <div className="row">
                <div className="col-sm-2">
                    <h6>{props.thematic}</h6>
                </div>
                <div className="col-sm-10">
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-lg pblank-0">
                    <ArticleCard article={blockArticles[0]}/>
                </div>
                <div className="col-lg mt-2 mt-lg-0 pblank-0">
                    <div className="row">
                        <div className="col-md pblank-0">
                            <ArticleCard article={blockArticles[1]}/>
                        </div>
                        <div className="col-md ml-0 mt-2 mt-lg-0 pblank-0">
                            <ArticleCard article={blockArticles[2]}/>   
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-md pblank-0">
                            <ArticleCard article={blockArticles[3]}/>
                        </div>
                        <div className="col-md ml-0 mt-2 mt-lg-0 pblank-0">
                            <ArticleCard article={blockArticles[4]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
};