let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};


function rememberMyFilms() {
    for (let i = 0; i < personalMovieDB.count; i++) {
        let movieName = prompt("Один из просмотренных фильмов", '');
        let movieRating = prompt("На сколько оцените его?", '');
        
        while (movieName.length === 0 || movieName.length > 50 || movieName == null || movieRating.length === 0 || movieName == null) {
            movieName = prompt("Один из просмотренных фильмов", '');
            movieRating = prompt("На сколько оцените его?", '');
        }
    
        personalMovieDB.movies[movieName] = movieRating;
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt("Ваш любимый жанр под номером " + (i + +1),'');
    }
}
writeYourGenres();

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();

// let n = 0;

// while (n < personalMovieDB.count) {
//     let movieName = prompt("Один из просмотренных фильмов", '');
//     let movieRating = prompt("На сколько оцените его?", '');
    
//     while (movieName == null || movieRating == null || movieName == "" || movieRating == "" || movieName.length > 50) {
//         console.log('error');
//         movieName = prompt("Один из просмотренных фильмов", '');
//         movieRating = prompt("На сколько оцените его?", '');
//     }

//     personalMovieDB.movies[movieName] = movieRating;
//     console.log('done');
//     n++;
// }