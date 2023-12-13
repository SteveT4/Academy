let movieC = {
    name: "COMMANDO",
    rating: 9.80,
    length: 90,
};

function reportMovie(m) {
    console.log(formatName(m.name));
    console.log(m.rating);
    console.log(m.length);
}

function formatName(n) {
    return n.toLowerCase();
}


reportMovie(movieC);