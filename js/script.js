const genreList = [`Action/Shonen`, `Drama/Romance`, `Comedy`, `Mystery/Thriller`, `Sci-Fi/Mecha`, `Horror/Psychological`, `Moe/Slice of Life`, `Fantasy/Isekai`, `Sports/Game`];
const doc = (str, html)=>{document.getElementById(str).innerHTML = html;};
const el = (str)=>document.getElementById(str); 

const getGenre = ()=> {
  const randomize = ()=> Math.floor(Math.random() * genreList.length);
  doc(`genre`, genreList[randomize()]);
}

const getAllGenre = ()=> {
  const genreMap = el(`allGenre`).innerHTML === `` ? genreList.join(` <br>`) : ``;
  const buttonText = genreMap === `` ? `Show All Genres` : `Hide`;
  doc(`showAllGenre`, buttonText);
  doc(`allGenre`, genreMap);
};

el(`generate`).addEventListener('click', getGenre);
el(`showAllGenre`).addEventListener('click', getAllGenre);

const getAnime = async () => {
  const getJson = await fetch(`../js/data.json`);
  const getData = await getJson.json();
  let animeList = [];
  getData.anime.forEach(i => {animeList += `${i} </br>`});
  doc(`test`, animeList)
}
getAnime();