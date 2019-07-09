import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';


export const NewsPage = (props) => {
    
    if ( props.theme == "startpage" ) {
        return (
            <>
                <div className="container">
                    <div className="text-center">
                        <img src="http://localhost:3000/reklama.png" alt="Реклама" width="500" height="100"/>
                    </div>
                    <div className="text-center nav-bar">
                        <img src="http://localhost:3000/brendbanner.png" alt="Брендбаннер" width="500" height="150"/>
                    </div>
                </div>
                
                <Link to="/allnews">Новости</Link>
                <Link to="/sport">Спорт</Link>
                                
                        
                    

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="card">
                                    <img src="http://localhost:3000/spider.png" className="card-img-top" alt="Изображение" />
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <img src="http://localhost:3000/spider.png" className="card-img-top" alt="Изображение" />
                            </div>
                            <div className="col-sm-2">
                                <img src="http://localhost:3000/1.png" className="card-img-top" alt="Изображение" />
                            </div>
                            <div className="col-sm-2">
                                <img src="http://localhost:3000/card.png" className="card-img-top" alt="Изображение" />
                            </div>
                        </div>
                    </div>
            </>
        )
    }
    return null
};