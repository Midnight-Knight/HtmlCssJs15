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