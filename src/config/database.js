module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "barber",
  define: {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};
