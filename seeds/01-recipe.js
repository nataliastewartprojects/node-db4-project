exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipe").insert([
        { name: "rice", steps: "Boil the water and add salt" },
        { name: "Eggs", steps: "Add salt" },
        { name: "peach pie", steps: "Add sugar and crust in the oven" },
      ]);
    });
};
