import React from 'react';
import { Link } from "react-router-dom";
import './StartPage.css'
import pathSegment from './pathSegment';
import { ArticleCard } from './ArticleCard.jsx'
import { ThematicBlock } from './ThematicBlock.jsx'
import { ArticleLinkGroup } from './ArticleLinkGroup.jsx'
import { RenderArticleTime } from './RenderArticleTime.jsx'


export const StartPage = (props) => {
    console.log("Match StartPage: ", props.match);

    const thematics = {
        НОВОСТИ: ["Украина", "Мир", "Столица", "Жизнь"],
        СПОРТ: ["Футбол", "Бокс", "Баскетбол", "Хоккей", "Теннис"],
        ФИНАНСЫ: ["Экономика", "Бизнес", "Личный бюджет", "Недвижимость", "Карьера и образование"],
        ВИДЕО: ["Все категории", "Ржаки", "Музыка", "Спорт", "Животные"],
        АВТО: ["Автоновости", "ДТП", "Автосоветы", "Автоприколы", "Тест-драйвы"],
        ТЕХНО: ["Технологии и открытия", "Космос", "Полезные советы", "Игры"]
    };

   const createNavBarHead = (head) => {
       if ( thematics[head] ) {
           return (
                <div className="dropdown" key={head}>
                    <Link to={pathSegment[head]} className="nav-item nav-link text-body font-weight-bold">{head}</Link>
                    <div className="dropdown-menu">
                        {
                            thematics[head].map(subtheme => (
                                <div key={subtheme}>
                                    <a className="dropdown-item" href={pathSegment[head] + pathSegment[subtheme]}>{subtheme}</a>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }
        return (<Link to={pathSegment[head]} className="nav-item nav-link text-body font-weight-bold" key={head}>{head}</Link>)
    }

    const createFooterThematicLinc = (head) => {
        return (
            <Link to={pathSegment[head]} className="text-light hover" key={head}>{head}</Link>
        )
    }
    

    return (
        <div className="container-fluid">
            <div className="appear">
                <div className="text-center">
                            <img src="http://localhost:3000/brendbanner.png" alt="Брендбаннер"/>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
                        <div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <img src="http://localhost:3000/brendbanner.png" alt="Брендбаннер" className="d-lg-none"/>
                        </div>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                {
                                    ["НОВОСТИ", "СПОРТ", "ФИНАНСЫ", "ВИДЕО", "НАСТРОЕНИЕ", "АВТО", "ВЕЛО", "ТЕХНО", "АРХИТЕКТУРА", "ШОУ-BIZ", "LIFESTYLE", "СЕМЬЯ И ДЕТИ"].map(createNavBarHead)
                                }
                            </div>
                        </div>
                </nav>
            </div>
            <div className="heading">
                <div className="text-center border border-secondary d-none d-lg-block">
                    <img src="http://localhost:3000/reklama.png" alt="Реклама" width="500" height="100"/>
                </div>
            
                <div className="container brendbanner d-none d-lg-block">
                    <div className="text-center">
                        <img src="http://localhost:3000/brendbanner.png" alt="Брендбаннер"/>
                    </div>
                    <div className="text-center">
                        <img src="http://localhost:3000/slogan.png" alt="Слоган"/>
                    </div>
                </div>
                
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed">
                    <div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <img src="http://localhost:3000/brendbanner.png" alt="Брендбаннер" className="d-lg-none"/>
                    </div>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {
                                ["НОВОСТИ", "СПОРТ", "ФИНАНСЫ", "ВИДЕО", "НАСТРОЕНИЕ", "АВТО", "ВЕЛО", "ТЕХНО", "АРХИТЕКТУРА", "ШОУ-BIZ", "LIFESTYLE", "СЕМЬЯ И ДЕТИ"].map(createNavBarHead)
                            }
                        </div>
                    </div>
                </nav>
            </div>
            <hr></hr>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-md">
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
                                                    <h5 className="text-left">{props.articles[0].heading}</h5>
                                                    <h6 className="text-left align-bottom"><RenderArticleTime time={props.articles[0].time}/></h6>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={props.articles[5].picture} className="d-block w-100" alt="..."/>
                                                <div className="carousel-caption  text-left">
                                                    <h5>{props.articles[5].heading}</h5>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={props.articles[1].picture} className="d-block w-100" alt="..."/>
                                                <div className="carousel-caption  text-fluid">
                                                    <h5>{props.articles[1].heading}</h5>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={props.articles[7].picture} className="d-block w-100" alt="..."/>
                                                <div className="carousel-caption">
                                                    <h5>{props.articles[7].heading}</h5>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={props.articles[2].picture} className="d-block w-100" alt="..."/>
                                                <div className="carousel-caption">
                                                    <h5>{props.articles[2].heading}</h5>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={props.articles[6].picture} className="d-block w-100" alt="..."/>
                                                <div className="carousel-caption">
                                                    <h5>{props.articles[6].heading}</h5>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={props.articles[3].picture} className="d-block w-100" alt="..."/>
                                                <div className="carousel-caption">
                                                    <h5>{props.articles[3].heading}</h5>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={props.articles[8].picture} className="d-block w-100" alt="..."/>
                                                <div className="carousel-caption">
                                                    <h5>{props.articles[8].heading}</h5>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={props.articles[4].picture} className="d-block w-100" alt="..."/>
                                                <div className="carousel-caption">
                                                    <h5>{props.articles[4].heading}</h5>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <img src={props.articles[9].picture} className="d-block w-100" alt="..."/>
                                                <div className="carousel-caption d-none">
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
                            <div className="col-lg">
                                <div className="row">
                                    <div className="col-md">
                                        <ArticleCard article={props.articles[161]}/>
                                    </div>
                                    <div className="col-md">
                                        <ArticleCard article={props.articles[29]}/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md">
                                        <ArticleCard article={props.articles[35]}/>
                                    </div>
                                    <div className="col-md">
                                        <ArticleCard article={props.articles[54]}/>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="d-none d-lg-block mt-3">
                            
                            <div className="container-fluid">
                                <div className="d-flex justify-content-between aligne-content-center">
                                    <div className="flex-1 text-center m-2 card border-0 rounded-0">
                                        <img src="http://localhost:3000/pictures/icons/icons1_1.svg" className="card-img-top p-6" alt="Изображение" />
                                        <p>Вопрос-ответ</p>
                                    </div>
                                    <div className="flex-1 text-center m-2 card border-0 rounded-0">
                                        <img src="http://localhost:3000/pictures/icons/icons1_2.svg" className="card-img-top" alt="Изображение" />
                                        <p>Объявления</p>
                                    </div>
                                    <div className="flex-1 text-center m-2 card border-0 rounded-0">
                                        <img src="http://localhost:3000/pictures/icons/icons1_3.svg" className="card-img-top" alt="Изображение" />
                                        <p>Недвижимость</p>
                                    </div>
                                    <div className="flex-1 text-center m-2 card border-0 rounded-0">
                                        <img src="http://localhost:3000/pictures/icons/icons1_4.svg" className="card-img-top" alt="Изображение" />
                                        <p>Автопрoдажа</p>
                                    </div>
                                    <div className="flex-1 text-center m-2 card border-0 rounded-0">
                                        <img src="http://localhost:3000/pictures/icons/icons1_5.svg" className="card-img-top" alt="Изображение" />
                                        <p>Онлайн-магазин</p>
                                    </div>
                                    <div className="flex-1 text-center m-2 card border-0 rounded-0">
                                        <img src="http://localhost:3000/pictures/icons/icons1_6.svg" className="card-img-top" alt="Изображение" />
                                        <p>Почта</p>
                                    </div>
                                    <div className="flex-1 text-center m-2 card border-0 rounded-0">
                                        <img src="http://localhost:3000/pictures/icons/icons1_7.svg" className="card-img-top" alt="Изображение" />
                                        <p>Погода</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-9  d-sm-block">
                                    <div className="row">
                                        <div className="col-sm-2">
                                            <h6>Украина и мир</h6>
                                        </div>
                                        <div className="col-sm-10">
                                            <hr></hr>
                                        </div>
                                        <div className="container">
                                            <ArticleLinkGroup articles={props.articles} namberOfArticles={26}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 d-none d-lg-block">
                                    <img src={props.articles[5].picture} className="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <div className="d-none d-lg-block mt-3">
                                <div className="row">
                                    <div className="col text-center">
                                        <img src="http://localhost:3000/pictures/icons/icons2_1.svg" className="card-img-top" alt="Изображение" />
                                        <span>Дневники</span>
                                    </div>
                                    <div className="col text-center">
                                        <img src="http://localhost:3000/pictures/icons/icons2_2.svg" className="card-img-top" alt="Изображение" />
                                        <span>Знакомства</span>
                                    </div>
                                    <div className="col text-center">
                                        <img src="http://localhost:3000/pictures/icons/icons2_3.svg" className="card-img-top" alt="Изображение" />
                                        <span>Гороскопыss</span>
                                    </div>
                                    <div className="col text-center">
                                        <img src="http://localhost:3000/pictures/icons/icons2_4.svg" className="card-img-top" alt="Изображение" />
                                        <span>Бег</span>
                                    </div>
                                    <div className="col text-center">
                                        <img src="http://localhost:3000/pictures/icons/lifestyle.svg" className="card-img-top" alt="Изображение" />
                                        <span>Lafestyle</span>
                                    </div>
                                    <div className="col text-center">
                                        <img src="http://localhost:3000/pictures/icons/icons2_6.svg" className="card-img-top" alt="Изображение" />
                                        <span>Открытки</span>
                                    </div>
                                    <div className="col text-center">
                                        <img src="http://localhost:3000/pictures/icons/icons2_7.svg" className="card-img-top" alt="Изображение" />
                                        <span>Ржаки</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ThematicBlock thematic="СПОРТ"/>
                        </div>
                        <div>
                            <ThematicBlock thematic="ФИНАНСЫ"/>
                        </div>
                        <div>
                            <ThematicBlock thematic="АВТО"/>
                        </div>
                        <div>
                            <ThematicBlock thematic="ТЕХНО"/>
                        </div>
                    </div> 
                    <div className="col-sm-2 d-none d-lg-block">
                        <img src={props.articles[50].picture} className="card-img-top" alt="Изображение" />
                    </div>
                </div>
            </div>
            <div className="footer text-light">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="row footerheader">
                                <div className="col">Категории</div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="list-group text-light">
                                        {["НОВОСТИ", "СПОРТ", "ФИНАНСЫ", "ВИДЕО", "НАСТРОЕНИЕ", "АВТО"].map(createFooterThematicLinc)}
                                    </div>
                                </div>
                                <div className="col">
                                <div className="list-group text-light">
                                        {["ВЕЛО", "ТЕХНО", "АРХИТЕКТУРА", "ШОУ-BIZ", "LIFESTYLE", "СЕМЬЯ И ДЕТИ"].map(createFooterThematicLinc)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="row footerheader">
                                <div className="col">Информация</div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="list-group text-light">
                                            {["КОНТАКТЫ", "РЕКЛАМА НА САЙТЕ", "О НАС"].map(createFooterThematicLinc)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row footerheader">
                                <div className="col">Сайты ЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕ</div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="text-center text-light">
                                        Материалы, отмеченные знаками "Реклама", "PR", "Спецпроект", "Новости компаний", "Новости партнеров", "Актуально", "Промо", публикуются на правах рекламы.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <hr className="bg-light"></hr>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src="http://localhost:3000/brendbanner.png" alt="Брендбаннер"/>
                        </div>
                        <div className="col-sm-7">
                            © 2000-2019, ООО "ДИДЖИТАЛ ВЕНЧЕЗ". Все права защищены. Все права на материалы, опубликованные на данном ресурсе, принадлежат ООО «ДИДЖИТАЛ ВЕНЧЕЗ». Какое-либо использование материалов без письменного разрешения ООО «ДИДЖИТАЛ ВЕНЧЕЗ» запрещено.
                        </div>
                        <div className="col-sm-1">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};