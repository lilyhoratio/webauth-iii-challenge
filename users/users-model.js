const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findBy,
  findById,
  insert
};

function find() {
  return db("users").select("id", "username", "department");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function insert(user) {
  const [id] = await db("users").insert(user);

  return findById(id);
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
