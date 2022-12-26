module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "barber",
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
