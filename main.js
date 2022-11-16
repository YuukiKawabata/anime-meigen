const baseUrl = "https://animechan.vercel.app/api/random";

const searchWordTitle = document.querySelector("#search-word-title"); 
const searchWordName = document.querySelector("#search-word-name");
const random = document.getElementById("random");
const title = document.getElementById("title"); 
const name = document.getElementById("name");


function GetAnimeRandom() {
    fetch("https://animechan.vercel.app/api/random")
          .then((response) => response.json())
          .then((getAnime) => {
            const randomView = 
            `
            <h2>タイトル <br>
            ${getAnime.anime}</h2>
            <p >キャラクター<br>
            ${getAnime.character}</p>
            <p>名言<br>
            ${getAnime.quote}</p>
            `;
            // HTMLの挿入
            random.innerHTML = randomView;
            })
}

function GetAnimeTitle () {
    fetch(baseUrl + "/anime?title=" + searchWordTitle.value)
        .then((response) => response.json())
        .then((getAnime) => {
            const titleView = 
            `
            <h2>タイトル <br>
            ${getAnime.anime}</h2>
            <p >キャラクター<br>
            ${getAnime.character}</p>
            <p>名言<br>
            ${getAnime.quote}</p>
            `;
            // HTMLの挿入
            title.innerHTML = titleView;
        })
}


function GetAnimeName () {
    fetch(baseUrl + "/character?name=" + searchWordName.value)
        .then((response) => response.json())
        .then((getAnime) => {
            const nameView = 
            `
            <h2>タイトル <br>
            ${getAnime.anime}</h2>
            <p >キャラクター<br>
            ${getAnime.character}</p>
            <p>名言<br>
            ${getAnime.quote}</p>
            `;
            // HTMLの挿入
            name.innerHTML = nameView;
        })
}