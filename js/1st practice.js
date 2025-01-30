const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//movies[as];

const movieName = prompt("Один из просмотренных фильмов", '');
const movieRating = prompt("На сколько оцените его?", '');
const movieName1 = prompt("Один из просмотренных фильмов", '');
const movieRating1 = prompt("На сколько оцените его?", '');

personalMovieDB.movies[movieName] = movieRating;
personalMovieDB.movies[movieName1] = movieRating1;

console.log(personalMovieDB);