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
        <div>
            <div className="text-center border border-secondary d-none d-lg-block">
                <img src="http://localhost:3000/reklama.png" alt="Реклама" width="500" height="100"/>
            </div>
           
            <div className="container d-none d-lg-block">
                <div className="text-center">
                    <img src="http://localhost:3000/brendbanner.png" alt="Брендбаннер"/>
                </div>
                <div className="text-center">
                    <img src="http://localhost:3000/slogan.png" alt=".."/>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <img src="http://localhost:3000/brendbanner.png" alt="Брендбаннер" className="d-lg-none"/>
                </div>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <Link to="/news" className="nav-item-dropdown nav-link active text-body font-weight-bold">НОВОСТИ</Link>
                    <Link to="/sport" className="nav-item nav-link text-body font-weight-bold">СПОРТ</Link>
                    <Link to="/finance" className="nav-item nav-link text-body font-weight-bold">ФИНАНСЫ</Link>
                    <Link to="/finance" className="nav-item nav-link text-body font-weight-bold">ВИДЕО</Link>
                    <Link to="/news" className="nav-item nav-link text-body font-weight-bold">НАСТРОЕНИЕ</Link>
                    <Link to="/sport" className="nav-item nav-link text-body font-weight-bold">АВТО</Link>
                    <Link to="/finance" className="nav-item nav-link text-body font-weight-bold">ВЕЛО</Link>
                    <Link to="/finance" className="nav-item nav-link text-body font-weight-bold">ТЕХНО</Link>
                    <Link to="/news" className="nav-item nav-link text-body font-weight-bold">АРХИТЕКТУРА</Link>
                    <Link to="/sport" className="nav-item nav-link text-body font-weight-bold">ШОУ-BIZТ</Link>
                    <Link to="/finance" className="nav-item nav-link text-body font-weight-bold">LIFESTYLE</Link>
                    <Link to="/finance" className="nav-item nav-link text-body text-sm-left">СЕМЬЯ И ДЕТИ</Link>
                    </div>
                </div>
            </nav>
        <hr></hr>
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
        </div>
    )
};