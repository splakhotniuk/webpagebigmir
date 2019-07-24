import React from 'react';

export const RenderArticleTime = (props) => {
    var hours = props.time.getHours(); 
    var minutes = props.time.getMinutes(); 

    hours = hours < 10 ? "0" + hours : "" + hours;
    minutes = minutes < 10 ? "0" + minutes : "" + minutes;
    
    return (
        <div>
            {hours + ":" +  minutes}
        </div>
    ) 
};