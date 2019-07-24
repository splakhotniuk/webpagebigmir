import React from 'react';

export const ArticleCard = (props) => {
    const badgeColor = {
        "НОВОСТИ": "primary",
        "СПОРТ": "success",
        "ФИНАНСЫ": "warning",
        "ВИДЕО": "danger",
        "АВТО": "danger",
        "ТЕХНО": "info"
    }

    const renderArticleTime = (time) => {
        var hours = time.getHours(); 
        var minutes = time.getMinutes(); 

        hours = hours < 10 ? "0" + hours : "" + hours;
        minutes = minutes < 10 ? "0" + minutes : "" + minutes;
        return hours + ":" +  minutes
    }

  return (
    <div className="card bg-dark text-white border-0 rounded-0">
        <img src={props.article.picture} className="card-img rounded-0" alt="..."/>
        <div className="card-img-overlay">
            <span className={"badge badge-" + badgeColor[props.article.thematic] + " card-title"}>{props.article.thematic}</span>
        </div>
         
        <div className="card-img-overlay d-flex align-items-end">
            <div className="container">
                
                <div className="row">
                    <div className="card-text">{props.article.heading}</div>
                </div>
                <div className="row">
                    <div className="card-text">{renderArticleTime(props.article.time)}</div>
                </div>
            </div>
        </div>
        
    </div>
  );
};