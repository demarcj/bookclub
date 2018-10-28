const genreList = [`Action/Shonen`, `Drama/Romance`, `Comedy`, `Mystery/Thriller`, `Sci-Fi/Mecha`, `Horror/Psychological`, `Moe/Slice of Life`, `Fantasy/Isekai`, `Sports/Game`];
const getGenre = Math.floor(Math.random() * genreList.length);
export default genreList[getGenre];