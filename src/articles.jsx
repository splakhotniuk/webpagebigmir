import thematics from './thematics.jsx'
import pathSegment from './pathSegment.jsx'


var artRow = [];

for ( var i = 0; i < 162; i++ ) artRow[i] = i;

const setThematic = () => {
    var thematicNumber = Math.floor(Math.random()*thematics.length);
    var thematic = thematics[thematicNumber].thematic;
    var subtheme = thematics[thematicNumber].subthemes[Math.floor(Math.random()*thematics[thematicNumber].subthemes.length)];

    return [thematic, subtheme]
};

const thematicsRow = artRow.map(setThematic);


console.log("thematicsRow", thematicsRow);

const articles = artRow.map(article => ({
    number: article,
    heading: "Заголовок статьи из раздела " + thematicsRow[article][0],       
    subtitle: "Подзаголовок статьи из раздела " + thematicsRow[article][0] + " подраздел " + thematicsRow[article][1],
    picture: "http://localhost:3000/pictures/" + article + ".jpg",
    text: "Эта статья расскажет новость из подраздела " + thematicsRow[article][1] + " из раздела " + thematicsRow[article][0] + " id этой статьи: " + article,
    thematic: thematicsRow[article][0],
    subtheme: thematicsRow[article][1],
    thematicPath: pathSegment[thematicsRow[article][0]],
    subthemePath: pathSegment[thematicsRow[article][0]] + pathSegment[thematicsRow[article][1]],
    articlePath: pathSegment[thematicsRow[article][0]] + pathSegment[thematicsRow[article][1]] + "/" + article,
    time: new Date(2019, 6, 17, Math.random()*25, Math.random()*61)
}))


console.log("articles after map", articles);



export default articles;

