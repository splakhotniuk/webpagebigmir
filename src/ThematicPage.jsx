import React from 'react';
import { Link } from "react-router-dom";
import pathSegment from './pathSegment';
import { ArticleCard } from './ArticleCard.jsx'
import { ArticleLinkGroup } from './ArticleLinkGroup.jsx'
import { ShortThematicBlock } from './ShortThematicBlock.jsx'


export const ThematicPage = (props) => {
    console.log("Match thematicPage: ", props.articles);
    const thematics = {
        НОВОСТИ: ["Украина", "Мир", "Столица", "Жизнь"],
        СПОРТ: ["Футбол", "Бокс", "Баскетбол", "Хоккей", "Теннис"],
        ФИНАНСЫ: ["Экономика", "Бизнес", "Личный бюджет", "Недвижимость", "Карьера и образование"],
        ВИДЕО: ["Все категории", "Ржаки", "Музыка", "Спорт", "Животные"],
        АВТО: ["Автоновости", "ДТП", "Автосоветы", "Автоприколы", "Тест-драйвы"],
        ТЕХНО: ["Технологии и открытия", "Космос", "Полезные советы", "Игры"]
    };

    const createNavBarHead = (head) => {
           
         return (<Link to={pathSegment[head]} className="nav-item nav-link text-body font-weight-bold" key={head}>{head + "| "}</Link>)
     }
 
    return (
        <div className="container col-sm-6">
            <div className="container">
            <div className="navbar navbar-expand navbar-light bg-light border">
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {
                            ["НОВОСТИ", "СПОРТ", "ФИНАНСЫ", "ВИДЕО", "АВТО",  "ТЕХНО",  "ШОУ-BIZ"].map(createNavBarHead)
                        }
                    </div>
                </div>
            </div>
            </div>
            <div className="container-fluid bg-primary">
                <div className="list-inline text-left">
                    { 
                        thematics[props.articles[0].thematic].map(subtheme => (<div className="list-inline-item text-light" key={subtheme}>{subtheme + "  "}</div>))
                    }
                </div>
            </div>            
            <ShortThematicBlock thematic={props.articles[0].thematic}/>
            <div className="row">
                <div className="col text-left">
                    <ArticleLinkGroup articles={props.articles} namberOfArticles={15}/>
                </div>
                <div className="col">

                </div>
                <div className="col">

                </div>
            </div>
                   
                
           
        </div>
    )
};