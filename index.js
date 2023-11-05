const app = require("./app");

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];
const moviesList = (req, res) => {
  res.send("Welcome to my favourite movie list");
};
app.get("/", moviesList);
const getmovies = (req, res) => {
  res.status(200).json(movies);
};
app.get("/api/movies", getmovies);
app.get("/api/movies/:id", (req, res) => {
  const result = movies.find((c) => c.id === parseInt(req.params.id));
  if (!result) res.status(404).send("no found");
  res.send(result);
});
app.listen(port, () => {
  console.info(`serveur is listening on port ${port}`);
});
on("error", (err) => {
  console.error("error", err.message);
});
const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];
exports.movies = movies;
