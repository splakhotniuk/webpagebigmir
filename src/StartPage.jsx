import React from 'react';
import { Link } from "react-router-dom";

export const StartPage = (props) => {
    console.log("Match StartPage: ", props.match);

    const createLink = (article) => {
        return(
            <li key={article.number}>
                <Link to={article.articlePath}>{article.heading}</Link>
            </li>
        )
    }
    

    return (
        <>
            <div className="container">
                <div className="text-center border border-secondary">
                    <img src="http://localhost:3000/reklama.png" alt="Реклама" width="500" height="100"/>
                </div>
                <div className="text-center">
                    <img src="http://localhost:3000/brendbanner.png" alt="Брендбаннер"/>
                </div>
                <div className="text-center">
                    <img src="http://localhost:3000/slogan.png" alt=".."/>
                </div>
            </div>
            <nav className="navbar-nav navbar-light bg-light">
                

                <div className="row" id="navbarSupportedContent">
                    
                    <div><Link to="/news">НОВОСТИ</Link></div>
                    
                    
                    <div><Link to="/sport">СПОРТ</Link></div>
                    
                    
                    <div><Link to="/finance">ФИНАНСЫ</Link></div>
                    
                </div>
            </nav>
            <Link to="/news">НОВОСТИ</Link>
            <Link to="/sport">СПОРТ</Link>
            <Link to="/finance">ФИНАНСЫ</Link>
            <Link to="/sport/biathlon" >СПОРТ-Биатлон</Link>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="bd-example">
                            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                                <ul className="carousel-indicators">
                                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
                                    <li data-target="#carouselExampleCaptions" data-slide-to="9"></li>
                                </ul>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={props.articles[0].picture} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{props.articles[0].heading}</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.articles[5].picture} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{props.articles[5].heading}</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.articles[1].picture} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{props.articles[1].heading}</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.articles[7].picture} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{props.articles[7].heading}</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.articles[2].picture} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{props.articles[2].heading}</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.articles[6].picture} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{props.articles[6].heading}</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.articles[3].picture} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{props.articles[3].heading}</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.articles[8].picture} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{props.articles[8].heading}</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.articles[4].picture} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{props.articles[4].heading}</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={props.articles[9].picture} className="d-block w-100" alt="..."/>
                                        <div className="carousel-caption d-none d-md-block">
                                            <h5>{props.articles[9].heading}</h5>
                                        </div>
                                    </div>
                                </div>
                                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                    </a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={props.articles[2].picture} className="card-img-top" alt="Изображение" />
                            </div>
                            <div className="col-sm-6">
                                <img src={props.articles[5].picture} className="card-img-top" alt="Изображение" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={props.articles[4].picture} className="card-img-top" alt="Изображение" />
                            </div>
                            <div className="col-sm-6">
                                <img src={props.articles[9].picture} className="card-img-top" alt="Изображение" />
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-2">
                        <img src={props.articles[8].picture} className="card-img-top" alt="Изображение" />
                    </div>
                </div>
                <ul>
                    {
                        (props.articles).map(createLink)
                        
                    }
                </ul>
            </div>
        </>
    )
};