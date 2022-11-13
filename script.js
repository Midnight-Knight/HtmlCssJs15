/* home */

const urlTop = "https://imdb-api.com/en/API/Top250Movies/k_nahldgax";
async function cinImg()
{
    let respTop = await fetch(urlTop);
    let dataTop = await respTop.json();
    let intRand = new Array(10);
    let elemImg = document.querySelectorAll('.cinImg');
    let elemH = document.querySelectorAll('.cinH');
    for (i = 0; i < 10; ++i)
    {
        intRand[i] = Math.floor(Math.random() * 250);
        elemH[i].innerHTML = dataTop.items[intRand[i]].title;
        elemImg[i].src = dataTop.items[intRand[i]].image;
    }
}

cinImg();

/* section-1 */

let mass = new Array(21);
for (i = 0; i < 21; ++i)
{
    mass[i] = new Array(3);
}
mass[0][0] = "Berlin";
mass[0][1] = "52.52";
mass[0][2] = "13.41";

mass[1][0] = "Paris";
mass[1][1] = "48.86";
mass[1][2] = "2.35";

mass[2][0] = "London";
mass[2][1] = "51.50";
mass[2][2] = "-0.13";

mass[3][0] = "Madrid";
mass[3][1] = "40.42";
mass[3][2] = "-3.70";

mass[4][0] = "Vienna";
mass[4][1] = "48.21";
mass[4][2] = "16.37";

mass[5][0] = "Brussels";
mass[5][1] = "50.84";
mass[5][2] = "4.37";

mass[6][0] = "Moscow";
mass[6][1] = "55.76";
mass[6][2] = "37.62";

mass[7][0] = "Sofia";
mass[7][1] = "42.71";
mass[7][2] = "23.32";

mass[8][0] = "Copenhagen";
mass[8][1] = "55.68";
mass[8][2] = "12.57";

mass[9][0] = "Athens";
mass[9][1] = "37.98";
mass[9][2] = "23.72";

mass[10][0] = "Budapest";
mass[10][1] = "47.50";
mass[10][2] = "19.04";

mass[11][0] = "Reykjavik";
mass[11][1] = "64.14";
mass[11][2] = "-21.90";

mass[12][0] = "Dublin";
mass[12][1] = "53.34";
mass[12][2] = "-6.27";

mass[13][0] = "Rome";
mass[13][1] = "41.90";
mass[13][2] = "12.48";

mass[14][0] = "Amsterdam";
mass[14][1] = "52.37";
mass[14][2] = "4.89";

mass[15][0] = "Oslo";
mass[15][1] = "59.91";
mass[15][2] = "10.74";

mass[16][0] = "Warsaw";
mass[16][1] = "52.23";
mass[16][2] = "21.01";

mass[17][0] = "Lisabon";
mass[17][1] = "38.71";
mass[17][2] = "-9.14";

mass[18][0] = "Bern";
mass[18][1] = "46.95";
mass[18][2] = "7.45";

mass[19][0] = "Kiev";
mass[19][1] = "50.44";
mass[19][2] = "30.54";

mass[20][0] = "Stockholm";
mass[20][1] = "59.33";
mass[20][2] = "18.07";

let a1 = "https://api.open-meteo.com/v1/forecast";
let a2 = "?latitude=";
let a3 = "&longitude=";
let a4 = "&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";
async function weather()
{
    let b = document.getElementById('select').value;
    let A5;
    if (b == -1)
    {
        document.getElementById('tempH').innerHTML = "N °C";
        document.getElementById('relaH').innerHTML = "N %";
        document.getElementById('windH').innerHTML = "N km/h";
    }
    else
    {
        A5 = a1 + a2 + mass[b][1] + a3 + mass[b][2] + a4;
        let respA = await fetch(A5);
        let dataA = await respA.json();
        let date = new Date();
        document.getElementById('tempH').innerHTML = dataA.hourly.temperature_2m[date.getHours()] + " °C";
        document.getElementById('relaH').innerHTML = dataA.hourly.relativehumidity_2m[date.getHours()] + " %";
        document.getElementById('windH').innerHTML = dataA.hourly.windspeed_10m[date.getHours()] + " km/h";
    }
}

async function weatherBut()
{
    navigator.geolocation.getCurrentPosition(async function(position) 
    {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        let A5 = a1 + a2 + lat + a3 + lng + a4;
        let respA = await fetch(A5);
        let dataA = await respA.json();
        let date = new Date();
        document.getElementById('tempH').innerHTML = dataA.hourly.temperature_2m[date.getHours()] + " °C";
        document.getElementById('relaH').innerHTML = dataA.hourly.relativehumidity_2m[date.getHours()] + " %";
        document.getElementById('windH').innerHTML = dataA.hourly.windspeed_10m[date.getHours()] + " km/h";
    }
    );
}