let film = {
    isShowing: false,
    runtime: 93,
    rating: "PG",
    genre: "Action",
    releaseDate: 2003,
    boxOffice: 32.5
};

let title = "THE FILM";

let report = `
${ title }

isShowing : ${film.isShowing}
runtime : ${film.runtime}
rating : ${film.rating}
genre : ${film.genre}
releaseDate : ${film.releaseDate}
boxOffice : ${film.boxOffice}
`;

console.log(report);