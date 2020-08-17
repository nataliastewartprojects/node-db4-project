exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredient")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredient").insert([
        { name: "salt", quantity: "1.00", recipe_id: "1" },
        { name: "water", quantity: "2.00", recipe_id: "1" },
        {
          name: "pepper",
          quantity: "1,5",
          recipe_id: "1",
        },
        { name: "salt", quantity: "1.00", recipe_id: "2" },
        { name: "water", quantity: "2.00", recipe_id: "2" },
        {
          name: "sugar",
          quantity: "1,5",
          recipe_id: "3",
        },
      ]);
    });
};
