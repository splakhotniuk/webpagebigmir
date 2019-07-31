import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<App />, document.getElementById('root'));

// var tt = document.querySelector('.card-img-overlay');
//     console.log("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU", tt);
//     var rect = tt.getBoundingClientRect();
//     console.log("width", rect.width);


// var sss = document.querySelector('#ttt');
//     console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS", sss);
//     sss.style.fontSize = rect.width*0.05 + "px";
//     console.log(sss.style.fontSize);

window.addEventListener('scroll', function() {
    console.log("SSSSSSSSSSSSSSSSSSSSSSSCROLLIIIIIIIIIIIIIIIIIIIIIIINGGGGG");
    var pageY = window.pageYOffset;
    var appMenu = document.querySelector('.appear');

    if ( pageY > 250 ) {
        appMenu.style.top = 0;
        appMenu.style.position = "fixed";
    } else {
        appMenu.style.top = -150;
        appMenu.style.position = "static";
    }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
