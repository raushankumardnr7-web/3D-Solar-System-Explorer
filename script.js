let title = document.getElementById("title");

let description =
document.getElementById("description");


let data = {


sun: {

name:"☀️ Sun",

info:
"The Sun is a giant star at the center of our Solar System."

},


mercury: {

name:"☿ Mercury",

info:
"The smallest and fastest planet, closest to the Sun."

},


venus: {

name:"♀ Venus",

info:
"Venus is the hottest planet with a thick atmosphere."

},


earth: {

name:"🌍 Earth",

info:
"Our home planet and the only known planet with life."

},


mars: {

name:"♂ Mars",

info:
"The Red Planet and a major target for future exploration."

}

};



function showInfo(planet)
{

title.innerHTML =
data[planet].name;


description.innerHTML =
data[planet].info;


}